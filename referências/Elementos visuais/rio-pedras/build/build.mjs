// Gera todas as folhas de sprites (PNG com fundo transparente), atlas.json e cenario.json.
// Uso:  node build/build.mjs        (precisa do Google Chrome instalado, usado só para rasterizar o SVG)
import { writeFileSync, mkdirSync, rmSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import * as S from './sprites.mjs';

const aqui = dirname(fileURLToPath(import.meta.url));
const raiz = resolve(aqui, '..');
const assets = join(raiz, 'assets');
const tmp = join(raiz, 'build', '.tmp');
mkdirSync(assets, { recursive: true });
mkdirSync(tmp, { recursive: true });
const CHROME = process.env.CHROME || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

function png(svg, nome, w, h, opaco = false) {
  const html = join(tmp, nome + '.html');
  writeFileSync(html, `<!doctype html><meta charset="utf-8"><style>html,body{margin:0;padding:0;background:transparent;overflow:hidden}svg{display:block}</style>${svg}`);
  execFileSync(CHROME, ['--headless=new', '--disable-gpu', '--hide-scrollbars', '--force-device-scale-factor=1',
    `--window-size=${w},${h}`, ...(opaco ? [] : ['--default-background-color=00000000']),
    `--screenshot=${join(assets, nome + '.png')}`, 'file://' + html], { stdio: 'ignore' });
}

const E = S.ESCALA;
const atlas = { escala: E, folhas: {} };

// ---- personagem ----
{
  const [cw, ch] = S.PERS_CELULA, cols = S.ORDEM_POSES.length;
  const cel = S.celulasPersonagem();
  const rows = 2;
  png(S.folha({ cw, ch, cols, rows, celulas: cel }), 'personagem', cols * cw * E, rows * ch * E);
  atlas.folhas.personagem = {
    arquivo: 'personagem.png', celula: [cw, ch], ancora: S.PERS_ANCORA,
    quadros: S.atlasQuadros(cel, cols, cw, ch),
    animacoes: {
      idle:   { quadros: ['idle_0', 'idle_1', 'idle_2', 'idle_3'], fps: 6, loop: true },
      crouch: { quadros: ['crouch'], fps: 1, loop: false },
      rise:   { quadros: ['rise'], fps: 1, loop: false },
      apex:   { quadros: ['apex'], fps: 1, loop: false },
      fall:   { quadros: ['fall'], fps: 1, loop: false },
      land:   { quadros: ['land_0', 'land_1'], fps: 11, loop: false },
      cheer:  { quadros: ['cheer_0', 'cheer_1', 'cheer_2', 'cheer_3'], fps: 8, loop: true },
      sad:    { quadros: ['sad_0', 'sad_1'], fps: 3, loop: true },
    },
    variante_com_bau: { prefixo: 'bau_' },
  };
}
// ---- baú ----
{
  const [cw, ch] = S.BAU_CELULA, cols = 5;
  const cel = S.celulasBau();
  const rows = Math.ceil(cel.length / cols);
  png(S.folha({ cw, ch, cols, rows, celulas: cel }), 'bau', cols * cw * E, rows * ch * E);
  atlas.folhas.bau = {
    arquivo: 'bau.png', celula: [cw, ch], ancora: S.BAU_ANCORA, quadros: S.atlasQuadros(cel, cols, cw, ch),
    animacoes: {
      fechado:  { quadros: ['closed_0', 'closed_1'], fps: 1.4, loop: true },
      abrindo:  { quadros: ['opening_0', 'opening_1', 'opening_2', 'opening_3'], fps: 9, loop: false },
      aberto:   { quadros: ['open_0', 'open_1', 'open_2', 'open_3'], fps: 8, loop: true },
    },
  };
}
// ---- pedras ----
{
  const [cw, ch] = S.PEDRA_CELULA, cols = 8;
  const cel = S.celulasPedra();
  const rows = Math.ceil(cel.length / cols);
  png(S.folha({ cw, ch, cols, rows, celulas: cel }), 'pedras', cols * cw * E, rows * ch * E);
  const an = {};
  for (let v = 0; v < 3; v++) {
    an[`v${v}_idle`] = { quadros: [0, 1, 2, 3].map(k => `v${v}_idle_${k}`), fps: 5, loop: true };
    an[`v${v}_press`] = { quadros: [0, 1, 2, 3].map(k => `v${v}_press_${k}`), fps: 11, loop: false };
  }
  atlas.folhas.pedras = { arquivo: 'pedras.png', celula: [cw, ch], ancora: S.PEDRA_ANCORA, quadros: S.atlasQuadros(cel, cols, cw, ch), animacoes: an };
}
// ---- efeitos ----
{
  const [cw, ch] = S.EFEITO_CELULA, cols = 5;
  const cel = S.celulasEfeitos();
  const rows = Math.ceil(cel.length / cols);
  png(S.folha({ cw, ch, cols, rows, celulas: cel }), 'efeitos', cols * cw * E, rows * ch * E);
  atlas.folhas.efeitos = {
    arquivo: 'efeitos.png', celula: [cw, ch], ancora: S.EFEITO_ANCORA, quadros: S.atlasQuadros(cel, cols, cw, ch),
    animacoes: {
      respingo: { quadros: [0, 1, 2, 3, 4, 5].map(k => 'splash_' + k), fps: 14, loop: false },
      brilho:   { quadros: [0, 1, 2, 3].map(k => 'brilho_' + k), fps: 8, loop: true },
    },
  };
}
// ---- água (correnteza) ----
{
  const [cw, ch] = S.AGUA_CELULA, cols = 4;
  const cel = S.celulasAgua();
  const rows = Math.ceil(cel.length / cols);
  png(S.folha({ cw, ch, cols, rows, celulas: cel }), 'agua_correnteza', cols * cw * E, rows * ch * E);
  atlas.folhas.agua = {
    arquivo: 'agua_correnteza.png', celula: [cw, ch], ancora: [0, 0], quadros: S.atlasQuadros(cel, cols, cw, ch),
    animacoes: { correnteza: { quadros: cel.map(c => c.nome), fps: 8, loop: true } },
    observacao: 'Ladrilho horizontal sem emenda: desenhar lado a lado (x = 0, 352, ...).',
  };
}
// ---- estáticos ----
png(S.aguaBaseSVG(), 'agua_base', S.CENA.w * E, S.CENA.h * E, true);
png(S.margensSVG(), 'margens', S.CENA.w * E, S.CENA.h * E);
atlas.estaticos = {
  agua_base: { arquivo: 'agua_base.png', tamanho: [S.CENA.w, S.CENA.h] },
  margens:   { arquivo: 'margens.png', tamanho: [S.CENA.w, S.CENA.h] },
};

// ---- cenário (posições lógicas em unidades 704x664; pontos = onde os PÉS do personagem tocam) ----
const pedras = [[247, 553], [390, 553], [532, 553], [532, 460], [532, 367], [532, 273], [532, 180]];
const cenario = {
  largura: S.CENA.w, altura: S.CENA.h,
  nos: [
    { id: 0, tipo: 'margem_partida', x: 105, y: 574, c: 0, r: 0 },
    ...pedras.map(([x, y], i) => ({ id: i + 1, tipo: 'pedra', x, y: y + 3, variante: i % 3, pedra: { x, y }, c: Math.min(i + 1, 3), r: Math.max(0, i - 2) })),
    { id: 8, tipo: 'margem_chegada', x: 520, y: 112, c: 3, r: 5 },
  ],
  // grade lógica: c = colunas (esq/dir), r = linhas (descer/subir). Comandos: dir(+c) esq(-c) subir(+r) descer(-r)
  passo: { x: 142.5, y: 93 },
  bau: { x: 580, y: 98 },
  rotulos: [
    { texto: 'PARTIDA', x: 35, y: 632 },
    { texto: 'OUTRA MARGEM', x: 510, y: 36 },
  ],
};
writeFileSync(join(assets, 'atlas.json'), JSON.stringify(atlas, null, 1));
writeFileSync(join(assets, 'cenario.json'), JSON.stringify(cenario, null, 1));
rmSync(tmp, { recursive: true, force: true });
console.log('ok: assets gerados em', assets);
