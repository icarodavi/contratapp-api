import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '@/database/database.service';
import { EditalService } from './edital.service';
import { CreateEditalDto } from './dto/create-edital.dto';
import { BadRequestException, NotFoundException } from '@nestjs/common';
import { ModalidadeLicitação, CritérioJulgamento } from '@generated/prisma/client';

describe('EditalService', () => {
    let service: EditalService;
    let prisma: PrismaService;

    const mockPrismaService = {
        edital: {
            create: jest.fn(),
            findMany: jest.fn(),
            findUnique: jest.fn(),
            findFirst: jest.fn(),
            update: jest.fn(),
            delete: jest.fn(),
        },
    };

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                EditalService,
                {
                    provide: PrismaService,
                    useValue: mockPrismaService,
                },
            ],
        }).compile();

        service = module.get<EditalService>(EditalService);
        prisma = module.get<PrismaService>(PrismaService);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    describe('create', () => {
        it('deve criar um novo edital com sucesso', async () => {
            const createEditalDto: CreateEditalDto = {
                numero: '001/2024',
                objeto: 'Teste de objeto',
                dataAbertura: new Date(),
                status: 'RASCUNHO',
                modalidade: ModalidadeLicitação.PREGÃO_ELETRÔNICO,
                criterioJulgamento: CritérioJulgamento.MENOR_PRECO,
            };

            const editalCriado = {
                id: '1',
                ...createEditalDto,
                ativo: true,
                createdAt: new Date(),
                updatedAt: new Date(),
            };

            mockPrismaService.edital.create.mockResolvedValue(editalCriado);

            const result = await service.create(createEditalDto);

            expect(result).toEqual(editalCriado);
            expect(mockPrismaService.edital.create).toHaveBeenCalledWith({
                data: {
                    ...createEditalDto,
                    modalidade: createEditalDto.modalidade,
                    criterioJulgamento: createEditalDto.criterioJulgamento,
                },
            });
        });

        it('deve lançar BadRequestException se o número do edital já existir', async () => {
            const createEditalDto: CreateEditalDto = {
                numero: '001/2024',
                objeto: 'Teste de objeto',
                dataAbertura: new Date(),
                status: 'RASCUNHO',
                modalidade: ModalidadeLicitação.PREGÃO_ELETRÔNICO,
                criterioJulgamento: CritérioJulgamento.MENOR_PRECO,
            };

            mockPrismaService.edital.create.mockRejectedValue({
                code: 'P2002',
                meta: { target: ['numero'] },
            });

            await expect(service.create(createEditalDto)).rejects.toThrow(
                BadRequestException,
            );
        });
    });

    describe('findAll', () => {
        it('deve retornar todos os editais', async () => {
            mockPrismaService.edital.findMany.mockResolvedValue([{ id: '1' }]);
            const result = await service.findAll();
            expect(result).toHaveLength(1);
        });
    });

    describe('findOne', () => {
        it('deve retornar um edital pelo ID', async () => {
            const edital = { id: '1' };
            mockPrismaService.edital.findUnique.mockResolvedValue(edital);
            const result = await service.findOne('1');
            expect(result).toEqual(edital);
        });

        it('deve lançar NotFoundException se o edital não existir', async () => {
            mockPrismaService.edital.findUnique.mockResolvedValue(null);
            await expect(service.findOne('1')).rejects.toThrow(NotFoundException);
        });
    });

    describe('findByNumero', () => {
        it('deve retornar um edital pelo número', async () => {
            const edital = { id: '1', numero: '001/2024' };
            mockPrismaService.edital.findFirst.mockResolvedValue(edital);
            const result = await service.findByNumero('001/2024');
            expect(result).toEqual(edital);
        });
    });

    describe('update', () => {
        it('deve atualizar um edital', async () => {
            mockPrismaService.edital.findUnique.mockResolvedValue({ id: '1' });
            mockPrismaService.edital.update.mockResolvedValue({ id: '1', objeto: 'Updated' });

            const result = await service.update('1', { objeto: 'Updated' });
            expect(result.objeto).toBe('Updated');
        });

        it('deve lançar NotFoundException se edital não encontrado', async () => {
            mockPrismaService.edital.findUnique.mockResolvedValue(null);
            await expect(service.update('1', {})).rejects.toThrow(NotFoundException);
        });
    });

    describe('remove', () => {
        it('deve remover um edital', async () => {
            mockPrismaService.edital.findUnique.mockResolvedValue({ id: '1' });
            mockPrismaService.edital.delete.mockResolvedValue({ id: '1' });

            await service.remove('1');
            expect(mockPrismaService.edital.delete).toHaveBeenCalled();
        });

        it('deve lançar NotFoundException se edital não encontrado', async () => {
            mockPrismaService.edital.findUnique.mockResolvedValue(null);
            await expect(service.remove('1')).rejects.toThrow(NotFoundException);
        });
    });
});