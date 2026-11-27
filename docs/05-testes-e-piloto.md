# 05. Testes e piloto

## Testes técnicos

**O** = obrigatório para a v1; **D** = desejável.

| # | Teste | Como testar | Esperado | |
|---|---|---|---|---|
| T1 | entrada por QR | ler o QR projetado com o celular | entra na turma sem digitar | O |
| T2 | código digitado | digitar em minúsculas e com espaço | aceita | O |
| T3 | código inválido | digitar um código inexistente | mensagem clara e nova tentativa | O |
| T4 | turma inativa | desmarcar `ativa` e tentar entrar | "código inválido"; quem já está dentro continua | O |
| T5 | filtro | duas turmas com itens diferentes | cada uma vê só os seus | O |
| T6 | ordem | marcar itens fora de ordem | o app segue a ordem do catálogo | O |
| T7 | liberar no meio | marcar um item com o app aberto | aparece em até ~50 s com aviso | O |
| T8 | bloquear iniciado | desmarcar a etapa em que o aluno está | continua disponível para ele | O |
| T9 | bloquear não iniciado | desmarcar uma etapa futura | some | O |
| T10 | recarregar | recarregar a página no meio de uma etapa | progresso e aposta mantidos; mesma abertura | O |
| T11 | sem rede | modo avião no meio da atividade | continua funcionando; retoma quando a rede volta | O |
| T12 | dependência | marcar `ab-cartas` sem `fn-quad-r` | a planilha avisa | O |
| T13 | carga | simular cerca de 40 clientes consultando a cada 30 s por 15 min | sem erros de cota nem lentidão perceptível | O |
| T14 | celular pequeno | tela de cerca de 360 px de largura | nada corta nem sobrepõe | O |
| T15 | teclado e leitor de tela | percorrer o app só com teclado e com leitor de tela | tudo é alcançável e anunciado | D |
| T16 | armazenamento bloqueado | navegação anônima ou armazenamento desativado | o app funciona, sem persistência | D |
| T17 | projeção | ler o QR a cerca de 3 m | lê de primeira | D |
| T18 | menu livre | abrir o menu numa turma com itens desligados | o menu lista só os itens liberados | O |
| T19 | começar do zero | usar "Começar do zero" num computador compartilhado | o progresso daquela turma é apagado | O |

**T13** é o teste que valida a escolha do Apps Script. Se ele falhar, as alternativas são aumentar o intervalo de consulta ou o tempo de cache, ou trocar a API por Supabase ou Firebase.

## Teste de sala (piloto)

### Antes
- Um ensaio com licenciandos ou colegas valida usabilidade e clareza, mas **não** a surpresa nem o tempo de um aluno do ensino médio.
- O piloto que decide é com uma turma real do EMT.

### O que observar (aberturas, ver `06`)
- o tempo até a aposta (meta: ≤ 45 s);
- se o enunciado é entendido sem a mediação do professor;
- se o aluno registra a aposta ou pula;
- se a justificativa é uma conjectura ou só um palpite;
- se a reflexão final retoma a aposta;
- os pontos em que o professor precisou intervir.

### Como observar na v1
A v1 **não registra nada no servidor**, então a coleta depende de:
- observação em sala, com uma ficha simples por abertura;
- 2 ou 3 perguntas rápidas ao final, oralmente ou em papel;
- o próprio uso da liberação durante a aula: anotar quando e por que foi preciso liberar algo não previsto.

## Decisões em aberto

| # | Decisão | Recomendação | Quando decidir |
|---|---|---|---|
| D1 | hospedagem do site | estática (GitHub Pages ou Netlify) | antes do M7 |
| D2 | ids das etapas existentes | **fixados** em `03` | M0 |
| D3 | intervalo de consulta | 30 s, a ajustar após o T13 | M4 / T13 |
| D4 | registrar métricas anônimas (abertura vista, tempo até a aposta) no piloto | **não na v1**; avaliar na v2, junto com o tratamento de dados e o CEP | v2 |
| D5 | painel do professor no site | v2 | após o piloto |

**Sobre a D4:** o plano de piloto em `06-abertura.md` menciona o "registro do próprio app". Na v1, esse registro existe só no navegador do aluno, para que a reflexão retome a aposta, e não chega ao professor. É uma limitação consciente da v1.
