/*
  Warnings:

  - The `modalidade` column on the `Edital` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "StatusDocumento" AS ENUM ('PENDENTE', 'VALIDADO', 'INVALIDO', 'EXPIRADO');

-- CreateEnum
CREATE TYPE "ModalidadeLicitação" AS ENUM ('PREGÃO_ELETRÔNICO', 'CONCORRÊNCIA', 'CONCURSO', 'LEILÃO', 'DISPENSA', 'INEXIGIBILIDADE');

-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "TipoDocumento" ADD VALUE 'CERTIDAO';
ALTER TYPE "TipoDocumento" ADD VALUE 'DECLARACAO';
ALTER TYPE "TipoDocumento" ADD VALUE 'COMPROVANTE';

-- AlterTable
ALTER TABLE "DocumentoLicitante" ADD COLUMN     "dataValidacao" TIMESTAMP(3),
ADD COLUMN     "dataValidade" TIMESTAMP(3),
ADD COLUMN     "observacoes" TEXT,
ADD COLUMN     "status" "StatusDocumento" NOT NULL DEFAULT 'PENDENTE',
ADD COLUMN     "validadoPor" TEXT;

-- AlterTable
ALTER TABLE "DocumentoObrigatorio" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "observacoes" TEXT,
ADD COLUMN     "prazoValidade" INTEGER,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Edital" DROP COLUMN "modalidade",
ADD COLUMN     "modalidade" "ModalidadeLicitação" NOT NULL DEFAULT 'PREGÃO_ELETRÔNICO';

-- CreateIndex
CREATE INDEX "Documento_ativo_idx" ON "Documento"("ativo");

-- CreateIndex
CREATE INDEX "DocumentoLicitante_disputaId_idx" ON "DocumentoLicitante"("disputaId");

-- CreateIndex
CREATE INDEX "DocumentoLicitante_licitanteId_idx" ON "DocumentoLicitante"("licitanteId");

-- CreateIndex
CREATE INDEX "DocumentoLicitante_tipoDocumento_idx" ON "DocumentoLicitante"("tipoDocumento");

-- CreateIndex
CREATE INDEX "DocumentoLicitante_status_idx" ON "DocumentoLicitante"("status");

-- CreateIndex
CREATE INDEX "DocumentoLicitante_valido_idx" ON "DocumentoLicitante"("valido");

-- CreateIndex
CREATE INDEX "DocumentoObrigatorio_editalId_idx" ON "DocumentoObrigatorio"("editalId");

-- CreateIndex
CREATE INDEX "DocumentoObrigatorio_tipoDocumento_idx" ON "DocumentoObrigatorio"("tipoDocumento");
