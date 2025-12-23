import { Controller, Get, Post, Body, Param, Res, Patch, Delete } from '@nestjs/common';
import { Response } from 'express';
import { ContratoService } from './contrato.service';
import { CreateContratoDto } from './dto/create-contrato.dto';
import { UpdateContratoDto } from './dto/update-contrato.dto';

@Controller('contratos')
export class ContratoController {
    constructor(private readonly contratoService: ContratoService) {}

    @Post()
    create(@Body() createContratoDto: CreateContratoDto) {
        return this.contratoService.create(createContratoDto);
    }

    @Get()
    findAll() {
        return this.contratoService.findAll();
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateContratoDto: UpdateContratoDto) {
        return this.contratoService.update(id, updateContratoDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.contratoService.remove(id);
    }

    @Get('edital/:editalId')
    findByEdital(@Param('editalId') editalId: string) {
        return this.contratoService.findByEdital(editalId);
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.contratoService.findOne(id);
    }

    @Get(':id/pdf')
    async generatePdf(@Param('id') id: string, @Res() res: Response) {
        const buffer = await this.contratoService.generatePdf(id);

        res.set({
            'Content-Type': 'application/pdf',
            'Content-Disposition': `attachment; filename=contrato-${id}.pdf`,
            'Content-Length': buffer.length,
        });

        res.end(buffer);
    }
}
