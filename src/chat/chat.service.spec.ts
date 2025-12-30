import { Test, TestingModule } from '@nestjs/testing';
import { ChatService } from './chat.service';
import { PrismaService } from '@/database/database.service';
import { PerfilUsuario } from '@generated/prisma/client';

const mockPrismaService = {
    mensagemChat: {
        findMany: jest.fn(),
        create: jest.fn(),
    },
};

describe('ChatService', () => {
    let service: ChatService;
    let prisma: typeof mockPrismaService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                ChatService,
                { provide: PrismaService, useValue: mockPrismaService },
            ],
        }).compile();

        service = module.get<ChatService>(ChatService);
        prisma = module.get(PrismaService);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    describe('verificarAcessoEdital', () => {
        it('should return true (stubbed behavior)', async () => {
            const result = await service.verificarAcessoEdital('e1', 'u1', PerfilUsuario.PREGOEIRO);
            expect(result).toBe(true);
        });
    });

    describe('obterHistoricoMensagens', () => {
        it('should return message history', async () => {
            const messages = [{ id: 'm1', conteudo: 'Hello' }];
            prisma.mensagemChat.findMany.mockResolvedValue(messages);

            const result = await service.obterHistoricoMensagens('e1', 'u1');
            expect(result).toEqual(messages);
            expect(prisma.mensagemChat.findMany).toHaveBeenCalledWith(expect.objectContaining({
                where: { editalId: 'e1' },
                orderBy: { createdAt: 'asc' }
            }));
        });
    });

    describe('criarMensagem', () => {
        it('should create a message', async () => {
            const message = { id: 'm1', conteudo: 'Hello' };
            prisma.mensagemChat.create.mockResolvedValue(message);

            const result = await service.criarMensagem('e1', 'u1', PerfilUsuario.PREGOEIRO, 'Hello');
            expect(result).toEqual(message);
            expect(prisma.mensagemChat.create).toHaveBeenCalledWith(expect.objectContaining({
                data: expect.objectContaining({
                    conteudo: 'Hello',
                    editalId: 'e1',
                    autorId: 'u1',
                    tipoAutor: 'PREGOEIRO'
                })
            }));
        });

        it('should create a message for LICITANTE', async () => {
            const message = { id: 'm1', conteudo: 'Hello' };
            prisma.mensagemChat.create.mockResolvedValue(message);

            const result = await service.criarMensagem('e1', 'u1', PerfilUsuario.LICITANTE, 'Hello');
            expect(result).toEqual(message);
            expect(prisma.mensagemChat.create).toHaveBeenCalledWith(expect.objectContaining({
                data: expect.objectContaining({
                    tipoAutor: 'LICITANTE'
                })
            }));
        });
    });
});