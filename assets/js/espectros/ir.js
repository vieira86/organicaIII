/* ============================================================
   ir.js — desenha um espectro de infravermelho (transmitância)
   IR.render(el, { bandas: [[número de onda, intensidade 0–1, largura], …],
                   rotulos: true })
   Passe o mouse sobre o espectro para ler o número de onda (cm⁻¹).
   ============================================================ */
const IR = (() => {
  const ML = 44, MR = 14, MT = 16, MB = 40;
  const fmt = v => Math.round(v).toLocaleString("pt-BR", { useGrouping: false });

  function render(el, o){
    const B = o.bandas || [];
    const W = o.largura ?? 680, H = o.altura ?? 290;
    const pw = W - ML - MR, ph = H - MT - MB;
    const xmax = 4000, xmin = 450;
    const X = nu => ML + (xmax - nu) / (xmax - xmin) * pw;
    const nuDeX = x => xmax - (x - ML) / pw * (xmax - xmin);
    const Y = t => MT + (100 - t) / 100 * ph;
    // transmitância = 100 · Π (1 − profundidade · forma da banda)
    const T = nu => 100 * B.reduce((t, [c, d, w]) => {
      const lor = (w / 2) ** 2 / ((nu - c) ** 2 + (w / 2) ** 2);
      return t * (1 - 0.93 * d * lor);
    }, 0.97 + 0.015 * Math.sin(nu / 140));
    let p = "";
    for (let k = 0; k <= pw * 2; k++){
      const nu = xmax - k * (xmax - xmin) / (pw * 2);
      p += `${k ? "L" : "M"}${X(nu).toFixed(1)},${Y(T(nu)).toFixed(1)}`;
    }
    let g = `<svg viewBox="0 0 ${W} ${H}" class="ir-svg" role="img" aria-label="Espectro de infravermelho">`;
    [0, 20, 40, 60, 80, 100].forEach(v => {
      g += `<line x1="${ML}" x2="${W - MR}" y1="${Y(v)}" y2="${Y(v)}" class="ms-grid"/><text x="${ML - 7}" y="${Y(v) + 4}" class="ms-tick" text-anchor="end">${v}</text>`;
    });
    g += `<line x1="${ML}" x2="${W - MR}" y1="${Y(0)}" y2="${Y(0)}" class="ms-axis"/>`;
    for (let t = 4000; t >= 500; t -= 500){
      g += `<line x1="${X(t)}" x2="${X(t)}" y1="${Y(0)}" y2="${Y(0) + 5}" class="ms-axis"/><text x="${X(t)}" y="${Y(0) + 19}" class="ms-tick" text-anchor="middle">${t}</text>`;
    }
    g += `<text x="${ML + pw / 2}" y="${H - 3}" class="ms-lab" text-anchor="middle">número de onda (cm⁻¹)</text>`;
    g += `<text transform="translate(12 ${MT + ph / 2}) rotate(-90)" class="ms-lab" text-anchor="middle">transmitância (%)</text>`;
    g += `<path d="${p}" class="ir-line"/>`;
    if (o.rotulos) B.filter(b => b[1] >= 0.35).forEach(([c]) => {
      g += `<text x="${X(c)}" y="${Math.min(Y(T(c)) + 15, Y(0) - 4)}" class="ir-num" text-anchor="middle">${c}</text>`;
    });
    g += `<line class="ir-cursor" x1="0" x2="0" y1="${MT}" y2="${Y(0)}" style="display:none"/>`;
    g += `<rect class="ir-hit" x="${ML}" y="${MT}" width="${pw}" height="${ph}"/></svg><div class="ms-tip"></div>`;
    el.innerHTML = g;
    const svg = el.querySelector("svg"), tip = el.querySelector(".ms-tip"), cur = el.querySelector(".ir-cursor");
    const mover = ev => {
      const r = svg.getBoundingClientRect(), pt = ev.touches ? ev.touches[0] : ev;
      const x = (pt.clientX - r.left) / r.width * W;
      if (x < ML || x > W - MR) return;
      const nu = nuDeX(x);
      cur.setAttribute("x1", x); cur.setAttribute("x2", x); cur.style.display = "";
      tip.innerHTML = `<b>${fmt(nu)}</b> cm⁻¹ · T ≈ ${fmt(T(nu))}%`;
      tip.style.left = (pt.clientX - el.getBoundingClientRect().left) + "px";
      tip.style.top = "0px";
      tip.classList.add("on");
    };
    svg.addEventListener("mousemove", mover);
    svg.addEventListener("touchmove", mover, { passive: true });
    svg.addEventListener("mouseleave", () => { tip.classList.remove("on"); cur.style.display = "none"; });
  }
  return { render };
})();
window.IR = IR;
