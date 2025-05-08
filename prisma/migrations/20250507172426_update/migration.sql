/*
  Warnings:

  - You are about to drop the `Usuario` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "LogAtividade" DROP CONSTRAINT "LogAtividade_usuarioId_fkey";

-- DropForeignKey
ALTER TABLE "MensagemChat" DROP CONSTRAINT "MensagemChat_autorId_fkey";

-- DropForeignKey
ALTER TABLE "Prazo" DROP CONSTRAINT "Prazo_concluidoPor_fkey";

-- DropForeignKey
ALTER TABLE "Prazo" DROP CONSTRAINT "Prazo_criadoPor_fkey";

-- DropForeignKey
ALTER TABLE "Recurso" DROP CONSTRAINT "Recurso_respondidoPor_fkey";

-- DropForeignKey
ALTER TABLE "Recurso" DROP CONSTRAINT "Recurso_usuarioId_fkey";

-- DropForeignKey
ALTER TABLE "Sancao" DROP CONSTRAINT "Sancao_aplicadoPor_fkey";

-- DropForeignKey
ALTER TABLE "Sancao" DROP CONSTRAINT "Sancao_revogadoPor_fkey";

-- DropForeignKey
ALTER TABLE "Usuario" DROP CONSTRAINT "Usuario_licitanteId_fkey";

-- DropTable
DROP TABLE "Usuario";

-- CreateTable
CREATE TABLE "usuarios" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "perfil" "PerfilUsuario" NOT NULL,
    "ativo" BOOLEAN NOT NULL DEFAULT true,
    "ultimoAcesso" TIMESTAMP(3),
    "refreshToken" TEXT,
    "licitanteId" TEXT,

    CONSTRAINT "usuarios_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "usuarios_email_key" ON "usuarios"("email");

-- CreateIndex
CREATE UNIQUE INDEX "usuarios_licitanteId_key" ON "usuarios"("licitanteId");

-- AddForeignKey
ALTER TABLE "usuarios" ADD CONSTRAINT "usuarios_licitanteId_fkey" FOREIGN KEY ("licitanteId") REFERENCES "Licitante"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MensagemChat" ADD CONSTRAINT "MensagemChat_autorId_fkey" FOREIGN KEY ("autorId") REFERENCES "usuarios"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LogAtividade" ADD CONSTRAINT "LogAtividade_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "usuarios"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Recurso" ADD CONSTRAINT "Recurso_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "usuarios"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Recurso" ADD CONSTRAINT "Recurso_respondidoPor_fkey" FOREIGN KEY ("respondidoPor") REFERENCES "usuarios"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sancao" ADD CONSTRAINT "Sancao_aplicadoPor_fkey" FOREIGN KEY ("aplicadoPor") REFERENCES "usuarios"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sancao" ADD CONSTRAINT "Sancao_revogadoPor_fkey" FOREIGN KEY ("revogadoPor") REFERENCES "usuarios"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Prazo" ADD CONSTRAINT "Prazo_criadoPor_fkey" FOREIGN KEY ("criadoPor") REFERENCES "usuarios"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Prazo" ADD CONSTRAINT "Prazo_concluidoPor_fkey" FOREIGN KEY ("concluidoPor") REFERENCES "usuarios"("id") ON DELETE SET NULL ON UPDATE CASCADE;
