# 00. Mapa do app: o que existe e como se organiza

## Referência metodológica

O app foi planejado tendo como referência as **investigações matemáticas** de Ponte, Brocardo e Oliveira (*Investigações matemáticas na sala de aula*; conferir a edição citada). Os quatro momentos são:
1. exploração e formulação de questões;
2. conjecturas;
3. testes e reformulação;
4. justificação e avaliação.

Esses momentos **não seguem ordem rígida**: aparecem de forma simultânea ou cíclica.

**Comunicação e discussão coletiva:** ficam com o professor, em sala, fora do app. O app é individual e não envia nada, então não hospeda a discussão dos resultados da turma. Ele prepara essa discussão: as apostas, as conjecturas e o caderno são o material que o aluno leva para ela.

**Posição do professor sobre a justificação:** ela não é tratada como fato a ser enunciado, e sim como **processo que se reconstitui e amadurece**, tanto na imersão específica no conceito quanto no contato com ideias adjacentes à noção de função. O app não espera um resultado pronto. Ele propõe a **construção de evidências** de que há uma organização de ideias que apoia a construção do conceito.

**Segundo referencial: DUA (Desenho Universal para a Aprendizagem, CAST, https://udlguidelines.cast.org/).** Orienta oferecer formas variadas de engajamento, representação e ação e expressão, sem abandonar o objetivo matemático. Jogos e animações não garantem o DUA por si sós, e o app não tem certificação de acessibilidade.

## Princípios de interação

- **Erro como retomada:** sem penalidade, vidas ou cronômetro. O erro convida a rever o plano.
- **Acerto celebrado:** com animação e som, respeitando o som desligado e o movimento reduzido.
- **Leitura apoiada pela ação:** os alunos do professor pouco leem espontaneamente. O texto não é eliminado, mas fica necessário para agir e é apoiado pela visualização.
- **Celular primeiro:** a meta é realizar cada momento no celular sem rolar a tela, sem reduzir demais textos e alvos de toque (ver `05`).
- **Ativos autorais:** usar exatamente os ativos fornecidos pelo professor, sem redesenhar nem recolorir. Não alterar a arte para contornar dificuldade técnica sem discutir.

## Etapas (situação atual)

Os números E1 a E8 são os rótulos atuais. Os **ids fixos**, que valem daqui em diante, estão em `03-catalogo-de-itens.md`.

| rótulo | id | nome | status |
|---|---|---|---|
| E1 | `ab-*` (slot de abertura) | página de textos, que será **substituída pela abertura** | existe; a substituir |
| E2 | `et-rio` | Rio / Caça ao tesouro | implementada |
| E3 | `et-fita` | Máquina da fita | implementada |
| E4 | `et-grafico` | Laboratório gráfico | implementada |
| E5 | `et-maquinas` | Máquinas conectadas | implementada |
| E6 | `et-diario` | Diário de descobertas | implementada |
| E7 | `et-justificar` | Justificar | prevista; **fora da v1** |
| E8 | `et-transferir` | Transferir e avaliar | prevista; **fora da v1** |

### E2. Rio / Caça ao tesouro (`et-rio`)
- **Situação:** um pirata precisa atravessar um rio para resgatar um tesouro na outra margem.
- **Ação do aluno:** monta o plano de ida com comandos de direção (esquerda, direita, subir, descer) e quantidade de saltos, numa barra que pode editar antes de executar. O caminho de ida é 3 para a direita e 5 para cima. Um salto sem pedra mostra um aviso neutro ("Faltou uma pedra neste trecho. Vamos rever o plano?").
- **Volta:** com o tesouro, o aluno planeja a volta vendo o próprio plano de ida acima ("Seu plano de ida está acima. Como será a volta?"). Ao chegar, o app pede: "Compare seus dois planos".
- **Ênfase:** desfazer algo realizando ações contrárias, na ordem contrária. No jogo, há um único caminho de pedras, então a única volta possível é descer 5 e depois ir 3 para a esquerda.
- **Representação:** espacial e corporal, sem números como objeto de estudo.
- **Visual:** a direção é indicada por símbolo e texto, com apoio de cor para os pares horizontal e vertical. O cenário original está em `banco-imagens/ativos/rio-e2-cena-original.svg` (pasta do ChatGPT). Há uma nova animação do Rio feita com o Claude (`referências/Elementos visuais/rio-pedras/`), a integrar preservando as regras acima (ver `07`, P10).

### E3. Máquina da fita (`et-fita`)
- **Situação:** uma máquina pega uma fita, corta-a ao meio e costura numa das metades um pedaço de 3 cm. Matematicamente, f(x) = x/2 + 3, e a inversa é y ↦ 2(y − 3).
- **Quatro momentos:**
  1. **Experimentar:** o aluno escolhe uma fita inicial de 1 a 10 cm e vê a máquina agir.
  2. **Representar:** identifica as expressões numéricas, isto é, as operações sucessivas aplicadas ao comprimento que escolheu.
  3. **Desfazer:** indica, operação por operação, como recuperar o comprimento original.
  4. **Generalizar:** os comprimentos antes e depois da máquina passam a ser variáveis. O aluno indica as operações equivalentes às ações da máquina, com validação a cada operação e apoio visual, e usa a expressão para reconfirmar sua validade.
- **Continuidade:** a saída real da experiência do aluno alimenta a tarefa de desfazer; não é substituída por um número fixo. Comprimentos ímpares produzem meios centímetros. A outra metade da fita fica reservada na cena, o que ajuda a entender o corte.
- **Domínio:** comprimentos são positivos, então n > 0 e y > 3. O intervalo do controle não se confunde com o domínio matemático.
- **Texto de tela:** a palavra "Desfazer" foi confundida com desfazer a última ação da interface. As instruções devem dizer que se trata de reconstruir o comprimento de entrada (ver `07`, P10).
- **Ao final:** o aluno descreveu as expressões de f e da sua inversa como **relações entre variáveis**, sem a notação n(y) = …
- **Quadro-resumo:** apresenta as operações como etapas que se compõem, **sem nomear** a composição de funções.

### E4. Laboratório gráfico (`et-grafico`)
- **Experimentar:** guiado por uma animação, o aluno marca o simétrico de um ponto P em relação a y = x, em duas situações aleatórias.
- **Investigação 1 (simétrico de um ponto):** o aluno varia P e observa P′. Precisa responder qual é o simétrico de P = (2, −1); acertando, escolhe entre 4 opções as coordenadas do simétrico de (a, b).
- **Investigação 2 (simétrico de um gráfico):** o aluno escolhe uma entre 4 funções e pode experimentar todas:
  - 0,75x + 1, com domínio ℝ;
  - x²/4, com x ≥ 0;
  - x²/4, com domínio ℝ;
  - x³/25, com domínio ℝ.

  Ao mover P sobre o gráfico, P′ deixa o rastro da curva simétrica. O movimento pode ser feito arrastando, por seletor ou pelo botão "Varrer". O domínio é sempre exibido.
- **Notação:** P e P′, nunca Q para o simétrico.
- **Animação do simétrico:** O é o ponto médio de PP′, na reta y = x; A e B são os pontos médios de OP e OP′, todos invisíveis e sem rastro. A cópia de OP se **translada sem girar** até coincidir com OP′. A parametrização completa está na especificação do ChatGPT.
- **Retomadas:** um erro na pergunta numérica reabre a experiência geométrica para marcar o simétrico. Um erro na pergunta simbólica retoma a experiência com eixos sem marcas nem números, só com coordenadas simbólicas. As alternativas ficam visíveis em botões, não num seletor.
- **Liberação do rastro:** a Investigação 2 só é liberada depois do acerto da conjectura (a, b) → (b, a). Um acerto isolado não atesta compreensão.
- **Pergunta final atual:** "O reflexo é função sobre a imagem de f?" **Está em revisão** (ver `07-pendencias.md`).
- **Observação:** o par x²/4 com x ≥ 0 e x²/4 com domínio ℝ **já cumpre o papel** do "módulo y = x²" proposto no brainstorm. Por isso o módulo separado foi eliminado.

### E5. Máquinas conectadas (`et-maquinas`)
- **Situação:** a função como máquina. Um valor inicial passa por duas etapas, da esquerda para a direita, e se transforma num valor final. A função é f(x) = (x + 2)/5 (soma 2, divide por 5), e a volta é 5y − 2. As versões antigas (x/2 + 3, x/2 + 4) foram superadas.
- **Momentos:** Montar, Investigar, Explicar e Relacionar. Na ida, as operações são fixas e o aluno escolhe a entrada. Na volta, ele escolhe as operações e usa a saída efetivamente obtida; a primeira operação da volta ocupa a estação da direita.
- **Ficha:** uma única ficha laranja percorre entrada, entre etapas e saída, mostrando cada valor, e passa atrás dos bocais. A expressão da volta é atualizada a cada escolha, mesmo incorreta. Na tabela, valores que coincidem ficam em negrito, e os divergentes aparecem como "?", convidando à revisão.
- **Botões:** Refazer apaga a tentativa de volta e preserva a ida. (O botão Nova sai, ver P7.)
- **Ação do aluno:** conhecendo a função de ida, escolhe entre algumas operações disponíveis as que correspondem a cada etapa da volta, para que a máquina, da direita para a esquerda, devolva o valor de entrada. Pode refazer as escolhas e testar outras entradas.
- **Representação:** uma tabela com os valores parciais e finais da ida e da volta.
- **Composição e identidade:** o E5 já trabalha a composição da ida com a volta e a identidade que ela produz (momentos Montar, Investigar, Explicar e Relacionar). A composição, portanto, **está na v1**. A questão em aberto é como o E5 a **justifica** (ver `07`, P5.1).
- **Entradas:** passam a ser **duas**, registradas na mesma tabela, sem mudança de página e sem o botão "Nova": terminado o ciclo com um número, o app pede outro (ver `07`, P7).
- **Revisões pendentes** (ver `07`): entrada hoje limitada a (0, 12] sem que o aluno saiba disso; permitir negativos; botão "refazer" piscar diante do erro.

### E6. Diário de descobertas (`et-diario`)
Propõe que o aluno pense sobre cada uma das etapas. A etapa se ampliou durante o desenvolvimento, e a distribuição de funções entre E6, E7 e E8 precisa ser revista para evitar repetições (ver `07`, O4).

- **Retomadas no piloto v0.33:** Rio, Fita, Reflexão e Composição, com os movimentos Recordar, Olhar para a aprendizagem e Explicar.
- **Rio:** a mesma cena do E2, sem setas que entreguem a ordem da volta. **Fita:** registro simbólico x, x/2, x/2 + 3. **Composição:** acompanha o E5, com y = (n + 2)/5 e n = 5y − 2.
- **Reflexão escrita:** não recebe julgamento automático de certo ou errado.
- **Pendências** (ver `07`, P10): retirar a opção oral não gravada; recuperar detalhes visuais da máquina da Fita; integrar as novas imagens.
- **Intenção original** (especificação do ChatGPT): E6, E7 e E8 eram três páginas de diário: reconstruir (E2–E3), justificar (E4–E5) e transferir e avaliar.

### E7. Justificar (`et-justificar`): prevista, fora da v1
O esboço vem do ChatGPT e ainda não está decidido. A ideia é retomar o laboratório gráfico e a composição para o aluno explicar as ideias investigadas:
- por que a reflexão em y = x leva (a, b) em (b, a)?
- a reflexão do gráfico de uma função sempre representa outra função?
- num caso sem inversa no domínio original, como restringir o domínio para permitir a inversão?
- como a composição ajuda a justificar que duas funções são inversas?

A intenção é relacionar gráfico, álgebra e composição, com perguntas e contrapontos do professor.

### E8. Transferir e avaliar (`et-transferir`): prevista, fora da v1
Também é um esboço provisório. O aluno usaria o que aprendeu numa situação nova e avaliaria o próprio percurso:
- investigar outra função (exemplo provisório: f(x) = 3 − 2x);
- construir a inversa e justificar como verificar o resultado;
- comparar o entendimento final com a previsão inicial;
- selecionar uma evidência do que aprendeu e registrar uma dúvida que permanece.

O objetivo é distinguir conseguir uma resposta, compreender o processo e conseguir justificá-lo, oferecendo elementos para uma síntese coletiva.

**Decisão do professor:** E7 e E8 ficam de fora até o percurso E2–E5 ganhar consistência.

## Leitura pela lente das investigações

A comunicação não tem coluna porque fica com o professor, em sala (ver o início deste arquivo).

| Etapa | Exploração / questões | Conjecturas | Testes e reformulação | Justificação |
|---|---|---|---|---|
| Abertura | situação-gancho | **aposta registrada** | — | retomada depois |
| E2 rio | ida e volta no mapa | como voltar? | conferir a volta desenhada | comparar ida e volta |
| E3 fita | experimentar a máquina | quais operações? | desfazer, generalizar com validação | reconfirmar pela expressão |
| E4 gráfico | mover P | onde fica P′? (a, b) → ? | varrer as 4 funções | quando o reflexo é gráfico de função? |
| E5 máquinas | escolher a entrada | quais operações voltam? | refazer, trocar a entrada | a volta devolve a entrada? |

**Leitura crítica da tabela:**
- Teste e reformulação estão bem servidos em E3, E4 e E5.
- A **justificação** aparece sobretudo como validação pelo app (certo ou errado). Isso é diferente da justificação **do aluno**, construída e amadurecida, que é a sua concepção. Se ela é um processo, o app precisa de um lugar onde o aluno **volte** às próprias ideias, e não só onde receba validação. Ver a proposta do Caderno de conjecturas em `03`.

## Repetição entre a abertura e o corpo

A ideia de "desfazer com ações contrárias na ordem contrária" aparece em E2 (espaço), E3 (medida e álgebra) e E5 (máquina numérica). Isso é **variação de representação**, e é intencional e produtivo. Para a abertura, a consequência é a seguinte:
- **Caminho de volta (GPS):** eliminada, porque reproduz o E2.
- **Mágica do número:** mantida, porque o papel dela é outro. Ela **coloca a questão** ("como o app descobriu?") que E3 e E5 respondem. A reflexão deve tornar essa ligação explícita.
- **Desconto:** mantida, porque traz algo que o corpo não trabalha: a **inversa falsa**, em que a operação "contrária" intuitiva (+20%) não é a inversa (÷0,8).
- **Cartas:** mantida, com a dependência agora apontando para a Investigação 2 de E4.
- **Meia e sapato:** fase 2. Sobrepõe-se ao E2; serve como alternativa curta quando o professor desligar o E2.
