# Abertura do app de função inversa: síntese de projeto

## 1. Contexto e premissas

- **App:** atividade interativa sobre função inversa para o ensino médio. A sequência vai de processos contrários a operações inversas com a ordem trocada, depois à expressão da inversa organizando as operações inversas, ao gráfico da inversa por simetria em relação a y = x e, por fim, a uma reflexão sobre as conjecturas que o estudante fez ao longo do caminho.
- **Suíte configurável:** o app tende a virar uma suíte. Cada turma é única, e o professor escolhe o que cada turma vai experimentar. Toda opção nova precisa ser ligável e desligável por ele.
- **A existência da inversa não é o objetivo principal.** A pergunta "sempre há inversa?" pode aparecer como possibilidade, construída com situações de referência, e não como eixo do app.
- **Acesso único:** cada estudante entra uma vez, em geral durante a aula. Não se deve contar com acessos repetidos.
- **Tempo:** no máximo 45 s por abertura.

## 2. Função da abertura

Captar a atenção de forma rápida, clara e convidativa e, ao mesmo tempo, **plantar a ideia-chave da etapa seguinte**. Cada abertura termina com uma **aposta registrada**, uma conjectura do estudante, que a reflexão final retoma.

## 3. Galeria de aberturas

| # | Abertura | Ideia-chave que planta | Esforço | Fase |
|---|---|---|---|---|
| A | Mágica do número | ordem trocada das operações inversas | baixo | piloto 1 |
| B | Desconto de 20% | inversa falsa (×1,2) × inversa verdadeira (÷0,8) | baixo | piloto 1 |
| C | Dá para voltar? (cartas) | nem todo processo tem volta | médio | piloto 1 |
| D | Meia e sapato | desfazer exige inverter a ordem | médio-alto (animação) | fase 2 |
| ~~E~~ | ~~Caminho de volta (GPS)~~ | eliminada: reproduz a etapa `et-rio` (antiga E2) | — | — |

**Ficaram fora da abertura:**
- *Cifra*: vira atividade própria da suíte (já existe um protótipo da roda de cifra fora do GeoGebra).
- *Conversões (°C/°F)*: descartada por ser clichê.
- *Espelho em y = x*: vira teaser dentro da etapa do gráfico.

### A. Mágica do número
- **Roteiro (~35 s):** "Pense num número. Multiplique por 3. Some 7. Digite o resultado." O app revela o número pensado.
- **Cuidado:** usar no máximo 2 operações, porque cálculo mental demais estoura o tempo. Permitir calculadora.
- **Aposta:** "Como o app descobriu seu número?" (uma frase livre).
- **Retorno na reflexão:** "Você desfez as contas do app de trás para frente. Sua explicação no começo chegou perto disso?"

### B. Desconto de 20%
- **Roteiro (~20 s):** "Um tênis custa R$ 80 com 20% de desconto. Para achar o preço original, basta somar 20%." Verdadeiro ou falso? O aluno aposta antes de calcular, e o app revela R$ 96 contra R$ 100.
- **Aposta:** V/F e uma frase justificando.
- **Retorno:** a inversa de ×0,8 é ÷0,8, e uma "operação contrária" intuitiva não é necessariamente a inversa.

### C. Dá para voltar? (cartas)
- **Roteiro (~40 s):** o aluno classifica 5 ou 6 cartas em "dá para voltar" ou "não dá".
- **Critério obrigatório para escolher as cartas:** perda de informação, ou seja, se dá para recuperar a entrada a partir da saída. Irreversibilidade física não serve como critério. Exemplos:
  - não dá: misturar tintas; multiplicar por 0;
  - dá: somar 7;
  - depende: elevar ao quadrado (9 veio de 3 ou de −3?).
  - Evitar "fritar ovo": é irreversível fisicamente, mas a saída identifica a entrada.
- **Aposta:** "Toda operação com números tem volta?" (sim / não / depende) e uma frase.
- **Dependência:** esta abertura promete um retorno. O professor só deve ativá-la se o corpo do app retomar a questão, o que já acontece na Investigação 2 do Laboratório gráfico (`et-grafico.inv-funcoes`), com a função x²/4 de domínio ℝ (`fn-quad-r`).

### D. Meia e sapato (fase 2)
- **Roteiro (~20 s):** uma animação: calça a meia, depois o sapato. Para desfazer, o personagem tenta tirar a meia primeiro e trava.
- **Aposta:** "Para desfazer uma sequência de ações, basta fazer o contrário de cada uma?"
- **Acessibilidade:** precisa de descrição textual ou audiodescrição da animação.

### E. Caminho de volta: eliminada
Reproduz a etapa `et-rio` (Rio / Caça ao tesouro), que já trabalha ida e volta com comandos.

## 4. Estrutura comum a todas as aberturas

Todas as aberturas seguem o mesmo esqueleto, para que a reflexão final tenha **um único roteiro**:

1. **Gancho** (situação, ≤ 30 s).
2. **Aposta** (pergunta própria de cada abertura, em formato comum): uma resposta fechada e um "por quê?" em uma frase.
3. **Registro:** o app guarda a abertura vista, a aposta e a frase.
4. **Retorno na reflexão final:** "No começo você apostou __ porque __. E agora?", com uma frase específica de cada abertura.

## 5. Configuração pelo professor

- **Modo da abertura:** fixa, com a mesma abertura para toda a turma, ou sorteio entre as aberturas marcadas pelo professor. O sorteio dá variedade em sala ("eu peguei a mágica, você o desconto"), mas depende de discussão conduzida pelo professor.
- **Galeria na reflexão final** (liga/desliga): permite ao aluno ver as outras aberturas depois de concluir a atividade.
- **Dependências:** o app avisa o professor quando uma abertura escolhida exige um módulo do corpo (caso de C).
- **Forma de configurar:** um link de turma com a configuração embutida, ou um painel do professor. A decisão técnica fica para depois.

## 6. Plano de produção (por item)

Para cada abertura, preencher uma ficha antes de implementar:

- objetivo / ideia-chave;
- roteiro cronometrado (segundo a segundo);
- interação (o que o aluno faz, entrada e saída);
- texto da aposta e opções;
- frase de retorno na reflexão;
- alternativa acessível (teclado, leitor de tela, descrição de animações);
- critério de sucesso no piloto.

**Ordem sugerida:** esqueleto comum (seção 4) e configuração mínima (seção 5) → A → B → C (depende de `et-grafico.inv-funcoes` com `fn-quad-r`, que já existe) → piloto 1 → D, conforme os resultados.

**Ids fixos e relação com as etapas:** ver `00-mapa-do-app.md` e `03-catalogo-de-itens.md`.

## 7. Pilotos

**O que observar em cada abertura:**
- o tempo real até a aposta (meta: ≤ 45 s);
- se o enunciado é entendido sem a mediação do professor;
- quantos alunos registram a aposta ou pulam;
- a qualidade da frase de justificativa (há conjectura ou só um palpite?);
- se a reflexão final de fato retoma a aposta e o aluno muda ou sustenta o que disse;
- falhas de acessibilidade.

**Instrumentos:** o registro do próprio app (abertura vista, tempo, aposta, frase), observação em sala e 2 ou 3 perguntas rápidas ao final.

**Cuidado com o público do piloto:** licenciandos já conhecem função inversa. Eles servem para testar a usabilidade e a clareza, mas não a surpresa nem o tempo de um aluno do ensino médio. O teste decisivo é com uma turma real.

**Critério para manter uma abertura na galeria:** cabe no tempo, é entendida sem mediação e gera apostas com justificativa que a reflexão consegue retomar.
