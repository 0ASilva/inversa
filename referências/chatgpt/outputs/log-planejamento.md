# Log de decisões e planejamento

> Histórico: o Registro 001 descreve a versão inicial. A rotação, a marcação avaliada e a conjectura única ali registradas foram substituídas pelas decisões do Registro 002.

## 22/11/2026 — Registro 001 — versão 0.1

**Pedido:** planejar oito páginas para ensino investigativo de funções inversas; produzir especificação e log em Markdown; revisar o laboratório E4 nesta conversa. Não implementar o aplicativo completo.

**Contexto recuperado:** conversa “Propor atividades interativas”, identificador 6aea70a1-cc1c-83e9-9b55-4ba5fc17b710. O texto completo do proponente esclareceu a animação por semicircunferência, repetição com P aleatório, nomenclatura P', apresentação posterior da conjectura e avanço automático após acerto.

### Determinações preservadas

| ID | Decisão do proponente | Consequência |
|---|---|---|
| D01 | Oito páginas E1–E8 | E6–E8 permanecem três páginas de diário. |
| D02 | Planejamento antes da implementação completa | Apenas o laboratório isolado recebe protótipo. |
| D03 | P' substitui Q | Controles, gráfico e textos usam P'. |
| D04 | Duas experiências geométricas antes da conjectura | Máquina de estados impede acesso antecipado a B. |
| D05 | Ponto médio do segmento descreve semicircunferência de raio d/2 | Transporte implementado por rotação rígida da cópia de PH em torno de H. |
| D06 | Resposta correta leva à construção do gráfico | Transição automática; feedback permanece disponível. |

### Propostas provisórias adotadas para tornar o protótipo discutível

| ID | Proposta | Justificativa e revisão possível |
|---|---|---|
| P01 | Pulsos suaves breves em lugar de piscar | Chamar atenção preservando opção de reduzir movimento; confirmar com o proponente. |
| P02 | Avaliar clique próximo do destino e oferecer coordenadas | Tornar a marcação uma ação verificável; discutir se deveria ser apenas confirmação. |
| P03 | Duas experiências com P fora da diagonal; segunda aleatória distinta | Evitar construção degenerada; explorar diagonal em B. |
| P04 | Conjectura estruturada e justificativa livre | Permite demonstração determinística do avanço; não avalia qualidade da justificativa. |
| P05 | Afim, cúbica e parábola com/sem restrição | Comparar inversão e perda de unicidade. |
| P06 | Diário dividido em reconstrução, justificação e transferência | Separar memória da experiência de evidência conceitual; depende de discussão. |
| P07 | Missões sem ranking, tempo competitivo ou punição | Priorizar investigação e revisão; não atribuir eficácia sem pilotagem. |

### Trabalho realizado nesta versão

- Especificadas as oito páginas, mediação, evidências, requisitos técnicos e questões abertas.
- Consultadas fontes de Ponte, CAST, GeoGebra e Desmos; links e limites da consulta registrados na especificação.
- Preparado protótipo isolado de E4 com geometria animada, duas experiências, conjectura, movimento de P, rastro e discussão de existência de inversa.
- Explicitada a distinção entre rotação local da cópia de um segmento e reflexão global do plano.
- Separados requisitos futuros de recursos presentes no protótipo; nenhuma publicação ou aplicativo completo foi criado.

### Pendências e próximos ciclos

1. Discutir finalidade da marcação após a animação, evidência mínima da conjectura e quantidade/seleção de casos.
2. Confirmar público, pré-requisitos, duração, recursos e trabalho individual ou em duplas.
3. Detalhar E2 e E3: regras, exemplos, devolutivas, introdução da perda de informação.
4. Detalhar E5 e critérios comuns para as modalidades de diário E6–E8.
5. Elaborar roteiro docente e alternativas de acesso; pilotar E4 antes de escolher a arquitetura final.
6. Somente após a discussão do planejamento, definir implementação, persistência e publicação com o proponente.

### Política de atualização do log

Acrescentar registros datados com evidência, decisão, autor da decisão, impacto e pendência. Não reclassificar propostas como aprovadas sem manifestação do proponente. Registrar testes executados separadamente de testes previstos e manter limitações visíveis.

### Verificação executada nesta versão

- Sintaxe JavaScript conferida com `node --check`; referências a elementos da interface conferidas.
- Invariantes de comprimento, raio do ponto médio e posição final verificados numericamente em diferentes quadrantes e no caso degenerado.
- Fluxo A → B → construção exercitado em DOM simulado, com marcação incorreta/correta, conjectura incorreta/correta, segunda experiência aleatória, contraexemplo da parábola e ponto fixo na diagonal.
- Limite: esses testes não substituem inspeção visual em navegador, teste de arraste real, leitor de tela ou pilotagem didática; estes permanecem pendentes.


## 22/11/2026 — Registro 002 — versão 0.2

**Autor das decisões:** proponente, em esclarecimento após experimentar E4. **Execução:** revisão do protótipo isolado e da especificação; aplicativo completo continua fora do escopo.

### Correções e decisões confirmadas

| ID | Decisão e evidência | Impacto |
|---|---|---|
| D07 | A cópia de OP translada pelo vetor AB'(θ); seu ponto médio oculto percorre o semicírculo de centro O. | Substitui a rotação da versão 0.1. Ambos os extremos recebem o mesmo deslocamento; orientação constante. |
| D08 | O, A, B, B', ponto médio e rastro não aparecem. | Desenhar apenas OP e sua cópia móvel, além dos elementos essenciais do plano; sem segmento de destino separado. |
| D09 | Marcação é participação visual e tátil na primeira apresentação do conceito. | Substitui P02: qualquer toque no plano revela P' exato, sem avaliação de precisão; botão equivalente para teclado. |
| D10 | A funcionalidade desta apresentação fica definida após a correção. | Ajustes posteriores serão de diagramação, sem reabrir suas finalidades. |
| D11 | Opções visíveis em botões/ícones/listas de marcação, nunca dropdown de respostas. | Formato pode variar por momento para atender ao acesso pelo celular; protótipo usa botões. |
| D12 | Pergunta numérica antecede a simbólica. | Considera a dificuldade relatada de estudantes do Ensino Médio com variáveis e símbolos; substitui P04. |
| D13 | Escolha diferente inicia retomada animada, marcação e nova escolha. | Modo numérico conserva coordenadas; simbólico elimina malha, marcas e números e identifica (a,b)/(b,a). Sem punição ou mensagem de reprovação. |
| D14 | Todos os acertos recebem comemoração padronizada. | Proposta visual própria: confirmação, pulso e quatro partículas breves; sem copiar a Khan Academy. |
| D15 | Prioridade ao celular, ação de cada momento sem rolagem, mantendo computador compatível. | Microetapas substituem painéis; não reduzir legibilidade ou impedir acesso com ampliação. |
| D16 | Hospedagem na conta GitHub do proponente. | Destino decidido; repositório e configuração pendentes. Nenhuma publicação nesta revisão. |
| D17 | Há animação explicativa guiada já produzida pelo proponente com o assistente e GeoGebra. | Registrar possibilidade de integração em E6 se o aplicativo for bem-sucedido. Material não recebido/inspecionado. |

### Propostas de implementação registradas, não novas exigências ao estudante

- Semicírculo parametrizado por B'(θ)=O+Rθ(P−O)/2; Δ=B'−A; extremos O+Δ e P+Δ. O uso de Rθ calcula o trajeto oculto; o segmento não gira.
- Celebração “descoberta”, com duração aproximada de 1,1 s e alternativa estática sob redução de movimento; estética sujeita a diagramação.
- Retorno à mesma pergunta depois da marcação guiada para permitir que o estudante refaça sua escolha.
- Distribuição estática em GitHub Pages é proposta técnica para a hospedagem decidida, não deploy realizado.
- Matriz inicial de áreas úteis móveis: 320×568, 360×640 e 390×844 px. A exigência de não rolar não autoriza cortar conteúdo ampliado ou inacessível.

### Próximos passos

Continuar o detalhamento das demais páginas. Validar diagramação móvel e modos de acesso. Planejar a posição da explicação existente em E6, preservando o caráter reflexivo do diário. Não solicitar arquivo GeoGebra para a translação: a definição agora é suficiente para implementá-la.


### Verificação executada — versão 0.2

- Sintaxe JavaScript e referências da interface verificadas; nenhuma lista de seleção permanece no protótipo.
- Testes numéricos em diferentes quadrantes confirmaram vetor diretor constante, raio do trajeto do ponto médio e coincidência final da cópia com OP'.
- Fluxo exercitado em DOM simulado: duas experiências, toque participativo longe do destino, caso numérico, acerto e retomada numérica, acerto e retomada simbólica, ausência de números nos eixos simbólicos, comemoração e construção da relação inversa.
- Área gráfica reduzida em larguras móveis; controles de função, exploração e pergunta apresentados em momentos distintos.
- Inspeção visual de navegador não concluída: a política de navegação bloqueou a abertura do arquivo local. Não se tentou contornar o bloqueio. O requisito de completar cada momento sem rolagem ainda precisa de medição no navegador e nos dispositivos-alvo; não foi certificado pelos testes de lógica.
- Sem criação de aplicativo completo, repositório, publicação ou integração do material GeoGebra de E6.


## 22/11/2026 — Registro 003 — versão 0.3 — concepção de E2

**Pedido:** documentar E2 como jogo que poderá continuar em desenvolvimento; avaliar duas propostas, rio 2D e tranca 3D. Nenhum jogo foi implementado nesta atualização.

**Decisões do proponente:** E2 e E3 têm objetos de naturezas distintas e finalidade comum de desfazer processos percebendo a inversão da ordem; preservar a mediação e a produção de evidências já planejadas. E2 deve ser documentado para evolução futura.

**Alternativas registradas, ainda sem escolha:**

- Rio: três saltos à direita, cinco para cima, tesouro; barra de comandos construída por direção e quantidade; execução por “Ir”; planejamento da volta.
- Tranca: giro de 60° à direita, descida de 3 níveis, giro de 80° à esquerda, descida de 2 níveis, giro de 120° à esquerda; registro da inserção disponível para planejar o destravamento.

**Análise matemática do assistente:** a ordem inversa desfaz uma composição de operações invertíveis, mas pode não ser a única ordem que retorna ao estado inicial. Deslocamentos horizontais/verticais livres comutam; giro em torno de um eixo e deslocamento ao longo desse mesmo eixo também. No rio, a ordem deve decorrer dos apoios; na tranca, de canais/batentes, caso essa seja a intenção do proponente. As restrições precisam ser observáveis, não uma validação arbitrária de lista exata.

**Recomendação provisória:** rio como primeira versão, pela leitura direta no celular e menor esforço de construção; tranca preservada como alternativa/expansão. Não registrar isso como escolha aprovada. O potencial didático de ambas depende da mecânica e da mediação; eficácia ainda não medida.

**Documentação adicionada:** descrição das duas alternativas, sequência inversa da tranca, comparação, condições de validade, mediação, evidências, ponte com E3, organização modular e eventos para evolução do jogo.

**Questões abertas:** escolha do jogo; confirmação do percurso em L e saltos unitários; retomada após movimento impedido; aceitação de percursos equivalentes; na tranca, canais, referência angular e simetria da trava. Essas questões não reabrem a funcionalidade acordada de E4.

**Verificação:** conferência aritmética das sequências e de exemplos de retorno, incluindo diferença entre posição final e trajeto permitido. Nenhuma alegação de teste com estudantes, de protótipo E2 jogável ou de validação de interface.


## 22/11/2026 — Registro 004 — versão 0.4 — direção preferida para E2

**Retorno do proponente:** confirma que a tranca foi imaginada com canais que obrigam a sequência; manifesta receio quanto à clareza de sua realização visual e inclinação ao rio, acolhendo as sugestões.

**Atualização de planejamento:** rio passa a ser a direção preferida para detalhar E2. Tranca com canais permanece como alternativa futura. Registrar a preferência como tal, sem afirmar aprovação definitiva de todos os detalhes ou autorização de implementação.

**Base acolhida para o rio:** apoios no caminho em L, saltos sucessivos, comandos de direção e quantidade, planejamento da volta e feedback acolhedor com parada antes do salto sem apoio. O objetivo é tornar a ordem relevante pela configuração do percurso.

**Questão encerrada:** existência de canais na tranca. **Questões preservadas:** geometria e visualização dessa alternativa, se retomada futuramente.

**Próximo detalhamento de E2:** decidir se o estudante programa também a ida a partir do percurso visível ou recebe sua sequência. Proposta do assistente: composição da ida pelo estudante, com introdução breve dos controles se necessária. Detalhar depois edição dos comandos, retomada e evidência reflexiva.

**Escopo:** apenas documentação; E4 e seu protótipo não foram alterados; E2 não foi implementado.


## 22/11/2026 — Registro 005 — versão 0.5 — planejamento das duas viagens

**Decisão explícita do proponente:** “Ele descobre e planeja ida e volta.”

**Consequências:** o estudante observa as pedras e constrói ambos os programas; não recebe a ida pronta. Os deslocamentos previstos para a fase não são instruções a copiar. Preservar o registro da ida para consulta na volta, sem gerar automaticamente a sequência inversa. Orientações sobre os controles não devem revelar o caminho.

**Questão encerrada:** quem planeja a ida. **Pendências:** seleção de quantidades, edição da sequência, retomada e fechamento reflexivo. Documentação atualizada; nenhuma implementação ou alteração de E4.


## 22/11/2026 — Registro 006 — versão 0.6 — edição e identidade visual

**Decisão do proponente:** aceita tocar cada comando da barra para alterar quantidade, trocar direção ou excluir, antes de “Ir”. Decisão incorporada à especificação.

**Referências enviadas:** https://0asilva.github.io/descubra-com-o-grafico/ e https://0asilva.github.io/labirinto-plano/.

**Inspeção realizada:** páginas abertas no navegador, aparência observada e estilos dos documentos carregados consultados. Identificada base comum de creme, lavanda, roxo, amarelo, laranja, tipografia de sistema e controles arredondados. Registradas as diferenças de roxo e amarelo entre os aplicativos.

**Proposta:** adotar a organização de jogo do Labirinto e a linguagem visual compartilhada como base para o rio. Manter os requisitos próprios de E2: salto apenas com apoio, feedback acolhedor, edição de comandos e prioridade móvel. Não incorporar automaticamente login, transmissão de registros, placares ou punição visual.

**Estado:** referência visual documentada; nenhum protótipo E2 construído, nenhum aplicativo publicado ou modificado. E4 permanece intacto. Links publicados foram suficientes para esta análise; não solicitar arquivos adicionais sem necessidade concreta.


## 22/11/2026 — Registro 007 — versão 0.7 — piloto jogável de E2

**Autorização:** proponente concorda com todas as propostas do piloto e determina “Nada de login ou registro pra mim agora”. Implementação limitada a E2; sem publicação.

**Entregas:** `piloto-rio.html` autocontido; pasta `piloto-rio` com HTML, CSS, motor de regras, interface e README; `piloto-rio-projeto.zip`. Identidade visual das referências, personagem e cenário vetoriais próprios.

**Dados:** retirado o armazenamento local sugerido anteriormente. Nenhuma persistência ou transmissão. Só estado em memória necessário à partida e consulta temporária à ida; reflexão oral, sem captura.

**Implementado:** direção e quantidade 1–5; edição, confirmação, cancelamento e exclusão; execução por saltos; pausa; parada antes de apoio inexistente; retomada da margem; comemoração; plano de volta vazio; consulta à ida; retorno e pergunta reflexiva; comandos equivalentes e navegação de planos maiores que três comandos.

**Verificação:** dez casos do motor passaram; sintaxe JS conferida. No navegador foram exercitados impedimento, revisão, direção/quantidade/exclusão, ida, volta e reflexão. Medições em 320×568 e 390×844 não indicaram rolagem nos estados inspecionados; editor e reflexão foram observados no tamanho menor. Console sem avisos/erros reportados. Limites: sem aparelho físico, auditoria de acessibilidade ou teste com estudantes; pausa/redução de movimento e planos longos não inteiramente exercitados na inspeção visual.

**Próximo passo:** proponente experimentar o piloto e apontar ajustes de interação, ritmo e clareza didática. Aplicativo completo e publicação GitHub permanecem futuros.


## 22/11/2026 — Registro 008 — versão 0.8 — pares visuais e leitura

**Pedido:** reorganizar controles para esquerda, direita, sobe, desce; discutir uma cor comum por par; registrar o papel da leitura segundo a experiência do proponente. Demais elementos aprovados.

**Executado:** ordem alterada nos controles e no editor. Aplicada, para apreciação, identidade lavanda/roxo ao par horizontal e amarelo suave ao vertical, estendida à barra de comandos, plano de ida e comparação final. Setas, quantidades, textos e nomes acessíveis preservados; contorno indica seleção/execução. Sem mudança nas regras, armazenamento ou envio.

**Registro pedagógico:** apoios visuais e interação devem estimular a leitura para que ela assuma papel principal na aquisição de conhecimentos. A observação de que ela tem papel secundário na experiência escolar é atribuída ao proponente, não apresentada como resultado de pesquisa. Cor comunica a família de movimentos, não prova a inversão da ordem.

**Entregas atualizadas:** HTML único, fontes, README e ZIP. Sintaxe conferida; esta alteração visual ainda requer apreciação do proponente.


## 22/11/2026 — Registro 009 — versão 0.9 — início de E3

**Pedido:** propor objeto/situação para máquina ÷2 → +3, enfatizando registro algébrico; examinar Working Backwards na aba indicada. Ainda sem construir piloto.

**Referência investigada:** aba existente do Chrome do proponente; panorama de 11 telas e prévias 1–5. Observados esteira, estações, expressões intermediárias, tabela, busca da entrada e comparação com resolução de equações. Não foram submetidas respostas, copiados recursos, editada ou atribuída atividade. Prévia fechada ao terminar, preservando a página original aberta.

**Propostas documentadas:** fichas para kits (preferência inicial do assistente), fita graduada e cartão numérico. Passagem gradual de objetos a números e letras; associação de cada estado a sua expressão. A escolha do objeto permanece do proponente.

**Precisão matemática:** repartir sem selecionar um grupo conserva o total. Para saída n/2, um grupo segue e outro fica lateralmente; iniciar com entradas pares se fichas forem indivisíveis. Regra f(n)=n/2+3; reconstrução n=2(y−3). Não confundir com a máquina ×2 → +3 da referência e do exemplo provisório anterior.

**Escopo:** especificação e log atualizados; E2 e E4 preservados. Próximo passo: discutir o suporte material e a construção progressiva do registro algébrico antes de autorizar o piloto E3.


## 22/11/2026 — Registro 010 — versão 0.10 — fita como suporte de E3

**Decisão explícita do proponente:** “Comprimento da fita”. Substitui a preferência provisória do assistente por fichas; o objeto escolhido trabalha uma grandeza contínua.

**Especificação atualizada:** transformação do comprimento n em n/2+3, na mesma unidade; retorno por retirar 3 unidades e dobrar. Exemplos 10→5→8 e 7→3,5→6,5. Mantida distinção entre situação particular, equação e regra geral.

**Precisão:** acrescentar 3 unidades de comprimento, não três objetos arbitrários; manter escala visual; representar eventual metade não utilizada separadamente; comprimentos positivos, com zero apenas se incorporado explicitamente. n=2(y−3) reconstrói a medida, não exige recuperar o mesmo pedaço físico.

**Pendências:** corte versus redução geométrica, unidade, faixa de medidas e interação com o registro algébrico. Não iniciado piloto E3; E2/E4 preservados.


## 22/11/2026 — Registro 011 — versão 0.11 — mecanismo de corte em E3

**Decisão explícita do proponente:** representação “por corte”, em resposta à proposta de duas partes iguais, uma seguindo e outra visível numa bandeja lateral.

**Consequências:** a primeira estação corta no ponto médio; apenas uma metade compõe o comprimento encaminhado à próxima estação. Manter a escala e distinguir a metade lateral da saída medida. O comprimento total dos dois pedaços não desaparece: a operação ÷2 descreve o comprimento da metade selecionada.

**Estado:** escolha do mecanismo encerrada. Permanecem unidade/faixa de medidas e interação com o registro algébrico. Nenhum piloto E3 implementado nesta atualização.


## 22/11/2026 — Registro 012 — versão 0.12 — unidade e escala de E3

**Decisão explícita do proponente:** “Em centímetros. Sem tamanho real.”

**Consequências:** medidas em cm, representação proporcional e escala consistente na cena, sem exigir equivalência entre centímetros físicos da tela e da fita. Não calibrar por aparelho. A escolha de unidade está encerrada.

**Proposta ainda registrada como provisória:** entradas inteiras de 2 a 12 cm. A confirmação da unidade não foi tomada como aprovação inequívoca de toda a faixa sugerida. Continua pendente o modo de construção do registro algébrico. Nenhum piloto novo implementado.


## 22/11/2026 — Registro 013 — versão 0.13 — cartões e preenchimento em E3

**Aprovação do proponente:** aceita começar com cartões selecionáveis associados às estações e passar gradualmente ao preenchimento.

**Decisão:** o estudante constrói o registro escolhendo a expressão correspondente a cada transformação; ação, medida e escrita ficam conectadas desde o início. Preservar opções visíveis e apoio à leitura.

**Pendências:** alternativas concretas, campos, progressão e critérios para retirar apoio; faixa inicial de medidas ainda proposta. Sem implementação de E3 nesta atualização.


## 22/11/2026 — Registro 014 — versão 0.14 — piloto E3

**Autorização:** “ok. vamos pro piloto?”

**Entrega:** piloto isolado da máquina de fitas, HTML autossuficiente e projeto modular. Quatro momentos: Experimentar, Representar, Desfazer e Generalizar. Corte, reserva da outra metade, acréscimo de 3 cm e reconstrução da medida. Faixa 2–12 cm adotada provisoriamente. Sem login ou registros; não publicado no GitHub. E2/E4 preservados.

**Verificações:** cálculos e validações numéricas (30), percurso completo até conclusão, feedback de retomada e layout das telas densas a 320 × 568. Corrigidos transbordamento da navegação e representação do caso fixo de saída 8 independentemente da entrada explorada.

**Discussão futura:** apoio dos campos versus autonomia algébrica; efeito da régua como pista; entendimento da metade reservada; validação em aparelhos reais e tecnologias assistivas. O funcionamento técnico não equivale à validação da aprendizagem.


## 22/11/2026 — Registro 015 — versão 0.15 — saída escolhida em E3

**Solicitação:** desfazer exatamente a saída obtida pelo estudante. **Alteração:** removido caso fixo de 8 cm na reconstrução e na conferência algébrica; valores e desenho derivados da entrada experimentada. Alterar o controle exige nova execução antes de avançar. HTML único e ZIP regenerados. Verificações numéricas e teste de continuidade para entradas 2, 7 e 12 passaram.


## 22/11/2026 — Registro 016 — versão 0.16 — navegação de E3

**Solicitação e motivo:** botão “Desfazer” foi interpretado como cancelar a última ação. Padronizados os avanços como “Continuar”, em laranja, com pulsação suave apenas quando disponíveis. Mantidos nomes das abas. Preferência por movimento reduzido recebe destaque estático. Atualizados projeto modular, HTML único e ZIP.


## 23/11/2026 — Registro 017 — versão 0.17 — identidade visual de E4

**Solicitação:** aplicar identidade a E4; correção do proponente: amarelo principal nos gráficos e laranja para controles destacados. **Realizado:** fundo amarelo da captura, eixos e textos roxos, ações principais laranja, Continuar pulsante, versão independente e código modular. Preservado protótipo original. Conferido percurso até construção e layout compacto sem rolagem em 320 × 568. Atualizados continuidade, hashes e pacote de recuperação.


## 23/11/2026 — Registro 018 — versão 0.18 — branco nos controles e som

Imagem do proponente incorporada ao acervo de referências. Corrigidos textos de botões laranja para branco nos três pilotos. Acrescentado módulo local de comemoração sonora, chamado nas celebrações de sucesso existentes, com controle de silenciamento. Mantidas comemorações visuais e opção de movimento reduzido. Fontes, HTML único, ZIPs e recuperação atualizados; sintaxe verificada. Áudio em aparelhos reais ainda requer conferência.


## 23/11/2026 — Registro 019 — versão 0.19 — piloto E5

Autorizado experimentar diretamente. Criados fontes modulares e HTML único de E5, com montagem, tabela, explicação guiada e identidade no gráfico; troca de ordem respeita domínio físico. Preservada identidade visual e sonora. Faixas e mediação são provisórias. Sintaxe conferida; teste em aparelhos e validação didática pendentes.


## 23/11/2026 — Registro 020 — versão 0.20 — desenho e animação da máquina

Proponente fornece referência Desmos e rascunho próprio. Substituídos painéis lado a lado por uma máquina SVG com painel superior, estações, bocais e caixas numeradas; execução sequencial de ida e volta, sucção e letras em quique. Mantida regra de E3. Referências preservadas no pacote. Conferidos valores e ausência de rolagem nos tamanhos testados; legibilidade no menor formato ainda merece avaliação.


## 23/11/2026 — Registro 021 — pausa solicitada pelo proponente

**Solicitação:** encerrar por hoje e atualizar controle e backup para retomada posterior.

**Ponto exato:** E5 recebeu a primeira versão da máquina SVG animada, baseada no rascunho do proponente. Ele informou que haverá vários pontos a ajustar, ainda não enumerados. Não considerar o desenho, a disposição ou o ritmo da animação aprovados definitivamente.

**Próxima ação:** ouvir os ajustes de E5 e trabalhar sobre piloto-composicao/. Preservar as decisões de E2–E4 e a identidade visual e sonora. Não avançar automaticamente para E6 nem integrar/publicar o aplicativo completo.

**Entregáveis de retomada:** CONTINUIDADE.md, especificação v0.20, este log até registro 021, fontes dos quatro pilotos, HTMLs independentes, referências visuais e SHA256SUMS.txt. Backup de pausa separado do marco v0.20; verificado por integridade ZIP e hashes de todos os arquivos incluídos.


## Registro 022 — versão 0.21 — retomada: separar ida e volta

Proponente concluiu suas observações com “Fim. Pode implementar.” Corrigida interpretação anterior de execução conjunta: entrada agora digitada em tabela, ida fixa +4, uma caixa móvel, volta escolhida e executada em sentido oposto. Comparação registrada em linha própria com negrito/?; mensagens orientam recuperar a entrada original. Atualizadas expressões posteriores e domínio de E5. Documentada discrepância de +4 na regra e +3 no cabeçalho do pedido; adotado +4. E3 preservada. Testados casos correto/incorreto e parada após ida. Atualizados fontes, HTML único, ZIP e backup; ponto de pausa anterior preservado como histórico.


## Registro 023 — versão 0.22 — painel, textos e ficha atrás da máquina

Retirados resumos extras de escolhas e substituída edição redundante por Refazer escolhas. Expressão gerada a partir do plano exibida ao experimentar. Entre etapas elevado. Ordem de desenho alterada para bocais e painéis encobrirem a ficha; deformação por canal afunilado em vez de redução uniforme com sobreposição. Conferido fluxo no navegador. Fontes, HTML único e backup atualizados.


## Registro 024 — versão 0.23 — expressão atualizada ao escolher

Aplicada solicitação de atualizar o painel da volta após cada escolha, mantendo ? quando vazio. Substituída atualização apenas ao executar. Refazer escolhas restaura ?. Próxima discussão: E6. Fontes, HTML independente e backups atualizados.


## Registro 025 — versão 0.24 — piloto E6

Autorizado seguir após esclarecer que a explicação prévia está em HTML local, não publicado. Criado piloto-diario com retomadas E2–E5, autoavaliação e reflexão opcional. Sem persistência, transmissão, gravação ou bloqueio de avanço. Preservada diferença +3/+4. HTML do proponente não recebido nem integrado. Sintaxe verificada; validação visual e didática permanece pendente.


## Registro 026 — versão 0.25 — leitura e visualização em E6

Implementada discussão aprovada: Rio sem setas iniciais, ida em texto e resposta em palavras; comparação após reflexão. Máquina com função formatada, cartões simbólicos retangulares, textos animados pausáveis, exemplo numérico opcional. Conferidas interface e pausa no navegador. Atualizados fontes e backups.


## Registro 027 — versão 0.26 — banco local e correções adiadas

Proponente rejeita substituição da cena original do Rio por imagem simplificada; pede mesma cena de E2. Rejeita explicação oral não gravada. Questiona perda dos detalhes da máquina. Reconhecida simplificação indevida ao redesenhar E6. Solicita documentar e organizar banco de imagens antes de retornar às correções.

Criado banco-imagens/ com catálogo, referências, SVG original do Rio com pedras geradas pelo código de E2 e instantâneos estáticos extraídos da máquina detalhada de E5. Fontes preservados. Nenhum piloto alterado nesta rodada; nenhuma gravação implementada. Pendências explicitadas na especificação e na continuidade. Backup v0.26 inclui banco e arquivos de controle.


## Registro 028 — 24/11/2026 — versão 0.27 — cenário original do Rio em E6

Proponente reitera com captura qual é a cena correta. Substituído o desenho simplificado de E6 pelo SVG original extraído de E2, com as mesmas margens, água, pedras, personagem e tesouro, no estado inicial sem setas/rastro de percurso. Captura preservada no banco. Não alteradas as demais retomadas. Recuperar detalhes da máquina e retirar opção oral permanecem pendentes. Sintaxe verificada; HTML e backup regenerados.


## Registro 029 — 24/11/2026 — versão 0.28 — rótulos da composição em E6

Na aba Composição, ida alterada para y = n/2 + 4 e volta para n = 2(y − 4), conforme solicitação. Demais conteúdos preservados. HTML único, ZIP e recuperação atualizados.


## Registro 030 — 24/11/2026 — versão 0.29 — piloto integrado até E6

Compilados E2–E6 com apresentação provisória E1, menu de etapas, avanço livre e retenção temporária por quadros. HTML autossuficiente e fontes de montagem entregues. Preservadas pendências atuais de E6. Scripts e conteúdos embutidos conferidos; teste de interface integrada ainda pendente. Nenhuma publicação.


## Registro 031 — 24/11/2026 — versão 0.30 — diferença matemática e estudo da atenção

**Determinações:** E7/E8 adiadas até maior consistência em E2–E5. Máquina E5 passa a f(x)=(x+2)/5, soma 2 e divide por 5; inversa multiplica por 5 e subtrai 2. Fita E3 mantém x/2+3. Paleta e hierarquia serão revistas com base no Labirinto Plano do proponente, incluindo o verde.

**Implementado:** cálculos de ida/volta, operações disponíveis, tabela, expressões, instruções, justificativa e exploração da composição em E5; retomada da composição em E6 atualizada para y=(n+2)/5 e n=5y−2. Removidas referências a centímetros da máquina numérica E5. Saída real alimenta a volta; formatação decimal com vírgula, até dez casas, cálculo interno sem arredondamento intermediário. HTMLs independentes e integrado recompilados.

**Estudo entregue:** mapa-atencao-E2-E5.md e edição HTML local para leitura, anotações temporárias e impressão. Registra observação, alvo matemático, caminho de atenção pretendido, riscos e alternativas por momento. Referências: index.html/README locais do Labirinto Plano e sua tela publicada; telas iniciais E2–E4 e ida/volta de E5 inspecionadas. Arquivo .ggb não incorporado nem necessário para extrair a identidade do HTML. Skill Sites utilizada para revisão de hierarquia, legibilidade e responsividade. Não foram copiados cadastro ou envio de dados do app de referência.

**Propostas, não decisões:** paleta exata roxo #4B0082/amarelo #FFD700/laranja #FF6633; verde #1A7F4B como confirmação/chegada, com símbolos ou palavras. Um avanço principal por momento; revisar tamanho dos textos da máquina na volta, concorrência entre Experimentar e Continuar, repetição de medidas em E3 e percepção do ponto de toque em E4. Não aplicada ainda uma mudança global de layout/paleta.

**Validação:** sintaxe JS; teste de percurso com entradas 0,1; 1; 7; 10; 12, retorno correto, expressão atualizada e rejeição de ordem incorreta. Navegador confirmou 7→9→1,8 e 1,8→9→7, negrito e mensagem de recuperação. Mapa inspecionado visualmente. Teste completo em celulares, teclado virtual e estudantes permanece futuro; não confundir mapa proposto com medição de atenção.

**Pendências preservadas:** E6 ainda precisa da máquina detalhada da Fita e retirada da opção oral não gravada. Nenhuma gravação ou publicação. Banco contém instantâneos históricos +4 que não representam a regra vigente de E5; preservados como histórico. Backup v0.30 e somas SHA-256 atualizados.


## Registro 032 — 25/11/2026 — versão 0.31 — nova arte da máquina de E5

Integrado o SVG “Máquina nova.svg” enviado pelo proponente. Original preservado em banco-imagens/ativos/maquina-e5-nova-original.svg. Separados fundo e primeiro plano em machine-art.js; retirada a fórmula fixa x/2+3, os textos rasterizados das operações antigas e a ficha estática. Mantidos motores, tubos, bocais, painéis, esteira e cores da arte. Cortadas apenas margens e área vazia inferior para apresentação responsiva; SVG original permanece integral.

Fórmula de ida (x+2)/5 em fração; volta acompanha as escolhas. Mantidos os rótulos vetoriais originais com ampliação discreta. Operações dinâmicas usam fonte do sistema em negrito; posições das letras calculadas por sua largura real, com ajuste horizontal nos painéis para não reduzir a altura do texto. Fórmula usa fonte serifada local. Nenhuma fonte externa exigida.

Uma ficha numérica dinâmica, sucção e saída em ambos os sentidos, atrás dos bocais/painéis. Trajetória e deformação recalibradas para as coordenadas da nova arte. Quique das letras da operação ativa preservado, assim como movimento reduzido, tabela, feedback e som de acerto. Área da máquina mantém proporção do desenho, evitando faixas amarelas vazias.

Verificação: sintaxe e testes matemáticos da v0.30 preservados; navegação no navegador confirmou ida 7→9→1,8 e volta ×5,−2 recuperando 7. Conferidos primeiro plano e textos, tela de computador e 390×844. Fontes, HTML autossuficiente, integrado, catálogo, documentação e backup v0.31 atualizados. Sem publicação. Outras pendências de hierarquia e E6 continuam em aberto.


## Registro 033 — 25/11/2026 — v0.32 — proporções e cores dos textos da máquina

A pedido do proponente, entrada/entre etapas/saída reduzidos exatamente a 70% da versão anterior (escala vetorial 1,4→0,98). Palavras das operações usam o mesmo corpo de fonte, roxo #681787 e centralização pela largura natural dos caracteres; removida toda compressão/expansão horizontal. Algarismos das operações em laranja escuro #D94A1C, incluindo ida e volta. Equações do painel em peso normal 400. Preservados sucção, letras animadas e demais comportamentos.

A menção (x+5)/2 no pedido de tipografia foi tratada como referência à expressão visual, não mudança matemática: mantém-se a função autorizada (x+2)/5 e a inversa 5x−2. Essa interpretação foi informada ao proponente. Pilotos e arquivos de recuperação sincronizados. Conferência visual no navegador na ida e volta; sintaxe JavaScript válida.


## Registro 034 — 26/11/2026 — v0.33 — layout geral aprovado

Proponente forneceu Ajuda.svg e Sem Som.svg, aprovou organização do cabeçalho e base, navegação simétrica por abas/etapas, Nova como reinício integral, Refazer como limpeza da tentativa e controles contextuais. Esclareceu que HTML feito com Claude trata apenas da animação do Rio; integrar depois do layout geral e E5. A captura orienta a posição dos ícones; prevalece a organização aprovada que conserva só a linha de autoria no cabeçalho.

Implementado em E2–E6: cabeçalho compacto sem códigos de etapa; ícones vetoriais autorais; ajuda mantida; menu por nomes; rodapé único e contextual. Retirado Continuar superior do integrado. Avanço condicionado ao estado de cada atividade; retorno por momentos/abas e depois atividade anterior. Preferência de som em memória compartilhada entre módulos. Frase E5: “Escolha as operações e volte até a entrada.” Uma linha em 390 px. Nova reinicia a atividade; Refazer de E5 preserva entrada, saída e valores da ida.

Sem alteração da matemática, do cenário/animação do Rio ou da arte da máquina E5 nesta rodada. Adaptada apenas apresentação comum e integração dos controles. Retiradas margens vazias da área visual de E2/E3 via proporção do contêiner, sem modificar os desenhos. Ícones originais preservados em layout-geral/assets; recorte apenas de margens transparentes, sem redesenho/recoloração.

Verificado no navegador: telas E2–E6, ajuda, mudança de som e retenção entre atividades, ida/volta de E5, Refazer e avanços/retornos em E3/E4/E6. Testes de regras do Rio, continuidade da Fita e cinco entradas da Máquina passaram. JS válido. Tela 390×844 comporta o percurso; 320×568 pode exigir rolagem. Não foi testado teclado virtual físico. Banco/documentação/fontes/HTMLs/ZIPs/backup v0.33 atualizados. E7/E8 e pendências de conteúdo E6 continuam adiadas.


## Registro 035 — 26/11/2026 — documentação v0.34 — transição Claude/GitHub

Professor solicita documentar o conjunto, atualizar controles e conciliar com Claude, onde revisou layout, etapas e abertura. Decidido adotar GitHub como base; endereço/visibilidade ainda não definidos. Repositórios de 0asilva não retornados pelo conector; não inferir inexistência. Nenhum remoto criado/publicado e código v0.33 preservado.

Criados TRANSICAO-CLAUDE.md e PLANO-EXECUCAO-COMPARTILHADO.md: regras por etapa, histórico de mudanças de funções, visual, animações, arquitetura, fontes/derivados, critérios de aceitação, pendências e fluxo proposto entre IAs. CONTINUIDADE.md substituída por síntese vigente; versão anterior preservada em historico/. Corrigida referência a backup v0.32 não encontrado, cujas mudanças estão na v0.33. E7/E8 seguem adiadas; suas propostas originais foram recapituladas, não implementadas.

Testes existentes Rio/Fita/Máquina copiados para testes/ com caminhos portáveis, executados com sucesso. Nenhuma nova alteração visual ou teste de interface nesta rodada. Manifesto e pacote de recuperação v0.34 produzidos e conferidos. Comparação com Claude ainda depende de seus fontes/decisões. Discussão sobre GPT-5.6 registrada com fontes oficiais e sem promessa de qualidade equivalente ou cotas maiores; recomendado ensaio delimitado com Sol, condicionado à disponibilidade na conta.


## Registro 036 — 26/11/2026 — repositório definido


O professor indicou https://github.com/0ASilva/inversa como repositório do projeto. Consulta confirmou visibilidade pública, branch padrão main e permissão de escrita pelo conector. Referência observada: 4c3deeaf49a7d5fa3ab930271a9396b2e114b4d8. Esta definição substitui a pendência de endereço/visibilidade nos textos anteriores. A integração dos arquivos ainda não foi realizada; preservar o conteúdo remoto e conciliar as revisões Claude antes de fechar a execução.
