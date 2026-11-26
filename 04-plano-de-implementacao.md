# 04. Plano de implementação da v1

Os marcos estão em ordem de dependência. Cada um tem um critério de aceite verificável.

## Divisão entre técnico e conteúdo

- **Técnico:** a "casca" do app. Liberação por turma, código e QR, montagem da sequência, persistência, sincronização. Funciona igual para qualquer etapa e **não sabe nada de matemática**.
- **Conteúdo:** o que acontece dentro de cada etapa, abertura ou recurso transversal. Inclui situações, perguntas, validações e visual.
- **A fronteira** é o **contrato de módulo** (M0): toda etapa se apresenta à casca do mesmo jeito. Com isso, as revisões de conteúdo (pendências em `07`) podem andar em paralelo aos marcos técnicos sem um bloquear o outro.

## Trilha técnica

### M0. Preparar o app existente

**M0.1. Ids** (feito): os ids estão fixados em `03-catalogo-de-itens.md`. Falta confirmar as partes de `et-rio`, `et-maquinas` e `et-diario` (ver `07`, O3 e O4).

**M0.2. Contrato de módulo.** Cada etapa, abertura e recurso transversal vira um módulo que declara:

| campo | exemplo |
|---|---|
| `id` | `et-fita` |
| `tipo` | `etapa` |
| `ordem` | 30 |
| `titulo` | Máquina da fita |
| `partes` | `["et-fita.experimentar", …]` |
| `requer`, `pressupoe` | ver `03` |

Cada módulo também oferece uma função de montagem, que recebe:
- o contêiner da tela;
- as partes e opções liberadas (por exemplo, quais `fn-*`);
- o estado salvo do aluno nesse módulo;
- as funções `salvar(estado)`, `concluir()` e `registrarConjectura(texto)`, esta última para o `tr-caderno`.

Um módulo **nunca** lê a configuração da turma diretamente nem chama outro módulo. Tudo passa pela casca.

**M0.3. Registro de módulos.** É uma lista única, que é a fonte de verdade da ordem e das dependências e que alimentará a aba `Itens` da planilha no M1.

**M0.4. Montagem pela lista.** A casca recebe uma lista de ids liberados e monta somente esses módulos, na ordem do registro.

**M0.5. Migração das etapas existentes.** Adaptar E2 a E6 ao contrato, uma por vez. A ordem sugerida, da mais simples para a mais complexa, é `et-rio`, `et-maquinas`, `et-fita`, `et-grafico`. O `et-diario` vem por último, porque será revisto (O4).

**M0.6. Slot da abertura.** Retirar a página de textos E1 e deixar um slot vazio de abertura. Se nenhuma abertura estiver ligada, o app vai direto à primeira etapa.

**Aceite do M0:**
- com uma lista escrita à mão no código, sem servidor, o app exibe só os módulos da lista, na ordem do registro;
- desligar `fn-quad-r` na lista faz a função sumir das opções de `et-grafico.inv-funcoes`;
- trocar o valor de `ordem` de `et-maquinas` e `et-grafico` inverte as duas etapas sem nenhuma outra mudança no código.

### M1. Planilha e API
- Criar a planilha com as abas `Itens` e `Turmas`.
- Criar o menu "Nova turma", que gera um código único.
- Criar a fórmula de aviso de dependências.
- Criar o Apps Script com `doGet(codigo)`, retornando o JSON de `02` com cache de 20 s.
- Implantar como app da Web: executar como o professor, acesso para qualquer pessoa.
- **Aceite:** uma página de teste no navegador recebe o JSON via `fetch`, sem erro de CORS, tanto para um código válido quanto para um inválido.

### M2. Entrada do aluno
- Criar a tela de código, aceitando maiúsculas ou minúsculas e ignorando espaços.
- Fazer a leitura do código pelo endereço (`#K7Q4MX`).
- Tratar os erros: código inválido e falha de rede.
- **Aceite:** entrada pelo link funciona sem digitar; um código inválido mostra a mensagem e permite tentar de novo.

### M3. App filtrado pela configuração
- Ligar a API ao mecanismo do M0.
- Implementar o sorteio da abertura, feito uma única vez e guardado no navegador.
- **Aceite:** duas turmas com configurações diferentes exibem sequências diferentes; recarregar a página não troca a abertura sorteada.

### M4. Atualização durante a aula
- Consultar a API a cada 30 s e no evento de voltar à aba.
- Aplicar as regras de marcar e desmarcar de `02`.
- Exibir o aviso "Nova etapa liberada".
- **Aceite:** marcar um item na planilha faz ele aparecer em até ~50 s (30 s de consulta + 20 s de cache), sem recarregar; desmarcar um item já iniciado não o remove.

### M5. Progresso no navegador
- Salvar o progresso por turma; em toda leitura e escrita, try/catch.
- Guardar a última configuração recebida, para uso sem rede.
- **Aceite:** recarregar a página mantém respostas e aposta; com a rede desligada, o app continua funcionando com a última configuração.

### M6. Página de projeção
- Criar `professor.html#CODIGO` com nome da turma, QR e código, em letras grandes e alto contraste.
- **Aceite:** o QR, lido de um celular a cerca de 3 m de distância de um projetor, abre a turma certa.

### M7. Publicação e teste ponta a ponta
- Publicar o site em hospedagem estática.
- Rodar a bateria de testes de `05`, incluindo o teste de carga.
- **Aceite:** todos os testes obrigatórios passam.

## Trilha de conteúdo (aberturas e módulos)

Para cada item, preencher a **ficha** de `06-abertura.md` (seção 6) antes de implementar.

| marco | item | observação |
|---|---|---|
| C1 | esqueleto comum da abertura (gancho → aposta → registro local) e retorno na reflexão | pré-requisito de C2 a C4 |
| C2 | `ab-magica` | máx. 2 operações |
| C3 | `ab-desconto` | |
| C4 | `ab-cartas` | depende de `et-grafico.inv-funcoes` com `fn-quad-r` (já implementados) |

## Sugestão de uso com o Claude Code

Pedir **um marco por sessão**, anexando este arquivo junto com `02` e `03`, e exigir que o critério de aceite seja demonstrado antes de passar ao próximo marco. O M1 depende de ações na conta Google do professor (criar a planilha e implantar o script), que o Claude Code não faz sozinho; ele pode, porém, gerar o código do Apps Script e o passo a passo da implantação.
