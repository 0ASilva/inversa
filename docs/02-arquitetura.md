# 02. Arquitetura da v1

## Visão geral

```
[Planilha Google]  <──  professor edita (login Google)
       │
[Apps Script: API de leitura]  ──JSON──>  [App do aluno (site estático)]
       │                                        │
       └──>  [Página de projeção (QR + código)] │
                                                └── progresso salvo no navegador
```

| Componente | Papel | Tecnologia |
|---|---|---|
| Planilha | painel do professor: turmas e autorizações | Google Planilhas |
| API | entrega a configuração da turma a partir do código | Google Apps Script, implantado como app da Web |
| App do aluno | a atividade, filtrada pela configuração | HTML/CSS/JS estático: a casca do piloto v0.33, com cada etapa num iframe |
| Página de projeção | QR e código da turma para projetar | página estática do mesmo site |

## Por que a planilha é o painel do professor na v1

O fluxo pensado originalmente previa uma página do professor no site, onde ele cadastraria a turma e marcaria as atividades. Para a v1, a recomendação é usar a planilha no lugar dessa página, por três motivos:

1. **Ela elimina a parte mais delicada:** a autenticação do professor. A planilha já fica protegida pelo login Google, e só o professor tem acesso.
2. **Dá para editar no meio da aula pelo celular**, no app Google Planilhas.
3. **A pilha já foi testada pelo professor** num app anterior.

O custo é uma interface menos amigável que um painel próprio. O painel no site pode entrar na v2.

## Modelo de dados (abas da planilha)

### Aba `Itens` (catálogo; muda pouco)

| coluna | exemplo | observação |
|---|---|---|
| `id` | `ab-magica` | identificador estável, usado pelo código |
| `tipo` | `abertura` / `etapa` / `modulo` | |
| `nome` | Mágica do número | rótulo exibido ao professor |
| `ordem` | 10 | posição na sequência pedagógica |
| `requer` | `et-grafico.inv-funcoes,fn-quad-r` | ids separados por vírgula, ou vazio |
| `pressupoe` | `et-grafico.inv-simetrico` | só gera aviso, não bloqueia |

### Aba `Turmas`

Uma linha por turma; as colunas a partir da quinta são os itens.

| `codigo` | `turma` | `ativa` | `abertura_modo` | `ab-magica` | `ab-desconto` | … | `et-grafico` | `fn-quad-r` | `tr-galeria` |
|---|---|---|---|---|---|---|---|---|---|
| K7Q4MX | 2º EMT Química A | ☑ | sorteio | ☑ | ☑ | … | ☑ | ☐ | ☑ |

- `abertura_modo`: `fixa` (usa a única abertura marcada) ou `sorteio` (sorteia uma entre as marcadas).
- Uma **coluna de aviso** calculada por fórmula indica dependências não atendidas, como "ab-cartas exige fn-quad-r".
- O **menu "Nova turma"**, criado por Apps Script, insere uma linha com um código novo e único.

### Código de acesso

- 6 caracteres de um alfabeto sem símbolos ambíguos (sem 0/O, 1/I/L), por exemplo `K7Q4MX`.
- O código é compartilhado com a turma inteira. Ele controla o acesso, mas **não é uma senha forte**, o que é aceitável porque nenhum dado sensível é exposto.

## API (Apps Script)

O script fica implantado como **app da Web**, executando como o professor, com acesso para **qualquer pessoa**. A planilha em si não é compartilhada.

`GET <url-do-script>?codigo=K7Q4MX`

Resposta quando a turma existe e está ativa:
```json
{ "ok": true, "turma": "2º EMT Química A", "abertura_modo": "sorteio",
  "itens": ["ab-magica","ab-desconto","et-rio","et-fita","et-grafico","et-grafico.inv-funcoes","fn-afim","fn-quad-pos","fn-cubica","et-maquinas","tr-galeria"],
  "versao": "2026-11-25T22:40:00Z" }
```

Resposta quando o código não existe ou a turma está inativa:
```json
{ "ok": false, "erro": "codigo_invalido" }
```

Notas técnicas:
- Usar `ContentService` com o tipo MIME JSON.
- Uma requisição GET simples via `fetch` atravessa o redirecionamento do Apps Script sem problemas de CORS. Isso precisa ser **testado cedo** (marco M1).
- Usar `CacheService` com cerca de 20 s de cache por código, para não ler a planilha a cada consulta.
- A API **só lê**. Na v1, nada é escrito pelo aluno.
- **Cotas do Apps Script:** há limite de execuções simultâneas. Com cerca de 40 alunos consultando a cada 30 s, a carga é modesta, mas precisa ser **verificada no teste de carga** (ver `05`), e não presumida.

## Fluxo do professor

1. Antes da aula, abre a planilha, usa o menu "Nova turma" e marca os itens.
2. Abre a página de projeção `site/professor.html#K7Q4MX`, que exibe o nome da turma, o QR e o código.
3. Durante a aula, se precisar, marca ou desmarca itens na planilha pelo celular ou pelo computador.

O QR é gerado no navegador por uma biblioteca de QR code e codifica `site/#K7Q4MX`.

## Fluxo do aluno

1. Lê o QR, e o app abre com o código no endereço; ou abre o site e digita o código.
2. O app consulta a API:
   - código válido: guarda a configuração no navegador e monta a atividade só com os itens liberados;
   - código inválido: mostra "Código não encontrado. Confira com o professor." e permite tentar de novo.
3. No modo `sorteio`, o app sorteia a abertura **uma vez** e guarda o resultado no navegador. Recarregar a página não troca a abertura.
4. O app reconsulta a API a cada 30 s e quando o aluno volta à aba. Se a `versao` mudou, aplica as regras abaixo.

## Casca e módulos

A base é o piloto integrado v0.33 (`app/`): a casca carrega cada etapa num iframe e conversa com ela por mensagens. O contrato de módulo de `04` (M0.2) é implementado como **protocolo de mensagens**:
- a casca envia ao módulo a configuração liberada (partes e opções, como as `fn-*`) e o estado salvo do aluno;
- o módulo devolve `salvar(estado)`, `concluir()` e `registrarConjectura(texto)`.

O módulo nunca lê a configuração da turma nem o `localStorage` diretamente: tudo passa pela casca.

**Menu de etapas:** livre, mas mostra só os itens liberados para a turma.

## Regras de atualização

| Mudança na planilha | Efeito no app do aluno |
|---|---|
| item **marcado** | aparece no lugar certo da sequência, com o aviso "Nova etapa liberada" |
| item **desmarcado**, ainda não iniciado | some |
| item **desmarcado**, já iniciado | continua disponível |
| turma desativada | quem já está dentro continua; quem tenta entrar recebe "código inválido" |
| falha de rede | mantém a última configuração; tenta de novo no próximo ciclo, sem alarde |

## Progresso no navegador

- O progresso fica em `localStorage`, numa chave por código de turma: abertura sorteada, aposta e justificativa, respostas por etapa e etapas iniciadas e concluídas.
- Toda leitura e escrita fica protegida por try/catch. Se o armazenamento falhar, o app funciona sem persistência e não quebra.
- **Limitação aceita:** se o aluno trocar de aparelho ou de navegador, o progresso não o acompanha.
- **Computador compartilhado:** o próximo aluno encontraria o progresso do anterior. O app precisa de uma opção "Começar do zero" que apague o progresso daquela turma (ver `07`, P8).

## Direção a retomar

O professor manteve a arquitetura acima para a v1, mas quer retomá-la para um funcionamento equivalente ao dos outros apps que já construiu: instalável, utilizável sem internet e fora da sala de aula, com a liberação por turma valendo em sala e, sem login, com o envio de progresso, aposta e caderno para a planilha. Isso muda a regra "nenhum dado de aluno no servidor" e está detalhado em `07`, P8.

## Hospedagem do site (decisão em aberto)

Qualquer hospedagem estática serve: GitHub Pages, Netlify ou outra. Uma alternativa é servir o próprio app pelo Apps Script (`HtmlService`), mas o endereço fica longo e há restrições de iframe. **A recomendação é usar hospedagem estática**, com o Apps Script apenas como API.
