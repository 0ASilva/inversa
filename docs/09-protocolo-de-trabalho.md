# 09. Protocolo de trabalho: um projeto, duas IAs

## Princípios

1. **A memória do projeto são os arquivos, não as conversas.** Nem o Claude nem o ChatGPT veem o que o outro disse. O que não está nesta pasta não existe para a próxima sessão.
2. **Uma única fonte de verdade:** o repositório https://github.com/0ASilva/inversa, com `docs/` (esta pasta) e o código.
3. **Só o Claude Code escreve código.** Cada tarefa é feita numa branch própria e entregue como pull request. Duas IAs alterando os mesmos arquivos geram versões divergentes.
4. **O ChatGPT revisa.** Ele lê o pull request ou o documento e critica, mas não envia alterações ao repositório. O ganho de trabalhar com as duas está no confronto, não na duplicação.
5. **O professor é o único que decide.** Ele aprova pelo comportamento do app (telas e critérios de aceite), não pelo código, e não resolve conflitos de código: isso é tarefa da IA que implementa. O professor não quer aprender programação. A IA propõe as linhas de `08-decisoes.md`, e o professor confirma o texto no pull request.

## Papéis sugeridos

| Tarefa | Onde | Por quê |
|---|---|---|
| Implementação (M0 a M7, conteúdo das etapas) | **Claude Code**, ligado ao repositório, por branch e pull request | trabalha direto nos arquivos, roda testes e abre o pull request |
| Revisão do pull request | **ChatGPT** | segunda opinião sobre o que foi implementado |
| Discussão pedagógica e de design | qualquer uma das duas | |
| Revisão crítica de uma decisão ou de um texto | **a IA que não propôs** | segunda opinião independente |
| Redação de textos de tela (enunciados, feedbacks) | qualquer uma, com revisão da outra | |

## Ciclo de uma sessão

1. **Abrir** uma conversa **nova** por tarefa: um marco, uma pendência ou uma etapa.
2. **Colar o prompt de abertura** (abaixo) e anexar só os arquivos relevantes.
3. **Trabalhar** numa pergunta delimitada.
4. **Fechar** com o prompt de fechamento (abaixo).
5. **Integrar:** o Claude Code aplica as alterações numa branch, propõe as linhas de `08` e abre o pull request; o professor revisa e aprova o merge.
6. **Opcional:** levar a decisão para a outra IA com o prompt de parecer.

## Prompt de abertura

```
Projeto: app de função inversa (EMT/IFRJ). Leia o README.md anexo e os arquivos [lista].
Decisões já tomadas estão em 08-decisoes.md: não as rediscuta sem que eu peça.
Tarefa desta sessão: [uma tarefa delimitada].
Ao final, vou pedir as alterações a fazer nos arquivos.
```

## Prompt de fechamento

```
Encerrando a sessão. Liste:
(1) as alterações a fazer em cada arquivo de docs/, como trechos a substituir (não reescreva arquivos inteiros);
(2) as novas linhas para 08-decisoes.md, separando o que eu decidi do que foi apenas proposto;
(3) as pendências abertas para 07-pendencias.md.
```

## Prompt de parecer (para a outra IA)

```
Projeto: app de função inversa (EMT/IFRJ). Anexo o README.md e [arquivo].
Outra IA propôs a decisão abaixo. Critique-a: ponto mais fraco, alternativa,
o que um professor de matemática ou um parecerista objetaria.
[decisão]
```

## Antes de cada lote

Ler a continuidade e conferir a branch e o commit de base. Não editar só um HTML compilado: editar os fontes e recompilar. Não editar ao mesmo tempo o mesmo arquivo em cópias divergentes.

## Escolha de modelo no ChatGPT

O plano do ChatGPT recomenda testar o GPT-5.6 Sol num lote delimitado e comparar fidelidade aos ativos, regressões, clareza do registro e retrabalho. **Não verificado pelo Claude:** a existência e a disponibilidade desses modelos na conta precisam ser conferidas. Trocar de modelo não amplia cotas.

## Quando as duas IAs discordarem

Registre as **duas posições** em `08`, decida e anote o motivo. Nenhuma IA decide. Atenção a textos que atribuem decisões a você ("você decidiu…"): confira se a decisão foi de fato sua.

## Para não parar por falta de limite

- **Conversas longas são o principal consumo.** Cada nova mensagem carrega a conversa inteira. Abrir uma conversa nova por tarefa, com o prompt de abertura, custa muito menos do que continuar uma conversa extensa.
- **Use um Projeto do Claude** com esta pasta como conhecimento do projeto. O conteúdo de projetos é armazenado em cache e pesa menos quando reutilizado.
- **O Claude Code e o chat do Claude consomem o mesmo limite.** Uma sessão longa de programação reduz o que sobra para a discussão.
- **Peça alterações pontuais**, não arquivos inteiros reescritos, e agrupe perguntas relacionadas numa só mensagem.
- **Ajuste o modelo e o esforço à tarefa.** Tarefas rotineiras (renomear, formatar, aplicar uma mudança já decidida) não precisam do modelo mais potente nem de esforço máximo.
- **A garantia de continuidade está nos arquivos.** Se uma das IAs atingir o limite, a outra continua de onde a sessão parou, porque o estado está em `docs/` e no repositório, não na conversa.
- Acompanhe o consumo nas configurações de uso. Planos pagos permitem comprar uso adicional.
