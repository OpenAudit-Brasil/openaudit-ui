# SECURITY.md — Security Policy

## Supported Versions
Este repositório é um MVP de UI. Ainda assim, tratamos segurança com seriedade.

| Version | Supported |
|--------:|:---------|
| `main`  | ✅        |

## Reporting a Vulnerability

Se você encontrar qualquer vulnerabilidade, risco de exposição, ou falha que possa gerar dano (técnico, jurídico ou reputacional):

1. **NÃO** abra issue pública.
2. Envie um e-mail para: **comunidade@openauditbrasil.com**
3. Assunto sugerido: `SECURITY: <resumo curto>`

Inclua no e-mail:
- Descrição do problema e impacto
- Passos para reproduzir (PoC)
- Ambiente (browser/OS/node) e versão/commit (se possível)
- Evidências mínimas **sem** expor dados pessoais (PII)

## O que é considerado vulnerabilidade (exemplos)
- Exposição de credenciais (tokens, chaves, variáveis sensíveis)
- XSS, CSRF, SSRF, open redirect
- Vazamento de dados pessoais ou logs contendo PII
- Falhas que permitam abuso automatizado do sistema (quando houver API)
- Dependências com CVEs relevantes sem mitigação

## Responsible Disclosure (expectativa)
- Daremos retorno em até **7 dias** confirmando recebimento.
- Priorizamos correção rápida e publicação responsável.
- Caso seja necessário, creditaremos o report (se você quiser) no changelog/notes.

## Scope
Atualmente (MVP), o escopo é:
- Código do front-end (Next.js)
- Configurações do projeto e pipeline
- Dependências e supply chain (npm)

Fora do escopo (por enquanto):
- Infra externa não controlada pelo projeto
- Qualquer coleta real de dados de terceiros (ainda não existe neste repo)

Obrigado por ajudar a manter o projeto seguro.
