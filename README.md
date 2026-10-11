# Tienda Game Over

Sitio web de una tienda online de videojuegos, consolas y accesorios. Proyecto de la Evaluación Final Transversal (EFT) de Front End I, desarrollado con **HTML5, CSS3, JavaScript, Bootstrap 5 y React (Vite)**.

## Funcionalidades

- Página principal con productos en tarjetas (imagen, nombre, precio y descripción).
- Barra de navegación responsiva (Bootstrap) con enlaces a Inicio, Productos, Carrito y Contacto.
- Filtro de productos por categoría (Consolas, Accesorios, Acción, Aventura, Deportes).
- Carrito de compras: agregar y quitar productos, cantidades y total (estado de React).
- Formulario de contacto (nombre, email y mensaje) con validación y mensajes de error.
- Diseño responsivo con Bootstrap 5, Flexbox y CSS Grid.

## Estructura

```
src/
├── data/videojuegos.js          # Objeto JS con los productos
├── components/
│   ├── BarraNavegacion.jsx
│   ├── FiltroCategorias.jsx
│   ├── ListaVideojuegos.jsx
│   ├── TarjetaVideojuego.jsx
│   ├── Carrito.jsx
│   ├── FormularioContacto.jsx
│   └── PiePagina.jsx
├── App.jsx                      # Estado principal y unión de componentes (props)
├── main.jsx
└── index.css                    # Estilos personalizados
```

## Instalación y uso

Requisitos: [Node.js](https://nodejs.org/) 18 o superior.

```bash
npm install
npm run dev
```

Abre la URL que aparece en la terminal (normalmente http://localhost:5173).

Para generar la versión de producción:

```bash
npm run build
```

## Tecnologías

HTML5 semántico · CSS3 · JavaScript (ES6) · Bootstrap 5 · React 19 · Vite
