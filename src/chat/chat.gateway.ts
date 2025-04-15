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

@WebSocketGateway({
    cors: {
        origin: '*',
        methods: ['GET', 'POST'],
        credentials: true,
        allowedHeaders: ['Authorization', 'Content-Type']
    },
    transports: ['websocket', 'polling'],
    namespace: '/'
})
@UseGuards(WsJwtAuthGuard)
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {
    @WebSocketServer()
    server: Server;

    constructor(private readonly chatService: ChatService) {}

    async handleConnection(client: Socket) {
        const editalId = client.handshake.query.editalId as string;
        if (!editalId) {
            client.disconnect();
            return;
        }

        // Verifica se o usuário tem acesso ao edital
        // const usuarioId = client.data.user.id;
        const usuarioId = '02da7616-1b80-4a90-9f46-036547d2225d';
        // const perfil = client.data.user.perfil;
        const perfil = 'PREGOEIRO';
        // const temAcesso = await this.chatService.verificarAcessoEdital(editalId, usuarioId, perfil);
        const temAcesso = true;

        if (!temAcesso) {
            client.disconnect();
            return;
        }

        // Entra na sala do edital
        client.join(editalId);

        // Envia o histórico de mensagens
        const historico = await this.chatService.obterHistoricoMensagens(editalId, usuarioId);
        client.emit('message', {
            type: 'historicoMensagens',
            data: historico
        });
    }

    handleDisconnect(client: Socket) {
        console.log('Cliente desconectado');
    }

    @SubscribeMessage('enviarMensagem')
    async handleMessage(client: Socket, data: { conteudo: string }) {
        console.log(data)
        const editalId = client.handshake.query.editalId as string;
        const usuarioId = client.data.user.id;
        const perfil = client.data.user.perfil;

        const mensagem = await this.chatService.criarMensagem(
            editalId,
            usuarioId,
            perfil,
            data.conteudo
        );
        console.log(mensagem)
        // Envia a mensagem para todos na sala do edital
        this.server.to(editalId).emit('message', {
            type: 'novaMensagem',
            data: mensagem
        });
    }
} 