-- =====================================================
-- SCRIPT DE INSERÇÃO DE DADOS PARA O BANCO CONTRATAPP
-- =====================================================

-- BLOCO 1: Usuários (Perfis variados)
-- =====================================================
INSERT INTO "usuarios" ("id", "nome", "email", "senha", "perfil", "ativo", "ultimoAcesso", "refreshToken", "foto", "preferencias") VALUES
('550e8400-e29b-41d4-a716-446655440001', 'Administrador Sistema', 'admin@contratapp.com', '$2b$10$3QuZQYlq72kS435cGp6pFeYI4CsRBcrKLcZ0BIJoggIBxryR/Ih.e', 'ADMIN', true, NOW(), NULL, NULL, NULL),
('550e8400-e29b-41d4-a716-446655440002', 'João Silva Pregoeiro', 'joao.pregoeiro@prefeitura.gov.br', '$2b$10$3QuZQYlq72kS435cGp6pFeYI4CsRBcrKLcZ0BIJoggIBxryR/Ih.e', 'PREGOEIRO', true, NOW(), NULL, NULL, NULL),
('550e8400-e29b-41d4-a716-446655440003', 'Maria Santos Pregoeira', 'maria.pregoeira@prefeitura.gov.br', '$2b$10$3QuZQYlq72kS435cGp6pFeYI4CsRBcrKLcZ0BIJoggIBxryR/Ih.e', 'PREGOEIRO', true, NOW(), NULL, NULL, NULL),
('550e8400-e29b-41d4-a716-446655440004', 'Carlos Oliveira', 'carlos@empresa1.com.br', '$2b$10$3QuZQYlq72kS435cGp6pFeYI4CsRBcrKLcZ0BIJoggIBxryR/Ih.e', 'LICITANTE', true, NOW(), NULL, NULL, NULL),
('550e8400-e29b-41d4-a716-446655440005', 'Ana Costa', 'ana@empresa2.com.br', '$2b$10$3QuZQYlq72kS435cGp6pFeYI4CsRBcrKLcZ0BIJoggIBxryR/Ih.e', 'LICITANTE', true, NOW(), NULL, NULL, NULL),
('550e8400-e29b-41d4-a716-446655440006', 'Pedro Santos', 'pedro@empresa3.com.br', '$2b$10$3QuZQYlq72kS435cGp6pFeYI4CsRBcrKLcZ0BIJoggIBxryR/Ih.e', 'LICITANTE', true, NOW(), NULL, NULL, NULL),
('550e8400-e29b-41d4-a716-446655440007', 'Visualizador Público', 'publico@cidadao.com', '$2b$10$3QuZQYlq72kS435cGp6pFeYI4CsRBcrKLcZ0BIJoggIBxryR/Ih.e', 'VISUALIZADOR', true, NOW(), NULL, NULL, NULL);

-- BLOCO 2: Licitantes (Empresas)
-- =====================================================
INSERT INTO "Licitante" ("id", "razaoSocial", "cnpj", "tipoEmpresa") VALUES
('880e8400-e29b-41d4-a716-446655440001', 'Empresa Comercial Ltda', '12.345.678/0001-90', 'OUTRA'),
('880e8400-e29b-41d4-a716-446655440002', 'Micro Empresa Silva ME', '98.765.432/0001-10', 'ME'),
('880e8400-e29b-41d4-a716-446655440003', 'Pequena Empresa Costa EPP', '11.222.333/0001-44', 'EPP'),
('880e8400-e29b-41d4-a716-446655440004', 'Empresa Santos Ltda', '55.666.777/0001-88', 'OUTRA');

-- Vincular usuários aos licitantes
UPDATE "usuarios" SET "licitanteId" = '880e8400-e29b-41d4-a716-446655440001' WHERE "email" = 'carlos@empresa1.com.br';
UPDATE "usuarios" SET "licitanteId" = '880e8400-e29b-41d4-a716-446655440002' WHERE "email" = 'ana@empresa2.com.br';
UPDATE "usuarios" SET "licitanteId" = '880e8400-e29b-41d4-a716-446655440003' WHERE "email" = 'pedro@empresa3.com.br';

-- BLOCO 3: Editais (Diversas modalidades)
-- =====================================================
INSERT INTO "Edital" ("id", "numero", "objeto", "modalidade", "criterioJulgamento", "status", "dataAbertura", "arquivoPdf", "createdAt", "updatedAt") VALUES
('660e8400-e29b-41d4-a716-446655440001', '001/2024', 'Aquisição de Material de Escritório', 'PREGÃO_ELETRÔNICO', 'MENOR_PRECO', 'ABERTO', '2024-01-15 10:00:00', '/uploads/editais/001-2024.pdf', NOW(), NOW()),
('660e8400-e29b-41d4-a716-446655440002', '002/2024', 'Contratação de Serviços de Limpeza', 'PREGÃO_ELETRÔNICO', 'MENOR_PRECO', 'ABERTO', '2024-01-20 14:00:00', '/uploads/editais/002-2024.pdf', NOW(), NOW()),
('660e8400-e29b-41d4-a716-446655440003', '003/2024', 'Aquisição de Equipamentos de Informática', 'CONCORRÊNCIA', 'TÉCNICA_E_PRECO', 'ABERTO', '2024-01-25 09:00:00', '/uploads/editais/003-2024.pdf', NOW(), NOW()),
('660e8400-e29b-41d4-a716-446655440004', '004/2024', 'Contratação Emergencial de Medicamentos', 'DISPENSA', 'MENOR_PRECO', 'ENCERRADO', '2023-12-01 08:00:00', '/uploads/editais/004-2024.pdf', NOW(), NOW()),
('660e8400-e29b-41d4-a716-446655440005', '005/2024', 'Contratação de Artista Consagrado', 'INEXIGIBILIDADE', 'MELHOR_TÉCNICA', 'ABERTO', '2024-02-10 10:00:00', '/uploads/editais/005-2024.pdf', NOW(), NOW());

-- BLOCO 4: Disputas (Vários status)
-- =====================================================
INSERT INTO "Disputa" ("id", "editalId", "status", "inicio", "fimPrevisto", "encerramento", "tempoRestante") VALUES
('770e8400-e29b-41d4-a716-446655440001', '660e8400-e29b-41d4-a716-446655440001', 'ABERTA', '2024-01-15 10:00:00', '2024-01-15 12:00:00', NULL, 7200),
('770e8400-e29b-41d4-a716-446655440002', '660e8400-e29b-41d4-a716-446655440002', 'AGUARDANDO', '2024-01-20 14:00:00', '2024-01-20 16:00:00', NULL, 7200),
('770e8400-e29b-41d4-a716-446655440003', '660e8400-e29b-41d4-a716-446655440003', 'SUSPENSA', '2024-01-25 09:00:00', '2024-01-25 11:00:00', NULL, 3600),
('770e8400-e29b-41d4-a716-446655440004', '660e8400-e29b-41d4-a716-446655440004', 'ENCERRADA', '2023-12-01 08:00:00', '2023-12-01 10:00:00', '2023-12-01 10:05:00', 0);

-- BLOCO 5: Lotes e Itens
-- =====================================================
INSERT INTO "Lote" ("id", "numero", "descricao", "editalId", "status", "createdAt", "updatedAt") VALUES
('hh0e8400-e29b-41d4-a716-446655440001', 'LOTE 1', 'Material de Escritório - Papelaria', '660e8400-e29b-41d4-a716-446655440001', 'ATIVO', NOW(), NOW()),
('hh0e8400-e29b-41d4-a716-446655440002', 'LOTE 2', 'Material de Escritório - Informática', '660e8400-e29b-41d4-a716-446655440001', 'ATIVO', NOW(), NOW()),
('hh0e8400-e29b-41d4-a716-446655440003', 'LOTE 1', 'Serviços de Limpeza', '660e8400-e29b-41d4-a716-446655440002', 'ATIVO', NOW(), NOW()),
('hh0e8400-e29b-41d4-a716-446655440004', 'LOTE 1', 'Medicamentos Básicos', '660e8400-e29b-41d4-a716-446655440004', 'ATIVO', NOW(), NOW());

INSERT INTO "Item" ("id", "numero", "descricao", "quantidade", "unidade", "valorEstimado", "loteId", "status", "createdAt", "updatedAt") VALUES
('ii0e8400-e29b-41d4-a716-446655440001', '001', 'Papel A4 75g', 1000, 'RESMA', 250000, 'hh0e8400-e29b-41d4-a716-446655440001', 'ATIVO', NOW(), NOW()),
('ii0e8400-e29b-41d4-a716-446655440002', '002', 'Caneta Esferográfica Azul', 500, 'UNIDADE', 150000, 'hh0e8400-e29b-41d4-a716-446655440001', 'ATIVO', NOW(), NOW()),
('ii0e8400-e29b-41d4-a716-446655440003', '003', 'Mouse Óptico', 50, 'UNIDADE', 250000, 'hh0e8400-e29b-41d4-a716-446655440002', 'ATIVO', NOW(), NOW()),
('ii0e8400-e29b-41d4-a716-446655440004', '001', 'Paracetamol 500mg', 10000, 'COMPRIMIDO', 500000, 'hh0e8400-e29b-41d4-a716-446655440004', 'ATIVO', NOW(), NOW());

-- BLOCO 6: Propostas e Lances
-- =====================================================
INSERT INTO "Proposta" ("id", "disputaId", "licitanteId", "itemId", "valorCentavos", "dataEnvio", "arquivo", "status", "observacao", "versao", "createdBy", "updatedBy", "createdAt", "updatedAt") VALUES
('990e8400-e29b-41d4-a716-446655440001', '770e8400-e29b-41d4-a716-446655440001', '880e8400-e29b-41d4-a716-446655440001', 'ii0e8400-e29b-41d4-a716-446655440001', 1500000, NOW() - INTERVAL '1 day', '/uploads/propostas/p1.pdf', 'ACEITA', 'Proposta inicial', 1, 'system', NULL, NOW(), NOW()),
('990e8400-e29b-41d4-a716-446655440002', '770e8400-e29b-41d4-a716-446655440001', '880e8400-e29b-41d4-a716-446655440002', 'ii0e8400-e29b-41d4-a716-446655440001', 1480000, NOW() - INTERVAL '1 day', '/uploads/propostas/p2.pdf', 'PENDENTE', 'Proposta ME', 1, 'system', NULL, NOW(), NOW()),
('990e8400-e29b-41d4-a716-446655440003', '770e8400-e29b-41d4-a716-446655440004', '880e8400-e29b-41d4-a716-446655440004', 'ii0e8400-e29b-41d4-a716-446655440004', 480000, NOW() - INTERVAL '30 days', '/uploads/propostas/p4.pdf', 'ACEITA', 'Disputa encerrada', 1, 'system', NULL, NOW(), NOW());

INSERT INTO "Lance" ("id", "disputaId", "licitanteId", "valorCentavos", "horario", "ip", "userAgent") VALUES
('aa0e8400-e29b-41d4-a716-446655440001', '770e8400-e29b-41d4-a716-446655440001', '880e8400-e29b-41d4-a716-446655440001', 1450000, NOW() - INTERVAL '30 minutes', '192.168.1.100', 'Mozilla/5.0'),
('aa0e8400-e29b-41d4-a716-446655440002', '770e8400-e29b-41d4-a716-446655440001', '880e8400-e29b-41d4-a716-446655440002', 1400000, NOW() - INTERVAL '25 minutes', '192.168.1.101', 'Mozilla/5.0'),
('aa0e8400-e29b-41d4-a716-446655440003', '770e8400-e29b-41d4-a716-446655440001', '880e8400-e29b-41d4-a716-446655440001', 1380000, NOW() - INTERVAL '20 minutes', '192.168.1.100', 'Mozilla/5.0');

-- BLOCO 7: Documentos e Documentos Obrigatórios
-- =====================================================
INSERT INTO "DocumentoObrigatorio" ("id", "editalId", "tipoDocumento", "descricao", "prazoValidade", "observacoes", "createdAt", "updatedAt") VALUES
('cc0e8400-e29b-41d4-a716-446655440001', '660e8400-e29b-41d4-a716-446655440001', 'HABILITACAO_JURIDICA', 'Contrato Social', 365, NULL, NOW(), NOW()),
('cc0e8400-e29b-41d4-a716-446655440002', '660e8400-e29b-41d4-a716-446655440001', 'CERTIDAO_NEGATIVA_DEBITOS', 'CND Federal', 180, NULL, NOW(), NOW());

INSERT INTO "DocumentoLicitante" ("id", "disputaId", "licitanteId", "tipoDocumento", "nomeOriginal", "descricao", "arquivoPath", "dataEnvio", "versao", "status", "valido", "hashDocumento", "assinaturaBase64", "assinadoPor", "observacoes", "dataValidade", "dataValidacao", "validadoPor") VALUES
('dd0e8400-e29b-41d4-a716-446655440001', '770e8400-e29b-41d4-a716-446655440001', '880e8400-e29b-41d4-a716-446655440001', 'HABILITACAO_JURIDICA', 'contrato.pdf', 'Contrato Social', '/docs/c1.pdf', NOW(), 1, 'VALIDADO', true, 'hash1', 'sig1', 'user1', 'OK', '2025-01-01', NOW(), 'admin'),
('dd0e8400-e29b-41d4-a716-446655440002', '770e8400-e29b-41d4-a716-446655440001', '880e8400-e29b-41d4-a716-446655440002', 'CERTIDAO_NEGATIVA_DEBITOS', 'cnd.pdf', 'CND', '/docs/c2.pdf', NOW(), 1, 'PENDENTE', false, 'hash2', NULL, NULL, NULL, NULL, NULL, NULL);

-- BLOCO 8: Recursos, Sanções e Prazos
-- =====================================================
INSERT INTO "Recurso" ("id", "tipo", "status", "motivo", "fundamentacao", "resposta", "dataEnvio", "dataResposta", "prazoResposta", "editalId", "licitanteId", "usuarioId", "respondidoPor", "createdAt", "updatedAt") VALUES
('jj0e8400-e29b-41d4-a716-446655440001', 'IMPUGNACAO', 'DEFERIDO', 'Erro no edital', 'Item 1 descritivo errado', 'Corrigido', NOW() - INTERVAL '5 days', NOW() - INTERVAL '4 days', 3, '660e8400-e29b-41d4-a716-446655440001', '880e8400-e29b-41d4-a716-446655440001', '550e8400-e29b-41d4-a716-446655440004', '550e8400-e29b-41d4-a716-446655440002', NOW(), NOW()),
('jj0e8400-e29b-41d4-a716-446655440002', 'RECURSO', 'INDEFERIDO', 'Inabilitação indevida', 'Tenho os documentos', 'Documentos vencidos', NOW() - INTERVAL '1 day', NOW(), 5, '660e8400-e29b-41d4-a716-446655440001', '880e8400-e29b-41d4-a716-446655440002', '550e8400-e29b-41d4-a716-446655440005', '550e8400-e29b-41d4-a716-446655440002', NOW(), NOW());

INSERT INTO "Sancao" ("id", "tipo", "status", "motivo", "fundamentacao", "dataInicio", "dataFim", "valorMulta", "observacoes", "editalId", "licitanteId", "aplicadoPor", "revogadoPor", "createdAt", "updatedAt") VALUES
('kk0e8400-e29b-41d4-a716-446655440001', 'ADVERTENCIA', 'EM_VIGOR', 'Atraso leve', 'Atraso de 1 dia', NOW(), NULL, NULL, 'Advertência formal', '660e8400-e29b-41d4-a716-446655440001', '880e8400-e29b-41d4-a716-446655440001', '550e8400-e29b-41d4-a716-446655440002', NULL, NOW(), NOW()),
('kk0e8400-e29b-41d4-a716-446655440002', 'MULTA', 'PENDENTE', 'Não entrega', 'Não entregou item', NOW(), NULL, 500000, 'Multa de 5 mil reais', '660e8400-e29b-41d4-a716-446655440004', '880e8400-e29b-41d4-a716-446655440004', '550e8400-e29b-41d4-a716-446655440002', NULL, NOW(), NOW());

INSERT INTO "Prazo" ("id", "tipo", "status", "descricao", "dataInicio", "dataFim", "dataConclusao", "observacoes", "editalId", "licitanteId", "itemId", "criadoPor", "concluidoPor", "createdAt", "updatedAt") VALUES
('ll0e8400-e29b-41d4-a716-446655440001', 'ENTREGA_DOCUMENTOS', 'CONCLUIDO', 'Entrega Docs Habilitação', NOW() - INTERVAL '10 days', NOW() - INTERVAL '5 days', NOW() - INTERVAL '6 days', 'Todos entregaram', '660e8400-e29b-41d4-a716-446655440001', NULL, NULL, '550e8400-e29b-41d4-a716-446655440002', '550e8400-e29b-41d4-a716-446655440002', NOW(), NOW());

-- BLOCO 9: Chat e Logs
-- =====================================================
INSERT INTO "MensagemChat" ("id", "editalId", "autorId", "tipoAutor", "conteudo", "createdAt", "updatedAt", "disputaId", "licitanteId") VALUES
('ee0e8400-e29b-41d4-a716-446655440001', '660e8400-e29b-41d4-a716-446655440001', '550e8400-e29b-41d4-a716-446655440002', 'PREGOEIRO', 'Sessão aberta', NOW(), NOW(), '770e8400-e29b-41d4-a716-446655440001', NULL);

INSERT INTO "LogAtividade" ("id", "tipo", "acao", "detalhes", "data", "ip", "userAgent", "sessaoId", "hashSessao", "status", "nivel", "modulo", "entidadeId", "entidadeTipo", "metadata") VALUES
('gg0e8400-e29b-41d4-a716-446655440001', 'DISPUTA_ABERTA', 'Abertura', 'Disputa iniciada', NOW(), '127.0.0.1', 'Chrome', 'sess1', 'hash1', 'SUCESSO', 'INFO', 'DISPUTA', '770e8400-e29b-41d4-a716-446655440001', 'DISPUTA', '{}');
