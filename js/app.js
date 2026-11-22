(() => {
const C = window.CFG, D = window.I18N;
const PAGES = ["inicio", "que", "visor", "metodo", "uso", "datos"];
const state = { lang: "es", page: "inicio", layer: "bivar", sel: null, map: null, data: null, stats: null, hover: null, mapReady: false, tab: "resumen" };
const $ = (s, r = document) => r.querySelector(s);
const t = k => (D[state.lang][k] ?? D.es[k] ?? k);
const nf = (v, d = 0) => v == null || isNaN(v) ? "—" : new Intl.NumberFormat(state.lang === "es" ? "es-ES" : "en-GB", { minimumFractionDigits: d, maximumFractionDigits: d }).format(v);
const norm = s => (s || "").toString().normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
const store = { get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }, set(k, v) { try { localStorage.setItem(k, v); } catch (e) {} } };
const unit = u => (u && u.startsWith("u:")) ? t("u_" + u.slice(2)) : (u || "");
const LAYER = id => C.layers.find(l => l.id === id);

/* ---------- idioma y textos ---------- */
function renderStatic() {
  document.documentElement.lang = state.lang;
  document.title = t("site_title");
  document.querySelectorAll("[data-i18n]").forEach(e => e.textContent = t(e.dataset.i18n));
  document.querySelectorAll("[data-i18n-html]").forEach(e => e.innerHTML = t(e.dataset.i18nHtml));
  $("#search").placeholder = t("search_ph");
  ["es", "en"].forEach(l => $("#lang-" + l).classList.toggle("on", l === state.lang));
  renderTabs(); buildIndTable();
  document.querySelectorAll("[data-go]").forEach(b => b.onclick = () => go(b.dataset.go));
  renderLayerList(); renderLegend();
  const ud = $("#uso-diamond"); if (ud) ud.innerHTML = `<div class="ttl">${t("l_bivar")}</div>` + diamondHTML();
  if (state.printBtn) { state.printBtn.title = t("print"); state.printBtn.setAttribute("aria-label", t("print")); }
  $("#disc-x").setAttribute("aria-label", t("disc_close")); $("#disc-x").title = t("disc_close");
  if (state.sel) renderFicha();
}
function setLang(l) { state.lang = l; store.set("lang", l); renderStatic(); writeHash(); }
function buildIndTable() {
  const tb = $("#tbl-ind"); if (!tb) return;
  tb.innerHTML = "<tr>" + t("ind_head").map(h => `<th>${h}</th>`).join("") + "</tr>" + t("ind_rows").map(r => "<tr>" + r.map(c => `<td>${c}</td>`).join("") + "</tr>").join("");
}

/* ---------- navegación ---------- */
function renderTabs() {
  $("#tabs").innerHTML = PAGES.map(p => `<button data-p="${p}" class="${p === state.page ? "on" : ""}">${t("tab_" + p)}</button>`).join("");
  $("#tabs").querySelectorAll("button").forEach(b => b.onclick = () => go(b.dataset.p));
}
function showDisc() { $("#disc").hidden = false; $("#disc-ok").focus(); }
function hideDisc() { $("#disc").hidden = true; }
function go(p) {
  if (p === "visor" && !state.discSeen) { state.discSeen = true; showDisc(); }
  state.page = p; $("#menu").classList.remove("open");
  PAGES.forEach(x => $("#page-" + x).classList.toggle("on", x === p));
  renderTabs();
  if (p === "visor") { initMap(); setTimeout(() => state.map && state.map.resize(), 50); }
  writeHash();
}
function writeHash() {
  const q = [];
  if (state.page === "visor") { if (state.sel) q.push("s=" + state.sel.cusec); q.push("l=" + state.layer); }
  q.push("lang=" + state.lang);
  history.replaceState(null, "", "#" + state.page + "?" + q.join("&"));
}
function readHash() {
  const [p, q] = location.hash.slice(1).split("?"); const prm = new URLSearchParams(q || "");
  return { page: PAGES.includes(p) ? p : "inicio", s: prm.get("s"), l: prm.get("l"), lang: prm.get("lang") };
}

/* ---------- panel de capas ---------- */
function renderLayerList() {
  const groups = ["base", "thermal", "hazard", "vuln", "risk"];
  $("#layerlist").innerHTML = groups.map(g => `<div class="gname">${t("g_" + g)}</div>` +
    C.layers.filter(l => l.group === g).map(l => `<label class="row"><input type="radio" name="lyr" value="${l.id}" ${l.id === state.layer ? "checked" : ""}> <span>${t("l_" + l.id)}</span></label>`).join("")).join("");
  $("#layerlist").querySelectorAll("input").forEach(i => i.onchange = () => setLayer(i.value));
}
function setLayer(id) { state.layer = id; applyLayerStyle(); renderLegend(); writeHash(); }

/* ---------- estilos ---------- */
function fillExpr() {
  const L = LAYER(state.layer), none = "rgba(0,0,0,0)";
  if (L.type === "outline") return none;
  if (L.type === "bivar") {
    const m = ["match", ["+", ["*", ["to-number", ["get", "H"], -1], 10], ["to-number", ["get", "V"], -1]]];
    Object.keys(C.biv).forEach(k => m.push(+k, C.biv[k])); m.push(none);
    return ["case", ["==", ["get", "excluida"], true], none, m];
  }
  const st = ["step", ["to-number", ["get", L.key], -99999], L.colors[0]];
  L.breaks.forEach((b, i) => st.push(b, L.colors[i + 1]));
  return ["case", ["==", ["get", "excluida"], true], none, st];
}
function applyLayerStyle() {
  if (!state.mapReady) return;
  const op = +$("#op-layer").value / 100, L = LAYER(state.layer);
  state.map.setPaintProperty("sec-fill", "fill-color", fillExpr());
  state.map.setPaintProperty("sec-fill", "fill-opacity", L.type === "outline" ? 0 : op);
}
function diamondHTML() {
    const cells = [3, 2, 1, 0].map(H => [3, 2, 1, 0].map(V => `<div style="background:${C.biv[H * 10 + V]}" title="H=${H}, V=${V}"></div>`).join("")).join("");
    const rot = (x, y) => [105 + (x - y) * 0.7071, 80 + (x + y) * 0.7071], cs = 23;
    let nums = "";
    for (let i = 0; i < 4; i++) {
      const c = -46 + cs * (i + 0.5);
      const [hx, hy] = rot(56, c), [vx, vy] = rot(c, 56);       // H en la columna derecha (arriba=H3); V en la fila inferior
      nums += `<span class="n" style="left:${hx.toFixed(1)}px;top:${hy.toFixed(1)}px">${3 - i}</span><span class="n" style="left:${vx.toFixed(1)}px;top:${vy.toFixed(1)}px">${3 - i}</span>`;
    }
    return `<div class="diamond"><div class="grid">${cells}</div>` + nums + `<span class="ax ah">${t("leg_hazard")} →</span><span class="ax av">← ${t("leg_vuln")}</span></div>`;
}
function renderLegend() {
  const L = LAYER(state.layer); let h = "";
  if (L.type === "bivar") {
    h = `<div class="leg"><div class="ttl">${t("l_bivar")}</div>` + diamondHTML();
  } else if (L.type !== "outline") {
    const f = v => nf(v, L.dec), n = L.colors.length, u = L.unit ? " " + L.unit : "";
    const lab = i => i === 0 ? `< ${f(L.breaks[0])}` : i === n - 1 ? `≥ ${f(L.breaks[n - 2])}` : `${f(L.breaks[i - 1])} – ${f(L.breaks[i])}`;
    h = `<div class="leg"><div class="ttl">${t("l_" + L.id)}${L.unit ? " (" + L.unit + ")" : ""}</div>` +
      L.colors.map((c, i) => `<div class="it"><span class="sw" style="background:${c}"></span>${lab(i)}</div>`).join("");
    if (L.thr != null) h += `<div class="note"><b>${t("leg_thr")}:</b> ${{ ">=": "≥", "<=": "≤", ">": ">" }[L.thrOp]} ${f(L.thr)}${u}</div>`;
  } else h = `<div class="leg"><div class="ttl">${t("l_contornos")}</div>`;
  h += `</div>`;
  $("#legend").innerHTML = h;
}

/* ---------- mapa ---------- */
function initMap() {
  if (state.map) return;
  let map;
  try { map = state.map = new maplibregl.Map({
    container: "map", center: C.center, zoom: 11.6, minZoom: 10.5, maxZoom: 18, maxBounds: C.bounds, attributionControl: false, dragRotate: false, pitchWithRotate: false, touchPitch: false,
    style: { version: 8, sources: {
      pnoa: { type: "raster", tiles: [C.pnoa], tileSize: 256, maxzoom: 19, attribution: "PNOA cedido por © Instituto Geográfico Nacional" }
    }, layers: [
      { id: "bg", type: "background", paint: { "background-color": "#e4e4e4" } },
      { id: "pnoa", type: "raster", source: "pnoa", paint: { "raster-opacity": 0.8 } }
    ] }
  }); } catch (e) { console.error(e); state.map = null; $("#map").innerHTML = `<p class="maperr">${t("no_map")}</p>`; return; }
  map.on("error", e => console.error("map error:", e && e.error && e.error.message || e));
  map.addControl(new maplibregl.NavigationControl({ showCompass: false }), "top-right");
  map.touchZoomRotate.disableRotation(); map.keyboard.disableRotation();
  map.addControl(new maplibregl.ScaleControl({ unit: "metric" }), "bottom-right");
  map.addControl(new maplibregl.AttributionControl({ compact: true }), "bottom-left");
  map.on("load", () => {
    map.addSource("sec", { type: "geojson", data: state.data, promoteId: "cusec" });
    map.addSource("aoi", { type: "geojson", data: "data/aoi.geojson" });
    map.addLayer({ id: "sec-fill", type: "fill", source: "sec", paint: { "fill-color": "rgba(0,0,0,0)", "fill-opacity": 0.85 } });
    map.addLayer({ id: "sec-line", type: "line", source: "sec", filter: ["!=", ["get", "excluida"], true], paint: { "line-color": "#000", "line-width": ["interpolate", ["linear"], ["zoom"], 10, 0.3, 15, 1] } });
    map.addLayer({ id: "sec-excl", type: "line", source: "sec", filter: ["==", ["get", "excluida"], true], paint: { "line-color": "#333", "line-width": 0.9, "line-dasharray": [2, 2] } });
    map.addLayer({ id: "aoi-line", type: "line", source: "aoi", paint: { "line-color": "#000", "line-width": 2, "line-dasharray": [4, 3] } });
    map.addLayer({ id: "sec-hover", type: "line", source: "sec", paint: { "line-color": "#fff", "line-width": ["case", ["boolean", ["feature-state", "hover"], false], 3, 0] } });
    map.addLayer({ id: "sec-sel", type: "line", source: "sec", paint: { "line-color": "#ffd400", "line-width": ["case", ["boolean", ["feature-state", "sel"], false], 4, 0] } });
    state.mapReady = true; applyLayerStyle();
    map.on("mousemove", "sec-fill", e => hover(e));
    map.on("mouseleave", "sec-fill", () => unhover());
    map.on("click", "sec-fill", e => { if (e.features[0]) select(e.features[0].properties.cusec, false); });
    map.on("click", "sec-excl", e => { if (e.features[0]) select(e.features[0].properties.cusec, false); });
    map.on("click", e => { if (!map.queryRenderedFeatures(e.point, { layers: ["sec-fill", "sec-excl"] }).length) closeFicha(); });
    map.on("zoom", () => loadBuildings()); map.on("moveend", () => loadBuildings()); loadBuildings();
    const a = document.querySelector(".maplibregl-ctrl-attrib"); if (a) { a.classList.remove("maplibregl-compact-show"); a.removeAttribute("open"); }
    map.addControl(printControl(), "top-right");
    if (state.sel) markSel(state.sel.cusec);
  });
}
const BLD_MINZOOM = 12;
function loadBuildings(retry = 0) {
  const m = state.map; if (!m || state.bld || m.getZoom() < BLD_MINZOOM) return;
  state.bld = true;
  fetch("data/edificios.geojson").then(r => { if (!r.ok) throw new Error("HTTP " + r.status); return r.json(); }).then(data => {
    if (m.getSource("bld")) return;
    m.addSource("bld", { type: "geojson", data });
    m.addLayer({ id: "bld-fill", type: "fill", source: "bld", minzoom: BLD_MINZOOM, layout: { visibility: $("#bld-toggle").checked ? "visible" : "none" }, paint: { "fill-color": "#2b2b2b", "fill-antialias": false, "fill-opacity": +$("#op-bld").value / 100 } }, "sec-line");
  }).catch(e => { console.error("edificios:", e); state.bld = false; if (retry < 3) setTimeout(() => loadBuildings(retry + 1), 2500 * (retry + 1)); });
}
function hover(e) {
  const f = e.features[0]; if (!f) return; const id = f.properties.cusec; const m = state.map;
  m.getCanvas().style.cursor = "pointer";
  if (state.hover && state.hover !== id) m.setFeatureState({ source: "sec", id: state.hover }, { hover: false });
  state.hover = id; m.setFeatureState({ source: "sec", id }, { hover: true });
  const p = f.properties, L = LAYER(state.layer); let txt = `<strong>${p.barrio}</strong>`;
  if (p.excluida === true || p.excluida === "true") txt += `<br>${p.excl_tipo === "densidad" ? t("excl_densidad") : t("excl_sim")}`;
  else if (L.key) txt += `<br>${t("l_" + L.id)}: ${nf(+p[L.key], L.dec)} ${L.unit}`;
  else if (L.type === "bivar") txt += `<br>H=${p.H}, V=${p.V}`;
  const tip = $("#tip"); tip.innerHTML = txt; tip.hidden = false;
  tip.style.left = Math.max(4, Math.min(e.point.x + 14, m.getCanvas().clientWidth - 270)) + "px"; tip.style.top = Math.max(4, Math.min(e.point.y + 14, m.getCanvas().clientHeight - 70)) + "px";
}
function unhover() {
  const m = state.map; m.getCanvas().style.cursor = "";
  if (state.hover) m.setFeatureState({ source: "sec", id: state.hover }, { hover: false });
  state.hover = null; $("#tip").hidden = true;
}
function markSel(id) {
  if (!state.mapReady) return;
  if (state.selMark) state.map.setFeatureState({ source: "sec", id: state.selMark }, { sel: false });
  state.selMark = id; if (id) state.map.setFeatureState({ source: "sec", id }, { sel: true });
}
function featureById(id) { return state.data.features.find(f => f.properties.cusec === String(id)); }
function bboxOf(g) {
  let b = [180, 90, -180, -90];
  (function w(c) { if (typeof c[0] === "number") { b = [Math.min(b[0], c[0]), Math.min(b[1], c[1]), Math.max(b[2], c[0]), Math.max(b[3], c[1])]; } else c.forEach(w); })(g.coordinates);
  return b;
}
function closeFicha() {
  if (!state.sel) return; state.sel = null; markSel(null); $("#ficha").hidden = true;
  state.map && setTimeout(() => state.map.resize(), 30); writeHash();
}
function select(id, fly) {
  const f = featureById(id); if (!f) return;
  state.sel = f.properties; state.tab = "resumen"; markSel(String(id));
  if (fly && state.map) { const b = bboxOf(f.geometry); state.map.fitBounds([[b[0], b[1]], [b[2], b[3]]], { padding: 80, maxZoom: 16.5, duration: 600 }); }
  renderFicha(); writeHash();
}

/* ---------- ficha ---------- */
const RADAR = [["h_sobre40", "rd_h40", 1], ["hne", "rd_hne", 1], ["cdh", "rd_cdh", 1], ["renta", "rd_renta", -1], ["p_mayor65", "rd_65", 1], ["anyo_edif", "rd_edif", -1]];
function pctRank(key, v, sign) {
  if (!state.sorted) state.sorted = {};
  if (!state.sorted[key]) state.sorted[key] = state.data.features.map(f => f.properties).filter(p => !(p.excluida === true || p.excluida === "true") && p[key] != null).map(p => +p[key]).sort((a, b) => a - b);
  const a = state.sorted[key]; let lo = 0, eq = 0; for (const x of a) { if (x < v) lo++; else if (x === v) eq++; else break; }
  const r = (lo + eq / 2) / a.length * 100; return sign > 0 ? r : 100 - r;
}
function radar(p) {
  const cx = 150, cy = 118, R = 80, n = RADAR.length, ang = i => -Math.PI / 2 + i * 2 * Math.PI / n;
  const pt = (i, r) => [cx + Math.cos(ang(i)) * R * r / 100, cy + Math.sin(ang(i)) * R * r / 100];
  const ring = r => RADAR.map((_, i) => pt(i, r).map(x => x.toFixed(1)).join(",")).join(" ");
  const vals = RADAR.map(([k, , s]) => pctRank(k, +p[k], s));
  const poly = vals.map((v, i) => pt(i, v).map(x => x.toFixed(1)).join(",")).join(" ");
  const wedge = (i0, i1, col) => { const a = pt(i0, 100), b = pt(i1, 100); return `<path d="M${cx},${cy} L${a[0]},${a[1]} L${b[0]},${b[1]} Z" fill="${col}" opacity=".07"/>`; };
  let g = wedge(0, 1, "#c0392b") + wedge(1, 2, "#c0392b") + wedge(3, 4, "#2b5c8a") + wedge(4, 5, "#2b5c8a");
  [20, 40, 60, 100].forEach(r => g += `<polygon points="${ring(r)}" fill="none" stroke="#c9d0d7" stroke-width="1"/>`);
  const thrPts = RADAR.map(([k, , s], i) => pt(i, pctRank(k, LAYER(k).thr, s)).map(x => x.toFixed(1)).join(",")).join(" ");   // umbral crítico propio de cada eje
  g += `<polygon points="${thrPts}" fill="none" stroke="#c0392b" stroke-width="1.5" stroke-dasharray="4 3"/>`;
  RADAR.forEach((_, i) => { const e = pt(i, 100); g += `<line x1="${cx}" y1="${cy}" x2="${e[0].toFixed(1)}" y2="${e[1].toFixed(1)}" stroke="#c9d0d7"/>`; });
  g += `<polygon points="${poly}" fill="rgba(155,27,48,.28)" stroke="#9b1b30" stroke-width="2"/>`;
  vals.forEach((v, i) => { const q = pt(i, v); g += `<circle cx="${q[0].toFixed(1)}" cy="${q[1].toFixed(1)}" r="3.5" fill="${p[LAYER(RADAR[i][0]).flag] === 1 ? "#c0392b" : "#9b1b30"}" stroke="#fff" stroke-width="1.5"/>`; });
  RADAR.forEach(([, lk], i) => { const e = pt(i, 122), c = Math.cos(ang(i)); g += `<text x="${e[0].toFixed(1)}" y="${(e[1] + 4).toFixed(1)}" font-size="11" font-weight="600" fill="${i < 3 ? "#8e1d10" : "#1d4468"}" text-anchor="${Math.abs(c) < 0.2 ? "middle" : c > 0 ? "start" : "end"}">${t(lk)}</text>`; });
  return `<div class="sec"><h4>${t("rd_title")}</h4><svg viewBox="-25 0 350 236" class="radar" role="img" aria-label="${t("rd_title")}">${g}</svg><p class="comp" style="margin:0">${t("rd_cap")}</p></div>`;
}
function riskText(H, V) {
  if (H === 0 && V === 0) return t("risk_0");
  if (H === 0) return t("risk_v");
  if (V === 0) return t("risk_h");
  return (H >= 2 && V >= 2) ? t("risk_hi") : t("risk_c");
}
const lum = hex => { const n = parseInt(hex.slice(1), 16); return (0.299 * (n >> 16) + 0.587 * ((n >> 8) & 255) + 0.114 * (n & 255)) / 255; };
const help = k => t("gl")[k] ? `<span class="help" data-gl="${k}">${t(k)}</span>` : t(k);
function showPop(el) {
  const g = t("gl")[el.dataset.gl]; if (!g) return;
  const pop = $("#pop"), r = el.getBoundingClientRect();
  pop.innerHTML = `${g[0]}<em>${g[1]}</em>`; pop.hidden = false;
  pop.style.left = Math.max(8, r.left - 300) + "px"; pop.style.top = Math.min(window.innerHeight - pop.offsetHeight - 8, r.bottom + 6) + "px";
}
function hidePop() { const p = $("#pop"); if (p) p.hidden = true; }
function bar(key, v, L) {
  const s = state.stats[key]; if (!s || v == null) return "";
  const pos = x => Math.max(0, Math.min(100, (x - s.min) / (s.max - s.min) * 100));
  const d = L ? L.dec : 1, u = L && L.unit ? " " + L.unit : "";
  const thr = L && L.thr != null && L.thr >= s.min && L.thr <= s.max ? `<div class="t" style="left:${pos(L.thr)}%"></div><span class="tl" style="left:${pos(L.thr)}%">${L.pct || nf(L.thr, d)}</span>` : "";
  return `<div class="bar"><div class="fill" style="width:${pos(v)}%"></div><div class="m" style="left:${pos(s.mean)}%"></div>${thr}<div class="v" style="left:${pos(v)}%"></div></div>` +
    `<div class="dleg"><span>${t("f_min")} ${nf(s.min, d)}${u}</span><span>${t("f_cmean")} ${nf(s.mean, d)}${u}</span><span>${t("f_max")} ${nf(s.max, d)}${u}</span></div>`;
}
const keysLeg = thr => `<div class="keys"><span><i class="k1"></i>${t("f_here")}</span><span><i class="k2"></i>${t("f_cmean")}</span>${thr ? `<span><i class="k3"></i>${t("f_cthr")}</span>` : ""}</div>`;
function indicator(p, id) {
  const L = LAYER(id), v = p[L.key], crit = p[L.flag] === 1;
  const thr = L.thr != null ? `${t("f_cthr")}: ${{ ">=": "≥", "<=": "≤", ">": ">" }[L.thrOp]} ${L.pct ? L.pct + " (" : ""}${nf(L.thr, L.dec)} ${L.unit}${L.pct ? ")" : ""}` : "";
  return `<div class="ind"><div class="lab"><span class="n">${help(L.key)}</span><span class="val">${nf(v, L.dec)} <small>${L.unit}</small></span></div>${bar(L.key, v, L)}` +
    `<div class="dleg" style="margin-top:3px"><span>${thr}</span><span class="badge ${crit ? "crit" : "ok"}">${crit ? t("f_crit") : t("f_nocrit")}</span></div></div>`;
}
const kv = (p, [k, lk, u, d]) => `<div class="kv"><span class="n">${help(lk)}</span><span class="vv">${nf(p[k], d)} <small>${unit(u)}</small></span></div>`;
function lcz(p) { const n = t("lcz_names")[p.lcz]; return n ? `${p.lcz} · ${n}` : "—"; }
const TABS = [["resumen", "f_resumen", "📋"], ["amenaza", "f_amenaza", "🌡️"], ["vuln", "f_vuln", "⚠️"], ["socio", "f_socio", "👥"], ["morf", "f_morf", "🏙️"]];
function renderFicha() {
  const p = state.sel, el = $("#ficha"); if (!p) { el.hidden = true; return; }
  el.hidden = false; state.map && setTimeout(() => state.map.resize(), 30); hidePop();
  const excl = p.excluida === true || p.excluida === "true";
  let body = "";
  const tabs = excl ? [] : TABS;
  if (excl) {
    body = `<div class="sec">${p.excl_tipo === "densidad" ? t("excl_densidad") : t("excl_sim")}</div>`;
  } else if (state.tab === "resumen") {
    const H = +p.H, V = +p.V, col = C.biv[H * 10 + V];
    const grp = (ids, title) => { const n = ids.filter(i => p[LAYER(i).flag] === 1).length;
      return `<div class="sec"><h4>${title}<span class="cnt ${n ? "cn" : "c0"}">${n} ${t("f_of3")}</span></h4>` + ids.map(i => { const L = LAYER(i), c = p[L.flag] === 1;
        return `<div class="srow"><span>${help(L.key)}</span><span class="v">${nf(p[L.key], L.dec)} ${L.unit}</span><span class="badge ${c ? "crit" : "ok"}">${c ? t("f_crit") : t("f_nocrit")}</span></div>`; }).join("") + `</div>`; };
    const popbox = `<div class="sec"><div class="pobbox"><span>${t("f_pob")}</span><strong>${nf(p.pob)} <small style="font-size:12px;font-weight:400">${t("f_pobl")}</small></strong></div></div>`;
    body = `<div class="riskcard" style="background:${col};color:${lum(col) > 0.6 ? "#1f2933" : "#fff"}"><div class="rl">${t("f_risk")}</div><div class="rt">${riskText(H, V)}</div><div class="chips"><span class="chip">🌡️ ${t("f_h")} = ${H} / 3</span><span class="chip">⚠️ ${t("f_v")} = ${V} / 3</span></div></div>` + radar(p) +
      grp(["h_sobre40", "hne", "cdh"], t("g_hazard")) + grp(["renta", "p_mayor65", "anyo_edif"], t("g_vuln")) + popbox;
  } else if (state.tab === "socio") {
    const fem = p.hombres != null && p.mujeres != null ? p.mujeres / (p.hombres + p.mujeres) * 100 : null;
    body = `<div class="sec">${C.socio.map(r => kv(p, r)).join("")}<div class="kv"><span class="n">${t("mujeres")}</span><span class="vv">${nf(fem, 1)} <small>%</small></span></div></div><p class="comp">${t("f_src_ine")}</p>`;
  } else if (state.tab === "amenaza") {
    const tl = { dec: 1, unit: "°C" };
    body = `<div class="sec">${keysLeg(false)}${["t_media", "t_max_dia", "t_min_dia"].map(k => `<div class="ind"><div class="lab"><span class="n">${help(k)}</span><span class="val">${nf(p[k], 1)} <small>°C</small></span></div>${bar(k, p[k], tl)}</div>`).join("")}</div>` +
      `<div class="sec">${keysLeg(true)}${["h_sobre40", "hne", "cdh"].map(id => indicator(p, id)).join("")}</div>`;
  } else if (state.tab === "vuln") {
    body = `<div class="sec">${keysLeg(true)}${["renta", "p_mayor65", "anyo_edif"].map(id => indicator(p, id)).join("")}</div>`;
  } else if (state.tab === "morf") {
    body = `<div class="sec">${C.morph.map(r => kv(p, r)).join("")}</div><p class="comp">${t("f_comp")}</p>`;
  }
  el.innerHTML = `<div class="fgrip" id="fgrip"></div><div class="fhead"><div class="acts">${excl ? "" : `<button id="share" class="act" title="${t("f_share")}" aria-label="${t("f_share")}"><span>🔗</span><small>${t("f_share_btn")}</small></button>`}<button class="fclose" title="${t("f_close")}" aria-label="${t("f_close")}">✕</button></div><h2>${p.barrio}</h2><div class="sub">${p.distrito || ""}</div><div class="code">${t("f_code")}: ${p.cusec}</div></div>` +
    (tabs.length ? `<div class="ftabs">${tabs.map(([k, l, i]) => `<button data-t="${k}" class="${k === state.tab ? "on" : ""}"><span class="i">${i}</span>${t(l)}</button>`).join("")}</div>` : "") +
    `<div class="fbody">${body}</div><div class="fdisc">${t("f_disclaimer")}</div>`;
  el.querySelector(".fclose").onclick = closeFicha;
  if (state.sheetH) el.style.maxHeight = el.style.height = state.sheetH + "px"; else { el.style.maxHeight = el.style.height = ""; }
  const g = $("#fgrip"), fh = el.querySelector(".fhead"); let y0 = 0, h0 = 0, drag = false;
  [g, fh].forEach(h => {
    h.onpointerdown = e => { if (e.target.closest("button")) return; drag = true; y0 = e.clientY; h0 = el.getBoundingClientRect().height; h.setPointerCapture(e.pointerId); };
    h.onpointermove = e => { if (!drag) return; const mx = el.parentElement.getBoundingClientRect().height * 0.9;
      state.sheetH = Math.max(150, Math.min(mx, h0 + (y0 - e.clientY))); el.style.maxHeight = el.style.height = state.sheetH + "px"; };
    h.onpointerup = h.onpointercancel = () => { drag = false; };
  });
  el.querySelectorAll(".ftabs button").forEach(b => b.onclick = () => { state.tab = b.dataset.t; renderFicha(); });
  el.querySelectorAll(".help").forEach(h => { h.onmouseenter = () => showPop(h); h.onmouseleave = hidePop; h.onclick = () => showPop(h); });
  const sh = $("#share"); if (sh) sh.onclick = () => { writeHash(); const u = location.href;
    if (navigator.share) { navigator.share({ title: t("site_title") + " · " + p.barrio, text: p.barrio + " (" + p.cusec + ")", url: u }).catch(() => {}); return; }
    (navigator.clipboard ? navigator.clipboard.writeText(u) : Promise.reject()).then(() => { const o = sh.innerHTML; sh.innerHTML = `<span>✓</span><small>${t("f_copied")}</small>`; setTimeout(() => sh.innerHTML = o, 1800); }).catch(() => { prompt(t("f_share"), u); }); };
}

/* ---------- guardar la vista (PDF / imagen, A4 apaisado) ---------- */
function printControl() {
  const d = document.createElement("div"); d.className = "maplibregl-ctrl maplibregl-ctrl-group";
  const b = document.createElement("button"); b.type = "button"; b.className = "printbtn";
  b.innerHTML = '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path fill="currentColor" d="M19 8H5a3 3 0 0 0-3 3v6h4v4h12v-4h4v-6a3 3 0 0 0-3-3zm-3 11H8v-5h8v5zm3-7a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM18 3H6v4h12V3z"/></svg>';
  b.title = t("print"); b.setAttribute("aria-label", t("print")); b.onclick = saveView; d.appendChild(b);
  state.printBtn = b; return { onAdd: () => d, onRemove: () => d.remove() };
}
function niceLen(maxM) { const p = Math.pow(10, Math.floor(Math.log10(maxM))); for (const k of [5, 2, 1]) if (k * p <= maxM) return k * p; return p; }
const loadScript = src => new Promise((ok, ko) => { const s = document.createElement("script"); s.src = src; s.onload = ok; s.onerror = ko; document.head.appendChild(s); });
async function loadExportLibs() {
  if (!window.html2canvas) await loadScript("https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js");
  if (!window.jspdf) await loadScript("https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js");
  if (!window.QRCode) { try { await loadScript("https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js"); } catch (e) {} }
}
const whenIdle = (m, ms = 6000) => new Promise(r => { let d = false; const f = () => { if (!d) { d = true; r(); } }; m.once("idle", f); setTimeout(f, ms); });
function pvModal(html) { const el = $("#pv"); el.querySelector(".pvbody").innerHTML = html; el.hidden = false; }
function pvClose() { $("#pv").hidden = true; }
async function captureMap(W, H) {
  const m = state.map, box = $("#map"), c0 = m.getCenter(), z0 = m.getZoom(), cw = box.clientWidth, ch = box.clientHeight, pr0 = window.devicePixelRatio || 1;
  const prn = Math.min(3, 4000 / Math.max(W, H));
  box.style.cssText = `inset:auto;left:0;top:0;width:${W}px;height:${H}px`;
  m.resize(); m.jumpTo({ center: c0, zoom: z0 - Math.log2(Math.max(cw / W, ch / H, 1)) });
  if (m.setPixelRatio) m.setPixelRatio(prn);
  await whenIdle(m);
  const z1 = m.getZoom(), lat = m.getCenter().lat;
  const url = await new Promise(r => { m.once("render", () => r(m.getCanvas().toDataURL("image/png"))); m.triggerRepaint(); });
  box.style.cssText = ""; if (m.setPixelRatio) m.setPixelRatio(pr0); m.resize(); m.jumpTo({ center: c0, zoom: z0 });
  return { url, mpp: 40075016.686 * Math.cos(lat * Math.PI / 180) / (512 * Math.pow(2, z1)) };
}
async function saveView() {
  const m = state.map; if (!m || state.saving) return; state.saving = true;
  const wait = `<p class="pvwait">${t("pv_wait")}</p>`; pvModal(wait);
  try {
    await loadExportLibs();
    const p = state.sel, excl = p && (p.excluida === true || p.excluida === "true"), hasF = !!p;
    const SW = 1123, SH = 794, PAD = 24;
    // esqueleto de la hoja
    const sh = document.createElement("div"); sh.id = "printsheet"; sh.style.cssText = "position:fixed;left:0;top:0;z-index:-1;width:1123px;height:794px;background:#fff;box-sizing:border-box;display:flex;flex-direction:column;padding:22px 24px 12px;overflow:hidden";
    const tb = hasF && !excl ? TABS.find(x => x[0] === state.tab) : null;
    const today = new Date().toLocaleDateString(state.lang === "es" ? "es-ES" : "en-GB");
    writeHash();
    sh.innerHTML = `<div class="ps-hdr"><div class="t">${t("print_hdr")}</div><div class="u">${location.href.split("#")[0]}</div><img style="height:30px;width:auto" src="assets/logos/logo_SATH_TEP206_nuevo.png" alt=""><img style="height:30px;width:auto" src="assets/logos/logo_universidad_sevilla.png" alt=""></div>` +
      `<div class="ps-main" style="flex:1;min-height:0;display:flex;gap:16px"><div class="ps-mapcol"></div><div class="ps-fcol"></div></div>` +
      `<div class="ps-ftr"><div class="ps-ft">${t("print_ftr")} Sola-Caraballo et al. (2026), <i>Urban Climate</i>, 70, 103156, <span class="ps-doi">https://doi.org/10.1016/j.uclim.2026.103156</span><br>${t("print_att")} · ${t("web_credit")} · ${today}</div><div class="ps-qr"></div></div>`;
    document.body.appendChild(sh);
    const main = sh.querySelector(".ps-main"), mapcol = sh.querySelector(".ps-mapcol"), fcol = sh.querySelector(".ps-fcol");
    const mainW = SW - 2 * PAD, mainH = main.clientHeight, gap = 16;
    let fW = 0, fHTML = "", fScale = 1;
    if (hasF) {
      const fb = $("#ficha .fbody"), kids = fb ? [...fb.children].map(c => c.outerHTML) : [];
      const head = `<div class="ps-fh"><h2>${p.barrio}</h2><div class="ps-sub">${p.distrito || ""} · ${t("f_code")}: ${p.cusec}${tb ? " · <b>" + t(tb[1]) + "</b>" : ""}</div></div>`;
      const probe = document.createElement("div"); probe.className = "ps-probe"; probe.innerHTML = kids.join(""); sh.appendChild(probe);
      const hs = [...probe.children].map(c => c.offsetHeight + 10); probe.remove();
      const tot = hs.reduce((a, b) => a + b, 0), FW = 412, headH = 56, cap = Math.round(mainW * 0.45), GAP2 = 18;
      // opción 1: una columna; opción 2: dos columnas. Gana la que permite mayor escala sin pasar del 45 % del ancho
      const k1 = Math.min(1.1, cap / FW, mainH / (tot + headH));
      let cut = kids.length, acc = 0; for (let i = 0; i < hs.length; i++) { if (acc + hs[i] / 2 >= tot / 2) { cut = i; break; } acc += hs[i]; }
      cut = Math.max(1, Math.min(kids.length - 1, cut));
      const h2 = Math.max(hs.slice(0, cut).reduce((a, b) => a + b, 0), hs.slice(cut).reduce((a, b) => a + b, 0));
      const k2 = kids.length > 1 ? Math.min(1.1, cap / (2 * FW + GAP2), mainH / (h2 + headH)) : 0;
      if (k2 > k1 * 1.12) { fScale = k2; fW = Math.round((2 * FW + GAP2) * k2); fHTML = `<div class="ps-fin" style="width:${2 * FW + GAP2}px">${head}<div class="ps-2c"><div style="width:${FW}px">${kids.slice(0, cut).join("")}</div><div style="width:${FW}px">${kids.slice(cut).join("")}</div></div></div>`; }
      else { fScale = k1; fW = Math.round(FW * k1); fHTML = `<div class="ps-fin" style="width:${FW}px">${head}${kids.join("")}</div>`; }
    }
    const mapW = hasF ? mainW - fW - gap : mainW, mapH = mainH;
    mapcol.style.width = mapW + "px"; fcol.style.width = fW + "px"; if (!hasF) fcol.style.display = "none";
    const cap = await captureMap(mapW, mapH);
    // leyenda (rombo reescalado sin zoom) y escala
    const lg = document.createElement("div"); lg.innerHTML = $("#legend").innerHTML;
    const dm = lg.querySelector(".diamond"); if (dm) { const w = document.createElement("div"); w.className = "ps-diam"; dm.replaceWith(w); w.appendChild(dm); }
    const L = niceLen(cap.mpp * mapW * 0.22), lab = L >= 1000 ? (L / 1000) + " km" : L + " m";
    mapcol.innerHTML = `<div class="ps-map" style="width:${mapW}px;height:${mapH}px"><img src="${cap.url}" width="${mapW}" height="${mapH}" alt=""><div class="ps-leg">${lg.innerHTML}</div><div class="ps-scale"><i style="width:${Math.round(L / cap.mpp)}px"></i><span>${lab}</span></div></div>`;
    if (hasF) { fcol.innerHTML = fHTML; fcol.firstChild.style.transform = `scale(${fScale.toFixed(3)})`; }
    // código QR con la dirección exacta de la vista (se genera con la URL de cada momento)
    const qrBox = sh.querySelector(".ps-qr");
    try { if (window.QRCode) { const tmp = document.createElement("div"); new window.QRCode(tmp, { text: location.href, width: 160, height: 160, correctLevel: window.QRCode.CorrectLevel.L });
      const c = tmp.querySelector("canvas"); if (c) qrBox.innerHTML = `<img src="${c.toDataURL("image/png")}" width="40" height="40" alt="QR">`; } } catch (e) { console.warn("QR:", e); }
    await new Promise(r => setTimeout(r, 150));
    const links = [[sh.querySelector(".ps-hdr .u"), location.href.split("#")[0]], [sh.querySelector(".ps-doi"), "https://doi.org/10.1016/j.uclim.2026.103156"], [qrBox.firstChild && qrBox, location.href]]
      .filter(x => x[0]).map(([el, url]) => { const r = el.getBoundingClientRect(); return { x: r.left, y: r.top, w: r.width, h: r.height, url }; });
    const cssText = [...document.styleSheets].map(ss => { try { return [...ss.cssRules].map(r => r.cssText).join(" "); } catch (e) { return ""; } }).join(" ");
    const cv = await window.html2canvas(sh, { scale: 3, backgroundColor: "#ffffff", useCORS: true, logging: false, width: SW, height: SH, windowWidth: SW, windowHeight: SH,
      onclone: d => { const st = d.createElement("style"); st.textContent = cssText; d.head.appendChild(st); } });
    sh.remove();
    const name = "riesgo-calor-sevilla" + (p ? "_" + p.cusec : "") + "_" + state.layer;
    const prev = document.createElement("canvas"); prev.width = 1000; prev.height = Math.round(1000 * SH / SW); prev.getContext("2d").drawImage(cv, 0, 0, prev.width, prev.height);
    pvModal(`<img class="pvimg" src="${prev.toDataURL("image/jpeg", .9)}" alt=""><div class="modal-act"><button class="btn" id="pv-pdf">${t("pv_pdf")}</button> <button class="btn ghost" id="pv-png">${t("pv_png")}</button> <button class="btn ghost" id="pv-x">${t("disc_close")}</button></div>`);
    $("#pv-x").onclick = pvClose;
    $("#pv-png").onclick = () => cv.toBlob(b => { const a = document.createElement("a"); a.href = URL.createObjectURL(b); a.download = name + ".png"; a.click(); setTimeout(() => URL.revokeObjectURL(a.href), 4000); }, "image/png");
    state.saving = false;
    $("#pv-pdf").onclick = () => { const pdf = new window.jspdf.jsPDF({ orientation: "landscape", unit: "mm", format: "a4" }); pdf.addImage(cv.toDataURL("image/jpeg", .93), "JPEG", 0, 0, 297, 210); const f = 297 / SW; links.forEach(l => pdf.link(l.x * f, l.y * f, l.w * f, l.h * f, { url: l.url })); pdf.save(name + ".pdf"); };
  } catch (e) {
    console.error(e); state.saving = false; const s = $("#printsheet"); if (s) s.remove(); const b = $("#map"); if (b) { b.style.cssText = ""; state.map.resize(); }
    pvModal(`<p>${t("pv_err")}</p><div class="modal-act"><button class="btn ghost" id="pv-x">${t("disc_close")}</button></div>`); $("#pv-x").onclick = pvClose;
  }
}

/* ---------- búsqueda ---------- */
function initSearch() {
  const inp = $("#search"), ul = $("#results");
  inp.addEventListener("input", () => {
    const q = norm(inp.value.trim()); if (q.length < 2) { ul.innerHTML = ""; return; }
    const hits = state.data.features.map(f => f.properties).filter(p => norm(p.barrio).includes(q) || p.cusec.startsWith(q) || norm(p.distrito).includes(q)).slice(0, 8);
    ul.innerHTML = hits.map(p => `<li data-id="${p.cusec}"><strong>${p.barrio}</strong> <span style="color:var(--muted)">· ${p.cusec}</span></li>`).join("");
    ul.querySelectorAll("li").forEach(li => li.onclick = () => { ul.innerHTML = ""; inp.value = ""; select(li.dataset.id, true); });
  });
}

/* ---------- arranque ---------- */
async function start() {
  const h = readHash();
  state.lang = h.lang === "en" || h.lang === "es" ? h.lang : (store.get("lang") || ((navigator.language || "es").startsWith("en") ? "en" : "es"));
  if (h.l && LAYER(h.l)) state.layer = h.l;
  try {
    [state.data, state.stats] = await Promise.all([fetch("data/secciones.geojson").then(r => r.json()), fetch("data/estadisticas.json").then(r => r.json())]);
  } catch (e) { console.error(e); document.body.insertAdjacentHTML("afterbegin", `<p class="loaderr">${t("load_err")}</p>`); return; }
  $("#lang-es").onclick = () => setLang("es"); $("#lang-en").onclick = () => setLang("en");
  $("#op-sat").oninput = e => state.mapReady && state.map.setPaintProperty("pnoa", "raster-opacity", e.target.value / 100);
  $("#op-layer").oninput = () => applyLayerStyle();
  $("#bld-toggle").onchange = e => state.mapReady && state.map.getLayer("bld-fill") && state.map.setLayoutProperty("bld-fill", "visibility", e.target.checked ? "visible" : "none");
  $("#op-bld").oninput = e => state.mapReady && state.map.getLayer("bld-fill") && state.map.setPaintProperty("bld-fill", "fill-opacity", e.target.value / 100);
  $("#burger").onclick = e => { e.stopPropagation(); const o = $("#menu").classList.toggle("open"); $("#burger").setAttribute("aria-expanded", o); };
  document.addEventListener("click", e => { if (!e.target.closest("#menu")) $("#menu").classList.remove("open"); });
  $("#legend").onclick = () => $("#legend").classList.toggle("open");
  $("#btn-layers").onclick = e => { e.stopPropagation(); $("#layerpanel").hidden = !$("#layerpanel").hidden; };
  document.addEventListener("click", e => { if (!e.target.closest("#mapui")) { $("#layerpanel").hidden = true; $("#results").innerHTML = ""; } });
  document.addEventListener("keydown", e => { if (e.key === "Escape") { if (!$("#pv").hidden) { pvClose(); return; } if (!$("#disc").hidden) { hideDisc(); return; } $("#layerpanel").hidden = true; hidePop(); closeFicha(); } });
  $("#pv").onclick = e => { if (e.target.id === "pv") pvClose(); };
  $("#disc-x").onclick = hideDisc; $("#disc-ok").onclick = hideDisc; $("#disc").onclick = e => { if (e.target.id === "disc") hideDisc(); };
  initSearch(); renderStatic();
  if (h.s) { const f = featureById(h.s); if (f) { state.sel = f.properties; } }
  go(h.s ? "visor" : h.page);
  if (h.s && state.sel) { let tries = 0; const iv = setInterval(() => { if (++tries > 200 || !state.map) clearInterval(iv); if (state.mapReady) { clearInterval(iv); const b = bboxOf(featureById(state.sel.cusec).geometry); state.map.fitBounds([[b[0], b[1]], [b[2], b[3]]], { padding: 80, maxZoom: 16, duration: 0 }); renderFicha(); } }, 150); }
  window.addEventListener("hashchange", () => { const x = readHash(); if (x.page !== state.page) go(x.page); });
}
start();
})();
