# ADR 0003 – Armazenamento de Valores Monetários como Inteiros (Centavos)

## Status

Aceito — 28/04/2025

## Contexto

O sistema de disputa eletrônica de licitações lida constantemente com valores financeiros sensíveis:
- Propostas iniciais
- Lances de disputa
- Valores estimados para contratação

A manipulação incorreta de valores financeiros pode gerar:
- Divergências de centavos entre sistemas (ex.: back-end e front-end)
- Riscos jurídicos, contábeis e de responsabilidade administrativa
- Erros em cálculos automáticos, ranking de lances e classificação final

Bancos de dados relacionais e ORMs tradicionais, como Prisma ORM, possuem tipos numéricos (`Decimal`, `Float`) que podem apresentar imprecisões em operações financeiras se não tratados corretamente.

## Decisão

Os valores monetários serão armazenados como **inteiros (`Int`) representando centavos**.

### Como funciona:

- **Exemplo**: R$ 100,00 → armazenado como `10000` (centavos)
- Todos os cálculos no back-end serão feitos com valores em centavos.
- A conversão para reais será feita **exclusivamente no front-end** ao exibir os dados:
  ```javascript
  valorReais = valorCentavos / 100;
