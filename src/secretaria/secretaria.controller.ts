import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { SecretariaService } from './secretaria.service';
import { CreateSecretariaDto } from './dto/create-secretaria.dto';
import { UpdateSecretariaDto } from './dto/update-secretaria.dto';
import { PaginationDto } from '../common/dto/pagination.dto';
import { JwtAuthGuard } from '../auth/auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { PerfilUsuario } from '@generated/prisma/client';

@ApiTags('Secretarias')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('secretarias')
export class SecretariaController {
    constructor(private readonly secretariaService: SecretariaService) {}

    @Post()
    @Roles(PerfilUsuario.ADMIN)
    @ApiOperation({ summary: 'Criar uma nova secretaria' })
    @ApiResponse({ status: 201, description: 'Secretaria criada com sucesso' })
    create(@Body() createSecretariaDto: CreateSecretariaDto) {
        return this.secretariaService.create(createSecretariaDto);
    }

    @Get()
    @ApiOperation({ summary: 'Listar todas as secretarias' })
    findAll(@Query() query: PaginationDto) {
        return this.secretariaService.findAll(query);
    }

    @Get(':id')
    @ApiOperation({ summary: 'Buscar uma secretaria pelo ID' })
    findOne(@Param('id') id: string) {
        return this.secretariaService.findOne(id);
    }

    @Patch(':id')
    @Roles(PerfilUsuario.ADMIN)
    @ApiOperation({ summary: 'Atualizar uma secretaria' })
    update(@Param('id') id: string, @Body() updateSecretariaDto: UpdateSecretariaDto) {
        return this.secretariaService.update(id, updateSecretariaDto);
    }

    @Delete(':id')
    @Roles(PerfilUsuario.ADMIN)
    @ApiOperation({ summary: 'Remover uma secretaria' })
    remove(@Param('id') id: string) {
        return this.secretariaService.remove(id);
    }
}
