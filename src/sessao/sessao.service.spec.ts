import { Test, TestingModule } from '@nestjs/testing';
import { SessaoService } from './sessao.service';
import { PrismaService } from '../database/database.service';
import { NotFoundException } from '@nestjs/common';

const mockPrismaService = {
    sessao: {
        create: jest.fn(),
        findMany: jest.fn(),
        findUnique: jest.fn(),
        update: jest.fn(),
        delete: jest.fn(),
    },
};

describe('SessaoService', () => {
    let service: SessaoService;
    let prisma: typeof mockPrismaService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                SessaoService,
                { provide: PrismaService, useValue: mockPrismaService },
            ],
        }).compile();

        service = module.get<SessaoService>(SessaoService);
        prisma = module.get(PrismaService);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    describe('create', () => {
        it('should create a session', async () => {
            const dto = { licitanteId: 'l1', disputaId: 'd1', ip: '127.0.0.1', hash: 'abc', inicio: new Date() };
            prisma.sessao.create.mockResolvedValue({ id: 's1', ...dto });

            const result = await service.create(dto);
            expect(prisma.sessao.create).toHaveBeenCalled();
            expect(result).toHaveProperty('id', 's1');
        });
    });

    describe('findAll', () => {
        it('should return all sessions', async () => {
            prisma.sessao.findMany.mockResolvedValue([{ id: 's1' }]);
            const result = await service.findAll();
            expect(result).toHaveLength(1);
        });
    });

    describe('findOne', () => {
        it('should return a session if found', async () => {
            prisma.sessao.findUnique.mockResolvedValue({ id: 's1' });
            const result = await service.findOne('s1');
            expect(result).toHaveProperty('id', 's1');
        });

        it('should throw NotFoundException if not found', async () => {
            prisma.sessao.findUnique.mockResolvedValue(null);
            await expect(service.findOne('s1')).rejects.toThrow(NotFoundException);
        });
    });

    describe('findByDisputa', () => {
        it('should return sessions for a dispute', async () => {
            prisma.sessao.findMany.mockResolvedValue([{ id: 's1', disputaId: 'd1' }]);
            const result = await service.findByDisputa('d1');
            expect(result).toHaveLength(1);
            expect(prisma.sessao.findMany).toHaveBeenCalledWith(expect.objectContaining({ where: { disputaId: 'd1' } }));
        });
    });

    describe('findByLicitante', () => {
        it('should return sessions for a licitante', async () => {
            prisma.sessao.findMany.mockResolvedValue([{ id: 's1', licitanteId: 'l1' }]);
            const result = await service.findByLicitante('l1');
            expect(result).toHaveLength(1);
            expect(prisma.sessao.findMany).toHaveBeenCalledWith(expect.objectContaining({ where: { licitanteId: 'l1' } }));
        });
    });

    describe('update', () => {
        it('should update a session', async () => {
            prisma.sessao.findUnique.mockResolvedValue({ id: 's1' });
            prisma.sessao.update.mockResolvedValue({ id: 's1', ip: '192.168.1.1' });

            const result = await service.update('s1', { ip: '192.168.1.1' });
            expect(result.ip).toBe('192.168.1.1');
        });

        it('should throw NotFoundException if session not found', async () => {
            prisma.sessao.findUnique.mockResolvedValue(null);
            await expect(service.update('s1', {})).rejects.toThrow(NotFoundException);
        });
    });

    describe('remove', () => {
        it('should remove a session', async () => {
            prisma.sessao.findUnique.mockResolvedValue({ id: 's1' });
            prisma.sessao.delete.mockResolvedValue({ id: 's1' });

            await service.remove('s1');
            expect(prisma.sessao.delete).toHaveBeenCalled();
        });

        it('should throw NotFoundException if session not found', async () => {
            prisma.sessao.findUnique.mockResolvedValue(null);
            await expect(service.remove('s1')).rejects.toThrow(NotFoundException);
        });
    });
});
