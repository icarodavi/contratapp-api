/*
  Warnings:

  - The values [OUTRA] on the enum `TipoEmpresa` will be removed. If these variants are still used in the database, this will fail.
  - Added the required column `email` to the `Licitante` table without a default value. This is not possible if the table is not empty.
  - Added the required column `endereco` to the `Licitante` table without a default value. This is not possible if the table is not empty.
  - Added the required column `telefone` to the `Licitante` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "TipoEmpresa_new" AS ENUM ('ME', 'EPP', 'MEI', 'EIRELI', 'LTDA', 'SA', 'OUTROS');
ALTER TABLE "Licitante" ALTER COLUMN "tipoEmpresa" TYPE "TipoEmpresa_new" USING ("tipoEmpresa"::text::"TipoEmpresa_new");
ALTER TYPE "TipoEmpresa" RENAME TO "TipoEmpresa_old";
ALTER TYPE "TipoEmpresa_new" RENAME TO "TipoEmpresa";
DROP TYPE "TipoEmpresa_old";
COMMIT;

-- AlterTable
ALTER TABLE "Disputa" ADD COLUMN     "chatAtivo" BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE "Edital" ADD COLUMN     "secretariaId" TEXT;

-- AlterTable
ALTER TABLE "Item" ADD COLUMN     "catalogoItemId" TEXT;

-- AlterTable
ALTER TABLE "Licitante" ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "endereco" TEXT NOT NULL,
ADD COLUMN     "isMeEpp" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "observacoes" TEXT,
ADD COLUMN     "telefone" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Lote" ADD COLUMN     "dotacaoOrcamentaria" TEXT;

-- CreateTable
CREATE TABLE "secretarias" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "sigla" TEXT NOT NULL,
    "codigoContabil" TEXT,
    "responsavel" TEXT,
    "email" TEXT,
    "telefone" TEXT,
    "ativo" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "secretarias_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "catalogo_itens" (
    "id" TEXT NOT NULL,
    "codigo" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "unidade" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "valorReferencia" INTEGER,
    "ativo" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "catalogo_itens_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "secretarias_sigla_key" ON "secretarias"("sigla");

-- CreateIndex
CREATE UNIQUE INDEX "catalogo_itens_codigo_key" ON "catalogo_itens"("codigo");

-- CreateIndex
CREATE INDEX "Edital_secretariaId_idx" ON "Edital"("secretariaId");

-- CreateIndex
CREATE INDEX "Item_catalogoItemId_idx" ON "Item"("catalogoItemId");

-- AddForeignKey
ALTER TABLE "Edital" ADD CONSTRAINT "Edital_secretariaId_fkey" FOREIGN KEY ("secretariaId") REFERENCES "secretarias"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Item" ADD CONSTRAINT "Item_catalogoItemId_fkey" FOREIGN KEY ("catalogoItemId") REFERENCES "catalogo_itens"("id") ON DELETE SET NULL ON UPDATE CASCADE;
