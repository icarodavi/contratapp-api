import {
    WebSocketGateway,
    WebSocketServer,
    SubscribeMessage,
    OnGatewayConnection,
    OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { UseGuards } from '@nestjs/common';
import { WsJwtAuthGuard } from '../auth/guards/ws-jwt-auth.guard';
import { ChatService } from './chat.service';
import { Usuario } from '@generated/prisma';

@WebSocketGateway({
    cors: {
        origin: '*',
    },
})
@UseGuards(WsJwtAuthGuard)
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {
    @WebSocketServer()
    server: Server;

    constructor(private readonly chatService: ChatService) {}

    async handleConnection(client: Socket) {
        const editalId = client.handshake.query.editalId as string;
        const usuario = client.data.usuario as Usuario;

        if (!editalId) {
            client.disconnect();
            return;
        }

        // Verifica se o usuário tem acesso ao edital
        const temAcesso = await this.chatService.verificarAcessoEdital(usuario.id, editalId);
        if (!temAcesso) {
            client.disconnect();
            return;
        }

        // Entra na sala do edital
        client.join(`edital:${editalId}`);

        // Envia histórico de mensagens
        const mensagens = await this.chatService.obterHistoricoMensagens(editalId);
        client.emit('historicoMensagens', mensagens);
    }

    handleDisconnect(client: Socket) {
        // Lógica de desconexão se necessário
    }

    @SubscribeMessage('enviarMensagem')
    async handleMessage(client: Socket, payload: { conteudo: string }) {
        const editalId = client.handshake.query.editalId as string;
        const usuario = client.data.usuario as Usuario;

        const mensagem = await this.chatService.criarMensagem({
            editalId,
            autorId: usuario.id,
            tipoAutor: usuario.perfil === 'PREGOEIRO' ? 'PREGOEIRO' : 'LICITANTE',
            conteudo: payload.conteudo,
        });

        // Envia a mensagem para todos na sala do edital
        this.server.to(`edital:${editalId}`).emit('novaMensagem', mensagem);
    }
} 