# Navegação, responsivo e acessibilidade

> Parte do [guia de frontend do PetConnect](../README.md). Ver também:
> [Design tokens](./design-tokens.md) · [Layout e shell](./layout-e-shell.md) ·
> [Inventário de componentes](./inventario-de-componentes.md) · [Telas](./telas.md) ·
> [Modelo de dados](./modelo-de-dados.md) · [Regras de negócio](./regras-de-negocio.md)

Três eixos transversais do protótipo: como se navega entre as telas, como o
layout se adapta por breakpoint e quais lacunas de acessibilidade tratar na
reconstrução.

---

## Mapa de navegação

```
        ┌────────────────────────────────────────────┐
        │                  LOGIN                      │
        └───────────────┬────────────────────────────┘
                        │ credenciais == demo
                        ▼
        ┌────────────────────────────────────────────┐
        │  APP SHELL (sidebar sempre visível)        │
        │                                            │
        │  DASHBOARD ◄──────► ANIMAIS (listagem)     │
        │      │                  │      ▲            │
        │      │ "Novo animal"    │      │ salvar /   │
        │      ▼                  ▼      │ cancelar   │
        │   NOVO ANIMAL      EDITAR ANIMAL            │
        │      │  cadastrar        │ (via "Editar"    │
        │      └───────────────────┘  de um card)    │
        └────────────────────────────────────────────┘
                        │ "Sair"
                        ▼
                     LOGIN
```

- **Navegação global:** `setScreen(name)` — remove `.active` de todas as `.screen`,
  liga na alvo, e marca o `.nav-item[data-screen=name]` correspondente.
- **Gatilhos:** itens da sidebar (`data-screen`), botões `data-goto`, botão "Editar"
  do card (`openEditarAnimal(id)`), submits de formulário (voltam para `animais`).
- **Sidebar** só tem 3 itens: `dashboard`, `animais`, `novo`. As telas `novo` e
  `editar` não têm item próprio — em `editar` nenhum item fica destacado.
- `setScreen("dashboard")` chama `renderDashboard()`; `setScreen("animais")` chama
  `renderAnimaisGrid()`.

---

## Comportamento responsivo

Breakpoints definidos em [Design tokens › Breakpoints](./design-tokens.md#breakpoints).

### ≤ 1024px — tablet

- **Login:** `.login-hero` some; só o formulário, com padding menor.
- **Sidebar** vira trilho de **76px**: logo passa a ser só a pata (`.logo-mark`),
  itens de nav ficam centralizados e **sem label**, `user-card` some, "Sair" só
  ícone.
- Topbar sem `min-height`, padding `18px 24px`, `h1` `1.35rem`.
- `content-inner` padding `24px 24px 40px`. Painéis padding `22px`.
- `period-toggle` alinha à esquerda.

### ≤ 640px — celular

- **App em fluxo natural:** `.app-shell`, `.main-content` e `.screen` viram
  `display:block` com `height:auto`; **o `body` rola** (não mais o `content-inner`).
- **Sidebar** vira **barra de navegação inferior fixa** (`position:fixed; inset:auto 0 0 0`),
  em linha, com sombra superior, `z-index 50`, respeitando `env(safe-area-inset-bottom)`.
  - Nav em linha, itens em coluna (ícone em cima, label `0.68rem` embaixo).
  - Item ativo: só muda a cor para `--accent` (sem fundo/borda).
  - `user-card` some; "Sair" vira ícone + label pequeno.
- **Topbar** fica `sticky` no topo (`z-index 20`), padding `14px 16px`, `h1` `1.2rem`.
  O botão de ação da topbar ocupa **100%** da largura.
- `content-inner`: `overflow-y:visible`, padding inferior `80px + safe-area` (espaço
  para a barra).
- **Grids viram 1 coluna:** `.filters-bar` (coluna, `filter-field` sem `min-width`),
  `.form-grid` (`1fr`). `.form-actions` vira `column-reverse` com botões `100%`.
- `period-pill` passa a `flex: 1 1 40%` (2 por linha). Cards e painéis com padding
  e raio menores.
- A tabela de recentes mantém `min-width: 480px` e **rola horizontalmente** dentro
  do `.table-wrap`.

---

## Acessibilidade — estado atual e pendências

O protótipo **não** é uma referência de acessibilidade. Ao reconstruir, tratar:

- **Foco visível:** os controles de formulário têm `outline: none`; o único sinal
  de foco é a cor da borda do contêiner. Precisa de um anel de foco real
  (`:focus-visible`) em botões, links, inputs, selects e pills clicáveis.
- **Labels:** os campos usam `<label>` envolvendo o controle (ok), mas os selects
  de filtro e alguns botões só-ícone precisam de `aria-label` / texto acessível
  (o botão do olho tem `aria-label`, o "Voltar"/"Editar" têm texto — conferir os
  demais).
- **Feedback de erro:** a validação falha em silêncio. Precisa de mensagem
  associada ao campo (`aria-describedby`) e `aria-invalid`.
- **Navegação por teclado:** os cards não são focáveis; o "Editar" é um `<button>`
  (ok). A troca de tela não move o foco nem anuncia a mudança (considerar
  `role="region"` + foco no `h1` da tela, ou um live region).
- **Contraste:** validar `--text-muted` (`#7A7480`) sobre `--cream` e sobre
  `--pill-bg` — fica no limite de AA para texto pequeno.
- **Alvos de toque:** na barra inferior do celular, garantir ≥ 44×44px por item.
- **Movimento:** respeitar `prefers-reduced-motion` (desligar `fadeIn` e os
  `translateY` de hover).
- **`dvh`:** manter `100dvh` com fallback `100vh` para navegadores antigos.
