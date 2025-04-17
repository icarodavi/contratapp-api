-- CreateEnum
CREATE TYPE "TipoRecurso" AS ENUM ('IMPUGNACAO', 'RECURSO', 'RECONSIDERACAO', 'APELACAO');

-- CreateEnum
CREATE TYPE "StatusRecurso" AS ENUM ('PENDENTE', 'DEFERIDO', 'INDEFERIDO', 'ARQUIVADO');

-- CreateTable
CREATE TABLE "Recurso" (
    "id" TEXT NOT NULL,
    "tipo" "TipoRecurso" NOT NULL,
    "status" "StatusRecurso" NOT NULL DEFAULT 'PENDENTE',
    "motivo" TEXT NOT NULL,
    "fundamentacao" TEXT NOT NULL,
    "resposta" TEXT,
    "dataEnvio" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dataResposta" TIMESTAMP(3),
    "prazoResposta" INTEGER NOT NULL,
    "editalId" TEXT NOT NULL,
    "licitanteId" TEXT NOT NULL,
    "usuarioId" TEXT NOT NULL,
    "respondidoPor" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Recurso_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Recurso_editalId_idx" ON "Recurso"("editalId");

-- CreateIndex
CREATE INDEX "Recurso_licitanteId_idx" ON "Recurso"("licitanteId");

-- CreateIndex
CREATE INDEX "Recurso_usuarioId_idx" ON "Recurso"("usuarioId");

-- CreateIndex
CREATE INDEX "Recurso_status_idx" ON "Recurso"("status");

-- CreateIndex
CREATE INDEX "Recurso_tipo_idx" ON "Recurso"("tipo");

-- AddForeignKey
ALTER TABLE "Recurso" ADD CONSTRAINT "Recurso_editalId_fkey" FOREIGN KEY ("editalId") REFERENCES "Edital"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Recurso" ADD CONSTRAINT "Recurso_licitanteId_fkey" FOREIGN KEY ("licitanteId") REFERENCES "Licitante"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Recurso" ADD CONSTRAINT "Recurso_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Recurso" ADD CONSTRAINT "Recurso_respondidoPor_fkey" FOREIGN KEY ("respondidoPor") REFERENCES "Usuario"("id") ON DELETE SET NULL ON UPDATE CASCADE;
