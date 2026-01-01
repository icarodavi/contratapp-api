/*
  Warnings:

  - You are about to alter the column `valorEstimado` on the `Item` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - You are about to alter the column `valorCentavos` on the `Lance` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - You are about to alter the column `valorCentavos` on the `Proposta` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - You are about to alter the column `valorMulta` on the `Sancao` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - You are about to alter the column `valorReferencia` on the `catalogo_itens` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - You are about to alter the column `valorUnitario` on the `contrato_itens` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - You are about to alter the column `valorTotal` on the `contrato_itens` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - You are about to alter the column `valorTotal` on the `contratos` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.

*/
-- AlterTable
ALTER TABLE "Item" ALTER COLUMN "valorEstimado" SET DATA TYPE INTEGER;

-- AlterTable
ALTER TABLE "Lance" ALTER COLUMN "valorCentavos" SET DATA TYPE INTEGER;

-- AlterTable
ALTER TABLE "Proposta" ALTER COLUMN "valorCentavos" SET DATA TYPE INTEGER;

-- AlterTable
ALTER TABLE "Sancao" ALTER COLUMN "valorMulta" SET DATA TYPE INTEGER;

-- AlterTable
ALTER TABLE "catalogo_itens" ALTER COLUMN "valorReferencia" SET DATA TYPE INTEGER;

-- AlterTable
ALTER TABLE "contrato_itens" ALTER COLUMN "valorUnitario" SET DATA TYPE INTEGER,
ALTER COLUMN "valorTotal" SET DATA TYPE INTEGER;

-- AlterTable
ALTER TABLE "contratos" ALTER COLUMN "valorTotal" SET DATA TYPE INTEGER;
