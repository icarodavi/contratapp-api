/*
  Warnings:

  - You are about to drop the column `autor` on the `MensagemChat` table. All the data in the column will be lost.
  - You are about to drop the column `horario` on the `MensagemChat` table. All the data in the column will be lost.
  - You are about to drop the column `mensagem` on the `MensagemChat` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[licitanteId]` on the table `Usuario` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `autorId` to the `MensagemChat` table without a default value. This is not possible if the table is not empty.
  - Added the required column `conteudo` to the `MensagemChat` table without a default value. This is not possible if the table is not empty.
  - Added the required column `editalId` to the `MensagemChat` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `MensagemChat` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `tipoAutor` on the `MensagemChat` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "TipoAutorMensagem" AS ENUM ('PREGOEIRO', 'LICITANTE');

-- DropForeignKey
ALTER TABLE "MensagemChat" DROP CONSTRAINT "MensagemChat_disputaId_fkey";

-- AlterTable
ALTER TABLE "MensagemChat" DROP COLUMN "autor",
DROP COLUMN "horario",
DROP COLUMN "mensagem",
ADD COLUMN     "autorId" TEXT NOT NULL,
ADD COLUMN     "conteudo" TEXT NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "editalId" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "disputaId" DROP NOT NULL,
DROP COLUMN "tipoAutor",
ADD COLUMN     "tipoAutor" "TipoAutorMensagem" NOT NULL;

-- AlterTable
ALTER TABLE "Usuario" ADD COLUMN     "licitanteId" TEXT;

-- CreateIndex
CREATE INDEX "MensagemChat_editalId_createdAt_idx" ON "MensagemChat"("editalId", "createdAt");

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_licitanteId_key" ON "Usuario"("licitanteId");

-- AddForeignKey
ALTER TABLE "Usuario" ADD CONSTRAINT "Usuario_licitanteId_fkey" FOREIGN KEY ("licitanteId") REFERENCES "Licitante"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MensagemChat" ADD CONSTRAINT "MensagemChat_editalId_fkey" FOREIGN KEY ("editalId") REFERENCES "Edital"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MensagemChat" ADD CONSTRAINT "MensagemChat_autorId_fkey" FOREIGN KEY ("autorId") REFERENCES "Usuario"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MensagemChat" ADD CONSTRAINT "MensagemChat_disputaId_fkey" FOREIGN KEY ("disputaId") REFERENCES "Disputa"("id") ON DELETE SET NULL ON UPDATE CASCADE;
