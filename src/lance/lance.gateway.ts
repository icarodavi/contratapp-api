import { WebSocketGateway, WebSocketServer, SubscribeMessage, OnGatewayConnection, OnGatewayDisconnect, ConnectedSocket, MessageBody } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { WsJwtAuthGuard } from '../auth/guards/ws-jwt-auth.guard';
import { UseGuards } from '@nestjs/common';
import { Logger } from '@nestjs/common';
import { LanceService } from './lance.service';
import { DisputaService } from '../disputa/disputa.service';
import { ChatService } from '../chat/chat.service';
import { PerfilUsuario } from '@prisma/client';

@WebSocketGateway({
    cors: {
        origin: true,
        methods: ['GET', 'POST'],
        credentials: true,
        allowedHeaders: ['Content-Type', 'Accept', 'Authorization']
    },
    namespace: 'lances'
})
@UseGuards(WsJwtAuthGuard)
export class LanceGateway implements OnGatewayConnection, OnGatewayDisconnect {
    @WebSocketServer()
    server: Server;

    private readonly logger = new Logger(LanceGateway.name);
    private clientesPorDisputa: Map<string, Set<string>> = new Map();

    constructor(
        private readonly lanceService: LanceService,
        private readonly disputaService: DisputaService,
        private readonly chatService: ChatService
    ) {}

    handleConnection(client: Socket) {
        try {
            const disputaId = client.handshake.query.disputaId as string;
            const tipoAutor = client.handshake.query.tipoAutor as string;

            if (!disputaId) {
                this.logger.warn(`Tentativa de conexão sem disputaId: ${client.id}`);
                client.disconnect();
                return;
            }

            // Adiciona o cliente ao conjunto de clientes da disputa
            if (!this.clientesPorDisputa.has(disputaId)) {
                this.clientesPorDisputa.set(disputaId, new Set());
            }
            this.clientesPorDisputa.get(disputaId)?.add(client.id);

            // Adiciona o cliente à sala da disputa
            client.join(disputaId);

            // Envia a contagem de usuários para todos os participantes da disputa
            const quantidadeUsuarios = this.clientesPorDisputa.get(disputaId)?.size || 0;
            this.server.to(disputaId).emit('usuariosOnline', {
                quantidade: quantidadeUsuarios,
                tipoAutor: tipoAutor
            });

            // Envia o último lance para o novo cliente
            this.lanceService.buscarUltimoLance(disputaId).then(ultimoLance => {
                if (ultimoLance) {
                    client.emit('ultimoLance', ultimoLance);
                }
            });

            // Join the socket room for this dispute
            client.join(disputaId);
            this.logger.log(`Cliente ${client.id} entrou na sala ${disputaId}`);

            // Envia o histórico de mensagens
            // Precisamos do editalId para buscar o histórico de mensagens
            const usuarioId = (client.handshake.query.licitanteId || client.handshake.query.usuarioId) as string;

            // Otimização: buscar editalId do serviço de disputa se possível, ou buscar a disputa
            this.disputaService.findOne(disputaId).then(disputa => {
                if (disputa && disputa.editalId) {
                    this.chatService.obterHistoricoMensagens(disputa.editalId, usuarioId).then(historico => {
                        if (historico && historico.length > 0) {
                            historico.forEach(msg => {
                                const payload = {
                                    id: msg.id,
                                    autor: msg.autor.nome,
                                    texto: msg.conteudo,
                                    timestamp: msg.createdAt,
                                    tipoAutor: msg.tipoAutor
                                };
                                client.emit('novaMensagem', payload);
                            });
                        }
                    });
                }
            }).catch(error => {
                this.logger.warn(`Erro ao buscar dados da disputa ${disputaId} na conexão: ${error.message}`);
            });

        } catch (error) {
            this.logger.error('Erro em handleConnection:', error);
        }
    }

    handleDisconnect(client: Socket) {
        const disputaId = client.handshake.query.disputaId as string;

        if (disputaId) {
            // Remove o cliente do conjunto
            const clientes = this.clientesPorDisputa.get(disputaId);
            if (clientes) {
                clientes.delete(client.id);

                // Atualiza a contagem para todos os clientes da disputa
                const quantidadeUsuarios = clientes.size;
                this.server.to(disputaId).emit('usuariosOnline', {
                    quantidade: quantidadeUsuarios
                });
            }
        }
    }

    @SubscribeMessage('novoLance')
    async handleNovoLance(
        @ConnectedSocket() client: Socket,
        @MessageBody() data: { valorCentavos: number },
    ) {
        try {
            const disputaId = client.handshake.query.disputaId as string;
            const licitanteId = client.handshake.query.licitanteId as string;
            const ip = client.handshake.address;
            const userAgent = client.handshake.headers['user-agent'];

            if (!disputaId || !licitanteId || !data?.valorCentavos) {
                return { error: 'Dados inválidos' };
            }

            const lance = await this.lanceService.registrarLance(
                disputaId,
                licitanteId,
                data.valorCentavos,
                ip,
                userAgent || '',
            );

            // Emite o novo lance para todos os participantes da disputa
            this.server.to(disputaId).emit('lanceRegistrado', lance);

            // Calcula e emite o novo tempo restante
            const disputaAtualizada = await this.disputaService.findOne(disputaId);
            if (disputaAtualizada && disputaAtualizada.fimPrevisto) {
                const tempoRestanteMs = new Date(disputaAtualizada.fimPrevisto).getTime() - new Date().getTime();
                this.server.to(disputaId).emit('tempoRestante', { tempoRestanteMs });
            }

            return { success: true, lance };
        } catch (error) {
            this.logger.error('Erro ao processar novo lance:', error);
            return { error: (error as Error).message };
        }
    }

    @SubscribeMessage('novaMensagem')
    async handleNovaMensagem(
        @ConnectedSocket() client: Socket,
        @MessageBody() data: { mensagem: string },
    ) {
        const disputaId = client.handshake.query.disputaId as string;
        const usuarioId = (client.handshake.query.licitanteId || client.handshake.query.usuarioId) as string;

        this.logger.log(`[NovaMensagem] Recebida de ${usuarioId} para disputa ${disputaId}: ${data?.mensagem}`);

        const nomeUsuario = client.handshake.query.nomeUsuario as string;
        const tipoAutorQuery = client.handshake.query.tipoAutor as string;

        // Map tipoAutor from string to PerfilUsuario
        let perfil: PerfilUsuario;
        if (tipoAutorQuery?.toUpperCase() === 'PREGOEIRO') perfil = 'PREGOEIRO';
        else if (tipoAutorQuery?.toUpperCase() === 'ADMIN') perfil = 'ADMIN';
        else perfil = 'LICITANTE';

        if (!disputaId || !data?.mensagem) {
            this.logger.warn(`[NovaMensagem] Dados inválidos: disputaId=${disputaId}, mensagem=${data?.mensagem}`);
            return;
        }

        try {
            // Get dispute to find editalId
            const disputa = await this.disputaService.findOne(disputaId);
            if (!disputa || !disputa.editalId) {
                this.logger.error(`Disputa ${disputaId} não encontrada ou sem editalId.`);
                return;
            }
            const editalId = disputa.editalId;

            // Check availability
            const podeEnviar = await this.chatService.podeEnviarMensagem(editalId, perfil);
            if (!podeEnviar) {
                this.logger.warn(`[NovaMensagem] Envio não permitido para disputa ${disputaId}`);
                return;
            }

            const mensagemServico = await this.chatService.criarMensagem(
                editalId,
                usuarioId,
                perfil,
                data.mensagem
            );

            this.logger.log(`[NovaMensagem] Mensagem criada ID: ${mensagemServico.id}. Emitindo para a sala.`);

            const payload = {
                id: mensagemServico.id,
                autor: mensagemServico.autor.nome,
                texto: mensagemServico.conteudo,
                timestamp: mensagemServico.createdAt,
                tipoAutor: mensagemServico.tipoAutor
            };

            this.server.to(disputaId).emit('novaMensagem', payload);
            return { success: true, messageId: mensagemServico.id };
        } catch (error) {
            this.logger.error('Erro ao enviar mensagem:', error);
            return { error: 'Internal Server Error' };
        }
    }
}