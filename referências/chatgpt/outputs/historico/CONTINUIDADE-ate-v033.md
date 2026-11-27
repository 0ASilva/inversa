# Retomada do aplicativo de funções inversas

Ponto de recuperação: 23/11/2026, identidade visual de E4 e correção das cores (documentação v0.29).

## Como retomar

Ler primeiro este arquivo, depois especificacao-funcoes-inversas.md e log-planejamento.md. Inspecionar os códigos existentes antes de implementar. As decisões explícitas do proponente prevalecem sobre propostas anteriores. Não presumir que todos os pontos em aberto já foram aprovados.

## Inventário

- especificacao-funcoes-inversas.md: estrutura E1–E8, fundamentos, requisitos, decisões e pendências; atualizações posteriores substituem propostas antigas quando indicado.
- log-planejamento.md: sequência das decisões, até registro 030.
- piloto-rio/: código modular de E2, incluindo engine.js, app.js, style.css, index.html e README.md.
- piloto-fita/: código modular de E3, incluindo model.js, app.js, style.css, index.html e README.md.
- piloto-rio.html e piloto-fita.html: versões de arquivo único para experimentar. São derivados das pastas modulares; regenerar após alterações.
- prototipo-e4/laboratorio-inversas.html: cópia do protótipo interativo E4 preservada do ambiente de visualizações. É um fragmento HTML com estilos e lógica; usa variáveis visuais do ambiente original. Adaptar à estrutura do app e verificar funcionalidades ao integrar. Não confundir com página completa já integrada.
- SHA256SUMS.txt: integridade dos arquivos deste ponto de recuperação.

## Estado e limites

E2, E3 e E4 têm pilotos locais. E4 atualizado em piloto-laboratorio/, com versão única piloto-laboratorio.html; prototipo-e4/ é referência histórica. E1 e E6–E8 ainda exigem detalhamento/implementação conforme especificação. O aplicativo completo ainda não existe e nada foi publicado nesta rodada. As referências externas e a animação GeoGebra mencionada pelo proponente não estão incluídas como arquivos-fonte.

## Decisões que precisam sobreviver à integração

Prioridade ao celular, compatibilidade com computador, identidade visual já adotada; sem login, coleta ou persistência de respostas nesta fase. Erro como oportunidade de retomada, celebração de acertos. E2 permite editar comandos e planejar ida/volta. E3 usa fita cortada, medidas em centímetros sem tamanho físico real; Desfazer e a conferência algébrica acompanham a saída experimentada. Avanço em E3 usa Continuar laranja e pulsação suave com alternativa estática para movimento reduzido. E4 usa P', não Q; respeitar a translação solicitada e o percurso numérico antes do simbólico documentados na especificação.

## Integração futura

Ao concluir as decisões, reunir as páginas numa estrutura comum de navegação e identidade visual, reaproveitando os códigos existentes. Definir o compartilhamento de estado em memória e adaptar E4. Verificar transições, cálculos, teclado, acessibilidade e telas pequenas. Só então preparar a publicação na conta GitHub do proponente, conforme autorização. A disponibilidade dos fontes permite iniciar a integração imediatamente, mas não elimina o trabalho de adaptação e testes.

## Conservação

Guardar o ZIP de recuperação fora desta pasta, em local escolhido pelo proponente. Em outra conversa, anexar o ZIP e pedir para ler CONTINUIDADE.md. Este pacote preserva código e decisões, não depende da memória da conversa. Regerar pacote e hashes a cada marco aprovado; não inclui respostas nem progresso de estudantes. Recomenda-se versionamento Git no futuro; nenhum repositório remoto foi criado por esta ação.

Padrão visual explícito: amarelo principal nos fundos gráficos (#fad404 conforme captura), roxo nos eixos/textos e laranja nos controles destacados. Usar o piloto-laboratorio atual para integrar E4.

Atualização v0.18: referências visuais em referencias-visuais/. Laranja com textos/ícones brancos; comemoração visual + sonora nos sucessos dos três pilotos. success-audio.js em cada pasta, com controle Som. Esse padrão deve seguir para E5.

E5: piloto-composicao/ e piloto-composicao.html. Quatro momentos e ordem inversa; piloto criado para discussão, ainda requer validação de interface e didática.

E5 v0.20: máquina SVG única, ida x/2+3 e volta ?, bocais, esteira, caixas numéricas, sucção e quique das letras. Referências de disposição em referencias-visuais/.


## PAUSA — ler primeiro na próxima sessão

Pausa solicitada pelo proponente em 23/11/2026. O último trabalho foi o desenho e a animação da máquina de E5. Há vários ajustes a discutir, ainda não especificados. A versão visual atual é provisória, não aprovação final. Começar ouvindo esses ajustes; não avançar para E6 automaticamente.

Arquivo para experimentar: piloto-composicao.html. Fontes para editar: piloto-composicao/index.html, style.css, app.js e success-audio.js. Regenerar o HTML independente e o ZIP do projeto após alterações. O desenho é SVG gerado em app.js (machineDrawing); a animação está em style.css e a sequência de execução em run().

Estado de validação: caso 10 → 5 → 8 → 5 → 10 conferido no navegador. O desenho ficou compacto em 320 × 568, e sua legibilidade e ritmo merecem revisão. Não há validação completa em aparelhos reais. Nenhum aplicativo integrado ou publicação foi feito.

Backup para esta pausa: backup-pausa-2026-11-23.zip. Contém arquivos de projeto, pilotos independentes, documentação e referências; exclui outros ZIPs redundantes. Não contém respostas de estudantes, progresso de sessão nem a totalidade do histórico da conversa. As decisões relevantes estão na documentação.


## RETOMADA ATUAL — prevalece sobre a pausa anterior

Observações do proponente recebidas e implementadas (v0.21). E5 agora separa ida e volta: digitar x na tabela, ida fixa x/2+4, depois Preparar volta e escolher operações (direita, esquerda). Uma caixa móvel; tabela com linha da ida e comparação da volta em negrito/?. Ver README de piloto-composicao/. A referência a x/2+3 no cabeçalho do pedido foi tratada como texto antigo; regra explícita +4 prevaleceu. E3 continua +3. Fonte principal: piloto-composicao/app.js. Backup atual: recuperacao-funcoes-inversas-v0.21.zip. Ajustes posteriores ainda podem ser solicitados pelo proponente; não considerar o conjunto aprovado definitivamente.

Marco atual v0.22: resumos extras de escolhas removidos, expressão revelada ao experimentar, texto entre etapas elevado, ficha atrás da máquina com deformação por gargalo virtual. Backup atual: recuperacao-funcoes-inversas-v0.22.zip.

Marco atual v0.23: expressão da volta atualizada a cada escolha (não aguarda Experimentar); ? quando nenhuma operação. Próxima etapa solicitada pelo proponente: discutir E6, incluindo a possível explicação geométrica previamente mencionada. Backup atual: recuperacao-funcoes-inversas-v0.23.zip.

Marco atual v0.24: E6 em piloto-diario/ e piloto-diario.html. Retomadas E2–E5 e reflexões temporárias. Explicação geométrica prévia do proponente é HTML local ainda não recebido; integrar depois. E7/E8 pendentes. Backup: recuperacao-funcoes-inversas-v0.24.zip.

Marco atual v0.25: E6 Rio sem setas e máquina simbólica, resposta em palavras; apoio numérico opcional e movimento pausável. Backup: recuperacao-funcoes-inversas-v0.25.zip.


## PRIORIDADE ATUAL — v0.26: documentação concluída, correção adiada

O proponente pediu apenas documentação/banco/backup nesta rodada. Não houve alteração funcional ou visual nos pilotos. Próxima retomada: E6 deve reutilizar a imagem original de E2 para o Rio; retirar opção oral não gravada; recuperar os detalhes da máquina existente, sem perder cartões simbólicos +3 e animação dos textos. Não implementar gravação por inferência. Não avançar para E7 antes de tratar essas correções.

Banco local: banco-imagens/index.html e LEIA-ME.md. Rio original em ativos/rio-e2-cena-original.svg; máquina detalhada em ativos/maquina-e5-detalhada-*.svg (referências com regra +4, adaptar para +3 em E6). Fontes ativos permanecem nas pastas dos pilotos. Backup atual: recuperacao-funcoes-inversas-v0.26.zip.

Marco v0.27: cena original do Rio de E2 integrada em E6 em 24/11/2026. A pendência do Rio foi atendida; continuam a máquina detalhada e retirada da opção oral. Backup atual: recuperacao-funcoes-inversas-v0.27.zip.

Marco v0.28: rótulos da Composição em E6 explicitam y = n/2 + 4 e n = 2(y − 4). Backup atual: recuperacao-funcoes-inversas-v0.28.zip.

Marco v0.29: piloto-completo-ate-e6.html reúne tudo. Fontes de compilação em piloto-integrado/; atualizar cópias etapas/ após modificar pilotos. E1 provisória, E7/E8 ausentes; pendências E6 preservadas. Backup atual: recuperacao-funcoes-inversas-v0.29.zip.


## PRIORIDADE VIGENTE — v0.30 · 24/11/2026

E7/E8 adiadas. Retomar pelo mapa-atencao-E2-E5.html (estudo visual e campos para notas) ou .md. Usuário estudará fora do chat e confrontará alternativas próprias; não tratar propostas de hierarquia como aprovadas. E5 agora (x+2)/5, inversa 5y−2; E3 permanece x/2+3. E6 composição sincronizada. Piloto integrado recompilado. Conferir log registro 031. Backup vigente: recuperacao-funcoes-inversas-v0.30.zip. Preservar pendências E6 e não publicar.


## Marco vigente v0.31 — 25/11/2026

E5 usa a nova arte SVG enviada, com camadas em piloto-composicao/machine-art.js; carregar esse script antes de app.js. Expressão/valores/operações são dinâmicos. Original integral no banco de imagens; não recolocar textos/ficha estáticos do original. HTML independente e integrado sincronizados. Backup vigente v0.31. E7/E8 seguem adiadas; discutir hierarquia e pendências E6 na próxima retomada.


## Marco vigente v0.32 — 25/11/2026

Tipografia E5 refinada: rótulos 70%, palavras uniformes e centralizadas sem deformação horizontal; números das operações laranja escuro; fórmulas sem negrito. Função (x+2)/5 mantida. Backup vigente recuperacao-funcoes-inversas-v0.32.zip.


## PRIORIDADE VIGENTE — v0.33 · 26/11/2026

Layout comum E2–E6 aprovado e aplicado; ver layout-geral/README.md e log 034. Usar piloto-completo-ate-e6.html. Ícones originais em layout-geral/assets. Manutenção: fontes modulares, depois manutencao/recompilar-pilotos.py. Próxima rodada: ajustes da arte da máquina E5, depois integrar HTML da animação do Rio feito com Claude (ainda não fornecido). Não exigir esse HTML para os ajustes do layout geral já concluídos. Preservar decisões de Nova/Refazer/Próximo, preferências de som apenas em memória e nenhuma publicação. E7/E8 adiadas; conteúdo E6 tem pendências próprias.
