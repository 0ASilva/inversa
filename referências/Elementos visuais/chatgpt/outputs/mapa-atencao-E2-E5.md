# Mapa de atenção — funções inversas E2–E5

24/11/2026 · estudo 01 · versão 0.30 · propostas para discussão, não um redesenho já aprovado.

## Decisões desta rodada

- E7 e E8 ficam adiadas até maior consistência em E2–E5.
- E3 mantém f(x) = x/2 + 3. E5 passa a f(x) = (x + 2)/5: soma 2, depois divide por 5. A inversa é f⁻¹(y) = 5y − 2: multiplica por 5, depois subtrai 2.
- Atualizados cálculo, operações, tabela, explicação, gráfico de composição e retomada correspondente de E6. Exemplos: 1 → 3 → 0,6; 7 → 9 → 1,8; 10 → 12 → 2,4. A volta deve partir da saída efetivamente produzida.
- O piloto continua com entrada positiva até 12 na experimentação. Essa restrição é uma escolha da interface; a função afim admite domínio real. Na exploração inversa do recorte positivo, y > 0,4. A justificativa algébrica não deve confundir o recorte da interface com o domínio possível da função.
- Cores e hierarquia abaixo são propostas para comparação. A paleta dos pilotos não foi substituída em bloco.

## Base da análise e limites

Referência autoral: [Labirinto Plano](https://0asilva.github.io/labirinto-plano/), seu index.html e README fornecidos. Inspecionados a tela publicada, as telas iniciais de E2–E4, o percurso de ida e volta de E5 e os códigos locais dos pilotos. Este é um julgamento de projeto, não um rastreamento ocular nem um teste com estudantes. As sequências abaixo indicam onde desejamos orientar a atenção; precisam ser confrontadas com a prática. Não foram importados formulário, cadastro, envio de respostas ou regras do README para nosso aplicativo.

A skill Sites foi utilizada como apoio para hierarquia, responsividade e legibilidade. Ela ajuda a organizar a revisão técnica, mas não determina o que o estudante deve perceber matematicamente. Desmos e GeoGebra permanecem referências de interação matemática, não critérios principais deste estudo de hierarquia.

## Identidade visual: observado e proposto

| Elemento | Labirinto Plano: observado no código | Papel proposto neste percurso |
|---|---|---|
| Roxo | #4B0082; escuro #3B1163 | Estrutura, eixos, títulos e relações matemáticas |
| Amarelo | #FFD700; claro #FFF3B0 | Área de investigação e gráficos; evitar estendê-lo a todo texto explicativo |
| Laranja | #FF6633; escuro #D94A1C | Ação principal com texto/ícone branco; fichas numéricas já aprovadas |
| Verde | #1A7F4B; saída #CDEED8; sucesso #E6F6EC | Chegada e correspondência já verificada, acompanhadas de palavra/símbolo |
| Papel | #FFFDF5; lavanda #F4EEFF; borda #E0D6EE | Leitura, agrupamento e espaços de descanso |
| Texto | #241436; secundário #6B5B7D | Enunciado principal e informação complementar |

Os pilotos usam principalmente roxo #473366 e amarelo #FAD404, portanto ainda não têm exatamente a paleta do Labirinto. O laranja já coincide. Sugestão: testar a paleta autoral em uma tela de cada etapa antes de propagá-la.

A fonte do Labirinto é do sistema: system-ui, -apple-system, Segoe UI, Roboto, sans-serif; não há uma família especial a instalar. O ganho virá sobretudo de tamanho, peso e espaçamento. Proponho texto de leitura com 16 px ou mais, rótulos essenciais com 14 px ou mais e números/expressões em destaque. São metas de projeto, não certificação de acessibilidade. No Labirinto há rótulos de botões de aproximadamente 11 px: não convém reproduzir essa redução. Nos pilotos, textos dentro de SVG também encolhem junto com a figura.

Laranja com branco é determinação do proponente. A legibilidade dessa combinação, sobretudo em letras pequenas, merece atenção: priorizar texto maior e forte e estudar o laranja escuro da própria referência para estados específicos. Não usar verde sozinho para dizer “correto”, nem vermelho como punição.

## Como ler o mapa

**1 · Alvo:** o objeto ou relação matemática a perceber. **2 · Ação:** o que fazer agora. **3 · Evidência:** onde conferir o efeito. **4 · Apoio:** navegação, som, reinício e instruções adicionais. A ordem muda durante a experiência: na preparação, a pergunta orienta; durante a execução, o fenômeno ocupa o primeiro plano; depois, o registro permite leitura e explicação.

Apoio visual deve levar de volta à leitura: destacar a expressão correspondente ao evento e manter seu registro após a animação. Evitar tornar a leitura dispensável por pistas que já entregam a resposta.

## E2 — Rio — planejar, acompanhar, inverter

| Momento | Caminho de atenção pretendido | Julgamento e proposta | Risco didático/visual |
|---|---|---|---|
| Planejar a ida | Cena e pedras de apoio → sequência de comandos → Ir. | A cena mostra o problema; a barra torna o plano legível. Quantidades e direções precisam aparecer juntas. | Cores iguais nos pares esq/dir e sobe/desce ajudam a reconhecer relações, mas não substituem setas e palavras. |
| Executar | Personagem e próximo apoio → comando em execução → resultado do salto. | Realçar somente o comando atual; manter os demais estáticos e consultáveis. | Não competir com animações decorativas, cabeçalho ou convite para avançar. |
| Planejar a volta | Posição de chegada → plano da ida → construção da volta. | Preservar o registro da ida como evidência para leitura. | Setas prontas da volta revelariam a resposta; não incluí-las antes da elaboração. |
| Rever uma tentativa | Última posição segura → comando a revisar → experimentar novamente. | Convite visual breve e neutro; edição no próprio comando. | Não colorir o conjunto como fracasso nem remover o plano que permite compreender a tentativa. |

**Alternativas para confrontar:** Uma cena maior com barra compacta abaixo favorece o planejamento espacial. Alternativa: reduzir a cena após o percurso e ampliar a barra para discutir a ordem. Comparar se a troca de foco ajuda ou interrompe a continuidade.

## E3 — Fita — medida, operação e escrita

| Momento | Caminho de atenção pretendido | Julgamento e proposta | Risco didático/visual |
|---|---|---|---|
| Experimentar | Comprimento escolhido → corte → metade utilizada → acréscimo de 3 cm. | A medida e sua transformação são o alvo; a metade reservada deve continuar identificável. | A animação não pode sugerir que dividir por 2 destrói a outra metade nem que a tela está em escala real. |
| Representar | Estado da fita → número correspondente → expressão correspondente. | Proximidade visual entre imagem e registro; uma relação em destaque por vez. | Textos pequenos e cartões distantes exigem alternância de olhar excessiva. |
| Recuperar a entrada | Saída produzida pelo estudante → escolha de operação → medida recuperada. | Manter a saída real visível, sem inserir um exemplo fixo que a substitua. | Não antecipar a sequência inversa com cores ou posições de respostas corretas. |
| Generalizar | Expressão n/2 + 3 → operações inversas → 2(y − 3). | Usar a imagem como apoio consultável, com expressão suficientemente grande. | Uma resposta simbólica correta por reconhecimento não garante explicação da ordem; a mediação deve solicitar essa relação. |

**Alternativas para confrontar:** Imagem e expressão simultâneas favorecem a associação. Alternativa: primeiro a imagem, depois um destaque da expressão mantendo uma miniatura estática. Confrontar carga visual e necessidade de retomar a experiência.

## E4 — Reflexão — perceber, conjecturar, construir

| Momento | Caminho de atenção pretendido | Julgamento e proposta | Risco didático/visual |
|---|---|---|---|
| A · experiência geométrica | P → segmento em movimento → posição de P'. | A marcação é participação tátil e visual, não avaliação de um conhecimento ainda não apresentado. | O, A e B e seus rastros continuam ocultos; a cópia do segmento se translada, não gira. |
| B · caso numérico | Coordenadas de P → alternativas → comparação com P'. | Pergunta e respostas próximas do plano; celebração breve após acerto. | Na tentativa incorreta, a geometria retoma a investigação; não exibir imediatamente uma solução textual. |
| B · caso simbólico | (a,b) → troca das posições → (b,a). | Manter a ligação entre posições e coordenadas. Na recuperação simbólica, eixos sem marcas e números. | Evitar acrescentar números que retirem o estudante do problema de generalização. |
| Construção por rastro | P móvel → P' → conjunto dos pontos rastreados. | Distinguir ponto atual de rastro; formas/contornos reforçam a distinção de cor. | Muitos rastros e controles simultâneos podem esconder a relação entre um ponto e seu simétrico. |
| Existência da inversa | Gráfico refletido → correspondência para uma entrada → justificativa. | O problema passa da simetria para a condição de ser função. | Não apresentar “toda reflexão é função inversa”; distinguir relação inversa e função inversa. |

**Alternativas para confrontar:** Pergunta fixa e área gráfica estável favorecem continuidade. Alternativa: recolher ferramentas não usadas a cada subetapa. Comparar autonomia de exploração e excesso de controles; não esconder recursos necessários sem indicação.

## E5 — Máquina — seguir valores e justificar a composição

| Momento | Caminho de atenção pretendido | Julgamento e proposta | Risco didático/visual |
|---|---|---|---|
| Ida: escolher entrada | Célula x da tabela → ficha laranja → Experimentar. | Só uma ficha; seu número acompanha o valor escolhido. A expressão (x + 2)/5 identifica a transformação. | A ficha laranja não é botão: diferenciar pela forma e pela ausência de aparência clicável. |
| Ida: em movimento | Ficha → Soma 2 → valor intermediário → Divide por 5 → saída. | Somente o texto da estação ativa quica. A ficha passa atrás dos detalhes da máquina e sua forma acompanha a sucção. | Movimento das letras deve chamar atenção sem impedir sua leitura; evitar animação contínua fora do processamento. |
| Ida: observar registro | Linha x, x + 2, (x + 2)/5 → resultado decimal. | Tabela permanece estática após a execução, para ler e comparar com a máquina. | Não arredondar 0,6 a inteiro nem omitir o valor intermediário; apresentação usa vírgula decimal. |
| Volta: planejar | Saída efetiva → controles de operação → expressão atualizada. | A primeira operação escolhida atua na estação direita; a segunda, na esquerda. Preservar essa direção. | Não voltar a acrescentar a linha redundante das escolhas removida pelo proponente; a expressão já representa o plano. |
| Volta: conferir | Ficha da direita à esquerda → valores da volta → coincidências na tabela. | Negrito indica coincidência; ? indica ponto a reconsiderar. Verde pode reforçar coincidência, nunca substituí-la. | Não marcar de verde uma operação apenas porque foi selecionada: isso anteciparia sua validação. |
| Explicar e relacionar | 5((n + 2)/5) − 2 = n → cancelamento das operações → ponto (entrada, saída final). | A expressão e depois o gráfico da identidade devem assumir o primeiro plano. | Três exemplos são evidências para conjecturar, não prova. A reta representa a composição, não o gráfico de f. |

**Alternativas para confrontar:** Máquina acima e tabela abaixo preservam a metáfora atual. Alternativa: durante a execução, destacar temporariamente a célula ligada à estação; ao terminar, dar prioridade à tabela. Comparar associação entre registros sem fazer a tela saltar.

## Observações concretas das telas atuais

- E2: a cena ocupa o maior espaço e favorece a orientação; o plano fica logo abaixo, enquanto a instrução “Descubra o caminho” aparece entre plano e controles. Testar se ela orienta melhor junto ao título do plano.
- E3: “10 cm” aparece no desenho, em um cartão abaixo e junto à barra. Essa repetição pode apoiar a correspondência, mas também ocupar espaço sem acrescentar significado. O botão principal ainda é roxo; a padronização futura deve considerar o laranja aprovado.
- E4: o plano tem forte prioridade visual e há um único botão laranja. P é pequeno e roxo, semelhante aos elementos estruturais; estudar um contorno de contraste ou pulso inicial discreto para tornar o alvo de toque mais evidente, preservando a notação P/P'.
- E5: na volta, a área da máquina encolhe para acomodar controles e tabela; os textos das estações ficam pequenos mesmo na tela de computador. Após o acerto, Experimentar e Continuar permanecem ambos laranjas. Priorizar um deles por estado e recuperar espaço para os números são intervenções a discutir antes de mudar cores.

## Questões transversais prioritárias

1. **Dois avanços concorrentes:** o integrado tem Continuar global e Continuar interno. Proposta: manter Etapas como navegação secundária e um único avanço principal por momento. Alternativa: avanço global disponível apenas ao concluir o módulo. Discutir liberdade do estudante e risco de salto acidental.
2. **Celular e texto legível:** o integrado acrescenta cabeçalho aos pilotos de altura mínima própria. Há risco de rolagem e de compressão do gráfico. Não resolver reduzindo tudo. Proposta: distribuir em momentos curtos, mantendo a pergunta e ação necessárias. Validar em 320×568 e 390×844, inclusive com teclado aberto e ampliação de texto; a meta sem rolagem não deve impedir acesso a conteúdo ampliado.
3. **Concorrência de animações:** usar movimento para a transformação atual; após o acerto, comemoração visual e sonora breve, com opção de silêncio e respeito a movimento reduzido. O resultado deve permanecer disponível depois da comemoração. Discutir se o pulso de Continuar ainda é necessário enquanto a celebração ocorre.
4. **Leitura apoiada:** textos curtos devem dizer o objeto e a ação, e estar próximos deles. Imagem e texto têm de se confirmar. A mediação pode pedir: “Qual parte do registro mostra o que você observou?”. Não transformar tudo em instrução oral; não introduzir gravação nesta rodada.
5. **Papel do verde:** testar chegada, correspondência e etapa concluída. Não usar simultaneamente para botão principal, seleção provisória e acerto: esses estados têm significados diferentes.

## Roteiro para seu estudo fora do chat

Para cada etapa, registre: (a) o que o estudante precisa perceber; (b) o que provavelmente chamará atenção primeiro; (c) o elemento que compete com isso; (d) sua alternativa; (e) como observar se a alternativa ajudou. Na versão HTML há espaços para essas anotações, sem envio ou salvamento automático; imprima em PDF antes de fechar se quiser conservar o preenchimento.

Critério para discussão: um estudante consegue indicar onde agir, acompanhar a transformação e localizar o registro que justifica sua conclusão? A beleza da tela, sozinha, não responde a isso.

## Próximas decisões — ainda abertas

- Aprovar ou ajustar papéis das cores antes de aplicar a paleta a todas as telas.
- Selecionar uma alternativa de navegação e uma tela de comparação por etapa.
- Avaliar a nova E5 com entradas decimais e verificar se o desafio apoia a composição ou desloca demais a atenção para aritmética. Se necessário, oferecer exemplos iniciais como 3 → 5 → 1, seguidos de 1 → 3 → 0,6, sem restringir a descoberta a inteiros.
- Testar com estudantes: pedir que apontem o que estão acompanhando e expliquem um registro; não inferir compreensão apenas do acerto.
- E6 mantém pendências anteriores: detalhes da máquina de fitas e retirada da opção oral não gravada. E7/E8 seguem adiadas.
