# Inversão — A travessia · piloto E2

Piloto local, versão 0.2, 22/11/2026. Autor da proposta didática: André Silva, IFRJ.

## Jogar

Abra `index.html` no navegador. Não exige instalação, servidor, login ou conexão à internet. A versão `piloto-rio.html`, entregue ao lado desta pasta, reúne todos os recursos em um arquivo.

Escolha uma direção e uma quantidade de 1 a 5. Toque em um comando para alterar direção/quantidade ou excluir. “Ir” executa o plano. O personagem para antes de um salto sem apoio. Após revisão, uma nova execução parte da margem inicial da viagem atual. Ao recolher o tesouro, “Planejar volta” abre o planejamento do retorno, mantendo a ida visível. A conclusão convida à reflexão oral com os dois planos.

Sem persistência: planos e posição existem somente na memória da página. Recarregar ou fechar reinicia a atividade. Não há localStorage, cookies de aplicação, analytics, cadastro, banco de dados, envio ao professor ou histórico de tentativas. O registro de ida mostrado durante a partida é apenas parte temporária do jogo.

## Organização para desenvolvimento futuro

- `index.html`: estrutura e ilustração vetorial do cenário.
- `style.css`: identidade visual, responsividade e redução de movimento.
- `engine.js`: regras puras, apoios, direções e simulação de comandos; também pode ser importado em Node para testes.
- `app.js`: edição, execução, pausa, feedback, passagem à volta e reflexão.

Recursos desenhados no próprio projeto, sem bibliotecas ou imagens externas. Paleta inspirada nos aplicativos fornecidos pelo proponente: Descubra com o Gráfico e Labirinto Plano. O jogo não importa login, envio de respostas ou regras de atravessar paredes dessas referências.

## Regras da fase

Partida (0,0), tesouro (3,5). Apoios intermediários: (1,0), (2,0), (3,0), (3,1), (3,2), (3,3), (3,4). Saltos unitários, direções fixas em relação à tela. Validar cada apoio, não comparar com uma lista exata de respostas. Aceitar divisão de um deslocamento em mais de um comando e desvios que permaneçam sobre apoios válidos. A viagem termina quando o plano inteiro foi executado e o personagem está no destino; alcançar o destino no meio de uma sequência não descarta silenciosamente comandos restantes.

O editor mostra até três comandos por vez, com navegação quando necessário; não impõe uma solução em dois comandos. Quantidade zero não é uma opção. A partida é individual; personagens, fases adicionais e persistência futura dependem de novo planejamento.

## Verificações realizadas

- Dez verificações de regras: ida/volta, ordem impraticável, parada antes da água, comandos equivalentes, plano incompleto/vazio, desvios válidos e quantidade inválida.
- Sintaxe dos dois arquivos JavaScript conferida com Node.
- Navegador: criação e edição de comandos, troca de direção, exclusão, tentativa sem apoio, revisão, ida completa, volta completa e reflexão.
- Área útil simulada de 320×568: documento com altura 568 e largura 320, incluindo preparação da volta. Área 390×844: documento com altura 844 e largura 390. Inspeção visual de editor e reflexão no tamanho menor.
- Nenhum erro ou aviso retornado no console durante o percurso testado.

Limites: não substitui teste em aparelhos físicos, auditoria com leitor de tela ou pilotagem com estudantes. Não houve publicação no GitHub. Pausa, redução de movimento e navegação de comandos longos estão implementadas, mas não foram todas exercitadas na sessão visual.


## Revisão 0.2 — pares de movimentos

Ordem dos controles, inclusive no editor: esquerda, direita, cima (sobe), baixo (desce). Esquerda/direita usam lavanda; sobe/desce usam amarelo suave. As mesmas famílias visuais acompanham os comandos, o plano de ida e a comparação final. Setas, quantidades, nomes acessíveis e instruções permanecem. A seleção e a execução destacam o contorno sem apagar a cor do par. Não houve mudança nas regras ou na coleta de dados.

Atualização 23/11/2026: controles laranja com texto branco; acertos e sucessos combinam a celebração visual existente com três notas suaves geradas por Web Audio. Som ativo por padrão após interação; botão Som permite silenciar. Sem persistência. Restrições do navegador ou áudio do aparelho podem impedir a reprodução; a indicação visual permanece.


## Layout comum v0.33 — 26/11/2026

Cabeçalho e rodapé agora usam layout.js, layout.css e icons.js. A lógica expõe window.InverseActivity para os controles contextuais. Ver ../layout-geral/README.md. Recompilar pelo script ../manutencao/recompilar-pilotos.py; não usar montagens antigas que omitam esses arquivos. Animações e regra matemática preservadas.
