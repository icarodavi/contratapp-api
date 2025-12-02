import { Test, TestingModule } from '@nestjs/testing';
import { RelatorioController } from './relatorio.controller';
import { RelatorioService } from './relatorio.service';
import { Response } from 'express';

describe('RelatorioController', () => {
    let controller: RelatorioController;
    let service: RelatorioService;

    const mockRelatorioService = {
        gerarEditalPdf: jest.fn(),
        gerarAtaPdf: jest.fn(),
    };

    const mockResponse = {
        set: jest.fn(),
        end: jest.fn(),
    } as unknown as Response;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [RelatorioController],
            providers: [
                { provide: RelatorioService, useValue: mockRelatorioService },
            ],
        }).compile();

        controller = module.get<RelatorioController>(RelatorioController);
        service = module.get<RelatorioService>(RelatorioService);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });

    describe('gerarEditalPdf', () => {
        it('should generate edital PDF', async () => {
            const buffer = Buffer.from('pdf content');
            mockRelatorioService.gerarEditalPdf.mockResolvedValue(buffer);

            await controller.gerarEditalPdf('e1', mockResponse);

            expect(service.gerarEditalPdf).toHaveBeenCalledWith('e1');
            expect(mockResponse.set).toHaveBeenCalledWith({
                'Content-Type': 'application/pdf',
                'Content-Disposition': 'attachment; filename=edital-e1.pdf',
                'Content-Length': buffer.length,
            });
            expect(mockResponse.end).toHaveBeenCalledWith(buffer);
        });
    });

    describe('gerarAtaPdf', () => {
        it('should generate ata PDF', async () => {
            const buffer = Buffer.from('pdf content');
            mockRelatorioService.gerarAtaPdf.mockResolvedValue(buffer);

            await controller.gerarAtaPdf('d1', mockResponse);

            expect(service.gerarAtaPdf).toHaveBeenCalledWith('d1');
            expect(mockResponse.set).toHaveBeenCalledWith({
                'Content-Type': 'application/pdf',
                'Content-Disposition': 'attachment; filename=ata-d1.pdf',
                'Content-Length': buffer.length,
            });
            expect(mockResponse.end).toHaveBeenCalledWith(buffer);
        });
    });
});
