# ADR 0004 – Controle Oficial do Tempo da Disputa Centralizado no Servidor

## Status

Aceito — 28/04/2025

## Contexto

Durante a fase de disputa eletrônica, o **controle do tempo** é essencial para assegurar:

- Igualdade de oportunidades entre licitantes
- Integridade do processo licitatório
- Rastreabilidade e auditabilidade do momento de envio de lances

Permitir que cada cliente (browser) controle seu próprio cronômetro seria inseguro, pois:

- Licitantes poderiam manipular seus próprios tempos localmente
- Disputas poderiam terminar em horários diferentes para cada participante
- Violaria o princípio da publicidade e isonomia da Lei nº 14.133/21

Portanto, o **tempo oficial deve ser mantido exclusivamente pelo servidor**.

## Decisão

O tempo da disputa será **controlado e armazenado exclusivamente no servidor**.

### Estratégia:

- O servidor registra:
  - `inicio` da disputa
  - `fimPrevisto`
  - `encerramento`
  - `tempoRestante` (quando pausado)
- O servidor emite eventos WebSocket para todos os clientes:
  - Evento: `atualizar_tempo`
  - Payload: `{ tempoRestante, timestampServidor }`
- Os clientes (browsers) **não controlam o tempo**; eles apenas exibem o cronômetro com base nas atualizações recebidas.

### Eventos de controle (WebSocket):
- `controlar_tempo` — usado apenas pelo pregoeiro:
  - `INICIAR`
  - `PAUSAR`
  - `RETOMAR`
  - `ENCERRAR`

- `atualizar_tempo` — broadcast para todos os participantes.

### Sincronização:

- Cada cliente calcula o ajuste necessário baseado na diferença entre `timestampServidor` e o relógio local.
- Pequenas correções são aplicadas automaticamente para reduzir a deriva de tempo.

## Alternativas Consideradas

- **Controle de tempo local em cada cliente**: descartado por falta de segurança e inconsistência.
- **Polling REST para atualização periódica**: descartado por gerar carga desnecessária no servidor e atrasos perceptíveis para o usuário.

## Consequências

**Positivas:**
- Garante que todos os participantes visualizem a mesma contagem de tempo.
- Protege contra manipulações ou atrasos artificiais.
- Facilita auditorias, pois o tempo é único e registrado no banco.

**Negativas:**
- Requer reconexão e ressincronização rápida em caso de perda de conexão WebSocket.
- Depende de estabilidade mínima da internet dos participantes.

## Anexos

- ADR 0002 – Comunicação via WebSocket
- ADR 0001 – Arquitetura Inicial
- Plano de Desenvolvimento – Fase 4 (Controle de Tempo)
- Modelo de Payload de Atualização de Tempo:
  ```json
  {
    "disputaId": "abc123",
    "tempoRestante": 300,
    "timestampServidor": "2025-04-28T18:00:00Z"
  }
