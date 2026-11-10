/* ============================================================
   c13.js — desenha espectros de RMN de ¹³C
   ------------------------------------------------------------
   Uso 1 (automático, nos slides):
     <div class="c13-plot" data-sinais="171.1 C; 60.4 CH2; 21.0 CH3; 14.2 CH3"
          data-modo="desac" data-rot="C=O,OCH₂,,"></div>
     cada sinal: "δ tipo [nº de C equivalentes]"  (tipo = C, CH, CH2, CH3)
     data-modo: desac (padrão) · dept (desacoplado + DEPT-135 + DEPT-90)
                acoplado (¹J C–H, regra do n+1) · offres (fora de ressonância)
     data-solv="0" esconde o CDCl₃ · data-xmin / data-xmax em ppm
   Uso 2 (JS, na missão):
     C13.render(el, { sinais:[{d,tipo,n}], modo:"dept", clicavel:true,
                      onPick: i => …, destaque:{0:"hot"}, rotulos:{0:"a"} })
   ============================================================ */
const C13 = (() => {
  const ML = 14, MR = 14;
  const fmt = (v, d = 1) => Number(v).toLocaleString("pt-BR", { minimumFractionDigits: d, maximumFractionDigits: d, useGrouping: false });
  const NH = { C: 0, CH: 1, CH2: 2, CH3: 3 };
  const NOE = { C: 0.32, CH: 0.72, CH2: 0.86, CH3: 1 };
  const J1 = { CH: 155, CH2: 128, CH3: 125 };           // ¹J C–H típicos (Hz)
  const lorentz = (x, x0, w) => w * w / ((x - x0) * (x - x0) + w * w);
  function binom(n){ const r = [1]; for (let k = 1; k <= n; k++) r.push(r[k - 1] * (n - k + 1) / k); return r; }

  // linhas de um sinal no modo pedido (posições em ppm, intensidades relativas)
  function linhas(s, modo, mhz){
    const jit = 0.9 + 0.2 * ((Math.round(s.d * 100) * 37) % 11) / 10;
    const I = (s.n || 1) * NOE[s.tipo] * jit;
    const n = NH[s.tipo];
    if ((modo === "acoplado" || modo === "offres") && n > 0){
      const J = (modo === "offres" ? J1[s.tipo] * 0.12 : J1[s.tipo]) / mhz;
      const b = binom(n), t = b.reduce((a, c) => a + c, 0);
      return b.map((c, k) => ({ x: s.d + (k - n / 2) * J, i: I * c / t * (modo === "acoplado" ? 1.6 : 1.3) }));
    }
    return [{ x: s.d, i: I }];
  }

  function painel(S, o, opt){
    // opt: { W, H, xmin, xmax, sinal: s => fator (+1, −1 ou 0), titulo, eixo, solvente, tms, ymax }
    const { W, H, xmin, xmax } = opt;
    const MT = opt.titulo ? 22 : 14, MB = opt.eixo ? 36 : 6;
    const pw = W - ML - MR, ph = H - MT - MB;
    const X = d => ML + (xmax - d) / (xmax - xmin) * pw;
    const ppmPx = (xmax - xmin) / pw;
    const hw = Math.max(0.9 * ppmPx, 0.6 / o.mhz);
    const bi = !!opt.bipolar;                    // DEPT-135: linha de base no meio
    const y0 = bi ? MT + ph * 0.55 : MT + ph;
    const escala = (bi ? ph * 0.5 : ph * 0.86) / opt.ymax;
    const rot = o.rotulos || {}, dest = o.destaque || {};
    let g = `<g class="c13-panel">`;
    const placed = [], el_fs = opt.fs || 13;
    // rótulos dos maiores primeiro? mantemos a ordem dos sinais
    if (opt.titulo) g += `<text x="${ML}" y="14" class="c13-ptit">${opt.titulo}</text>`;
    g += `<line x1="${ML}" x2="${W - MR}" y1="${y0}" y2="${y0}" class="c13-axis${opt.eixo ? "" : " fino"}"/>`;
    if (opt.eixo){
      const span = xmax - xmin, step = span > 120 ? 20 : span > 50 ? 10 : span > 20 ? 5 : span > 8 ? 2 : 1;
      for (let t = Math.ceil(xmin / step) * step; t <= xmax + 1e-9; t += step){
        g += `<line x1="${X(t)}" x2="${X(t)}" y1="${y0}" y2="${y0 + 5}" class="c13-axis"/><text x="${X(t)}" y="${y0 + 18}" class="c13-tick" text-anchor="middle">${Math.round(t)}</text>`;
      }
      g += `<text x="${ML + pw / 2}" y="${H - 3}" class="c13-lab" text-anchor="middle">δ (ppm)</text>`;
    }
    const caminho = (L, w, f) => {
      const xs = L.map(l => l.x), a = Math.min(...xs) - 30 * w, b = Math.max(...xs) + 30 * w;
      let p = "", N = Math.max(40, Math.round((b - a) / ppmPx * 2));
      for (let k = 0; k <= N; k++){
        const x = b - (b - a) * k / N;
        if (x > xmax || x < xmin) continue;
        const v = L.reduce((s, l) => s + l.i * lorentz(x, l.x, w), 0) * f;
        p += `${p ? "L" : "M"}${X(x).toFixed(1)},${(y0 - v * escala).toFixed(1)}`;
      }
      return p;
    };
    // solvente e TMS (só no desacoplado/acoplado, não no DEPT)
    if (opt.solvente && 77.16 < xmax && 77.16 > xmin){
      const J = 32 / o.mhz, L = [-1, 0, 1].map(k => ({ x: 77.16 + k * J, i: 0.3 * opt.ymax }));
      g += `<path d="${caminho(L, hw, 1)}" class="c13-line solv"/><text x="${X(77.16)}" y="${y0 - 0.33 * opt.ymax * escala - 6}" class="c13-solv" text-anchor="middle">CDCl₃</text>`;
    }
    if (opt.tms && xmin < 0){
      const L = [{ x: 0, i: 0.42 * opt.ymax }];
      g += `<path d="${caminho(L, hw, 1)}" class="c13-line solv"/><text x="${X(0)}" y="${y0 - 0.42 * opt.ymax * escala - 6}" class="c13-solv" text-anchor="middle">TMS</text>`;
    }
    S.slice().sort((p, q) => Math.max(...linhas(q, o.modoLinhas, o.mhz).map(l => l.i)) - Math.max(...linhas(p, o.modoLinhas, o.mhz).map(l => l.i))).forEach(s => {
      const f = opt.sinal ? opt.sinal(s) : 1;
      if (!f) return;
      const L = linhas(s, o.modoLinhas, o.mhz);
      const topo = Math.max(...L.map(l => l.i)) * (Math.abs(f));
      const cls = dest[s.i] ? " " + dest[s.i] : "";
      const xc = X(s.d);
      g += `<g class="c13-sig${cls}" data-i="${s.i}"><path d="${caminho(L, hw, f)}" class="c13-line${f < 0 ? " neg" : ""}"/>`;
      if (rot[s.i] && opt.rotular){
        const fs = el_fs, w = String(rot[s.i]).length * fs * 0.62 + 6;
        let y = Math.max(MT + 2, y0 - topo * escala * (f < 0 ? -1 : 1) - 6);
        for (let k = 0; k < 6 && placed.some(q => Math.abs(q.x - xc) < (q.w + w) / 2 && Math.abs(q.y - y) < fs + 2); k++) y -= fs + 2;
        placed.push({ x: xc, y, w });
        g += `<text x="${xc}" y="${y}" class="c13-tag" text-anchor="middle">${rot[s.i]}</text>`;
      }
      if (o.clicavel) g += `<rect class="c13-hit" x="${xc - 9}" y="${MT - 6}" width="18" height="${ph + 6}"/>`;
      g += `</g>`;
    });
    return g + `</g>`;
  }

  function render(el, o){
    o = { mhz: 75, modo: "desac", ...o };
    const S = (o.sinais || []).map((s, i) => ({ ...s, i }));
    if (!S.length){ el.innerHTML = ""; return; }
    const dmax = Math.max(...S.map(s => s.d)), dmin = Math.min(...S.map(s => s.d));
    const xmax = o.xmax ?? (dmax > 160 ? 220 : dmax > 100 ? 180 : Math.max(100, Math.ceil(dmax / 10) * 10 + 20));
    const xmin = o.xmin ?? (o.tms === false ? Math.max(0, Math.floor(dmin / 10) * 10 - 10) : -5);
    const naSlide = !!el.closest(".slide");
    const fsTag = naSlide ? 16 : 12.5;
    const W = o.largura ?? (el.closest(".cols-3, .cols") && naSlide ? 520 : 680);
    o.modoLinhas = o.modo === "dept" ? "desac" : o.modo;
    const ymax = Math.max(...S.flatMap(s => linhas(s, o.modoLinhas, o.mhz).map(l => l.i)));
    const solv = o.solvente !== false, tms = o.tms !== false;
    let g, H;
    if (o.modo === "dept"){
      const h1 = 170, h2 = 150, h3 = 116;
      H = h1 + h2 + h3;
      const base = { W, xmin, xmax, ymax };
      g = `<svg viewBox="0 0 ${W} ${H}" class="c13-svg${o.clicavel ? " pick" : ""}" role="img" aria-label="Espectros de ¹³C e DEPT">`;
      g += `<g>${painel(S, o, { ...base, H: h1, titulo: "¹³C desacoplado (todos os C)", solvente: solv, tms, rotular: true, fs: fsTag })}</g>`;
      g += `<g transform="translate(0 ${h1})">${painel(S, o, { ...base, H: h2, titulo: "DEPT-135 · CH e CH₃ para cima · CH₂ para baixo · C some", bipolar: true, sinal: s => s.tipo === "CH2" ? -1 : s.tipo === "C" ? 0 : 1 })}</g>`;
      g += `<g transform="translate(0 ${h1 + h2})">${painel(S, o, { ...base, H: h3, titulo: "DEPT-90 · só CH", eixo: true, sinal: s => s.tipo === "CH" ? 1 : 0 })}</g>`;
    } else {
      H = o.altura ?? (naSlide ? 240 : 260);
      g = `<svg viewBox="0 0 ${W} ${H}" class="c13-svg${o.clicavel ? " pick" : ""}" role="img" aria-label="Espectro de ¹³C">`;
      g += painel(S, o, { W, H, xmin, xmax, ymax, eixo: true, solvente: solv, tms, rotular: true, fs: fsTag });
    }
    g += `</svg><div class="rmn-tip"></div>`;
    el.innerHTML = `<div class="rmn-main">${g}</div>`;
    el.classList.add("rmn-ready");
    const tip = el.querySelector(".rmn-tip");
    el.querySelectorAll(".c13-sig").forEach(p => {
      const s = S[+p.dataset.i];
      const show = () => {
        const r = el.getBoundingClientRect(), b = p.querySelector(".c13-line").getBoundingClientRect();
        tip.innerHTML = `δ <b>${fmt(s.d, s.d % 1 ? (String(s.d).split(".")[1].length > 1 ? 2 : 1) : 1)}</b> ppm`;
        tip.style.left = (b.left - r.left + b.width / 2) + "px";
        tip.style.top = Math.max(0, b.top - r.top - 34) + "px";
        tip.classList.add("on");
      };
      p.addEventListener("mouseenter", show);
      p.addEventListener("mouseleave", () => tip.classList.remove("on"));
      p.addEventListener("click", e => {
        show();
        if (o.clicavel){
          e.stopPropagation();
          el.querySelectorAll(".c13-sig").forEach(x => x.classList.toggle("sel", +x.dataset.i === s.i));
          if (o.onPick) o.onPick(s.i);
        }
      });
    });
  }

  function fromData(el){
    const sinais = (el.dataset.sinais || "").split(";").map(t => t.trim()).filter(Boolean).map(t => {
      const [d, tipo, n] = t.split(/\s+/);
      return { d: +d, tipo: (tipo || "C").toUpperCase().replace("H3", "H3"), n: n ? +n : 1 };
    });
    const rotulos = {};
    if (el.dataset.rot) el.dataset.rot.split(",").forEach((r, i) => { if (r.trim()) rotulos[i] = r.trim(); });
    const destaque = {};
    if (el.dataset.destaque) el.dataset.destaque.split(",").forEach(i => { destaque[+i] = "hot"; });
    render(el, {
      sinais, rotulos, destaque, modo: el.dataset.modo || "desac",
      xmax: el.dataset.xmax ? +el.dataset.xmax : undefined, xmin: el.dataset.xmin ? +el.dataset.xmin : undefined,
      solvente: el.dataset.solv !== "0", tms: el.dataset.tms !== "0", altura: el.dataset.h ? +el.dataset.h : undefined
    });
  }

  document.addEventListener("DOMContentLoaded", () => document.querySelectorAll(".c13-plot[data-sinais]").forEach(fromData));
  return { render };
})();
window.C13 = C13;
