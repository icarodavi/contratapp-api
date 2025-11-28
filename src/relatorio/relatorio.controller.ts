import { Controller, Get, Param, Res, NotFoundException } from '@nestjs/common';
import { RelatorioService } from './relatorio.service';
import { Response } from 'express';
import { ApiTags, ApiOperation, ApiProduces } from '@nestjs/swagger';

@ApiTags('Relatórios')
@Controller('relatorios')
export class RelatorioController {
    constructor(private readonly relatorioService: RelatorioService) {}

    @Get('edital/:id/pdf')
    @ApiOperation({ summary: 'Gerar PDF do Edital' })
    @ApiProduces('application/pdf')
    async gerarEditalPdf(@Param('id') id: string, @Res() res: Response) {
        const buffer = await this.relatorioService.gerarEditalPdf(id);

        res.set({
            'Content-Type': 'application/pdf',
            'Content-Disposition': `attachment; filename=edital-${id}.pdf`,
            'Content-Length': buffer.length,
        });

        res.end(buffer);
    }

    @Get('ata/:id/pdf')
    @ApiOperation({ summary: 'Gerar PDF da Ata da Disputa' })
    @ApiProduces('application/pdf')
    async gerarAtaPdf(@Param('id') id: string, @Res() res: Response) {
        const buffer = await this.relatorioService.gerarAtaPdf(id);

        res.set({
            'Content-Type': 'application/pdf',
            'Content-Disposition': `attachment; filename=ata-${id}.pdf`,
            'Content-Length': buffer.length,
        });

        res.end(buffer);
    }
}
