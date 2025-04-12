/*
  Warnings:

  - A unique constraint covering the columns `[numero]` on the table `Edital` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[numero,loteId]` on the table `Item` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[numero,editalId]` on the table `Lote` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `updatedAt` to the `Edital` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Item` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Lote` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Proposta` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Edital" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Item" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "status" TEXT NOT NULL DEFAULT 'ATIVO',
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "valorEstimado" INTEGER;

-- AlterTable
ALTER TABLE "Lote" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "status" TEXT NOT NULL DEFAULT 'ATIVO',
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Proposta" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "observacao" TEXT,
ADD COLUMN     "status" TEXT NOT NULL DEFAULT 'PENDENTE',
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Edital_numero_key" ON "Edital"("numero");

-- CreateIndex
CREATE INDEX "Item_loteId_status_idx" ON "Item"("loteId", "status");

-- CreateIndex
CREATE UNIQUE INDEX "Item_numero_loteId_key" ON "Item"("numero", "loteId");

-- CreateIndex
CREATE INDEX "Lote_editalId_status_idx" ON "Lote"("editalId", "status");

-- CreateIndex
CREATE UNIQUE INDEX "Lote_numero_editalId_key" ON "Lote"("numero", "editalId");

-- CreateIndex
CREATE INDEX "Proposta_disputaId_itemId_idx" ON "Proposta"("disputaId", "itemId");

-- CreateIndex
CREATE INDEX "Proposta_licitanteId_status_idx" ON "Proposta"("licitanteId", "status");
