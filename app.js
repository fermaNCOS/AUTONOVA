// Stock 0km Toyota — precios en guaraníes (IVA incluido). Fotos: Wikimedia Commons.
const FALLBACK_IMG = "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0b/Toyota_Corolla_Cross_Hybrid_1X7A1861.jpg/1280px-Toyota_Corolla_Cross_Hybrid_1X7A1861.jpg";

const vehicles = [
  {
    id: 1, modelo: "Yaris XLS 1.5 CVT", categoria: "Hatchback",
    precio: 139000000, anio: 2025, condicion: "0 km · Entrega inmediata",
    motor: "1.5 naftero", potencia: 107, caja: "Automática CVT", traccion: "Delantera",
    consumo: "6,5 L/100 km", plazas: 5, etiqueta: "El más accesible",
    img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c3/Toyota_Yaris_Hybrid_%28XP210%29_1X7A0353.jpg/1280px-Toyota_Yaris_Hybrid_%28XP210%29_1X7A0353.jpg",
    desc: "El ideal para tu primer 0km: bajo consumo, fácil de estacionar en el microcentro y repuestos baratos. El más buscado por estudiantes y deliverys de Villarrica."
  },
  {
    id: 2, modelo: "Yaris Cross XLE 1.5", categoria: "SUV",
    precio: 189000000, anio: 2025, condicion: "0 km · Entrega inmediata",
    motor: "1.5 naftero", potencia: 106, caja: "Automática CVT", traccion: "Delantera",
    consumo: "6,0 L/100 km", plazas: 5, etiqueta: "Nuevo ingreso",
    img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f4/Toyota_Yaris_Cross_Hybrid_%28XP210%29_1X7A1846.jpg/1280px-Toyota_Yaris_Cross_Hybrid_%28XP210%29_1X7A1846.jpg",
    desc: "La SUV chica que faltaba: altura de camioneta con consumo de auto. Perfecta para la familia que va y viene entre Villarrica y el interior."
  },
  {
    id: 3, modelo: "Corolla XEi 2.0", categoria: "Sedan",
    precio: 219000000, anio: 2025, condicion: "0 km · Entrega inmediata",
    motor: "2.0 Dynamic Force", potencia: 169, caja: "Automática CVT", traccion: "Delantera",
    consumo: "6,8 L/100 km", plazas: 5, etiqueta: "El más equilibrado",
    img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1a/Toyota_Corolla_Sedan_Japanese_model.jpg/1280px-Toyota_Corolla_Sedan_Japanese_model.jpg",
    desc: "El sedán de referencia del país: cómodo para la ruta Villarrica–Caaguazú, Toyota Safety Sense y el mejor valor de reventa del mercado paraguayo."
  },
  {
    id: 4, modelo: "Corolla Cross XLE 2.0", categoria: "SUV",
    precio: 265000000, anio: 2026, condicion: "0 km · Últimas 3 unidades",
    motor: "2.0 naftero", potencia: 169, caja: "Automática CVT", traccion: "Delantera",
    consumo: "7,0 L/100 km", plazas: 5, etiqueta: "El familiar",
    img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0b/Toyota_Corolla_Cross_Hybrid_1X7A1861.jpg/1280px-Toyota_Corolla_Cross_Hybrid_1X7A1861.jpg",
    desc: "La SUV familiar más vendida: baúl enorme, cámara 360° y techo alto para los chicos. Consultá también la versión híbrida a pedido."
  },
  {
    id: 5, modelo: "Hilux DX 2.4 4x4", categoria: "Pickup",
    precio: 279000000, anio: 2025, condicion: "0 km · Entrega inmediata",
    motor: "2.4 turbodiésel", potencia: 150, caja: "Manual 6ta", traccion: "4x4 con reductora",
    consumo: "8,5 L/100 km", plazas: 5, etiqueta: "Para el trabajo",
    img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bb/Toyota_Hilux_2.4J_4x2_20221019.jpg/1280px-Toyota_Hilux_2.4J_4x2_20221019.jpg",
    desc: "La herramienta de trabajo del campo paraguayo: chasis reforzado, 1.000 kg de carga útil y mecánica simple que cualquier mecánico conoce. Flotas: precio especial."
  },
  {
    id: 6, modelo: "Hilux SRV 2.8 4x4 AT", categoria: "Pickup",
    precio: 349000000, anio: 2026, condicion: "0 km · Stock en piso",
    motor: "2.8 turbodiésel", potencia: 201, caja: "Automática 6ta", traccion: "4x4 con reductora",
    consumo: "9,0 L/100 km", plazas: 5, etiqueta: "La más vendida",
    img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/48/2020_Toyota_Hilux_E_%28front_left_side_view%29.jpg/1280px-2020_Toyota_Hilux_E_%28front_left_side_view%29.jpg",
    desc: "La reina de las rutas del Paraguay: cuero, 7 airbags, control de descenso y fuerza de sobra para el Chaco. La que más se vende y la que menos se devalúa."
  },
  {
    id: 7, modelo: "RAV4 Adventure 2.5 AWD", categoria: "SUV",
    precio: 355000000, anio: 2025, condicion: "0 km · Entrega inmediata",
    motor: "2.5 naftero", potencia: 203, caja: "Automática 8va", traccion: "Integral AWD",
    consumo: "8,0 L/100 km", plazas: 5, etiqueta: "Aventura AWD",
    img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9f/Toyota_RAV4_Plug-in_Hybrid_GR_Sport_IMG_9891.jpg/1280px-Toyota_RAV4_Plug-in_Hybrid_GR_Sport_IMG_9891.jpg",
    desc: "Para el que sale de Villarrica los findes: tracción integral, modos de barro y arena, y portón eléctrico. Ideal para Encarnación, el Salto del Monday o el Chaco."
  },
  {
    id: 8, modelo: "Fortuner SRV 2.8 4x4", categoria: "SUV",
    precio: 399000000, anio: 2026, condicion: "0 km · Stock en piso",
    motor: "2.8 turbodiésel", potencia: 201, caja: "Automática 6ta", traccion: "4x4 con reductora",
    consumo: "9,2 L/100 km", plazas: 7, etiqueta: "7 asientos",
    img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0e/Toyota_Fortuner_4x4_Legender_%28LTD%29_2022.jpg/1280px-Toyota_Fortuner_4x4_Legender_%28LTD%29_2022.jpg",
    desc: "La 7 asientos de verdad: chasis de Hilux, tercera fila usable y presencia que impone. La favorita de las familias grandes y de las empresas del interior."
  },
  {
    id: 9, modelo: "Land Cruiser 300 GR-S 3.3 V6", categoria: "SUV",
    precio: 795000000, anio: 2026, condicion: "0 km · 2 unidades en piso",
    motor: "3.3 V6 biturbo diésel", potencia: 302, caja: "Automática 10ma", traccion: "4WD permanente",
    consumo: "10,5 L/100 km", plazas: 7, etiqueta: "Tope de gama",
    img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6d/2021_Toyota_Land_Cruiser_300_3.4_ZX_%28Colombia%29_front_view_04.png/1280px-2021_Toyota_Land_Cruiser_300_3.4_ZX_%28Colombia%29_front_view_04.png",
    desc: "La leyenda: 700 Nm de torque, bloqueo de tres diferenciales y lujo de primera. Para estancias, constructoras y quienes quieren lo mejor, sin discusión."
  }
];

let favorites = [];
try { favorites = JSON.parse(localStorage.getItem('autonova_py_favs') || '[]'); } catch (e) { favorites = []; }
let compareList = [];

// Guaraníes con punto de miles: Gs 349.000.000
const fmt = n => 'Gs ' + Math.round(n).toLocaleString('es-PY');

const grid = document.getElementById('vehicleGrid');
const resultsCount = document.getElementById('resultsCount');
const emptyState = document.getElementById('emptyState');

function cuotaMensual(precio, entregaPct, meses, tasaAnual) {
  const capital = precio * (1 - entregaPct / 100);
  const r = tasaAnual / 12;
  return capital * r * Math.pow(1 + r, meses) / (Math.pow(1 + r, meses) - 1);
}
const cuotaRef = v => cuotaMensual(v.precio, 20, 48, 0.125);

function getFiltered() {
  const q = (document.getElementById('searchInput').value || '').toLowerCase();
  const cat = document.getElementById('categoryFilter').value;
  const maxPrice = document.getElementById('priceFilter').value;
  const sort = document.getElementById('sortFilter').value;
  const onlyFavs = document.getElementById('onlyFavs').checked;

  let list = vehicles.filter(v => {
    const matchQ = ('toyota ' + v.modelo).toLowerCase().includes(q);
    const matchC = cat === 'all' || v.categoria === cat;
    const matchP = maxPrice === 'all' || (maxPrice === 'mas' ? v.precio > 450000000 : v.precio <= +maxPrice);
    const matchF = !onlyFavs || favorites.includes(v.id);
    return matchQ && matchC && matchP && matchF;
  });

  if (sort === 'price-asc') list.sort((a, b) => a.precio - b.precio);
  if (sort === 'price-desc') list.sort((a, b) => b.precio - a.precio);
  if (sort === 'power-desc') list.sort((a, b) => b.potencia - a.potencia);
  return list;
}

function renderVehicles() {
  const list = getFiltered();
  resultsCount.textContent = list.length;
  emptyState.style.display = list.length ? 'none' : 'block';

  grid.innerHTML = list.map(v => {
    const fav = favorites.includes(v.id);
    return `
    <article class="card">
      <div class="card-img">
        <img src="${v.img}" alt="Toyota ${v.modelo}" loading="lazy" onerror="this.onerror=null;this.src='${FALLBACK_IMG}'">
        <span class="badge">${v.etiqueta}</span>
        <button class="save-btn ${fav ? 'active' : ''}" onclick="toggleFav(${v.id})">${fav ? 'Guardado ✓' : '＋ Guardar'}</button>
      </div>
      <div class="card-body">
        <span class="card-cat">Toyota · ${v.categoria} · ${v.anio}</span>
        <h3>${v.modelo}</h3>
        <p class="card-spec">${v.motor} · ${v.potencia} HP · ${v.caja} · ${v.traccion}</p>
        <div class="card-foot">
          <div class="price"><small>Contado</small><strong>${fmt(v.precio)}</strong><span class="fee">o ${fmt(cuotaRef(v))}/mes</span></div>
          <div class="card-actions">
            <button class="btn-card" onclick="addCompare(${v.id})">Comparar</button>
            <button class="btn-card primary" onclick="openModal(${v.id})">Ver ficha</button>
          </div>
        </div>
      </div>
    </article>`;
  }).join('');
  updateFavUI();
}

// ===== Guardados =====
function toggleFav(id) {
  favorites = favorites.includes(id) ? favorites.filter(f => f !== id) : [...favorites, id];
  try { localStorage.setItem('autonova_py_favs', JSON.stringify(favorites)); } catch (e) {}
  renderVehicles(); renderFavDrawer();
  const v = vehicles.find(x => x.id === id);
  showToast(favorites.includes(id) ? `Guardado: Toyota ${v.modelo}` : 'Quitado de guardados');
}
function updateFavUI() {
  document.getElementById('favCount').textContent = favorites.length;
  document.getElementById('favDrawerCount').textContent = favorites.length;
}
function renderFavDrawer() {
  updateFavUI();
  const box = document.getElementById('favList');
  if (!favorites.length) { box.innerHTML = '<p style="color:#5C6067">Todavía no guardaste nada.<br>Apretá “＋ Guardar” en la unidad que te guste y queda acá.</p>'; return; }
  box.innerHTML = favorites.map(id => {
    const v = vehicles.find(x => x.id === id);
    if (!v) return '';
    return `<div class="fav-item">
      <img src="${v.img}" alt="Toyota ${v.modelo}" onerror="this.onerror=null;this.src='${FALLBACK_IMG}'">
      <div><strong>Toyota ${v.modelo}</strong><small>${fmt(v.precio)}</small></div>
      <button onclick="toggleFav(${v.id})" title="Quitar">✕</button>
    </div>`;
  }).join('');
}

// ===== Ficha del vehículo =====
const overlay = document.getElementById('modalOverlay');
const modal = document.getElementById('vehicleModal');
function openModal(id) {
  const v = vehicles.find(x => x.id === id);
  if (!v) return;
  const fav = favorites.includes(v.id);
  modal.innerHTML = `
    <div class="modal-top"><img src="${v.img}" alt="Toyota ${v.modelo}" onerror="this.onerror=null;this.src='${FALLBACK_IMG}'"><span class="badge">${v.etiqueta}</span></div>
    <div class="modal-body">
        <button class="modal-close" onclick="closeModal()">✕</button>
        <span class="card-cat">Toyota · ${v.categoria} · ${v.anio} · ${v.condicion}</span>
        <h2>${v.modelo}</h2>
        <p class="modal-desc">${v.desc}</p>
        <table class="spec-table">
          <tr><td>Motor</td><td>${v.motor}</td></tr>
          <tr><td>Potencia</td><td>${v.potencia} HP</td></tr>
          <tr><td>Caja</td><td>${v.caja}</td></tr>
          <tr><td>Tracción</td><td>${v.traccion}</td></tr>
          <tr><td>Consumo mixto</td><td>${v.consumo}</td></tr>
          <tr><td>Plazas</td><td>${v.plazas}</td></tr>
          <tr><td>Garantía</td><td>3 años o 100.000 km</td></tr>
        </table>
        <div class="modal-price">
          <div><small>Contado</small><br><strong>${fmt(v.precio)}</strong></div>
          <div style="text-align:right"><small>o financiado</small><br><strong>${fmt(cuotaRef(v))}/mes</strong></div>
        </div>
        <p class="modal-desc">Incluye: patentamiento y chapa provisoria, tanque lleno, services de 1.000 y 10.000 km bonificados, kit de auxilio y alfombras.</p>
        <div class="modal-actions">
          <button class="btn btn-red" onclick="closeModal();contactAbout(${v.id})">Agendar test drive</button>
          <button class="btn btn-outline" onclick="toggleFav(${v.id});openModal(${v.id})">${fav ? 'Guardado ✓' : '＋ Guardar'}</button>
        </div>
    </div>`;
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeModal() { overlay.classList.remove('open'); document.body.style.overflow = ''; }
overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

// ===== Comparador =====
function addCompare(id) {
  if (compareList.includes(id)) { showToast('Ese modelo ya está en la comparación'); return; }
  if (compareList.length >= 2) compareList.shift();
  compareList.push(id);
  renderCompare();
  document.getElementById('comparar').scrollIntoView({ behavior: 'smooth' });
  showToast(`Agregado a comparar (${compareList.length}/2)`);
}
function renderCompare() {
  const area = document.getElementById('compareArea');
  if (!compareList.length) {
    area.innerHTML = `<div class="compare-empty"><h3 style="font-family:var(--cond);font-size:1.4rem;margin-bottom:6px">Todavía no elegiste modelos</h3><p>Apretá <strong>Comparar</strong> en la ficha de cualquier unidad del stock.</p></div>`;
    return;
  }
  const cards = compareList.map(id => vehicles.find(v => v.id === id));
  const minP = Math.min(...cards.map(c => c.precio));
  const maxH = Math.max(...cards.map(c => c.potencia));
  area.innerHTML = `<div class="compare-grid">` + cards.map(v => `
    <div class="compare-card">
      <img src="${v.img}" alt="Toyota ${v.modelo}" onerror="this.onerror=null;this.src='${FALLBACK_IMG}'">
      <div class="pad">
        <span class="card-cat">Toyota · ${v.categoria} · ${v.anio}</span>
        <h3>${v.modelo}</h3>
        <table class="compare-table">
          <tr><td>Precio contado</td><td class="${cards.length === 2 && v.precio === minP ? 'win' : ''}">${fmt(v.precio)}</td></tr>
          <tr><td>Cuota ref. (48 m.)</td><td>${fmt(cuotaRef(v))}/mes</td></tr>
          <tr><td>Motor</td><td>${v.motor}</td></tr>
          <tr><td>Potencia</td><td class="${cards.length === 2 && v.potencia === maxH ? 'win' : ''}">${v.potencia} HP</td></tr>
          <tr><td>Caja</td><td>${v.caja}</td></tr>
          <tr><td>Tracción</td><td>${v.traccion}</td></tr>
          <tr><td>Consumo</td><td>${v.consumo}</td></tr>
          <tr><td>Plazas</td><td>${v.plazas}</td></tr>
        </table>
        <div style="margin-top:14px"><button class="btn btn-red btn-sm" onclick="openModal(${v.id})">Ver ficha completa</button></div>
      </div>
    </div>`).join('') + `</div>`;
}
document.getElementById('clearCompare').addEventListener('click', () => { compareList = []; renderCompare(); });

// ===== Simulador =====
const calcVehicle = document.getElementById('calcVehicle');
const fVehicle = document.getElementById('fVehicle');
calcVehicle.innerHTML = vehicles.map(v => `<option value="${v.id}">Toyota ${v.modelo} — ${fmt(v.precio)}</option>`).join('');
fVehicle.innerHTML = vehicles.map(v => `<option>Toyota ${v.modelo}</option>`).join('');

function updateCalc() {
  const v = vehicles.find(x => x.id == calcVehicle.value) || vehicles[0];
  const downPct = +document.getElementById('downPayment').value;
  const term = +document.getElementById('termRange').value;
  const fee = cuotaMensual(v.precio, downPct, term, 0.125);
  const down = v.precio * downPct / 100;
  document.getElementById('calcPriceLabel').textContent = fmt(v.precio);
  document.getElementById('downLabel').textContent = `${downPct}% (${fmt(down)})`;
  document.getElementById('termLabel').textContent = `${term} meses`;
  document.getElementById('loanAmount').textContent = fmt(v.precio - down);
  document.getElementById('monthlyFee').textContent = fmt(fee) + '/mes';
}
['calcVehicle', 'downPayment', 'termRange'].forEach(id => document.getElementById(id).addEventListener('input', updateCalc));
updateCalc();

function solicitarCredito() {
  const v = vehicles.find(x => x.id == calcVehicle.value) || vehicles[0];
  const fee = document.getElementById('monthlyFee').textContent;
  const msg = `Hola AutoNova, me interesa la Toyota ${v.modelo} con cuota de ${fee}. ¿Me ayudan con la pre-aprobación? Soy de Paraguay.`;
  window.open('https://wa.me/595971493419?text=' + encodeURIComponent(msg), '_blank');
}
function contactAbout(id) {
  const v = vehicles.find(x => x.id === id);
  fVehicle.value = `Toyota ${v.modelo}`;
  document.getElementById('contacto').scrollIntoView({ behavior: 'smooth' });
  showToast(`Elegiste la Toyota ${v.modelo} en el formulario`);
}

// ===== Filtros =====
['searchInput', 'categoryFilter', 'priceFilter', 'sortFilter', 'onlyFavs'].forEach(id =>
  document.getElementById(id).addEventListener('input', renderVehicles));
document.getElementById('heroForm').addEventListener('submit', e => {
  e.preventDefault();
  document.getElementById('searchInput').value = document.getElementById('heroSearch').value;
  renderVehicles();
  document.getElementById('stock').scrollIntoView({ behavior: 'smooth' });
});
document.getElementById('heroSearch').addEventListener('input', e => {
  document.getElementById('searchInput').value = e.target.value;
  renderVehicles();
});
document.querySelectorAll('#categoryTags .tag').forEach(t => t.addEventListener('click', () => {
  document.querySelectorAll('#categoryTags .tag').forEach(x => x.classList.remove('active'));
  t.classList.add('active');
  document.getElementById('categoryFilter').value = t.dataset.cat;
  renderVehicles();
}));
document.getElementById('clearFilters').addEventListener('click', () => {
  document.getElementById('searchInput').value = '';
  document.getElementById('heroSearch').value = '';
  document.getElementById('categoryFilter').value = 'all';
  document.getElementById('priceFilter').value = 'all';
  document.getElementById('onlyFavs').checked = false;
  renderVehicles();
});

// ===== Guardados / menú / formulario =====
const drawer = document.getElementById('favDrawer');
const drawerOverlay = document.getElementById('drawerOverlay');
document.getElementById('favNavBtn').addEventListener('click', () => { drawer.classList.add('open'); drawerOverlay.classList.add('open'); });
document.getElementById('closeDrawer').addEventListener('click', closeDrawer);
drawerOverlay.addEventListener('click', closeDrawer);
function closeDrawer() { drawer.classList.remove('open'); drawerOverlay.classList.remove('open'); }

document.getElementById('hamburger').addEventListener('click', () =>
  document.getElementById('mainNav').classList.toggle('open'));
document.querySelectorAll('.main-nav a').forEach(a => a.addEventListener('click', () =>
  document.getElementById('mainNav').classList.remove('open')));

document.getElementById('leadForm').addEventListener('submit', e => {
  e.preventDefault();
  const name = document.getElementById('fName').value.trim();
  const phone = document.getElementById('fPhone').value.trim();
  if (name.length < 2 || phone.replace(/\D/g, '').length < 9) { showToast('Revisá tu nombre y tu número de celular'); return; }
  showToast(`Gracias, ${name}. Un vendedor te va a llamar al ${phone} en horario comercial.`);
  e.target.reset();
});

let toastTimer;
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg; t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 3000);
}

// Init
renderVehicles(); renderFavDrawer(); renderCompare();
