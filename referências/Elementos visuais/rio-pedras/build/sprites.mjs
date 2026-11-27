import { C } from './paleta.mjs';

export const ESCALA = 2; // pixels exportados por unidade lógica (retina)
export const CENA = { w: 704, h: 664 };
const r2 = (n) => +n.toFixed(2);

/* ============================ utilitários ============================ */
export function folha({ cw, ch, cols, rows, celulas, escala = ESCALA }) {
  const W = cols * cw, H = rows * ch;
  let s = `<svg xmlns="http://www.w3.org/2000/svg" width="${W * escala}" height="${H * escala}" viewBox="0 0 ${W} ${H}">`;
  celulas.forEach((c, i) => {
    const x = (i % cols) * cw, y = Math.floor(i / cols) * ch;
    s += `<svg x="${x}" y="${y}" width="${cw}" height="${ch}" viewBox="0 0 ${cw} ${ch}" overflow="hidden">${c.draw('c' + i + '_')}</svg>`;
  });
  return s + '</svg>';
}
export function atlasQuadros(celulas, cols, cw, ch, escala = ESCALA) {
  const q = {};
  celulas.forEach((c, i) => {
    q[c.nome] = [(i % cols) * cw * escala, Math.floor(i / cols) * ch * escala, cw * escala, ch * escala];
  });
  return q;
}
const star = (x, y, r, fill = C.cream, op = 1) => {
  const k = r * 0.26;
  return `<polygon opacity="${op}" fill="${fill}" points="${x},${y - r} ${x + k},${y - k} ${x + r},${y} ${x + k},${y + k} ${x},${y + r} ${x - k},${y + k} ${x - r},${y} ${x - k},${y - k}"/>`;
};

/* ============================ PERSONAGEM ============================ */
// Célula 96x144. Âncora (pés) em (48,125). Vista frontal; o motor espelha (flip) conforme a direção.
export const PERS_CELULA = [96, 144];
export const PERS_ANCORA = [48, 125];

export const POSES = {
  idle_0: { sy: 1,    arm: [5, 5],     leg: [3, 3] },
  idle_1: { sy: 1.03, arm: [8, 8],     leg: [3, 3], dy: -0.5 },
  idle_2: { sy: 1.04, arm: [10, 10],   leg: [3, 3], dy: -1 },
  idle_3: { sy: 1.02, arm: [7, 7],     leg: [3, 3], eyes: 'closed' },
  crouch: { sy: 0.9,  arm: [14, 14],   leg: [16, 16], ls: 0.68 },
  rise:   { sy: 1.1,  arm: [150, 150], leg: [10, 10], ls: 0.92, mouth: 'open' },
  apex:   { sy: 1.03, arm: [112, 112], leg: [30, 30], ls: 0.74, eyes: 'happy', mouth: 'open' },
  fall:   { sy: 1.08, arm: [72, 72],   leg: [7, 7],  ls: 1, mouth: 'o' },
  land_0: { sy: 0.88, arm: [58, 58],   leg: [24, 24], ls: 0.62 },
  land_1: { sy: 0.95, arm: [26, 26],   leg: [10, 10], ls: 0.86 },
  cheer_0: { sy: 1,    arm: [168, 168], leg: [8, 8],  ls: 0.82, eyes: 'happy', mouth: 'open' },
  cheer_1: { sy: 1.08, arm: [150, 176], leg: [6, 6],  ls: 1, dy: -9, eyes: 'happy', mouth: 'open' },
  cheer_2: { sy: 1.1,  arm: [176, 150], leg: [10, 10], ls: 0.92, dy: -11, eyes: 'happy', mouth: 'open' },
  cheer_3: { sy: 0.96, arm: [160, 160], leg: [8, 8],  ls: 0.76, dy: -3, eyes: 'happy', mouth: 'open' },
  sad_0:  { sy: 0.97, arm: [2, 2],     leg: [3, 3], eyes: 'sad', mouth: 'frown' },
  sad_1:  { sy: 0.95, arm: [0, 0],     leg: [3, 3], eyes: 'sad', mouth: 'frown', dy: 0.5 },
};
export const ORDEM_POSES = Object.keys(POSES);

function olhos(tipo) {
  const L = 42, R = 54, y = 43;
  if (tipo === 'closed') return [L, R].map(x => `<path d="M${x - 2.6} ${y} Q${x} ${y + 2.4} ${x + 2.6} ${y}" fill="none" stroke="${C.ink}" stroke-width="1.8" stroke-linecap="round"/>`).join('');
  if (tipo === 'happy') return [L, R].map(x => `<path d="M${x - 2.8} ${y + 1.4} Q${x} ${y - 2.8} ${x + 2.8} ${y + 1.4}" fill="none" stroke="${C.ink}" stroke-width="1.9" stroke-linecap="round"/>`).join('');
  if (tipo === 'sad') return [L, R].map(x => `<path d="M${x - 2.8} ${y} Q${x} ${y + 3} ${x + 2.8} ${y}" fill="none" stroke="${C.ink}" stroke-width="1.8" stroke-linecap="round"/>`).join('')
    + `<path d="M39 38.5 L44.5 40 M57 38.5 L51.5 40" stroke="${C.ink}" stroke-width="1.5" stroke-linecap="round"/>`
    + `<ellipse cx="38.6" cy="49.5" rx="1.3" ry="2" fill="${C.lilacLight}"/>`;
  return [L, R].map(x => `<circle cx="${x}" cy="${y}" r="2.3" fill="${C.ink}"/><circle cx="${x + 0.8}" cy="${y - 0.9}" r="0.8" fill="${C.white}"/>`).join('');
}
function boca(tipo) {
  if (tipo === 'open') return `<path d="M43.5 49 Q48 58.5 52.5 49 Z" fill="${C.red}" stroke="${C.ink}" stroke-width="1.3" stroke-linejoin="round"/>`;
  if (tipo === 'o') return `<ellipse cx="48" cy="51.5" rx="2.6" ry="3.2" fill="${C.red}" stroke="${C.ink}" stroke-width="1.2"/>`;
  if (tipo === 'frown') return `<path d="M44 52.5 Q48 48.5 52 52.5" fill="none" stroke="${C.ink}" stroke-width="1.8" stroke-linecap="round"/>`;
  return `<path d="M44 49.5 Q48 53.8 52 49.5" fill="none" stroke="${C.ink}" stroke-width="1.8" stroke-linecap="round"/>`;
}
function bracoSolto(x, ang, lado) {
  const a = lado === 'e' ? ang : -ang;
  return `<g transform="translate(${x} 64) rotate(${a})">
    <rect x="-3.2" y="5" width="6.4" height="11" rx="3.2" fill="${C.skin}" stroke="${C.ink}" stroke-width="1.4"/>
    <circle cx="0" cy="17.5" r="4.2" fill="${C.skin}" stroke="${C.ink}" stroke-width="1.4"/>
    <rect x="-4.7" y="-3" width="9.4" height="11" rx="4.7" fill="${C.orange}" stroke="${C.ink}" stroke-width="1.5"/></g>`;
}
function perna(x, ang, ls, drop, lado) {
  const a = lado === 'e' ? ang : -ang;
  return `<g transform="translate(${x} ${83 + drop}) rotate(${a}) scale(1 ${ls})">
    <rect x="-4.6" y="0" width="9.2" height="14" rx="4" fill="${C.ink2}" stroke="${C.ink}" stroke-width="1.5"/>
    <ellipse cx="0" cy="14.2" rx="6.8" ry="4" fill="${C.ink}"/></g>`;
}

/** Baú (reutilizado na sprite do baú e nas mãos do personagem). Coordenadas da célula 120x120, base em (60,104). */
export function baúSVG({ id, abrir = 0, raios = 0, brilho = null, estrelas = true, fase = 0, luz = true }) {
  const aberto = abrir >= 0.8;
  const meio = abrir >= 0.5 && abrir < 0.8;
  const fresta = abrir > 0 && abrir < 0.5;
  let s = '';
  s += `<defs>
    <radialGradient id="${id}glow" cx="60" cy="58" r="64" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="${C.goldLight}" stop-opacity="0.95"/><stop offset="0.45" stop-color="${C.goldLight}" stop-opacity="0.35"/><stop offset="1" stop-color="${C.goldLight}" stop-opacity="0"/></radialGradient>
    <radialGradient id="${id}ray" cx="60" cy="58" r="62" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="${C.cream}" stop-opacity="0.85"/><stop offset="1" stop-color="${C.goldLight}" stop-opacity="0"/></radialGradient>
    <linearGradient id="${id}red" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${C.redLight}"/><stop offset="1" stop-color="${C.red}"/></linearGradient>
    <linearGradient id="${id}body" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${C.red}"/><stop offset="1" stop-color="${C.redDark}"/></linearGradient>
    <clipPath id="${id}lidclip"><path d="M20 66 L20 54 Q20 34 60 34 Q100 34 100 54 L100 66 Z"/></clipPath>
  </defs>`;
  // sombra no chão
  s += `<ellipse cx="60" cy="106" rx="42" ry="8" fill="${C.ink}" opacity="0.28"/>`;
  // brilho e raios (atrás do baú)
  if (brilho !== null && luz) {
    s += `<circle cx="60" cy="58" r="64" fill="url(#${id}glow)" opacity="${0.55 + 0.45 * raios}"/>`;
    let rs = '';
    for (let i = 0; i < 8; i++) {
      const a = (i * 45 + fase) * Math.PI / 180, w = 0.13;
      const p = (aa, rr) => `${r2(60 + Math.cos(aa) * rr)},${r2(58 + Math.sin(aa) * rr)}`;
      rs += `<polygon points="60,58 ${p(a - w, 66)} ${p(a + w, 66)}" fill="url(#${id}ray)"/>`;
    }
    s += `<g opacity="${0.35 + 0.55 * raios}">${rs}</g>`;
  }
  // parte de trás da tampa (face interna) quando aberto
  if (meio || aberto) {
    const top = aberto ? 6 : 18;
    s += `<path d="M26 66 L${aberto ? 30 : 26} ${top + 14} Q60 ${top - 8} ${aberto ? 90 : 94} ${top + 14} L94 66 Z" fill="${C.ink2}" stroke="${C.ink}" stroke-width="3" stroke-linejoin="round"/>`;
    s += `<path d="M36 62 L${aberto ? 38 : 36} ${top + 20} Q60 ${top + 4} ${aberto ? 82 : 84} ${top + 20} L84 62 Z" fill="${C.lilac}" opacity="0.55"/>`;
    s += `<path d="M26 66 L${aberto ? 30 : 26} ${top + 14} Q60 ${top - 8} ${aberto ? 90 : 94} ${top + 14}" fill="none" stroke="${C.gold}" stroke-width="3" stroke-linecap="round"/>`;
  }
  // interior + moedas (quando há abertura)
  if (fresta || meio || aberto) {
    s += `<ellipse cx="60" cy="67" rx="38" ry="${aberto ? 8 : 5}" fill="${C.ink}"/>`;
    if (meio || aberto) {
      s += `<path d="M26 68 Q30 52 46 55 Q60 46 74 55 Q90 52 94 68 Z" fill="${C.goldLight}" stroke="${C.gold}" stroke-width="2" stroke-linejoin="round"/>`;
      [[38, 60], [52, 54], [68, 56], [82, 61], [60, 62]].forEach(([x, y], i) => {
        s += `<ellipse cx="${x}" cy="${y}" rx="7" ry="5.2" fill="${i % 2 ? C.gold : C.goldLight}" stroke="${C.goldDark}" stroke-width="1.5"/><path d="M${x - 3} ${y} h6" stroke="${C.goldDark}" stroke-width="1.2" stroke-linecap="round"/>`;
      });
      s += `<circle cx="47" cy="60" r="3.4" fill="${C.red}" stroke="${C.ink}" stroke-width="1.2"/><circle cx="73" cy="59" r="3" fill="${C.lilac}" stroke="${C.ink}" stroke-width="1.2"/>`;
    } else {
      s += `<rect x="24" y="64" width="72" height="4" fill="${C.goldLight}" opacity="0.95"/>`;
    }
  }
  // corpo
  s += `<rect x="20" y="64" width="80" height="40" rx="5" fill="url(#${id}body)" stroke="${C.ink}" stroke-width="3"/>`;
  s += `<rect x="33" y="64" width="9" height="40" fill="${C.gold}" stroke="${C.ink}" stroke-width="2"/><rect x="78" y="64" width="9" height="40" fill="${C.gold}" stroke="${C.ink}" stroke-width="2"/>`;
  s += `<rect x="20" y="94" width="80" height="10" rx="4" fill="${C.redDark}" opacity="0.55"/>`;
  s += `<path d="M24 69 H96" stroke="${C.redLight}" stroke-width="2" opacity="0.7"/>`;
  // tampa frontal
  if (abrir === 0 || fresta || meio) {
    let ty = 0, sc = 1;
    if (fresta) { ty = -7; sc = 1; } else if (meio) { ty = -42; sc = 0.5; }
    // tampa pivotando: quanto mais aberta, mais achatada e mais acima
    s += `<g transform="translate(0 ${ty})"><g transform="translate(60 66) scale(1 ${sc}) translate(-60 -66)">
      <path d="M20 66 L20 54 Q20 34 60 34 Q100 34 100 54 L100 66 Z" fill="url(#${id}red)" stroke="${C.ink}" stroke-width="3" stroke-linejoin="round"/>
      <g clip-path="url(#${id}lidclip)"><rect x="33" y="30" width="9" height="40" fill="${C.gold}" stroke="${C.ink}" stroke-width="2"/><rect x="78" y="30" width="9" height="40" fill="${C.gold}" stroke="${C.ink}" stroke-width="2"/></g>
      <path d="M26 46 Q60 30 94 46" fill="none" stroke="${C.cream}" stroke-width="2.6" stroke-linecap="round" opacity="0.55"/>
      <rect x="18" y="61" width="84" height="7" rx="3" fill="${C.gold}" stroke="${C.ink}" stroke-width="2.4"/></g></g>`;
  } else {
    s += `<rect x="18" y="61" width="84" height="7" rx="3" fill="${C.gold}" stroke="${C.ink}" stroke-width="2.4"/>`;
  }
  // fechadura
  s += `<rect x="52" y="${abrir >= 0.5 ? 66 : 62}" width="16" height="${abrir >= 0.5 ? 18 : 20}" rx="4" fill="${C.gold}" stroke="${C.ink}" stroke-width="2.4"/>`;
  s += `<circle cx="60" cy="${abrir >= 0.5 ? 74 : 71}" r="2.6" fill="${C.ink}"/><rect x="58.8" y="${abrir >= 0.5 ? 74 : 71}" width="2.4" height="5" fill="${C.ink}"/>`;
  // cantoneiras
  [[20, 64], [100, 64]].forEach(([x, y]) => s += `<circle cx="${x}" cy="${y + 34}" r="2.6" fill="${C.goldLight}" stroke="${C.ink}" stroke-width="1.4"/>`);
  // estrelinhas de brilho
  if (estrelas && brilho !== null) {
    const pos = [[28, 30, 7], [96, 26, 8], [14, 64, 5.5], [106, 58, 6], [62, 6, 6.5], [84, 44, 4.5]];
    pos.forEach(([x, y, r], i) => {
      const ph = ((brilho + i) % 4) / 4; // 0..1
      const esc = [0.25, 1, 0.65, 0.05][Math.round(ph * 4) % 4];
      s += star(x, y, r * esc + 0.01, i % 2 ? C.cream : C.goldLight);
    });
  }
  return s;
}

function personagemSVG(pose, carregando, id) {
  const p = { dy: 0, sy: 1, arm: [0, 0], leg: [0, 0], ls: 1, eyes: 'open', mouth: 'smile', ...POSES[pose] };
  const drop = (1 - p.ls) * 18;
  const sx = 1 / Math.sqrt(p.sy);
  const cheer = pose.startsWith('cheer');
  let s = `<g transform="translate(0 ${24 + p.dy}) translate(48 101) scale(${r2(sx)} ${p.sy}) translate(-48 -101)">`;
  s += perna(41, p.leg[0], p.ls, drop, 'e') + perna(55, p.leg[1], p.ls, drop, 'd');
  s += `<g transform="translate(0 ${r2(drop)})">`;
  // tronco
  s += `<rect x="44" y="53" width="8" height="8" fill="${C.skin}" stroke="${C.ink}" stroke-width="1.4"/>`;
  s += `<rect x="34" y="58" width="28" height="27" rx="11" fill="${C.orange}" stroke="${C.ink}" stroke-width="1.8"/>`;
  s += `<path d="M40.5 59 V82 M55.5 59 V82" stroke="${C.ink2}" stroke-width="3" stroke-linecap="round"/>`;
  s += `<rect x="34" y="78" width="28" height="5" rx="2" fill="${C.ink2}" stroke="${C.ink}" stroke-width="1.2"/><rect x="45" y="78.4" width="6" height="4.2" rx="1" fill="${C.gold}"/>`;
  // baú nas mãos (fica na frente do tronco)
  const bauG = (tx, ty, esc, fase) => `<g transform="translate(${tx} ${ty}) scale(${esc}) translate(-60 -104)">${baúSVG({ id: id + 'b', abrir: 1, brilho: fase, raios: 0, estrelas: true, luz: false })}</g>`;
  // cabeça (desenhada antes do braço/baú que passa na frente do rosto no modo "alto")
  const cabeca = () => `
    <circle cx="32.5" cy="43" r="3.6" fill="${C.skin}" stroke="${C.ink}" stroke-width="1.4"/><circle cx="63.5" cy="43" r="3.6" fill="${C.skin}" stroke="${C.ink}" stroke-width="1.4"/>
    <circle cx="48" cy="42" r="16" fill="${C.skin}" stroke="${C.ink}" stroke-width="1.8"/>
    <path d="M32.2 40 Q33 33 40 32 L56 32 Q63 33 63.8 40 Q58 35.5 48 36 Q38 35.5 32.2 40 Z" fill="${C.ink}"/>
    ${olhos(p.eyes)}
    <circle cx="37.6" cy="48.2" r="3" fill="${C.orange}" opacity="0.45"/><circle cx="58.4" cy="48.2" r="3" fill="${C.orange}" opacity="0.45"/>
    ${boca(p.mouth)}
    <path d="M35 31 Q35 14 48 14 Q61 14 61 31 Z" fill="${C.ink2}" stroke="${C.ink}" stroke-width="2" stroke-linejoin="round"/>
    <path d="M35.4 26.5 Q48 31 60.6 26.5 L60.8 31 Q48 35.5 35.2 31 Z" fill="${C.gold}" stroke="${C.ink}" stroke-width="1.2" stroke-linejoin="round"/>
    <ellipse cx="48" cy="31.5" rx="25" ry="6.4" fill="${C.ink2}" stroke="${C.ink}" stroke-width="2"/>
    <path d="M30 30.5 Q48 26.5 66 30.5" fill="none" stroke="${C.lilac}" stroke-width="1.6" stroke-linecap="round" opacity="0.7"/>`;
  if (!carregando) {
    s += bracoSolto(36, p.arm[0], 'e') + bracoSolto(60, p.arm[1], 'd');
    s += cabeca();
  } else if (!cheer) {
    // baú à frente do peito, mãos nas laterais
    s += `<g>${bauG(48, 94, 0.38, 0)}</g>`;
    const braco = (flip) => {
      const X = (x) => flip ? 96 - x : x;
      return `<path d="M${X(36)} 63 L${X(31)} 73" stroke="${C.ink}" stroke-width="10" stroke-linecap="round" fill="none"/><path d="M${X(31)} 73 L${X(35)} 81" stroke="${C.ink}" stroke-width="8.4" stroke-linecap="round" fill="none"/>
        <path d="M${X(36)} 63 L${X(31)} 73" stroke="${C.orange}" stroke-width="7.4" stroke-linecap="round" fill="none"/><path d="M${X(31)} 73 L${X(35)} 81" stroke="${C.skin}" stroke-width="5.8" stroke-linecap="round" fill="none"/>
        <circle cx="${X(35.5)}" cy="82" r="3.8" fill="${C.skin}" stroke="${C.ink}" stroke-width="1.3"/>`;
    };
    s += braco(false) + braco(true);
    s += cabeca();
  } else {
    // comemorando com o baú erguido
    s += cabeca();
    const fase = +pose.slice(-1);
    s += `<g>${bauG(48, 17, 0.38, fase)}</g>`;
    const braco = (flip) => {
      const X = (x) => flip ? 96 - x : x;
      return `<path d="M${X(36)} 63 L${X(25)} 42" stroke="${C.ink}" stroke-width="10" stroke-linecap="round" fill="none"/><path d="M${X(25)} 42 L${X(33)} 16" stroke="${C.ink}" stroke-width="8.4" stroke-linecap="round" fill="none"/>
        <path d="M${X(36)} 63 L${X(25)} 42" stroke="${C.orange}" stroke-width="7.4" stroke-linecap="round" fill="none"/><path d="M${X(25)} 42 L${X(33)} 16" stroke="${C.skin}" stroke-width="5.8" stroke-linecap="round" fill="none"/>
        <circle cx="${X(33.5)}" cy="15" r="3.8" fill="${C.skin}" stroke="${C.ink}" stroke-width="1.3"/>`;
    };
    s += braco(false) + braco(true);
  }
  s += '</g></g>';
  return s;
}
export function celulasPersonagem() {
  const out = [];
  [false, true].forEach((carga) => {
    ORDEM_POSES.forEach((pose) => out.push({
      nome: (carga ? 'bau_' : '') + pose,
      draw: (id) => personagemSVG(pose, carga, id),
    }));
  });
  return out;
}

/* ============================ BAÚ ============================ */
export const BAU_CELULA = [120, 120];
export const BAU_ANCORA = [60, 104];
export function celulasBau() {
  const c = [];
  c.push({ nome: 'closed_0', draw: (id) => baúSVG({ id, abrir: 0 }) });
  c.push({ nome: 'closed_1', draw: (id) => baúSVG({ id, abrir: 0, brilho: 1, raios: 0, estrelas: false }) + star(40, 40, 7, C.cream) });
  [0.3, 0.6, 0.85, 1].forEach((a, i) => c.push({ nome: 'opening_' + i, draw: (id) => baúSVG({ id, abrir: a, brilho: a >= 0.6 ? i : null, raios: a >= 0.85 ? 1 : 0.3 + i * 0.2, fase: i * 5, estrelas: a >= 0.85 }) }));
  for (let k = 0; k < 4; k++) c.push({ nome: 'open_' + k, draw: (id) => baúSVG({ id, abrir: 1, brilho: k, raios: 0.65 + 0.35 * Math.sin(k * Math.PI / 2 + 0.6) * 0.5 + 0.17, fase: k * 11.25 }) });
  return c;
}

/* ============================ PEDRAS ============================ */
export const PEDRA_CELULA = [104, 84];
export const PEDRA_ANCORA = [52, 36]; // centro da face superior
const VAR = [
  [1, 0.92, 1.05, 0.95, 1, 0.9, 1.04, 0.96],
  [0.94, 1.04, 0.92, 1, 0.96, 1.06, 0.9, 1.02],
  [1.02, 0.96, 0.9, 1.05, 0.98, 0.92, 1.04, 0.94],
];
function pedraSVG({ v, dy = 0, anel = null, espirro = null, id }) {
  const cx = 52, cy = 36 + dy, rx = 35, ry = 20, prof = 10;
  const pts = VAR[v].map((m, i) => { const a = (i * 45 + 20) * Math.PI / 180; return [cx + Math.cos(a) * rx * m, cy + Math.sin(a) * ry * m]; });
  const poly = (arr) => arr.map(([x, y]) => `${r2(x)},${r2(y)}`).join(' ');
  let s = `<defs><linearGradient id="${id}t" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${C.goldLight}"/><stop offset="1" stop-color="${C.sunTop}"/></linearGradient></defs>`;
  // sombra submersa
  s += `<ellipse cx="52" cy="56" rx="38" ry="10" fill="${C.ink}" opacity="0.30"/>`;
  // anéis na água
  const ring = (p, op) => `<ellipse cx="52" cy="53" rx="${r2(36 + 18 * p)}" ry="${r2((36 + 18 * p) * 0.3)}" fill="none" stroke="${C.lilacLight}" stroke-width="2.2" opacity="${r2(op * (1 - p))}"/>`;
  if (anel !== null) { s += ring(anel, 0.7) + ring((anel + 0.5) % 1, 0.7); }
  // lateral
  const baixo = pts.map(([x, y]) => [x, y + prof]);
  s += `<polygon points="${poly(baixo)}" fill="${C.gold}" stroke="${C.goldDark}" stroke-width="2.2" stroke-linejoin="round"/>`;
  for (let i = 0; i < 8; i++) {
    const j = (i + 1) % 8;
    if (Math.sin((i * 45 + 20) * Math.PI / 180) > -0.2 || Math.sin((j * 45 + 20) * Math.PI / 180) > -0.2) {
      s += `<polygon points="${poly([pts[i], pts[j], baixo[j], baixo[i]])}" fill="${i % 3 === 0 ? C.gold : '#d99a10'}" stroke="${C.goldDark}" stroke-width="1.6" stroke-linejoin="round"/>`;
    }
  }
  // topo
  s += `<polygon points="${poly(pts)}" fill="url(#${id}t)" stroke="${C.goldDark}" stroke-width="2.2" stroke-linejoin="round"/>`;
  s += `<path d="M${r2(pts[4][0] + 6)} ${r2(pts[4][1] - 3)} L${r2(pts[5][0] + 2)} ${r2(pts[5][1] - 1.5)} L${r2(pts[6][0] + 2)} ${r2(pts[6][1] + 3)}" fill="none" stroke="${C.cream}" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" opacity="0.9"/>`;
  s += `<path d="M44 ${r2(cy + 5)} l8 -4 l3 5 M66 ${r2(cy - 4)} l-5 3" fill="none" stroke="${C.goldDark}" stroke-width="1.4" stroke-linecap="round" opacity="0.5"/>`;
  // espirro
  if (espirro !== null) {
    const t = espirro / 3;
    [[-30, 1.0, 0], [-18, 1.35, 0.1], [-6, 1.1, 0.05], [8, 1.3, 0.12], [20, 1.05, 0.02], [32, 1.25, 0.08]].forEach(([dx, h, d], i) => {
      const tt = Math.max(0, t - d), y = 52 - h * 34 * tt + h * 30 * tt * tt;
      s += `<ellipse cx="${r2(52 + dx * (0.6 + tt * 0.8))}" cy="${r2(y)}" rx="${r2(3.2 - t)}" ry="${r2(4.2 - t)}" fill="${i % 2 ? C.cream : C.lilacLight}" opacity="${r2(1 - t * 0.5)}"/>`;
    });
    s += ring(0.15 + t * 0.7, 0.9) + ring(0.05 + t * 0.4, 0.9);
  }
  return s;
}
export function celulasPedra() {
  const c = [];
  for (let v = 0; v < 3; v++) {
    for (let k = 0; k < 4; k++) c.push({ nome: `v${v}_idle_${k}`, draw: (id) => pedraSVG({ v, dy: [0, -1, -1.6, -0.6][k], anel: k / 4, id }) });
    for (let k = 0; k < 4; k++) c.push({ nome: `v${v}_press_${k}`, draw: (id) => pedraSVG({ v, dy: [5, 7, 3, 1][k], espirro: k, id }) });
  }
  return c;
}

/* ============================ EFEITOS ============================ */
export const EFEITO_CELULA = [96, 96];
export const EFEITO_ANCORA = [48, 70]; // ponto da água
export function celulasEfeitos() {
  const c = [];
  for (let k = 0; k < 6; k++) {
    c.push({ nome: 'splash_' + k, draw: () => {
      const t = k / 5; let s = '';
      const ring = (p, op) => `<ellipse cx="48" cy="70" rx="${r2(12 + 34 * p)}" ry="${r2((12 + 34 * p) * 0.3)}" fill="none" stroke="${C.cream}" stroke-width="${r2(3.2 - 2 * p)}" opacity="${r2(op * (1 - p * 0.8))}"/>`;
      s += ring(t, 0.95) + (t > 0.25 ? ring(t - 0.25, 0.8) : '');
      // coluna d'água
      const h = Math.sin(Math.min(1, t * 1.25) * Math.PI) * 34;
      s += `<path d="M${r2(48 - 10 + t * 3)} 70 Q48 ${r2(70 - h * 1.5)} ${r2(48 + 10 - t * 3)} 70 Z" fill="${C.lilacLight}" opacity="${r2(1 - t * 0.7)}" stroke="${C.cream}" stroke-width="1.6"/>`;
      [[-22, 1.0], [-12, 1.5], [-3, 1.2], [8, 1.55], [18, 1.1], [26, 1.35]].forEach(([dx, hh], i) => {
        const y = 70 - hh * 44 * t + hh * 40 * t * t;
        s += `<ellipse cx="${r2(48 + dx * (0.5 + t))}" cy="${r2(y)}" rx="${r2(3.6 - t * 1.4)}" ry="${r2(4.8 - t * 1.6)}" fill="${i % 2 ? C.cream : C.lilacLight}" opacity="${r2(1 - t * 0.55)}"/>`;
      });
      return s;
    } });
  }
  for (let k = 0; k < 4; k++) c.push({ nome: 'brilho_' + k, draw: () => {
    const esc = [0.3, 1, 0.7, 0.15][k]; const rot = k * 11;
    return `<g transform="rotate(${rot} 48 48)">${star(48, 48, 22 * esc + 0.01, C.cream)}${star(48, 48, 11 * esc + 0.01, C.goldLight)}</g>`;
  } });
  return c;
}

/* ============================ ÁGUA E CENÁRIO ============================ */
export const AGUA_CELULA = [352, CENA.h];
export const AGUA_QUADROS = 8;

export function aguaBaseSVG() {
  const { w, h } = CENA;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w * ESCALA}" height="${h * ESCALA}" viewBox="0 0 ${w} ${h}">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${C.water1}"/><stop offset="0.55" stop-color="${C.water2}"/><stop offset="1" stop-color="${C.water3}"/></linearGradient>
    <radialGradient id="r1" cx="0" cy="${h}" r="330" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="${C.waterShallow}" stop-opacity="0.85"/><stop offset="1" stop-color="${C.waterShallow}" stop-opacity="0"/></radialGradient>
    <radialGradient id="r2" cx="${w - 80}" cy="40" r="300" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="${C.waterShallow}" stop-opacity="0.8"/><stop offset="1" stop-color="${C.waterShallow}" stop-opacity="0"/></radialGradient>
    <radialGradient id="r3" cx="${w * 0.55}" cy="${h * 0.55}" r="380" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="${C.waterDeep}" stop-opacity="0.35"/><stop offset="1" stop-color="${C.waterDeep}" stop-opacity="0"/></radialGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#g)"/><rect width="${w}" height="${h}" fill="url(#r3)"/><rect width="${w}" height="${h}" fill="url(#r1)"/><rect width="${w}" height="${h}" fill="url(#r2)"/>
  </svg>`;
}

function segmento(x, y, L, amp, cor, larg, op) {
  const pts = [];
  for (let i = 0; i <= L; i += 4) pts.push(`${i ? 'L' : 'M'}${r2(x + i)} ${r2(y + Math.sin(i / L * Math.PI * 2) * amp)}`);
  return `<path d="${pts.join(' ')}" fill="none" stroke="${cor}" stroke-width="${larg}" stroke-linecap="round" stroke-linejoin="round" opacity="${op}"/>`;
}
export function celulasAgua() {
  const c = [];
  const W = AGUA_CELULA[0];
  for (let k = 0; k < AGUA_QUADROS; k++) {
    c.push({ nome: 'agua_' + k, draw: () => {
      let s = '';
      const camada = (P, rows, fnSeg) => {
        const desloc = (k / AGUA_QUADROS) * P;
        for (let r = 0; r < rows; r++) {
          for (let n = -1; n <= W / P; n++) {
            const seg = fnSeg(r, n * P + desloc);
            if (seg) s += seg;
          }
        }
      };
      // ondas escuras (mais lentas, P=88) – profundidade
      camada(88, 15, (r, dx) => segmento((r * 53) % 88 + dx, 36 + r * 44 + 5, 40 + (r * 7) % 14, 2.8, C.waterDeep, 3, 0.2));
      // ondas claras (P=88)
      camada(88, 15, (r, dx) => segmento((r * 37) % 88 + dx, 22 + r * 44, 46 + (r * 13) % 16, 3.2, C.lilacLight, 2.6, 0.55));
      // espuma/brilho (mais rápida, P=176)
      camada(176, 15, (r, dx) => (r % 2 === 0 ? segmento((r * 71) % 176 + dx, 44 + r * 44, 26 + (r * 7) % 14, 1.2, C.cream, 2.4, 0.7) : segmento((r * 29) % 176 + dx + 60, 44 + r * 44, 18 + (r * 5) % 10, 1, C.cream, 2, 0.5)));
      return s;
    } });
  }
  return c;
}

export function margensSVG() {
  const { w, h } = CENA;
  const partida = 'M0 472 C50 470 105 495 150 540 C190 580 215 625 232 664 L0 664 Z';
  const partidaIn = 'M0 497 C45 495 95 515 135 553 C170 590 192 630 205 664 L0 664 Z';
  const chegada = 'M440 0 C440 60 485 112 545 128 C610 144 660 146 704 170 L704 0 Z';
  const chegadaIn = 'M486 0 C488 36 514 72 560 92 C612 110 662 114 704 128 L704 0 Z';
  const tufo = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})" stroke="${C.gold}" stroke-width="3" stroke-linecap="round" fill="none"><path d="M0 0 L-5 -14"/><path d="M4 0 L5 -16"/><path d="M9 0 L16 -11"/></g>`;
  const seixo = (x, y, rx, ry) => `<ellipse cx="${x}" cy="${y}" rx="${rx}" ry="${ry}" fill="${C.goldLight}" stroke="${C.gold}" stroke-width="1.6" opacity="0.9"/>`;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w * ESCALA}" height="${h * ESCALA}" viewBox="0 0 ${w} ${h}">
  <defs>
    <filter id="blur" x="-10%" y="-10%" width="120%" height="120%"><feGaussianBlur stdDeviation="6"/></filter>
    <linearGradient id="sandA" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${C.sunTop}"/><stop offset="1" stop-color="${C.sunBottom}" stop-opacity="0.9"/></linearGradient>
  </defs>
  <g filter="url(#blur)" opacity="0.5" transform="translate(4 6)"><path d="${partida}" fill="${C.waterDeep}"/><path d="${chegada}" fill="${C.waterDeep}"/></g>
  <path d="${partida}" fill="${C.sunTop}" stroke="${C.gold}" stroke-width="3" stroke-linejoin="round"/>
  <path d="${chegada}" fill="${C.sunTop}" stroke="${C.gold}" stroke-width="3" stroke-linejoin="round"/>
  <path d="${partidaIn}" fill="${C.cream2}"/><path d="${chegadaIn}" fill="${C.cream2}"/>
  <path d="M0 479 C50 477 104 500 146 543 M0 504 C44 502 94 522 132 558" fill="none" stroke="${C.cream}" stroke-width="2" opacity="0.7"/>
  ${tufo(42, 584)}${tufo(158, 612, 0.9)}${tufo(40, 640, 0.7)}${seixo(180, 650, 8, 4)}${seixo(70, 540, 6, 3)}
  ${tufo(622, 46)}${tufo(668, 84, 0.9)}${seixo(640, 112, 7, 3.5)}${seixo(520, 26, 6, 3)}
  </svg>`;
}
