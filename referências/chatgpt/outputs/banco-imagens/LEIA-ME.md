# Banco local de imagens — funções inversas

Criado a pedido do proponente para preservar identidade e detalhes dos desenhos. Os pilotos não foram corrigidos nesta rodada.

## Ativos extraídos dos códigos existentes

| Arquivo | Origem | Uso na retomada |
|---|---|---|
| ativos/rio-e2-cena-original.svg | SVG do cenário de piloto-rio/index.html, com pedras geradas pela própria função drawStones de app.js | Reutilizar esta cena em E6, sem redesenhá-la; sem setas iniciais. |
| ativos/maquina-e5-detalhada-ida.svg | Função machineDrawing de piloto-composicao/app.js | Referência de detalhes da máquina: estrutura, painel, bocais, estações, esteira. Estado ilustrativo de ida com entrada 10 e regra +4. |
| ativos/maquina-e5-detalhada-volta.svg | Mesma função de E5 | Referência de detalhes, estado ilustrativo com plano −4,×2 e saída 9. |

Os SVGs da máquina são instantâneos estáticos, não substituem a lógica animada. Para E6, conservar os detalhes e adaptar à regra +3 e aos três cartões simbólicos já definidos; não copiar inadvertidamente a regra +4 de E5.

## Referências e fontes

referencias/ preserva as capturas originais fornecidas pelo proponente (identidade visual, referência Desmos e rascunho). A referência Desmos é referência de consulta, não ativo a incorporar como obra própria.

originais-codigo/ preserva fontes de E2; originais-codigo/maquina-e5/ preserva os de E5 neste marco. Os fontes ativos continuam nas pastas dos respectivos pilotos. Atualizar cópias e catálogo quando desenhos aprovados mudarem, sem substituir referências históricas silenciosamente.

## Pendências expressas

- E6 Rio deve usar a mesma cena de E2, não uma versão simplificada.
- Retirar a opção de explicação oral não gravada. Gravação não foi solicitada; não implementar sem discussão.
- Recuperar os detalhes da máquina em E6, mantendo função formatada, cartões simbólicos e animação apenas dos textos.
- Correções visuais serão retomadas depois; este marco organiza e documenta.

Abrir index.html para visualizar o catálogo local. Não há envio, publicação ou dependências externas.


## 25/11/2026 — máquina autoral nova

ativos/maquina-e5-nova-original.svg preserva integralmente o arquivo enviado. Inclui expressão e operações antigas, portanto é fonte artística, não a regra vigente. A versão interativa atual está em ../piloto-composicao/, com machine-art.js e app.js. Não usar os textos fixos do SVG em lugar de (x+2)/5.
