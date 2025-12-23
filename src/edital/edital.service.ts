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

            // Pre-process lotes to enforce catalog data integrity
            const processedLotes = lotes ? await Promise.all(lotes.map(async lote => {
                const processedItens = lote.itens ? await Promise.all(lote.itens.map(async item => {
                    let itemDescricao = item.descricao;
                    let itemUnidade = item.unidade;

                    if (item.catalogoItemId) {
                        const catalogItem = await this.prisma.catalogoItem.findUnique({
                            where: { id: item.catalogoItemId }
                        });
                        if (catalogItem) {
                            itemDescricao = catalogItem.descricao;
                            itemUnidade = catalogItem.unidade;
                        }
                    }

                    return {
                        numero: item.numero,
                        descricao: itemDescricao,
                        quantidade: item.quantidade,
                        unidade: itemUnidade,
                        valorEstimado: item.valorEstimado,
                        catalogoItemId: item.catalogoItemId
                    };
                })) : [];

                return {
                    ...lote,
                    itens: processedItens
                };
            })) : undefined;

            return await this.prisma.edital.create({
                data: {
                    ...editalData,
                    modalidade: createEditalDto.modalidade as ModalidadeLicitação,
                    criterioJulgamento: createEditalDto.criterioJulgamento as CritérioJulgamento,
                    lotes: processedLotes ? {
                        create: processedLotes.map(lote => ({
                            numero: lote.numero,
                            descricao: lote.descricao,
                            dotacaoOrcamentaria: lote.dotacaoOrcamentaria,
                            itens: {
                                create: lote.itens // processedItens is already the array of objects
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
            include: { lotes: { include: { itens: true } } }
        });

        if (!edital) {
            throw new NotFoundException(`Edital com ID ${id} não encontrado`);
        }

        const { lotes, ...editalData } = updateEditalDto;

        return this.prisma.$transaction(async (prisma) => {
            // 1. Update basic Edital data
            const updatedEdital = await prisma.edital.update({
                where: { id },
                data: {
                    ...editalData,
                    secretariaId: editalData.secretariaId === "" ? null : editalData.secretariaId,
                    modalidade: editalData.modalidade ? editalData.modalidade as ModalidadeLicitação : undefined,
                    criterioJulgamento: editalData.criterioJulgamento ? editalData.criterioJulgamento as CritérioJulgamento : undefined,
                },
            });

            // 2. Handle Lotes Upsert/Delete if provided
            if (lotes) {
                const existingLotes = edital.lotes;
                const incomingLotesNumeros = lotes.map(l => l.numero);

                // A. Delete Lotes not in incoming list
                const lotesToDelete = existingLotes.filter(l => !incomingLotesNumeros.includes(l.numero));
                if (lotesToDelete.length > 0) {
                    await prisma.lote.deleteMany({
                        where: { id: { in: lotesToDelete.map(l => l.id) } }
                    });
                }

                // B. Upsert incoming Lotes
                for (const loteDto of lotes) {
                    const existingLote = existingLotes.find(l => l.numero === loteDto.numero);

                    if (existingLote) {
                        // Update existing Lote
                        await prisma.lote.update({
                            where: { id: existingLote.id },
                            data: {
                                descricao: loteDto.descricao,
                                dotacaoOrcamentaria: loteDto.dotacaoOrcamentaria,
                            }
                        });

                        // Handle Itens for this Lote
                        if (loteDto.itens) {
                            const existingItens = existingLote.itens;
                            const incomingItensNumeros = loteDto.itens.map(i => i.numero);

                            // Delete Itens
                            const itensToDelete = existingItens.filter(i => !incomingItensNumeros.includes(i.numero));
                            if (itensToDelete.length > 0) {
                                await prisma.item.deleteMany({
                                    where: { id: { in: itensToDelete.map(i => i.id) } }
                                });
                            }

                            // Upsert Itens
                            for (const itemDto of loteDto.itens) {
                                let itemDescricao = itemDto.descricao;
                                let itemUnidade = itemDto.unidade;

                                // Enforce Catalog Data Integrity
                                if (itemDto.catalogoItemId) {
                                    const catalogItem = await prisma.catalogoItem.findUnique({
                                        where: { id: itemDto.catalogoItemId }
                                    });
                                    if (catalogItem) {
                                        itemDescricao = catalogItem.descricao;
                                        itemUnidade = catalogItem.unidade;
                                    }
                                }

                                const existingItem = existingItens.find(i => i.numero === itemDto.numero);
                                if (existingItem) {
                                    await prisma.item.update({
                                        where: { id: existingItem.id },
                                        data: {
                                            descricao: itemDescricao,
                                            quantidade: itemDto.quantidade,
                                            unidade: itemUnidade,
                                            valorEstimado: itemDto.valorEstimado,
                                            catalogoItemId: itemDto.catalogoItemId
                                        }
                                    });
                                } else {
                                    await prisma.item.create({
                                        data: {
                                            numero: itemDto.numero,
                                            descricao: itemDescricao,
                                            quantidade: itemDto.quantidade,
                                            unidade: itemUnidade,
                                            valorEstimado: itemDto.valorEstimado,
                                            catalogoItemId: itemDto.catalogoItemId,
                                            loteId: existingLote.id
                                        }
                                    });
                                }
                            }
                        }
                    } else {
                        // Create new Lote (with Items)
                        await prisma.lote.create({
                            data: {
                                numero: loteDto.numero,
                                descricao: loteDto.descricao,
                                dotacaoOrcamentaria: loteDto.dotacaoOrcamentaria,
                                editalId: id,
                                itens: {
                                    create: await Promise.all(loteDto.itens?.map(async item => {
                                        // Strict Catalog Enforcement
                                        const catalogItem = await prisma.catalogoItem.findUnique({
                                            where: { id: item.catalogoItemId }
                                        });

                                        if (!catalogItem) {
                                            throw new BadRequestException(`Item de catálogo não encontrado: ${item.catalogoItemId}`);
                                        }

                                        return {
                                            numero: item.numero,
                                            descricao: catalogItem.descricao, // Force catalog usage
                                            quantidade: item.quantidade,
                                            unidade: catalogItem.unidade, // Force catalog usage
                                            valorEstimado: item.valorEstimado,
                                            catalogoItemId: item.catalogoItemId
                                        };
                                    }) || [])
                                }
                            }
                        });
                    }
                }
            }

            return updatedEdital;
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