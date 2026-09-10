# Telas (especificação)

> Parte do [guia de frontend do PetConnect](../README.md). Ver também:
> [Design tokens](./design-tokens.md) · [Layout e shell](./layout-e-shell.md) ·
> [Inventário de componentes](./inventario-de-componentes.md) · [Modelo de dados](./modelo-de-dados.md) ·
> [Regras de negócio](./regras-de-negocio.md) ·
> [Navegação, responsivo e acessibilidade](./navegacao-responsivo-e-acessibilidade.md)

Cada tela tem um banner `<!-- TELA: ... -->` no `index.html`, uma seção
`== SEÇÃO:` no CSS e um bloco `== BLOCO:` no JS.

## 1. Login — `#login-screen`

**Objetivo:** acesso da ONG. Layout de duas colunas (hero + formulário); no
tablet/celular só o formulário aparece.

**Hero (`.login-hero`):** gradiente roxo, logo branca, campo de patinhas
decorativas (22 patas em posições pseudoaleatórias, opacidade ~15%), título
`"Adoção responsável, do jeito certo."`, parágrafo de apoio, rodapé
`"Feito com ❤ por Pet Connect"`.

**Formulário (`.login-card`, `#login-form`):**

| Campo         | id            | Tipo       | Placeholder            | Ícone | Obrigatório |
| ------------- | ------------- | ---------- | ---------------------- | ----- | ----------- |
| Usuário       | `login-user`  | `text`     | `ex: patinhasfelizes`  | `user` | sim (fluxo) |
| Senha         | `login-pass`  | `password` | `••••••••`             | `lock` | sim (fluxo) |

- Botão do olho (`#toggle-pass`) alterna `type` entre `password`/`text` e o ícone
  entre `eye`/`eyeOff`.
- **Dica fixa** (`.demo-hint`): mostra usuário/senha da conta demo.
- **"Esqueci a senha."** (`#forgot-toggle`): alterna a `.info-box` (`#forgot-box`)
  com instrução para enviar e-mail a `senha@petconnect.com.br`.
- **Erro** (`#login-error`, `.form-error`): escondido por padrão; ao errar as
  credenciais recebe o texto _"Usuário ou senha incorretos. Use a conta de
  demonstração: patinhasfelizes / 123456."_ e a classe `.visible`.
- Divisória "ou" + **callout de cadastro**: link `mailto:` para
  `contato@petconnect.com.br` (assunto pré-preenchido).

**Sucesso do login (credenciais == conta demo):**
1. esconde `#login-screen`, adiciona `.visible` a `#app-shell`;
2. preenche `#sidebar-username` e `#dashboard-greeting` com o nome da ONG;
3. `setScreen("dashboard")`.

**Logout (`#logout-btn`):** remove `.visible` do shell, reexibe o login, limpa os
dois campos.

## 2. Dashboard — `#screen-dashboard`

**Objetivo:** panorama das adoções.

**Topbar:** `h1` `"Olá, {ONG}!"` (`#dashboard-greeting`), `p` `"Resumo das adoções
da sua ONG"`, botão primário "Novo animal" (`data-goto="novo"`).

**Filtro de período (`.period-toggle`):** 4 pills — `Mensal`, `Trimestral`
(**ativo por padrão**), `Semestral`, `Anual`. Trocar re-renderiza os cards e a
tabela.

**Cards de status (`#stats-grid`):** 4 cards, nesta ordem:

| Rótulo (badge) | Fonte da contagem       | Cor        |
| -------------- | ----------------------- | ---------- |
| `DISPONÍVEL`   | `status === "Disponível"` | `--green`  |
| `EM PROCESSO`  | `status === "Em processo"` | `--blue`  |
| `ADOTADOS`     | `status === "Adotado"`    | `--pink`   |
| `EM BREVE`     | `status === "Em breve"`   | `--orange` |

Cada card mostra o número e `"{pct}% do período"`, onde `pct = round(valor / total * 100)`
e `total` é a soma das 4 contagens (mínimo 1, para evitar divisão por zero).

**Cadastros recentes (`.panel` + `table`):** colunas **Nome · Tipo · Idade · Status**
(status como pill colorida). Linha vazia: _"Nenhum cadastro neste período."_

**Regra de dados por período:**

- **Trimestral** → reflete o **estado real** de `ANIMALS` (conta os 16 + o que for
  cadastrado na sessão); recentes = os 7 primeiros de `ANIMALS`.
- **Mensal / Semestral / Anual** → números e lista fixos de `PERIOD_DATA` (só para
  demonstrar a troca visual).

## 3. Animais — listagem — `#screen-animais`

**Objetivo:** navegar/filtrar o acervo e entrar na edição.

**Topbar:** `h1` `"Animais cadastrados"`, `p` `#animais-subtitle` no formato
`"{n} de {total} animais"` (recalculado a cada render), botão primário "Novo animal".

**Barra de filtros (`.filters-bar`):** 4 selects — trocar qualquer um re-renderiza
o grid.

| Filtro       | id               | Opções (valor)                                                                 | Padrão      |
| ------------ | ---------------- | ----------------------------------------------------------------------------- | ----------- |
| Tipo         | `filter-tipo`    | `Todos`, `Gato`, `Cachorro`, `Outro`                                          | `Todos`     |
| Sexo         | `filter-sexo`    | `Todos`, `Macho`, `Fêmea`                                                     | `Todos`     |
| Idade        | `filter-faixa`   | `Todas`, `Filhote`, `Jovem`, `Adulto`, `Sênior`                              | `Todas`     |
| Ordenar por  | `filter-ordenar` | `recentes` (Recém cadastrados), `antigos` (Mais antigos), `nome` (Nome A-Z)  | `recentes`  |

- **Faixa etária** é derivada de `idadeMeses` por `faixaEtaria()` (ver [Modelo de dados](./modelo-de-dados.md#faixas-etárias--faixaetariameses)).
- **Ordenação**: `recentes`/`antigos` por `cadastro` (string ISO); `nome` por
  `localeCompare(..., "pt-BR")`.

**Grid (`#animals-grid`):** cards de animal (ver [componente](./inventario-de-componentes.md#card-de-animal-listagem--animal-card)).
Cada card tem botão **"Editar"** → abre a tela de edição daquele animal (via
`data-edit-id`, delegação de evento no grid).

**Estado vazio (`#empty-state`):** quando o filtro não retorna nada — ícone de pata
+ _"Nenhum animal encontrado com esses filtros."_ (`grid` escondido).

## 4. Novo animal — cadastro — `#screen-novo`

**Objetivo:** adicionar um animal.

**Topbar:** `h1` `"Cadastrar novo animal"`, `p` de apoio, botão ghost "Voltar"
(`data-goto="animais"`).

**Aviso (`.notice-box.info`):** explica que `Nome, Raça, Idade, Vacinas,
Medicamentos, Descrição, Status` vêm da Ficha do Animal do Notion, e que `Tipo` /
`Sexo` são campos **extra** (marcados com a tag "extra").

**Bloco de foto (`.photo-upload`):** placeholder com ícone `camera` + textos
_"Foto do animal"_ / _"Upload ilustrativo — sem envio real neste mockup."_ Não há
input de arquivo.

**Formulário (`#novo-animal-form`):**

| Campo                | id              | Controle                                              | Obrigatório | Placeholder / opções                                             |
| -------------------- | --------------- | ---------------------------------------------------- | ----------- | --------------------------------------------------------------- |
| Nome                 | `f-nome`        | `input text`                                         | **sim**     | `ex: Alfredo`                                                   |
| Raça                 | `f-raca`        | `input text`                                         | **sim**     | `ex: SRD, Labrador, Persa`                                      |
| Tipo _(extra)_       | `f-tipo`        | `select`                                             | sim¹        | `Gato` · `Cachorro` · `Outro`                                   |
| Sexo _(extra)_       | `f-sexo`        | `select`                                             | não¹        | `Macho` · `Fêmea`                                               |
| Idade                | `f-idade`       | `input text` (texto livre, ex.: "1 ano e 2 meses")   | **sim**     | `ex: 1 ano e 2 meses`                                           |
| Status               | `f-status`      | `select`                                             | sim¹        | `Disponível` · `Em processo` · `Em breve` · `Adotado`           |
| Vacinas aplicadas    | `f-vacinas`     | `input text`                                         | **sim**     | `ex: V10, Antirrábica, Giárdia`                                 |
| Medicamentos em uso  | `f-medicamentos`| `input text`                                         | não         | `ex: Vermífugo (em curso) — deixe em branco se não houver`      |
| Descrição            | `f-descricao`   | `textarea` (`rows=4`)                                | não         | `Informações adicionais: temperamento, histórico, restrições...` |

¹ selects sempre têm um valor selecionado; o protótipo só valida os 4 campos de
texto marcados **sim**.

**Ações:** "Cancelar" (ghost, volta para a listagem) · "Cadastrar animal"
(primário, submit).

**Validação (atual):** `if (!nome || !raca || !idade || !vacinas) return;` — falha
**silenciosa** (sem mensagem). _Na reconstrução, adicionar feedback visível._

**Sucesso:**
1. cria o objeto (ver [regras](./regras-de-negocio.md) para `id`, `idadeMeses`,
   `cadastro`) e faz `ANIMALS.unshift(novo)`;
2. o botão troca o ícone `plus`→`check` e o texto para _"Animal cadastrado!"_;
3. após **1200 ms**: restaura o botão, `form.reset()`, `setScreen("animais")`.

## 5. Editar animal — `#screen-editar`

**Objetivo:** alterar um animal existente. Aberta pelo botão "Editar" de um card.

**Topbar:** `h1` `"Editar animal"`, `p` `#editar-subtitle` = `"Editando {nome}"`,
botão ghost "Voltar".

**Formulário (`#editar-animal-form`):** os **mesmos campos** do cadastro, com ids
prefixados `e-` (`e-nome`, `e-raca`, `e-tipo`, `e-sexo`, `e-idade`, `e-status`,
`e-vacinas`, `e-medicamentos`, `e-descricao`). **Sem** bloco de foto e **sem** o
aviso do Notion.

**Abertura (`openEditarAnimal(id)`):** encontra o animal em `ANIMALS`, preenche
todos os campos, guarda o id em `animalEmEdicao`, define o subtítulo, navega.

**Ações:** "Cancelar" (volta sem salvar) · "Salvar alterações" (submit).

**Validação:** idêntica ao cadastro (mesmos 4 campos, falha silenciosa).

**Sucesso:**
1. **muta o objeto no lugar** em `ANIMALS` (mantém `id`, `idadeMeses`, `cadastro`);
2. botão mostra `check` + _"Alterações salvas!"_;
3. após **1200 ms**: restaura o botão, limpa `animalEmEdicao`, `setScreen("animais")`.
