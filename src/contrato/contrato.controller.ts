import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ContratoService } from './contrato.service';
import { CreateContratoDto } from './dto/create-contrato.dto';

@Controller('contratos')
export class ContratoController {
    constructor(private readonly contratoService: ContratoService) {}

    @Post()
    create(@Body() createContratoDto: CreateContratoDto) {
        return this.contratoService.create(createContratoDto);
    }

    @Get('edital/:editalId')
    findByEdital(@Param('editalId') editalId: string) {
        return this.contratoService.findByEdital(editalId);
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.contratoService.findOne(id);
    }
}
