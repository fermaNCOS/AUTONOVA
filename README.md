# AutoNova Paraguay — Concesionaria Toyota (0km)

Página de catálogo estilo concesionaria real paraguaya: solo Toyota, precios en **guaraníes**, financiación local y test drive en Asunción. Sin frameworks ni build: `HTML + CSS + JS`, lista para **GitHub Pages**.

## Qué incluye

- **Stock 0km con 9 Toyota reales** (fotos de Wikimedia Commons):
  Yaris, Yaris Cross, Corolla, Corolla Cross, Hilux DX, Hilux SRV, RAV4, Fortuner y Land Cruiser 300
- **Precios en guaraníes** (Gs 139.000.000 – Gs 795.000.000) + cuota mensual estimada en cada tarjeta
- **Filtros**: búsqueda, carrocería (Pick-up / SUV / Sedán / Hatchback), rango de precio, orden
- **Ficha por vehículo**: motor, potencia, caja, tracción, consumo, plazas, garantía 3 años/100.000 km
- **Guardados** con `localStorage` + panel lateral
- **Comparador** de 2 modelos con cuota y resaltado del más barato / más potente
- **Simulador de cuota** en guaraníes: entrega inicial 10–70%, 12–60 meses, tasa fija 12,5% + botón de pre-aprobación por WhatsApp
- **Secciones**: franja Land Cruiser, taller y repuestos, opiniones de clientes del país, contacto con ciudades de Paraguay, pie con disclaimer
- Diseño claro tipo automotora (rojo Toyota, tipografía condensada, sin emojis), responsive

## Estructura

```
Catalogo-Vehiculos/
├── index.html   # estructura y textos
├── styles.css   # diseño claro estilo concesionaria
├── app.js       # stock, filtros, ficha, comparador, simulador
└── README.md
```

## Probar en tu PC

Abrí `index.html` con doble clic, o servilo local con:

```bash
cd Catalogo-Vehiculos
python -m http.server 8000
# abrir http://localhost:8000
```

## Subir a GitHub + GitHub Pages

```bash
cd Catalogo-Vehiculos
git init
git add .
git commit -m "Concesionaria Toyota Paraguay: stock 0km en guaraníes"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/autonova-py.git
git push -u origin main
```

Después en el repo: **Settings → Pages → Deploy from a branch → main / (root) → Save**.
Queda online en `https://TU-USUARIO.github.io/autonova-py/`.

## Personalizar

- **Precios**: en `app.js`, campo `precio` de cada objeto de `vehicles` (número entero en guaraníes).
- **Agregar un modelo**: copiá un bloque del array `vehicles` con su foto de [Wikimedia Commons](https://commons.wikimedia.org) (usar la URL `thumb/.../1280px-...`).
- **Tasa de interés**: constante `0.125` en `cuotaRef` y `updateCalc` (12,5% anual).
- **WhatsApp**: buscar `595971493419` en `index.html` y `app.js` para poner tu número.
- **Dirección y ciudades**: secciones de contacto en `index.html` (`fCity`).

## Créditos de fotos

Vehículos: fotografías de Wikimedia Commons (varios autores, licencias libres). Uso demostrativo con aviso de “fotos ilustrativas” en la propia página.

---
Sitio demostrativo para trabajo universitario (Paraguay, 2026).
