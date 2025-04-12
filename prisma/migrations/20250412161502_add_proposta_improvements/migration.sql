/*
  Warnings:

  - The `status` column on the `Proposta` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - A unique constraint covering the columns `[itemId,licitanteId,versao]` on the table `Proposta` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `createdBy` to the `Proposta` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "StatusProposta" AS ENUM ('PENDENTE', 'ACEITA', 'REJEITADA', 'CANCELADA');

-- AlterTable
ALTER TABLE "Proposta" ADD COLUMN     "createdBy" TEXT NOT NULL,
ADD COLUMN     "deletedAt" TIMESTAMP(3),
ADD COLUMN     "updatedBy" TEXT,
ADD COLUMN     "versao" INTEGER NOT NULL DEFAULT 1,
DROP COLUMN "status",
ADD COLUMN     "status" "StatusProposta" NOT NULL DEFAULT 'PENDENTE';

-- CreateIndex
CREATE INDEX "Proposta_licitanteId_status_idx" ON "Proposta"("licitanteId", "status");

-- CreateIndex
CREATE UNIQUE INDEX "Proposta_itemId_licitanteId_versao_key" ON "Proposta"("itemId", "licitanteId", "versao");
