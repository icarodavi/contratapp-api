import { Controller, Get, Param, Res, NotFoundException, UseGuards } from '@nestjs/common';
import { RelatorioService } from './relatorio.service';
import { Response } from 'express';
import { ApiTags, ApiOperation, ApiProduces, ApiBearerAuth, ApiResponse } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { PerfilUsuario } from '@generated/prisma/client';

@ApiTags('Relatórios')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('relatorios')
export class RelatorioController {
    constructor(private readonly relatorioService: RelatorioService) {}

    @Get('edital/:id/pdf')
    @Roles(PerfilUsuario.ADMIN, PerfilUsuario.PREGOEIRO, PerfilUsuario.LICITANTE, PerfilUsuario.VISUALIZADOR)
    @ApiOperation({ summary: 'Gerar PDF do Edital' })
    @ApiProduces('application/pdf')
    @ApiResponse({ status: 200, description: 'PDF gerado com sucesso' })
    @ApiResponse({ status: 401, description: 'Não autorizado' })
    @ApiResponse({ status: 404, description: 'Edital não encontrado' })
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
    @Roles(PerfilUsuario.ADMIN, PerfilUsuario.PREGOEIRO, PerfilUsuario.LICITANTE, PerfilUsuario.VISUALIZADOR)
    @ApiOperation({ summary: 'Gerar PDF da Ata da Disputa' })
    @ApiProduces('application/pdf')
    @ApiResponse({ status: 200, description: 'PDF gerado com sucesso' })
    @ApiResponse({ status: 401, description: 'Não autorizado' })
    @ApiResponse({ status: 404, description: 'Disputa não encontrada' })
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
