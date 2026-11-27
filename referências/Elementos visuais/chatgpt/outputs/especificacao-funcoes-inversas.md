# Funções inversas — especificação de planejamento

Versão documental 0.34 · código 0.33 · 26/11/2026 · Estado: discussão didática; aplicativo completo não implementado.

## Orientação atual — conciliação com Claude · 26/11/2026

D: o projeto será continuado com Claude e Codex, tendo GitHub como base compartilhada. Novas decisões de abertura, etapas e layout feitas com Claude ainda não foram recebidas aqui. Antes de executar o plano antigo, comparar versões com o professor. Ver [TRANSICAO-CLAUDE.md](TRANSICAO-CLAUDE.md) para consolidação atual e [PLANO-EXECUCAO-COMPARTILHADO.md](PLANO-EXECUCAO-COMPARTILHADO.md) para proposta de execução. Repositório e visibilidade pendentes; nenhum upload/publicação. Nesta versão só documentação, organização de testes e recuperação; aplicação permanece v0.33.

Os itens abaixo preservam histórico: regras posteriores explícitas prevalecem. E5 vigente é (x+2)/5; E3 permanece x/2+3; E7/E8 adiadas. A antiga continuidade foi arquivada e substituída por orientação vigente.

## Estado vigente — 24/11/2026

Esta atualização prevalece sobre regras históricas abaixo: **E7/E8 adiadas**; foco na consistência E2–E5. **E3: f(x)=x/2+3. E5: f(x)=(x+2)/5**, soma 2 e divide por 5; inversa 5y−2. Retomada da composição em E6 acompanha a nova E5. A faixa positiva até 12 é recorte da interface, não restrição intrínseca da função afim.

**D:** estudar identidade e hierarquia com o Labirinto Plano do proponente; considerar verde. **P:** papéis das cores, escala tipográfica, foco por estado e alternativas de layout documentados em [mapa-atencao-E2-E5.md](mapa-atencao-E2-E5.md). Não são decisões já aprovadas de redesenho. A identidade global não foi alterada nesta rodada. **A:** escolher alternativas e testar legibilidade/atenção com estudantes. Sem cadastro, login, envio ou publicação. E6 conserva pendências registradas.

## 1. Escopo e estatuto das decisões

Fonte do projeto: conversa “Propor atividades interativas”, recuperada integralmente quanto ao pedido de revisão do laboratório, e solicitação atual. Este documento distingue **D — determinação do proponente**, **P — proposta provisória de projeto** e **A — questão aberta**. Uma opção presente no protótipo não equivale à sua aprovação para o aplicativo.

**D:** oito páginas E1–E8; jogo Inversão; máquinas algébricas; laboratório gráfico; composição; três páginas de diário. E4 terá preparação geométrica A, investigação B e construção por rastro; notação P'; duas experiências geométricas; conjectura correta dispara a passagem à construção. Planejar e discutir antes de implementar o aplicativo completo.

**D:** prioridade a estudantes que acessam pelo celular, com compatibilidade com computador; hospedagem futura na conta GitHub do proponente. O proponente relata dificuldades com variáveis e símbolos entre seus estudantes do Ensino Médio.

**P:** trabalho em duplas com discussão coletiva; 3 encontros de 50 minutos, ajustáveis após diagnóstico. Pré-requisitos: pares ordenados, leitura de gráficos, operações inversas e conceito de função. O diagnóstico deve verificar esses conhecimentos sem excluir estudantes do percurso.

**A:** turma específica, tempo disponível, modelos de dispositivos, conectividade, conhecimentos prévios, formas de avaliação e necessidades de acesso. Conta e repositório GitHub exatos, configuração de publicação, contas de estudantes e biblioteca gráfica ainda serão definidos. A hospedagem na conta GitHub está decidida; nenhuma publicação foi solicitada nesta etapa.

## 2. Estrutura das oito páginas

As páginas organizam a experiência, mas não correspondem a etapas rígidas do pensamento investigativo. Deve ser possível voltar, revisar conjecturas e confrontar registros.

| Página | Objetivo e experiência proposta | Evidência e mediação | Avanço e estatuto |
|---|---|---|---|
| **E1 — Apresentação** | Conectar visualmente “fazer/desfazer”. Prever se é possível recuperar uma figura após deslocá-la, girá-la ou apagar parte dela. Apresentar propósito, percurso e recursos de acesso. | Registrar uma previsão inicial. Professor pergunta “quais informações foram preservadas?”. Não apresentar a regra da inversa. | Continuação livre após contato com o desafio; estrutura D, exemplos P. |
| **E2 — Inversão** | Jogo evolutivo de desfazer processos. Direção preferida: travessia de rio por pedras; tranca 3D com pino e canais preservada como alternativa futura. Programar a ida e construir a volta, invertendo ações e sua ordem quando as condições do percurso exigirem. | Comparar tentativas; explicar por que desfazer exige inverter a ordem. Evitar que sucesso por tentativa substitua explicação. | Rio como direção preferida pelo proponente, acolhendo as sugestões de percurso e feedback; detalhes ainda em planejamento. Mediação e evidências preservadas. Sem cronômetro ou perda de vidas. Ver seção 2.1. |
| **E3 — Invertendo com Álgebra** | Máquina proposta pelo proponente: dividir por 2 e somar 3, com registro algébrico. Reconstruir a entrada por subtrair 3 e multiplicar por 2; suporte escolhido: comprimento de uma fita. Ver seção 2.3. | Articular objetos/números, estados intermediários, tabela e expressão; contrastar 2(y−3) com 2y−3. A perda de sinal em x² permanece possibilidade posterior, não parte definida do primeiro piloto E3. | Sistematização provisória pelo estudante, revisável; detalhamento P. |
| **E4 — Laboratório** | A: apresentar o simétrico em duas experiências participativas. B: explorar, responder um caso numérico e depois formular a conjectura simbólica. Depois construir a relação inversa pelo rastro de P' e discutir se é função. | Participação na apresentação; passagem do numérico ao simbólico; exemplos e contraexemplos. Comparar parábola completa e domínio restrito. | Conjectura correta em B libera automaticamente a construção (D); não equivale a atestar compreensão. |
| **E5 — Composição e inversa** | Percorrer x → f(x) → g(f(x)); testar também y → g(y) → f(g(y)). Comparar uma candidata correta com uma quase correta. | Explicar por que as duas composições são identidades nos conjuntos adequados; distinguir identidade de função constante. | Registro das duas composições e dos domínios; detalhamento P. |
| **E6 — Diário: reconstruir** | Retomar E2–E3: “como você desfaz duas operações?”, “qual tentativa mudou seu raciocínio?”. Selecionar uma evidência. | Relato inicial → revisão → motivo, em texto, esquema ou explicação oral mediada. | Sem validação binária de reflexão; possível integração da animação explicativa já produzida pelo proponente. Distribuição do diário P. |
| **E7 — Diário: justificar** | Retomar E4–E5: explicar troca de coordenadas, apresentar um caso sem inversa global e reparar o domínio. | Articular gráfico, álgebra e composição; criticar “todo reflexo é função”. | Professor devolve pergunta ou contraponto; distribuição P. |
| **E8 — Diário: transferir e avaliar** | Resolver caso novo, por exemplo f(x)=3−2x; comparar com previsão de E1. Autoavaliar confiança com evidência e elaborar uma pergunta ainda aberta. | Diferenciar relato de satisfação, acerto e justificação. Planejar retomada do que não se consolidou. | Encerramento com síntese coletiva; distribuição P. |

Sugestão de tempo, não requisito: encontro 1 E1–E3; encontro 2 E4; encontro 3 E5–E8. A investigação não deve ser interrompida apenas para cumprir essa divisão.

## 2.1. E2 — Jogo Inversão: concepção evolutiva

Atualização de planejamento: 22/11/2026. **Piloto local implementado; aplicativo completo não implementado.** O proponente confirmou os canais da tranca e declarou preferência pelo rio, acolhendo as sugestões apresentadas. O rio passa a ser a direção de planejamento de E2; isso não autoriza ainda implementar o jogo nem torna seus detalhes definitivos. E4 não foi alterado nesta atualização.

### Intenção compartilhada de E2 e E3 — decisão do proponente

E2 e E3 trabalham com objetos de naturezas distintas, mas cumprem o papel comum de permitir desfazer um processo e perceber a inversão da ordem das ações. A mediação e a produção de evidências já previstas permanecem: comparar tentativas, explicar a revisão da sequência e relacionar experiência, tabela e expressão quando pertinente. Não antecipar a regra como instrução de jogo antes de o estudante experimentar.

**Precisão necessária:** inverter as ações e sua ordem é um procedimento geral para desfazer uma composição de operações invertíveis. Isso não significa que toda composição só possa ser desfeita nessa ordem: algumas operações comutam. Em E2, as restrições visíveis do percurso podem tornar a ordem necessária; em E3, operações como multiplicar por 2 e somar 3 tornam sua relevância algébrica explícita. Distinguir voltar à posição inicial de percorrer os mesmos estados em ordem inversa.

### Alternativa R — Rio, pedras e tesouro

**Proposta do proponente:** personagem na margem; pedras dispostas para três saltos à direita e cinco para cima até a outra margem, onde recolhe o tesouro. Quatro controles direcionais; selecionar uma direção abre escolha da quantidade, adicionada à barra de comandos. O botão “Ir” executa a sequência. A volta é planejada pelo estudante.

**Formalização provisória para conferir a mecânica:** início (0,0), curva (3,0), chegada (3,5). Percurso formado por (0,0), (1,0), (2,0), (3,0), (3,1), …, (3,5). Os extremos representam as margens; as posições intermediárias são apoios. Quantidade representa saltos unitários sucessivos, não um salto longo que ignora apoios. As direções são relativas à tela, mesmo que o personagem mude de orientação visual ao voltar.

- Ida: direita 3 → cima 5.
- Volta pelo caminho: baixo 5 → esquerda 3.
- Contraste: esquerda 3 → baixo 5 também devolve à origem em um plano livre, mas começa tentando alcançar (2,5), onde não há apoio neste percurso.

**Direção acolhida pelo proponente:** tornar a falta de apoio visível e parar antes do salto impossível. A devolutiva convida a rever o plano, sem queda punitiva, perda de vida ou revelação automática da sequência completa. O personagem permanece no último apoio válido; “Refazer o plano” pode recolocá-lo no início da viagem atual, preservando o registro da tentativa. Essa política de retomada precisa ser definida antes de implementar.

A ordem deverá ser exigida pela geometria do percurso, não por comparação secreta com uma lista de comandos considerada correta. Aceitar sequências equivalentes, por exemplo baixo 2 → baixo 3 → esquerda 3. Caminhos com desvios válidos, quantidades nulas e comandos redundantes requerem política explícita; não confundir “voltar” com “usar a menor quantidade de comandos”. O tesouro acompanha o personagem na volta: desfazer o percurso não desfaz toda a história do jogo.

### Alternativa T — Tranca com pino em 3D

**Proposta do proponente:** pino central com trava perpendicular; inserir e travar com a sequência: girar 60° à direita → descer 3 níveis → girar 80° à esquerda → descer 2 níveis → girar 120° à esquerda. O estudante recebe o registro da inserção e deve planejar o destravamento.

A inversão literal da sequência é: **girar 120° à direita → subir 2 níveis → girar 80° à direita → subir 3 níveis → girar 60° à esquerda**.

**Condição confirmada pelo proponente:** a tranca tem canais que obrigam o pino a seguir a mesma sequência. Portanto, a restrição do percurso faz parte da proposta original. A observação matemática permanece como justificativa do papel dos canais: se o pino apenas gira em torno do próprio eixo e se desloca ao longo desse mesmo eixo, sem restrições, giro e deslocamento axial comutam. A mera presença de cinco comandos ou de um desenho 3D não torna necessária sua inversão ordenada. Para exigir esse percurso, a tranca precisa de guias, canais, batentes ou aberturas que permitam determinadas ações apenas em certas alturas e orientações. A existência dos canais foi confirmada; sua geometria e apresentação visual ainda não foram detalhadas.

**P para uma futura tranca:** caminho guiado em coordenadas altura/ângulo, mostrado por um corpo transparente ou corte do mecanismo. Definir sentido horário/anti-horário visto de uma referência fixa; mover a câmera não muda o significado do comando. Definir também se a trava distingue orientações separadas por 180°, limites de giro e liberdade para voltas completas. Sem essas condições, poderão existir caminhos de destravamento diferentes do registrado e igualmente válidos.

A dificuldade relevante deve ser escolher a sequência, e não adivinhar partes ocultas do mecanismo ou interpretar uma câmera ambígua. Controles discretos de ângulo e altura oferecem alternativa ao arraste 3D. Uma visualização 2D do canal pode ser apoio futuro, caso a alternativa seja adotada.

### Avaliação comparativa — julgamento de projeto, não resultado empírico

| Critério | Rio com apoios definidos | Tranca com canais definidos |
|---|---|---|
| Inversão das ações e da ordem | Evidente na volta pelo caminho em L | Evidente ao percorrer o canal de volta |
| Onde a ordem se torna necessária | Existência dos apoios intermediários | Permissões geométricas por altura e orientação |
| Leitura inicial no celular | Menos elementos e direções visíveis no plano | Exige representação clara de profundidade, ângulo e partes ocultas |
| Quantidade inicial de decisões | Dois blocos de comandos; permite ampliar gradualmente | Cinco blocos e duas grandezas desde o exemplo inicial |
| Expansão futura | Mais curvas, fases, percursos e editor de desafios | Novos canais, combinações de giros e alturas, mecanismos |
| Esforço esperado de produção e validação | Menor para uma primeira versão | Maior por geometria, câmera, movimentos permitidos e acesso alternativo |

**Direção de planejamento após retorno do proponente:** começar pelo rio. O proponente acolheu as sugestões e compartilhou o receio de que a tranca não funcione visualmente com clareza. Preservar a tranca com canais como alternativa documentada ou expansão futura; não a descartar nem considerá-la inferior em potencial didático. A preferência pelo rio orienta o próximo detalhamento, sem converter todos os detalhes propostos em regras fechadas. O sucesso de aprendizagem depende de pilotagem e das evidências produzidas, não pode ser garantido por esta comparação.

### Mediação e evidências — continuidade do planejamento existente

Antes de executar a volta, registrar a sequência montada pelo estudante. Durante a execução, destacar o comando ativo e a posição correspondente. Depois, comparar planejamento, trajetória e revisão.

Perguntas propostas, apresentadas uma por vez conforme a necessidade: “Qual foi a última ação para chegar?”, “O que acontece se você começar desfazendo a primeira?”, “O que precisou mudar no seu plano?”, “Como você orientaria alguém a fazer a volta?”. Não exigir que todas sejam respondidas em toda tentativa.

Evidências propostas: plano inicial de ida/volta; primeiro ponto de impedimento, se houver; plano revisado; explicação breve por texto, fala mediada ou organização de cartões. Distinguir: inverter apenas sentidos, inverter apenas ordem, inverter ambos, repetir uma sequência conhecida e transferir a ideia para percurso novo. Um acerto isolado não identifica sozinho qual estratégia foi utilizada.

Ponte com E3: recuperar a experiência como questão, “o que corresponde a desfazer a última ação na máquina?”. Na máquina ×2 → +3, a volta −3 → ÷2 restitui todas as entradas. Por exemplo, 4→8→11 e 11→8→4; a ordem ÷2→−3 produz 2,5, evidenciando outra transformação.

### E2 como jogo que poderá ser retomado e desenvolvido

**D:** documentar e preservar o jogo para desenvolvimento futuro, inclusive além deste aplicativo. O proponente planeja mecânicas e objetivos em linguagem comum; não precisa aprender programação.

**P de organização:** separar regras e estados, descrição das fases, apresentação visual, comandos e integração didática. O jogo deve poder funcionar isoladamente e dentro de E2; alterações de aparência não devem modificar silenciosamente a regra matemática. O código futuro ficará versionado no repositório do proponente, com instruções de execução e documentação suficiente para continuidade por outro desenvolvedor.

Registrar eventos significativos, não cada quadro: comando adicionado/editado, plano submetido, movimento executado, movimento impedido com seu motivo, tesouro recolhido, retorno concluído e plano revisto. Esses eventos devem fornecer evidências à atividade sem exigir conta ou coleta remota na primeira versão. Arquitetura e persistência finais ainda abertas.

Ciclos propostos: (1) acordar mecânica e evidências; (2) testar uma fase jogável simples; (3) validar celular, teclado, feedback e matemática; (4) integrar a E2; (5) ampliar fases e recursos em versões posteriores. A tranca fica registrada para comparação futura, sem compromisso de implementação imediata.

**Base para detalhar o rio:** caminho em L com apoios intermediários, saltos unitários, setas relativas à tela, barra de direção/quantidade e execução por “Ir”; volta planejada pelo estudante; parada antes de salto sem apoio e convite à revisão, sem punição. Essa base reúne a proposta original e as sugestões acolhidas, mantendo abertura para o detalhamento.

**D — autoria do planejamento de ida e volta:** o estudante observa o cenário, descobre o percurso e monta os comandos das duas viagens. Não recebe a sequência de ida pronta nem a de volta. Os números 3 à direita e 5 para cima definem a fase planejada pelo proponente, mas não são apresentados como instrução a copiar. O registro da ida executada permanece disponível para apoiar a investigação da volta; o aplicativo não gera automaticamente o programa inverso.

**Mediação:** apresentar o funcionamento dos controles sem fornecer a solução do percurso. Ajudas devem favorecer observação e revisão das escolhas. Preservar como evidências os planos de ida e volta, sua execução e as revisões significativas. Não exigir explicação verbal antes de permitir experimentar.

**D — edição dos comandos aprovada:** antes de pressionar “Ir”, cada comando da barra poderá ser tocado para alterar a quantidade, trocar a direção ou excluir. A mesma edição deverá ser possível pelo teclado.

**Ainda a detalhar:** apresentação da escolha de quantidades e do editor de comandos, retomada após movimento sem apoio e fechamento reflexivo. Não é necessário escolher biblioteca de programação nesta etapa.

## 2.2. Referências de identidade visual para E2 e o aplicativo

**Referências fornecidas pelo proponente:** [Descubra com o Gráfico](https://0asilva.github.io/descubra-com-o-grafico/) e [Labirinto Plano](https://0asilva.github.io/labirinto-plano/). Inspeção em 22/11/2026 das páginas publicadas, capturas de tela e estilos presentes no documento carregado. Não foi necessária uma cópia do repositório para identificar a base visual. Nenhum dos aplicativos de referência foi modificado.

### Características observadas

| Elemento | Descubra com o Gráfico | Labirinto Plano |
|---|---|---|
| Fundo creme | #FFFDF5 | #FFFDF5 |
| Fundo de apoio lavanda | #F4EEFF | #F4EEFF |
| Texto principal | #241436 | #241436 |
| Texto secundário | #6B5B7D | #6B5B7D |
| Laranja de destaque | #FF6633 | #FF6633 |
| Bordas claras | #E0D6EE | #E0D6EE |
| Roxo principal | #473366 | #4B0082; cabeçalho também usa #3B1163 |
| Amarelo do gráfico/tabuleiro | #FAD400 | #FFD700 |
| Tipografia | system-ui, -apple-system, Segoe UI, Roboto, sans-serif | Mesma família |

São comuns cabeçalhos roxos, etapas numeradas, superfícies arredondadas, controles com texto e ícones e área visual central. Os estilos consultados apresentam raios próximos de 10–14 px e botões com alturas mínimas de 44 px em Descubra e 58 px no conjunto principal de ações do Labirinto. A abertura de Descubra usa uma animação com personagem no gráfico; isso não significa que animações ou personagens já tenham sido extraídos para reutilização.

### Aplicação ao rio — base visual incorporada ao piloto

- Usar a organização de jogo do Labirinto como referência mais próxima: cenário central, barra do plano e ações visíveis; compartilhar a paleta e a tipografia dos dois aplicativos.
- Cabeçalho compacto roxo; fundo creme; comandos editáveis em superfície lavanda; “Ir” com destaque laranja. Definir a tonalidade principal do roxo ao diagramar, pois as duas referências diferem.
- Incorporar o amarelo nos apoios, margens ou tesouro conforme a composição. Água e personagem precisam ter distinção suficiente dos apoios; a identidade não obriga preencher o rio inteiro de amarelo. A paleta adicional do cenário permanece proposta a definir.
- Preservar o requisito atual de momentos compactos sem rolagem na apresentação usual do celular. Os aplicativos existentes servem como referências visuais, não como comprovação desse requisito: Labirinto possui seções empilhadas e Descubra permite rolagem interna nas telas.
- Manter as regras próprias deste projeto: impedir salto sem apoio e acolher a revisão. Labirinto informa que o quadrado pode atravessar paredes; essa regra não será transferida ao rio. Seus estilos de aviso vermelho também não substituem o feedback acolhedor já acordado.
- Login, envio ao professor, placares e selos presentes nas referências não são requisitos automaticamente incorporados ao novo aplicativo.

**Limites da inspeção:** identidade identificada por páginas e estilos publicados; não realizada auditoria completa de acessibilidade, contraste ou comportamento em dispositivos. A adequação móvel e os contrastes da nova composição deverão ser testados no protótipo. Para esta fase, os links bastam; repositórios e recursos originais só serão necessários se a implementação exigir reutilização específica.

## 2.3. E3 — Máquina e registro algébrico: propostas antes do piloto

**Pedido atual:** sugerir objeto/situação para uma máquina que divide a entrada em duas partes e acrescenta três objetos, priorizando o registro algébrico. Investigar a referência Working Backwards. Nenhum piloto de E3 autorizado ou construído nesta atualização. A proposta atual de ÷2 → +3 substitui, como foco do planejamento, o exemplo provisório anterior ×2 → +3; não são a mesma máquina.

### Referência examinada

[Working Backwards — Amplify Classroom / Desmos](https://classroom.amplify.com/activity/6835ca2906c057e7a4280112), indicada pelo proponente. Inspeção direta na aba aberta de seu Chrome em 22/11/2026, somente na prévia. Não houve atribuição de turma, cópia/edição da atividade ou envio de respostas.

Observados o panorama das 11 telas e as prévias detalhadas 1–5:

1. Máquina numérica em esteira, com duas estações rotuladas ×2 e +3, expressão composta e tabela com colunas x, 2x, 2x+3. Há campo de entrada e botão para experimentar. A animação após entrada não foi executada nesta inspeção.
2. Saída conhecida e busca da entrada, com a mesma máquina/tabela como apoio.
3. Ligação com a equação 2x+3=13 e pedido de explicação da solução por verificação.
4. Ampliação para uma máquina de três operações, associada a (6x−3)/2=3.
5. Comparação entre percorrer a tabela de trás para frente e aplicar operações aos dois membros de uma equação. A imagem mostra o cabeçalho 6x−3; a descrição acessível apresentou uma inconsistência nessa coluna, portanto a anotação foi conferida visualmente.

O panorama posterior inclui crítica de solução, novos desafios, síntese e reflexão; não foram examinados em profundidade os mecanismos dessas telas. A referência se concentra em resolver equações; nosso E3 deve aproveitar a ligação máquina–estados–expressão para também preparar a compreensão de uma transformação inversa geral. Inspirar-se na organização, sem copiar imagens ou código.

### Cuidado com o significado de “dividir em duas partes”

Separar n objetos em dois grupos não altera o total n. Para representar n/2 na saída, mostrar dois grupos iguais e deixar explícito que apenas um segue pela linha de produção; o outro vai para uma bandeja lateral. Se objetos forem indivisíveis, começar com entradas pares. Não arredondar a metade de uma quantidade ímpar sem explicitar uma mudança de regra.

A inversão reconstrói a quantidade inicial a partir da quantidade final e da regra. Não exige recuperar a identidade física dos mesmos objetos. A quantidade guardada na bandeja lateral não deve ser necessária como uma segunda informação secreta para descobrir a entrada.

### Objetos/situações considerados — propostas, não decisões

| Opção | Funcionamento | Potencial e cuidado |
|---|---|---|
| Fichas em uma máquina de preparar kits — recomendação inicial | Dividir uma coleção em dois grupos iguais; um segue, recebe 3 fichas e sai como kit. O outro fica numa bandeja lateral. | Contagem clara e correspondência visual com ÷2 e +3. Começar com pares; explicitar qual quantidade é a saída. Evitar que uma história extensa concorra com o registro algébrico. |
| Fita graduada | Reduzir o comprimento à metade e acrescentar um trecho de 3 unidades. | Permite representar metades de medidas ímpares; exige leitura de comprimento e unidade, em vez de contagem de objetos. |
| Cartão com número, como na referência | Um cartão atravessa as duas estações e seu valor é atualizado. | Mais compacto e permite números não inteiros; precisa de apoio visual para que as operações não sejam apenas instruções simbólicas. Pode suceder a experiência com fichas dentro da mesma máquina. |

**Decisão posterior do proponente:** utilizar o comprimento de uma fita. A recomendação inicial de fichas não foi adotada. Manter as mesmas duas estações e articular comprimento, número e expressão algébrica. As considerações sobre fichas acima ficam como histórico da comparação, não como requisitos do piloto.

### Suporte escolhido — comprimento da fita

**D:** o proponente escolheu “Comprimento da fita”. A variável representa uma medida de comprimento, não a quantidade de pedaços. A primeira estação reduz o comprimento à metade; a segunda acrescenta um trecho de comprimento 3 na mesma unidade. O proponente escolheu a representação por corte: dividir a fita em duas partes iguais, encaminhar uma metade e manter a outra visível em uma bandeja lateral.

**D — mecanismo:** corte em duas metades iguais; uma segue para a estação de acréscimo e a outra permanece visível, separada da saída medida. **P de representação:** fita graduada e régua fixa, com escala constante durante a transformação. A câmera não deve simular a redução do comprimento por mudança de escala. O acréscimo é um segmento de comprimento fixo, não “três pedaços” de tamanho indefinido. Cor, contorno e indicação de medida devem permitir distinguir o trecho acrescentado sem depender só da cor.

### Progressão proposta, dentro da página pedagógica E3

Cada momento ocupa uma tela compacta no celular. O suporte material escolhido está definido; os momentos e controles abaixo continuam propostas, sem piloto implementado.

1. **Experimentar:** por exemplo, fita de 10 unidades → 5 unidades → 8 unidades. Relacionar cada estação a verbo e símbolo: metade / ÷2; acrescentar 3 unidades / +3. Prever e testar outros comprimentos, incluindo um ímpar, como 7 → 3,5 → 6,5.
2. **Registrar os estados:** ligar 10, 5 e 8 às posições de entrada, intermediária e saída. Construir a expressão 10/2+3 a partir das ações, em vez de apenas exibi-la pronta.
3. **Reconstruir a entrada:** mostrar uma fita final de 8 unidades; o estudante escolhe como desfazer o processo. Retirar 3 e dobrar o comprimento restante produz 8 → 5 → 10. Isso reconstrói o comprimento inicial, não necessariamente o mesmo objeto físico.
4. **Usar uma incógnita:** n/2+3=8; obter n/2=5 e n=10. Explicitar as operações nos dois membros quando trabalhar a equação e conferir pela máquina.
5. **Generalizar:** corresponder n, n/2 e n/2+3 às mesmas posições; nomear y como medida de saída e construir n=2(y−3). Distinguir entrada desconhecida de um caso particular e entrada variável da regra geral.
6. **Confrontar uma ordem alternativa:** para y=8, a regra 2(y−3) retorna 10; 2y−3 produz 13, que na máquina resulta em 9,5. Ambos os comprimentos são possíveis no contexto da fita, permitindo que o resultado mostre a diferença entre as sequências.

**Domínio e unidade:** comprimentos físicos são positivos; nessa escolha, n>0 e y>3. O caso n=0, representado por ausência de comprimento, pode ser incluído explicitamente se for didaticamente útil, levando a n≥0 e y≥3. O intervalo disponível no controle não deve ser confundido com o domínio matemático. O proponente confirmou centímetros, sem tamanho físico real na tela. O desenho deve preservar proporções e uma escala consistente na cena; não requer calibração por aparelho. A graduação informa medidas em cm, não o comprimento em pixels. n e y são valores numéricos medidos na mesma unidade; o termo +3 significa acrescentar 3 dessa unidade. Números negativos só entram numa eventual ampliação para máquina numérica abstrata, não como comprimento de fita.

**Leitura e cores:** manter a orientação do proponente: ação, medida, cor e marcação graduada apoiam a leitura e a construção do registro. Uma família de cor pode identificar ÷2/×2 e outra +3/−3, sempre com símbolos e texto. Os sinais + e − não representam acerto/erro. A representação deve favorecer a compreensão da ordem sem selecionar automaticamente as operações inversas pelo estudante.

**P — faixa inicial:** entradas inteiras de 2 a 12 cm, com metades que podem terminar em 0,5 cm; proposta apresentada pelo assistente, sem tratar a confirmação explícita da unidade como definição inequívoca da faixa.

**Próximos pontos a definir:** faixa de comprimentos; detalhamento dos cartões, alternativas e campos de preenchimento; momento de substituir a fita por representação numérica e simbólica. Não há autorização para implementar o piloto nesta escolha do suporte. Sem login ou coleta de dados nesta fase.

## 3. E4: especificação de interação e geometria

### A — Apresentação participativa do simétrico — funcionalidade definida

**D, esclarecida pelo proponente:** esta experimentação apresenta o ponto simétrico a um estudante que nunca teve contato com o conceito. Marcar o ponto é uma ação participativa que articula visualização e toque; não é teste de previsão, reconhecimento ou precisão motora. As duas experiências e a animação descrita abaixo estão funcionalmente definidas; os ajustes posteriores desta parte serão de diagramação, não reabertura de sua finalidade ou funcionamento.

1. Mostrar P fora de y=x. Toque em P inicia a animação; um botão equivalente atende teclado e outros modos de acesso.
2. Apresentar o segmento pontilhado OP. O é o pé da perpendicular, mas seu ponto e seu nome não aparecem.
3. Mostrar uma cópia de OP e **transladá-la, mantendo sua orientação**, até coincidir com OP'. Não desenhar um segmento de destino separado.
4. O ponto médio da cópia percorre o semicírculo definido abaixo, mas não aparecem ponto médio, arco, rastro ou qualquer auxiliar O, A, B ou B'.
5. Solicitar “Marque o simétrico”. Um toque no plano revela P' na posição exata, com o rótulo “simétrico”, sem avaliar onde se tocou. O botão “Marcar o simétrico” oferece a ação equivalente pelo teclado.
6. Recomeçar com P aleatório distinto, fora da diagonal. Após a segunda experiência, abrir B. A marcação recebe confirmação de participação, não pontuação ou julgamento de acerto.

#### Modelo geométrico da translação — apenas para implementação

Sejam P=(a,b), P'=(b,a), O=(P+P')/2, v=P−O, A=O+v/2 e B=O−v/2. Para 0≤θ≤π, definir B'(θ)=O+Rθ(v/2), que percorre o semicírculo de A a B. O vetor de translação é Δ(θ)=B'(θ)−A. Os extremos da cópia são **O+Δ(θ)** e **P+Δ(θ)**.

Seu vetor diretor permanece v, constante. Seu ponto médio é B'(θ). No início, Δ=0; no final, Δ=−v, levando O a P' e P a O. Portanto, a cópia coincide com OP' sem girar. A matriz Rθ parametriza somente o caminho do ponto médio oculto; não gira o segmento. Nenhum desses auxiliares é desenhado. Esta definição substitui a rotação incorretamente adotada na versão 0.1; não é necessário um arquivo GeoGebra para executar a correção.

P em y=x implica P'=P e segmento de comprimento zero. O caso pode ser explorado livremente em B; não é usado nas duas apresentações iniciais. Não atribuir perpendicularidade a um segmento nulo.

### B — Do numérico ao simbólico

**D:** depois da exploração livre, apresentar primeiro um caso numérico, por exemplo P=(2,−1), com alternativas visíveis em botões; o estudante responde sem tocar no plano. Ao selecionar (−1,2), celebrar e passar à pergunta com P=(a,b). Ao selecionar (b,a), celebrar e passar automaticamente à construção do gráfico.

O proponente justifica essa passagem intermediária pela dificuldade de muitos estudantes do Ensino Médio em representar ideias por variáveis e símbolos. A justificativa escrita obrigatória foi retirada deste fluxo; a explicação geral poderá ser retomada em E6.

**D — retomada a partir da escolha diferente:**

- No caso numérico, iniciar automaticamente a mesma animação de translação, com o ponto numérico da pergunta. Ao terminar, convidar à marcação participativa no plano e revelar o simétrico exato. Retornar à mesma pergunta para nova escolha.
- No caso simbólico, fazer o mesmo automaticamente, mas sem malha, marcas ou números nos eixos. Manter os nomes dos eixos e y=x; identificar os pontos por (a,b) e, após a marcação, (b,a). A posição geométrica é ilustrativa e não fixa os valores ou sinais das letras.
- A marcação não resolve automaticamente a pergunta: a nova escolha correta aciona a celebração e o avanço. Tentativas ilimitadas, sem perda de pontos, vidas ou mensagem de reprovação.

### Padrão transversal de resposta e feedback

**D:** opções de resposta nunca em lista de seleção recolhida. Usar botões, ícones acompanhados de rótulos ou listas de marcação visíveis; o formato pode variar por momento para favorecer o acesso pelo celular. No protótipo, todas as escolhas, inclusive função e julgamento sobre a inversa, são botões.

**D:** todos os acertos recebem a mesma linguagem de comemoração; escolhas diferentes recebem estímulo visual à retomada, valorizando o erro como parte da aprendizagem. Não tratar participação como acerto avaliado.

**P implementada para apreciação — “descoberta”:** confirmação breve com ✓, pequeno pulso e quatro partículas discretas que se afastam e desaparecem; sem mascote, sons ou reprodução da animação da Khan Academy. A mensagem varia com a conquista, mas o movimento é comum a todos os acertos. A celebração dura cerca de 1,1 s antes da passagem automática; a versão com redução de movimento usa confirmação estática. A retomada usa um pulso suave com “Vamos experimentar de outro jeito”, seguido do apoio geométrico. A estética e a duração são ajustáveis.

### Construir o gráfico, ainda dentro de E4

P percorre f; P'=(f(x),x) deixa um rastro. Oferecer movimento manual, varredura com pausa, limpar rastro, projeções e revelação opcional da relação completa. Começar com f(x)=0,75x+1; comparar x²/4 em R e em [0,+∞), além de x³/25. O intervalo visível não altera silenciosamente o domínio matemático.

Antes de nomear o rastro como função inversa, perguntar se uma mesma abscissa pode ter duas ordenadas. Contraexemplo: f(−2)=f(2)=1 produz (1,−2) e (1,2). Explorar uma reta horizontal no original e sua correspondente vertical no refletido. Para a restrição positiva, explicitar f:[0,+∞)→[0,+∞) e f⁻¹(x)=2√x.

O protótipo oferece os quatro casos, rastro, varredura, curva completa, projeções e julgamento com feedback; a manipulação de uma reta de teste é requisito futuro, não implementado nesta versão.

## 4. Fundamentos didático-pedagógicos

A referência a Ponte orienta a formulação de questões, produção e revisão de conjecturas, testes, justificação e comunicação. Aqui esses movimentos são retomados ao longo de várias páginas, não convertidos em uma escada obrigatória. O artigo de Ponte (2006) sustenta a discussão sobre tarefas exploratórias e investigativas; os procedimentos específicos deste projeto são nossa adaptação [R1].

A é uma apresentação participativa guiada, com finalidade explicitada pelo proponente, e não uma avaliação de reconhecimento ou previsão. A liberdade investigativa cresce na exploração em B e nos contraexemplos. A sequência numérico → simbólico apoia a passagem de representação. O acerto nas opções não substitui uma demonstração geral; a explicação e a discussão serão articuladas ao diário, sem impor uma justificativa como barreira adicional em E4.

Evidência visual finita não prova uma propriedade universal. A justificação pode conectar O à diagonal, equidistância e perpendicularidade; posteriormente, usar (a,b)↔(b,a). O papel do professor é selecionar e confrontar argumentos, pedir contraexemplos e institucionalizar definições após a exploração.

Gamificação: comemoração comum a todos os acertos e retomada acolhedora nas escolhas diferentes (D); missões e progresso por investigação (P); valorizar revisão e explicação. Rankings, recompensas por velocidade e punição por erro não estão previstos. Esses são critérios de projeto, não efeitos comprovados do futuro aplicativo.

### Precisão matemática transversal

- Para f:A→B, inversa f⁻¹:B→A exige bijetividade. Se f é injetiva, possui inversa sobre a imagem f(A); esclarecer o ajuste do contradomínio.
- Toda função determina uma relação inversa; essa relação só é função sobre f(A) quando f é injetiva.
- f⁻¹ não significa 1/f. Operações inversas devem ser aplicadas em ordem inversa.
- f⁻¹∘f=id_A e f∘f⁻¹=id_B no caso bijetivo. Mostrar os conjuntos e os dois sentidos em E5.
- Monotonicidade estrita é condição suficiente de injetividade, não definição geral nem condição necessária para toda função.
- Para funções decrescentes, não afirmar que toda interseção dos gráficos de f e f⁻¹ está em y=x: f(x)=−x é um contraexemplo.

## 5. DUA: afinidades, barreiras e requisitos propostos

CAST 3.0 organiza diretrizes em engajamento, representação e ação/expressão [R2]. A tabela é uma aplicação de projeto, não uma certificação de acessibilidade. A presença de animação e jogo, por si, não assegura DUA.

| Afinidade ou barreira | Resposta proposta | Evidência de validação futura |
|---|---|---|
| Jogo e investigação podem favorecer participação; bloqueios podem gerar desistência. | Metas claras, escolhas de casos, ajuda gradual, tentativas sem punição e mediação docente. | Observar se estudantes com diferentes conhecimentos conseguem retomar após erro. |
| Geometria dinâmica depende fortemente da visão. | Coordenadas em texto, descrição das relações, tabela equivalente e material tátil mediado quando necessário. | Realizar a tarefa sem depender da imagem; testar com leitores de tela e estudantes. |
| Arraste e clique preciso impõem barreiras motoras. | Teclado e controles equivalentes; marcação participativa sem exigência de precisão; respostas em opções visíveis. | Completar todo o fluxo sem mouse e com ampliação. |
| Movimento automático e destaque podem distrair. | Pausa, ausência de repetição infinita, modo sem movimento e sinal textual persistente. | Verificar redução de movimento e autonomia para interromper. |
| Resposta escrita única pode ocultar raciocínio. | Esquema, explicação oral mediada ou texto; avaliar conteúdo matemático com critérios comuns. | Comparar evidências independentemente da modalidade escolhida. |
| Diário favorece reflexão, mas pode tornar-se formulário burocrático. | Escolha de evidências, revisão de resposta e autoavaliação justificada. | Identificar mudanças de raciocínio, não apenas preenchimento. |

No protótipo: botões e campos nativos, alternativas ao clique/arraste, coordenadas textuais, pausa e redução de movimento. Ainda faltam ensaios com tecnologias assistivas, alternativa não visual integral, áudio e validação com público real. Sonificação é possibilidade inspirada nos recursos documentados do Desmos [R4], não compromisso implementado.

## 6. Requisitos técnicos para o aplicativo futuro

**D — celular prioritário e computador compatível:** cada momento deve permitir realizar sua ação no celular sem rolar a página. Dividir controles em microetapas que substituem o conteúdo, mantendo E1–E8 como oito páginas pedagógicas. Não resolver falta de espaço reduzindo texto ou alvos de toque a tamanhos inadequados. Usar área gráfica compacta, alternativas visíveis e uma ação principal por vez. O protótipo separa escolha de função, exploração do rastro e pergunta em painéis sucessivos.

**Critério de validação do requisito:** verificar cada estado com área útil de 320×568, 360×640 e 390×844 px, incluindo mensagens de retomada e conclusão, além de desktop e orientação horizontal. Esses tamanhos são uma matriz inicial proposta, não uma lista fechada de aparelhos. A atividade deve caber no espaço útil, considerando barras do navegador. Ampliação de texto e tecnologias assistivas têm precedência sobre a restrição de rolagem: nunca cortar conteúdo nem bloquear a rolagem quando necessária ao acesso. Preferir subdividir etapas. O enquadramento dentro da conversa não certifica o comportamento da futura página hospedada.

**D — hospedagem:** conta GitHub do proponente. **P:** preparar futuramente distribuição estática para GitHub Pages, com caminhos relativos e sem exigir backend. Serviço/configuração, repositório e endereço exatos serão definidos na fase de implementação. Não foi criado repositório, publicação ou deploy nesta revisão.

**P — arquitetura:** aplicação responsiva em português, separando modelo matemático, estados de atividade, desenho e registros. SVG para geometria simples é candidato; GeoGebra e Desmos são referências de interação, não dependências já escolhidas. Verificar termos, integração e acesso antes de adotar serviços externos. Não haverá execução de expressões arbitrárias por eval.

**Estados de E4:** A/aguardar → segmento OP → translação → marcação participativa → recomeçar → segunda experiência → B/explorar → pergunta numérica → celebração → pergunta simbólica → celebração → construção. Escolha diferente em cada pergunta → translação no modo correspondente → marcação → retorno à mesma pergunta. Na pergunta simbólica a retomada elimina marcas e números. A construção alterna escolha da função, rastro e pergunta em painéis compactos. Cancelar animações e transições pendentes ao mudar de caso. Estados persistidos da versão antiga não devem pular a nova sequência numérica/simbólica.

**Modelo de registro proposto:** versão do esquema, página, subestado, função e domínio, coordenadas, conjectura, justificativa, tentativas significativas, pistas e reflexão. Não armazenar cada quadro da animação. Preferir persistência local sem identificação na primeira versão; exportação, contas, painel docente, retenção e sincronização permanecem A. Nunca prometer que estado local equivale a entrega ao professor.

**Geometria:** mesma escala nos eixos, inclusive em telas estreitas; conversão correta entre coordenadas e pixels; limite de amostras do rastro; nenhum segmento artificial entre descontinuidades; distinção entre domínio e recorte de exibição; marcação participativa sem teste de proximidade; alvos de arraste com tolerância de toque, sem igualdade de ponto flutuante.

**Acesso e navegação:** operação por teclado; foco previsível após transição; avisos de estado apenas em eventos relevantes; rótulos além de cores; leitura com zoom; controles de pausa; ausência de dependência de hover. Meta de conformidade formal e plano de auditoria ainda a definir.

### Critérios de aceitação antes da implementação completa

1. Conferir O∈y=x, P'=(b,a), vetor diretor constante da cópia, ponto médio no semicírculo de raio d/2 e extremos finais P' e O, para vários quadrantes; não desenhar auxiliares nem rastro.
2. Garantir duas experiências participativas antes de B; caso numérico antes do simbólico; escolhas diferentes iniciam a retomada correspondente; acertos usam a celebração comum e transição automática.
3. Verificar P=P' na diagonal sem divisão por zero ou falsa afirmação de perpendicularidade.
4. Demonstrar relação não funcional da parábola completa e correção após restrição.
5. Conferir composições e conjuntos em E5; não inferir bijeção apenas de amostras.
6. Testar teclado, toque, leitor de tela, 320 px, zoom e redução de movimento; validar materiais alternativos.
7. Pilotar com estudantes e analisar argumentos, erros produtivos, pedidos de ajuda e momentos de desistência.

## 7. Decisões encerradas e próximos pontos de planejamento

**Encerrados nesta revisão:** finalidade participativa da marcação; translação da cópia; ocultação dos auxiliares; duas experiências iniciais; pergunta numérica antes da simbólica; retomada animada após escolha diferente; opções visíveis; prioridade ao celular e compatibilidade com computador; hospedagem na conta GitHub. Não reabrir esses pontos como se faltasse resposta do proponente. A funcionalidade da apresentação geométrica fica definida; ajustes restantes são de diagramação.

**Registro do proponente:** ele conhece e já produziu, em colaboração com o assistente e com o GeoGebra, uma animação guiada que explica por que o simétrico de (a,b) em relação a y=x é sempre (b,a). Se o aplicativo for construído com sucesso, essa explicação poderá integrar **E6**. O material não foi recebido ou inspecionado nesta revisão; registrar sua existência relatada não significa reproduzi-lo nem atribuir-lhe características adicionais.

**Ainda abertos:**

1. Detalhar o rio como direção preferida de E2, documentada na seção 2.1; desenvolver E3 em articulação com a inversão de processos. A rodada de perda de informação permanece apenas possibilidade futura, não requisito de E2.
2. Planejar E5 e a organização de E6–E8; E6 deve reservar a possibilidade de incluir a explicação guiada existente.
3. Ajustar diagramação, forma visual das respostas e estética da celebração a partir de ensaios no celular.
4. Definir duração, mediação docente, recursos de acesso e persistência de registros.
5. Na fase de implementação, definir repositório/configuração de publicação na conta GitHub informada pelo proponente.

## 8. Referências e uso no projeto

Consulta em 22/11/2026. Fontes tecnológicas ilustram possibilidades; não garantem qualidade pedagógica ou acessibilidade do nosso protótipo.

- **[R1] Ponte, João Pedro da (2006).** *Explorar e investigar em matemática: Desafio para alunos e professores*. [Registro e arquivo no Repositório da Universidade de Lisboa](https://repositorio.ulisboa.pt/entities/publication/d35864dd-974b-4215-a6f7-6c38aabe9de1). Fundamenta a diferenciação de tarefas e o trabalho exploratório/investigativo. Registro e trecho indexado consultados; acesso direto ao PDF apresentou bloqueio. Não foram atribuídas citações literais ou páginas não verificadas.
- **[R2] CAST (2024).** *Universal Design for Learning Guidelines, version 3.0*. [Diretrizes oficiais](https://udlguidelines.cast.org/). Referência para analisar barreiras e ampliar possibilidades de participação.
- **[R3] Neilsen, Richard.** *Inverting Functions — Reflection visualisation*. [Material GeoGebra](https://www.geogebra.org/m/fZZqFCDS). Referência de reflexão animada e rastreamento; não copiado nem incorporado como dependência.
- **[R4] Desmos.** [Guia oficial da calculadora gráfica](https://help.desmos.com/hc/en-us/articles/202529279-Desmos-Graphing-Calculator-User-Guide), [introdução à acessibilidade](https://help.desmos.com/hc/en-us/articles/4404860698253-Introduction-to-Accessibility-Features) e [Audio Trace](https://help.desmos.com/hc/en-us/articles/37064105800333-Audio-Trace). Referência para representações articuladas, manipulação e alternativas de acesso. Não se presume que todos esses recursos estejam no protótipo.
- **Referência complementar a conferir antes da versão acadêmica final:** Ponte, J. P.; Brocardo, J.; Oliveira, H. *Investigações matemáticas na sala de aula*. Obra mencionada na literatura consultada; edição e paginação da versão que será usada ainda não foram verificadas.


## 9. Piloto E2 autorizado e entregue — 22/11/2026

**D:** o proponente concordou com as cinco propostas de funcionamento: quantidades 1–5; edição com confirmar/cancelar; parada antes de salto sem apoio e reinício da viagem ao executar o plano revisado; tesouro com comemoração e novo planejamento de volta; reflexão final comparando os dois planos. Uma fase, aceitando comandos equivalentes.

**D — sem login e sem registros nesta versão:** a manifestação “Nada de login ou registro pra mim agora” substitui a sugestão anterior de guardar tentativas no dispositivo. Não há persistência, histórico de tentativas ou envio. Apenas os comandos e a posição da partida atual ficam na memória da página. O plano de ida é mostrado durante a volta como apoio didático temporário. A reflexão é um convite à fala/comparação, sem formulário ou gravação.

**Implementação:** piloto E2 independente, com cenário vetorial, personagem, tesouro e paleta derivada das referências. Arquivos separados para regras, interface e estilos; HTML único para abrir diretamente no navegador; pacote ZIP para evolução. Nada foi publicado; o aplicativo E1–E8 completo continua em planejamento. E4 não foi alterado.

**Comportamentos explicitados no piloto:** uma execução começa na margem da viagem atual; comandos longos são paginados na barra sem exigir solução mínima; todos os saltos são validados por apoio; o destino só conclui a viagem ao final do plano completo. Essas convenções podem ser refinadas após o teste do proponente.

**Validação realizada:** dez verificações de regras e sintaxe; percurso de navegador com tentativa impedida, revisão, edição de quantidade/direção, exclusão, ida, volta e reflexão. Layout sem rolagem nos estados medidos em áreas úteis de 320×568 e 390×844. Não houve teste em aparelhos físicos ou com estudantes. Detalhes e limites constam no README do piloto.


## 10. Pares de comandos e papel da leitura — revisão do piloto

**D do proponente:** ordenar os controles como esquerda, direita, sobe, desce. Manter atalhos, indicações textuais e demais elementos aprovados.

**Proposta do proponente, aplicada no piloto para apreciação:** usar uma cor comum para cada par de movimentos opostos. Esquerda/direita: lavanda e roxo; sobe/desce: amarelo suave e texto escuro. Conservar a correspondência nos controles, editor, comandos, consulta à ida e comparação final. Seleção e execução usam contorno para não substituir a identidade cromática do par. A seta continua distinguindo os sentidos; cor não é a única informação.

**Fundamento relatado pelo proponente:** em sua experiência, a leitura por si só tem papel secundário e é pouco mobilizada por muitos alunos na escola. No jogo, pretende estimulá-la continuamente com outros apoios, contribuindo para que a leitura assuma papel principal na aquisição de conhecimentos. Registrar essa posição como experiência e intenção didática do proponente, não como generalização empírica comprovada sobre todos os estudantes.

**Consequência de projeto:** articular ação, seta, cor, quantidade e indicação textual; o apoio visual deve favorecer a interpretação e a progressiva apropriação da leitura, não substituir ou retirar o texto. A cor do par pode tornar perceptível que muda o sentido dentro da mesma família de movimento. A inversão da ordem precisa continuar sendo percebida pela sequência e pela execução; a cor, isoladamente, não evidencia toda a inversão do processo. Eficácia desse apoio permanece hipótese a observar na pilotagem.


## 11. E3 — construção do registro algébrico aprovada

**D:** começar com cartões selecionáveis associados às estações da máquina. O estudante escolhe a expressão que representa o comprimento depois de cada transformação. Retirar gradualmente esse apoio e passar ao preenchimento. Aprovação do proponente em resposta à proposta apresentada; não equivale ainda à autorização para construir o piloto.

**Articulação definida:** ação de cortar/acrescentar, medida em centímetros e escrita algébrica devem permanecer vinculadas. A leitura dos cartões integra a investigação, apoiada pela animação e pelas medidas. As opções ficam visíveis, sem lista de seleção recolhida.

**P para detalhar:** iniciar com um comprimento numérico e depois usar n para o valor numérico do comprimento em cm, associando n, n/2 e n/2+3 aos estados da fita. Na reconstrução, selecionar operações inversas e sua ordem antes de completar a expressão de retorno. Distratores e campos devem diagnosticar a interpretação sem antecipar automaticamente a resposta. Número de momentos, alternativas concretas e critérios de retirada do apoio ainda precisam ser fechados.


## Atualização 0.14 — Piloto E3 autorizado e implementado

**D:** a solicitação “vamos pro piloto?” autoriza implementar E3 isoladamente. Aplicativo completo e publicação continuam fora desta rodada. Piloto local disponível em `piloto-fita.html`; projeto modular em `piloto-fita/`. Sem login, persistência ou transmissão.

**Implementado para avaliação:** quatro momentos — experimentar com fita de 2–12 cm; representar por cartões numéricos; desfazer a saída de 8 cm; generalizar por campos em n/2, n/2+3, n/2+3=8 e n=2(y−3). Corte em partes iguais, metade reservada visível, acréscimo de 3 cm, escala proporcional sem tamanho físico real. Animação pausável; celebração e convite de retomada; controles por toque e teclado.

**P:** faixa de medidas, alternativas, campos e quantidade de apoios são escolhas concretas do piloto, ainda sujeitas à discussão. Completar coeficientes não comprova produção autônoma de uma expressão. Na mediação, solicitar explicação da ordem inversa e comparar ao rio, sem gravação. A régua na reconstrução pode facilitar reconhecimento visual; observar se isso favorece a investigação ou antecipa demais a resposta.

**Verificação:** 30 verificações numéricas e percurso completo no navegador. Cartões e operações cabem em 320 × 568 sem rolagem após ajuste. **A:** testes em celulares reais, teclado virtual, ampliação e leitores de tela; eventual passagem dos campos guiados para escrita livre. Ajuda e conclusão permitem rolagem se necessária para não excluir conteúdo.


## Atualização 0.15 — Continuidade da experiência em E3

**D:** a saída da etapa Desfazer deve ser a obtida pelo estudante na etapa Experimentar, substituindo o caso fixo de 8 cm. Desenho, medidas intermediárias, mensagens, descrição acessível e conferência algébrica acompanham a mesma entrada. Exemplo: 7 → 3,5 → 6,5; retorno 6,5 → 3,5 → 7. Ao alterar o comprimento, é necessário executar a máquina novamente antes de avançar, evitando usar uma saída ainda não experimentada. Implementado no piloto e verificado para 2, 7 e 12 cm.


## Atualização 0.16 — Avanço uniforme em E3

**D:** todos os botões de avanço entre momentos e subetapas usam exclusivamente “Continuar”, com fundo laranja como o comando de E2. Ao ficarem visíveis e habilitados, recebem pulsação suave; ela cessa quando ocultos ou desabilitados. Com preferência por movimento reduzido, mantém-se destaque estático. As abas conservam os nomes das experiências.

**Evidência do proponente:** interpretou o antigo botão “Desfazer” como desfazer a última ação. A mudança distingue a navegação do conteúdo da etapa e reduz essa ambiguidade.


## Atualização 0.17 — Identidade visual de E4 (23/11/2026)

**D:** o amarelo é principal e deve ocupar os fundos gráficos; laranja identifica controles de destaque. Roxo serve aos eixos, textos e elementos de identidade. Não reduzir a identidade a roxo e bege. Referência explícita: captura fornecida pelo proponente. Cor do fundo amostrada com conversão do perfil incorporado para sRGB: #fad404; roxo #473366; laranja #ff6633.

**Entrega:** piloto-laboratorio.html e pasta modular piloto-laboratorio/. Mantidas interações geométricas e investigativas do protótipo; avanços padronizados como Continuar. Adaptado o gráfico ao espaço disponível mantendo unidades iguais nos eixos. Retirada a ligação com armazenamento do ambiente de visualização na versão independente, conforme decisão de não persistir respostas. Fragmento original preservado para referência.

**Validação:** percurso A até conjecturas e construção executado no navegador; tela de rastro a 320 × 568 sem rolagem. E5 ainda não implementada.


## Atualização 0.18 — Referência visual e comemoração sonora

**D (23/11/2026):** imagem adicional preservada em referencias-visuais/controles-laranja-texto-branco.png. Botões laranja usam texto e/ou ícones brancos. Nos acertos e sucessos, sempre combinar comemoração visual e som; aplicado aos pontos de sucesso já existentes em E2, E3 e E4, sem converter ações participativas em testes de acerto.

**Implementação:** melodia curta de três notas suaves sintetizadas localmente; som ligado por padrão e controle Som para silenciar. Inicialização após interação do estudante para respeitar o navegador. Sem gravação, transmissão ou armazenamento. Restrições do navegador e configuração do aparelho podem impedir áudio; preservar feedback visual. Preferência por movimento reduzido continua respeitada.

**Validação desta alteração:** sintaxe dos scripts conferida. Reprodução sonora em aparelhos reais permanece a verificar com o proponente. E5 deve herdar esse padrão.


## Atualização 0.19 — Piloto E5 (23/11/2026)

**D:** proponente solicita experimentar diretamente a proposta das máquinas conectadas. Implementado piloto independente: montar inversa com dois cartões; experimentar três entradas; explicar cancelamento de operações com n; explorar gráfico da identidade e trocar a ordem das máquinas. Comparações temporárias em memória, sem registros persistentes.

**P:** faixa inteira 2–12 (4–12 quando a inversa vem primeiro), três casos e explicação guiada são escolhas deste piloto. Ordem incorreta pode produzir coincidência isolada, que não prova inversão; pedir novo teste sem liberar como regra geral. Mostrar diferenças entre medida recuperada e mesmo objeto físico, experimentação e justificativa, faixa explorada e domínio.

**A:** avaliar suficiência da mediação, legibilidade e uso em aparelhos reais. Sintaxe verificada; validação visual e funcional com estudantes ainda pendente. Não implementa o aplicativo completo.


## Atualização 0.20 — Máquina visual de E5

**D (23/11/2026):** disposição baseada no rascunho enviado: esteira, painel superior, duas estações e caixas laranja com valores de entrada, intermediário e saída. Uma única máquina visível, ida com expressão e volta com interrogação. Animação de sucção da caixa e quique das letras da operação. Fundo amarelo preservado.

**Implementado:** SVG próprio, editável e animável; sem copiar ativos da referência Desmos. Conservada a regra x/2+3 de E3; o 2x+3 do rascunho foi tratado como exemplo visual. A execução mostra ida e volta sucessivamente. As estações da volta exibem as operações escolhidas, enquanto o painel superior mantém ?. Imagens originais guardadas em referencias-visuais/. Conferido caso 10 → 5 → 8 → 5 → 10 no navegador; versão reduzida de movimento sem sucção/quique.

**A:** legibilidade em celulares muito pequenos, ritmo e intensidade do efeito a avaliar com o proponente. Não alterar o conteúdo pedagógico em função da aparência sem discutir.


### Estado de pausa — 23/11/2026

O proponente interrompeu o trabalho após experimentar a primeira proposta de máquina visual em E5 e avisou que haverá vários ajustes, ainda não detalhados. Essa apresentação permanece provisória. A retomada deve priorizar seus comentários sobre E5 antes de seguir para E6 ou integrar o aplicativo. Ver registro 021 e CONTINUIDADE.md.


## Atualização 0.21 — Correção do fluxo de E5

**D:** ida e volta são experiências separadas. Uma única caixa laranja, inicialmente vazia; entrada digitada na célula x. Ida fixa f(x)=x/2+4, sem seleção de operações; Experimentar executa somente a ida e registra x, x/2 e x/2+4. Preparar volta abre escolhas acima da tabela; primeira operação ocupa estação direita e segunda a esquerda. Experimentar na volta percorre a máquina da direita para a esquerda, com sucção, quique das letras e saída da caixa.

A tabela preserva a linha da ida e acrescenta comparação da volta: negrito para coincidências, ? para diferenças. Mensagem de retomada referencia o x digitado. A caixa mostra os resultados calculados durante a execução. As expressões e o domínio nas etapas posteriores de E5 foram ajustados a +4. E3 permanece com +3: tratar E5 como variação até decisão do proponente sobre uniformizar.

**Interpretação documentada:** o pedido altera explicitamente a função para x/2+4, mas cita a coluna antiga x/2+3. Priorizada a alteração explícita e atualizado o cabeçalho para x/2+4. Não exigir elaboração de linha do tempo pelo proponente.

**Verificação:** ida 7,3,5,7,5; volta incorreta gera interrogações, volta correta recupera valores em negrito; uma caixa no DOM; ida não dispara volta. Layout 390×740 conferido. Faixa positiva até 12 e validação em telas menores permanecem escolhas/pendências do piloto.


## Atualização 0.22 — Painel e sucção em E5

Retirar informações redundantes de escolhas na volta; manter os controles e os textos das próprias estações. Painel superior revela a expressão composta das operações escolhidas ao clicar em Experimentar, sem presumir que a escolha esteja correta. Refazer escolhas devolve ?. Texto entre etapas elevado para evitar sobreposição. Ficha atrás das peças da máquina, com contorno deformado por canal virtual que estreita até a porta, como a garrafa deitada descrita pelo proponente; não desenhar garrafa literal. Saída usa deformação inversa. Mantido movimento reduzido.

Conferido ? antes da execução e 2(x−4) ao executar o plano −4,×2; cálculo e tabela preservados. Avaliação estética da animação permanece aberta.


## Atualização 0.23 — Expressão da volta durante a escolha

**D:** atualizar a expressão no painel a cada operação escolhida, antes de Experimentar. Sem escolhas: ?; primeira escolha −4: x−4; segunda ×2: 2(x−4). Refazer escolhas limpa a expressão. A regra representa o plano atual, sem afirmar antecipadamente que seja inversa. Esta decisão substitui a exigência anterior de aguardar Experimentar. Proponente solicita seguir para E6 após este ajuste; E6 ainda não implementada.


## Atualização 0.24 — Piloto E6

**D:** seguir com E6. O proponente esclarece que sua explicação geométrica está em HTML não publicado; não é necessário GitHub para integrá-la quando o arquivo for recebido.

**P implementada para discussão:** quatro retomadas, E2–E5, com três momentos cada: recordar, perceber a própria aprendizagem, explicar. Questão matemática breve com apoio visual; autoavaliação sem julgamento; anotação opcional ou explicação oral não gravada. Navegação livre, sem bloquear por erro ou ausência de resposta. Resumo temporário em memória; nenhum armazenamento ou transmissão. Comemoração visual e sonora apenas para acertos matemáticos. Esse formato é piloto, não validação de aprendizagem.

Retomada distingue +3 em E3 e +4 em E5. A prova geométrica em HTML permanece pendente de fornecimento; a representação simples da reflexão não a substitui. E7/E8 ainda não implementadas. Sintaxe conferida; interface em aparelhos reais e adequação da extensão do diário ainda a avaliar.


## Atualização 0.25 — Retomadas de Rio e máquina em E6

**D:** Rio inicialmente sem setas ou percurso resolvido; cena estática com margens, pedras, início e tesouro. Texto informa três saltos à direita e cinco para cima; estudante explica qual trecho desfazer primeiro. Apoio de comparação somente após uma expressão escrita ou opção oral, sem avaliação automática.

Máquina apresenta f(x)=x/2+3 em notação matemática com fração (MathML nativo para uso offline), sem rótulo E3. Cartões simbólicos x, x/2, x/2+3; pergunta sobre primeira e segunda ações da inversão, respondida em palavras. Sem referência inicial a 6,5. Exemplo numérico opcional solicitado pelo estudante. Somente os textos Divide por 2 e Soma 3 quicam suavemente, com pausas, controle para interromper e respeito a movimento reduzido. Preservar a distinção entre dificuldade na inversão e dificuldade na leitura simbólica.


## Atualização 0.26 — Preservação visual e pendências de E6

**Decisão do proponente:** a imagem do Rio em E6 deve ser a mesma usada em E2. Não redesenhar/simplificar a cena. A opção de explicação oral não gravada não é desejada e deve ser retirada; não inferir autorização para gravar áudio.

**Problema identificado:** a máquina detalhada foi substituída por desenho simplificado ao implementar a retomada simbólica. Restaurar seus detalhes reutilizando os ativos existentes, com adaptação para f(x)=x/2+3 e cartões x, x/2, x/2+3. Manter animação apenas nos textos, com pausa. A regra +4 dos instantâneos de E5 não deve ser transportada para E6.

**Escopo desta rodada:** documentar, organizar banco local e atualizar backup. Não corrigir os pilotos agora. Banco em banco-imagens/, com cena original extraída de E2, instantâneos vetoriais da máquina de E5, referências fornecidas e cópias de fontes. Catalogadas origens e limites de reutilização. Próxima rodada: correções de E6 acima, conforme orientação do proponente.


## Atualização 0.27 — Rio original efetivamente integrado

E6 passa a reutilizar o SVG da cena original de E2, em vez do redesenho simplificado. Mesmos elementos visuais, proporção original 480×450 e estado inicial sem setas/rastro. Captura confirmatória do proponente guardada no banco. Demais correções de E6 continuam pendentes.


## Atualização 0.28 — Notação na composição de E6

Rótulos explícitos: ida y = n/2 + 4; volta n = 2(y − 4).


## Atualização 0.29 — Compilação E1–E6 (24/11/2026)

**D:** solicitado piloto com tudo até E6. Entregue piloto-completo-ate-e6.html, único arquivo independente; projeto em piloto-integrado/. E2–E6 preservadas e carregadas sob demanda, com estado em memória enquanto a página permanece aberta. Navegação livre entre etapas; nenhum armazenamento, envio ou publicação.

**P:** E1 é apresentação inicial provisória. Isolamento das atividades em quadros evita conflito de estilos e IDs; integração definitiva permanece futura. Barra superior tem Continuar entre etapas e menu Etapas. Controles internos permanecem dos pilotos.

**Pendências:** E6 máquina detalhada e retirada da opção oral continuam abertas; HTML geométrico ainda não recebido. E7/E8 fora do escopo. Sintaxe e presença das cinco etapas verificadas; layout/áudio/navegação do conjunto ainda requerem teste real, inclusive altura disponível menor por barra superior.


## Atualização visual E5 — v0.31

**D:** utilizar Máquina nova.svg, mantendo animação e considerando as fontes. **Implementado:** arte original em camadas, ficha móvel por trás dos bocais, sucção adaptada, letras animadas, rótulos vetoriais e fórmula dinâmica (x+2)/5. Fonte do sistema em negrito para operações; serifada local para fórmula; sem downloads de fontes. Recorte das margens vazias e proporção estável na tela. Fonte original preservada no banco de imagens. A nova arte não altera a regra matemática vigente nem aprova as demais propostas do mapa de atenção.


### Ajuste tipográfico E5 — v0.32

**D:** rótulos entrada/entre etapas/saída com 70% do tamanho anterior; palavras das operações em corpo uniforme, centralizadas em roxo, sem justificar ou deformar para preencher o painel. Algarismos das operações em laranja escuro. Fórmulas da ida/volta sem negrito. Aplicado mantendo a matemática e animações.


## Layout aprovado e implementado — v0.33

**D:** cabeçalho compacto apenas com autoria, menu, ajuda e som; título único no conteúdo; códigos de etapa ocultos; ícones autorais preservados. Base contextual: Voltar, ação principal, Nova, Refazer, Próximo. Voltar e Próximo percorrem os momentos/abas e depois as etapas, respeitando liberações; menu de etapas conserva a consulta livre. Nova reinicia a atividade, Refazer apenas a tentativa. Em E5, manter ida e saída produzida ao refazer a volta. Frase “Escolha as operações e volte até a entrada.” Sem avanço duplicado superior. Som ligado/desligado indicado por SVG, estado em memória compartilhado entre módulos. Ajuda proporcional ao som.

**Implementado:** fontes E2–E6 e integrado. **Limite verificado:** em telas muito baixas pode haver rolagem em vez de reduzir excessivamente texto e botões. **Próximas rodadas:** arte da máquina E5, depois animação do Rio do Claude, sem inferir autorização para substituir imagens adicionais.


## Repositório definido — 26/11/2026

O professor indicou https://github.com/0ASilva/inversa como repositório do projeto. Consulta confirmou visibilidade pública, branch padrão main e permissão de escrita pelo conector. Referência observada: 4c3deeaf49a7d5fa3ab930271a9396b2e114b4d8. Esta definição substitui a pendência de endereço/visibilidade nos textos anteriores. A integração dos arquivos ainda não foi realizada; preservar o conteúdo remoto e conciliar as revisões Claude antes de fechar a execução.
