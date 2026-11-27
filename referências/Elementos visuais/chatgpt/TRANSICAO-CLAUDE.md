# Projeto Inversa — transição para trabalho com Claude e Codex

Data: 26/11/2026. Documentação v0.34; código do piloto permanece v0.33.
Autor e responsável pelas decisões pedagógicas: André Silva, IFRJ.

## 1. Para começar sem perder contexto

Este documento consolida o estado produzido no Codex. Não é uma transcrição integral das conversas. O histórico detalhado está em `log-planejamento.md` e `especificacao-funcoes-inversas.md`. As revisões de abertura, etapas e layout realizadas posteriormente com Claude **ainda não foram recebidas nem conciliadas aqui**. Não considerar esta versão superior a essas revisões: comparar ambas com o professor antes de fechar o projeto de execução.

Ler nesta ordem: `CONTINUIDADE.md`, este documento, `PLANO-EXECUCAO-COMPARTILHADO.md`, especificação e log quando precisar do fundamento de uma decisão. Abrir `piloto-completo-ate-e6.html` para experimentar. Editar os fontes modulares, não os HTMLs gerados.

Decisões explícitas atuais do professor prevalecem sobre propostas antigas. D = decisão; P = proposta para discussão; A = questão aberta. Presença no piloto não significa aprovação definitiva. O professor não quer aprender programação: as IAs devem executar, testar, documentar e apresentar resultados concretos para sua avaliação pedagógica.

## 2. Propósito e limites aprovados

Ensino investigativo de função inversa: experimentar um processo, desfazê-lo, formular e testar conjecturas, justificar e comunicar. Não reduzir a investigação a acertar alternativas. Ação participativa, resposta correta e compreensão são evidências diferentes.

D: celular prioritário, computador compatível; português; sem login, cadastro ou registro persistente de estudantes nesta fase. Não enviar respostas a servidores. Estado temporário em memória. Hospedagem futura no GitHub do professor. Agora foi decidido usar um repositório compartilhado como base do trabalho; endereço e visibilidade ainda não definidos. Nenhum repositório remoto ou publicação foi criado nesta rodada.

D: erro tratado como oportunidade de retomada; sem penalidade, vidas ou cronômetro. Acertos/sucessos com celebração visual e som, respeitando som desligado e movimento reduzido. Leitura deve ser apoiada pela ação e visualização: o professor relata que seus estudantes pouco recorrem espontaneamente à leitura. Não eliminar texto, mas torná-lo necessário e acessível no percurso.

## 3. Percurso existente

### E1 — Apresentação

Estrutura inicial de apresentação e previsão sobre fazer/desfazer; exemplos e organização eram provisórios. O integrado possui abertura provisória. A nova abertura concebida com Claude deve ser recebida antes de consolidar esta parte.

### E2 — Rio / Inversão

D: personagem atravessa pedras até o tesouro; o estudante descobre e planeja tanto ida quanto volta. Caminho atual: 3 para direita, 5 para cima; retorno exige 5 para baixo, 3 para esquerda. A geometria do caminho torna a ordem relevante. Não confundir com afirmar que quaisquer translações livres exigem essa ordem.

Controles na ordem esq, dir, sobe, desce; quantidade escolhida após direção; barra de comandos permite tocar para alterar quantidade, direção ou excluir antes de Ir. Pares horizontais e verticais possuem apoio cromático, mas direção também é indicada por símbolo/texto. Comandos são executados com animação e feedback neutro em tentativa bloqueada. Refazer permite rever plano.

A tranca 3D com canais, giros e níveis foi discutida como alternativa futura, sem implementação. Rio foi escolhido pela clareza e viabilidade visual. O cenário original está em `banco-imagens/ativos/rio-e2-cena-original.svg`. Claude produziu outra animação do Rio; HTML não recebido aqui. Preservar regras ao integrá-la.

### E3 — Fita / Invertendo com Álgebra

D: comprimento em centímetros, sem escala física real; cortar ao meio, reservar metade e acrescentar 3 cm. Função f(n)=n/2+3; inversa n=2(y−3). Números ímpares produzem meios centímetros. Não trocar esta função pela de E5.

Momentos atuais: Experimentar, Representar, Desfazer, Generalizar. O estudante testa comprimentos; a saída real de sua experiência alimenta a tarefa de retorno. Não substituir por número fixo. A reserva da outra metade ajuda a compreender o corte. Articular ação, estados intermediários e álgebra. A palavra Desfazer gerou ambiguidade com desfazer a última ação de interface; instruções devem explicitar reconstrução da entrada.

### E4 — Laboratório gráfico

D: P e P', nunca Q como nome do simétrico. A: preparação geométrica participativa em duas experiências; marcar o ponto é participação, não prova de conhecimento prévio. B: pergunta numérica primeiro; depois conjectura (a,b) → (b,a). Alternativas visíveis em botões, não seletor suspenso. Acerto simbólico libera construção por rastro e investigação de existência de inversa.

Erro numérico reabre experiência geométrica para marcar o simétrico. Erro simbólico faz retomada automática com eixos sem marcas/números, mostrando apenas coordenadas simbólicas. Não concluir que um acerto isolado atesta compreensão.

Animação precisa ser preservada: O é ponto médio de PP', na reta y=x; A e B são pontos médios de OP e OP'. Todos esses auxiliares ficam invisíveis e sem rastro. Aparece OP; sua cópia translada mantendo orientação, pelo vetor AB', enquanto B' percorre o semicírculo de A a B com centro O. A cópia termina sobre OP'. **O segmento não gira.** A parametrização completa está na especificação.

Depois, explorar pontos móveis/rastro, simetria e o problema de uma relação inversa não ser função; parábola completa versus domínio restrito. Professor possui explicação geométrica guiada, produzida anteriormente com IA e GeoGebra, guardada em HTML local não publicado: ainda não recebida. Pode integrar E6, não alegar já incorporada.

### E5 — Máquinas conectadas / Composição

D vigente: f(x)=(x+2)/5, isto é, soma 2 e divide por 5. Volta correta: multiplica por 5, subtrai 2; g(y)=5y−2. Histórico x/2+3 e depois x/2+4 foi superado em E5. A menção isolada (x+5)/2 em pedido tipográfico não alterou a regra.

Momentos atuais: Montar, Investigar, Explicar, Relacionar. Ida e volta separadas. Na ida o estudante informa entrada; operações são fixas. Tabela: x, x+2, (x+2)/5. Uma única ficha laranja percorre entrada, entre etapas e saída, exibindo cada valor. Na volta seleciona operações e usa a saída efetivamente obtida. A primeira operação de retorno ocupa estação direita e a segunda a esquerda. Expressão da volta atualiza conforme escolhas, inclusive incorretas. Valores coincidentes na tabela em negrito; divergentes como interrogação, convidando à revisão.

Nova reinicia atividade; Refazer apaga tentativa de operações preservando referência da ida. Investigar pede três entradas distintas bem-sucedidas; Relacionar explora identidade. A implementação e a compreensão das duas composições devem ser novamente conferidas na conciliação: não supor que experimentar exemplos substitui justificativa geral.

Arte: SVG original do professor preservado no banco, camadas em `piloto-composicao/machine-art.js`, carregado antes de app.js. Ficha passa atrás dos bocais/painéis; sucção deforma sua silhueta como atravessando um gargalo imaginário. Letras da operação ativa quicam, com alternativa de movimento reduzido. Não sobrepor ficha ao primeiro plano. Rótulos entrada/entre etapas/saída reduzidos a 70% da versão anterior; palavras das operações roxas, mesmo corpo e centralizadas sem deformação horizontal; números laranja escuro; fórmulas sem negrito. Nova arte de E5 no Canva ainda requer revisão específica.

### E6 — Diário / Retomadas

Piloto possui Rio, Fita, Reflexão e Composição, com Recordar, Olhar para aprendizagem e Explicar. Reflexão escrita não recebe julgamento automático de certo/errado.

Rio usa a mesma cena de E2, sem setas que entreguem a ordem de retorno inicialmente. Fita usa registro simbólico x, x/2 e x/2+3; cartões podem ser retangulares; textos das operações animados, apoio numérico opcional. Composição acompanha E5: y=(n+2)/5 e n=5y−2.

Pendências conhecidas: recuperar detalhes visuais da máquina da Fita; retirar opção oral não gravada rejeitada pelo professor. Não implementar gravação por inferência. A explicação geométrica autoral continua aguardando HTML. Esta etapa não está finalizada.

### E7 e E8 — adiadas

D: deixadas fora até maior consistência em E2–E5. P original E7: justificar troca de coordenadas, discutir caso sem inversa global e restrição do domínio, relacionar gráfico/álgebra/composição. P original E8: transferir para caso novo (exemplo provisório f(x)=3−2x), comparar com previsão inicial, autoavaliar com evidência e formular dúvida. Sem pilotos. Rever distribuição após ampliação de E6 e propostas do Claude.

## 4. Identidade e hierarquia visual

Referências autorais: https://0asilva.github.io/labirinto-plano/ e https://0asilva.github.io/descubra-com-o-grafico/. O amarelo é principal nas áreas gráficas; roxo para estrutura/textos; laranja com texto/ícones brancos para ação destacada. Bege é fundo de apoio. Verde existe no Labirinto e foi considerado para destaques, mas nem toda proposta do mapa de atenção foi aprovada.

Captura do gráfico orientou amarelo #fad404. Paleta estudada do Labirinto inclui #FFD700, #4B0082, #FF6633, #D94A1C e #1A7F4B. O código tem variações locais; não declarar paleta já uniformizada. Fontes sistêmicas e fórmulas serifadas no piloto; conferir fontes reais dos SVGs e substituições antes de prometer fidelidade tipográfica.

Layout comum v0.33 aprovado: cabeçalho compacto com linha de autoria, sem duplicação de título e sem E1/E2 etc.; menu de barras amarelas; ajuda e som em ícones proporcionais; som desligado com barra. Abas internas preservadas. Botões na base, nesta ordem: Voltar, ação contextual (Experimentar quando aplicável), Nova, Refazer, Próximo. Próximo libera próxima aba ou atividade conforme estado; Voltar retorna aba anterior ou atividade anterior. Nova reinicia integralmente, Refazer limpa tentativa. Frase de E5: “Escolha as operações e volte até a entrada.”

Usar exatamente os ativos fornecidos, sem redesenhar ou recolorir ícones. Arquivos em `layout-geral/assets`; originais preservados. Canva: https://canva.link/12gjxs32qw9xcov (layout) e https://canva.link/dxnyv8mz0968f7h (página 1 layout, 2 máquina E5, 7 gráfico, 10 fita). Não pressupor que todas essas páginas já foram integradas.

Meta: realizar cada momento no celular sem rolar. Limite atual: 320×568 pode rolar para preservar legibilidade; 390×844 conferido em navegador. Não diminuir texto/alvos excessivamente para cumprir a meta. Teclado virtual e dispositivos reais ainda precisam de teste.

## 5. Fundamentos e acessibilidade

Ponte orienta exploração, conjectura, testes, justificação e comunicação como movimentos que podem se repetir, não sequência rígida de páginas. CAST/DUA orienta engajamento, representação e ação/expressão: oferecer formas de participar e compreender sem abandonar o objetivo matemático. Jogos e animações não garantem DUA por si só. Há botões nativos, apoio textual, pausa/movimento reduzido e controle de som; faltam testes completos com tecnologias assistivas e alternativa não visual integral. Não declarar certificação de acessibilidade.

Referências e limites de consulta preservados na especificação: Ponte (2006), “Explorar e investigar em matemática”; https://udlguidelines.cast.org/ ; GeoGebra https://www.geogebra.org/m/fZZqFCDS ; Desmos/Amplify Working Backwards https://classroom.amplify.com/activity/6835ca2906c057e7a4280112 ; guias de acessibilidade Desmos. Não foram copiados ativos do Desmos como arte do aplicativo. A obra de Ponte/Brocardo/Oliveira ainda precisa de edição/paginação conferidas antes de publicação acadêmica.

## 6. Arquitetura, inventário e reprodução

Aplicação estática HTML/CSS/JavaScript, sem backend ou dependência obrigatória de GeoGebra/Desmos. Pilotos modulares: `piloto-rio/` (engine.js), `piloto-fita/` (model.js), `piloto-laboratorio/`, `piloto-composicao/` (machine-art.js), `piloto-diario/`. Cada um tem index.html, app.js, style.css, áudio e layout. `layout-geral/` guarda fontes comuns; cópias existem nos módulos e precisam ser sincronizadas ao alterar o comum.

`piloto-integrado/shell.html` é a casca; `build.py` compila com `etapas/`; iframes srcdoc carregados sob demanda preservam estado em memória. Mensagens entre quadros conferem remetente; som compartilhado sem persistência. `piloto-*.html`, integrado/index.html e etapas/e*.html são derivados. `prototipo-e4/` é histórico, não fonte vigente do laboratório.

A partir da raiz que contém outputs, executar `python3 outputs/manutencao/recompilar-pilotos.py`. Node é usado nas verificações, não exigido do estudante. Testes portáveis em `outputs/testes/`: executar cada .cjs com Node. Estes testes verificam regras e continuidade matemática, não substituem navegação ou avaliação didática. `banco-imagens/` contém catálogo e originais; snapshots antigos da máquina com +4 são históricos. `referencias-visuais/` guarda capturas/paleta. `mapa-atencao-E2-E5.md` e .html registram estudo, não aprovação automática.

## 7. Validação realizada e riscos restantes

Na v0.33: sintaxe JS, regras do Rio, continuidade da Fita e cinco entradas da Máquina; ida 7→9→1,8 e volta correta recuperando 7; ordem errada não valida; controles Nova/Refazer, navegação, ajuda e sincronização de som conferidos. Verificações visuais em navegador, não ensaio com turma. Nesta v0.34 só documentação/empacotamento e testes existentes foram executados; nenhuma nova validação visual.

Pendências: conciliar versões do Claude, abertura e etapas; testes em celulares reais e teclado virtual; leitores de tela; revisão de decimais/limites de entrada; revisão pedagógica e das duas composições; E6 incompleta; arte E5 e animação Rio posteriores. Não declarar o projeto final pronto para publicação.

## 8. Orientação para Claude

Receba este pacote como base recuperável, não como ordem para descartar o que já construímos aí. Apresente comparação entre suas revisões e este estado: manter, substituir com aprovação já dada, conflito a decidir e pendência. Preserve ativos autorais, matemática vigente e testes. Proponha um plano único de execução e só então implemente mudanças por partes. Ao concluir cada parte, atualize log/continuidade e informe arquivos alterados, validação e pendências. Não depender da memória de uma conversa nem editar somente um HTML compilado.


## Repositório definido — 26/11/2026

O professor indicou https://github.com/0ASilva/inversa como repositório do projeto. Consulta confirmou visibilidade pública, branch padrão main e permissão de escrita pelo conector. Referência observada: 4c3deeaf49a7d5fa3ab930271a9396b2e114b4d8. Esta definição substitui a pendência de endereço/visibilidade nos textos anteriores. A integração dos arquivos ainda não foi realizada; preservar o conteúdo remoto e conciliar as revisões Claude antes de fechar a execução.
