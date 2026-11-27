# Verificações recuperáveis

Executar com Node: node outputs/testes/test-river.cjs ; node outputs/testes/test-tape-continuity.cjs ; node outputs/testes/test-machine-v030.cjs . Os caminhos internos são relativos aos scripts. O nome v030 identifica origem do teste, não a versão corrente do app. Os testes de interface simulam DOM e expõem estados por instrumentação do código: são testes de regras/continuidade, não testes de navegador. Se a estrutura interna mudar, revisar a instrumentação e não apenas apagar assertivas. Conferir também animações, navegação e acessibilidade no navegador.
