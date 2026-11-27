# 01. Escopo da v1

## Premissas

- **Público:** turmas do Ensino Médio Técnico (EMT) do IFRJ.
- **Foco:** o desenvolvimento dos conceitos matemáticos. A v1 não coleta dados para pesquisa.
- **Acesso:** na v1, cada estudante acessa uma vez, em geral durante a aula, no próprio celular ou num computador da escola. A sugestão de dividir o percurso em três encontros (E1–E3, E4, E5–E8) fica registrada só como sugestão.
- **Uso fora da aula:** deve ser possível, inclusive sem a orientação do professor. Como isso funciona (instalação, uso sem internet, o que o aluno vê sem código de turma) será planejado na retomada da arquitetura (ver `07`, P8).
- **Controle docente:** o professor decide o que cada turma experimenta, e essa decisão pode mudar durante a aula.
- **Rede da escola:** pode ser instável. O app não pode depender de conexão contínua.

## Entra na v1

1. **Cadastro de turma** (na planilha): nome da turma, código de acesso gerado automaticamente e indicação de turma ativa ou inativa.
2. **Autorização de itens por turma** (na planilha): uma caixa de seleção por item do catálogo.
3. **Página de projeção do professor:** mostra o nome da turma, o **QR code** e o **código** em tamanho grande, para slide ou projetor.
4. **Entrada do aluno:**
   - pelo QR, que abre o link já com o código e entra direto;
   - ou digitando o código numa tela inicial.
5. **App filtrado:** o aluno vê somente os itens liberados, na ordem pedagógica definida no catálogo. O menu de etapas permite navegar livremente, mas só entre os itens liberados.
6. **Atualização durante a aula:** o app reconsulta a configuração a cada 30 s e sempre que o aluno volta à aba. O item recém-liberado aparece com um aviso discreto ("Nova etapa liberada").
7. **Regra de bloqueio:** se o professor desmarcar um item, ele some para quem ainda não o iniciou e continua disponível para quem já começou.
8. **Dependências:** se um item exige outro (por exemplo, a abertura das cartas exige a Investigação 2 do gráfico com a função `fn-quad-r`), a planilha avisa o professor.
9. **Progresso salvo no navegador:** recarregar a página ou perder a conexão não apaga as respostas nem a aposta da abertura.
10. **Funcionamento com rede ruim:** o app guarda a última configuração recebida e continua funcionando sem conexão.

## Fica fora da v1

- Login do professor dentro do site e painel de edição no site.
- Qualquer dado de estudante no servidor (nome, respostas, apostas, tempo de uso).
- Relatórios por turma.
- Itens da suíte além do app de função inversa (roda de cifra, GeoGebra).

## Definição de pronto

A v1 está pronta quando, numa simulação com pelo menos 2 dispositivos e uma turma de teste:
- o professor cria a turma na planilha e projeta o QR em menos de 2 minutos;
- o aluno entra pelo QR sem digitar nada;
- o aluno vê apenas os itens marcados;
- um item marcado durante o uso aparece em até ~50 s (30 s de consulta + 20 s de cache), sem recarregar a página;
- recarregar a página mantém o progresso e a aposta;
- desligar a rede no meio da atividade não quebra o app;
- todos os testes de `05-testes-e-piloto.md` marcados como **obrigatórios** passam.
