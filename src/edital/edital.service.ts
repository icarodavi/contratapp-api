import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '@/database/database.service';
import { CreateEditalDto } from './dto/create-edital.dto';
import { UpdateEditalDto } from './dto/update-edital.dto';
import { ApiTags } from '@nestjs/swagger';
import { ModalidadeLicitação, CritérioJulgamento } from '@prisma/client';

@ApiTags('Editais')
@Injectable()
export class EditalService {
    constructor(private prisma: PrismaService) {}

    async create(createEditalDto: CreateEditalDto) {
        try {
            const { lotes, ...editalData } = createEditalDto;

            return await this.prisma.edital.create({
                data: {
                    ...editalData,
                    modalidade: createEditalDto.modalidade as ModalidadeLicitação,
                    criterioJulgamento: createEditalDto.criterioJulgamento as CritérioJulgamento,
                    lotes: lotes ? {
                        create: lotes.map(lote => ({
                            numero: lote.numero,
                            descricao: lote.descricao,
                            dotacaoOrcamentaria: lote.dotacaoOrcamentaria,
                            itens: {
                                create: lote.itens?.map(item => ({
                                    numero: item.numero,
                                    descricao: item.descricao,
                                    quantidade: item.quantidade,
                                    unidade: item.unidade,
                                    valorEstimado: item.valorEstimado,
                                    catalogoItemId: item.catalogoItemId
                                }))
                            }
                        }))
                    } : undefined
                },
            });
        } catch (error) {
            if (error.code === 'P2002') {
                throw new BadRequestException('Edital com este número já existe');
            }
            throw error;
        }
    }

    async findAll() {
        return this.prisma.edital.findMany({
            include: {
                disputas: true,
                documentosObrigatorios: true,
                documentos: true,
                lotes: { include: { itens: true } },
                secretaria: true,
            },
        });
    }

    async findOne(id: string) {
        const edital = await this.prisma.edital.findUnique({
            where: { id },
            include: {
                disputas: true,
                documentosObrigatorios: true,
                documentos: true,
                lotes: { include: { itens: true } },
                secretaria: true,
            },
        });

        if (!edital) {
            throw new NotFoundException(`Edital com ID ${id} não encontrado`);
        }

        return edital;
    }

    async findByNumero(numero: string) {
        return this.prisma.edital.findFirst({
            where: { numero },
            include: {
                disputas: true,
                documentosObrigatorios: true,
            },
        });
    }

    async update(id: string, updateEditalDto: UpdateEditalDto) {
        const edital = await this.prisma.edital.findUnique({
            where: { id },
        });

        if (!edital) {
            throw new NotFoundException(`Edital com ID ${id} não encontrado`);
        }

        const { lotes, ...editalData } = updateEditalDto;

        return this.prisma.edital.update({
            where: { id },
            data: {
                ...editalData,
                modalidade: editalData.modalidade ? editalData.modalidade as ModalidadeLicitação : undefined,
                criterioJulgamento: editalData.criterioJulgamento ? editalData.criterioJulgamento as CritérioJulgamento : undefined,
                lotes: lotes ? {
                    deleteMany: {},
                    create: lotes.map(lote => ({
                        numero: lote.numero,
                        descricao: lote.descricao,
                        dotacaoOrcamentaria: lote.dotacaoOrcamentaria,
                        itens: {
                            create: lote.itens?.map(item => ({
                                numero: item.numero,
                                descricao: item.descricao,
                                quantidade: item.quantidade,
                                unidade: item.unidade,
                                valorEstimado: item.valorEstimado,
                                catalogoItemId: item.catalogoItemId
                            }))
                        }
                    }))
                } : undefined
            },
        });
    }

    async remove(id: string) {
        const edital = await this.prisma.edital.findUnique({
            where: { id },
        });

        if (!edital) {
            throw new NotFoundException(`Edital com ID ${id} não encontrado`);
        }

        return this.prisma.edital.delete({
            where: { id },
        });
    }
}