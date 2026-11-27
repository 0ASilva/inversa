# Plano de execução compartilhado — proposta para conciliação

26/11/2026 · Documentação v0.34 · Aplicação v0.33.

## Decidido e ainda aberto

Decidido pelo professor: conciliar construção com Claude e usar projeto na conta GitHub. Ainda abertos: URL/nome, visibilidade, nova abertura e percurso revisado no Claude, arquitetura final e publicação. Consulta ao conector em 26/11 não retornou repositórios para 0asilva; isso não prova inexistência. Diretório local ainda não é repositório Git. Nenhum upload, commit remoto ou deploy realizado.

## Sequência proposta

1. Receber versão Claude: fontes HTML/CSS/JS, ativos, notas de decisões e revisão das etapas/abertura. O professor pode fornecer o repositório em vez de copiar tudo para a conversa.
2. Comparar com o pacote Codex v0.34. Produzir matriz de divergências com tela/estado afetado, regra matemática, versão escolhida, motivo e aprovação. Não resolver divergência pedagógica silenciosamente.
3. Definir repositório único, preferencialmente privado durante conciliação (proposta). Guardar fontes, ativos, documentos e testes. Manter ZIPs históricos fora da árvore principal de código ou como arquivos de recuperação separados. Não publicar dados de estudantes.
4. Registrar base recuperável e conciliar abertura/percurso antes de alterações extensas. Não renumerar automaticamente E2–E6 sem mapa de correspondência.
5. Implementar lotes pequenos: estrutura/layout, máquina E5, Rio Claude, pendências E6, acessibilidade/validação. Ordem poderá mudar conforme o novo percurso aprovado. E7/E8 continuam suspensas até decisão explícita.
6. Revisão com professor em piloto; testes de regras e fluxos; só após decisão de publicação configurar hospedagem e testar caminhos relativos no GitHub Pages.

## Trabalho entre duas IAs

Proposta: main representa versão revisada; cada tarefa usa branch própria e alterações comparáveis em pull request. Antes de começar, ler continuidade e verificar branch/commit base. Uma IA implementa o lote e a outra pode revisar, quando solicitada. Não editar simultaneamente o mesmo arquivo em cópias divergentes; sincronizar primeiro. Não exigir que o professor resolva conflitos de código. Registrar decisões no repositório: conversa não é fonte exclusiva.

Concluir cada lote com: o que mudou e por quê; quais arquivos-fonte; teste executado e resultado; captura quando houver mudança visual; pendências; atualização do log e da continuidade. Não considerar um teste unitário como prova de qualidade visual/didática. Não alterar arte autoral para contornar dificuldade técnica sem discutir.

## Critérios de aceitação a preservar

- E2: caminhos corretos funcionam; caminho bloqueado convida à revisão; barra editável; ida e volta planejadas pelo estudante.
- E3: saída real alimenta inversão; corte e +3 permanecem; caso ímpar funciona.
- E4: P', translação sem rotação, auxiliares invisíveis; numérico antes de simbólico; erro retoma visualização; rastro só após conjectura.
- E5: (x+2)/5 e 5y−2; uma ficha; estados intermediários reais; retorno separado; tabela coerente; expressão dinâmica; ficha atrás dos bocais; Nova diferente de Refazer.
- E6: mesma cena E2; sem resposta antecipada por setas; símbolos da Fita +3; composição acompanha E5; remover opção oral não gravada.
- Comum: ativos originais, amarelo/roxo/laranja, ajuda/som, controles inferiores, som respeita preferência, movimento reduzido e uso em celular.

## Decisão sobre GPT-5.6

Não houve teste comparativo deste projeto com GPT-5.6. A documentação oficial distingue Sol, Terra e Luna; para continuidade de programação e discussão complexa, recomendação de trabalho é testar **5.6 Sol**, se disponível na conta, em um lote delimitado. Essa é uma recomendação, não garantia de equivalência ao modelo atual. Não presumir que trocar de modelo amplia cotas: limites e disponibilidade dependem do produto, versão e plano.

Teste proposto: uma mudança visual delimitada mantendo matemática e animação; comparar fidelidade aos ativos, ausência de regressões, clareza do registro e tempo de retrabalho. Para decisões pedagógicas abrangentes, geometria da animação ou integração entre módulos, exigir revisão mais cuidadosa e eventualmente modelo mais capaz. Documentação, tarefas menores e validação reduzem risco de perda de contexto com qualquer modelo.

Fontes oficiais consultadas em 26/11/2026: https://openai.com/index/gpt-5-6/ ; https://developers.openai.com/api/docs/models/all ; https://developers.openai.com/api/docs/guides/model-selection . Disponibilidade específica na conta não foi verificada.


## Repositório definido — 26/11/2026

O professor indicou https://github.com/0ASilva/inversa como repositório do projeto. Consulta confirmou visibilidade pública, branch padrão main e permissão de escrita pelo conector. Referência observada: 4c3deeaf49a7d5fa3ab930271a9396b2e114b4d8. Esta definição substitui a pendência de endereço/visibilidade nos textos anteriores. A integração dos arquivos ainda não foi realizada; preservar o conteúdo remoto e conciliar as revisões Claude antes de fechar a execução.
