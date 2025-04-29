/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Sessao` table. All the data in the column will be lost.
  - You are about to drop the column `dataInicio` on the `Sessao` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `Sessao` table. All the data in the column will be lost.
  - You are about to drop the column `tempoRestante` on the `Sessao` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Sessao` table. All the data in the column will be lost.
  - Added the required column `hash` to the `Sessao` table without a default value. This is not possible if the table is not empty.
  - Added the required column `inicio` to the `Sessao` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ip` to the `Sessao` table without a default value. This is not possible if the table is not empty.
  - Made the column `licitanteId` on table `Sessao` required. This step will fail if there are existing NULL values in that column.
  - Made the column `disputaId` on table `Sessao` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Sessao" DROP CONSTRAINT "Sessao_disputaId_fkey";

-- DropForeignKey
ALTER TABLE "Sessao" DROP CONSTRAINT "Sessao_licitanteId_fkey";

-- AlterTable
ALTER TABLE "Sessao" DROP COLUMN "createdAt",
DROP COLUMN "dataInicio",
DROP COLUMN "status",
DROP COLUMN "tempoRestante",
DROP COLUMN "updatedAt",
ADD COLUMN     "fim" TIMESTAMP(3),
ADD COLUMN     "hash" TEXT NOT NULL,
ADD COLUMN     "inicio" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "ip" TEXT NOT NULL,
ALTER COLUMN "licitanteId" SET NOT NULL,
ALTER COLUMN "disputaId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Sessao" ADD CONSTRAINT "Sessao_licitanteId_fkey" FOREIGN KEY ("licitanteId") REFERENCES "Licitante"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sessao" ADD CONSTRAINT "Sessao_disputaId_fkey" FOREIGN KEY ("disputaId") REFERENCES "Disputa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
