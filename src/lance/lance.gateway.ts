import { WebSocketGateway, WebSocketServer, SubscribeMessage, OnGatewayConnection, OnGatewayDisconnect, ConnectedSocket, MessageBody } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { WsJwtAuthGuard } from '../auth/guards/ws-jwt-auth.guard';
import { UseGuards } from '@nestjs/common';
import { Logger } from '@nestjs/common';
import { LanceService } from './lance.service';
import { DisputaService } from '../disputa/disputa.service';
// Chat logic moved to ChatGateway

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
        private readonly disputaService: DisputaService
    ) {}

    handleConnection(client: Socket) {
        this.logger.log(`[LanceGateway] Nova conexão: ${client.id}`);
        try {
            const disputaId = (client.handshake.query.disputaId as string)?.trim();
            const tipoAutor = client.handshake.query.tipoAutor as string;

            this.logger.log(`[LanceGateway] Params: Disputa=${disputaId}, Tipo=${tipoAutor}`);

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

            this.logger.log(`Cliente ${client.id} entrou na sala ${disputaId}`);

        } catch (error) {
            this.logger.error('Erro em handleConnection:', error);
        }
    }

    handleDisconnect(client: Socket) {
        const disputaId = (client.handshake.query.disputaId as string)?.trim();

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
            const disputaId = (client.handshake.query.disputaId as string)?.trim();
            const licitanteId = (client.handshake.query.licitanteId as string)?.trim();
            const ip = client.handshake.address;
            const userAgent = client.handshake.headers['user-agent'];

            this.logger.log(`[LanceGateway] Novo Lance Recebido - Disputa: ${disputaId}, Licitante: ${licitanteId}, Valor: ${data?.valorCentavos}`);

            if (!disputaId || !licitanteId || !data?.valorCentavos) {
                this.logger.warn(`[LanceGateway] Dados inválidos para novo lance`);
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
}