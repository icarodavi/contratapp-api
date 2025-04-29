import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../database/database.service';
import { CreateDisputaDto } from './dto/create-disputa.dto';
import { UpdateDisputaDto } from './dto/update-disputa.dto';
import { DisputaStatus } from '@generated/prisma';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Disputas')
@Injectable()
export class DisputaService {
    constructor(private prisma: PrismaService) {}

    async create(createDisputaDto: CreateDisputaDto) {
        // Verifica se o edital existe
        const edital = await this.prisma.edital.findUnique({
            where: { id: createDisputaDto.editalId }
        });

        if (!edital) {
            throw new NotFoundException('Edital não encontrado');
        }

        return this.prisma.disputa.create({
            data: {
                ...createDisputaDto,
                status: createDisputaDto.status || DisputaStatus.AGUARDANDO
            },
            include: {
                edital: true,
                propostas: true,
                documentos: true
            }
        });
    }

    async findAll() {
        return this.prisma.disputa.findMany({
            include: {
                edital: true,
                propostas: true,
                documentos: true
            }
        });
    }

    async findOne(id: string) {
        const disputa = await this.prisma.disputa.findUnique({
            where: { id },
            include: {
                edital: true,
                propostas: true,
                documentos: true
            }
        });

        if (!disputa) {
            throw new NotFoundException('Disputa não encontrada');
        }

        return disputa;
    }

    async findByEdital(editalId: string) {
        return this.prisma.disputa.findMany({
            where: { editalId },
            include: {
                edital: true,
                propostas: true,
                documentos: true
            }
        });
    }

    async update(id: string, updateDisputaDto: UpdateDisputaDto) {
        const disputa = await this.findOne(id);

        // Validações de status
        if (updateDisputaDto.status) {
            this.validarTransicaoStatus(disputa.status, updateDisputaDto.status);
        }

        return this.prisma.disputa.update({
            where: { id },
            data: updateDisputaDto,
            include: {
                edital: true,
                propostas: true,
                documentos: true
            }
        });
    }

    async remove(id: string) {
        const disputa = await this.findOne(id);

        // Não permite remover disputa em andamento
        if (disputa.status === DisputaStatus.AGUARDANDO) {
            throw new BadRequestException('Não é possível remover uma disputa em andamento');
        }

        return this.prisma.disputa.delete({
            where: { id }
        });
    }

    private validarTransicaoStatus(statusAtual: DisputaStatus, novoStatus: DisputaStatus) {
        const transicoesValidas: Record<DisputaStatus, DisputaStatus[]> = {
            [DisputaStatus.AGUARDANDO]: [DisputaStatus.ABERTA, DisputaStatus.ENCERRADA],
            [DisputaStatus.ABERTA]: [DisputaStatus.SUSPENSA, DisputaStatus.ENCERRADA],
            [DisputaStatus.SUSPENSA]: [DisputaStatus.ABERTA, DisputaStatus.ENCERRADA],
            [DisputaStatus.ENCERRADA]: []
        };

        if (!transicoesValidas[statusAtual].includes(novoStatus)) {
            throw new BadRequestException(
                `Transição de status inválida: ${statusAtual} -> ${novoStatus}`
            );
        }
    }
} 