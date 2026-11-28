# 07. Pendências de conteúdo e design

## P1. Hierarquia visual (lembrete pedido pelo professor)

Fazer um estudo da hierarquia visual dos elementos que o app destaca. Exemplo em E4: as coordenadas e o domínio aparecem, mas sem destaque, embora sejam justamente o que o aluno precisa observar.

**Sugestão de método:** para cada tela, listar o que o aluno precisa **perceber** para avançar e conferir se esses elementos são os de maior peso visual (tamanho, contraste, cor, posição, movimento). Hoje, o que se move (P, P′, o rastro) chama mais atenção que o que explica (coordenadas, domínio).

**Já decidido (layout comum v0.33):** cabeçalho compacto com a linha de autoria, sem título duplicado e sem códigos E1/E2; menu de barras amarelas; ajuda e som em ícones proporcionais. Botões na base, nesta ordem: Voltar, ação contextual, Nova, Refazer, Próximo. Amarelo como cor principal das áreas gráficas, roxo para estrutura e textos, laranja com texto branco para a ação destacada, bege como fundo de apoio. A paleta ainda não está uniformizada no código.

**Insumos:** o mapa de atenção E2–E5 do ChatGPT (`outputs/mapa-atencao-E2-E5.md`), que reúne propostas não aprovadas, e as referências autorais https://0asilva.github.io/labirinto-plano/ e https://0asilva.github.io/descubra-com-o-grafico/. Ponto de partida: os alunos pouco leem espontaneamente, então o texto que importa precisa de peso visual e estar ligado à ação.

## P2. Pergunta final da Investigação 2 de E4

**Atual:** "O reflexo é função sobre a imagem de f?"

**Objetivo:** o aluno identificar quando a curva refletida é gráfico de função e, portanto, gráfico da inversa.

**Por que a pergunta pode não mobilizar isso:**
1. Ela chama a curva de "função". O que se pergunta é se a curva **é gráfico de** uma função, e misturar os dois termos pode reforçar a confusão entre função e gráfico.
2. "Imagem de f" é um vocabulário que o aluno talvez ainda não tenha disponível nesse momento.
3. É uma pergunta de sim ou não, feita por função: acerta-se no chute em metade dos casos, e não fica evidência de critério.
4. Ela não aponta para o **critério observável**: para cada x, um único ponto da curva.

**Direções de reformulação** (são para discutir, não estão prontas):
- **Instrumento antes da pergunta:** uma reta vertical arrastável que conta quantos pontos do reflexo ela corta. O critério passa a ser algo que o aluno vê. Outros instrumentos candidatos, da especificação do ChatGPT: limpar o rastro, projeções, pausa na varredura e revelação opcional da relação completa.
- **Pergunta comparativa entre as 4 funções:** "Em quais delas o reflexo é gráfico de uma função?" (múltipla escolha). Isso obriga a explorar todas e produz evidência de critério.
- **Pergunta sobre o contraste** `fn-quad-pos` × `fn-quad-r`: "A regra é a mesma, x²/4. O que mudou para o reflexo deixar de ser gráfico de função?". Ela leva ao domínio sem nomear injetividade.
- **Justificação aberta, curta e opcional:** "Como você decidiu?". A resposta entra no `tr-caderno`.

## P3. E5: domínio da entrada e números negativos

- **Hoje:** a entrada está limitada a (0, 12], e o aluno não é informado disso.
- **Decisão:** permitir negativos.
- **Antes de liberar:** verificar o conjunto de operações disponíveis. Se houver raiz quadrada, divisão pela entrada ou algo semelhante, entradas negativas ou nulas quebram a volta. Isso pode ser **intencional**, como mais uma situação de referência, ou precisa ser bloqueado e explicado.
- **Em qualquer caso:** o intervalo permitido tem de estar **escrito na tela**.
- **Com a função atual**, f(x) = (x + 2)/5, números negativos não quebram a volta, porque não há raiz nem divisão pela entrada. Falta conferir o cardápio de operações oferecidas na volta e o tratamento dos decimais.

## P4. E5: botão "refazer escolhas" piscando diante do erro

Pode implementar, com três cuidados:
- o piscar **não pode ser o único sinal**: deve vir acompanhado de uma mensagem de texto, por acessibilidade e para leitores de tela;
- no máximo 3 piscadas por segundo, parando sozinho depois de 2 ou 3 ciclos, por segurança para pessoas fotossensíveis;
- sem piscar quando o sistema pede movimento reduzido (`prefers-reduced-motion`): nesse caso, apenas o destaque fixo.

## P5. E7 e E8: observações para quando voltarem à pauta

Ficam fora da v1 por decisão do professor. Registro aqui o que vale considerar quando voltarem:

1. **Como o E5 justifica a composição.** A composição já está na v1: o E5 trabalha a composição da ida com a volta e a identidade que ela produz (momento Relacionar), e o E6 a retoma. O que fica em aberto é a **justificação**. Hoje a evidência é indutiva (algumas entradas que dão certo), e o app afirma que "a composição recupera toda entrada do domínio, não apenas os exemplos", em vez de o aluno chegar a isso. Com duas entradas (P7), a base indutiva fica ainda menor, então o peso da justificação recai no Explicar (por exemplo, simplificar 5·((x + 2)/5) − 2). Conferir também se as duas composições (volta depois da ida e ida depois da volta) aparecem. O quadro-resumo de E3, que mostra a composição sem nomeá-la, continua como está.
2. **E7 depende do professor.** O esboço prevê "perguntas e contrapontos do professor". Isso descreve uma **discussão coletiva mediada**, mais do que uma etapa individual no app. Uma alternativa é transformar E7 num roteiro de discussão para o professor, com o app apenas projetando os casos de E4.
3. **A restrição de domínio em E7 já está ilustrada em E4** (`fn-quad-pos` × `fn-quad-r`). Em E7 caberia justificá-la, não descobri-la.
4. **E8, f(x) = 3 − 2x, é uma boa transferência.** A leitura da ordem das operações não é imediata (multiplica por −2 e depois soma 3), e o coeficiente negativo testa se o aluno inverte também o sinal. Ela pressupõe que E5 tenha liberado entradas negativas (P3).
5. **A parte metacognitiva de E8 repete outras etapas.** Comparar com a previsão inicial, escolher uma evidência e registrar uma dúvida sobrepõem-se ao `et-diario` e à retomada da aposta da abertura (ver O4).

## P6. Decisões de organização em aberto

| # | Decisão | Opções | Observação |
|---|---|---|---|
| O1 | ordem de E4 (gráfico) e E5 (máquinas) | manter / trocar | E5 é operatória como E3; colocá-la antes do gráfico fecharia o bloco numérico. Manter faz sentido se E5 foi pensada como retorno ou consolidação depois do gráfico. **A intenção original** (especificação do ChatGPT) era essa: E5 como "Composição e inversa", depois do gráfico |
| O2 | ~~adotar o `tr-caderno`~~ | **decidido: adotado** (26/11/2026) | ver `03` |
| O3 | partes de `et-rio` e `et-maquinas` | **propostas em `03`** a partir do piloto v0.33; conferir nas telas (P9) | necessário para o M0 |
| O4 | revisar o E6 (hoje enfadonho, segundo o professor) e definir quem faz o fechamento: retomar a aposta, escolher uma evidência, registrar uma dúvida | (A) tudo no `et-diario`, e E8 fica só com a transferência; (B) o fechamento vira um módulo final próprio, sempre o último liberado, e o diário fica só com os rastros | **Recomendação para a v1: (A)**, porque o E6 já existe e E7 e E8 estão fora. (B) só faz sentido quando E8 voltar, porque o fechamento deve vir **depois** da transferência |

## P7. E5: duas entradas e ciclo automático

- **Decidido:** o E5 passa a usar **duas** entradas, registradas na mesma tabela, sem mudança de página e sem o botão "Nova". Terminado o ciclo com um número, o app pede outro automaticamente.
- **Em aberto:** em que momento "enxugar" a experiência. O professor quer decidir isso com o app funcionando, tendo como referência a atividade Working Backwards do Desmos/Amplify (https://classroom.amplify.com/activity/6835ca2906c057e7a4280112).
- **Cuidado:** ver P5.1. Menos entradas pedem mais apoio à justificação no Explicar.

## P8. Retomar a arquitetura: app instalável e dados na planilha

O professor manteve Planilha + Apps Script para a v1, mas quer retomar a arquitetura para que o app funcione como os outros que já construiu:
- **instalável**, para usar sem internet;
- **uso fora da sala de aula**, inclusive sem a orientação do professor;
- **em sala**, acesso só ao que o professor liberou para a turma;
- **sem login**, com o professor recebendo na planilha o progresso, a aposta e o caderno.

**O que precisa ser resolvido antes de implementar:**
1. **Isso reverte parte da decisão #4 de `08`** ("nenhum dado de aluno no servidor") e o item "fora da v1" de `01`. Precisa de uma decisão nova e explícita.
2. **Identificação sem login:** sem nome, o professor recebe cadernos anônimos, que servem para ver a turma mas não para acompanhar um aluno. Com nome, passa a haver dado pessoal de menores, o que exige tratamento conforme a LGPD e, se houver pesquisa, o CEP do IFRJ.
3. **O que o aluno vê fora da aula, sem código de turma:** tudo, um percurso padrão, ou a última configuração da sua turma.
4. **Envio com rede ruim:** os dados ficam no aparelho e são enviados quando houver conexão, o que exige escrita na API (hoje ela só lê) e um teste de carga novo.
5. **Computador compartilhado:** a opção "Começar do zero" (ver `02`) vale já para a v1.

## P9. E2: conferir as telas

A descrição do E2 em `00` foi atualizada a partir dos textos do código v0.33 (plano de ida visível durante a volta, comparação dos dois planos no final). Conferir nas telas e, com isso, fechar as partes de `et-rio` (O3). O professor considera esse ponto já resolvido no piloto.

## P10. Integrações e textos pendentes do piloto

- **E2:** ~~integrar a nova animação do Rio~~ feito em 27/11/2026 (decisão 27): só a cena foi trocada. Falta conferir no celular, pelo link do GitHub Pages, a velocidade dos saltos e o peso das imagens (cerca de 2,6 MB).
- **E3:** reescrever as instruções do momento Desfazer para dizer que se trata de reconstruir o comprimento de entrada.
- **E3, E4 e E6:** ~~integrar as novas imagens~~ feito em 27/11/2026 (decisão 28). A imagem nova é do E3 (máquina de fitas), não do E6; o E6 retoma as imagens novas de E2 a E5.
- **E3:** ~~os textos de ajuda e de retorno ainda falam em cortar e acrescentar~~ feito em 28/11/2026 (decisão 41): passam a DIVIDIR e SOMAR; na volta, SUBTRAIR e MULTIPLICAR POR 2. Falta o professor confirmar se "Dobrar" deve continuar no lugar de "Multiplicar por 2" e se a faixa do controle continua de 2 a 12 cm.
- **E4 e E6:** Receber o HTML com a explicação geométrica autoral do professor (feito antes com GeoGebra), que pode entrar no E6.
- **E5:** nova arte do Canva, ainda a revisar. Mecânica refeita em 27/11/2026 (decisão 30): o texto do segundo número e o nome do momento ("Investigar") aguardam a aprovação do professor.
- **E6:** retirar a opção oral não gravada. (A máquina da Fita no E6 já foi redesenhada com o visual novo.)
- **E6 em celular pequeno (320 px):** o enunciado do Rio fica parcialmente coberto pela imagem. O defeito já existia no piloto v0.33.
- **Acessibilidade:** faltam testes com leitores de tela e uma alternativa não visual completa (ver `05`, T15).

## P11. Versão para computador: calculadora para números irracionais

No E5 o estudante pode digitar qualquer número real que caiba no teclado: inteiros, decimais, negativos e frações como 1/3. Um irracional só entra como aproximação decimal. A versão para computador deve ter uma calculadora (por exemplo, com √ e π) para experimentar valores irracionais. Ponto a decidir: a tabela mostra até seis casas decimais e marca com "…" o que foi cortado. Isso é suficiente para o estudante perceber que a volta recupera a entrada, ou a calculadora deveria trabalhar com a forma exata (√2, π)?
