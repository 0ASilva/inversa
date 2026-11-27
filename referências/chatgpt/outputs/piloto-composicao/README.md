# Piloto E5 — máquina com ida e volta separadas · v0.32

Abrir index.html ou ../piloto-composicao.html. Sem instalação, login ou persistência.

## Regra vigente

f(x)=(x+2)/5: somar 2, depois dividir por 5. Inversa: multiplicar por 5, depois subtrair 2. E3 permanece x/2+3. As alterações anteriores estão no log geral.

Digite x na primeira célula; uma única ficha mostra o número e atravessa duas estações. Tabela: x, x+2, (x+2)/5. Preparar volta abre escolhas; primeira atua à direita, segunda à esquerda. Refazer escolhas limpa o plano. A expressão representa cada tentativa imediatamente, inclusive incorreta. A volta parte da saída produzida, percorre a máquina para a esquerda e registra coincidências em negrito e divergências com ?. Acertos recebem comemoração e som. A ficha passa atrás dos bocais, deformando-se por sucção; letras quicam na estação ativa. Movimento reduzido respeitado.

Entrada numérica positiva até 12; aceita vírgula decimal. Exibição com até dez casas decimais, sem arredondamento intermediário no cálculo. O recorte positivo da função tem imagem y>0,4; o controle gráfico de volta explora inteiros de 1 a 12. Não é domínio físico de comprimentos: E5 trabalha com números. A função afim pode ser definida em todos os reais.

## Verificação desta versão

Sintaxe e teste de percurso com 0,1; 1; 7; 10; 12. Ordem inversa correta recupera cada entrada; ordem errada solicita revisão. Navegador: 7→9→1,8; volta ×5,−2 resulta 7,9,1,8 na tabela. Revisão visual encontrou textos pequenos na máquina quando os controles da volta ocupam espaço. Layout/paleta aguardam discussão do mapa de atenção; validação em celulares menores e teclado virtual ainda pendente.


## Arte v0.31

machine-art.js contém defs, fundo e primeiro plano extraídos do SVG autoral. app.js desenha a ficha entre essas camadas e escreve operações e expressão sobre os painéis. Carregar machine-art.js antes de app.js. Os rótulos do original são contornos vetoriais; fórmulas e operações têm fontes locais. O arquivo original inclui textos e uma ficha rasterizados que foram excluídos da versão interativa para não se sobrepor aos valores reais. Novo viewBox 140 45 1155 555 recorta margens vazias; geometria da animação usa centros 248/718/1194 e estações 493/944. Não substituir por uma imagem plana, pois isso impediria a oclusão correta da ficha.


### Tipografia v0.32

Rótulos vetoriais em escala 0,98 (70% de 1,4). Palavras das operações com corpo uniforme 27, sem escala horizontal; linha numérica em 43, com algarismos #D94A1C e palavras #681787. Centralização por medidas reais da fonte. Fórmulas serifadas em peso 400. Animações preservadas.


## Layout comum v0.33 — 26/11/2026

Cabeçalho e rodapé agora usam layout.js, layout.css e icons.js. A lógica expõe window.InverseActivity para os controles contextuais. Ver ../layout-geral/README.md. Recompilar pelo script ../manutencao/recompilar-pilotos.py; não usar montagens antigas que omitam esses arquivos. Animações e regra matemática preservadas.
