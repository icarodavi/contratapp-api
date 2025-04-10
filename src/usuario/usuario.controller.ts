import { Controller, Get, Post, Body, Param, NotFoundException } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Usuários')
@Controller('usuarios')
export class UsuarioController {
    constructor(private readonly usuarioService: UsuarioService) {}

    @Post()
    @ApiOperation({ summary: 'Criar um novo usuário' })
    @ApiResponse({ status: 201, description: 'Usuário criado com sucesso' })
    @ApiResponse({ status: 400, description: 'Dados inválidos' })
    create(@Body() createUsuarioDto: CreateUsuarioDto) {
        return this.usuarioService.create(createUsuarioDto);
    }

    @Get()
    @ApiOperation({ summary: 'Listar todos os usuários' })
    @ApiResponse({ status: 200, description: 'Lista de usuários retornada com sucesso' })
    findAll() {
        return this.usuarioService.findAll();
    }

    @Get(':id')
    @ApiOperation({ summary: 'Buscar usuário por ID' })
    @ApiResponse({ status: 200, description: 'Usuário encontrado' })
    @ApiResponse({ status: 404, description: 'Usuário não encontrado' })
    findOne(@Param('id') id: string) {
        return this.usuarioService.findOne(id);
    }
} 