-- CreateEnum
CREATE TYPE "DisputaStatus" AS ENUM ('AGUARDANDO', 'ABERTA', 'SUSPENSA', 'ENCERRADA');

-- CreateEnum
CREATE TYPE "TipoEmpresa" AS ENUM ('ME', 'EPP', 'OUTRA');

-- CreateEnum
CREATE TYPE "TipoDocumento" AS ENUM ('PROPOSTA', 'HABILITACAO', 'OUTROS');

-- CreateEnum
CREATE TYPE "PerfilUsuario" AS ENUM ('ADMIN', 'PREGOEIRO', 'LICITANTE', 'VISUALIZADOR');

-- CreateEnum
CREATE TYPE "TipoAutorChat" AS ENUM ('PREGOEIRO', 'LICITANTE');

-- CreateTable
CREATE TABLE "Usuario" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "perfil" "PerfilUsuario" NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Edital" (
    "id" TEXT NOT NULL,
    "numero" TEXT NOT NULL,
    "objeto" TEXT NOT NULL,
    "modalidade" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "dataAbertura" TIMESTAMP(3) NOT NULL,
    "arquivoPdf" TEXT,

    CONSTRAINT "Edital_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Disputa" (
    "id" TEXT NOT NULL,
    "editalId" TEXT NOT NULL,
    "status" "DisputaStatus" NOT NULL,
    "inicio" TIMESTAMP(3),
    "fimPrevisto" TIMESTAMP(3),
    "encerramento" TIMESTAMP(3),
    "tempoRestante" INTEGER,

    CONSTRAINT "Disputa_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Licitante" (
    "id" TEXT NOT NULL,
    "razaoSocial" TEXT NOT NULL,
    "cnpj" TEXT NOT NULL,
    "tipoEmpresa" "TipoEmpresa" NOT NULL,

    CONSTRAINT "Licitante_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Proposta" (
    "id" TEXT NOT NULL,
    "disputaId" TEXT NOT NULL,
    "licitanteId" TEXT NOT NULL,
    "valorCentavos" INTEGER NOT NULL,
    "dataEnvio" TIMESTAMP(3) NOT NULL,
    "arquivo" TEXT,

    CONSTRAINT "Proposta_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Lance" (
    "id" TEXT NOT NULL,
    "disputaId" TEXT NOT NULL,
    "licitanteId" TEXT NOT NULL,
    "valorCentavos" INTEGER NOT NULL,
    "horario" TIMESTAMP(3) NOT NULL,
    "ip" TEXT,
    "userAgent" TEXT,

    CONSTRAINT "Lance_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DocumentoLicitante" (
    "id" TEXT NOT NULL,
    "disputaId" TEXT NOT NULL,
    "licitanteId" TEXT NOT NULL,
    "tipoDocumento" "TipoDocumento" NOT NULL,
    "nomeOriginal" TEXT NOT NULL,
    "descricao" TEXT,
    "arquivoPath" TEXT NOT NULL,
    "dataEnvio" TIMESTAMP(3) NOT NULL,
    "versao" INTEGER NOT NULL DEFAULT 1,
    "valido" BOOLEAN NOT NULL DEFAULT true,
    "hashDocumento" TEXT,
    "assinaturaBase64" TEXT,
    "assinadoPor" TEXT,

    CONSTRAINT "DocumentoLicitante_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DocumentoObrigatorio" (
    "id" TEXT NOT NULL,
    "editalId" TEXT NOT NULL,
    "tipoDocumento" "TipoDocumento" NOT NULL,
    "descricao" TEXT NOT NULL,

    CONSTRAINT "DocumentoObrigatorio_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MensagemChat" (
    "id" TEXT NOT NULL,
    "disputaId" TEXT NOT NULL,
    "licitanteId" TEXT,
    "autor" TEXT NOT NULL,
    "mensagem" TEXT NOT NULL,
    "horario" TIMESTAMP(3) NOT NULL,
    "tipoAutor" "TipoAutorChat" NOT NULL,

    CONSTRAINT "MensagemChat_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Sessao" (
    "id" TEXT NOT NULL,
    "licitanteId" TEXT NOT NULL,
    "disputaId" TEXT NOT NULL,
    "inicio" TIMESTAMP(3) NOT NULL,
    "fim" TIMESTAMP(3),
    "ip" TEXT NOT NULL,
    "hash" TEXT NOT NULL,

    CONSTRAINT "Sessao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LogAtividade" (
    "id" TEXT NOT NULL,
    "disputaId" TEXT NOT NULL,
    "usuarioId" TEXT,
    "acao" TEXT NOT NULL,
    "detalhes" TEXT,
    "data" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "LogAtividade_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Licitante_cnpj_key" ON "Licitante"("cnpj");

-- AddForeignKey
ALTER TABLE "Disputa" ADD CONSTRAINT "Disputa_editalId_fkey" FOREIGN KEY ("editalId") REFERENCES "Edital"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Proposta" ADD CONSTRAINT "Proposta_disputaId_fkey" FOREIGN KEY ("disputaId") REFERENCES "Disputa"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Proposta" ADD CONSTRAINT "Proposta_licitanteId_fkey" FOREIGN KEY ("licitanteId") REFERENCES "Licitante"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Lance" ADD CONSTRAINT "Lance_disputaId_fkey" FOREIGN KEY ("disputaId") REFERENCES "Disputa"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Lance" ADD CONSTRAINT "Lance_licitanteId_fkey" FOREIGN KEY ("licitanteId") REFERENCES "Licitante"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DocumentoLicitante" ADD CONSTRAINT "DocumentoLicitante_disputaId_fkey" FOREIGN KEY ("disputaId") REFERENCES "Disputa"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DocumentoLicitante" ADD CONSTRAINT "DocumentoLicitante_licitanteId_fkey" FOREIGN KEY ("licitanteId") REFERENCES "Licitante"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DocumentoObrigatorio" ADD CONSTRAINT "DocumentoObrigatorio_editalId_fkey" FOREIGN KEY ("editalId") REFERENCES "Edital"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MensagemChat" ADD CONSTRAINT "MensagemChat_disputaId_fkey" FOREIGN KEY ("disputaId") REFERENCES "Disputa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MensagemChat" ADD CONSTRAINT "MensagemChat_licitanteId_fkey" FOREIGN KEY ("licitanteId") REFERENCES "Licitante"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sessao" ADD CONSTRAINT "Sessao_licitanteId_fkey" FOREIGN KEY ("licitanteId") REFERENCES "Licitante"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sessao" ADD CONSTRAINT "Sessao_disputaId_fkey" FOREIGN KEY ("disputaId") REFERENCES "Disputa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LogAtividade" ADD CONSTRAINT "LogAtividade_disputaId_fkey" FOREIGN KEY ("disputaId") REFERENCES "Disputa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LogAtividade" ADD CONSTRAINT "LogAtividade_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE SET NULL ON UPDATE CASCADE;
