# ADR 0002 – Decisão de Comunicação em Tempo Real via WebSocket

## Status

Aceito — 28/04/2025

## Contexto

Durante a fase de disputa de licitações, especialmente em sessões públicas de lances eletrônicos, é **essencial** que:

- Todos os participantes vejam **atualizações em tempo real** (lances, controle de tempo, mensagens).
- A comunicação seja **instantânea, estável e auditável**.
- O sistema permita **ações dinâmicas** como:
  - Início, pausa, retomada e encerramento da disputa.
  - Envio de lances de valores inferiores.
  - Mensagens públicas entre pregoeiro e licitantes.

Protocolos tradicionais como **HTTP (REST API)** são **insuficientes**, pois trabalham com modelo **requisição-resposta**, inadequado para atualizações em tempo real.

## Decisão

O sistema adotará **WebSocket** para comunicação em tempo real.

### Especificações:

- **Biblioteca**: `Socket.IO`
- **Eventos principais**:
  - `join_disputa` — Cliente entra na sala da disputa
  - `send_message` / `receive_message` — Envio e recebimento de mensagens no chat público
  - `controlar_tempo` — Pregoeiro controla início, pausa, retomada e fim da disputa
  - `atualizar_tempo` — Atualização periódica do cronômetro
  - `novo_lance` — Submissão e broadcast de novos lances
- **Sala de disputa**:
  - Cada disputa ativa terá uma **sala exclusiva** no WebSocket.
  - Os participantes se conectam apenas à sua disputa.

- **Segurança**:
  - Toda conexão deve ser autenticada com **JWT** no handshake inicial.
  - Autorização adicional será aplicada:
    - Apenas pregoeiro poderá enviar eventos de controle de tempo.
    - Licitantes poderão apenas enviar mensagens ou lances.

- **Rastreabilidade**:
  - Cada mensagem ou evento WebSocket gerado será armazenado no banco via `LogAtividade`.
  - Cada conexão terá IP, user-agent e timestamp registrados.

## Alternativas Consideradas

- **Polling via REST API**: descartado por alta carga no servidor e lentidão perceptível pelos usuários.
- **Server-Sent Events (SSE)**: descartado pois o modelo seria unidirecional (servidor → cliente), e a disputa exige **bidirecionalidade**.
- **WebRTC**: descartado por ser uma tecnologia mais complexa, voltada para streaming de mídia e comunicação ponto a ponto.

## Consequências

**Positivas:**
- Baixa latência para todos os participantes.
- Melhor experiência de usuário em sessões de disputa acirradas.
- Controle em tempo real do pregoeiro visível para todos.

**Negativas:**
- Necessidade de infraestrutura compatível (servidores com suporte a WebSocket).
- Implementação de reconexão automática em caso de quedas de internet.

## Anexos

- ADR 0001 – Arquitetura Inicial
- Plano de Desenvolvimento – Fases 3, 4 e 5 (relacionadas a WebSocket)
- Schema de eventos WebSocket no projeto
