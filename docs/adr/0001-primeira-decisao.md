# ADR 0001 – Arquitetura Inicial do Sistema de Disputa Eletrônica de Licitações

## Status

Aceito — 28/04/2025

## Contexto

O Município necessita de um sistema digital para gerenciar a fase de disputa de processos licitatórios em conformidade com a Lei nº 14.133/21 (Nova Lei de Licitações), garantindo transparência, rastreabilidade, publicidade e isonomia entre os participantes.

A plataforma precisa permitir:
- Cadastro de licitantes, envio de propostas e documentos
- Controle de tempo da disputa
- Recebimento de lances em tempo real
- Comunicação pública entre licitantes e pregoeiro
- Registro auditável de todos os eventos

Além disso, precisa ser segura, escalável e acessível.

## Decisão

Foi decidido adotar a seguinte arquitetura e tecnologias:

- **Backend**:  
  - **NestJS** (framework Node.js robusto e escalável)
  - **Prisma ORM** para modelagem e acesso a banco de dados
  - **PostgreSQL** como banco de dados relacional
  - **Socket.IO** para comunicação em tempo real (WebSocket)
  - **JWT** para autenticação segura
  
- **Frontend**:
  - **Next.js** com **React** para SPA (Single Page Application) e SSR (Server-side rendering)
  - **TailwindCSS** para estilização rápida e responsiva

- **Infraestrutura**:
  - Deploy em ambiente Linux VPS ou plataforma Cloud (AWS, Digital Ocean)
  - Banco de dados isolado e seguro
  - Uso de HTTPS obrigatório
  - Logs de eventos sensíveis armazenados

- **Organização de valores financeiros**:
  - Todos os valores monetários serão armazenados como `Int` em centavos no banco de dados.
  - Conversão para reais será feita somente no frontend (`valorCentavos / 100`).

- **Documentação**:
  - Swagger OpenAPI para expor e documentar a API
  - Readme, ADRs e Plano de Desenvolvimento mantidos no repositório

- **Controle de Acesso**:
  - Perfis de usuários: `ADMIN`, `PREGOEIRO`, `LICITANTE`, `VISUALIZADOR`
  - Controle de rotas e ações via decorators `@Roles()`

- **Rastreabilidade**:
  - Toda ação relevante será registrada em banco: IP, user-agent, horários, sessões
  - Sistema de Logs: tabela específica `LogAtividade`

- **Validação Pública**:
  - Geração de QR Code nos documentos finais
  - Endpoints públicos `/validar/:id` para consulta de autenticidade

## Alternativas Consideradas

- Utilizar AdonisJS ou Express.js — descartado por menor estruturação para grandes sistemas modulares.
- Utilizar MongoDB — descartado pois o modelo relacional (PostgreSQL) atende melhor às necessidades de rastreabilidade e consistência de dados licitatórios.

## Consequências

**Positivas:**
- Sistema escalável e modularizado
- Forte compliance jurídico com rastreabilidade
- Plataforma preparada para crescimento de funcionalidades (pregão presencial, registro de preço, etc.)

**Negativas:**
- Necessidade de maior tempo de treinamento para licitantes menos familiarizados
- Requisitos de infraestrutura mínima segura (servidores robustos, SSL/TLS obrigatório)

## Anexos

- Plano de Desenvolvimento do Projeto
- Schema inicial do banco de dados (`schema.prisma`)
- Estrutura inicial de Notion (Kanban de Tarefas)
