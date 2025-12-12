import {
    WebSocketGateway,
    WebSocketServer,
    SubscribeMessage,
    OnGatewayConnection,
    OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { UseGuards } from '@nestjs/common';
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
    server: Server;

    constructor(private readonly chatService: ChatService) {}

    async handleConnection(client: Socket) {
        const editalId = client.handshake.query.editalId as string;
        const usuarioId = client.handshake.query.usuarioId as string;
        const perfil = client.handshake.query.perfil as PerfilUsuario;

        if (!editalId || !usuarioId || !perfil) {
            client.disconnect();
            return;
        }

        const temAcesso = await this.chatService.verificarAcessoEdital(
            editalId,
            usuarioId,
            perfil,
        );

        if (!temAcesso) {
            client.disconnect();
            return;
        }

        // Junta-se à sala do edital
        client.join(editalId);

        // Envia o histórico de mensagens apenas ao usuário conectado
        const historico = await this.chatService.obterHistoricoMensagens(editalId, usuarioId);

        client.emit('message', {
            type: 'historicoMensagens',
            data: historico,
            messageId: `historico-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        });
    }

    handleDisconnect(client: Socket) {
        console.log('Cliente desconectado');
    }

    @SubscribeMessage('enviarMensagem')
    async handleMessage(client: Socket, data: { conteudo: string }) {
        console.log(`[ChatGateway] handleMessage - Client: ${client.id}, Data:`, data);

        const editalId = client.handshake.query.editalId as string;
        const usuarioId = client.handshake.query.usuarioId as string;
        const perfil = client.handshake.query.perfil as PerfilUsuario;

        console.log(`[ChatGateway] Context - Edital: ${editalId}, User: ${usuarioId}, Perfil: ${perfil}`);

        if (!data?.conteudo?.trim()) {
            console.log('[ChatGateway] Conteúdo vazio');
            return;
        }

        // Check if chat is active for the dispute
        const podeEnviar = await this.chatService.podeEnviarMensagem(editalId, perfil);
        console.log(`[ChatGateway] podeEnviar: ${podeEnviar}`);

        if (!podeEnviar) {
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
            console.log('[ChatGateway] Mensagem criada:', mensagem.id);

            const messageId = `mensagem-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

            const payload = {
                type: 'novaMensagem',
                data: mensagem,
                messageId,
            };

            // Envia para todos na sala (inclusive o remetente)
            console.log(`[ChatGateway] Broadcasting to room: ${editalId}`);
            this.server.to(editalId).emit('message', payload);
        } catch (error) {
            console.error('[ChatGateway] Erro ao criar/enviar mensagem:', error);
            client.emit('error', 'Erro ao processar mensagem.');
        }
    }

    @SubscribeMessage('solicitarHistorico')
    async handleSolicitarHistorico(client: Socket) {
        const editalId = client.handshake.query.editalId as string;
        const usuarioId = client.handshake.query.usuarioId as string;

        if (editalId && usuarioId) {
            const historico = await this.chatService.obterHistoricoMensagens(editalId, usuarioId);
            client.emit('message', {
                type: 'historicoMensagens',
                data: historico,
                messageId: `historico-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
            });
        }
    }
}
