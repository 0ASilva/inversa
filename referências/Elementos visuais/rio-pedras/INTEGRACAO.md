# Integração com o app do ChatGPT

## 1. Publicar no GitHub Pages

1. Coloque a pasta `rio-pedras/` (ou só `animacao.js` + `assets/`) no repositório do app.
2. Settings → Pages → escolher a branch/pasta. A URL fica `https://SEU-USUARIO.github.io/REPO/...`.
3. Use caminhos **relativos**: `base: 'assets/'`. Não use `file://` (o `fetch` dos JSON não funciona assim). Para testar localmente: `python3 -m http.server` na pasta.
4. Se o app do ChatGPT roda em iframe/widget com política de segurança (CSP), inclua o domínio `SEU-USUARIO.github.io` como origem permitida para imagens e `fetch`. Se não puder, peça a versão autocontida (imagens embutidas em base64).

## 2. Prompt para colar no ChatGPT

> Vou te enviar uma nova camada VISUAL para a travessia do rio. **Troque somente o desenho e a animação**; **não altere** regras, cálculos, validações, textos de feedback nem o fluxo do app. A lógica existente continua decidindo se a resposta do estudante está certa; a animação só obedece e mostra o resultado.
>
> **Arquivos:** `animacao.js` e a pasta `assets/` (hospedados em `<URL-do-GitHub-Pages>`). Não edite os PNG nem o `animacao.js`; para mudar o caminho, edite só `assets/cenario.json`.
>
> **Passos**
> 1. Apague a animação antiga (CSS/JS/SVG que desenha ou move personagem, pedras, rio, baú). Mantenha os rótulos PARTIDA e OUTRA MARGEM como texto HTML sobre a cena.
> 2. Coloque `<canvas id="cena" role="img" aria-label="Rio com pedras entre duas margens" style="width:100%;height:auto">` e carregue `animacao.js`.
> 3. Crie uma vez: `const anim = new RioAnimacao(document.getElementById('cena'), { base: '<URL>/assets/', aoPegarBau: ..., aoTerminar: ... }); await anim.carregar();`
> 4. Os comandos do estudante são `dir`, `esq`, `subir`, `descer`, cada um com uma quantidade. Quando o estudante confirmar a sequência (ida ou volta), chame **uma vez**, na ordem dada: `const r = await anim.executar([{acao:'dir', n:3}, {acao:'subir', n:5}])`. Só libere o próximo passo do app depois que a Promise resolver.
> 5. Use o retorno `r` (`ok`, `executados`, `falha`, `estado`) para o texto/feedback; **não** recalcule a posição por conta própria. A posição na grade é `r.estado.c`, `r.estado.r`; `r.estado.carregandoBau` diz se o baú já foi pego.
> 6. A animação já faz sozinha: baú fechado na ida → abre quando o personagem chega à outra margem → o personagem pega o baú e **fica aguardando** os comandos da volta → ao voltar à partida comemora. O app deve apenas pedir os comandos da volta quando receber o evento `aoPegarBau`.
> 7. Se um comando não leva a uma pedra, o personagem cai na água (ou tropeça na margem) e volta; `r.ok` vem `false` e `r.falha` descreve (`comando`, `passo`, `motivo`: `'agua'` ou `'margem'`). Por padrão os comandos seguintes da lista **não** são animados.
> 8. "Tentar de novo / novo exercício": `await anim.reiniciar()` (cancela qualquer animação em curso).
> 9. Controle de velocidade: ligue o controle existente a `anim.velocidade = valor` (0,5 a 3).
> 10. Mantenha acessibilidade: texto de status em região `aria-live` descrevendo cada evento (o motor também emite eventos para isso).
>
> **Teste e me responda, item a item (passou / não passou):** (a) `dir ×3, subir ×5` chega à outra margem e o baú abre e é pego; (b) o personagem espera parado; (c) `descer ×5, esq ×3` volta à partida e dispara `aoTerminar`; (d) `subir` na primeira pedra cai na água e volta; (e) `esq` na partida tropeça sem cair na água; (f) `reiniciar()` no meio de uma animação; (g) nenhum erro no console. Não altere a lógica para "fazer passar".

## 3. API

| Item | Descrição |
|---|---|
| `new RioAnimacao(canvas, opções)` | opções: `base` (pasta dos assets), `velocidade` (1), `bauInicialAberto` (false), `pararNoErro` (true), `fpsAgua` (8), callbacks abaixo |
| `await anim.carregar()` | carrega atlas, cenário, imagens; inicia o desenho |
| `await anim.executar(comandos)` | `[{acao:'dir',n:3}]`, `['dir 3','subir 5']` ou `'dir 3, subir 5'`. Aceita apelidos: direita, esquerda, cima, baixo |
| `await anim.mover('dir', 2)` | atalho para um comando |
| `await anim.reiniciar()` | cena inicial; cancela animação em curso (a chamada em andamento resolve com `cancelado:true`) |
| `anim.velocidade` | leitura/escrita, 0,25–3 |
| `anim.estado` | `{id, c, r, carregandoBau, bau, ocupado}` |

**Resultado de `executar`:** `{ ok, executados, falha: null | {comando, passo, motivo, de:{id,c,r}}, estado, cancelado? }`

**Callbacks:** `aoMover({comando, de})`, `aoPousar({id,c,r})`, `aoCair({comando, motivo, de})`, `aoChegarMargem({id,c,r})`, `aoPegarBau({id,c,r})`, `aoTerminar({id,c,r})`.

**Grade (cenario.json):** `dir` = c+1, `esq` = c−1, `subir` = r+1, `descer` = r−1. Nós: 0 partida (0,0); 1–3 pedras (1..3, 0); 4–7 pedras (3, 1..4); 8 outra margem (3,5).
