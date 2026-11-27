/* RioAnimacao v2 — camada VISUAL (frame a frame) da travessia do rio, comandada por 4 comandos.
 * NÃO decide se a resposta do estudante está certa: obedece cada comando e anima o resultado.
 *
 *   const anim = new RioAnimacao(canvas, { base: 'assets/', velocidade: 1, aoPousar, aoCair, ... });
 *   await anim.carregar();
 *   const r = await anim.executar([{ acao: 'dir', n: 3 }, { acao: 'subir', n: 5 }]);   // ida
 *   //  -> o baú abre sozinho ao chegar à outra margem; o personagem o pega e ESPERA.
 *   await anim.executar(['descer 5', 'esq 3']);                                        // volta (aceita texto)
 *
 * Comandos: 'dir' (+1 coluna) · 'esq' (-1 coluna) · 'subir' (+1 linha) · 'descer' (-1 linha).
 * Um comando que leva a um lugar sem pedra faz o personagem cair na água (ou tropeçar na margem) e voltar.
 */
(function (global) {
  const lerp = (a, b, t) => a + (b - a) * t;
  const wait = (ms) => new Promise((r) => setTimeout(r, ms));
  const CANCELADO = 'cancelado';
  const DIRS = { dir: [1, 0], esq: [-1, 0], subir: [0, 1], descer: [0, -1] };
  const ALIAS = { direita: 'dir', esquerda: 'esq', cima: 'subir', baixo: 'descer', right: 'dir', left: 'esq', up: 'subir', down: 'descer' };

  class RioAnimacao {
    constructor(canvas, op = {}) {
      this.canvas = canvas;
      this.ctx = canvas.getContext('2d');
      this.op = Object.assign({ base: 'assets/', velocidade: 1, bauInicialAberto: false, fpsAgua: 8, pararNoErro: true }, op);
      this.reduzido = !!(global.matchMedia && global.matchMedia('(prefers-reduced-motion: reduce)').matches);
      this.fila = Promise.resolve();
      this._gen = 0;
      this.efeitos = [];
      this.pedraAnim = {};
      this.ocupado = false;
    }

    get velocidade() { return this.op.velocidade; }
    set velocidade(v) { this.op.velocidade = Math.max(0.25, Math.min(3, +v || 1)); }
    get estado() {
      const n = this.cen ? this.cen.nos[this.indice] : { c: 0, r: 0 };
      return { id: this.indice, c: n.c, r: n.r, carregandoBau: this.carregando, bau: this.bau.estado, ocupado: this.ocupado };
    }

    async carregar() {
      const b = this.op.base;
      const [atlas, cen] = await Promise.all([fetch(b + 'atlas.json').then((r) => r.json()), fetch(b + 'cenario.json').then((r) => r.json())]);
      this.atlas = atlas; this.cen = cen; this.E = atlas.escala;
      this.grade = {}; cen.nos.forEach((n) => { this.grade[n.c + ',' + n.r] = n.id; });
      const carrega = (src) => new Promise((ok, err) => { const i = new Image(); i.onload = () => ok(i); i.onerror = () => err(new Error('falha ao carregar ' + src)); i.src = src; });
      this.img = {};
      for (const [k, f] of Object.entries(atlas.folhas)) this.img[k] = await carrega(b + f.arquivo);
      this.img.agua_base = await carrega(b + atlas.estaticos.agua_base.arquivo);
      this.img.margens = await carrega(b + atlas.estaticos.margens.arquivo);
      this.canvas.width = cen.largura * this.E; this.canvas.height = cen.altura * this.E;
      // máscara de terra (para saber se um salto errado cai na água ou na margem)
      try {
        const o = document.createElement('canvas'); o.width = this.canvas.width; o.height = this.canvas.height;
        const x = o.getContext('2d'); x.drawImage(this.img.margens, 0, 0);
        this._terra = x.getImageData(0, 0, o.width, o.height);
      } catch (e) { this._terra = null; }
      this._zerar();
      const loop = (t) => { this._desenha(t); this._raf = requestAnimationFrame(loop); };
      this._raf = requestAnimationFrame(loop);
      return this;
    }
    destruir() { cancelAnimationFrame(this._raf); this._gen++; }

    /* ================= API pública ================= */

    /** Volta à cena inicial e CANCELA o que estiver animando. */
    reiniciar() { this._gen++; this.fila = Promise.resolve(); this._zerar(); return Promise.resolve(); }

    /** Um comando, n vezes. Retorna { ok, executados, falha, estado }. */
    mover(comando, n = 1) { return this.executar([{ acao: comando, n }]); }

    /**
     * Executa comandos em ordem. Aceita [{acao:'dir', n:3}], ['dir 3', 'subir 5'] ou 'dir 3, subir 5'.
     * Resolve com { ok, executados, falha: null | {comando, passo, motivo:'agua'|'margem', de:{id,c,r}}, estado }.
     * Com pararNoErro=true (padrão) a lista é interrompida no 1º erro (os demais não são animados).
     */
    executar(lista) {
      const cmds = this._normaliza(lista);
      return this._enfileira(async () => {
        const gen = this._gen; this.ocupado = true;
        const res = { ok: true, executados: 0, falha: null };
        try {
          for (const cmd of cmds) {
            for (let k = 0; k < cmd.n; k++) {
              const r = await this._comando(cmd.acao);
              if (r.ok) { res.executados++; continue; }
              res.ok = false; res.falha = { comando: cmd.acao, passo: res.executados + 1, motivo: r.motivo, de: r.de };
              if (this.op.pararNoErro) break;
            }
            if (!res.ok && this.op.pararNoErro) break;
          }
        } catch (e) { if (e && e.message === CANCELADO) { res.ok = false; res.cancelado = true; } else throw e; }
        if (gen === this._gen) this.ocupado = false;
        res.estado = this.estado;
        return res;
      });
    }

    /* ================= internos ================= */
    _normaliza(lista) {
      if (typeof lista === 'string') lista = lista.split(/[,;\n]+/);
      if (!Array.isArray(lista)) lista = [lista];
      return lista.map((it) => {
        let a, n = 1;
        if (typeof it === 'string') { const m = it.trim().toLowerCase().split(/[\s×x*]+/); a = m[0]; n = parseInt(m[1], 10) || 1; }
        else { a = String(it.acao).toLowerCase(); n = it.n == null ? 1 : it.n; }
        a = ALIAS[a] || a;
        if (!DIRS[a]) throw new Error('Comando desconhecido: ' + a);
        return { acao: a, n: Math.max(0, Math.floor(n)) };
      });
    }
    _zerar() {
      const cen = this.cen;
      this.indice = 0; this.carregando = false; this.ocupado = false;
      this.efeitos = []; this.pedraAnim = {};
      this.bau = { estado: this.op.bauInicialAberto ? 'aberto' : 'fechado', t0: performance.now(), x: cen.bau.x, y: cen.bau.y, esc: 1, visivel: true };
      const p = cen.nos[0];
      this.pers = { x: p.x, y: p.y, h: 0, flip: false, clip: 'idle', t0: performance.now(), visivel: true };
    }
    _enfileira(fn) { const p = this.fila.then(fn); this.fila = p.catch(() => {}); return p; }
    _evento(n, ...a) { if (typeof this.op[n] === 'function') try { this.op[n](...a); } catch (e) { console.error(e); } }
    _info(id) { const n = this.cen.nos[id]; return { id, c: n.c, r: n.r }; }
    async _espera(ms) { const g = this._gen; await wait(ms / this.velocidade); if (g !== this._gen) throw new Error(CANCELADO); }
    _tween(ms, fn) {
      const g = this._gen; ms = ms / this.velocidade;
      return new Promise((ok, err) => { const t0 = performance.now(); const passo = (t) => { if (g !== this._gen) return err(new Error(CANCELADO)); const k = Math.min(1, (t - t0) / ms); fn(k); k < 1 ? requestAnimationFrame(passo) : ok(); }; requestAnimationFrame(passo); });
    }
    _clip(nome) { this.pers.clip = nome; this.pers.t0 = performance.now(); }
    _emTerra(x, y) {
      if (x < 0 || y < 0 || x >= this.cen.largura || y >= this.cen.altura) return true; // fora da cena = não é rio
      if (!this._terra) return false;
      const E = this.E, w = this._terra.width;
      return this._terra.data[((Math.round(y * E) * w) + Math.round(x * E)) * 4 + 3] > 200;
    }

    /** Executa UM passo. */
    async _comando(acao) {
      const [dc, dr] = DIRS[acao], de = this.estado, idDe = this.indice;
      const alvoId = this.grade[(de.c + dc) + ',' + (de.r + dr)];
      this._evento('aoMover', { comando: acao, de: this._info(idDe) });
      if (alvoId === undefined) {
        const motivo = await this._saltoErrado(idDe, dc, dr);
        const info = { comando: acao, motivo, de: this._info(idDe) };
        this._evento('aoCair', info);
        return { ok: false, motivo, de: info.de };
      }
      await this._saltar(idDe, this.cen.nos[alvoId]);
      this.indice = alvoId;
      this._evento('aoPousar', this._info(alvoId));
      await this._chegou(alvoId);
      return { ok: true };
    }

    async _chegou(id) {
      const b = this.bau;
      if (id === 8 && !this.carregando && b.estado !== 'levado') {
        this._evento('aoChegarMargem', this._info(id));
        if (b.estado === 'fechado') { b.estado = 'abrindo'; b.t0 = performance.now(); await this._espera(4 / 9 * 1000 + 300); b.estado = 'aberto'; b.t0 = performance.now(); }
        this._clip('cheer'); await this._espera(1100);
        const A = { x: b.x, y: b.y }, P = this.pers;
        await this._tween(380, (t) => { b.x = lerp(A.x, P.x, t); b.y = lerp(A.y, P.y - 34, t) - Math.sin(t * Math.PI) * 26; b.esc = lerp(1, 0.4, t); });
        b.visivel = false; b.estado = 'levado'; this.carregando = true;
        this._clip('idle');
        this._evento('aoPegarBau', this._info(id)); // fica aguardando os comandos da volta
      } else if (id === 0 && this.carregando) {
        this._clip('cheer'); await this._espera(1800); this._clip('idle');
        this._evento('aoTerminar', this._info(0));
      }
    }

    async _saltar(idDe, B) {
      const A = this.cen.nos[idDe], P = this.pers;
      P.flip = B.x < A.x - 2;
      this._clip('crouch'); await this._espera(this.reduzido ? 60 : 150);
      const dist = Math.hypot(B.x - A.x, B.y - A.y), alt = 34 + dist * 0.18, dur = this.reduzido ? 250 : 380 + dist * 1.1;
      await this._tween(dur, (t) => {
        P.x = lerp(A.x, B.x, t); P.y = lerp(A.y, B.y, t); P.h = 4 * alt * t * (1 - t);
        const c = t < 0.28 ? 'rise' : t < 0.62 ? 'apex' : 'fall';
        if (P.clip !== c) this._clip(c);
      });
      P.h = 0;
      if (B.tipo === 'pedra') this.pedraAnim[B.id] = performance.now();
      this._clip('land'); await this._espera(190); this._clip('idle');
      await this._espera(this.reduzido ? 60 : 160);
    }

    /** Comando que não leva a nenhuma pedra: cai na água ou tropeça na margem. Retorna 'agua' | 'margem'. */
    async _saltoErrado(idDe, dc, dr) {
      const A = this.cen.nos[idDe], P = this.pers, s = this.cen.passo;
      const vx = dc * s.x, vy = -dr * s.y;
      const Bx = A.x + vx * 0.62, By = A.y + vy * 0.62;
      const agua = !this._emTerra(Bx, By);
      P.flip = vx < 0;
      this._clip('crouch'); await this._espera(150);
      const k = agua ? 0.62 : 0.18, alt = agua ? 40 : 16, dur = agua ? 520 : 300;
      await this._tween(dur, (t) => {
        P.x = A.x + vx * k * t; P.y = A.y + vy * k * t; P.h = 4 * alt * t * (1 - t) * (agua ? 1 : 1);
        const c = t < 0.28 ? 'rise' : t < 0.62 ? 'apex' : 'fall';
        if (P.clip !== c) this._clip(c);
      });
      if (agua) {
        P.h = 0;
        this.efeitos.push({ nome: 'respingo', x: P.x, y: P.y, t0: performance.now() });
        await this._espera(120); P.visivel = false;
        await this._espera(900);
        P.x = A.x; P.y = A.y; P.flip = false; P.visivel = true;
      } else { P.h = 0; P.x = A.x; P.y = A.y; }
      this._clip('sad'); await this._espera(1400); this._clip('idle');
      return agua ? 'agua' : 'margem';
    }

    /* ================= desenho ================= */
    _quadro(folha, anim, t0, agora, prefixo = '') {
      const a = this.atlas.folhas[folha].animacoes[anim];
      const n = Math.max(0, Math.floor(((agora - t0) / 1000) * a.fps * this.velocidade));
      return prefixo + a.quadros[a.loop ? n % a.quadros.length : Math.min(n, a.quadros.length - 1)];
    }
    _sprite(folha, nome, x, y, { flip = false, esc = 1, alfa = 1 } = {}) {
      const f = this.atlas.folhas[folha], q = f.quadros[nome]; if (!q) return;
      const E = this.E, c = this.ctx, [ax, ay] = f.ancora;
      c.save(); c.globalAlpha = alfa; c.translate(x, y); if (flip) c.scale(-1, 1); c.scale(esc, esc);
      c.drawImage(this.img[folha], q[0], q[1], q[2], q[3], -ax, -ay, q[2] / E, q[3] / E); c.restore();
    }
    _desenha(agora) {
      const c = this.ctx, E = this.E, W = this.cen.largura, H = this.cen.altura;
      c.setTransform(E, 0, 0, E, 0, 0); c.clearRect(0, 0, W, H);
      c.drawImage(this.img.agua_base, 0, 0, W, H);
      const af = this.atlas.folhas.agua, fi = this.reduzido ? 0 : Math.floor((agora / 1000) * this.op.fpsAgua * this.velocidade) % 8;
      const q = af.quadros['agua_' + fi];
      for (let x = 0; x < W; x += af.celula[0]) c.drawImage(this.img.agua, q[0], q[1], q[2], q[3], x, 0, af.celula[0], af.celula[1]);
      c.drawImage(this.img.margens, 0, 0, W, H);
      this.cen.nos.filter((n) => n.tipo === 'pedra').forEach((n, k) => {
        const pr = this.pedraAnim[n.id], v = 'v' + n.variante;
        const nome = pr && agora - pr < 4 / 11 * 1000 / this.velocidade ? this._quadro('pedras', v + '_press', pr, agora) : this._quadro('pedras', v + '_idle', k * 170, agora);
        this._sprite('pedras', nome, n.pedra.x, n.pedra.y);
      });
      const atores = [];
      if (this.bau.visivel) atores.push({ y: this.bau.y, f: () => this._sprite('bau', this._quadro('bau', this.bau.estado === 'fechado' ? 'fechado' : this.bau.estado === 'abrindo' ? 'abrindo' : 'aberto', this.bau.t0, agora), this.bau.x, this.bau.y, { esc: this.bau.esc }) });
      if (this.pers.visivel) atores.push({ y: this.pers.y, f: () => this._desenhaPers(agora) });
      atores.sort((a, b) => a.y - b.y).forEach((a) => a.f());
      this.efeitos = this.efeitos.filter((e) => agora - e.t0 < 6 / 14 * 1000 / this.velocidade + 50);
      this.efeitos.forEach((e) => this._sprite('efeitos', this._quadro('efeitos', e.nome, e.t0, agora), e.x, e.y));
    }
    _desenhaPers(agora) {
      const P = this.pers, c = this.ctx;
      c.save(); c.fillStyle = '#3f2d5e'; c.globalAlpha = Math.max(0.08, 0.3 - P.h / 200);
      c.beginPath(); c.ellipse(P.x, P.y + 1, Math.max(8, 15 - P.h / 8), 5, 0, 0, Math.PI * 2); c.fill(); c.restore();
      this._sprite('personagem', this._quadro('personagem', P.clip, P.t0, agora, this.carregando ? 'bau_' : ''), P.x, P.y - P.h, { flip: P.flip });
    }
  }
  global.RioAnimacao = RioAnimacao;
})(window);
