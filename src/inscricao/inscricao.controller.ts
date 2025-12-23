import { Controller, Get, Post, Body, Param, Patch, UseGuards, Request, ForbiddenException } from '@nestjs/common';
import { InscricaoService } from './inscricao.service';
import { CreateInscricaoDto } from './dto/create-inscricao.dto';
import { UpdateInscricaoStatusDto } from './dto/update-inscricao-status.dto';
import { JwtAuthGuard } from '../auth/auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { PerfilUsuario } from '@prisma/client';

@Controller('inscricoes')
@UseGuards(JwtAuthGuard, RolesGuard)
export class InscricaoController {
    constructor(private readonly inscricaoService: InscricaoService) {}

    @Post()
    @Roles(PerfilUsuario.LICITANTE)
    async create(@Request() req, @Body() createInscricaoDto: CreateInscricaoDto) {
        const user = req.user;
        console.log('InscricaoController.create - User:', JSON.stringify(user, null, 2));

        // Se o usuário é licitante, usamos o licitanteId dele
        if (!user.licitanteId) {
            console.error('Erro: Usuário sem licitanteId');
            throw new ForbiddenException('Usuário não vinculado a um licitante');
        }

        return this.inscricaoService.create(user.licitanteId, createInscricaoDto);
    }

    @Get('edital/:editalId')
    @Roles(PerfilUsuario.ADMIN, PerfilUsuario.PREGOEIRO)
    findByEdital(@Param('editalId') editalId: string) {
        return this.inscricaoService.findByEdital(editalId);
    }

    @Get('meus-editais')
    @Roles(PerfilUsuario.LICITANTE)
    async findMyInscricoes(@Request() req) {
        if (!req.user.licitanteId) {
            throw new ForbiddenException('Usuário não vinculado a um licitante');
        }
        return this.inscricaoService.findByLicitante(req.user.licitanteId);
    }

    @Get('check/:editalId')
    @Roles(PerfilUsuario.LICITANTE, PerfilUsuario.ADMIN, PerfilUsuario.PREGOEIRO)
    async checkStatus(@Request() req, @Param('editalId') editalId: string) {
        // Se for licitante, verifica o dele. Se for admin, teria que passar licitanteId (endpoint separado ou query param)
        // Aqui vamos focar no caso do Licitante verificar se já está inscrito
        if (req.user.perfil === PerfilUsuario.LICITANTE) {
            if (!req.user.licitanteId) return null;
            return this.inscricaoService.checkStatus(editalId, req.user.licitanteId);
        }
        return null;
    }

    @Patch(':id/status')
    @Roles(PerfilUsuario.ADMIN, PerfilUsuario.PREGOEIRO)
    updateStatus(@Param('id') id: string, @Body() updateDto: UpdateInscricaoStatusDto) {
        return this.inscricaoService.updateStatus(id, updateDto);
    }
}
