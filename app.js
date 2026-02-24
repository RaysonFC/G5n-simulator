/**
 * app.js
 * ZOOM G5n Patch Lab — Lógica principal da aplicação
 *
 * Responsabilidades:
 *  • Estado global (chain, patches, patchAtivo)
 *  • Renderização da cadeia de sinal
 *  • Drag nos parâmetros (knobs)
 *  • Modal de seleção de efeitos
 *  • Banco de patches (carregar, salvar, excluir, novo)
 *  • Toast de feedback
 */

/* ================================================================
   ESTADO GLOBAL
   ================================================================ */

let chain          = [];   // slots ativos: [ { ...fx, on, cat }, ... ]
let patches        = [];   // banco de patches em memória
let currentPatchId = 1;    // id do patch aberto
let editingSlotIdx = null; // null = adicionar, number = trocar slot
let filterCat      = 'ALL';

/* ================================================================
   UTILITÁRIOS
   ================================================================ */

function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

function showToast(msg, color = 'var(--green)') {
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
  t.style.boxShadow = `0 0 20px ${color}44`;
  t.classList.add('show');
  clearTimeout(t._timer);
  t._timer = setTimeout(() => t.classList.remove('show'), 2000);
}

/* ================================================================
   INICIALIZAÇÃO
   ================================================================ */

function init() {
  // Preenche o banco com os patches padrão (de patches.js)
  patches = DEFAULT_PATCHES.map(p => deepClone(p));
  loadPatch(patches[0].id);
}

/* ================================================================
   CARREGAR PATCH
   ================================================================ */

function loadPatch(id) {
  const p = patches.find(x => x.id === id);
  if (!p) return;

  currentPatchId = id;
  document.getElementById('currentPatchNum').textContent = String(id).padStart(3, '0');
  document.getElementById('patchNameInput').value = p.name;

  // Reconstrói a chain com flag `on` e `cat`
  chain = p.chain.map((fx, i) => ({
    ...deepClone(fx),
    on:  true,
    cat: p.cats[i] || 'DRIVE',
  }));

  renderChain();
  renderPatchList();
}

/* ================================================================
   RENDERIZAR CADEIA DE SINAL
   ================================================================ */

function renderChain() {
  const el = document.getElementById('signalChain');
  el.innerHTML = '';

  document.getElementById('slotCount').textContent = `${chain.length}/5`;

  /* ── Input node ── */
  el.appendChild(makeNode('input-node', '🎸', 'GUITAR\nSGT-207'));
  el.appendChild(makeConnector('connector-start'));

  /* ── FX Slots ── */
  chain.forEach((fx, i) => {
    const slot = document.createElement('div');
    slot.className = 'chain-slot';

    slot.appendChild(makeFxBlock(fx, i));

    if (i < chain.length - 1) {
      slot.appendChild(makeConnector('connector' + (fx.on ? ' active' : '')));
    }

    el.appendChild(slot);
  });

  /* ── Add button ── */
  if (chain.length < 5) {
    el.appendChild(makeConnector('connector' + (chain.length > 0 ? ' active' : '')));
    const addBtn = document.createElement('button');
    addBtn.className = 'add-btn';
    addBtn.innerHTML = '<span class="plus">+</span>ADD EFEITO';
    addBtn.onclick = addSlot;
    el.appendChild(addBtn);
  }

  /* ── Output node ── */
  el.appendChild(makeConnector('connector-end'));
  el.appendChild(makeNode('output-node', '🔊', 'AMP /\nOUTPUT'));
}

/* ── Helpers de renderização ── */

function makeNode(cls, emoji, label) {
  const wrap = document.createElement('div');
  wrap.className = 'node-wrap';
  const node = document.createElement('div');
  node.className = cls;
  node.textContent = emoji;
  const lbl = document.createElement('div');
  lbl.className = 'node-label';
  lbl.textContent = label;
  wrap.appendChild(node);
  wrap.appendChild(lbl);
  return wrap;
}

function makeConnector(classes) {
  const div = document.createElement('div');
  div.className = classes;
  return div;
}

function makeFxBlock(fx, i) {
  const catKey = (fx.cat || '').toLowerCase().replace(/\s+/g, '');
  const block  = document.createElement('div');
  block.className = 'fx-block' + (fx.on ? ' on' : '');

  /* header */
  const header = document.createElement('div');
  header.className = 'fx-header';
  header.innerHTML = `
    <span class="fx-category cat-${CAT_COLORS[fx.cat] || 'drive'}">${fx.cat || ''}</span>
    <button class="power-led ${fx.on ? 'on' : ''}" title="Ligar/Desligar" onclick="toggleFx(${i},event)"></button>
  `;
  block.appendChild(header);

  /* nome */
  const name = document.createElement('div');
  name.className = 'fx-name';
  name.textContent = fx.name;
  block.appendChild(name);

  /* knobs */
  const knobsWrap = document.createElement('div');
  knobsWrap.className = 'fx-knobs';
  fx.params.slice(0, 4).forEach((p, pi) => {
    const pct = Math.round((p.v / p.max) * 100);
    const row = document.createElement('div');
    row.className = 'knob-row';
    row.innerHTML = `
      <div class="knob-label" title="${p.n}">${p.n}</div>
      <div class="knob-track"
           data-idx="${i}" data-pidx="${pi}"
           onmousedown="startDrag(event,${i},${pi})"
           title="Arraste para ajustar">
        <div class="knob-fill" id="kf-${i}-${pi}" style="width:${pct}%"></div>
      </div>
      <div class="knob-val" id="kv-${i}-${pi}">${p.v}</div>
    `;
    knobsWrap.appendChild(row);
  });
  block.appendChild(knobsWrap);

  /* botões de ação */
  const actions = document.createElement('div');
  actions.className = 'fx-actions';
  actions.innerHTML = `
    <button class="fx-action-btn"    onclick="openPickerForSlot(${i})">TROCAR</button>
    <button class="fx-action-btn rm" onclick="removeSlot(${i})">✕</button>
  `;
  block.appendChild(actions);

  return block;
}

/* ================================================================
   DRAG NOS PARÂMETROS
   ================================================================ */

let dragging = null;

function startDrag(e, idx, pidx) {
  dragging = {
    idx,
    pidx,
    startX: e.clientX,
    startV: chain[idx].params[pidx].v,
  };
  e.preventDefault();
  document.addEventListener('mousemove', onDrag);
  document.addEventListener('mouseup',   stopDrag);
}

function onDrag(e) {
  if (!dragging) return;
  const { idx, pidx, startX, startV } = dragging;
  const param  = chain[idx].params[pidx];
  const delta  = (e.clientX - startX) * (param.max / 120);
  const newVal = Math.round(Math.max(0, Math.min(param.max, startV + delta)));
  param.v = newVal;

  const pct = Math.round((newVal / param.max) * 100);
  const fill = document.getElementById(`kf-${idx}-${pidx}`);
  const val  = document.getElementById(`kv-${idx}-${pidx}`);
  if (fill) fill.style.width = pct + '%';
  if (val)  val.textContent  = newVal;
}

function stopDrag() {
  dragging = null;
  document.removeEventListener('mousemove', onDrag);
  document.removeEventListener('mouseup',   stopDrag);
}

/* ================================================================
   CONTROLES DA CADEIA
   ================================================================ */

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

/* ================================================================
   MODAL — SELETOR DE EFEITOS
   ================================================================ */

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
  const cats = ['ALL', ...Object.keys(FX_DB)];
  const el   = document.getElementById('modalCats');
  el.innerHTML = cats
    .map(c => `<button class="cat-filter-btn ${filterCat === c ? 'active' : ''}"
                       onclick="setCat('${c}')">${c}</button>`)
    .join('');
}

function setCat(cat) {
  filterCat = cat;
  renderModalCats();
  renderFxGrid();
}

function renderFxGrid() {
  const el   = document.getElementById('fxGrid');
  const cats = filterCat === 'ALL' ? Object.keys(FX_DB) : [filterCat];
  const entries = [];
  cats.forEach(cat => FX_DB[cat].forEach(fx => entries.push({ ...fx, cat })));

  el.innerHTML = entries
    .map(fx => `
      <div class="fx-option" onclick="selectFx('${fx.cat}','${fx.name.replace(/'/g, "\\'")}')">
        <span class="fx-category cat-${CAT_COLORS[fx.cat] || 'drive'}">${fx.cat}</span>
        <div class="fx-option-name">${fx.name}</div>
        <div class="fx-option-desc">${fx.desc}</div>
      </div>
    `)
    .join('');
}

function selectFx(cat, name) {
  const fxBase = FX_DB[cat].find(f => f.name === name);
  if (!fxBase) return;
  const fx = { ...deepClone(fxBase), on: true, cat };

  if (editingSlotIdx !== null) {
    chain[editingSlotIdx] = fx;
    showToast(`SLOT ${editingSlotIdx + 1} ATUALIZADO`);
  } else {
    chain.push(fx);
    showToast(`${fx.name} ADICIONADO`);
  }

  closeModal();
  renderChain();
}

/* ================================================================
   BANCO DE PATCHES
   ================================================================ */

function savePatch() {
  const name = (document.getElementById('patchNameInput').value.trim() || 'PATCH')
    .toUpperCase()
    .slice(0, 16);

  const existing = patches.find(x => x.id === currentPatchId);

  const data = {
    id:    currentPatchId,
    name,
    chain: chain.map(({ on, cat, ...rest }) => deepClone(rest)),
    cats:  chain.map(fx => fx.cat),
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
  patches = patches.filter(x => x.id !== currentPatchId);
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
  const newId = Math.max(...patches.map(p => p.id), 0) + 1;
  currentPatchId = newId;
  document.getElementById('currentPatchNum').textContent = String(newId).padStart(3, '0');
  document.getElementById('patchNameInput').value = '';
  chain = [];
  renderChain();
  renderPatchList();
}

/* ================================================================
   RENDERIZAR LISTA DE PATCHES
   ================================================================ */

function renderPatchList() {
  const el = document.getElementById('patchList');

  const patchItems = patches
    .map(p => `
      <div class="patch-item ${p.id === currentPatchId ? 'active' : ''}"
           onclick="loadPatch(${p.id})">
        <div class="patch-num-small">${String(p.id).padStart(3, '0')}</div>
        <div class="patch-item-info">
          <div class="patch-item-name">${p.name}</div>
          <div class="patch-item-fx">${(p.cats || []).slice(0, 3).join(' · ')}</div>
        </div>
      </div>
    `)
    .join('');

  const newItem = `
    <div class="patch-item new-patch" onclick="newPatch()">
      <div class="patch-num-small">+</div>
      <div class="patch-item-info">
        <div class="patch-item-name">NOVO PATCH</div>
      </div>
    </div>
  `;

  el.innerHTML = patchItems + newItem;
}

/* ================================================================
   FECHAR MODAL CLICANDO FORA
   ================================================================ */

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('modalOverlay').addEventListener('click', function (e) {
    if (e.target === this) closeModal();
  });

  // Atalho ESC para fechar modal
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
  });

  init();
});
