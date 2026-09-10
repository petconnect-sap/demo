# Regras de negócio e comportamento

> Parte do [guia de frontend do PetConnect](../README.md). Ver também:
> [Design tokens](./design-tokens.md) · [Layout e shell](./layout-e-shell.md) ·
> [Inventário de componentes](./inventario-de-componentes.md) · [Telas](./telas.md) ·
> [Modelo de dados](./modelo-de-dados.md) ·
> [Navegação, responsivo e acessibilidade](./navegacao-responsivo-e-acessibilidade.md)

**Criação de animal (novo cadastro):**

- `id = 1000 + ANIMALS.length` — _atenção: não é robusto contra colisões; trocar
  por id de verdade no backend._
- `idadeMeses = 0` — todo animal recém-cadastrado cai na faixa **Filhote** até
  alguém corrigir o dado. (`idadeLabel` é livre e independente.)
- `cadastro = new Date().toISOString().slice(0,10)` (hoje, `YYYY-MM-DD`).
- Entra no **topo** da lista (`unshift`).

**Edição:** muta o objeto existente; `id`, `idadeMeses` e `cadastro` **não** são
alterados pela tela.

**Persistência:** nenhuma. Tudo vive em memória; recarregar restaura os 16 animais
fictícios.

**Dashboard:**

- Só o período **Trimestral** é "vivo" (deriva de `ANIMALS`). Os outros três são
  fixos (`PERIOD_DATA`) e existem só para mostrar a troca visual.
- `pct` de cada card = `round(valor / max(total, 1) * 100)`.

**Listagem:**

- Filtros combinam em **AND**. `Todos`/`Todas` desliga o filtro.
- Ordenação default: `recentes` (por `cadastro` desc).
- Subtítulo sempre `"{filtrados} de {total}"`.

**Feedback de formulário:** o botão de submit vira confirmação por **1200 ms**
(ícone `check` + texto), depois volta e navega para a listagem.

**Login:** comparação literal com `patinhasfelizes` / `123456` (bloco AUTH). Sem
sessão, token ou "lembrar-me".
