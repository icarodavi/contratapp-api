import { Test, TestingModule } from '@nestjs/testing';
import { ChatGateway } from './chat.gateway';
import { ChatService } from './chat.service';
import { Socket } from 'socket.io';
import { PerfilUsuario } from '@generated/prisma/client';

describe('ChatGateway', () => {
    let gateway: ChatGateway;
    let chatService: ChatService;

    const mockChatService = {
        verificarAcessoEdital: jest.fn(),
        obterHistoricoMensagens: jest.fn(),
        criarMensagem: jest.fn(),
    };

    const mockSocket = {
        handshake: {
            query: {
                editalId: 'e1',
                usuarioId: 'u1',
                perfil: PerfilUsuario.PREGOEIRO,
            },
        },
        disconnect: jest.fn(),
        join: jest.fn(),
        emit: jest.fn(),
        id: 'socket1',
    } as unknown as Socket;

    const mockServer = {
        to: jest.fn().mockReturnThis(),
        emit: jest.fn(),
    };

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                ChatGateway,
                { provide: ChatService, useValue: mockChatService },
            ],
        }).compile();

        gateway = module.get<ChatGateway>(ChatGateway);
        chatService = module.get<ChatService>(ChatService);
        gateway.server = mockServer as any;
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    describe('handleConnection', () => {
        it('should disconnect if missing query params', async () => {
            const client = { ...mockSocket, handshake: { query: {} } } as unknown as Socket;
            await gateway.handleConnection(client);
            expect(client.disconnect).toHaveBeenCalled();
        });

        it('should disconnect if no access', async () => {
            mockChatService.verificarAcessoEdital.mockResolvedValue(false);
            await gateway.handleConnection(mockSocket);
            expect(mockSocket.disconnect).toHaveBeenCalled();
        });

        it('should join room and emit history if access granted', async () => {
            mockChatService.verificarAcessoEdital.mockResolvedValue(true);
            mockChatService.obterHistoricoMensagens.mockResolvedValue([{ id: 'm1' }]);

            await gateway.handleConnection(mockSocket);

            expect(mockSocket.join).toHaveBeenCalledWith('e1');
            expect(mockSocket.emit).toHaveBeenCalledWith('message', expect.objectContaining({
                type: 'historicoMensagens',
                data: [{ id: 'm1' }]
            }));
        });
    });

    describe('handleMessage', () => {
        it('should return if content is empty', async () => {
            await gateway.handleMessage(mockSocket, { conteudo: '' });
            expect(mockChatService.criarMensagem).not.toHaveBeenCalled();
        });

        it('should create and broadcast message', async () => {
            const message = { id: 'm1', conteudo: 'Hello' };
            mockChatService.criarMensagem.mockResolvedValue(message);

            await gateway.handleMessage(mockSocket, { conteudo: 'Hello' });

            expect(mockChatService.criarMensagem).toHaveBeenCalledWith('e1', 'u1', PerfilUsuario.PREGOEIRO, 'Hello');
            expect(mockServer.to).toHaveBeenCalledWith('e1');
            expect(mockServer.emit).toHaveBeenCalledWith('message', expect.objectContaining({
                type: 'novaMensagem',
                data: message
            }));
        });
    });

    describe('handleDisconnect', () => {
        it('should log disconnection', () => {
            const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
            gateway.handleDisconnect(mockSocket);
            expect(consoleSpy).toHaveBeenCalledWith('Cliente desconectado');
            consoleSpy.mockRestore();
        });
    });
});
