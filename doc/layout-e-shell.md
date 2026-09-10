# Layout e shell da aplicação

> Parte do [guia de frontend do PetConnect](../README.md). Ver também:
> [Design tokens](./design-tokens.md) · [Inventário de componentes](./inventario-de-componentes.md) ·
> [Telas](./telas.md) · [Modelo de dados](./modelo-de-dados.md) · [Regras de negócio](./regras-de-negocio.md) ·
> [Navegação, responsivo e acessibilidade](./navegacao-responsivo-e-acessibilidade.md)

Duas "cascas" mutuamente exclusivas no `index.html`:

| Elemento             | Quando aparece            | Observação                                    |
| -------------------- | ------------------------- | -------------------------------------------- |
| `#login-screen` (`.login-shell`) | Deslogado     | `display:flex`; escondido via `style.display='none'` ao logar |
| `#app-shell`         | Logado (`.visible`)       | `display:flex`; sidebar + `main-content`      |

**App shell (desktop):**

```
┌─────────────┬──────────────────────────────────────────┐
│  sidebar    │  topbar  (título + ação à direita)        │  ← min-height 7rem
│  260px      ├──────────────────────────────────────────┤
│             │                                          │
│  logo       │  content-inner  (padding 32/44/48,        │
│  nav        │                  overflow-y: auto)        │
│  ─────      │                                          │
│  user-card  │      .screen.active  (uma por vez)        │
│  logout     │                                          │
└─────────────┴──────────────────────────────────────────┘
```

- `.app-shell` tem `height: 100dvh`; a rolagem acontece **dentro** de
  `.content-inner`, não no `body` (isso muda no celular — ver responsivo).
- Só um `.screen` fica visível: a classe `.active` liga `display:flex`.
- Telas: `#screen-dashboard`, `#screen-animais`, `#screen-novo`, `#screen-editar`.

**Sidebar:**

- Topo: logo (completa `.logo-full` / só pata `.logo-mark`) + `nav-list` com 3
  itens (`data-screen`: `dashboard`, `animais`, `novo`).
- Base: `user-card` (nome da ONG + papel "Administrador") + botão `logout`.
- Item ativo: fundo `--pill-bg`, borda `--accent`, texto `--primary`.

**Topbar (por tela):** bloco de texto à esquerda (`h1` + `p` de apoio) e um botão
de ação à direita (`btn-primary` "Novo animal" no dashboard e na listagem; `btn-ghost`
"Voltar" nas telas de formulário).
