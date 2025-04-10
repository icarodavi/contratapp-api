import { Controller, Get, Post, Body, Param, NotFoundException } from '@nestjs/common';
import { EditalService } from './edital.service';
import { CreateEditalDto } from './dto/create-edital.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Editais')
@Controller('editais')
export class EditalController {
    constructor(private readonly editalService: EditalService) {}

    @Post()
    @ApiOperation({ summary: 'Criar um novo edital' })
    @ApiResponse({ status: 201, description: 'Edital criado com sucesso' })
    @ApiResponse({ status: 400, description: 'Dados inválidos' })
    create(@Body() createEditalDto: CreateEditalDto) {
        return this.editalService.create(createEditalDto);
    }

    @Get()
    @ApiOperation({ summary: 'Listar todos os editais' })
    @ApiResponse({ status: 200, description: 'Lista de editais retornada com sucesso' })
    findAll() {
        return this.editalService.findAll();
    }

    @Get(':id')
    @ApiOperation({ summary: 'Buscar edital por ID' })
    @ApiResponse({ status: 200, description: 'Edital encontrado' })
    @ApiResponse({ status: 404, description: 'Edital não encontrado' })
    findOne(@Param('id') id: string) {
        return this.editalService.findOne(id);
    }

    @Get('numero/:numero')
    @ApiOperation({ summary: 'Buscar edital por número' })
    @ApiResponse({ status: 200, description: 'Edital encontrado' })
    @ApiResponse({ status: 404, description: 'Edital não encontrado' })
    findByNumero(@Param('numero') numero: string) {
        return this.editalService.findByNumero(numero);
    }
} 