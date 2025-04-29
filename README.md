<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="NestJS Logo" /></a>
</p>

<p align="center">
  Um framework <a href="http://nodejs.org" target="_blank">Node.js</a> progressivo para construção de aplicações server-side eficientes, seguras e escaláveis.
</p>

<p align="center">
  <a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="Versão NPM" /></a>
  <a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Licença" /></a>
  <a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="Downloads" /></a>
  <a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="Build Status" /></a>
  <a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord" /></a>
</p>

---

# 📘 Sistema de Disputa Eletrônica de Licitações Públicas

Este projeto implementa um sistema para a realização da fase de disputa de licitações públicas, em conformidade com a **Lei nº 14.133/2021**, oferecendo:

- Controle de tempo oficial da disputa
- Envio e validação de documentos
- Recebimento de lances em tempo real
- Comunicação entre pregoeiro e licitantes
- Geração automática de ata com QR Code para validação pública

---

## ⚙️ Instalação

```bash
pnpm install
```

---

## ▶️ Execução

```bash
# Desenvolvimento
pnpm run start

# Modo de desenvolvimento com hot reload
pnpm run start:dev

# Produção
pnpm run start:prod
```

---

## 🧪 Testes

```bash
# Testes unitários
pnpm run test

# Testes e2e
pnpm run test:e2e

# Cobertura de testes
pnpm run test:cov
```

---

## 🚀 Deploy

Quando estiver pronto para colocar a aplicação NestJS em produção, consulte a [documentação oficial de deploy](https://docs.nestjs.com/deployment).

---

## 📂 Documentação Técnica

Este projeto é acompanhado de documentação completa:

| Tipo | Caminho |
|------|---------|
| 📄 Documento de Requisitos (PRD) | [`docs/pdr/product-requirements-document.md`](docs/pdr/product-requirements-document.md) |
| 🧠 Decisões Arquiteturais (ADR) | [`docs/adr/`](docs/adr/) |
| 🛣️ Roadmap de Desenvolvimento | [`docs/roadmap.md`](docs/roadmap.md) |
| 📑 Regras de Negócio e Domínio | [`/.cursor/rules/`](.cursor/rules/) |

---

## 👥 Perfis de Usuário

- **Administrador**: controle geral do sistema
- **Pregoeiro/Comissão**: controle de tempo, mensagens, encerramento da disputa
- **Licitante**: envio de documentos e lances
- **Visualizador**: acesso restrito às disputas públicas

---

## 📦 Tecnologias Utilizadas

- **NestJS** — framework principal
- **Prisma ORM** — acesso ao banco de dados PostgreSQL
- **Socket.IO** — comunicação em tempo real (WebSocket)
- **JWT** — autenticação segura
- **TailwindCSS** (no front-end recomendado)
- **Swagger** — documentação interativa da API

---

## 🧠 Recursos Úteis

- [Documentação NestJS](https://docs.nestjs.com)
- [Canal oficial no Discord](https://discord.gg/G7Qnnhy)
- [NestJS Devtools](https://devtools.nestjs.com)
- [Deploy com Docker](https://docs.nestjs.com/recipes/docker)

---

## 📜 Licença

Este projeto segue a [Licença MIT](https://github.com/nestjs/nest/blob/master/LICENSE).

---

## 🤝 Créditos e Reconhecimento

Este projeto foi baseado no repositório oficial de exemplo do [NestJS](https://nestjs.com) e adaptado para uso em licitações públicas conforme a legislação brasileira (Lei nº 14.133/21).