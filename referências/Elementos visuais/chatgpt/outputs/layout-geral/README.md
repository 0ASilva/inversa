# Layout comum — v0.33 · 26/11/2026

Decisões aprovadas pelo proponente em 25/11, implementação concluída em 26/11. Não publicar sem pedido.

Cabeçalho único por atividade: menu de etapas, linha de autoria, ajuda, som. Título da atividade aparece uma vez no conteúdo. Códigos E2–E6 não aparecem no cabeçalho/menu. Ajuda e som usam os SVGs fornecidos; os demais ícones são caminhos exatos extraídos do SVG de layout. Apenas viewBox de margens transparentes e tamanho proporcional foram ajustados.

Rodapé contextual na ordem Voltar, ação principal, Nova, Refazer, Próximo. Sem avanço superior. Voltar percorre os momentos anteriores; no início da atividade vai à anterior. Próximo só aparece quando a lógica da atividade permite; ao final vai à seguinte. Nova limpa toda a atividade; Refazer limpa a tentativa atual, mantendo os dados de referência. E5 mantém a saída da ida na volta. Controles que não se aplicam são omitidos. Pausa, marcar ponto, conferir resposta e varrer mantêm rótulos próprios quando aplicáveis.

layout.js consome window.InverseActivity de cada módulo. A lógica matemática continua em app.js. Alterações no arquivo comum devem ser copiadas para cada pasta piloto-* antes de recompilar. icons.js contém as imagens incorporadas, sem chamadas externas. Som é sincronizado apenas em memória pelo piloto integrado e volta ao padrão ao recarregar. Menu de etapas conserva acesso livre, que não significa conclusão.

Fontes modulares e HTMLs portáteis são recompilados com python3 manutencao/recompilar-pilotos.py, a partir desta pasta outputs. O integrado reúne as cópias atualizadas de etapas/. Não editar diretamente os HTMLs compilados.

Validação: navegação e ajuda em E2–E6; experiência e avanço de E3/E4; ida e volta de E5; Refazer preservando a ida em E5 e limpando plano do Rio; som mantido entre módulos. Inspeção móvel 390×844 e 320×568. Em alturas pequenas pode haver rolagem para preservar leitura e alvos de toque. Teclado virtual real e dispositivos físicos não foram testados.

Fora desta rodada: nova animação do Rio feita com Claude; novo desenho da máquina E5; novas imagens do plano cartesiano e da Fita. Permanecem pendências didáticas de E6, incluindo a opção oral não gravada já rejeitada pelo proponente, a retirar na revisão de conteúdo. E7/E8 adiadas.
