/**
 * app.js
 * ZOOM G5n Patch Lab — Lógica principal
 *
 * Suporte completo a:
 *  • Parâmetros numéricos (slider drag)
 *  • Parâmetros de seleção (options[]) com clique para ciclar
 *  • Indicadores de pedal (P) e tempo (♩)
 *  • Parâmetros com valor mínimo negativo (min < 0)
 */

/* ════════════════════════════════════════════════
   ESTADO GLOBAL
   ════════════════════════════════════════════════ */

let chain          = [];
let patches        = [];
let currentPatchId = 1;
let editingSlotIdx = null;
let filterCat      = 'ALL';

/* ════════════════════════════════════════════════
   UTILITÁRIOS
   ════════════════════════════════════════════════ */

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

/* ════════════════════════════════════════════════
   INICIALIZAÇÃO
   ════════════════════════════════════════════════ */

function init() {
  patches = DEFAULT_PATCHES.map(function(p){ return deepClone(p); });
  loadPatch(patches[0].id);
}

/* ════════════════════════════════════════════════
   CARREGAR PATCH
   ════════════════════════════════════════════════ */

function loadPatch(id) {
  var p = patches.find(function(x){ return x.id === id; });
  if (!p) return;

  currentPatchId = id;
  document.getElementById('currentPatchNum').textContent = String(id).padStart(3, '0');
  document.getElementById('patchNameInput').value = p.name;

  chain = p.chain.map(function(fx, i){
    return Object.assign({}, deepClone(fx), { on: true, cat: p.cats[i] || 'DRIVE' });
  });

  renderChain();
  renderPatchList();
}

/* ════════════════════════════════════════════════
   RENDERIZAR CADEIA
   ════════════════════════════════════════════════ */

function renderChain() {
  var el = document.getElementById('signalChain');
  el.innerHTML = '';

  document.getElementById('slotCount').textContent = chain.length + '/5';

  el.appendChild(makeNode('input-node', '🎸', 'GUITAR\nSGT-207'));
  el.appendChild(makeConnector('connector-start'));

  chain.forEach(function(fx, i){
    var slot = document.createElement('div');
    slot.className = 'chain-slot';
    slot.appendChild(makeFxBlock(fx, i));
    if (i < chain.length - 1) {
      slot.appendChild(makeConnector('connector' + (fx.on ? ' active' : '')));
    }
    el.appendChild(slot);
  });

  if (chain.length < 5) {
    el.appendChild(makeConnector('connector' + (chain.length > 0 ? ' active' : '')));
    var addBtn = document.createElement('button');
    addBtn.className = 'add-btn';
    addBtn.innerHTML = '<span class="plus">+</span>ADD EFEITO';
    addBtn.onclick = addSlot;
    el.appendChild(addBtn);
  }

  el.appendChild(makeConnector('connector-end'));
  el.appendChild(makeNode('output-node', '🔊', 'AMP /\nOUTPUT'));
}

function makeNode(cls, emoji, label) {
  var wrap = document.createElement('div');
  wrap.className = 'node-wrap';
  var node = document.createElement('div');
  node.className = cls;
  node.textContent = emoji;
  var lbl = document.createElement('div');
  lbl.className = 'node-label';
  lbl.textContent = label;
  wrap.appendChild(node);
  wrap.appendChild(lbl);
  return wrap;
}

function makeConnector(classes) {
  var div = document.createElement('div');
  div.className = classes;
  return div;
}

function makeFxBlock(fx, i) {
  var block = document.createElement('div');
  block.className = 'fx-block' + (fx.on ? ' on' : '');

  // ── header
  var header = document.createElement('div');
  header.className = 'fx-header';
  header.innerHTML =
    '<span class="fx-category cat-' + (CAT_COLORS[fx.cat] || 'drive') + '">' + (fx.cat || '') + '</span>' +
    '<button class="power-led ' + (fx.on ? 'on' : '') + '" title="Ligar/Desligar" onclick="toggleFx(' + i + ',event)"></button>';
  block.appendChild(header);

  // ── nome
  var nameEl = document.createElement('div');
  nameEl.className = 'fx-name';
  nameEl.textContent = fx.name;
  block.appendChild(nameEl);

  // ── parâmetros (máx 4 visíveis)
  var knobsWrap = document.createElement('div');
  knobsWrap.className = 'fx-knobs';

  fx.params.slice(0, 4).forEach(function(p, pi){
    var row = document.createElement('div');
    row.className = 'knob-row';

    // Indicadores pedal / tempo
    var indicators = '';
    if (p.pedal) indicators += '<span class="param-flag pedal" title="Controlável pelo pedal">P</span>';
    if (p.tempo) indicators += '<span class="param-flag tempo" title="Sincronizável com BPM">♩</span>';

    var labelHtml = '<div class="knob-label" title="' + p.n + '">' + p.n + '</div>';

    if (p.options) {
      // Parâmetro de seleção – clique para ciclar
      var opt = p.options[p.v] || p.options[0];
      row.innerHTML =
        labelHtml +
        '<div class="knob-select" id="ks-' + i + '-' + pi + '" ' +
        'onclick="cycleOption(' + i + ',' + pi + ')" title="Clique para mudar">' +
        opt + '</div>' +
        indicators;
    } else {
      // Parâmetro numérico – drag
      var min  = (p.min !== undefined ? p.min : 0);
      var range = p.max - min;
      var pct  = Math.round(((p.v - min) / range) * 100);
      row.innerHTML =
        labelHtml +
        '<div class="knob-track" data-idx="' + i + '" data-pidx="' + pi + '" ' +
        'onmousedown="startDrag(event,' + i + ',' + pi + ')" ' +
        'ontouchstart="startDragTouch(event,' + i + ',' + pi + ')" ' +
        'title="Arraste para ajustar">' +
        '<div class="knob-fill" id="kf-' + i + '-' + pi + '" style="width:' + pct + '%"></div>' +
        '</div>' +
        '<div class="knob-val" id="kv-' + i + '-' + pi + '">' + p.v + '</div>' +
        indicators;
    }
    knobsWrap.appendChild(row);
  });

  // Se há mais de 4 parâmetros, mostrar indicador
  if (fx.params.length > 4) {
    var moreEl = document.createElement('div');
    moreEl.className = 'params-more';
    moreEl.textContent = '+' + (fx.params.length - 4) + ' params';
    knobsWrap.appendChild(moreEl);
  }

  block.appendChild(knobsWrap);

  // ── botões de ação
  var actions = document.createElement('div');
  actions.className = 'fx-actions';
  actions.innerHTML =
    '<button class="fx-action-btn" onclick="openPickerForSlot(' + i + ')">TROCAR</button>' +
    '<button class="fx-action-btn rm" onclick="removeSlot(' + i + ')">✕</button>';
  block.appendChild(actions);

  return block;
}

/* ════════════════════════════════════════════════
   CICLAR OPÇÃO (parâmetros enum)
   ════════════════════════════════════════════════ */

function cycleOption(idx, pidx) {
  var p = chain[idx].params[pidx];
  if (!p.options) return;
  p.v = (p.v + 1) % p.options.length;
  var el = document.getElementById('ks-' + idx + '-' + pidx);
  if (el) el.textContent = p.options[p.v];
}

/* ════════════════════════════════════════════════
   DRAG NOS PARÂMETROS NUMÉRICOS
   ════════════════════════════════════════════════ */

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

function onDrag(e) {
  if (!dragging) return;
  updateDrag(e.clientX);
}

function onDragTouch(e) {
  if (!dragging) return;
  e.preventDefault();
  updateDrag(e.touches[0].clientX);
}

function updateDrag(clientX) {
  var idx  = dragging.idx;
  var pidx = dragging.pidx;
  var p    = chain[idx].params[pidx];
  var min  = (p.min !== undefined ? p.min : 0);
  var range = p.max - min;
  var delta = (clientX - dragging.startX) * (range / 120);
  var newVal = Math.round(Math.max(min, Math.min(p.max, dragging.startV + delta)));
  p.v = newVal;
  var pct = Math.round(((newVal - min) / range) * 100);
  var fill = document.getElementById('kf-' + idx + '-' + pidx);
  var val  = document.getElementById('kv-' + idx + '-' + pidx);
  if (fill) fill.style.width = pct + '%';
  if (val)  val.textContent  = newVal;
}

function stopDrag() {
  dragging = null;
  document.removeEventListener('mousemove', onDrag);
  document.removeEventListener('mouseup', stopDrag);
  document.removeEventListener('touchmove', onDragTouch);
  document.removeEventListener('touchend', stopDrag);
}

/* ════════════════════════════════════════════════
   CONTROLES DA CADEIA
   ════════════════════════════════════════════════ */

function toggleFx(i, e) {
  e.stopPropagation();
  chain[i].on = !chain[i].on;
  renderChain();
}

function addSlot() {
  if (chain.length >= 5) {
    showToast('MÁXIMO DE 5 EFEITOS', 'var(--red)');
    return;
  }
  editingSlotIdx = null;
  openModal();
}

function removeSlot(i) {
  chain.splice(i, 1);
  renderChain();
}

function clearChain() {
  if (chain.length === 0) return;
  chain = [];
  renderChain();
  showToast('CADEIA LIMPA');
}

function openPickerForSlot(i) {
  editingSlotIdx = i;
  openModal();
}

/* ════════════════════════════════════════════════
   MODAL – SELETOR DE EFEITOS
   ════════════════════════════════════════════════ */

function openModal() {
  filterCat = 'ALL';
  document.getElementById('modalOverlay').classList.remove('hidden');
  renderModalCats();
  renderFxGrid();
}

function closeModal() {
  document.getElementById('modalOverlay').classList.add('hidden');
  editingSlotIdx = null;
}

function renderModalCats() {
  var cats = ['ALL'].concat(Object.keys(FX_DB));
  var el   = document.getElementById('modalCats');
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
  var el   = document.getElementById('fxGrid');
  var cats = filterCat === 'ALL' ? Object.keys(FX_DB) : [filterCat];
  var entries = [];
  cats.forEach(function(cat){
    FX_DB[cat].forEach(function(fx){ entries.push(Object.assign({}, fx, { cat: cat })); });
  });

  el.innerHTML = entries.map(function(fx){
    var safeName = fx.name.replace(/'/g, "\\'");
    var paramNames = fx.params.slice(0, 4).map(function(p){ return p.n; }).join(', ');
    var flags = '';
    if (fx.params.some(function(p){ return p.pedal; })) flags += '<span class="param-flag pedal">P</span>';
    if (fx.params.some(function(p){ return p.tempo; })) flags += '<span class="param-flag tempo">♩</span>';
    return '<div class="fx-option" onclick="selectFx(\'' + fx.cat + '\',\'' + safeName + '\')">' +
           '<div class="fx-option-header">' +
           '<span class="fx-category cat-' + (CAT_COLORS[fx.cat] || 'drive') + '">' + fx.cat + '</span>' +
           flags +
           '</div>' +
           '<div class="fx-option-name">' + fx.name + '</div>' +
           '<div class="fx-option-desc">' + fx.desc + '</div>' +
           '<div class="fx-option-params">' + paramNames + '</div>' +
           '</div>';
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
    showToast(fx.name + ' ADICIONADO');
  }

  closeModal();
  renderChain();
}

/* ════════════════════════════════════════════════
   BANCO DE PATCHES
   ════════════════════════════════════════════════ */

function savePatch() {
  var name = (document.getElementById('patchNameInput').value.trim() || 'PATCH')
    .toUpperCase().slice(0, 16);

  var existing = patches.find(function(x){ return x.id === currentPatchId; });

  var data = {
    id:    currentPatchId,
    name:  name,
    chain: chain.map(function(fx){
      var c = deepClone(fx);
      delete c.on;
      delete c.cat;
      return c;
    }),
    cats: chain.map(function(fx){ return fx.cat; }),
  };

  if (existing) {
    Object.assign(existing, data);
  } else {
    patches.push(data);
  }

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
    renderChain();
    renderPatchList();
  }
  showToast('PATCH EXCLUÍDO', 'var(--red)');
}

function newPatch() {
  var maxId = patches.reduce(function(m, p){ return Math.max(m, p.id); }, 0);
  currentPatchId = maxId + 1;
  document.getElementById('currentPatchNum').textContent = String(currentPatchId).padStart(3, '0');
  document.getElementById('patchNameInput').value = '';
  chain = [];
  renderChain();
  renderPatchList();
}

/* ════════════════════════════════════════════════
   LISTA DE PATCHES
   ════════════════════════════════════════════════ */

function renderPatchList() {
  var el = document.getElementById('patchList');

  var html = patches.map(function(p){
    var active = p.id === currentPatchId ? ' active' : '';
    return '<div class="patch-item' + active + '" onclick="loadPatch(' + p.id + ')">' +
           '<div class="patch-num-small">' + String(p.id).padStart(3,'0') + '</div>' +
           '<div class="patch-item-info">' +
           '<div class="patch-item-name">' + p.name + '</div>' +
           '<div class="patch-item-fx">' + (p.cats || []).slice(0,3).join(' · ') + '</div>' +
           '</div>' +
           '</div>';
  }).join('');

  html += '<div class="patch-item new-patch" onclick="newPatch()">' +
          '<div class="patch-num-small">+</div>' +
          '<div class="patch-item-info"><div class="patch-item-name">NOVO PATCH</div></div>' +
          '</div>';

  el.innerHTML = html;
}

/* ════════════════════════════════════════════════
   INICIALIZAR AO CARREGAR A PÁGINA
   ════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', function(){
  document.getElementById('modalOverlay').addEventListener('click', function(e){
    if (e.target === this) closeModal();
  });

  document.addEventListener('keydown', function(e){
    if (e.key === 'Escape') closeModal();
  });

  init();
});
