# Modelo de dados do animal

> Parte do [guia de frontend do PetConnect](../README.md). Ver também:
> [Design tokens](./design-tokens.md) · [Layout e shell](./layout-e-shell.md) ·
> [Inventário de componentes](./inventario-de-componentes.md) · [Telas](./telas.md) ·
> [Regras de negócio](./regras-de-negocio.md) ·
> [Navegação, responsivo e acessibilidade](./navegacao-responsivo-e-acessibilidade.md)

Cada item de `ANIMALS` (`js/data.js`):

| Campo          | Tipo   | Origem     | Obrigatório | Observação                                                     |
| -------------- | ------ | ---------- | ----------- | ------------------------------------------------------------- |
| `id`           | number | sistema    | —           | Identificador interno                                          |
| `nome`         | string | Notion     | **sim**     | —                                                             |
| `raca`         | string | Notion     | **sim**     | Texto livre (ex.: SRD, Labrador, Persa)                        |
| `idadeLabel`   | string | Notion     | **sim**     | Idade legível (ex.: "1 ano e 2 meses") — é o que a UI exibe    |
| `idadeMeses`   | number | derivado   | —           | Só usado para calcular a faixa etária no filtro               |
| `vacinas`      | string | Notion     | **sim**     | Vacinas aplicadas                                             |
| `medicamentos` | string | Notion     | não         | Pode ser `""`                                                 |
| `descricao`    | string | Notion     | não         | Texto livre: temperamento, histórico, restrições              |
| `status`       | string | Notion     | sim         | `Disponível` \| `Em processo` \| `Em breve` \| `Adotado`      |
| `tipo`         | string | **extra**  | sim         | `Gato` \| `Cachorro` \| `Outro` — não existe no Notion         |
| `sexo`         | string | **extra**  | não         | `Macho` \| `Fêmea` — não existe no Notion                      |
| `cadastro`     | string | sistema    | —           | Data ISO `YYYY-MM-DD`                                         |

## Faixas etárias — `faixaEtaria(meses)`

| Faixa     | Regra              |
| --------- | ------------------ |
| Filhote   | `< 12` meses       |
| Jovem     | `12 – 35` meses    |
| Adulto    | `36 – 83` meses    |
| Sênior    | `≥ 84` meses       |

## Status → cor / significado

| Status       | Token      | Significado                                            |
| ------------ | ---------- | ---------------------------------------------------- |
| Disponível   | `--green`  | Pronto para adoção                                     |
| Em processo  | `--blue`   | Adoção em andamento com uma família                    |
| Em breve     | `--orange` | Ainda em avaliação veterinária / castração / etc.      |
| Adotado      | `--pink`   | Já foi para o novo lar                                 |

Mapa em código: `STATUS_COLOR` (status → `var(--*)`). Emojis de avatar
(`TIPO_EMOJI`): 🐱 Gato · 🐶 Cachorro · 🐰 Outro.
