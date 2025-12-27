-- CreateEnum
CREATE TYPE "StatusInscricao" AS ENUM ('PENDENTE', 'DOCUMENTACAO_OK', 'HABILITADO', 'INABILITADO');

-- CreateTable
CREATE TABLE "inscricoes" (
    "id" TEXT NOT NULL,
    "editalId" TEXT NOT NULL,
    "licitanteId" TEXT NOT NULL,
    "status" "StatusInscricao" NOT NULL DEFAULT 'PENDENTE',
    "dataInscricao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "inscricoes_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "inscricoes_editalId_idx" ON "inscricoes"("editalId");

-- CreateIndex
CREATE INDEX "inscricoes_licitanteId_idx" ON "inscricoes"("licitanteId");

-- CreateIndex
CREATE INDEX "inscricoes_status_idx" ON "inscricoes"("status");

-- CreateIndex
CREATE UNIQUE INDEX "inscricoes_editalId_licitanteId_key" ON "inscricoes"("editalId", "licitanteId");

-- AddForeignKey
ALTER TABLE "inscricoes" ADD CONSTRAINT "inscricoes_editalId_fkey" FOREIGN KEY ("editalId") REFERENCES "Edital"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "inscricoes" ADD CONSTRAINT "inscricoes_licitanteId_fkey" FOREIGN KEY ("licitanteId") REFERENCES "Licitante"("id") ON DELETE CASCADE ON UPDATE CASCADE;
