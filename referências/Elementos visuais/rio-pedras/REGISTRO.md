# Registro — Animação "Rio e pedras" (frame a frame)

Projeto: aplicativo web da Máquina de Funções / travessia do rio.
Objetivo: substituir a animação atual (feita pelo ChatGPT) por uma animação em **spritesheets**, com visual de jogo simples, usando a **paleta da Máquina de Funções**, **sem alterar a lógica** que obedece à instrução do estudante.

---

## 1. Checagem: o que pode estar passando despercebido

| # | Ponto | Situação / decisão |
|---|---|---|
| 1 | **Spritesheet resolve só o "desenho" do movimento.** Deslocar o personagem pela tela (arco do salto) é feito por código; o sprite só troca a *pose*. | Adotado: pose por quadro + trajetória por código. |
| 2 | **A instrução errada do estudante** (ex.: pular onde não há pedra) precisa de animação própria. | Incluído: queda na água (respingo) + pose triste + retorno à pedra de origem. |
| 3 | **Onde ficam as imagens.** | Decidido: app hospedado no GitHub Pages; caminhos relativos (`base:'assets/'`). Se o app do ChatGPT rodar em iframe com CSP restrita, o domínio do Pages precisa ser permitido (ver INTEGRACAO.md). |
| 4 | **Número de pedras fixo (7)** e posições. | Posições e grade (c, r) ficam em `assets/cenario.json`. Mudar o caminho = editar o JSON, não o código. |
| 5 | **Direção.** O personagem é frontal (espelha para esquerda/direita). | Aceito nesta versão. Versão de costas/lado = futura. |
| 6 | **Acessibilidade.** Quem tem "reduzir movimento" no sistema, leitor de tela, daltonismo. | `prefers-reduced-motion` (água parada, saltos curtos); `aria-label` no canvas ("Rio com pedras entre duas margens"); texto de status em `aria-live` falando cada evento. Informação nunca só por animação/cor. |
| 7 | **Velocidade e fila.** Várias instruções seguidas não podem se atropelar. | Todas as chamadas entram numa fila; `velocidade` ajustável (0,5×–2×); `reiniciar()` limpa a cena. |
| 8 | **Retina e peso.** | Sprites exportados em 2× (retina). Total ≈ 3,0 MB (maior: fundo da água 1,1 MB; pode virar degradê em CSS se precisar emagrecer). |
| 9 | **Rótulos "PARTIDA" / "OUTRA MARGEM"** | Texto HTML sobreposto (não dentro da imagem): traduzível, legível por leitor de tela. |
| 10 | **Som** | Não incluído; o motor emite eventos (`aoPousar`, `aoCair`...) onde som pode ser ligado depois. |
| 11 | **Autoria** | Tudo gerado por código (nenhum material de terceiros). Regenerável com `node build/build.mjs`. |

## 2. O que foi construído

Camadas desenhadas, de baixo para cima:

1. **Fundo da água** (estático, degradê lilás, mais claro perto das margens).
2. **Correnteza** (8 quadros em ladrilho contínuo, 352×664 repetido 2×): três camadas de ondas/espuma em velocidades diferentes dão a sensação de correnteza da esquerda para a direita.
3. **Margens** (estático, com sombra na água, tufos e seixos).
4. **Pedras** (3 formatos × [oscilar na água ×4 + pisar com respingo ×4]).
5. **Baú** (fechado → abrindo → aberto com raios e estrelas piscando) e **Personagem** (16 poses, sem baú e com baú), ordenados por profundidade (y).
6. **Efeitos** (respingo na água, brilho).

Sequência de um salto (v2: um comando = um salto): agachar (150 ms) → subir → ápice → descer → aterrissar (2 quadros) + pedra afunda e espirra → parado. Na outra margem: baú (fechado na ida) abre → personagem comemora → baú voa para as mãos → o personagem espera os comandos da volta → ao chegar à partida comemora com o baú erguido.

Taxas: personagem 6–11 fps conforme a ação, água 8 fps, pedras 5/11 fps, baú 1,4/9/8 fps; trajetória a 60 fps.

## 3. Regras da etapa "função inversa" (v2)

- O estudante dá **comandos**: `dir`, `esq`, `subir`, `descer` (cada um = 1 pulo, com quantidade `n`). Ele diz como **ir** ao tesouro e como **voltar**.
- Grade lógica: colunas (`c`, esq/dir) e linhas (`r`, descer/subir). Caminho certo da ida: `dir ×3`, `subir ×5`. Da volta: `descer ×5`, `esq ×3` — mesmos números, **ordem e sentidos trocados** (a analogia com a função inversa).
- Na ida o baú está **fechado**; ao pisar na outra margem ele **abre sozinho**, o personagem comemora, **pega o baú automaticamente** e **fica parado aguardando** os comandos da volta.
- Comando que não leva a uma pedra: o personagem **cai na água** (respingo, volta à pedra de origem) ou **tropeça** se o salto fosse para a margem/fora da cena. Por padrão a lista de comandos é interrompida no 1º erro.
- Ao voltar à partida com o baú: comemora com o baú erguido e dispara `aoTerminar`.
- Controle de velocidade mantido (`anim.velocidade`, 0,5–3).

## 4. Integração com o app do ChatGPT

Veja [INTEGRACAO.md](INTEGRACAO.md): prompt pronto para colar, contrato da API (`executar`, `reiniciar`, eventos, formato do resultado) e passos de publicação no GitHub Pages.

## 5. Declaração de todos os elementos

### 5.1 Paleta (`build/paleta.mjs`)

| Token | Hex | Origem |
|---|---|---|
| gold | `#eaad15` | SVG da máquina (22 usos) — contornos, pedras, bandas do baú |
| ink2 | `#5f4b77` | SVG (13) — chapéu, esteira, interior da tampa |
| grey | `#6c6a61` | SVG (11) — não usado na cena (reservado) |
| purpleText | `#681787` | SVG (5) — rótulos e títulos |
| cream | `#fffdf5` | SVG — brilhos, espuma |
| red | `#b70606` | SVG — corpo do baú |
| orange | `#ff6632` | SVG — camisa do personagem |
| cream2 | `#f9efb7` | SVG — areia interna das margens |
| sunTop / sunBottom | `#ffde59` / `#ff914d` | SVG — degradê de fundo (extremos); pedras e areia |
| lilacMid, greyDark, white | `#736884`, `#737373`, `#ffffff` | SVG — reservadas |
| ink | `#3f2d5e` | derivada (roxo da esteira) — contornos fortes |
| lilac, lilacLight | `#9a85b8`, `#d9cfe8` | derivadas — brilhos na água, botões |
| goldDark, goldLight | `#b07f0a`, `#ffe98a` | derivadas do dourado |
| redDark, redLight | `#7e0404`, `#d42a1a` | derivadas do vermelho |
| skin, skinShade | `#f2b48c`, `#d98f68` | derivadas (pele quente) |
| water1–3, waterDeep, waterShallow | `#b9a9d8`, `#8f7bb5`, `#6a5590`, `#4a3a66`, `#d6c9ea` | família do roxo para o rio |

### 5.2 Imagens (`assets/`)

| ID | Arquivo | Tipo | Célula (lógica) | Quadros | Âncora | Uso |
|---|---|---|---|---|---|---|
| agua_base | `agua_base.png` | estático opaco 1408×1328 | 704×664 | 1 | — | fundo do rio |
| agua | `agua_correnteza.png` | spritesheet 4×2 | 352×664 | 8 (`agua_0..7`) | (0,0) | correnteza, 8 fps, desenhar em x=0 e x=352 |
| margens | `margens.png` | estático transparente | 704×664 | 1 | — | margens, tufos, seixos, sombra na água |
| pedras | `pedras.png` | spritesheet 8×3 | 104×84 | 24: `v{0,1,2}_idle_0..3`, `v{0,1,2}_press_0..3` | (52,36) centro da face superior | pedras; `press` = pisada com respingo |
| bau | `bau.png` | spritesheet 5×2 | 120×120 | 10: `closed_0..1`, `opening_0..3`, `open_0..3` | (60,104) base | tesouro: fechado, abrindo, aberto com brilho |
| personagem | `personagem.png` | spritesheet 16×2 | 96×144 | 32 = 16 poses × (sem baú, `bau_` com baú) | (48,125) pés | avatar |
| efeitos | `efeitos.png` | spritesheet 5×2 | 96×96 | 10: `splash_0..5`, `brilho_0..3` | (48,70) | respingo na água, brilho |
| atlas | `atlas.json` | dados | — | — | — | posição de cada quadro (pixels), âncoras, animações e fps |
| cenario | `cenario.json` | dados | 704×664 | — | — | nós (partida, 7 pedras, margem), posição do baú, rótulos |

Poses do personagem (`personagem.png`): `idle_0..3`, `crouch`, `rise`, `apex`, `fall`, `land_0..1`, `cheer_0..3`, `sad_0..1`.
Animações nomeadas (em `atlas.json`): `idle`, `crouch`, `rise`, `apex`, `fall`, `land`, `cheer`, `sad`; baú: `fechado`, `abrindo`, `aberto`; pedras: `v*_idle`, `v*_press`; efeitos: `respingo`, `brilho`; água: `correnteza`.

### 5.3 Elementos gerados por código no motor (sem PNG)

| Elemento | Descrição |
|---|---|
| Sombra do personagem | Elipse roxa que encolhe e clareia com a altura do salto. |
| Trajetória do salto | Arco parabólico: altura = 34 + 0,18 × distância; duração = 380 + 1,1 × distância (ms). |
| Voo do baú às mãos | Arco de 380 ms com redução de escala para 0,4. |
| Ordem de desenho | Atores ordenados por y (quem está mais embaixo na tela fica na frente). |
| Máscara de terra | Lida de `margens.png` (canal alfa) para decidir se um salto errado cai na água ou na margem. |
| Rótulos | "PARTIDA" e "OUTRA MARGEM" em HTML, cor `#5f4b77`, negrito. |

### 5.4 Arquivos do projeto

```
rio-pedras/
  index.html          demonstração + galeria dos spritesheets
  animacao.js         motor (classe RioAnimacao)
  assets/             PNGs, atlas.json, cenario.json
  build/paleta.mjs    cores
  build/sprites.mjs   desenho (SVG por código) de todos os quadros
  build/build.mjs     exporta os PNG e JSON  →  node build/build.mjs
  REGISTRO.md         este documento
```

## 6. Pendências e próximos passos
- Publicar no GitHub Pages e conferir a CSP do app do ChatGPT (ver INTEGRACAO.md).
- Opcional: personagem de lado/costas; som; mais variações de pedra; baú-troféu na tela final.
- Ajustes finos de visual após ver rodando no app (tamanho do personagem, ritmo do salto, cor da água).
