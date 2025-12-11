import { Controller, Get, Post, Body, Param, Put, Delete, UseGuards, Patch } from '@nestjs/common';
import { DisputaService } from './disputa.service';
import { CreateDisputaDto } from './dto/create-disputa.dto';
import { UpdateDisputaDto } from './dto/update-disputa.dto';
import { ApiOperation, ApiResponse, ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { PerfilUsuario } from '@prisma/client';

@ApiTags('Disputas')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('disputas')
export class DisputaController {
    constructor(private readonly disputaService: DisputaService) {}

    @Post()
    @Roles(PerfilUsuario.ADMIN, PerfilUsuario.PREGOEIRO)
    @ApiOperation({ summary: 'Criar uma nova disputa' })
    @ApiResponse({ status: 201, description: 'Disputa criada com sucesso' })
    @ApiResponse({ status: 400, description: 'Dados inválidos' })
    @ApiResponse({ status: 401, description: 'Não autorizado' })
    @ApiResponse({ status: 404, description: 'Edital não encontrado' })
    create(@Body() createDisputaDto: CreateDisputaDto) {
        return this.disputaService.create(createDisputaDto);
    }

    @Get()
    @ApiOperation({ summary: 'Listar todas as disputas' })
    @ApiResponse({ status: 200, description: 'Lista de disputas retornada com sucesso' })
    @ApiResponse({ status: 401, description: 'Não autorizado' })
    findAll() {
        return this.disputaService.findAll();
    }

    @Get(':id')
    @ApiOperation({ summary: 'Buscar disputa por ID' })
    @ApiResponse({ status: 200, description: 'Disputa encontrada' })
    @ApiResponse({ status: 401, description: 'Não autorizado' })
    @ApiResponse({ status: 404, description: 'Disputa não encontrada' })
    findOne(@Param('id') id: string) {
        return this.disputaService.findOne(id);
    }

    @Get('edital/:editalId')
    @ApiOperation({ summary: 'Buscar disputas por edital' })
    @ApiResponse({ status: 200, description: 'Lista de disputas do edital retornada com sucesso' })
    @ApiResponse({ status: 401, description: 'Não autorizado' })
    findByEdital(@Param('editalId') editalId: string) {
        return this.disputaService.findByEdital(editalId);
    }

    @Put(':id')
    @Roles(PerfilUsuario.ADMIN, PerfilUsuario.PREGOEIRO)
    @ApiOperation({ summary: 'Atualizar disputa' })
    @ApiResponse({ status: 200, description: 'Disputa atualizada com sucesso' })
    @ApiResponse({ status: 400, description: 'Dados inválidos ou transição de status inválida' })
    @ApiResponse({ status: 401, description: 'Não autorizado' })
    @ApiResponse({ status: 404, description: 'Disputa não encontrada' })
    update(@Param('id') id: string, @Body() updateDisputaDto: UpdateDisputaDto) {
        return this.disputaService.update(id, updateDisputaDto);
    }

    @Delete(':id')
    @Roles(PerfilUsuario.ADMIN, PerfilUsuario.PREGOEIRO)
    @ApiOperation({ summary: 'Remover disputa' })
    @ApiResponse({ status: 200, description: 'Disputa removida com sucesso' })
    @ApiResponse({ status: 400, description: 'Não é possível remover disputa em andamento' })
    @ApiResponse({ status: 401, description: 'Não autorizado' })
    @ApiResponse({ status: 404, description: 'Disputa não encontrada' })
    remove(@Param('id') id: string) {
        return this.disputaService.remove(id);
    }

    @Patch(':id/chat')
    @Roles(PerfilUsuario.ADMIN, PerfilUsuario.PREGOEIRO)
    @ApiOperation({ summary: 'Ativar/Desativar chat da disputa' })
    @ApiResponse({ status: 200, description: 'Status do chat atualizado' })
    updateChatStatus(@Param('id') id: string, @Body('ativo') ativo: boolean) {
        return this.disputaService.update(id, { chatAtivo: ativo });
    }
}