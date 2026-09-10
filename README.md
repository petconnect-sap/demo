# PetConnect — Protótipo & Guia de Frontend

SaaS para **cadastro e acompanhamento de animais para adoção**, voltado a ONGs e
protetores independentes. A PetConnect organiza cada etapa da adoção — do primeiro
cadastro do animal até a entrega no novo lar.

> ⚠️ **Isto é um protótipo em HTML/CSS/JS puro.** Ele existe para validar telas,
> fluxo, identidade visual e regras de negócio. **O produto final será construído
> em Angular** (ou outra tecnologia de componentes). Este README é o **guia de
> referência** para essa reconstrução: tudo que o protótipo define — tokens
> visuais, componentes, telas, campos, estados e regras — está documentado aqui e
> em [`doc/`](./doc), para que o frontend definitivo não precise "ler o CSS" para
> descobrir os valores.

---

## Sumário

- [PetConnect — Protótipo \& Guia de Frontend](#petconnect--protótipo--guia-de-frontend)
  - [Sumário](#sumário)
  - [Como rodar](#como-rodar)
    - [Conta de demonstração](#conta-de-demonstração)
  - [O que este protótipo define (e o que não define)](#o-que-este-protótipo-define-e-o-que-não-define)
  - [Estrutura dos arquivos](#estrutura-dos-arquivos)
  - [Índice da documentação — `doc/`](#índice-da-documentação--doc)
  - [Dados fictícios e contatos](#dados-fictícios-e-contatos)
  - [Pontos em aberto / próximos passos (recomendação do Claude)](#pontos-em-aberto--próximos-passos-recomendação-do-claude)

---

## Como rodar

Não há build e não precisa de servidor. **Abra `index.html` com duplo clique**
(ou arraste para o navegador).

> As fontes vêm do Google Fonts — a primeira abertura precisa de internet.

### Conta de demonstração

| Campo   | Valor             |
| ------- | ----------------- |
| Usuário | `patinhasfelizes` |
| Senha   | `123456`          |

A autenticação é **fake** (comparação hardcoded no bloco AUTH de `js/app.js`). Não
há backend, persistência nem upload real de imagens. Recarregar a página zera
qualquer alteração feita na sessão.

---

## O que este protótipo define (e o que não define)

**Define (use como fonte da verdade):**

- Paleta de cores e semântica de status.
- Famílias e pesos de fonte.
- Raios de borda, sombras, transições e breakpoints.
- Estrutura de cada tela: quais campos existem, quais são obrigatórios, quais
  opções cada select tem, quais estados a tela pode assumir.
- Regras de negócio: faixas etárias, mapa status→cor, cálculo dos cards do
  dashboard, ordenação e filtros da listagem.
- Fluxo de navegação entre telas.

**Não define (decidir na implementação real):**

- Escala de espaçamento formal — o protótipo usa valores ad hoc; o documento
  [Design tokens](./doc/design-tokens.md) propõe uma escala a partir deles.
- Integração com Notion / backend, autenticação real, upload de imagem.
- Estados de carregamento, erro de rede, paginação, permissões por papel.
- Se os campos `tipo` e `sexo` continuam (ver [Pontos em aberto](#pontos-em-aberto--próximos-passos)).
- Acessibilidade — há lacunas conhecidas (ver [Navegação, responsivo e acessibilidade](./doc/navegacao-responsivo-e-acessibilidade.md#acessibilidade--estado-atual-e-pendências)).

---

## Estrutura dos arquivos

O protótipo foi mantido enxuto: **1 CSS + 2 JS**. Cada arquivo é seccionado por
comentários-marcador.

```
demo/
├── index.html   # Todo o HTML das telas + <link> do CSS + <script>s
│                #   Índice no topo; cada tela tem um banner <!-- TELA: ... -->
│
├── css/
│   └── styles.css   # Folha única. Seções "== SEÇÃO:": TOKENS · BASE · LAYOUT ·
│                     #   COMPONENTES · FORMS · LOGIN · DASHBOARD · ANIMAIS ·
│                     #   NOVO/EDITAR · RESPONSIVO
│
├── js/
│   ├── data.js   # "Conteúdo": state (sessão), credenciais demo, ANIMALS,
│   │             #   STATUS_COLOR, TIPO_EMOJI, PERIOD_DATA, faixaEtaria().
│   │             #   É a camada que vira serviço/modelo ao portar.
│   └── app.js    # Comportamento. Blocos "== BLOCO:": ÍCONES · AUTH · NAVEGAÇÃO ·
│                 #   DASHBOARD · ANIMAIS · NOVO ANIMAL · EDITAR ANIMAL · BOOTSTRAP
│
├── doc/          # Especificação detalhada (ver seção abaixo)
│
└── assets/       # Logos e ícone da pata (SVG) — ver doc/design-tokens.md › Assets
```

**Como as partes se conectam:**

- Os dois `<script>` usam `defer` e carregam **em ordem** (`data.js` → `app.js`),
  compartilhando o escopo global (sem módulos ES, para abrir via `file://`).
- Cada bloco de tela em `app.js` expõe `initX()` (liga eventos) e, quando renderiza,
  `renderX()`.
- O bloco BOOTSTRAP roda no `DOMContentLoaded`: chama todos os `initX()` e faz o
  render inicial de dashboard e listagem.

---

## Índice da documentação — `doc/`

Toda a especificação de referência fica em arquivos separados dentro de
[`doc/`](./doc). Este README cobre só como rodar, a estrutura dos arquivos e os
dados de demonstração.

| # | Documento | Conteúdo |
| - | --------- | -------- |
| 1 | [Design tokens](./doc/design-tokens.md) | Cores, tipografia, espaçamento, raios, sombras, bordas, transições, z-index, breakpoints, unidades e **assets** (logos e ícone da pata) |
| 2 | [Layout e shell da aplicação](./doc/layout-e-shell.md) | Cascas login/app, estrutura da sidebar, topbar e área de conteúdo |
| 3 | [Inventário de componentes](./doc/inventario-de-componentes.md) | Spec de cada componente: botões, pills, cards, painel, inputs, select de filtro, caixa de aviso, tabela, estado vazio, ícones |
| 4 | [Telas (especificação)](./doc/telas.md) | As 5 telas — elementos, campos, opções de select, estados, validação e fluxo de sucesso |
| 5 | [Modelo de dados do animal](./doc/modelo-de-dados.md) | Campos do animal e origem, faixas etárias, mapa status→cor |
| 6 | [Regras de negócio e comportamento](./doc/regras-de-negocio.md) | Criação/edição, persistência, cálculos do dashboard, filtros, login |
| 7 | [Navegação, responsivo e acessibilidade](./doc/navegacao-responsivo-e-acessibilidade.md) | Mapa de navegação entre telas, comportamento por breakpoint (tablet ≤1024px, celular ≤640px) e pendências de acessibilidade |

---

## Dados fictícios e contatos

- **16 animais** pré-cadastrados em `ANIMALS`. Os 7 primeiros reproduzem nomes,
  idades e status de uma imagem de dashboard de referência; os demais dão volume e
  variedade para testar os filtros (inclui `Outro` — hamster, coelho — e casos
  sênior com medicação).
- `PERIOD_DATA` — números e listas fixos para os períodos Mensal / Semestral /
  Anual do dashboard.

| Finalidade             | E-mail                      | Onde aparece                       |
| ---------------------- | --------------------------- | --------------------------------- |
| Recuperação de senha   | `senha@petconnect.com.br`   | Login › "Esqueci a senha."         |
| Cadastro de nova ONG   | `contato@petconnect.com.br` | Login › callout de cadastro (mailto) |

---

## Pontos em aberto / próximos passos (recomendação do Claude)

- [x] Refatorar o protótipo — **1 CSS + 2 JS**, seccionados por marcadores.
- [x] Tela de **edição** de animal (a partir da listagem).
- [x] Documentação de referência dividida em [`doc/`](./doc).
- [ ] **Decidir sobre `tipo` e `sexo`** — campos extra que não existem na Ficha do
  Animal do Notion. Mantém na UI? Passa a registrar no Notion? Remove?
- [ ] Validação de formulário com **feedback visível** (hoje falha em silêncio).
- [ ] Corrigir `idadeMeses` no cadastro (hoje entra sempre `0` → faixa "Filhote").
- [ ] Passe de acessibilidade (ver [Navegação, responsivo e acessibilidade](./doc/navegacao-responsivo-e-acessibilidade.md#acessibilidade--estado-atual-e-pendências)).
- [ ] Estados ausentes: carregando, erro de rede, lista vazia sem filtro, paginação.
- [ ] Reconstrução em **Angular** — usar este guia como especificação; a camada
  `data.js` vira service/model, cada `== BLOCO:` vira componente.
