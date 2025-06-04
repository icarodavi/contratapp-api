# Product Requirements Document (PRD)

## 1. Visão Geral do Projeto

O sistema permitirá a realização da fase de disputa de processos licitatórios eletrônicos conforme a Lei nº 14.133/21, garantindo isonomia, rastreabilidade e transparência.

Funcionalidades centrais:
- Controle oficial de tempo da disputa
- Envio de propostas e documentos pelos licitantes
- Recebimento e exibição de lances em tempo real
- Comunicação pública entre pregoeiro e licitantes (chat)
- Geração de relatórios e validação pública via QR Code

---

## 2. Objetivos do Produto

- Prover uma plataforma segura e auditável para a realização da fase de disputa de licitações públicas.
- Garantir comunicação e lances em tempo real.
- Proteger juridicamente a administração pública em relação à lisura do processo licitatório.

---

## 3. Funcionalidades Principais

### 3.1 Disputa Eletrônica
- Controle centralizado de tempo pela comissão/pregoeiro.
- Sincronização em tempo real usando WebSocket.

### 3.2 Envio de Propostas e Documentos
- Licitantes fazem upload de:
  - Proposta comercial
  - Documentação de habilitação
  - Outros documentos
- Controle de versões e histórico de documentos.

### 3.3 Lances em Tempo Real
- Lances decrescentes enviados via WebSocket.
- Aplicação automática da regra de empate ficto (ME/EPP).

### 3.4 Chat Público da Disputa
- Chat visível a todos os participantes autenticados.
- Envio de mensagens públicas entre licitantes e pregoeiro.

### 3.5 Relatórios e Validação Pública
- Geração de ata final da disputa em PDF.
- Inclusão de QR Code para validação pública dos documentos.

---

## 4. Requisitos Técnicos

- **Backend**: NestJS + Prisma ORM + PostgreSQL
- **Frontend**: Next.js (React) + TailwindCSS
- **Real-time**: WebSocket (Socket.IO)
- **Autenticação**: JWT Tokens
- **Infraestrutura**: Docker, Deploy em VPS ou Cloud
- **Documentação**: Swagger (OpenAPI)

---

## 5. Perfis de Usuário

- **Administrador**: Controle total do sistema
- **Pregoeiro/Comissão**: Controle da disputa, tempo, chat
- **Licitante**: Envio de documentos, participação no chat e disputa
- **Visualizador**: Apenas visualização pública das disputas (limitado)

---

## 6. Requisitos Funcionais Detalhados

| Código | Descrição |
|:------:|:----------|
| RF001 | Permitir login e autenticação de usuários por perfil |
| RF002 | Permitir cadastro de editais e configuração de disputas |
| RF003 | Permitir que licitantes enviem documentos obrigatórios |
| RF004 | Controlar a fase de disputa via painel do pregoeiro |
| RF005 | Sincronizar cronômetro da disputa via WebSocket |
| RF006 | Receber lances em tempo real, apenas menores que o último |
| RF007 | Implementar chat público da disputa |
| RF008 | Registrar todas as ações no log de atividades |
| RF009 | Gerar relatórios em PDF com QR Code de validação pública |
| RF010 | Permitir acesso público para validação de documentos |

---

## 7. Requisitos Não Funcionais

- Disponibilidade mínima: 99,5%
- Latência máxima aceitável: 500ms para eventos de WebSocket
- Tempo de resposta das APIs REST: < 400ms
- Dados sensíveis criptografados em trânsito (HTTPS) e em repouso
- Logs de atividades imutáveis para fins de auditoria

---

## 8. Restrições

- Sistema deve ser 100% compatível com a Lei 14.133/21
- Uploads limitados a arquivos em PDF
- Valores monetários armazenados em centavos (inteiros)

---

## 9. Critérios de Aceitação

- Todos os lances e mensagens públicos devem ser recebidos em tempo real por todos os licitantes conectados.
- Cada licitante deve visualizar o mesmo cronômetro com diferença máxima de 1s.
- Documentos enviados devem ser versionados e rastreados.
- O sistema deve gerar ata de disputa automaticamente ao encerrar a sessão.

---

## 10. Anexos

- ADR 0001: Arquitetura Inicial
- ADR 0002: Comunicação WebSocket
- ADR 0003: Armazenamento de Valores em Centavos
- ADR 0004: Controle de Tempo Oficial

