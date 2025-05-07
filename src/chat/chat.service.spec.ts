import { Test, TestingModule } from '@nestjs/testing';
import { ChatService } from './chat.service';
import { ChatGateway } from './chat.gateway';
import { PrismaService } from '../database/database.service';
import { PerfilUsuario } from '@generated/prisma';

describe('ChatService', () => {
    let service: ChatService;
    let prismaService: PrismaService;

    const mockPrismaService = {
        mensagemChat: {
            create: jest.fn(),
            findMany: jest.fn(),
        },
    };

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                ChatService,
                ChatGateway,
                {
                    provide: PrismaService,
                    useValue: mockPrismaService,
                },
            ],
        }).compile();

        service = module.get<ChatService>(ChatService);
        prismaService = module.get<PrismaService>(PrismaService);
    });

    it('deve ser definido', () => {
        expect(service).toBeDefined();
    });

    describe('criarMensagem', () => {
        it('deve criar uma nova mensagem', async () => {
            const mensagemData = {
                conteudo: 'Olá, mundo!',
                usuarioId: '1',
                editalId: '1',
                perfil: 'LICITANTE' as PerfilUsuario
            };

            const mensagemCriada = {
                id: '1',
                conteudo: mensagemData.conteudo,
                editalId: mensagemData.editalId,
                autorId: mensagemData.usuarioId,
                tipoAutor: 'LICITANTE',
                createdAt: new Date(),
                updatedAt: new Date()
            };

            mockPrismaService.mensagemChat.create.mockResolvedValue(mensagemCriada);

            const resultado = await service.criarMensagem(
                mensagemData.editalId,
                mensagemData.usuarioId,
                mensagemData.perfil,
                mensagemData.conteudo
            );

            expect(resultado).toEqual(mensagemCriada);
            expect(mockPrismaService.mensagemChat.create).toHaveBeenCalledWith({
                data: mensagemData,
            });
        });
    });

    describe('obterHistoricoMensagens', () => {
        it('deve retornar o histórico de mensagens', async () => {
            const disputaId = '1';
            const mensagens = [
                {
                    id: '1',
                    conteudo: 'Mensagem 1',
                    usuarioId: '1',
                    disputaId: '1',
                    dataEnvio: new Date(),
                },
                {
                    id: '2',
                    conteudo: 'Mensagem 2',
                    usuarioId: '2',
                    disputaId: '1',
                    dataEnvio: new Date(),
                },
            ];

            mockPrismaService.mensagemChat.findMany.mockResolvedValue(mensagens);

            const resultado = await service.obterHistoricoMensagens(disputaId, '1');

            expect(resultado).toEqual(mensagens);
            expect(mockPrismaService.mensagemChat.findMany).toHaveBeenCalledWith({
                where: { disputaId },
                orderBy: { dataEnvio: 'asc' },
            });
        });
    });
}); 