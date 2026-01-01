-- AlterTable
ALTER TABLE "Item" ALTER COLUMN "valorEstimado" SET DATA TYPE BIGINT;

-- AlterTable
ALTER TABLE "Lance" ALTER COLUMN "valorCentavos" SET DATA TYPE BIGINT;

-- AlterTable
ALTER TABLE "Proposta" ALTER COLUMN "valorCentavos" SET DATA TYPE BIGINT;

-- AlterTable
ALTER TABLE "Sancao" ALTER COLUMN "valorMulta" SET DATA TYPE BIGINT;

-- AlterTable
ALTER TABLE "catalogo_itens" ALTER COLUMN "valorReferencia" SET DATA TYPE BIGINT;

-- AlterTable
ALTER TABLE "contrato_itens" ALTER COLUMN "valorUnitario" SET DATA TYPE BIGINT,
ALTER COLUMN "valorTotal" SET DATA TYPE BIGINT;

-- AlterTable
ALTER TABLE "contratos" ALTER COLUMN "valorTotal" SET DATA TYPE BIGINT;
