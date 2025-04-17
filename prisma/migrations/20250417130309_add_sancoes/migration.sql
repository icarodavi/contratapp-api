-- CreateEnum
CREATE TYPE "TipoSancao" AS ENUM ('ADVERTENCIA', 'SUSPENSAO', 'IMPEDIMENTO', 'DECLARACAO_INIDONEIDADE', 'MULTA');

-- CreateEnum
CREATE TYPE "StatusSancao" AS ENUM ('PENDENTE', 'EM_VIGOR', 'SUSPENSA', 'REVOGADA', 'EXPIRADA');

-- CreateTable
CREATE TABLE "Sancao" (
    "id" TEXT NOT NULL,
    "tipo" "TipoSancao" NOT NULL,
    "status" "StatusSancao" NOT NULL DEFAULT 'PENDENTE',
    "motivo" TEXT NOT NULL,
    "fundamentacao" TEXT NOT NULL,
    "dataInicio" TIMESTAMP(3) NOT NULL,
    "dataFim" TIMESTAMP(3),
    "valorMulta" INTEGER,
    "observacoes" TEXT,
    "editalId" TEXT NOT NULL,
    "licitanteId" TEXT NOT NULL,
    "aplicadoPor" TEXT NOT NULL,
    "revogadoPor" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Sancao_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Sancao_editalId_idx" ON "Sancao"("editalId");

-- CreateIndex
CREATE INDEX "Sancao_licitanteId_idx" ON "Sancao"("licitanteId");

-- CreateIndex
CREATE INDEX "Sancao_aplicadoPor_idx" ON "Sancao"("aplicadoPor");

-- CreateIndex
CREATE INDEX "Sancao_status_idx" ON "Sancao"("status");

-- CreateIndex
CREATE INDEX "Sancao_tipo_idx" ON "Sancao"("tipo");

-- AddForeignKey
ALTER TABLE "Sancao" ADD CONSTRAINT "Sancao_editalId_fkey" FOREIGN KEY ("editalId") REFERENCES "Edital"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sancao" ADD CONSTRAINT "Sancao_licitanteId_fkey" FOREIGN KEY ("licitanteId") REFERENCES "Licitante"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sancao" ADD CONSTRAINT "Sancao_aplicadoPor_fkey" FOREIGN KEY ("aplicadoPor") REFERENCES "Usuario"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sancao" ADD CONSTRAINT "Sancao_revogadoPor_fkey" FOREIGN KEY ("revogadoPor") REFERENCES "Usuario"("id") ON DELETE SET NULL ON UPDATE CASCADE;
