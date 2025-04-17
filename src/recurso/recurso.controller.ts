import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { RecursoService } from './recurso.service';
import { CreateRecursoDto } from './dto/create-recurso.dto';
import { UpdateRecursoDto } from './dto/update-recurso.dto';

@ApiTags('recursos')
@Controller('recursos')
export class RecursoController {
    constructor(private readonly recursoService: RecursoService) {}

    @Post()
    @ApiOperation({ summary: 'Criar um novo recurso' })
    @ApiResponse({ status: 201, description: 'Recurso criado com sucesso' })
    @ApiResponse({ status: 400, description: 'Dados inválidos' })
    @ApiResponse({ status: 404, description: 'Edital, licitante ou usuário não encontrado' })
    create(@Body() createRecursoDto: CreateRecursoDto) {
        return this.recursoService.create(createRecursoDto);
    }

    @Get()
    @ApiOperation({ summary: 'Listar todos os recursos' })
    @ApiResponse({ status: 200, description: 'Lista de recursos retornada com sucesso' })
    findAll() {
        return this.recursoService.findAll();
    }

    @Get(':id')
    @ApiOperation({ summary: 'Obter um recurso pelo ID' })
    @ApiResponse({ status: 200, description: 'Recurso encontrado' })
    @ApiResponse({ status: 404, description: 'Recurso não encontrado' })
    findOne(@Param('id', ParseUUIDPipe) id: string) {
        return this.recursoService.findOne(id);
    }

    @Patch(':id')
    @ApiOperation({ summary: 'Atualizar um recurso' })
    @ApiResponse({ status: 200, description: 'Recurso atualizado com sucesso' })
    @ApiResponse({ status: 400, description: 'Dados inválidos' })
    @ApiResponse({ status: 404, description: 'Recurso não encontrado' })
    update(@Param('id', ParseUUIDPipe) id: string, @Body() updateRecursoDto: UpdateRecursoDto) {
        return this.recursoService.update(id, updateRecursoDto);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Remover um recurso' })
    @ApiResponse({ status: 200, description: 'Recurso removido com sucesso' })
    @ApiResponse({ status: 404, description: 'Recurso não encontrado' })
    remove(@Param('id', ParseUUIDPipe) id: string) {
        return this.recursoService.remove(id);
    }
} 