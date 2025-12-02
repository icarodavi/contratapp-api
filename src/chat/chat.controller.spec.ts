import { Test, TestingModule } from '@nestjs/testing';
import { ChatController } from './chat.controller';
import { ChatService } from './chat.service';
import { JwtAuthGuard } from '../auth/auth.guard';

describe('ChatController', () => {
    let controller: ChatController;
    let chatService: ChatService;

    const mockChatService = {
        obterHistoricoMensagens: jest.fn(),
        criarMensagem: jest.fn(),
    };

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [ChatController],
            providers: [
                { provide: ChatService, useValue: mockChatService },
            ],
        })
            .overrideGuard(JwtAuthGuard)
            .useValue({ canActivate: () => true })
            .compile();

        controller = module.get<ChatController>(ChatController);
        chatService = module.get<ChatService>(ChatService);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });

    describe('getHistoricoMensagens', () => {
        it('should return messages when user is authenticated', async () => {
            const req = { user: { id: 'u1' } };
            const editalId = 'e1';
            mockChatService.obterHistoricoMensagens.mockResolvedValue([]);

            await controller.getHistoricoMensagens(editalId, req);

            expect(chatService.obterHistoricoMensagens).toHaveBeenCalledWith(editalId, 'u1');
        });

        it('should throw error when user is not authenticated', async () => {
            const req = { user: undefined };
            const editalId = 'e1';

            await expect(controller.getHistoricoMensagens(editalId, req)).rejects.toThrow('Usuário não autenticado');
        });
    });

    describe('enviarMensagem', () => {
        it('should send message when user is authenticated', async () => {
            const req = { user: { id: 'u1', perfil: 'LICITANTE' } };
            const editalId = 'e1';
            const body = { conteudo: 'hello' };
            mockChatService.criarMensagem.mockResolvedValue({});

            await controller.enviarMensagem(editalId, body, req);

            expect(chatService.criarMensagem).toHaveBeenCalledWith(editalId, 'u1', 'LICITANTE', 'hello');
        });

        it('should throw error when user is not authenticated', async () => {
            const req = { user: undefined };
            const editalId = 'e1';
            const body = { conteudo: 'hello' };

            await expect(controller.enviarMensagem(editalId, body, req)).rejects.toThrow('Usuário não autenticado');
        });

        it('should throw error when user profile is missing', async () => {
            const req = { user: { id: 'u1' } }; // Missing perfil
            const editalId = 'e1';
            const body = { conteudo: 'hello' };

            await expect(controller.enviarMensagem(editalId, body, req)).rejects.toThrow('Usuário não autenticado');
        });
    });
});
