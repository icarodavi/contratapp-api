-- CreateEnum
CREATE TYPE "StatusContrato" AS ENUM ('ATIVO', 'ENCERRADO', 'CANCELADO', 'SUSPENSO');

-- CreateTable
CREATE TABLE "contratos" (
    "id" TEXT NOT NULL,
    "numero" TEXT NOT NULL,
    "editalId" TEXT NOT NULL,
    "licitanteId" TEXT NOT NULL,
    "valorTotal" INTEGER NOT NULL,
    "dataInicio" TIMESTAMP(3) NOT NULL,
    "dataFim" TIMESTAMP(3) NOT NULL,
    "dotacaoOrcamentaria" TEXT,
    "objeto" TEXT,
    "status" "StatusContrato" NOT NULL DEFAULT 'ATIVO',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "contratos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "contrato_itens" (
    "id" TEXT NOT NULL,
    "contratoId" TEXT NOT NULL,
    "tipo" TEXT NOT NULL DEFAULT 'ITEM',
    "loteId" TEXT,
    "itemId" TEXT,
    "descricao" TEXT NOT NULL,
    "quantidade" INTEGER NOT NULL,
    "valorUnitario" INTEGER NOT NULL,
    "valorTotal" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "contrato_itens_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "contratos_editalId_idx" ON "contratos"("editalId");

-- CreateIndex
CREATE INDEX "contratos_licitanteId_idx" ON "contratos"("licitanteId");

-- CreateIndex
CREATE INDEX "contratos_status_idx" ON "contratos"("status");

-- CreateIndex
CREATE INDEX "contrato_itens_contratoId_idx" ON "contrato_itens"("contratoId");

-- CreateIndex
CREATE INDEX "contrato_itens_loteId_idx" ON "contrato_itens"("loteId");

-- CreateIndex
CREATE INDEX "contrato_itens_itemId_idx" ON "contrato_itens"("itemId");

-- AddForeignKey
ALTER TABLE "contratos" ADD CONSTRAINT "contratos_editalId_fkey" FOREIGN KEY ("editalId") REFERENCES "Edital"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "contratos" ADD CONSTRAINT "contratos_licitanteId_fkey" FOREIGN KEY ("licitanteId") REFERENCES "Licitante"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "contrato_itens" ADD CONSTRAINT "contrato_itens_contratoId_fkey" FOREIGN KEY ("contratoId") REFERENCES "contratos"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "contrato_itens" ADD CONSTRAINT "contrato_itens_loteId_fkey" FOREIGN KEY ("loteId") REFERENCES "Lote"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "contrato_itens" ADD CONSTRAINT "contrato_itens_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "Item"("id") ON DELETE SET NULL ON UPDATE CASCADE;
