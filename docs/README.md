# App de função inversa: documentação da v1

Atividade interativa sobre função inversa para as turmas do **EMT do IFRJ**, com referência metodológica nas investigações matemáticas de Ponte, Brocardo e Oliveira. O professor escolhe, turma a turma, o que os estudantes vão experimentar.

## Objetivo da v1

Permitir que o professor:
1. cadastre uma turma;
2. marque as etapas, aberturas e opções liberadas para ela;
3. compartilhe o acesso por **QR code e código** (projetado em slide);
4. libere ou bloqueie itens **durante a aula**.

Os estudantes passam a ver somente o que foi liberado. **Nenhum dado de estudante é guardado no servidor na v1.**

## Arquivos

| Arquivo | Conteúdo |
|---|---|
| `00-mapa-do-app.md` | **o app inteiro**: referência metodológica, cada etapa, a leitura pelos quatro momentos e a relação entre a abertura e o corpo |
| `01-escopo-v1.md` | o que entra e o que fica fora da v1, premissas, definição de pronto |
| `02-arquitetura.md` | componentes, fluxos do professor e do aluno, modelo de dados, API, regras |
| `03-catalogo-de-itens.md` | **ids fixos** de aberturas, etapas, partes, funções e recursos transversais; dependências |
| `04-plano-de-implementacao.md` | divisão entre técnico e conteúdo; marcos M0 a M7 e C1 a C4, com critérios de aceite |
| `05-testes-e-piloto.md` | testes técnicos, teste de sala, decisões técnicas em aberto |
| `06-abertura.md` | síntese pedagógica da abertura (galeria, apostas, critérios) |
| `07-pendencias.md` | pendências de conteúdo e design: hierarquia visual, pergunta de E4, revisões de E5, observações sobre E7 e E8, decisões em aberto |
| `08-decisoes.md` | registro de decisões: data, origem, motivo. **Atualizar a cada sessão** |
| `09-protocolo-de-trabalho.md` | como conduzir o projeto com o Claude e o ChatGPT; prompts de abertura, fechamento e parecer |

## Decisões tomadas

- **Backend:** Google Planilhas e Google Apps Script.
- **Painel do professor na v1:** a própria planilha.
- **Acesso do aluno:** um código por turma, com o QR levando o código embutido no link.
- **Progresso do aluno:** salvo só no navegador do aluno.
- **Liberação no meio da aula:** o item aparece sem recarregar a página. **Bloqueio no meio da aula:** vale só para itens que o aluno ainda não iniciou.
- **Ids semânticos e estáveis** (`et-fita`, `ab-magica`…). A ordem fica separada, no catálogo.
- **E7 e E8 fora da v1.** O E6 (`et-diario`) é a reflexão final e será revisto.
- **Caderno de conjecturas (`tr-caderno`) adotado:** registra a aposta e as conjecturas e as retoma ao longo do app.
- **Aberturas eliminadas:** o GPS, que reproduz o E2. O `mod-x2` também saiu, porque a Investigação 2 de E4 já tem o par x²/4 com x ≥ 0 e x²/4 em ℝ.

## Em aberto (ver `07`)

- Redistribuir funções entre E6, E7 e E8, para evitar repetições (O4).
- Ordem entre o gráfico e as máquinas (E4/E5).
- Partes de `et-rio`, `et-maquinas` e `et-diario`.

## Fora da v1

- Painel do professor dentro do site, com login próprio.
- Registro de dados de estudantes no servidor (depende do tratamento de dados e, se houver pesquisa, do CEP do IFRJ).
- Roda de cifra e atividades do GeoGebra como itens da suíte.
