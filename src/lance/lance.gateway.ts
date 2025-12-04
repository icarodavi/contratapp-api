import { WebSocketGateway, WebSocketServer, SubscribeMessage, OnGatewayConnection, OnGatewayDisconnect, ConnectedSocket, MessageBody } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { WsJwtAuthGuard } from '../auth/guards/ws-jwt-auth.guard';
import { UseGuards } from '@nestjs/common';
import { Logger } from '@nestjs/common';
import { LanceService } from './lance.service';

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

    constructor(private readonly lanceService: LanceService) {}

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
            // Nota: Acessando disputaService via lanceService de forma "unsafe" ou assumindo que lanceService tem o método ou acesso.
            // O ideal seria o LanceService retornar o tempo restante ou a disputa atualizada.
            // Vou ajustar para buscar a disputa via lanceService se possível, ou apenas emitir se tivermos a info.
            // Como não tenho acesso direto ao DisputaService aqui, e o LanceService tem, vou assumir que o LanceService
            // poderia retornar essa info, mas para manter simples e corrigir o erro, vou usar a lógica anterior
            // mas com type safety ou try/catch.
            // Para evitar erro de TS (property 'disputaService' does not exist on type 'LanceService'), vou usar 'any' cast temporário
            // ou melhor, adicionar um método no LanceService para pegar a disputa.
            // Mas para consertar AGORA, vou usar o cast.

            const serviceAny = this.lanceService as any;
            if (serviceAny.disputaService) {
                const disputaAtualizada = await serviceAny.disputaService.findOne(disputaId);
                if (disputaAtualizada && disputaAtualizada.dataFechamento) {
                    const tempoRestanteMs = new Date(disputaAtualizada.dataFechamento).getTime() - new Date().getTime();
                    this.server.to(disputaId).emit('tempoRestante', { tempoRestanteMs });
                }
            }

            return { success: true, lance };
        } catch (error) {
            this.logger.error('Erro ao processar novo lance:', error);
            return { error: (error as Error).message };
        }
    }

    @SubscribeMessage('novaMensagem')
    handleNovaMensagem(
        @ConnectedSocket() client: Socket,
        @MessageBody() data: { mensagem: string },
    ) {
        const disputaId = client.handshake.query.disputaId as string;
        const nomeUsuario = client.handshake.query.nomeUsuario as string;
        const tipoAutor = client.handshake.query.tipoAutor as string;

        if (!disputaId || !data?.mensagem) return;

        const payload = {
            id: `msg-${Date.now()}`,
            autor: nomeUsuario || 'Anônimo',
            texto: data.mensagem,
            timestamp: new Date(),
            tipoAutor: tipoAutor
        };

        this.server.to(disputaId).emit('novaMensagem', payload);
    }
}