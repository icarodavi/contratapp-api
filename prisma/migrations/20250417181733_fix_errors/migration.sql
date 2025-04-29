/*
  Warnings:

  - You are about to drop the column `fim` on the `Sessao` table. All the data in the column will be lost.
  - You are about to drop the column `hash` on the `Sessao` table. All the data in the column will be lost.
  - You are about to drop the column `inicio` on the `Sessao` table. All the data in the column will be lost.
  - You are about to drop the column `ip` on the `Sessao` table. All the data in the column will be lost.
  - Added the required column `dataInicio` to the `Sessao` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `Sessao` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tempoRestante` to the `Sessao` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Sessao` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Sessao" DROP CONSTRAINT "Sessao_disputaId_fkey";

-- DropForeignKey
ALTER TABLE "Sessao" DROP CONSTRAINT "Sessao_licitanteId_fkey";

-- AlterTable
ALTER TABLE "Sessao" DROP COLUMN "fim",
DROP COLUMN "hash",
DROP COLUMN "inicio",
DROP COLUMN "ip",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "dataInicio" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "status" TEXT NOT NULL,
ADD COLUMN     "tempoRestante" INTEGER NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "licitanteId" DROP NOT NULL,
ALTER COLUMN "disputaId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Sessao" ADD CONSTRAINT "Sessao_disputaId_fkey" FOREIGN KEY ("disputaId") REFERENCES "Disputa"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sessao" ADD CONSTRAINT "Sessao_licitanteId_fkey" FOREIGN KEY ("licitanteId") REFERENCES "Licitante"("id") ON DELETE SET NULL ON UPDATE CASCADE;
