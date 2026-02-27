# Changelog

All notable changes to this project will be documented in this file.

The format is inspired by [Keep a Changelog](https://keepachangelog.com/)
and this project follows Semantic Versioning principles (SemVer).

---

## [0.0.2] - 2026-02-27

### Added

* Página **/manifest** com layout em cards, tópicos com ícones e foco em acessibilidade.
* Componentes reutilizáveis: `ProjectSupportCard`, `SectionCard`, `Bullet`, `ExternalLink`, `IconBadge`.
* Biblioteca de ícones reutilizáveis (Search/Clear/Mail + ícones de seções).
* Hooks reutilizáveis: `useSearchMachine`, `useAutoFocusOnIdle`, `useEscapeToReset`.
* Componente `LoadingDots` com largura fixa (não desloca “Pesquisando”).
* Tailwind v4 integrado via `@import "tailwindcss"` + PostCSS.

### Changed

* Home refatorada para arquitetura baseada em hooks/componentes (mais reutilizável e consistente).
* UX de busca: overlay centralizado, input `readOnly` durante “searching”, botão vira **X** para limpar, **Esc** reseta fluxo.
* CSS global reorganizado/ajustado (overlay, alinhamentos, espaçamentos, footer).
* Dependências atualizadas: `tailwindcss` e `@tailwindcss/postcss` + adição de `postcss`.

### Docs

* README atualizado.


---


## [0.0.1] - 2026-02-26

### Added
- Initial MVP built with **Next.js (App Router)** and TypeScript.
- Minimalist dark theme (matte black background, white typography).
- Centered landing layout with:
  - Logo: **OpenAudit** (bold) + **Brasil** (thin).
  - Search bar with icon button.
- Search triggered by:
  - Pressing **Enter**
  - Clicking the search icon
- Search state transition:
  - Search bar moves to top layout.
  - Displays animated loading text: `Pesquisando...` (cycling 1–3 dots).
- Sequential source simulation (5 seconds each):
  - Receita Federal
  - gov.br
  - IBGE
  - IPEA
  - TSE
- Final placeholder result message:
  - `página em desenvolvimento. Apoie a causa comunidade@openauditbrasil.com`
- Footer with:
  - Termos (Terms page placeholder)
  - Política de Privacidade (Privacy page placeholder)

### Accessibility
- `aria-label` added to search input and button.
- `aria-live="polite"` used for loading and result updates.
- Keyboard navigation supported (Enter to search).

### Documentation
- Added:
  - `README.md`
  - `CONTRIBUTING.md`
  - `CODE_OF_CONDUCT.md`
  - `LICENSE` (Apache 2.0)
  - `SECURITY.md`
  - `NOTICE`

### Notes
- This version does **not** connect to real data sources.
- No backend or API integration yet.
- UI-only simulation for interaction validation.

---

Initial public version.

