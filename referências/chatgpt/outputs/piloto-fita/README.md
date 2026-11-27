# Piloto E3 — A máquina de fitas

Abra index.html diretamente no navegador. A versão ../piloto-fita.html reúne todos os recursos num único arquivo. Não requer instalação ou internet; não usa login, armazenamento, rastreamento ou envio de respostas.

## Percurso

1. Experimentar: escolher de 2 a 12 cm, observar corte em metades, reserva de uma metade e acréscimo de 3 cm à outra. Pausar e rever disponíveis.
2. Representar: selecionar expressões numéricas das duas estações.
3. Desfazer: reconstruir a entrada a partir da saída obtida na experimentação, escolhendo operações na ordem apropriada.
4. Generalizar: preencher campos para n/2, n/2+3, entrada da saída experimentada e n=2(y−3).

A fita é proporcional, sem equivalência com o tamanho físico da tela. A volta reconstrói uma medida, não o mesmo pedaço material. A faixa 2–12 e os campos são escolhas deste piloto, abertas à revisão. O domínio físico é positivo; a faixa experimental não limita a validade da regra.

## Arquivos e evolução

model.js contém cálculos e validação, app.js coordena as interações, style.css define a apresentação. Sem dependências externas. Para GitHub Pages, publicar os arquivos desta pasta juntos; publicação ainda não realizada.

## Validação e limites

30 verificações numéricas passaram, incluindo valores pares e ímpares, inversão e validação decimal. Percurso completo verificado no navegador. Telas de cartões e operações verificadas sem rolagem a 320 × 568. Acessibilidade inclui teclado, rótulos, feedback anunciado e respeito à preferência por movimento reduzido. Ainda requer teste em aparelhos reais, com teclado virtual, ampliação de texto e leitores de tela. Ajuda e conclusão podem rolar quando necessário; preservar conteúdo tem prioridade sobre ocultá-lo.

## Observar na discussão

Os campos favorecem explicação ou apenas reconhecimento? A bandeja esclarece que medir uma metade não elimina a outra? O apoio visual permite justificar a inversão da ordem? A régua oferece pistas excessivas na etapa de reconstrução? Não há coleta dessas observações pelo aplicativo.

A etapa Desfazer e a conferência algébrica usam a saída da experiência atual. Alterar a medida exige passar novamente pela máquina antes de avançar. Teste de continuidade passou para entradas 2, 7 e 12 cm.

Avanços usam “Continuar” em laranja, com pulsação suave enquanto disponíveis; movimento reduzido mantém destaque estático.

Atualização 23/11/2026: controles laranja com texto branco; acertos e sucessos combinam a celebração visual existente com três notas suaves geradas por Web Audio. Som ativo por padrão após interação; botão Som permite silenciar. Sem persistência. Restrições do navegador ou áudio do aparelho podem impedir a reprodução; a indicação visual permanece.


## Layout comum v0.33 — 26/11/2026

Cabeçalho e rodapé agora usam layout.js, layout.css e icons.js. A lógica expõe window.InverseActivity para os controles contextuais. Ver ../layout-geral/README.md. Recompilar pelo script ../manutencao/recompilar-pilotos.py; não usar montagens antigas que omitam esses arquivos. Animações e regra matemática preservadas.
