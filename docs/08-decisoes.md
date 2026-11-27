# 08. Registro de decisões

Toda decisão entra aqui **antes** de virar código. Quem decide é sempre o professor. As IAs (Claude e ChatGPT) propõem e criticam.

Formato: data · decisão · origem da proposta · motivo · arquivos afetados.

| # | Data | Decisão | Origem | Motivo | Afeta |
|---|---|---|---|---|---|
| 1 | 25/11/2026 | A abertura é uma galeria de situações curtas (≤ 45 s), cada uma terminando numa aposta registrada | brainstorm Claude; escolha do professor | captar a atenção e plantar uma conjectura que será retomada | 06 |
| 2 | 25/11/2026 | A existência da inversa não é o eixo do app; a suíte é escolhida turma a turma pelo professor | professor | cada turma é uma turma | todos |
| 3 | 25/11/2026 | A cifra fica fora da abertura e vira um item futuro da suíte; as conversões foram descartadas; o espelho vira teaser no gráfico | professor | robustez da proposta / clichê | 03, 06 |
| 4 | 25/11/2026 | v1: Planilha Google + Apps Script; a planilha é o painel do professor; acesso por código e QR; nenhum dado de aluno no servidor | proposta Claude; aprovada | pilha já testada; evita a autenticação do professor | 01, 02 |
| 5 | 26/11/2026 | Ids semânticos e estáveis; a ordem fica separada, no catálogo | proposta Claude | permitir reordenar sem migração | 03, 04 |
| 6 | 26/11/2026 | A abertura do GPS e o `mod-x2` foram eliminados | proposta Claude | duplicavam o E2 e a Investigação 2 do E4 | 03, 06 |
| 7 | 26/11/2026 | E7 e E8 ficam fora da v1 | professor | consolidar antes o percurso E2–E5 | 00, 03 |
| 8 | 26/11/2026 | Caderno de conjecturas (`tr-caderno`) adotado; o E6 será revisto | proposta Claude; escolha do professor | ajustar a justificação-como-processo ao app; aliviar o E6 | 03, 04, 07 |
| 9 | 26/11/2026 | A #4 fica mantida para a v1 (Planilha + Apps Script; a planilha é o painel), apesar de o plano do ChatGPT descrever um app sem backend. A arquitetura será retomada: app instalável, uso sem internet e fora da aula, envio de progresso, aposta e caderno para a planilha, sem login | professor, na conciliação Claude × ChatGPT | consistência com os outros apps do professor | 01, 02, 07 (P8) |
| 10 | 26/11/2026 | Liberação turma a turma por código e QR (#2, #4) coexistindo com um menu de navegação livre entre os itens liberados | conciliação; escolha do professor | manter o controle docente sem perder a consulta livre do piloto | 01, 02, 05 |
| 11 | 26/11/2026 | Progresso, aposta e caderno salvos no navegador do aluno (`localStorage`), e não só em memória | posição Claude; escolha do professor | o caderno (#8) e a retomada da aposta (#1) precisam sobreviver ao recarregamento | 01, 02 |
| 12 | 26/11/2026 | E2: mantida a ênfase em ações contrárias na ordem contrária. No jogo há um só caminho de pedras, e a única volta é descer 5 e ir 3 para a esquerda | professor | o jogo impõe a ordem | 00 |
| 13 | 26/11/2026 | A composição e a identidade já estão na v1, no E5; a pendência passa a ser como o E5 as justifica. O E5 terá duas entradas na mesma tabela, com ciclo automático e sem o botão "Nova"; o momento de "enxugar" será decidido com o app funcionando, tendo o Working Backwards do Desmos como referência | professor, sobre proposta de conciliação | o E5 real já trabalha a composição | 00, 03, 07 (P5.1, P7) |
| 14 | 26/11/2026 | Mantidos os quatro momentos de Ponte, Brocardo e Oliveira como estrutura; a comunicação e a discussão coletiva ficam com o professor, em sala, fora do app | professor, sobre crítica do ChatGPT | o app é individual e não envia dados | 00 |
| 15 | 26/11/2026 | O contrato de módulo é um protocolo de mensagens sobre a casca com iframes do piloto v0.33; as etapas são adaptadas, não reescritas | professor, sobre proposta de conciliação | o conteúdo já está implementado; evitar regressões | 02, 04 |
| 16 | 26/11/2026 | Só o Claude Code escreve código, por branch e pull request por tarefa; o ChatGPT revisa; o professor não resolve conflitos de código e não quer aprender programação | professor | uma única implementação; o professor aprova pelo comportamento | 04, 09 |
| 17 | 26/11/2026 | Na v1, cada aluno acessa uma vez, em aula; a divisão em três encontros fica como sugestão. O uso fora da aula deve ser possível, inclusive sem a orientação do professor | professor | — | 01, 07 (P8) |
| 18 | 26/11/2026 | A descrição das telas do E2 segue o piloto v0.33 (controles esquerda, direita, subir, descer; plano de ida visível durante a volta), a conferir nas telas | professor | o piloto já resolve esse ponto | 00, 07 (P9) |
| 19 | 26/11/2026 | E3: f(n) = n/2 + 3; a saída real alimenta a inversão. E5: f(x) = (x + 2)/5, volta 5y − 2; momentos Montar, Investigar, Explicar, Relacionar; uma ficha; Refazer preserva a ida | registrada pelo ChatGPT; confirmada pelo professor | — | 00, 03 |
| 20 | 26/11/2026 | E4: notação P e P′; animação por translação sem rotação; erro numérico reabre a experiência; erro simbólico retoma sem marcas; rastro só após a conjectura correta; alternativas em botões | registrada pelo ChatGPT; confirmada pelo professor | — | 00, 03, 05 |
| 21 | 26/11/2026 | Princípios de interação: erro como retomada, sem penalidade, vidas ou cronômetro; acerto com celebração e som, respeitando som desligado e movimento reduzido; leitura apoiada pela ação | registrada pelo ChatGPT; confirmada pelo professor | os alunos pouco leem espontaneamente | 00 |
| 22 | 26/11/2026 | Layout comum v0.33: cabeçalho compacto sem códigos E1/E2; botões na base (Voltar, ação, Nova, Refazer, Próximo; o E5 deixa de ter Nova, ver #13); amarelo, roxo e laranja; usar só os ativos autorais | registrada pelo ChatGPT; confirmada pelo professor | identidade dos apps do professor | 03, 07 (P1) |
| 23 | 26/11/2026 | Hospedagem no GitHub do professor, repositório `0ASilva/inversa` (público) | professor | — | 05 (D1), 09 |
| 24 | 26/11/2026 | Todos os acréscimos do plano do ChatGPT (grupo 2 da conciliação) entram em `docs/` | professor | — | todos |
