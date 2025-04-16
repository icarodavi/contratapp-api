-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "TipoDocumento" ADD VALUE 'EDITAL';
ALTER TYPE "TipoDocumento" ADD VALUE 'ATA';
ALTER TYPE "TipoDocumento" ADD VALUE 'CONTRATO';
ALTER TYPE "TipoDocumento" ADD VALUE 'ANEXO';

-- CreateTable
CREATE TABLE "Documento" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "tipo" "TipoDocumento" NOT NULL,
    "caminho" TEXT NOT NULL,
    "descricao" TEXT,
    "ativo" BOOLEAN NOT NULL DEFAULT true,
    "editalId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "Documento_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Documento_editalId_idx" ON "Documento"("editalId");

-- CreateIndex
CREATE INDEX "Documento_tipo_idx" ON "Documento"("tipo");

-- AddForeignKey
ALTER TABLE "Documento" ADD CONSTRAINT "Documento_editalId_fkey" FOREIGN KEY ("editalId") REFERENCES "Edital"("id") ON DELETE CASCADE ON UPDATE CASCADE;
