import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseGuards } from '@nestjs/common';
import { CatalogoService } from './catalogo.service';
import { CreateCatalogoItemDto } from './dto/create-catalogo-item.dto';
import { UpdateCatalogoItemDto } from './dto/update-catalogo-item.dto';
import { JwtAuthGuard } from '../auth/auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { ApiTags, ApiOperation, ApiBearerAuth, ApiQuery } from '@nestjs/swagger';

@ApiTags('Catálogo')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('catalogo')
export class CatalogoController {
    constructor(private readonly catalogoService: CatalogoService) {}

    @Post()
    @ApiOperation({ summary: 'Criar item no catálogo' })
    create(@Body() createCatalogoItemDto: CreateCatalogoItemDto) {
        return this.catalogoService.create(createCatalogoItemDto);
    }

    @Get()
    @ApiOperation({ summary: 'Listar itens do catálogo' })
    @ApiQuery({ name: 'search', required: false })
    findAll(@Query('search') search?: string) {
        return this.catalogoService.findAll(search);
    }

    @Get(':id')
    @ApiOperation({ summary: 'Buscar item por ID' })
    findOne(@Param('id') id: string) {
        return this.catalogoService.findOne(id);
    }

    @Patch(':id')
    @ApiOperation({ summary: 'Atualizar item' })
    update(@Param('id') id: string, @Body() updateCatalogoItemDto: UpdateCatalogoItemDto) {
        return this.catalogoService.update(id, updateCatalogoItemDto);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Remover item' })
    remove(@Param('id') id: string) {
        return this.catalogoService.remove(id);
    }
}
