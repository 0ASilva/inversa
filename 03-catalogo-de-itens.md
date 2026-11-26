# 03. Catálogo de itens: ids fixos

## Convenção de ids

| prefixo | tipo | exemplo |
|---|---|---|
| `ab-` | abertura (uma por aluno) | `ab-magica` |
| `et-` | etapa | `et-fita` |
| `et-xxx.yyy` | parte de uma etapa | `et-fita.desfazer` |
| `fn-` | opção de conteúdo dentro de uma parte | `fn-quad-r` |
| `tr-` | recurso transversal (atravessa etapas) | `tr-galeria` |

**Regras:**
- Os ids são **semânticos e estáveis**. Eles **não codificam a ordem**, porque a ordem fica na coluna `ordem` do catálogo. Assim, reordenar etapas (por exemplo, trocar E4 e E5) não muda nenhum id.
- Os rótulos E1 a E8 deixam de ser usados no código. Podem continuar aparecendo apenas como numeração exibida ao aluno, se o professor quiser.
- Os ids usam só letras minúsculas sem acento, dígitos, hífen e ponto.

## Aberturas (slot que substitui E1)

| id | nome | requer | status |
|---|---|---|---|
| `ab-magica` | Mágica do número | — | a fazer (piloto 1) |
| `ab-desconto` | Desconto de 20% | — | a fazer (piloto 1) |
| `ab-cartas` | Dá para voltar? (cartas) | `et-grafico.inv-funcoes` + `fn-quad-r` | a fazer (piloto 1) |
| `ab-meia` | Meia e sapato | — | fase 2 |

`ab-gps` foi eliminada porque reproduz o E2.

## Etapas e partes

| ordem | id | antigo | parte (id) | status |
|---|---|---|---|---|
| 20 | `et-rio` | E2 | `et-rio.ida`, `et-rio.volta`, `et-rio.comparar` ¹ | implementada |
| 30 | `et-fita` | E3 | `et-fita.experimentar`, `et-fita.representar`, `et-fita.desfazer`, `et-fita.generalizar`, `et-fita.resumo` | implementada |
| 40 | `et-grafico` | E4 | `et-grafico.experimentar`, `et-grafico.inv-simetrico`, `et-grafico.inv-funcoes` | implementada |
| 50 | `et-maquinas` | E5 | — ² | implementada; revisões em `07` |
| 80 | `et-diario` | E6 | a definir ³ | implementada |
| 85 | `et-justificar` | E7 | — | prevista; **fora da v1** |
| 90 | `et-transferir` | E8 | — | prevista; **fora da v1** |

¹ As partes de `et-rio` foram inferidas da descrição; confirmar se correspondem às telas reais.
² Definir as partes de `et-maquinas` se houver telas distintas.
³ As partes de `et-diario` dependem da redistribuição entre E6, E7 e E8 (o E6 será revisto, aliviado pelo `tr-caderno`; ver `07`, O4). O antigo `et-reflexao` deixa de existir: a reflexão final é o `et-diario`.

**Ordem de E4 e E5:** hoje o gráfico (E4) vem antes das máquinas (E5), que é de natureza numérica e operatória como E3. Essa ordem é **decisão em aberto** (ver `07`). Como os ids são estáveis, mudar a ordem custa apenas trocar o valor de `ordem`.

## Opções de conteúdo em `et-grafico.inv-funcoes`

| id | função | domínio | o reflexo é gráfico de função? |
|---|---|---|---|
| `fn-afim` | 0,75x + 1 | ℝ | sim |
| `fn-quad-pos` | x²/4 | x ≥ 0 | sim |
| `fn-quad-r` | x²/4 | ℝ | **não** |
| `fn-cubica` | x³/25 | ℝ | sim |

Ligar e desligar funções permite, por exemplo, retirar `fn-quad-r` numa turma em que a discussão sobre a existência da inversa não é o foco.

## Recursos transversais

| id | nome | descrição | status |
|---|---|---|---|
| `tr-galeria` | Galeria de aberturas | mostra, na reflexão, as aberturas que o aluno não viu | a fazer |
| `tr-caderno` | Caderno de conjecturas | ver abaixo | **adotado**; a fazer |

`galeria` passa a se chamar `tr-galeria`, e o `mod-x2` foi eliminado (o par `fn-quad-pos` / `fn-quad-r` já faz esse papel).

### `tr-caderno`: Caderno de conjecturas (adotado)

Um registro do aluno que **atravessa o app**. Ele ajusta a concepção de justificação como processo ao funcionamento do app e alivia o `et-diario` (E6), que será revisto depois.

- **Guarda** a aposta da abertura e as conjecturas pedidas nas etapas.
- **Reabre em pontos de retomada**, por exemplo ao fim de `et-fita` e de `et-grafico`, com a pergunta "Você ainda pensa assim?". A resposta custa **no máximo um clique** (mantenho / mudo), com uma frase opcional.
- **No fechamento**, mostra a trajetória: o que o aluno pensava, quando mudou e por quê.

**Cuidados:**
- Cada retomada interrompe a atividade, por isso o custo mínimo de um clique.
- Na v1 o caderno fica **só no navegador do aluno**: a evidência é visível para ele, não para o professor.

**Alternativa considerada e não adotada:** um diário alimentado por rastros automáticos (tentativas, erros, funções exploradas). Pode voltar como complemento do caderno.

## Granularidade de autorização na v1

Todos os ids acima ficam **fixados agora**, mas na v1 o professor liga e desliga apenas:
- as aberturas (`ab-*`) e o modo de abertura (fixa ou sorteio);
- as etapas (`et-*`);
- `et-grafico.inv-funcoes` e as funções `fn-*`;
- os recursos transversais (`tr-*`).

As outras partes ficam sempre ligadas dentro da sua etapa, porque são sequenciais: por exemplo, `et-fita.generalizar` pressupõe `et-fita.desfazer`. Ligar parte por parte multiplicaria os casos de teste. Fica para depois do piloto, se você sentir falta.

## Dependências

| item | requer (o app bloqueia) | pressupõe (o app só avisa o professor) |
|---|---|---|
| `ab-cartas` | `et-grafico.inv-funcoes`, `fn-quad-r` | — |
| `et-grafico.inv-funcoes` | ao menos uma `fn-*` | `et-grafico.inv-simetrico` |
| `tr-galeria` | `et-diario` | — |
| `et-diario` | — | — |
| `tr-caderno` | — | uma abertura ligada (para ter a aposta inicial) |
| `et-fita` | — | `et-rio` (a confirmar) |
