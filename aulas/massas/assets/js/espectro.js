/* ============================================================
   espectro.js — desenha espectros de massas (barras) em SVG
   Uso 1 (automático, nos slides):
     <div class="ms-plot" data-picos="58:12,43:100,29:44"
          data-rotulos="58:M⁺•,43:pico base" data-xmin="10" data-xmax="65"></div>
   Uso 2 (JS, na missão):
     Espectro.render(el, { picos:[[mz,int],…], clicavel:true, onPick: mz => … })
   ============================================================ */
const Espectro = (() => {
  const ML = 44, MR = 14, MB = 38;

  function niceStep(span){
    const raw = span / 9, p = Math.pow(10, Math.floor(Math.log10(raw)));
    const n = raw / p;
    return (n < 1.5 ? 1 : n < 3.5 ? 2 : n < 7.5 ? 5 : 10) * p;
  }

  function render(el, o){
    const picos = (o.picos || []).slice().sort((a, b) => a[0] - b[0]);
    if (!picos.length){ el.innerHTML = ""; return; }
    const mzs = picos.map(p => p[0]);
    const xmin = o.xmin ?? Math.max(0, Math.floor((Math.min(...mzs) - 6) / 5) * 5);
    const xmax = o.xmax ?? Math.ceil((Math.max(...mzs) + 6) / 5) * 5;
    const ymax = o.ymax ?? 100;
    // tamanho da fonte (em unidades do SVG) para evitar rótulos sobrepostos
    const peq = !!(el.closest(".cols-3") && el.closest(".slide"));
    const W = o.largura ?? (peq ? 420 : 680);
    const fs = o.fonte ?? (peq ? 19 : el.closest(".slide") ? 18 : 12);
    const temTag = Object.keys(o.rotulos || {}).length > 0;
    const MT = Math.round(fs * (temTag ? 2.7 : 1.6)) + 4, H = (o.altura ?? (peq ? 260 : 300)) + MT - 30;
    const pw = W - ML - MR, ph = H - MT - MB;
    const X = mz => ML + (mz - xmin) / (xmax - xmin) * pw;
    const Y = v => MT + ph - Math.min(v, ymax) / ymax * ph;
    const bw = Math.max(2.2, Math.min(9, pw / (xmax - xmin) * 0.55));
    const rot = o.rotulos || {};
    const lim = o.limiteRotulo ?? 7;
    const step = niceStep(xmax - xmin);
    const uid = "sp" + Math.random().toString(36).slice(2, 8);

    let g = `<svg viewBox="0 0 ${W} ${H}" class="ms-svg${o.clicavel ? " pick" : ""}" role="img" aria-label="Espectro de massas">`;
    // grade horizontal
    [0, 25, 50, 75, 100].filter(v => v <= ymax).forEach(v => {
      g += `<line x1="${ML}" x2="${W - MR}" y1="${Y(v)}" y2="${Y(v)}" class="ms-grid"/>` +
           `<text x="${ML - 7}" y="${Y(v) + 4}" class="ms-tick" text-anchor="end">${v}</text>`;
    });
    // eixo x
    g += `<line x1="${ML}" x2="${W - MR}" y1="${Y(0)}" y2="${Y(0)}" class="ms-axis"/>`;
    for (let t = Math.ceil(xmin / step) * step; t <= xmax; t += step){
      g += `<line x1="${X(t)}" x2="${X(t)}" y1="${Y(0)}" y2="${Y(0) + 5}" class="ms-axis"/>` +
           `<text x="${X(t)}" y="${Y(0) + 19}" class="ms-tick" text-anchor="middle">${Math.round(t)}</text>`;
    }
    g += `<text x="${ML + pw / 2}" y="${H - 3}" class="ms-lab" text-anchor="middle">m/z</text>`;
    if (fs <= 18) g += `<text transform="translate(12 ${MT + ph / 2}) rotate(-90)" class="ms-lab" text-anchor="middle">abundância relativa (%)</text>`;

    const mostrar = {}, ocup = [];
    picos.slice().sort((a, b) => (rot[b[0]] ? 1000 : b[1]) - (rot[a[0]] ? 1000 : a[1])).forEach(([mz, v]) => {
      if (!rot[mz] && (v < lim || o.semNumeros)) return;
      const x = X(mz), y = Y(v) - 6, w = String(mz).length * fs * 0.62 + 4;
      const bate = ocup.some(q => Math.abs(q.x - x) < (q.w + w) / 2 && Math.abs(q.y - y) < fs * (rot[mz] || q.tag ? 2.1 : 1.05));
      if (bate && !rot[mz]) return;
      mostrar[mz] = true; ocup.push({ x, y, w, tag: !!rot[mz] });
    });
    picos.forEach(([mz, v], i) => {
      const cls = (o.destaque && o.destaque[mz]) ? " " + o.destaque[mz] : "";
      const y = Y(v), h = Y(0) - y;
      g += `<g class="ms-peak${cls}" data-mz="${mz}" data-v="${v}" style="--d:${(i * 0.035).toFixed(2)}s">`;
      g += `<rect class="ms-bar" x="${X(mz) - bw / 2}" y="${y}" width="${bw}" height="${Math.max(h, 0.8)}" rx="1"/>`;
      if (o.clicavel){
        // área de clique vai até a metade da distância para os picos vizinhos (sem sobreposição)
        const half = Math.max(bw, 9);
        const xl = i > 0 ? Math.max(X(mz) - half, (X(picos[i - 1][0]) + X(mz)) / 2) : X(mz) - half;
        const xr = i < picos.length - 1 ? Math.min(X(mz) + half, (X(picos[i + 1][0]) + X(mz)) / 2) : X(mz) + half;
        g += `<rect class="ms-hit" x="${xl}" y="${MT - 10}" width="${xr - xl}" height="${ph + 10}"/>`;
      }
      const label = rot[mz];
      if (mostrar[mz]){
        g += `<text class="ms-num" x="${X(mz)}" y="${y - 6}" text-anchor="middle">${mz}</text>`;
        if (label) g += `<text class="ms-tag" x="${X(mz)}" y="${y - 9 - fs * 1.15}" text-anchor="middle">${label}</text>`;
      }
      g += `</g>`;
    });
    g += `</svg><div class="ms-tip" id="${uid}"></div>`;
    el.innerHTML = g;
    el.classList.add("ms-ready");

    const tip = el.querySelector(".ms-tip");
    const fmt = v => Number(v).toLocaleString("pt-BR", { maximumFractionDigits: v < 10 ? 2 : 1 });
    el.querySelectorAll(".ms-peak").forEach(p => {
      const show = () => {
        const r = el.getBoundingClientRect(), b = p.querySelector(".ms-bar").getBoundingClientRect();
        tip.innerHTML = `m/z <b>${p.dataset.mz}</b> · ${fmt(+p.dataset.v)}%`;
        tip.style.left = (b.left - r.left + b.width / 2) + "px";
        tip.style.top = Math.max(0, b.top - r.top - 34) + "px";
        tip.classList.add("on");
      };
      p.addEventListener("mouseenter", show);
      p.addEventListener("mouseleave", () => tip.classList.remove("on"));
      p.addEventListener("click", e => {
        show();
        if (o.clicavel && o.onPick){
          e.stopPropagation();
          el.querySelectorAll(".ms-peak").forEach(x => x.classList.toggle("sel", x === p));
          o.onPick(+p.dataset.mz, +p.dataset.v);
        }
      });
    });
  }

  // lê data-* de um elemento .ms-plot
  function fromData(el){
    const parse = s => (s || "").split(",").map(t => t.trim()).filter(Boolean);
    const picos = parse(el.dataset.picos).map(t => t.split(":").map(Number));
    const rotulos = {};
    parse(el.dataset.rotulos).forEach(t => { const [k, ...v] = t.split(":"); rotulos[+k] = v.join(":"); });
    const destaque = {};
    parse(el.dataset.destaque).forEach(t => { const [k, v] = t.split(":"); destaque[+k] = v || "hot"; });
    render(el, {
      picos, rotulos, destaque,
      xmin: el.dataset.xmin ? +el.dataset.xmin : undefined,
      xmax: el.dataset.xmax ? +el.dataset.xmax : undefined,
      limiteRotulo: el.dataset.lim ? +el.dataset.lim : undefined,
      altura: el.dataset.h ? +el.dataset.h : undefined
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
    document.querySelectorAll(".ms-plot[data-picos]").forEach(fromData);
    mols();
  });
  return { render, mols };
})();
window.Espectro = Espectro;
