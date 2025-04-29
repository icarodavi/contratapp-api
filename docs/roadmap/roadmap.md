# 📍 Roadmap Estratégico de Desenvolvimento  
### Sistema de Disputa Eletrônica de Licitações Públicas  
**Conforme a Lei nº 14.133/21**

Este roadmap organiza as principais funcionalidades e recomendações técnicas do sistema em três níveis de prioridade, com base em impacto jurídico, segurança, escalabilidade e experiência do usuário.

---

## 🔴 PRIORIDADE ALTA — Mínimo Viável + Segurança + Conformidade Legal

| Código | Tarefa | Objetivo |
|--------|--------|----------|
| A1 | Implementar controle centralizado de tempo da disputa via servidor | Garante isonomia e segurança jurídica |
| A2 | Criar autenticação com JWT + perfis (`ADMIN`, `PREGOEIRO`, `LICITANTE`) | Controle de acesso seguro |
| A3 | Permitir envio de propostas/documentos com versionamento e validação | Essencial para validade jurídica |
| A4 | Criar estrutura de lances em tempo real (WebSocket) | Base da disputa |
| A5 | Armazenar valores financeiros como `Int` (centavos) | Evita falhas de precisão |
| A6 | Adicionar Log de Atividades para todos os eventos sensíveis | Rastreabilidade obrigatória (Art. 17, §2º) |
| A7 | Gerar ata da disputa automaticamente com QR Code de validação pública | Transparência pós-disputa |
| A8 | Validar documentos com hash + possibilidade de consulta pública via `/validar/:id` | Autenticidade |
| A9 | Garantir criptografia dos dados sensíveis (em trânsito e repouso) | Segurança mínima exigida |
| A10 | Implementar reconexão automática e sincronização do tempo (cliente) | Estabilidade durante a disputa |

---

## 🟠 PRIORIDADE MÉDIA — Escalabilidade, Experiência do Usuário e Integração Pública

| Código | Tarefa | Objetivo |
|--------|--------|----------|
| M1 | Implementar chat público da disputa (via WebSocket) | Comunicação entre pregoeiro e licitantes |
| M2 | Interface com painel de disputa em tempo real para o pregoeiro | Controle transparente e fácil |
| M3 | Integração com Portal Nacional de Contratações Públicas (PNCP) | Transparência externa |
| M4 | Interface para visualização da disputa por fiscal/visualizador | Controle institucional |
| M5 | Implementar MFA para usuários `PREGOEIRO` e opcional para `LICITANTE` | Reforço de segurança |
| M6 | Cache de dados com Redis para controle de tempo e sessões | Performance e estabilidade |
| M7 | Fila assíncrona para upload e processamento de grandes documentos | Evita sobrecarga no servidor |
| M8 | Implantar Swagger completo com autenticação e descrição dos fluxos | Facilita integração e testes |

---

## 🟢 PRIORIDADE BAIXA — Qualidade Avançada e Suporte à Acessibilidade

| Código | Tarefa | Objetivo |
|--------|--------|----------|
| B1 | Suporte a acessibilidade conforme WCAG 2.1 | Inclusão e conformidade |
| B2 | Implementar dashboard com métricas (lances por minuto, duração média, etc.) | Monitoramento e gestão |
| B3 | Notificações via e-mail/push para abertura de disputa, encerramento e homologação | Comunicação proativa |
| B4 | Modo tutorial interativo para novos usuários | Melhora UX para licitantes inexperientes |
| B5 | Exportação de relatórios estatísticos por disputa em .CSV/.PDF | Transparência e controle interno |
| B6 | Escalabilidade horizontal com Kubernetes e Docker | Alta disponibilidade em ambiente de produção |

---

## ✅ Sugestão de Execução

1. Concluir **Fases do MVP** com todos os itens de Prioridade Alta.
2. Em paralelo, começar estrutura básica de escalabilidade (M1 a M3).
3. Após validação com usuários reais, evoluir com recursos avançados (M4–B6).

---

## 📁 Local de Armazenamento

Salve este roadmap em:  
```text
/docs/roadmap.md
