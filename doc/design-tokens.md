# Design tokens

> Parte do [guia de frontend do PetConnect](../README.md). Ver também:
> [Layout e shell](./layout-e-shell.md) · [Inventário de componentes](./inventario-de-componentes.md) ·
> [Telas](./telas.md) · [Modelo de dados](./modelo-de-dados.md) · [Regras de negócio](./regras-de-negocio.md) ·
> [Navegação, responsivo e acessibilidade](./navegacao-responsivo-e-acessibilidade.md)

Todos os tokens estão em `:root` na seção TOKENS de `css/styles.css`. Valores
normalizados aqui.

## Cores

| Token           | Hex       | Uso                                                                    |
| --------------- | --------- | --------------------------------------------------------------------- |
| `--primary`     | `#461D59` | Roxo principal — botões primários, títulos, item de nav ativo, logo   |
| `--accent`      | `#852EAD` | Roxo vibrante — foco de input, links, ícones, borda de destaque       |
| `--pill-bg`     | `#EDE1F2` | Lilás claro — fundo de pills, badges, avatars, caixas informativas    |
| `--cream`       | `#FFFCF9` | Off-white — fundo de cards / sidebar / topbar; texto sobre roxo       |
| `--bg-lavender` | `#F3F0F6` | Lavanda — fundo geral da aplicação (`body`)                           |
| `--green`       | `#238F19` | Status **Disponível**                                                 |
| `--blue`        | `#17A6D6` | Status **Em processo**                                                |
| `--pink`        | `#ED3871` | Status **Adotado** e mensagens de erro                                |
| `--orange`      | `#F69000` | Status **Em breve**                                                   |
| `--text-main`   | `#2E2438` | Texto principal                                                       |
| `--text-muted`  | `#7A7480` | Texto secundário, labels, placeholders                                |
| `--border`      | `#E7E1EC` | Bordas e divisórias                                                   |

**Cores fora de token** (aparecem só na "caixa de aviso" âmbar, `.notice-box`):
fundo `#FFF6E8`, borda `#F3DDB0`, texto `#7A5A12`. A variante `.notice-box.info`
usa os tokens roxos + borda `#DCC5E6`.

**Gradiente** (hero do login): `linear-gradient(155deg, var(--primary), var(--accent))`.

**Opacidades** de texto sobre o gradiente: título 100%, parágrafo 90%, rodapé 75%.
Patinhas decorativas: 8–15%.

## Tipografia

Carregadas via `@import` do Google Fonts no topo da seção BASE.

| Uso                                    | Família     | Pesos              | Fallback     |
| -------------------------------------- | ----------- | ------------------ | ------------ |
| Títulos (`h1`, `h2`, `h3`, `.logo-text`) | **Baloo 2** | 600, 700, 800      | `sans-serif` |
| Corpo, botões, inputs, tabelas         | **Inter**   | 400, 500, 600, 700, 800 | `sans-serif` |

**Escala de tamanho usada no protótipo** (px equivalente a 1rem = 16px):

| rem      | px   | Onde                                                    |
| -------- | ---- | ------------------------------------------------------ |
| `2.3`    | 36.8 | `h1` do hero de login                                  |
| `2.1`    | 33.6 | Número dos cards de status (`.stat-number`)            |
| `1.55`   | 24.8 | `h1` da topbar (desktop)                               |
| `1.5`    | 24   | `h2` do card de login                                  |
| `1.35`   | 21.6 | `h1` da topbar (tablet ≤1024px)                        |
| `1.2`    | 19.2 | `h1` da topbar (celular ≤640px)                        |
| `1.15`   | 18.4 | Título de painel (`.panel-title`)                      |
| `1.05`   | 16.8 | Nome do animal no card (`h3`)                          |
| `1`      | 16   | Parágrafo do hero                                      |
| `0.95`   | 15.2 | Item de nav; label "Foto do animal"                    |
| `0.92`   | 14.7 | Corpo padrão (botão primário, célula de tabela, input) |
| `0.9`    | 14.4 | Botão ghost, select de filtro, subtítulos             |
| `0.85`   | 13.6 | Labels de formulário, `stat-sub`, `th`                 |
| `0.8`–`0.83` | ~13 | Metadados de card, dica da conta demo               |
| `0.72`–`0.75` | ~11.5 | Pill de status, badge do card de status           |
| `0.68`   | 10.9 | Tag "extra"; labels da nav inferior no celular        |

**Line-height:** padrão do navegador; `1.2` no `h1` do hero, `1.5`–`1.6` em textos
corridos longos (parágrafo do hero, caixas de aviso, info-box).

**Peso semântico:** 400 corpo · 500 botão discreto (logout) · 600 labels, nav,
botão ghost · 700 botão primário, títulos, pill de status · 800 número grande.

## Espaçamento

O protótipo usa valores ad hoc. Para a reconstrução, sugerimos consolidar nesta
**escala base 2 / passo 4px**, que cobre quase todos os usos existentes:

`2 · 4 · 6 · 8 · 12 · 14 · 16 · 18 · 20 · 22 · 24 · 28 · 32 · 44 · 48`

Referências concretas:

| Contexto                         | Valor no protótipo                    |
| -------------------------------- | ------------------------------------- |
| Padding de conteúdo (`.content-inner`) | `32px 44px 48px` (desktop) → `24px` (tablet) → `16px` (celular) |
| Padding da topbar                | `28px 44px` → `18px 24px` → `14px 16px` |
| Padding de painel (`.panel`)     | `28px` → `22px` → `18px`               |
| Padding de card                  | `20px` (animal) / `24px` (status)      |
| Gap entre cards (grid)           | `18px` (animais/form) / `20px` (status) |
| Gap da barra de filtros          | `14px`                                 |
| Gap vertical do formulário       | `22px` (entre grupos) / `18px` (dentro do grid) |
| Sidebar: largura / padding       | `260px` / `28px 20px`                  |
| Gap de ícone↔label em botão      | `8px` (padrão) / `10–12px` (nav, logout) |

## Raio de borda

| Valor    | Onde                                                       |
| -------- | ---------------------------------------------------------- |
| `999px`  | Botões (primário e ghost), pills de status, badges, period-pill |
| `22px`   | Painel grande (`.panel`)                                   |
| `20px`   | Card de status                                             |
| `18px`   | Card de animal                                             |
| `16px`   | Placeholder de foto; painel no celular                     |
| `14px`   | Caixa de aviso, `user-card`                                |
| `12px`   | Inputs, selects, `nav-item`, `info-box`, `demo-hint`       |
| `10px`   | Botão "Editar" do card; `nav-item` no celular              |
| `6px`    | Tag "extra"                                                |

## Sombras

| Token informal          | Valor                                  | Onde                          |
| ----------------------- | -------------------------------------- | ----------------------------- |
| Card                    | `0 4px 16px rgba(70,29,89,0.06)`       | `.animal-card`                |
| Painel                  | `0 4px 18px rgba(70,29,89,0.06)`       | `.panel`, `.stat-card`        |
| Botão primário (hover)  | `0 8px 20px rgba(70,29,89,0.25)`       | `.btn-primary:hover`          |
| Barra inferior (mobile) | `0 -4px 18px rgba(70,29,89,0.08)`      | `.sidebar` em ≤640px          |

`rgba(70,29,89,·)` é `--primary` em RGB.

## Bordas

- `1px solid var(--border)` — borda da sidebar, base da topbar, linhas de tabela,
  divisória do rodapé do card, `notice-box`.
- `1.5px solid var(--border)` — inputs (`.input-wrap`), selects de filtro, botão
  ghost, botão "Editar", `nav-item` (transparente até ficar ativo). Base do `th`:
  `1.5px`.
- `1px dashed var(--accent)` — `demo-hint` (dica da conta de demonstração).

## Transições e animação

- **Padrão:** `0.15s ease` (hover de botões, foco de input, nav, period-pill).
- **Botão primário:** anima `transform` + `box-shadow` (`translateY(-1px)` no hover).
- **Card de animal:** `transform 0.15s ease` (`translateY(-3px)` no hover).
- **Entrada de tela:** `@keyframes fadeIn` — `opacity 0→1` + `translateY(6px→0)`,
  `0.35s ease`, aplicado via classe `.fade-in` no wrapper de conteúdo.

## Z-index

| Camada                         | z-index |
| ------------------------------ | ------- |
| Barra de navegação inferior (celular) | `50` |
| Topbar `sticky` (celular)      | `20`    |

## Breakpoints

| Faixa            | Rótulo   | Mudança principal                                              |
| ---------------- | -------- | ------------------------------------------------------------- |
| `> 1024px`       | Desktop  | Layout padrão: sidebar completa + conteúdo com rolagem própria |
| `≤ 1024px`       | Tablet   | Esconde hero do login; sidebar vira trilho de ícones           |
| `≤ 640px`        | Celular  | Sidebar vira barra inferior fixa; página rola em fluxo natural |

Detalhes em [Comportamento responsivo](./navegacao-responsivo-e-acessibilidade.md#comportamento-responsivo).

## Unidades

Alturas de tela usam **`100dvh`** (não `100vh`) para não "pular" quando a barra do
navegador móvel aparece/some.

## Assets

`assets/` — todos SVG, sem versão raster.

| Arquivo                  | Conteúdo                     | Onde é usado                                  |
| ------------------------ | --------------------------- | -------------------------------------------- |
| `petconnect_purple.svg`  | Logotipo completo, roxo      | Sidebar (desktop)                            |
| `petconnect_white.svg`   | Logotipo completo, branco    | Hero do login                                |
| `pata_purp.svg`          | Ícone da pata, roxo          | Marca compacta da sidebar; nav "Animais"     |
| `pata_white.svg`         | Ícone da pata, branco        | Patinhas decorativas do login; estado vazio  |

Ícones de UI **não** são arquivos — são paths SVG no objeto `ICONS` em `js/app.js`
(ver [Inventário de componentes › Ícones](./inventario-de-componentes.md#ícones)).
