/* ============================================================
   rmn.js — desenha espectros de RMN de ¹H (simulação de 1ª ordem)
   ------------------------------------------------------------
   Uso 1 (automático, nos slides):
     <div class="rmn-plot" data-sinais="4.12 2 q7.1; 2.05 3 s; 1.26 3 t7.1"
          data-xmax="5" data-int="1" data-ampl="1" data-rot="a,b,c"></div>
     multiplicidade: s · br · m0.15 · d7 · t7 · q7 · quint7 · sext7 · sept7 ·
                     oct7 · non7 · dd14/6.3 · td7.3/1.7 · septd7/1.5
     data-modo="zoom" desenha só um multipleto, grande (para a regra do n+1).
   Uso 2 (JS, na missão):
     Rmn.render(el, { sinais:[{d,h,tipo,acopl,larg,integral}], clicavel:true,
                      onPick: i => …, destaque:{0:"hot"}, ampliacoes:true })
   ============================================================ */
const Rmn = (() => {
  const ML = 14, MR = 14, MB = 40;
  const fmt = (v, d = 2) => Number(v).toLocaleString("pt-BR", { minimumFractionDigits: d, maximumFractionDigits: d, useGrouping: false });
  const LETRAS = "abcdefghij";

  /* ---------- linhas de um sinal (regra do n+1 em cascata) ---------- */
  function binom(n){ const r = [1]; for (let k = 1; k <= n; k++) r.push(r[k - 1] * (n - k + 1) / k); return r; }
  function linhas(s, mhz){
    const f0 = s.d * mhz;
    if (s.tipo === "m"){
      // multipleto aromático: linhas determinísticas espalhadas na largura indicada
      const L = [], w = (s.larg || 0.15) * mhz, n = 14;
      let seed = Math.round(s.d * 1000);
      const rnd = () => (seed = (seed * 9301 + 49297) % 233280) / 233280;
      for (let k = 0; k < n; k++){ const x = -w / 2 + w * (k + 0.2 + 0.6 * rnd()) / n; L.push({ f: f0 + x, i: 0.4 + rnd() * (1 - Math.abs(x) / w) }); }
      const t = L.reduce((a, b) => a + b.i, 0);
      return L.map(l => ({ f: l.f, i: l.i / t * s.h }));
    }
    let L = [{ f: f0, i: 1 }];
    (s.acopl || []).forEach(([n, J]) => {
      const b = binom(n), nv = [];
      L.forEach(l => b.forEach((c, k) => nv.push({ f: l.f + (k - n / 2) * J, i: l.i * c })));
      L = nv;
    });
    const t = L.reduce((a, b) => a + b.i, 0);
    // junta linhas coincidentes
    const m = new Map();
    L.forEach(l => { const k = l.f.toFixed(3); m.set(k, (m.get(k) || 0) + l.i / t * s.h); });
    return [...m.entries()].map(([f, i]) => ({ f: +f, i })).sort((a, b) => b.f - a.f);
  }
  const lorentz = (x, x0, w) => w * w / ((x - x0) * (x - x0) + w * w);

  /* ---------- espectro completo ---------- */
  function render(el, o){
    const mhz = o.mhz || 300;
    const S = (o.sinais || []).map((s, i) => ({ ...s, i, L: linhas(s, mhz) }));
    if (!S.length){ el.innerHTML = ""; return; }
    const dmax = Math.max(...S.map(s => s.d));
    const xmax = o.xmax ?? Math.max(5, Math.ceil(dmax + 0.9));
    const xmin = o.xmin ?? -0.5;
    const peq = !!(el.closest(".cols-3, .cols") && el.closest(".slide"));
    const W = o.largura ?? (peq ? 520 : 680);
    const fs = el.closest(".slide") ? 17 : 12;
    const MT = o.integral !== false ? 26 : 14;
    const naSlide = !!el.closest(".slide");
    const mb = MB + (o.integral !== false && (o.mostrarH || S.some(s => s.integral !== undefined)) ? 30 : 0);
    const H = (o.altura ?? (naSlide && o.ampliacoes ? 190 : 270)) + MT - 14 + (mb - MB);
    const pw = W - ML - MR, ph = H - MT - mb;
    const X = d => ML + (xmax - d) / (xmax - xmin) * pw;
    const ppmPx = (xmax - xmin) / pw;
    const hwBase = Math.max(1.0 * ppmPx, 0.6 / mhz);
    const largura = s => s.tipo === "br" ? Math.max(0.05, 4 * hwBase) : hwBase;
    // amplitude de cada linha = área / (π·w) → sinais largos ficam baixos, como no espectro real
    const amp = (s, l) => l.i / (Math.PI * largura(s));
    const curva = (s, x) => s.L.reduce((a, l) => a + amp(s, l) * lorentz(x, l.f / mhz, largura(s)), 0);
    const N = Math.round(pw * 2);
    const xs = Array.from({ length: N + 1 }, (_, k) => xmax - k * (xmax - xmin) / N);
    // altura máxima (para normalizar)
    let ymax = 0;
    S.forEach(s => s.L.forEach(l => { ymax = Math.max(ymax, curva(s, l.f / mhz)); }));
    const sY = 0.86 * ph / ymax;
    const Y = v => MT + ph - v * sY;
    const uid = "r" + Math.random().toString(36).slice(2, 8);
    const rot = o.rotulos || {};
    const dest = o.destaque || {};

    let g = `<svg viewBox="0 0 ${W} ${H}" class="rmn-svg${o.clicavel ? " pick" : ""}" role="img" aria-label="Espectro de RMN de hidrogênio">`;
    // eixo
    g += `<line x1="${ML}" x2="${W - MR}" y1="${Y(0)}" y2="${Y(0)}" class="rmn-axis"/>`;
    const step = (xmax - xmin) > 8 ? 1 : 0.5;
    for (let t = Math.ceil(xmin / step) * step; t <= xmax + 1e-9; t += step){
      const inteiro = Math.abs(t - Math.round(t)) < 1e-9;
      g += `<line x1="${X(t)}" x2="${X(t)}" y1="${Y(0)}" y2="${Y(0) + (inteiro ? 6 : 3)}" class="rmn-axis"/>`;
      if (inteiro) g += `<text x="${X(t)}" y="${Y(0) + 19}" class="rmn-tick" text-anchor="middle">${Math.round(t)}</text>`;
    }
    g += `<text x="${ML + pw / 2}" y="${H - 3}" class="rmn-lab" text-anchor="middle">δ (ppm)</text>`;
    // TMS
    if (o.tms !== false && xmin < 0){
      const hw = hwBase, a = 0.3 * ph / sY;
      let p = "";
      for (let x = 0.12; x >= -0.12; x -= ppmPx / 2) p += `${p ? "L" : "M"}${X(x).toFixed(1)},${Y(a * lorentz(x, 0, hw)).toFixed(1)}`;
      g += `<path d="${p}" class="rmn-line tms"/><text x="${X(0)}" y="${Y(a) - 6}" class="rmn-tms" text-anchor="middle">TMS</text>`;
    }
    // sinais (cada um com o seu caminho, para poder destacar)
    S.forEach(s => {
      const fMax = Math.max(...s.L.map(l => l.f)) / mhz, fMin = Math.min(...s.L.map(l => l.f)) / mhz;
      const pad = 40 * largura(s);
      let p = "";
      xs.filter(x => x <= fMax + pad && x >= fMin - pad).forEach(x => { p += `${p ? "L" : "M"}${X(x).toFixed(1)},${Y(curva(s, x)).toFixed(1)}`; });
      const topo = Math.max(...s.L.map(l => curva(s, l.f / mhz)));
      const cls = dest[s.i] ? " " + dest[s.i] : "";
      const xc = X(s.d), hx = Math.max(12, (X(fMin) - X(fMax)) / 2 + 9);
      g += `<g class="rmn-sig${cls}" data-i="${s.i}">`;
      g += `<path d="${p}" class="rmn-line"/>`;
      if (rot[s.i]) g += `<text x="${xc}" y="${Math.max(fs, Y(topo) - 8)}" class="rmn-tag" text-anchor="middle">${rot[s.i]}</text>`;
      if (o.clicavel) g += `<rect class="rmn-hit" x="${xc - hx}" y="${MT - 10}" width="${2 * hx}" height="${ph + 10}"/>`;
      g += `</g>`;
    });
    // curva de integração (acumulada, da esquerda para a direita) + valores sob o eixo
    if (o.integral !== false){
      const tot = S.reduce((a, s) => a + s.h, 0);
      const sI = 0.62 * ph / tot;
      const pts = [];
      let acum = 0;
      const ordem = S.slice().sort((a, b) => b.d - a.d);
      // integra numericamente cada sinal em degrau suave
      const larg = s => Math.max(0.035, (Math.max(...s.L.map(l => l.f)) - Math.min(...s.L.map(l => l.f))) / mhz / 2 + 3 * largura(s));
      xs.forEach(x => {
        let v = 0;
        ordem.forEach(s => { const w = larg(s); v += s.h / (1 + Math.exp(-(s.d - x) / (w / 3))); });
        pts.push(`${X(x).toFixed(1)},${(MT + ph * 0.28 + 0.62 * ph - v * sI).toFixed(1)}`);
      });
      g += `<polyline points="${pts.join(" ")}" class="rmn-int"/>`;
      let ultX = -1e9, linha = 0;
      const fsI = el.closest(".slide") ? 15 : 11.5;
      S.slice().sort((p, q) => q.d - p.d).forEach(s => {
        if (s.integral === undefined && !o.mostrarH) return;
        const txt = o.mostrarH ? s.h + "H" : fmt(s.integral, 1);
        const x = X(s.d), larg = txt.length * fsI * 0.68;
        linha = (x - ultX < larg) ? (linha + 1) % 2 : 0;
        ultX = x;
        g += `<text x="${x}" y="${Y(0) + 34 + linha * (fsI + 1)}" class="rmn-ival" text-anchor="middle">${txt}</text>`;
      });
    }
    g += `</svg><div class="rmn-tip" id="${uid}"></div>`;
    let html = `<div class="rmn-main">${g}</div>`;
    if (o.ampliacoes){
      html += `<div class="rmn-insets">${S.map(s => `<div class="rmn-inset${dest[s.i] ? " " + dest[s.i] : ""}" data-i="${s.i}">
        <div class="rmn-inset-cap">${rot[s.i] ? `<b>${rot[s.i]}</b> · ` : ""}δ ${fmt(s.d)}</div>${insetSVG(s, mhz)}</div>`).join("")}</div>
        <p class="rmn-nota">Ampliações: os números sobre as linhas são as posições em <b>Hz</b> (aparelho de ${mhz} MHz). A distância entre duas linhas vizinhas é a constante J.</p>`;
    }
    el.innerHTML = html;
    el.classList.add("rmn-ready");

    const tip = el.querySelector(".rmn-tip");
    const pick = i => {
      el.querySelectorAll(".rmn-sig, .rmn-inset").forEach(x => x.classList.toggle("sel", +x.dataset.i === i));
      if (o.onPick) o.onPick(i);
    };
    el.querySelectorAll(".rmn-sig").forEach(p => {
      const s = S[+p.dataset.i];
      const show = () => {
        const r = el.getBoundingClientRect(), b = p.querySelector(".rmn-line").getBoundingClientRect();
        tip.innerHTML = `δ <b>${fmt(s.d)}</b> ppm${s.integral !== undefined ? ` · integral ${fmt(s.integral, 1)}` : ""}`;
        tip.style.left = (b.left - r.left + b.width / 2) + "px";
        tip.style.top = Math.max(0, b.top - r.top - 34) + "px";
        tip.classList.add("on");
      };
      p.addEventListener("mouseenter", show);
      p.addEventListener("mouseleave", () => tip.classList.remove("on"));
      p.addEventListener("click", e => { show(); if (o.clicavel){ e.stopPropagation(); pick(s.i); } });
    });
    if (o.clicavel) el.querySelectorAll(".rmn-inset").forEach(b => { b.classList.add("pick"); b.addEventListener("click", () => pick(+b.dataset.i)); });
  }

  /* ---------- ampliação de um multipleto (linhas em Hz) ---------- */
  function insetSVG(s, mhz, opt = {}){
    const W = opt.W || 230, H = opt.H || 160, mt = opt.semHz ? 12 : 54, mb = 8;
    const L = s.L || linhas(s, mhz);
    const fMax = Math.max(...L.map(l => l.f)), fMin = Math.min(...L.map(l => l.f));
    const esp = fMax - fMin, meio = (fMax + fMin) / 2, meia = s.tipo === "br" ? 40 : Math.max(8, esp / 2 + Math.max(5, esp * 0.22));
    const w = s.tipo === "br" ? 9 : s.tipo === "m" ? 1.6 : Math.max(0.75, meia / 45);
    const X = f => 8 + (meio + meia - f) / (2 * meia) * (W - 16);
    const curva = f => L.reduce((a, l) => a + l.i / w * lorentz(f, l.f, w), 0);
    const N = 360, ymax = Math.max(...L.map(l => curva(l.f)));
    const Y = v => H - mb - v / ymax * (H - mt - mb);
    let p = "";
    for (let k = 0; k <= N; k++){ const f = meio + meia - 2 * meia * k / N; p += `${k ? "L" : "M"}${X(f).toFixed(1)},${Y(curva(f)).toFixed(1)}`; }
    let g = `<svg viewBox="0 0 ${W} ${H}" class="rmn-zoom">`;
    g += `<line x1="4" x2="${W - 4}" y1="${H - mb}" y2="${H - mb}" class="rmn-axis"/>`;
    g += `<path d="${p}" class="rmn-line"/>`;
    if (!opt.semHz && s.tipo !== "m" && s.tipo !== "br" && L.length <= 16){
      const fsz = L.length > 9 ? 9 : 10.5;
      L.forEach(l => {
        const x = X(l.f), y = Y(curva(l.f));
        g += `<text transform="translate(${(x + fsz * 0.35).toFixed(1)} ${(y - 4).toFixed(1)}) rotate(-90)" class="rmn-hz" style="font-size:${fsz}px">${fmt(l.f, 1)}</text>`;
      });
    }
    return g + `</svg>`;
  }

  /* ---------- multipleto grande (slides da regra do n+1) ---------- */
  function zoom(el, s, mhz = 300){
    const W = 520, H = 230;
    const S = { ...s, L: linhas(s, mhz) };
    el.innerHTML = insetSVG(S, mhz, { W, H, semHz: el.dataset.hz !== "1" });
    el.classList.add("rmn-ready");
  }

  /* ---------- leitura dos atributos data-* ---------- */
  function parseMult(m){
    m = (m || "s").trim();
    if (m === "s") return { tipo: "s", acopl: [] };
    if (m === "br") return { tipo: "br", acopl: [] };
    if (/^m[\d.]*$/.test(m)) return { tipo: "m", acopl: [], larg: m.length > 1 ? +m.slice(1) : 0.15 };
    const pref = { septd: [6, 1], dd: [1, 1], td: [2, 1], dt: [1, 2], sext: [5], sept: [6], quint: [4], non: [8], oct: [7], d: [1], t: [2], q: [3] };
    const k = Object.keys(pref).sort((a, b) => b.length - a.length).find(p => m.startsWith(p));
    if (!k) return { tipo: "s", acopl: [] };
    const Js = m.slice(k.length).split("/").map(Number);
    return { tipo: "mult", acopl: pref[k].map((n, i) => [n, Js[i] || 7]) };
  }
  function parseSinais(txt){
    return (txt || "").split(";").map(t => t.trim()).filter(Boolean).map(t => {
      const [d, h, m] = t.split(/\s+/);
      return { d: +d, h: +h, ...parseMult(m) };
    });
  }
  function fromData(el){
    const sinais = parseSinais(el.dataset.sinais);
    if (el.dataset.modo === "zoom") return zoom(el, sinais[0], +(el.dataset.mhz || 300));
    const rotulos = {};
    if (el.dataset.rot) el.dataset.rot.split(",").forEach((r, i) => { if (r.trim()) rotulos[i] = r.trim(); });
    const destaque = {};
    if (el.dataset.destaque) el.dataset.destaque.split(",").forEach(i => { destaque[+i] = "hot"; });
    render(el, {
      sinais, rotulos, destaque,
      xmax: el.dataset.xmax ? +el.dataset.xmax : undefined,
      xmin: el.dataset.xmin ? +el.dataset.xmin : undefined,
      integral: el.dataset.int === "1",
      mostrarH: el.dataset.int === "1",
      ampliacoes: el.dataset.ampl === "1",
      altura: el.dataset.h ? +el.dataset.h : undefined,
      mhz: el.dataset.mhz ? +el.dataset.mhz : 300
    });
  }

  // desenha uma molécula de ESTRUTURAS dentro de [data-mol]
  function mols(root = document){
    root.querySelectorAll("[data-mol]").forEach(el => {
      const s = typeof ESTRUTURAS !== "undefined" && ESTRUTURAS[el.dataset.mol];
      if (s) el.innerHTML = s;
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".rmn-plot[data-sinais]").forEach(fromData);
    mols();
  });
  return { render, linhas, mols, letras: LETRAS };
})();
window.Rmn = Rmn;
