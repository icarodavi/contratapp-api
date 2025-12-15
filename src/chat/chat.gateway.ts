import {
    WebSocketGateway,
    WebSocketServer,
    SubscribeMessage,
    OnGatewayConnection,
    OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Namespace, Socket } from 'socket.io';
import { UseGuards } from '@nestjs/common';
import { WsJwtAuthGuard } from '../auth/guards/ws-jwt-auth.guard';
import { ChatService } from './chat.service';
import { PerfilUsuario } from '@prisma/client';

@WebSocketGateway({
    cors: {
        origin: true,
        methods: ['GET', 'POST'],
        credentials: true,
        allowedHeaders: ['Authorization', 'Content-Type'],
    },
    transports: ['websocket', 'polling'],
    namespace: 'chat',
})
@UseGuards(WsJwtAuthGuard)
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {
    @WebSocketServer()
    server: Namespace;

    // Armazena os clientes conectados por edital
    private clientesPorEdital: Map<string, Set<string>> = new Map();

    constructor(private readonly chatService: ChatService) {}

    async handleConnection(client: Socket) {
        const editalId = (client.handshake.query.editalId as string)?.trim();
        const usuarioId = (client.handshake.query.usuarioId as string)?.trim();
        const perfil = client.handshake.query.perfil as PerfilUsuario;

        console.log(`[ChatGateway] Connection attempt - Edital: ${editalId}, User: ${usuarioId}, Perfil: ${perfil}, ClientID: ${client.id}`);

        if (!editalId || !usuarioId || !perfil) {
            console.warn(`[ChatGateway] Missing params, disconnecting ${client.id}`);
            client.disconnect();
            return;
        }

        const temAcesso = await this.chatService.verificarAcessoEdital(
            editalId,
            usuarioId,
            perfil,
        );

        if (!temAcesso) {
            console.warn(`[ChatGateway] Access denied for ${client.id} in ${editalId}`);
            client.disconnect();
            return;
        }

        // Adiciona o cliente ao conjunto de clientes do edital
        if (!this.clientesPorEdital.has(editalId)) {
            this.clientesPorEdital.set(editalId, new Set());
        }
        this.clientesPorEdital.get(editalId)?.add(client.id);

        // Junta-se à sala do edital
        await client.join(editalId);
        console.log(`[ChatGateway] Client ${client.id} joined room ${editalId}`);

        // Envia a contagem de usuários para todos na sala
        const quantidadeUsuarios = this.clientesPorEdital.get(editalId)?.size || 0;
        this.server.to(editalId).emit('usuariosOnline', {
            quantidade: quantidadeUsuarios
        });

        // Envia o histórico de mensagens apenas ao usuário conectado
        const historico = await this.chatService.obterHistoricoMensagens(editalId, usuarioId);

        client.emit('message', {
            type: 'historicoMensagens',
            data: historico,
            messageId: `historico-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        });
    }

    handleDisconnect(client: Socket) {
        console.log(`[ChatGateway] Client disconnected: ${client.id}`);
        const editalId = (client.handshake.query.editalId as string)?.trim();

        if (editalId) {
            // Remove o cliente do conjunto
            const clientes = this.clientesPorEdital.get(editalId);
            if (clientes) {
                clientes.delete(client.id);
                // Clean up empty sets
                if (clientes.size === 0) {
                    this.clientesPorEdital.delete(editalId);
                }

                // Atualiza a contagem para todos os clientes do edital
                const quantidadeUsuarios = clientes.size;
                this.server.to(editalId).emit('usuariosOnline', {
                    quantidade: quantidadeUsuarios
                });
            }
        }
    }

    @SubscribeMessage('enviarMensagem')
    async handleMessage(client: Socket, data: { conteudo: string }) {
        console.log(`[ChatGateway] handleMessage - Client: ${client.id}, Payload:`, data);

        const editalId = (client.handshake.query.editalId as string)?.trim();
        const usuarioId = (client.handshake.query.usuarioId as string)?.trim();
        const perfil = client.handshake.query.perfil as PerfilUsuario;

        console.log(`[ChatGateway] Context - Edital: ${editalId}, User: ${usuarioId}`);

        if (!data || !data.conteudo || !data.conteudo.trim()) {
            console.log('[ChatGateway] Conteúdo vazio ou inválido');
            return;
        }

        // Check if chat is active for the dispute
        const podeEnviar = await this.chatService.podeEnviarMensagem(editalId, perfil);
        console.log(`[ChatGateway] podeEnviar: ${podeEnviar}`);

        if (!podeEnviar) {
            console.warn(`[ChatGateway] Mensagem bloqueada - chat inativo`);
            client.emit('error', 'O chat está desativado para licitantes no momento.');
            return;
        }

        try {
            const mensagem = await this.chatService.criarMensagem(
                editalId,
                usuarioId,
                perfil,
                data.conteudo.trim(),
            );
            console.log('[ChatGateway] Mensagem criada no DB:', mensagem.id);

            const messageId = `mensagem-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

            const payload = {
                type: 'novaMensagem',
                data: mensagem,
                messageId,
            };

            // Envia para todos na sala (inclusive o remetente)
            console.log(`[ChatGateway] Broadcasting to room: ${editalId}`);
            // Fix for Namespace usage: use this.server.adapter.rooms
            const roomSize = this.server.adapter.rooms.get(editalId)?.size || 0;
            console.log(`[ChatGateway] Users in room ${editalId}: ${roomSize}`);

            this.server.to(editalId).emit('message', payload);

            // Ack to sender
            client.emit('message_ack', { status: 'sent', tempId: '?' });

        } catch (error) {
            console.error('[ChatGateway] Erro ao criar/enviar mensagem:', error);
            client.emit('error', 'Erro ao processar mensagem.');
        }
    }

    @SubscribeMessage('solicitarHistorico')
    async handleSolicitarHistorico(client: Socket) {
        const editalId = (client.handshake.query.editalId as string)?.trim();
        const usuarioId = (client.handshake.query.usuarioId as string)?.trim();

        if (editalId && usuarioId) {
            const historico = await this.chatService.obterHistoricoMensagens(editalId, usuarioId);
            client.emit('message', {
                type: 'historicoMensagens',
                data: historico,
                messageId: `historico-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
            });
        }
    }

    // New method for real-time status updates
    async broadcastStatus(editalId: string, ativo: boolean) {
        console.log(`[ChatGateway] Broadcasting status change for ${editalId}: ${ativo}`);
        this.server.to(editalId).emit('chatStatusChanged', { ativo });
        // Optional system message
        const payload = {
            type: 'novaMensagem',
            data: {
                id: `sys-${Date.now()}`,
                conteudo: `O chat foi ${ativo ? 'ativado' : 'desativado'} pelo pregoeiro.`,
                tipoAutor: 'PREGOEIRO',
                createdAt: new Date(),
                autor: { nome: 'Sistema', perfil: 'ADMIN' }
            },
            messageId: `sys-${Date.now()}`
        };
        this.server.to(editalId).emit('message', payload);
    }
}
