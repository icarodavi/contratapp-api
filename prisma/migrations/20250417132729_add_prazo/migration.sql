-- CreateEnum
CREATE TYPE "TipoPrazo" AS ENUM ('ENTREGA_DOCUMENTOS', 'ENTREGA_PROPOSTA', 'RECURSO', 'RECONSIDERACAO', 'IMPUGNACAO', 'HOMOLOGACAO', 'CONTRATACAO', 'EXECUCAO', 'PAGAMENTO', 'OUTROS');

-- CreateEnum
CREATE TYPE "StatusPrazo" AS ENUM ('PENDENTE', 'EM_ANDAMENTO', 'CONCLUIDO', 'ATRASADO', 'CANCELADO');

-- CreateTable
CREATE TABLE "Prazo" (
    "id" TEXT NOT NULL,
    "tipo" "TipoPrazo" NOT NULL,
    "status" "StatusPrazo" NOT NULL DEFAULT 'PENDENTE',
    "descricao" TEXT NOT NULL,
    "dataInicio" TIMESTAMP(3) NOT NULL,
    "dataFim" TIMESTAMP(3) NOT NULL,
    "dataConclusao" TIMESTAMP(3),
    "observacoes" TEXT,
    "editalId" TEXT NOT NULL,
    "licitanteId" TEXT,
    "itemId" TEXT,
    "criadoPor" TEXT NOT NULL,
    "concluidoPor" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Prazo_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Prazo_editalId_idx" ON "Prazo"("editalId");

-- CreateIndex
CREATE INDEX "Prazo_licitanteId_idx" ON "Prazo"("licitanteId");

-- CreateIndex
CREATE INDEX "Prazo_itemId_idx" ON "Prazo"("itemId");

-- CreateIndex
CREATE INDEX "Prazo_tipo_idx" ON "Prazo"("tipo");

-- CreateIndex
CREATE INDEX "Prazo_status_idx" ON "Prazo"("status");

-- CreateIndex
CREATE INDEX "Prazo_dataFim_idx" ON "Prazo"("dataFim");

-- AddForeignKey
ALTER TABLE "Prazo" ADD CONSTRAINT "Prazo_editalId_fkey" FOREIGN KEY ("editalId") REFERENCES "Edital"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Prazo" ADD CONSTRAINT "Prazo_licitanteId_fkey" FOREIGN KEY ("licitanteId") REFERENCES "Licitante"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Prazo" ADD CONSTRAINT "Prazo_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "Item"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Prazo" ADD CONSTRAINT "Prazo_criadoPor_fkey" FOREIGN KEY ("criadoPor") REFERENCES "Usuario"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Prazo" ADD CONSTRAINT "Prazo_concluidoPor_fkey" FOREIGN KEY ("concluidoPor") REFERENCES "Usuario"("id") ON DELETE SET NULL ON UPDATE CASCADE;
