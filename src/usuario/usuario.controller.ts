import { Controller, Get, Post, Body, Param, NotFoundException, UseGuards, Put, Patch, UseInterceptors, UploadedFile, Query, Delete } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { ApiOperation, ApiResponse, ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { LoginDto } from './dto/auth.dto';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { UpdateSenhaDto } from './dto/update-senha.dto';

@ApiTags('Usuários')
@Controller('usuarios')
export class UsuarioController {
    constructor(private readonly usuarioService: UsuarioService) {}

    @Post('register')
    @ApiOperation({ summary: 'Registrar um novo usuário' })
    @ApiResponse({ status: 201, description: 'Usuário criado com sucesso' })
    @ApiResponse({ status: 400, description: 'Dados inválidos' })
    register(@Body() createUsuarioDto: CreateUsuarioDto) {
        return this.usuarioService.create(createUsuarioDto);
    }

    @Post('login')
    @ApiOperation({ summary: 'Login de usuário' })
    @ApiResponse({ status: 200, description: 'Login realizado com sucesso' })
    @ApiResponse({ status: 401, description: 'Credenciais inválidas' })
    login(@Body() loginDto: LoginDto) {
        return this.usuarioService.login(loginDto);
    }

    @Get()
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    @ApiOperation({ summary: 'Listar todos os usuários' })
    @ApiResponse({ status: 200, description: 'Lista de usuários retornada com sucesso' })
    @ApiResponse({ status: 401, description: 'Não autorizado' })
    findAll(@Query('search') search?: string) {
        return this.usuarioService.findAll(search);
    }

    @Get(':id')
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    @ApiOperation({ summary: 'Buscar usuário por ID' })
    @ApiResponse({ status: 200, description: 'Usuário encontrado' })
    @ApiResponse({ status: 401, description: 'Não autorizado' })
    @ApiResponse({ status: 404, description: 'Usuário não encontrado' })
    findOne(@Param('id') id: string) {
        return this.usuarioService.findOne(id);
    }

    @Put(':id/senha')
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    @ApiOperation({ summary: 'Atualizar senha do usuário' })
    @ApiResponse({ status: 200, description: 'Senha atualizada com sucesso' })
    @ApiResponse({ status: 401, description: 'Senha atual incorreta' })
    @ApiResponse({ status: 404, description: 'Usuário não encontrado' })
    updateSenha(@Param('id') id: string, @Body() updateSenhaDto: UpdateSenhaDto) {
        return this.usuarioService.updateSenha(id, updateSenhaDto);
    }

    @Patch(':id')
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    @ApiOperation({ summary: 'Atualizar dados do usuário' })
    @ApiResponse({ status: 200, description: 'Usuário atualizado com sucesso' })
    @ApiResponse({ status: 404, description: 'Usuário não encontrado' })
    update(@Param('id') id: string, @Body() updateUsuarioDto: UpdateUsuarioDto) {
        return this.usuarioService.update(id, updateUsuarioDto);
    }

    @Post(':id/foto')
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    @UseInterceptors(FileInterceptor('file', {
        storage: diskStorage({
            destination: './uploads/profiles',
            filename: (req, file, cb) => {
                const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
                const ext = extname(file.originalname);
                cb(null, `${file.fieldname}-${uniqueSuffix}${ext}`);
            },
        }),
    }))
    @ApiOperation({ summary: 'Upload de foto de perfil' })
    @ApiResponse({ status: 200, description: 'Foto atualizada com sucesso' })
    async uploadFoto(@Param('id') id: string, @UploadedFile() file: Express.Multer.File) {
        // Retorna o caminho que pode ser acessado via static serve
        // file.path seria "uploads/profiles/filename.jpg"
        // Queremos armazenar "/uploads/profiles/filename.jpg" ou a URL completa
        const fotoUrl = `/uploads/profiles/${file.filename}`;
        return this.usuarioService.update(id, { foto: fotoUrl });
    }
    @Delete(':id/foto')
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    @ApiOperation({ summary: 'Remover foto de perfil' })
    @ApiResponse({ status: 200, description: 'Foto removida com sucesso' })
    @ApiResponse({ status: 404, description: 'Usuário não encontrado' })
    removeFoto(@Param('id') id: string) {
        return this.usuarioService.update(id, { foto: null });
    }
}