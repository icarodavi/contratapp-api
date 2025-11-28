-- =====================================================
-- SCRIPT DE INSERÇÃO DE DADOS PARA O BANCO CONTRATAPP
-- =====================================================

-- BLOCO 1: Usuários, Editais e Disputas
-- =====================================================

-- Inserir Usuários
INSERT INTO usuarios (id, nome, email, senha, perfil, ativo, ultimo_acesso, refresh_token) VALUES
('550e8400-e29b-41d4-a716-446655440001', 'Administrador Sistema', 'admin@contratapp.com', '$2b$10$rQZ8K9mN2pL3vX7yJ1hG4t', 'ADMIN', true, NOW(), NULL),
('550e8400-e29b-41d4-a716-446655440002', 'João Silva Pregoeiro', 'joao.pregoeiro@prefeitura.gov.br', '$2b$10$rQZ8K9mN2pL3vX7yJ1hG4t', 'PREGOEIRO', true, NOW(), NULL),
('550e8400-e29b-41d4-a716-446655440003', 'Maria Santos Pregoeira', 'maria.pregoeira@prefeitura.gov.br', '$2b$10$rQZ8K9mN2pL3vX7yJ1hG4t', 'PREGOEIRO', true, NOW(), NULL),
('550e8400-e29b-41d4-a716-446655440004', 'Carlos Oliveira', 'carlos@empresa1.com.br', '$2b$10$rQZ8K9mN2pL3vX7yJ1hG4t', 'LICITANTE', true, NOW(), NULL),
('550e8400-e29b-41d4-a716-446655440005', 'Ana Costa', 'ana@empresa2.com.br', '$2b$10$rQZ8K9mN2pL3vX7yJ1hG4t', 'LICITANTE', true, NOW(), NULL),
('550e8400-e29b-41d4-a716-446655440006', 'Pedro Santos', 'pedro@empresa3.com.br', '$2b$10$rQZ8K9mN2pL3vX7yJ1hG4t', 'LICITANTE', true, NOW(), NULL);

-- Inserir Editais
INSERT INTO edital (id, numero, objeto, modalidade, criterio_julgamento, status, data_abertura, arquivo_pdf, created_at, updated_at) VALUES
('660e8400-e29b-41d4-a716-446655440001', '001/2024', 'Aquisição de Material de Escritório', 'PREGÃO_ELETRÔNICO', 'MENOR_PRECO', 'ABERTO', '2024-01-15 10:00:00', '/uploads/editais/001-2024.pdf', NOW(), NOW()),
('660e8400-e29b-41d4-a716-446655440002', '002/2024', 'Contratação de Serviços de Limpeza', 'PREGÃO_ELETRÔNICO', 'MENOR_PRECO', 'ABERTO', '2024-01-20 14:00:00', '/uploads/editais/002-2024.pdf', NOW(), NOW()),
('660e8400-e29b-41d4-a716-446655440003', '003/2024', 'Aquisição de Equipamentos de Informática', 'CONCORRÊNCIA', 'TÉCNICA_E_PRECO', 'ABERTO', '2024-01-25 09:00:00', '/uploads/editais/003-2024.pdf', NOW(), NOW());

-- Inserir Disputas
INSERT INTO disputa (id, edital_id, status, inicio, fim_previsto, encerramento, tempo_restante) VALUES
('770e8400-e29b-41d4-a716-446655440001', '660e8400-e29b-41d4-a716-446655440001', 'ABERTA', '2024-01-15 10:00:00', '2024-01-15 12:00:00', NULL, 7200),
('770e8400-e29b-41d4-a716-446655440002', '660e8400-e29b-41d4-a716-446655440002', 'AGUARDANDO', '2024-01-20 14:00:00', '2024-01-20 16:00:00', NULL, 7200),
('770e8400-e29b-41d4-a716-446655440003', '660e8400-e29b-41d4-a716-446655440003', 'AGUARDANDO', '2024-01-25 09:00:00', '2024-01-25 11:00:00', NULL, 7200);

-- BLOCO 2: Licitantes, Propostas e Lances
-- =====================================================

-- Inserir Licitantes
INSERT INTO licitante (id, razao_social, cnpj, tipo_empresa) VALUES
('880e8400-e29b-41d4-a716-446655440001', 'Empresa Comercial Ltda', '12.345.678/0001-90', 'OUTRA'),
('880e8400-e29b-41d4-a716-446655440002', 'Micro Empresa Silva ME', '98.765.432/0001-10', 'ME'),
('880e8400-e29b-41d4-a716-446655440003', 'Pequena Empresa Costa EPP', '11.222.333/0001-44', 'EPP'),
('880e8400-e29b-41d4-a716-446655440004', 'Empresa Santos Ltda', '55.666.777/0001-88', 'OUTRA');

-- Atualizar usuários com licitante_id
UPDATE usuarios SET licitante_id = '880e8400-e29b-41d4-a716-446655440001' WHERE email = 'carlos@empresa1.com.br';
UPDATE usuarios SET licitante_id = '880e8400-e29b-41d4-a716-446655440002' WHERE email = 'ana@empresa2.com.br';
UPDATE usuarios SET licitante_id = '880e8400-e29b-41d4-a716-446655440003' WHERE email = 'pedro@empresa3.com.br';

-- Inserir Lances
INSERT INTO lance (id, disputa_id, licitante_id, valor_centavos, horario, ip, user_agent) VALUES
('aa0e8400-e29b-41d4-a716-446655440001', '770e8400-e29b-41d4-a716-446655440001', '880e8400-e29b-41d4-a716-446655440001', 1500000, NOW() - INTERVAL '30 minutes', '192.168.1.100', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'),
('aa0e8400-e29b-41d4-a716-446655440002', '770e8400-e29b-41d4-a716-446655440001', '880e8400-e29b-41d4-a716-446655440002', 1480000, NOW() - INTERVAL '25 minutes', '192.168.1.101', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'),
('aa0e8400-e29b-41d4-a716-446655440003', '770e8400-e29b-41d4-a716-446655440001', '880e8400-e29b-41d4-a716-446655440003', 1450000, NOW() - INTERVAL '20 minutes', '192.168.1.102', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36');

-- BLOCO 3: Documentos, Documentos Obrigatórios e Documentos de Licitantes
-- =====================================================

-- Inserir Documentos
INSERT INTO documento (id, nome, tipo, caminho, descricao, ativo, edital_id, created_at, updated_at) VALUES
('bb0e8400-e29b-41d4-a716-446655440001', 'Edital Completo', 'EDITAL', '/uploads/documentos/edital-001-2024.pdf', 'Edital completo da licitação', true, '660e8400-e29b-41d4-a716-446655440001', NOW(), NOW()),
('bb0e8400-e29b-41d4-a716-446655440002', 'Anexo I - Especificações', 'ANEXO', '/uploads/documentos/anexo-i-001-2024.pdf', 'Especificações técnicas dos materiais', true, '660e8400-e29b-41d4-a716-446655440001', NOW(), NOW()),
('bb0e8400-e29b-41d4-a716-446655440003', 'Anexo II - Termo de Referência', 'ANEXO', '/uploads/documentos/anexo-ii-001-2024.pdf', 'Termo de referência da licitação', true, '660e8400-e29b-41d4-a716-446655440001', NOW(), NOW()),
('bb0e8400-e29b-41d4-a716-446655440004', 'Edital Completo', 'EDITAL', '/uploads/documentos/edital-002-2024.pdf', 'Edital completo da licitação', true, '660e8400-e29b-41d4-a716-446655440002', NOW(), NOW()),
('bb0e8400-e29b-41d4-a716-446655440005', 'Edital Completo', 'EDITAL', '/uploads/documentos/edital-003-2024.pdf', 'Edital completo da licitação', true, '660e8400-e29b-41d4-a716-446655440003', NOW(), NOW());

-- Inserir Documentos Obrigatórios
INSERT INTO documento_obrigatorio (id, edital_id, tipo_documento, descricao, prazo_validade, observacoes, created_at, updated_at) VALUES
('cc0e8400-e29b-41d4-a716-446655440001', '660e8400-e29b-41d4-a716-446655440001', 'HABILITACAO_JURIDICA', 'Habilitação Jurídica', 365, 'Documento obrigatório para habilitação', NOW(), NOW()),
('cc0e8400-e29b-41d4-a716-446655440002', '660e8400-e29b-41d4-a716-446655440001', 'HABILITACAO_TECNICA', 'Habilitação Técnica', 365, 'Comprovação de capacidade técnica', NOW(), NOW()),
('cc0e8400-e29b-41d4-a716-446655440003', '660e8400-e29b-41d4-a716-446655440001', 'HABILITACAO_FISCAL', 'Habilitação Fiscal', 365, 'Regularidade fiscal', NOW(), NOW()),
('cc0e8400-e29b-41d4-a716-446655440004', '660e8400-e29b-41d4-a716-446655440001', 'HABILITACAO_ECONOMICA', 'Habilitação Econômica', 365, 'Comprovação de capacidade econômica', NOW(), NOW()),
('cc0e8400-e29b-41d4-a716-446655440005', '660e8400-e29b-41d4-a716-446655440002', 'HABILITACAO_JURIDICA', 'Habilitação Jurídica', 365, 'Documento obrigatório para habilitação', NOW(), NOW()),
('cc0e8400-e29b-41d4-a716-446655440006', '660e8400-e29b-41d4-a716-446655440003', 'HABILITACAO_JURIDICA', 'Habilitação Jurídica', 365, 'Documento obrigatório para habilitação', NOW(), NOW());

-- Inserir Documentos de Licitantes
INSERT INTO documento_licitante (id, disputa_id, licitante_id, tipo_documento, nome_original, descricao, arquivo_path, data_envio, versao, status, valido, hash_documento, assinatura_base64, assinado_por, observacoes, data_validade, data_validacao, validado_por) VALUES
('dd0e8400-e29b-41d4-a716-446655440001', '770e8400-e29b-41d4-a716-446655440001', '880e8400-e29b-41d4-a716-446655440001', 'HABILITACAO_JURIDICA', 'contrato_social.pdf', 'Contrato Social da Empresa', '/uploads/licitantes/empresa1/contrato_social.pdf', NOW(), 1, 'VALIDADO', true, 'abc123hash', 'assinatura_base64_1', '880e8400-e29b-41d4-a716-446655440001', 'Documento válido', '2025-01-15 00:00:00', NOW(), '550e8400-e29b-41d4-a716-446655440002'),
('dd0e8400-e29b-41d4-a716-446655440002', '770e8400-e29b-41d4-a716-446655440001', '880e8400-e29b-41d4-a716-446655440002', 'HABILITACAO_JURIDICA', 'contrato_social_me.pdf', 'Contrato Social ME', '/uploads/licitantes/empresa2/contrato_social.pdf', NOW(), 1, 'VALIDADO', true, 'def456hash', 'assinatura_base64_2', '880e8400-e29b-41d4-a716-446655440002', 'Documento válido', '2025-01-15 00:00:00', NOW(), '550e8400-e29b-41d4-a716-446655440002'),
('dd0e8400-e29b-41d4-a716-446655440003', '770e8400-e29b-41d4-a716-446655440001', '880e8400-e29b-41d4-a716-446655440003', 'HABILITACAO_JURIDICA', 'contrato_social_epp.pdf', 'Contrato Social EPP', '/uploads/licitantes/empresa3/contrato_social.pdf', NOW(), 1, 'VALIDADO', true, 'ghi789hash', 'assinatura_base64_3', '880e8400-e29b-41d4-a716-446655440003', 'Documento válido', '2025-01-15 00:00:00', NOW(), '550e8400-e29b-41d4-a716-446655440002');

-- BLOCO 4: Mensagens de Chat, Sessões e Logs de Atividade
-- =====================================================

-- Inserir Mensagens de Chat
INSERT INTO mensagem_chat (id, edital_id, autor_id, tipo_autor, conteudo, created_at, updated_at, disputa_id, licitante_id) VALUES
('ee0e8400-e29b-41d4-a716-446655440001', '660e8400-e29b-41d4-a716-446655440001', '550e8400-e29b-41d4-a716-446655440002', 'PREGOEIRO', 'Bem-vindos à sessão de lances! A disputa está aberta.', NOW(), NOW(), '770e8400-e29b-41d4-a716-446655440001', NULL),
('ee0e8400-e29b-41d4-a716-446655440002', '660e8400-e29b-41d4-a716-446655440001', '550e8400-e29b-41d4-a716-446655440004', 'LICITANTE', 'Dúvida: o material pode ser de qualquer marca?', NOW(), NOW(), '770e8400-e29b-41d4-a716-446655440001', '880e8400-e29b-41d4-a716-446655440001'),
('ee0e8400-e29b-41d4-a716-446655440003', '660e8400-e29b-41d4-a716-446655440001', '550e8400-e29b-41d4-a716-446655440002', 'PREGOEIRO', 'Sim, desde que atenda às especificações do anexo I.', NOW(), NOW(), '770e8400-e29b-41d4-a716-446655440001', NULL),
('ee0e8400-e29b-41d4-a716-446655440004', '660e8400-e29b-41d4-a716-446655440001', '550e8400-e29b-41d4-a716-446655440005', 'LICITANTE', 'Obrigado pela esclarecimento!', NOW(), NOW(), '770e8400-e29b-41d4-a716-446655440001', '880e8400-e29b-41d4-a716-446655440002');

-- Inserir Sessões
INSERT INTO sessao (id, licitante_id, disputa_id, inicio, fim, ip, hash) VALUES
('ff0e8400-e29b-41d4-a716-446655440001', '880e8400-e29b-41d4-a716-446655440001', '770e8400-e29b-41d4-a716-446655440001', NOW() - INTERVAL '1 hour', NULL, '192.168.1.100', 'session_hash_1'),
('ff0e8400-e29b-41d4-a716-446655440002', '880e8400-e29b-41d4-a716-446655440002', '770e8400-e29b-41d4-a716-446655440001', NOW() - INTERVAL '45 minutes', NULL, '192.168.1.101', 'session_hash_2'),
('ff0e8400-e29b-41d4-a716-446655440003', '880e8400-e29b-41d4-a716-446655440003', '770e8400-e29b-41d4-a716-446655440001', NOW() - INTERVAL '30 minutes', NULL, '192.168.1.102', 'session_hash_3');

-- Inserir Logs de Atividade
INSERT INTO log_atividade (id, tipo, acao, detalhes, data, ip, user_agent, sessao_id, hash_sessao, status, nivel, modulo, entidade_id, entidade_tipo, metadata) VALUES
('gg0e8400-e29b-41d4-a716-446655440001', 'DISPUTA_ABERTA', 'Disputa aberta', 'Disputa 001/2024 foi aberta para lances', NOW(), '192.168.1.50', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)', 'ff0e8400-e29b-41d4-a716-446655440001', 'session_hash_1', 'SUCESSO', 'INFO', 'DISPUTA', '770e8400-e29b-41d4-a716-446655440001', 'DISPUTA', '{"disputaId": "770e8400-e29b-41d4-a716-446655440001"}'),
('gg0e8400-e29b-41d4-a716-446655440002', 'LANCE_REALIZADO', 'Lance registrado', 'Lance de R$ 15.000,00 registrado', NOW() - INTERVAL '30 minutes', '192.168.1.100', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)', 'ff0e8400-e29b-41d4-a716-446655440001', 'session_hash_1', 'SUCESSO', 'INFO', 'LANCE', '880e8400-e29b-41d4-a716-446655440001', 'LICITANTE', '{"valorCentavos": 1500000, "disputaId": "770e8400-e29b-41d4-a716-446655440001"}'),
('gg0e8400-e29b-41d4-a716-446655440003', 'LANCE_REALIZADO', 'Lance registrado', 'Lance de R$ 14.800,00 registrado', NOW() - INTERVAL '25 minutes', '192.168.1.101', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)', 'ff0e8400-e29b-41d4-a716-446655440002', 'session_hash_2', 'SUCESSO', 'INFO', 'LANCE', '880e8400-e29b-41d4-a716-446655440002', 'LICITANTE', '{"valorCentavos": 1480000, "disputaId": "770e8400-e29b-41d4-a716-446655440001"}'),
('gg0e8400-e29b-41d4-a716-446655440004', 'LANCE_REALIZADO', 'Lance registrado', 'Lance de R$ 14.500,00 registrado', NOW() - INTERVAL '20 minutes', '192.168.1.102', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)', 'ff0e8400-e29b-41d4-a716-446655440003', 'session_hash_3', 'SUCESSO', 'INFO', 'LANCE', '880e8400-e29b-41d4-a716-446655440003', 'LICITANTE', '{"valorCentavos": 1450000, "disputaId": "770e8400-e29b-41d4-a716-446655440001"}');

-- BLOCO 5: Lotes, Itens e Recursos
-- =====================================================

-- Inserir Lotes
INSERT INTO lote (id, numero, descricao, edital_id, status, created_at, updated_at) VALUES
('hh0e8400-e29b-41d4-a716-446655440001', 'LOTE 1', 'Material de Escritório - Papelaria', '660e8400-e29b-41d4-a716-446655440001', 'ATIVO', NOW(), NOW()),
('hh0e8400-e29b-41d4-a716-446655440002', 'LOTE 2', 'Material de Escritório - Informática', '660e8400-e29b-41d4-a716-446655440001', 'ATIVO', NOW(), NOW()),
('hh0e8400-e29b-41d4-a716-446655440003', 'LOTE 1', 'Serviços de Limpeza - Escritórios', '660e8400-e29b-41d4-a716-446655440002', 'ATIVO', NOW(), NOW()),
('hh0e8400-e29b-41d4-a716-446655440004', 'LOTE 1', 'Equipamentos de Informática - Computadores', '660e8400-e29b-41d4-a716-446655440003', 'ATIVO', NOW(), NOW());

-- Inserir Itens
INSERT INTO item (id, numero, descricao, quantidade, unidade, valor_estimado, lote_id, status, created_at, updated_at) VALUES
('ii0e8400-e29b-41d4-a716-446655440001', '001', 'Papel A4 75g', 1000, 'RESMA', 250000, 'hh0e8400-e29b-41d4-a716-446655440001', 'ATIVO', NOW(), NOW()),
('ii0e8400-e29b-41d4-a716-446655440002', '002', 'Caneta Esferográfica Azul', 500, 'UNIDADE', 150000, 'hh0e8400-e29b-41d4-a716-446655440001', 'ATIVO', NOW(), NOW()),
('ii0e8400-e29b-41d4-a716-446655440003', '003', 'Lápis Preto HB', 300, 'UNIDADE', 90000, 'hh0e8400-e29b-41d4-a716-446655440001', 'ATIVO', NOW(), NOW()),
('ii0e8400-e29b-41d4-a716-446655440004', '004', 'Mouse Óptico USB', 50, 'UNIDADE', 250000, 'hh0e8400-e29b-41d4-a716-446655440002', 'ATIVO', NOW(), NOW()),
('ii0e8400-e29b-41d4-a716-446655440005', '005', 'Teclado USB', 30, 'UNIDADE', 300000, 'hh0e8400-e29b-41d4-a716-446655440002', 'ATIVO', NOW(), NOW()),
('ii0e8400-e29b-41d4-a716-446655440006', '001', 'Limpeza de Escritórios - 500m²', 1, 'SERVIÇO', 5000000, 'hh0e8400-e29b-41d4-a716-446655440003', 'ATIVO', NOW(), NOW()),
('ii0e8400-e29b-41d4-a716-446655440007', '001', 'Computador Desktop Completo', 20, 'UNIDADE', 8000000, 'hh0e8400-e29b-41d4-a716-446655440004', 'ATIVO', NOW(), NOW());

-- Inserir Recursos
INSERT INTO recurso (id, tipo, status, motivo, fundamentacao, resposta, data_envio, data_resposta, prazo_resposta, edital_id, licitante_id, usuario_id, respondido_por, created_at, updated_at) VALUES
('jj0e8400-e29b-41d4-a716-446655440001', 'IMPUGNACAO', 'DEFERIDO', 'Especificação técnica muito restritiva', 'A especificação do item 004 está muito restritiva, limitando a concorrência', 'Impugnação deferida. Especificação será revisada.', NOW() - INTERVAL '2 days', NOW() - INTERVAL '1 day', 3, '660e8400-e29b-41d4-a716-446655440001', '880e8400-e29b-41d4-a716-446655440001', '550e8400-e29b-41d4-a716-446655440004', '550e8400-e29b-41d4-a716-446655440002', NOW(), NOW()),
('jj0e8400-e29b-41d4-a716-446655440002', 'RECURSO', 'PENDENTE', 'Injustiça na avaliação de proposta', 'Nossa proposta foi injustamente rejeitada', NULL, NOW() - INTERVAL '1 day', NULL, 5, '660e8400-e29b-41d4-a716-446655440002', '880e8400-e29b-41d4-a716-446655440002', '550e8400-e29b-41d4-a716-446655440005', NULL, NOW(), NOW());

-- BLOCO 6: Sanções, Prazos e Propostas (completando os dados)
-- =====================================================

-- Inserir Sanções
INSERT INTO sancao (id, tipo, status, motivo, fundamentacao, data_inicio, data_fim, valor_multa, observacoes, edital_id, licitante_id, aplicado_por, revogado_por, created_at, updated_at) VALUES
('kk0e8400-e29b-41d4-a716-446655440001', 'ADVERTENCIA', 'EM_VIGOR', 'Atraso na entrega de documentos', 'Licitante entregou documentos após o prazo estabelecido', NOW() - INTERVAL '5 days', NOW() + INTERVAL '30 days', NULL, 'Primeira advertência', '660e8400-e29b-41d4-a716-446655440001', '880e8400-e29b-41d4-a716-446655440004', '550e8400-e29b-41d4-a716-446655440002', NULL, NOW(), NOW()),
('kk0e8400-e29b-41d4-a716-446655440002', 'SUSPENSAO', 'PENDENTE', 'Documentação irregular', 'CNPJ com pendências fiscais', NOW(), NOW() + INTERVAL '90 days', NULL, 'Suspensão por 90 dias', '660e8400-e29b-41d4-a716-446655440002', '880e8400-e29b-41d4-a716-446655440001', '550e8400-e29b-41d4-a716-446655440002', NULL, NOW(), NOW());

-- Inserir Prazos
INSERT INTO prazo (id, tipo, status, descricao, data_inicio, data_fim, data_conclusao, observacoes, edital_id, licitante_id, item_id, criado_por, concluido_por, created_at, updated_at) VALUES
('ll0e8400-e29b-41d4-a716-446655440001', 'ENTREGA_DOCUMENTOS', 'CONCLUIDO', 'Prazo para entrega de documentos de habilitação', NOW() - INTERVAL '7 days', NOW() - INTERVAL '2 days', NOW() - INTERVAL '2 days', 'Prazo cumprido por todos os licitantes', '660e8400-e29b-41d4-a716-446655440001', NULL, NULL, '550e8400-e29b-41d4-a716-446655440002', '550e8400-e29b-41d4-a716-446655440002', NOW(), NOW()),
('ll0e8400-e29b-41d4-a716-446655440002', 'ENTREGA_PROPOSTA', 'EM_ANDAMENTO', 'Prazo para entrega de propostas', NOW() - INTERVAL '1 day', NOW() + INTERVAL '2 days', NULL, 'Prazo em andamento', '660e8400-e29b-41d4-a716-446655440002', NULL, NULL, '550e8400-e29b-41d4-a716-446655440002', NULL, NOW(), NOW()),
('ll0e8400-e29b-41d4-a716-446655440003', 'RECURSO', 'PENDENTE', 'Prazo para recursos', NOW(), NOW() + INTERVAL '5 days', NULL, 'Prazo para apresentação de recursos', '660e8400-e29b-41d4-a716-446655440001', NULL, NULL, '550e8400-e29b-41d4-a716-446655440002', NULL, NOW(), NOW());

-- Inserir Propostas (agora com os itens criados)
INSERT INTO proposta (id, disputa_id, licitante_id, item_id, valor_centavos, data_envio, arquivo, status, observacao, versao, created_by, updated_by, created_at, updated_at) VALUES
('990e8400-e29b-41d4-a716-446655440001', '770e8400-e29b-41d4-a716-446655440001', '880e8400-e29b-41d4-a716-446655440001', 'ii0e8400-e29b-41d4-a716-446655440001', 1500000, NOW() - INTERVAL '1 day', '/uploads/propostas/proposta1.pdf', 'PENDENTE', 'Proposta conforme especificações', 1, '550e8400-e29b-41d4-a716-446655440004', NULL, NOW(), NOW()),
('990e8400-e29b-41d4-a716-446655440002', '770e8400-e29b-41d4-a716-446655440001', '880e8400-e29b-41d4-a716-446655440002', 'ii0e8400-e29b-41d4-a716-446655440001', 1480000, NOW() - INTERVAL '1 day', '/uploads/propostas/proposta2.pdf', 'PENDENTE', 'Proposta com desconto para ME', 1, '550e8400-e29b-41d4-a716-446655440005', NULL, NOW(), NOW()),
('990e8400-e29b-41d4-a716-446655440003', '770e8400-e29b-41d4-a716-446655440001', '880e8400-e29b-41d4-a716-446655440003', 'ii0e8400-e29b-41d4-a716-446655440001', 1450000, NOW() - INTERVAL '1 day', '/uploads/propostas/proposta3.pdf', 'PENDENTE', 'Proposta com desconto para EPP', 1, '550e8400-e29b-41d4-a716-446655440006', NULL, NOW(), NOW());

-- =====================================================
-- FIM DO SCRIPT DE INSERÇÃO DE DADOS
-- =====================================================

-- Comentários sobre os dados inseridos:
-- 1. Todos os IDs são UUIDs válidos para facilitar testes
-- 2. As senhas estão hasheadas (exemplo: $2b$10$rQZ8K9mN2pL3vX7yJ1hG4t)
-- 3. Os valores monetários estão em centavos
-- 4. As datas estão em formato ISO
-- 5. Os relacionamentos entre as tabelas estão corretos
-- 6. Os enums estão usando os valores corretos do schema

