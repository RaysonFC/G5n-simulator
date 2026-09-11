/**
 * app.js
 * ZOOM G5n Patch Lab — Layout estilo hardware
 *
 * • Overview Display + 4 Unit Displays + Footswitches + Pedal
 * • Até 9 efeitos (G5n V2.0)
 * • Persistência localStorage
 * • Busca de efeitos
 */

const MAX_SLOTS = 9;
const UNITS_PER_PAGE = 4;
const STORAGE_KEY = 'g5n-patch-lab-v2';

let chain          = [];
let patches        = [];
let currentPatchId = 1;
let editingSlotIdx = null;
let filterCat      = 'ALL';
let searchQuery    = '';
let unitPage       = 0; // página das 4 units visíveis

/* ─── UTIL ───────────────────────────────────────────────────── */
function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

function showToast(msg, color) {
  color = color || 'var(--green)';
  let t = document.getElementById('toast');
  if (!t) {
    t = document.createElement('div');
    t.id = 'toast';
    t.className = 'toast';
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.style.borderColor = color;
  t.style.color = color;
  t.style.boxShadow = '0 0 20px ' + color + '44';
  t.classList.add('show');
  clearTimeout(t._timer);
  t._timer = setTimeout(function(){ t.classList.remove('show'); }, 2000);
}

/* ─── STORAGE ────────────────────────────────────────────────── */
function saveToStorage() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      patches: patches,
      currentPatchId: currentPatchId
    }));
  } catch (e) {
    console.warn('localStorage save failed', e);
  }
}

function loadFromStorage() {
  try {
    var raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch (e) {
    return null;
  }
}

/* ─── INIT ───────────────────────────────────────────────────── */
function init() {
  var stored = loadFromStorage();
  if (stored && stored.patches && stored.patches.length > 0) {
    patches = stored.patches;
    currentPatchId = stored.currentPatchId || patches[0].id;
  } else {
    patches = DEFAULT_PATCHES.map(function(p){ return deepClone(p); });
    currentPatchId = patches[0].id;
  }
  loadPatch(currentPatchId);
}

/* ─── LOAD PATCH ─────────────────────────────────────────────── */
function loadPatch(id) {
  var p = patches.find(function(x){ return x.id === id; });
  if (!p) return;

  currentPatchId = id;
  document.getElementById('currentPatchNum').textContent = String(id).padStart(3, '0');
  document.getElementById('patchNameInput').value = p.name;

  chain = p.chain.map(function(fx, i){
    return Object.assign({}, deepClone(fx), { on: true, cat: p.cats[i] || 'DRIVE' });
  });

  unitPage = 0;
  renderAll();
  saveToStorage();
}

function renderAll() {
  renderOverview();
  renderUnits();
  renderFootswitches();
  renderPatchList();
  updateSlotCount();
}

function updateSlotCount() {
  var el = document.getElementById('slotCount');
  el.textContent = chain.length + '/' + MAX_SLOTS;
  if (chain.length >= MAX_SLOTS) el.style.color = 'var(--red)';
  else if (chain.length >= 7) el.style.color = 'var(--yellow)';
  else el.style.color = 'var(--accent2)';
}

/* ─── OVERVIEW ───────────────────────────────────────────────── */
function renderOverview() {
  var el = document.getElementById('overviewChain');
  var html = '';

  html += '<div class="ov-node io">GUITAR</div><span class="ov-arrow">→</span>';

  chain.forEach(function(fx, i){
    var pageStart = unitPage * UNITS_PER_PAGE;
    var pageEnd = pageStart + UNITS_PER_PAGE;
    var isActive = i >= pageStart && i < pageEnd;
    var cls = 'ov-node' + (isActive ? ' active' : '') + (fx.on ? '' : ' off');
    html += '<div class="' + cls + '" onclick="focusUnit(' + i + ')" title="' + fx.name + '">' +
            fx.name + '</div>';
    if (i < chain.length - 1) html += '<span class="ov-arrow">→</span>';
  });

  if (chain.length > 0) html += '<span class="ov-arrow">→</span>';
  html += '<div class="ov-node io out">AMP</div>';

  if (chain.length < MAX_SLOTS) {
    html += '<button class="ov-add" onclick="addSlot()" title="Adicionar efeito">+</button>';
  }

  el.innerHTML = html;

  // page label
  var totalPages = Math.max(1, Math.ceil(chain.length / UNITS_PER_PAGE));
  document.getElementById('unitPageLabel').textContent = (unitPage + 1) + '/' + totalPages;
  document.getElementById('unitPagePrev').disabled = unitPage <= 0;
  document.getElementById('unitPageNext').disabled = unitPage >= totalPages - 1;
}

function shiftUnitPage(dir) {
  var totalPages = Math.max(1, Math.ceil(chain.length / UNITS_PER_PAGE));
  unitPage = Math.max(0, Math.min(totalPages - 1, unitPage + dir));
  renderOverview();
  renderUnits();
  renderFootswitches();
}

function focusUnit(idx) {
  unitPage = Math.floor(idx / UNITS_PER_PAGE);
  renderOverview();
  renderUnits();
  renderFootswitches();
}

/* ─── UNITS (4 displays) ─────────────────────────────────────── */
function renderUnits() {
  var el = document.getElementById('unitsGrid');
  var start = unitPage * UNITS_PER_PAGE;
  var html = '';

  for (var u = 0; u < UNITS_PER_PAGE; u++) {
    var i = start + u;
    if (i < chain.length) {
      html += makeUnitCard(chain[i], i);
    } else if (i === chain.length && chain.length < MAX_SLOTS) {
      html += '<div class="unit-card empty" onclick="addSlot()">' +
              '<div class="unit-empty-label"><span class="plus">+</span>ADD EFEITO</div></div>';
    } else {
      html += '<div class="unit-card empty" style="opacity:0.25;cursor:default">' +
              '<div class="unit-empty-label">—</div></div>';
    }
  }
  el.innerHTML = html;
}

function makeUnitCard(fx, i) {
  var onCls = fx.on ? ' on' : ' off';
  var html = '<div class="unit-card' + onCls + '">';

  // header
  html += '<div class="unit-header">' +
    '<span class="unit-cat cat-' + (CAT_COLORS[fx.cat] || 'drive') + '">' + (fx.cat || '') + '</span>' +
    '<button class="power-led ' + (fx.on ? 'on' : '') + '" title="Ligar/Desligar" onclick="toggleFx(' + i + ',event)"></button>' +
    '</div>';

  // name
  html += '<div class="unit-name">' + fx.name + '</div>';

  // knobs (max 4)
  html += '<div class="unit-knobs">';
  fx.params.slice(0, 4).forEach(function(p, pi){
    var indicators = '';
    if (p.pedal) indicators += '<span class="param-flag pedal" title="Pedal">P</span>';
    if (p.tempo) indicators += '<span class="param-flag tempo" title="Tempo">♩</span>';
    var label = '<div class="knob-label" title="' + p.n + '">' + p.n + '</div>';

    if (p.options) {
      var opt = p.options[p.v] || p.options[0];
      html += '<div class="knob-row">' + label +
        '<div class="knob-select" id="ks-' + i + '-' + pi + '" onclick="cycleOption(' + i + ',' + pi + ')">' +
        opt + '</div>' + indicators + '</div>';
    } else {
      var min = (p.min !== undefined ? p.min : 0);
      var range = p.max - min;
      var pct = Math.round(((p.v - min) / range) * 100);
      html += '<div class="knob-row">' + label +
        '<div class="knob-track" onmousedown="startDrag(event,' + i + ',' + pi + ')" ' +
        'ontouchstart="startDragTouch(event,' + i + ',' + pi + ')">' +
        '<div class="knob-fill" id="kf-' + i + '-' + pi + '" style="width:' + pct + '%"></div></div>' +
        '<div class="knob-val" id="kv-' + i + '-' + pi + '">' + p.v + '</div>' +
        indicators + '</div>';
    }
  });
  if (fx.params.length > 4) {
    html += '<div class="params-more">+' + (fx.params.length - 4) + ' params</div>';
  }
  html += '</div>';

  // actions
  html += '<div class="unit-actions">' +
    '<button class="unit-action-btn" onclick="openPickerForSlot(' + i + ')">TROCAR</button>' +
    '<button class="unit-action-btn rm" onclick="removeSlot(' + i + ')">✕</button>' +
    '</div>';

  html += '</div>';
  return html;
}

/* ─── FOOTSWITCHES ───────────────────────────────────────────── */
function renderFootswitches() {
  var el = document.getElementById('fsRow');
  var start = unitPage * UNITS_PER_PAGE;
  var html = '';

  for (var u = 0; u < UNITS_PER_PAGE; u++) {
    var i = start + u;
    if (i < chain.length) {
      var fx = chain[i];
      var cls = 'fs-btn' + (fx.on ? ' active' : '');
      html += '<button class="' + cls + '" onclick="toggleFx(' + i + ',event)">' +
              'FS' + (u + 1) +
              '<span class="fs-name">' + fx.name + '</span></button>';
    } else {
      html += '<button class="fs-btn empty">FS' + (u + 1) + '</button>';
    }
  }
  el.innerHTML = html;
}

/* ─── PARAM CONTROLS ─────────────────────────────────────────── */
function cycleOption(idx, pidx) {
  var p = chain[idx].params[pidx];
  if (!p.options) return;
  p.v = (p.v + 1) % p.options.length;
  var el = document.getElementById('ks-' + idx + '-' + pidx);
  if (el) el.textContent = p.options[p.v];
}

var dragging = null;

function startDrag(e, idx, pidx) {
  dragging = { idx: idx, pidx: pidx, startX: e.clientX, startV: chain[idx].params[pidx].v };
  e.preventDefault();
  document.addEventListener('mousemove', onDrag);
  document.addEventListener('mouseup', stopDrag);
}

function startDragTouch(e, idx, pidx) {
  var touch = e.touches[0];
  dragging = { idx: idx, pidx: pidx, startX: touch.clientX, startV: chain[idx].params[pidx].v };
  e.preventDefault();
  document.addEventListener('touchmove', onDragTouch, { passive: false });
  document.addEventListener('touchend', stopDrag);
}

function onDrag(e) { if (dragging) updateDrag(e.clientX); }
function onDragTouch(e) {
  if (!dragging) return;
  e.preventDefault();
  updateDrag(e.touches[0].clientX);
}

function updateDrag(clientX) {
  var idx = dragging.idx, pidx = dragging.pidx;
  var p = chain[idx].params[pidx];
  var min = (p.min !== undefined ? p.min : 0);
  var range = p.max - min;
  var delta = (clientX - dragging.startX) * (range / 120);
  var newVal = Math.round(Math.max(min, Math.min(p.max, dragging.startV + delta)));
  p.v = newVal;
  var pct = Math.round(((newVal - min) / range) * 100);
  var fill = document.getElementById('kf-' + idx + '-' + pidx);
  var val = document.getElementById('kv-' + idx + '-' + pidx);
  if (fill) fill.style.width = pct + '%';
  if (val) val.textContent = newVal;
}

function stopDrag() {
  dragging = null;
  document.removeEventListener('mousemove', onDrag);
  document.removeEventListener('mouseup', stopDrag);
  document.removeEventListener('touchmove', onDragTouch);
  document.removeEventListener('touchend', stopDrag);
}

/* ─── CHAIN CONTROLS ─────────────────────────────────────────── */
function toggleFx(i, e) {
  if (e) e.stopPropagation();
  if (i < 0 || i >= chain.length) return;
  chain[i].on = !chain[i].on;
  renderAll();
}

function addSlot() {
  if (chain.length >= MAX_SLOTS) {
    showToast('MÁXIMO DE ' + MAX_SLOTS + ' EFEITOS (G5n V2.0)', 'var(--red)');
    return;
  }
  editingSlotIdx = null;
  openModal();
}

function removeSlot(i) {
  chain.splice(i, 1);
  var totalPages = Math.max(1, Math.ceil(chain.length / UNITS_PER_PAGE));
  if (unitPage >= totalPages) unitPage = Math.max(0, totalPages - 1);
  renderAll();
}

function clearChain() {
  if (chain.length === 0) return;
  chain = [];
  unitPage = 0;
  renderAll();
  showToast('CADEIA LIMPA');
}

function openPickerForSlot(i) {
  editingSlotIdx = i;
  openModal();
}

/* ─── MODAL ──────────────────────────────────────────────────── */
function openModal() {
  filterCat = 'ALL';
  searchQuery = '';
  var searchEl = document.getElementById('fxSearch');
  if (searchEl) searchEl.value = '';
  document.getElementById('modalOverlay').classList.remove('hidden');
  setTimeout(function(){ if (searchEl) searchEl.focus(); }, 50);
  renderModalCats();
  renderFxGrid();
}

function closeModal() {
  document.getElementById('modalOverlay').classList.add('hidden');
  editingSlotIdx = null;
  searchQuery = '';
}

function onFxSearch(value) {
  searchQuery = (value || '').trim().toLowerCase();
  renderFxGrid();
}

function renderModalCats() {
  var cats = ['ALL'].concat(Object.keys(FX_DB));
  var el = document.getElementById('modalCats');
  el.innerHTML = cats.map(function(c){
    var count = c === 'ALL'
      ? Object.values(FX_DB).reduce(function(s,a){ return s + a.length; }, 0)
      : FX_DB[c].length;
    return '<button class="cat-filter-btn ' + (filterCat === c ? 'active' : '') + '" onclick="setCat(\'' + c + '\')">' +
           c + ' <span class="cat-count">' + count + '</span></button>';
  }).join('');
}

function setCat(cat) {
  filterCat = cat;
  renderModalCats();
  renderFxGrid();
}

function renderFxGrid() {
  var el = document.getElementById('fxGrid');
  var cats = filterCat === 'ALL' ? Object.keys(FX_DB) : [filterCat];
  var entries = [];
  cats.forEach(function(cat){
    FX_DB[cat].forEach(function(fx){ entries.push(Object.assign({}, fx, { cat: cat })); });
  });

  if (searchQuery) {
    entries = entries.filter(function(fx){
      return fx.name.toLowerCase().indexOf(searchQuery) !== -1 ||
             (fx.desc && fx.desc.toLowerCase().indexOf(searchQuery) !== -1);
    });
  }

  if (entries.length === 0) {
    el.innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:40px 20px;color:var(--muted);font-family:var(--mono);font-size:13px;">NENHUM EFEITO ENCONTRADO</div>';
    return;
  }

  el.innerHTML = entries.map(function(fx){
    var safeName = fx.name.replace(/'/g, "\\'");
    var paramNames = fx.params.slice(0, 4).map(function(p){ return p.n; }).join(', ');
    var flags = '';
    if (fx.params.some(function(p){ return p.pedal; })) flags += '<span class="param-flag pedal">P</span>';
    if (fx.params.some(function(p){ return p.tempo; })) flags += '<span class="param-flag tempo">♩</span>';
    return '<div class="fx-option" onclick="selectFx(\'' + fx.cat + '\',\'' + safeName + '\')">' +
           '<div class="fx-option-header">' +
           '<span class="unit-cat cat-' + (CAT_COLORS[fx.cat] || 'drive') + '">' + fx.cat + '</span>' +
           flags + '</div>' +
           '<div class="fx-option-name">' + fx.name + '</div>' +
           '<div class="fx-option-desc">' + fx.desc + '</div>' +
           '<div class="fx-option-params">' + paramNames + '</div></div>';
  }).join('');
}

function selectFx(cat, name) {
  var fxBase = FX_DB[cat].find(function(f){ return f.name === name; });
  if (!fxBase) return;
  var fx = Object.assign({}, deepClone(fxBase), { on: true, cat: cat });

  if (editingSlotIdx !== null) {
    chain[editingSlotIdx] = fx;
    showToast('SLOT ' + (editingSlotIdx + 1) + ' ATUALIZADO');
  } else {
    chain.push(fx);
    unitPage = Math.floor((chain.length - 1) / UNITS_PER_PAGE);
    showToast(fx.name + ' ADICIONADO');
  }

  closeModal();
  renderAll();
}

/* ─── PATCH BANK ─────────────────────────────────────────────── */
function savePatch() {
  var name = (document.getElementById('patchNameInput').value.trim() || 'PATCH')
    .toUpperCase().slice(0, 16);

  var existing = patches.find(function(x){ return x.id === currentPatchId; });
  var data = {
    id: currentPatchId,
    name: name,
    chain: chain.map(function(fx){
      var c = deepClone(fx);
      delete c.on;
      delete c.cat;
      return c;
    }),
    cats: chain.map(function(fx){ return fx.cat; })
  };

  if (existing) Object.assign(existing, data);
  else patches.push(data);

  saveToStorage();
  renderPatchList();
  showToast('✓ PATCH SALVO');
}

function deleteCurrentPatch() {
  patches = patches.filter(function(x){ return x.id !== currentPatchId; });
  if (patches.length > 0) {
    loadPatch(patches[0].id);
  } else {
    chain = [];
    currentPatchId = 1;
    document.getElementById('currentPatchNum').textContent = '001';
    document.getElementById('patchNameInput').value = '';
    unitPage = 0;
    renderAll();
  }
  saveToStorage();
  showToast('PATCH EXCLUÍDO', 'var(--red)');
}

function newPatch() {
  var maxId = patches.reduce(function(m, p){ return Math.max(m, p.id); }, 0);
  currentPatchId = maxId + 1;
  document.getElementById('currentPatchNum').textContent = String(currentPatchId).padStart(3, '0');
  document.getElementById('patchNameInput').value = '';
  chain = [];
  unitPage = 0;
  renderAll();
}

function renderPatchList() {
  var el = document.getElementById('patchList');
  var html = patches.map(function(p){
    var active = p.id === currentPatchId ? ' active' : '';
    return '<div class="patch-item' + active + '" onclick="loadPatch(' + p.id + ')">' +
           '<div class="patch-num-small">' + String(p.id).padStart(3,'0') + '</div>' +
           '<div class="patch-item-info">' +
           '<div class="patch-item-name">' + p.name + '</div>' +
           '<div class="patch-item-fx">' + (p.cats || []).slice(0,3).join(' · ') + '</div>' +
           '</div></div>';
  }).join('');

  html += '<div class="patch-item new-patch" onclick="newPatch()">' +
          '<div class="patch-num-small">+</div>' +
          '<div class="patch-item-info"><div class="patch-item-name">NOVO PATCH</div></div></div>';

  el.innerHTML = html;
}

/* ─── BOOT ───────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', function(){
  document.getElementById('modalOverlay').addEventListener('click', function(e){
    if (e.target === this) closeModal();
  });
  document.addEventListener('keydown', function(e){
    if (e.key === 'Escape') closeModal();
  });
  init();
});
