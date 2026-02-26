# Contributing to OpenAudit Brasil — UI (MVP)

Obrigado por contribuir. Este projeto é uma **UI minimalista** (Next.js) para um MVP de busca. O foco é manter o repositório **simples, auditável e juridicamente defensável**.

## Princípios do projeto (obrigatórios)

1. **Sem acusações**  
   Nada aqui deve sugerir culpa, crime ou irregularidade como fato. Quando houver integração futura, usamos termos como:
   - anomalia estatística
   - padrão atípico
   - inconsistência estrutural
   - divergência documental

2. **Neutralidade e não partidarismo**
   Evite mensagens, slogans ou qualquer conteúdo político-partidário.

3. **Minimalismo e manutenção**
   Evite dependências, abstrações e “framework-ização” desnecessária. O objetivo é UI enxuta.

4. **Acessibilidade**
   Mudanças de UI devem respeitar o básico de a11y (labels, foco, contraste, navegação por teclado).

---

## Antes de abrir uma Issue

Verifique se já existe Issue parecida.

Quando abrir uma Issue, inclua:

- **Objetivo** (o que precisa mudar)
- **Motivação** (por que isso é necessário)
- **Critério de pronto** (como validar)
- **Screenshots** (se for UI)
- (Opcional) sugestão de implementação

Tipos sugeridos:
- `bug`
- `feature`
- `docs`
- `refactor`

---

## Fluxo de contribuição (passo a passo)

1. **Fork** do repositório
2. Crie uma branch:
   - `feat/<descricao-curta>`
   - `fix/<descricao-curta>`
   - `docs/<descricao-curta>`
   - `chore/<descricao-curta>`
3. Faça commits pequenos e claros
4. Abra um Pull Request (PR)

---

## Configuração local

Requisitos:
- Node.js 18+ (recomendado 20+)
- npm (ou outro gerenciador, ajuste comandos)

Instalar:
```bash
npm install
````

Rodar em dev:

```bash
npm run dev
```

Build:

```bash
npm run build
```

---

## Padrões de código

### TypeScript / Next.js

* Evite `any` sem justificativa.
* Prefira tipos explícitos em props e estados.
* Não crie abstrações genéricas cedo (ex.: “design system” completo no MVP).

### CSS

* Mantenha a estética minimalista.
* Evite efeitos pesados (gradientes, sombras fortes, 3D).
* Preserve o tema “preto fosco + branco”.

### Dependências

* Só adicionar dependência se:

  1. reduzir complexidade de forma real, e
  2. for amplamente mantida, e
  3. não puder ser resolvida com código simples.

Se quiser adicionar dependência, justifique no PR.

---

## Acessibilidade (checklist do PR)

Para qualquer mudança visual/fluxo:

* [ ] Input e botões têm `aria-label` quando necessário
* [ ] Navegação por teclado funciona (Tab/Shift+Tab/Enter)
* [ ] Foco não “some” em transições de estado
* [ ] Elementos informativos usam `aria-live` se fizer sentido
* [ ] Contraste aceitável (não usar cinza claro demais)

---

## Padrão de commits

Use prefixos:

* `feat: ...`
* `fix: ...`
* `docs: ...`
* `chore: ...`
* `refactor: ...`

Exemplos:

* `feat: add reset button to return to idle`
* `fix: prevent empty query search`
* `docs: update README with roadmap`

---

## Pull Request (PR) — o que deve conter

No PR, inclua:

1. **O que mudou**
2. **Por que mudou**
3. **Como testar**
4. **Screenshots** (se UI)
5. Checklist:

   * [ ] `npm run build` passou
   * [ ] sem dependências desnecessárias
   * [ ] a11y verificado

### O que será rejeitado (sem negociação)

* Mudança que tenta “imitar pixel a pixel” marcas/identidades de terceiros.
* Conteúdo com acusação, difamação ou tom persecutório.
* Mudança grande sem Issue ou sem justificativa técnica.
* Dependência adicionada sem justificativa.

---

## Segurança e reporte responsável

Se você encontrar algo sensível (ex.: vazamento de dados, credenciais, exposição indevida):

* **Não abra issue pública.**
* Reporte pelo e-mail: **[comunidade@openauditbrasil.com](mailto:comunidade@openauditbrasil.com)**

---

## Código de conduta (resumo)

* Respeito e objetividade.
* Sem ataques pessoais.
* Sem militância/partidarismo dentro do repositório.

---

## Dúvidas

Se estiver em dúvida sobre o escopo ou abordagem, abra uma Issue com o rótulo `question` antes de codar.

Obrigado por contribuir.
