# 07. Pendências de conteúdo e design

## P1. Hierarquia visual (lembrete pedido pelo professor)

Fazer um estudo da hierarquia visual dos elementos que o app destaca. Exemplo em E4: as coordenadas e o domínio aparecem, mas sem destaque, embora sejam justamente o que o aluno precisa observar.

**Sugestão de método:** para cada tela, listar o que o aluno precisa **perceber** para avançar e conferir se esses elementos são os de maior peso visual (tamanho, contraste, cor, posição, movimento). Hoje, o que se move (P, P′, o rastro) chama mais atenção que o que explica (coordenadas, domínio).

## P2. Pergunta final da Investigação 2 de E4

**Atual:** "O reflexo é função sobre a imagem de f?"

**Objetivo:** o aluno identificar quando a curva refletida é gráfico de função e, portanto, gráfico da inversa.

**Por que a pergunta pode não mobilizar isso:**
1. Ela chama a curva de "função". O que se pergunta é se a curva **é gráfico de** uma função, e misturar os dois termos pode reforçar a confusão entre função e gráfico.
2. "Imagem de f" é um vocabulário que o aluno talvez ainda não tenha disponível nesse momento.
3. É uma pergunta de sim ou não, feita por função: acerta-se no chute em metade dos casos, e não fica evidência de critério.
4. Ela não aponta para o **critério observável**: para cada x, um único ponto da curva.

**Direções de reformulação** (são para discutir, não estão prontas):
- **Instrumento antes da pergunta:** uma reta vertical arrastável que conta quantos pontos do reflexo ela corta. O critério passa a ser algo que o aluno vê.
- **Pergunta comparativa entre as 4 funções:** "Em quais delas o reflexo é gráfico de uma função?" (múltipla escolha). Isso obriga a explorar todas e produz evidência de critério.
- **Pergunta sobre o contraste** `fn-quad-pos` × `fn-quad-r`: "A regra é a mesma, x²/4. O que mudou para o reflexo deixar de ser gráfico de função?". Ela leva ao domínio sem nomear injetividade.
- **Justificação aberta, curta e opcional:** "Como você decidiu?". A resposta entra no `tr-caderno`.

## P3. E5: domínio da entrada e números negativos

- **Hoje:** a entrada está limitada a (0, 12], e o aluno não é informado disso.
- **Decisão:** permitir negativos.
- **Antes de liberar:** verificar o conjunto de operações disponíveis. Se houver raiz quadrada, divisão pela entrada ou algo semelhante, entradas negativas ou nulas quebram a volta. Isso pode ser **intencional**, como mais uma situação de referência, ou precisa ser bloqueado e explicado.
- **Em qualquer caso:** o intervalo permitido tem de estar **escrito na tela**.

## P4. E5: botão "refazer escolhas" piscando diante do erro

Pode implementar, com três cuidados:
- o piscar **não pode ser o único sinal**: deve vir acompanhado de uma mensagem de texto, por acessibilidade e para leitores de tela;
- no máximo 3 piscadas por segundo, parando sozinho depois de 2 ou 3 ciclos, por segurança para pessoas fotossensíveis;
- sem piscar quando o sistema pede movimento reduzido (`prefers-reduced-motion`): nesse caso, apenas o destaque fixo.

## P5. E7 e E8: observações para quando voltarem à pauta

Ficam fora da v1 por decisão do professor. Registro aqui o que vale considerar quando voltarem:

1. **Composição em E7 × a escolha feita em E3.** O quadro-resumo de E3 apresenta a composição **sem nomeá-la**, de propósito. A quarta pergunta de E7 ("como a composição ajuda a justificar…") exige mobilizar f(f⁻¹(x)) = x, que é um salto de formalização. Se E7 é o lugar onde a composição ganha nome, isso precisa ser uma decisão explícita, e E7 precisa de um andaime que E3 não deu.
2. **E7 depende do professor.** O esboço prevê "perguntas e contrapontos do professor". Isso descreve uma **discussão coletiva mediada**, mais do que uma etapa individual no app. Uma alternativa é transformar E7 num roteiro de discussão para o professor, com o app apenas projetando os casos de E4.
3. **A restrição de domínio em E7 já está ilustrada em E4** (`fn-quad-pos` × `fn-quad-r`). Em E7 caberia justificá-la, não descobri-la.
4. **E8, f(x) = 3 − 2x, é uma boa transferência.** A leitura da ordem das operações não é imediata (multiplica por −2 e depois soma 3), e o coeficiente negativo testa se o aluno inverte também o sinal. Ela pressupõe que E5 tenha liberado entradas negativas (P3).
5. **A parte metacognitiva de E8 repete outras etapas.** Comparar com a previsão inicial, escolher uma evidência e registrar uma dúvida sobrepõem-se ao `et-diario` e à retomada da aposta da abertura (ver O4).

## P6. Decisões de organização em aberto

| # | Decisão | Opções | Observação |
|---|---|---|---|
| O1 | ordem de E4 (gráfico) e E5 (máquinas) | manter / trocar | E5 é operatória como E3; colocá-la antes do gráfico fecharia o bloco numérico. Manter faz sentido se E5 foi pensada como retorno ou consolidação depois do gráfico. Depende da intenção original |
| O2 | ~~adotar o `tr-caderno`~~ | **decidido: adotado** (26/11/2026) | ver `03` |
| O3 | partes de `et-rio` e `et-maquinas` | confirmar pelas telas reais | necessário para o M0 |
| O4 | revisar o E6 (hoje enfadonho, segundo o professor) e definir quem faz o fechamento: retomar a aposta, escolher uma evidência, registrar uma dúvida | (A) tudo no `et-diario`, e E8 fica só com a transferência; (B) o fechamento vira um módulo final próprio, sempre o último liberado, e o diário fica só com os rastros | **Recomendação para a v1: (A)**, porque o E6 já existe e E7 e E8 estão fora. (B) só faz sentido quando E8 voltar, porque o fechamento deve vir **depois** da transferência |
