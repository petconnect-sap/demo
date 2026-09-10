# Inventário de componentes

> Parte do [guia de frontend do PetConnect](../README.md). Ver também:
> [Design tokens](./design-tokens.md) · [Layout e shell](./layout-e-shell.md) ·
> [Telas](./telas.md) · [Modelo de dados](./modelo-de-dados.md) · [Regras de negócio](./regras-de-negocio.md) ·
> [Navegação, responsivo e acessibilidade](./navegacao-responsivo-e-acessibilidade.md)

Specs prontos para virar componentes na tecnologia final.

## Botão primário — `.btn-primary`

- Fundo `--primary`, texto `--cream`, peso 700, `0.92rem`.
- Padding `11px 22px`, raio `999px`, `display:inline-flex`, gap `8px` (ícone + label).
- Hover: `translateY(-1px)` + sombra "botão primário".
- Variante `.btn-block`: `width:100%`, conteúdo centralizado (usado no login).
- Usado com ícone `plus` à esquerda; no sucesso de formulário troca para `check`.

## Botão secundário — `.btn-ghost`

- Fundo `--cream`, texto `--primary`, borda `1.5px --border`, peso 600, `0.9rem`.
- Padding `10px 20px`, raio `999px`, gap `8px`.
- Hover: borda passa a `--accent`.
- Usado como "Voltar" / "Cancelar" (com ícone `arrowLeft` quando é "Voltar").

## Botão de edição do card — `.btn-edit`

- Transparente, borda `1.5px --border`, texto `--primary`, peso 600, `0.83rem`.
- Padding `7px 14px`, raio `10px`, gap `6px`, ícone `edit` (15px).
- Hover: borda `--accent` + fundo `--pill-bg`.
- Vive em `.animal-card-actions` (rodapé do card, separado por divisória `1px`).

## Botão-link — `.link-btn`

- Sem fundo/borda, texto `--accent`, peso 600, `0.87rem`. Usado em "Esqueci a senha."

## Pill de status — `.status-pill`

- Texto `--cream`, peso 700, `0.75rem` (`0.72rem` dentro do card), padding `5px 13px`,
  raio `999px`, `display:inline-block`.
- **Cor de fundo vem do status** via mapa `STATUS_COLOR` (ver [Modelo de dados](./modelo-de-dados.md)).

## Badge de card de status — `.stat-badge`

- Igual à pill, mas `0.72rem`, `letter-spacing 0.03em`, `margin-bottom 18px`,
  texto em CAIXA ALTA.

## Card de status (dashboard) — `.stat-card`

- Fundo `--cream`, raio `20px`, padding `24px`, sombra "painel".
- Conteúdo: `.stat-badge` + `.stat-number` (`2.1rem`, peso 800, `--primary`) +
  `.stat-sub` (`0.85rem`, `--text-muted`, "X% do período").
- Grid: `repeat(auto-fit, minmax(180px, 1fr))`, gap `20px`.

## Card de animal (listagem) — `.animal-card`

- Fundo `--cream`, raio `18px`, padding `20px`, sombra "card".
- Hover: `translateY(-3px)`.
- Estrutura:
  - `.animal-card-top`: `.animal-avatar` (44×44, raio `12px`, fundo `--pill-bg`,
    emoji `1.3rem`) + `.status-pill`.
  - `h3` nome (`1.05rem`, `--primary`).
  - `.animal-meta` (`0.85rem`, `--text-main`): `tipo · sexo · idadeLabel`.
  - `.animal-porte` (`0.8rem`, `--text-muted`): `Raça: {raca}`.
  - `.animal-card-actions` (divisória `1px` no topo, `margin-top 14px`,
    `padding-top 12px`): botão "Editar".
- Grid: `repeat(auto-fill, minmax(230px, 1fr))`, gap `18px`.

## Painel — `.panel`

- Fundo `--cream`, raio `22px`, padding `28px`, sombra "painel".
- `.panel-title`: `1.15rem`, peso 700, `--primary`, `margin-bottom 18px`.
- `.form-panel`: painel em `flex-column`, gap `22px` (usado nos formulários).

## Campo de entrada — `.input-group` + `.input-wrap`

- `.input-group`: `flex-column`, gap `7px`. `> span` é o label (`0.85rem`, peso 600).
- `.input-group.full`: ocupa a linha inteira do grid (`grid-column: 1 / -1`).
- `.input-wrap`: contêiner com borda `1.5px --border`, raio `12px`, padding `12px 14px`,
  fundo `--cream`, gap `10px` (para ícone opcional à esquerda).
- `:focus-within` → borda `--accent`. **`outline: none`** nos controles internos
  (ver [Acessibilidade](./navegacao-responsivo-e-acessibilidade.md#acessibilidade--estado-atual-e-pendências)).
- `input`, `select` e `textarea` são "sem casca" (borda/fundo transparentes);
  `textarea` tem `resize: vertical` e `rows="4"`.

## Select de filtro — `.filter-field`

- `flex-column`, gap `6px`, `min-width 170px`. `span` label `0.8rem`, peso 600,
  `--text-muted`.
- `select`: padding `10px 14px`, raio `12px`, borda `1.5px --border`, fundo `--cream`.
  `:focus` → borda `--accent`.

## Pill de período — `.period-pill`

- Fundo `--pill-bg`, texto `--accent`, peso 600, `0.85rem`, padding `9px 20px`,
  raio `999px`.
- `.active`: fundo `--primary`, texto `--cream`.
- Grupo `.period-toggle`: alinhado à direita no desktop, à esquerda em telas menores.

## Caixa de aviso — `.notice-box`

- Âmbar por padrão (cores fora de token, ver [Design tokens](./design-tokens.md#cores)).
- Variante `.notice-box.info`: roxa (usa `--pill-bg` / `--primary`).
- `display:flex`, gap `12px`, ícone/emoji à esquerda, raio `14px`, padding `14px 18px`,
  `line-height 1.5`, `margin-bottom 22px`.

## Tag "extra" — `.tag-extra`

- Rótulo inline ao lado do label de um campo, marcando campos que **não vêm do
  Notion**. `0.68rem`, peso 700, texto `--accent`, fundo `--pill-bg`, padding `2px 7px`,
  raio `6px`.

## Tabela — `.table-wrap` > `table`

- `.table-wrap` tem `overflow-x:auto`; `table` tem `min-width: 480px` (rola no
  celular).
- `th`: alinhado à esquerda, `0.85rem`, peso 600, `--text-muted`, base `1.5px --border`.
- `td`: padding `13px 14px`, `0.92rem`, base `1px --border`; última linha sem borda.

## Estado vazio — `.empty-state`

- `flex-column` centralizado, gap `10px`, padding `60px 0`, texto `--text-muted`.
- Ícone: pata em `pawSvg(32, 0.15)`.

## Ícones

SVG **inline**, estilo *stroke*: `viewBox="0 0 24 24"`, `stroke-width="2"`,
`stroke-linecap/linejoin="round"`, `fill="none"`, `stroke="currentColor"` (cor
herdada do contexto). Definidos no objeto `ICONS` (bloco ÍCONES de `js/app.js`);
`svgIcon(name, size, strokeColor?)` monta o markup.

| Nome        | Uso                                                    |
| ----------- | ----------------------------------------------------- |
| `dashboard` | Item de nav "Dashboard"                                |
| `paw` (img) | Item de nav "Animais", avatar/estado vazio, patinhas  |
| `plus`      | Item de nav "Novo animal"; botões "Novo animal"; submit de cadastro |
| `edit`      | Botão "Editar" do card; submit de edição               |
| `check`     | Feedback de sucesso (cadastro/edição)                  |
| `arrowLeft` | Botão "Voltar"                                         |
| `user`      | Ícone dentro do campo Usuário (login)                  |
| `lock`      | Ícone dentro do campo Senha (login)                    |
| `eye` / `eyeOff` | Botão mostrar/ocultar senha                       |
| `mail`      | "Esqueci a senha" / "Fale com a PetConnect"            |
| `camera`    | Placeholder de upload de foto                          |
| `logout`    | Botão "Sair"                                           |

A pata é uma imagem (`assets/pata_*.svg`), não um ícone stroke — `pawSvg(size, opacity)`
escolhe entre a versão roxa e a branca.
