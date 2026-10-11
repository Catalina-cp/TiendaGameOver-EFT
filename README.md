# 🎮 Tienda Game Over

Sitio web de una tienda online de videojuegos, consolas y accesorios, desarrollado como **Evaluación Final Transversal (EFT) de Front End I**.

Permite al cliente explorar el catálogo, filtrar los productos por categoría, armar un carrito de compras y escribir al administrador mediante un formulario de contacto validado.

- **Autora:** Catalina Cabezas
- **Repositorio:** https://github.com/Catalina-cp/TiendaGameOver-EFT

---

## 📑 Tabla de contenidos

1. [Tecnologías utilizadas](#-tecnologías-utilizadas)
2. [Funcionalidades](#-funcionalidades)
3. [Requisitos previos](#-requisitos-previos)
4. [Instalación y uso](#-instalación-y-uso)
5. [Estructura del proyecto](#-estructura-del-proyecto)
6. [Cómo funciona la aplicación](#-cómo-funciona-la-aplicación)
7. [Diseño y responsividad](#-diseño-y-responsividad)
8. [Pruebas realizadas](#-pruebas-realizadas)
9. [Control de versiones](#-control-de-versiones)

---

## 🛠 Tecnologías utilizadas

| Tecnología | Uso en el proyecto |
|---|---|
| **HTML5** | Estructura semántica: `header`, `nav`, `main`, `section`, `article`, `footer`. |
| **CSS3** | Estilos personalizados (colores, tipografía, tarjetas, formularios) con variables CSS, **Flexbox** y **CSS Grid**. |
| **JavaScript (ES6)** | Objeto con los datos de los videojuegos, generación dinámica de tarjetas, filtrado y validaciones. |
| **Bootstrap 5** | Barra de navegación, tarjetas, formularios, alertas, botones y sistema de columnas responsivo. |
| **React 19** | Componentes reutilizables, manejo de estado (`useState`) y paso de datos con props. |
| **Vite** | Herramienta de desarrollo y compilación del proyecto. |
| **Git y GitHub** | Control de versiones con commits descriptivos. |

---

## ✨ Funcionalidades

### 1. Catálogo de productos
- La página principal muestra los productos en **tarjetas** con imagen, nombre, categoría, descripción y precio (en pesos chilenos).
- Las tarjetas se generan **dinámicamente** recorriendo un arreglo de objetos JavaScript (`src/data/videojuegos.js`), por lo que agregar un producto nuevo solo requiere añadir un objeto a ese archivo.
- Si una imagen no carga, se muestra una imagen de reemplazo.

### 2. Filtro por categoría
- Botones para filtrar por: **Todas, Consolas, Accesorios, Acción, Aventura y Deportes**.
- Al presionar un botón se actualiza el estado de React y la lista muestra solo los productos de esa categoría.
- Si no hay productos en una categoría, se muestra un mensaje informativo.

### 3. Carrito de compras
- Cada tarjeta tiene el botón **Agregar al carrito**.
- Si el producto ya está en el carrito, se **suma una unidad** en lugar de duplicarlo.
- El botón **Quitar 1** resta una unidad y, si llega a cero, elimina el producto del carrito.
- Se calcula el **total** automáticamente y la barra de navegación muestra cuántos artículos hay en el carrito.
- Incluye **Vaciar carrito** y **Finalizar compra** (la compra es una simulación).

### 4. Formulario de contacto con validación
Valida los datos **antes de enviarlos** y muestra mensajes de error bajo cada campo:

| Campo | Regla de validación |
|---|---|
| Nombre | Obligatorio, mínimo 3 caracteres. |
| Email | Obligatorio y con formato válido (`nombre@correo.com`). |
| Mensaje | Obligatorio, mínimo 10 caracteres. |

Si hay errores, se marcan en rojo y se muestra una alerta general. Si todo es correcto, aparece un mensaje de confirmación y el formulario se limpia.

### 5. Navegación
- Barra de navegación fija con enlaces a **Inicio, Productos, Carrito y Contacto**.
- En pantallas pequeñas se convierte en un **menú desplegable** (botón hamburguesa).

---

## 📋 Requisitos previos

- [Node.js](https://nodejs.org/) versión **18 o superior** (incluye `npm`).
- [Git](https://git-scm.com/) para clonar el repositorio.
- Un navegador moderno (Chrome, Edge o Firefox).

Para comprobar que están instalados, ejecuta en la terminal:

```bash
node -v
npm -v
git --version
```

---

## 🚀 Instalación y uso

**1. Clonar el repositorio**

```bash
git clone https://github.com/Catalina-cp/TiendaGameOver-EFT.git
cd TiendaGameOver-EFT
```

> Si recibiste el proyecto como archivo `.zip`, descomprímelo y abre la terminal dentro de la carpeta que contiene el archivo `package.json`.

**2. Instalar las dependencias**

```bash
npm install
```

**3. Iniciar el servidor de desarrollo**

```bash
npm run dev
```

**4. Abrir el sitio**

Abre en el navegador la dirección que aparece en la terminal, normalmente:

```
http://localhost:5173/
```

**5. (Opcional) Generar la versión de producción**

```bash
npm run build
```

Los archivos finales se crean en la carpeta `dist/`.

### ⚠️ Solución de problemas en Windows

Si PowerShell muestra el error *"la ejecución de scripts está deshabilitada en este sistema"* al usar `npm`, ejecuta este comando en la misma terminal y vuelve a intentarlo:

```powershell
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
```

---

## 📁 Estructura del proyecto

```
TiendaGameOver/
├── public/
│   └── img/                       # Imágenes locales de los productos
├── src/
│   ├── data/
│   │   └── videojuegos.js         # Objeto JS con los productos (nombre, categoría, precio, descripción, imagen)
│   ├── components/
│   │   ├── BarraNavegacion.jsx    # Navbar de Bootstrap con contador del carrito
│   │   ├── FiltroCategorias.jsx   # Botones para filtrar por categoría
│   │   ├── ListaVideojuegos.jsx   # Recorre los productos y genera las tarjetas
│   │   ├── TarjetaVideojuego.jsx  # Tarjeta individual de un producto
│   │   ├── Carrito.jsx            # Lista de productos del carrito, total y acciones
│   │   ├── FormularioContacto.jsx # Formulario con validación
│   │   └── PiePagina.jsx          # Footer con dirección y redes sociales
│   ├── App.jsx                    # Componente principal: estado y conexión entre componentes
│   ├── main.jsx                   # Punto de entrada (importa Bootstrap y estilos)
│   └── index.css                  # Estilos personalizados
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## ⚙️ Cómo funciona la aplicación

### Datos
Los productos viven en `src/data/videojuegos.js` como un arreglo de objetos. Cada objeto contiene `id`, `nombre`, `categoria`, `precio`, `descripcion` e `imagen`. App los carga en el estado al iniciar.

### Estado (`useState`)
`App.jsx` mantiene tres estados:

| Estado | Contenido |
|---|---|
| `juegos` | Catálogo de productos cargado desde el archivo de datos. |
| `categoriaActiva` | Categoría seleccionada en el filtro (`'Todas'` por defecto). |
| `carrito` | Productos agregados por el cliente, con su cantidad. |

### Props (comunicación entre componentes)
`App` actúa como componente central y pasa datos y funciones a sus hijos:

```
App
├── BarraNavegacion      ← totalCarrito
├── FiltroCategorias     ← categorias, categoriaActiva, onCambiarCategoria
├── ListaVideojuegos     ← juegos (ya filtrados), onAgregarAlCarrito
│   └── TarjetaVideojuego ← juego, onAgregarAlCarrito
├── Carrito              ← items, onEliminar, onVaciar, onComprar
├── FormularioContacto   (maneja su propio estado de campos y errores)
└── PiePagina
```

**Ejemplo del flujo:** al presionar un botón de categoría, `FiltroCategorias` llama a `onCambiarCategoria`, que actualiza el estado `categoriaActiva` en `App`. Al cambiar el estado, `App` vuelve a calcular la lista filtrada y `ListaVideojuegos` muestra solo esos productos.

---

## 📱 Diseño y responsividad

- **Bootstrap 5:** barra de navegación (`navbar`), tarjetas (`card`), formularios (`form-control`, `is-invalid`), alertas (`alert`) y botones.
- **CSS Grid:** la lista de productos usa `grid-template-columns: repeat(auto-fit, minmax(240px, 1fr))`, por lo que se adapta sola a cualquier ancho (de 1 a 4 columnas).
- **Flexbox:** filtros de categoría, footer, ítems del carrito y distribución general de la página (el footer siempre queda al final).
- **Variables CSS:** paleta de colores definida en `:root` (morado, celeste, rosado y fondos oscuros) para mantener coherencia visual.
- **Media queries:** ajustes de tamaño de título y footer en pantallas menores a 600 px.

---

## ✅ Pruebas realizadas

### Funcionalidades

| Prueba | Resultado esperado | Estado |
|---|---|---|
| Filtrar por cada categoría | Solo se muestran los productos de esa categoría | ✔ Correcto |
| Volver a "Todas" | Se muestran todos los productos | ✔ Correcto |
| Agregar el mismo producto dos veces | La cantidad sube a 2 y el total se actualiza | ✔ Correcto |
| Presionar "Quitar 1" | Resta una unidad; con 1 unidad, elimina el producto | ✔ Correcto |
| Vaciar carrito / Finalizar compra | El carrito queda vacío | ✔ Correcto |
| Enviar contacto con campos vacíos | Errores en rojo en los tres campos | ✔ Correcto |
| Enviar contacto con email inválido | Error de formato de email | ✔ Correcto |
| Enviar contacto con datos válidos | Mensaje de confirmación y formulario limpio | ✔ Correcto |

### Dispositivos (responsividad)

| Dispositivo | Ancho aproximado | Resultado |
|---|---|---|
| Móvil | 375 px | Menú hamburguesa, tarjetas en 1 columna |
| Tablet | 768 px | Tarjetas en 2 columnas |
| Escritorio | 1200 px o más | Tarjetas en 4 columnas, navbar completa |

### Navegadores

| Navegador | Resultado |
|---|---|
| Google Chrome | ✔ Funciona correctamente |
| Microsoft Edge | ✔ Funciona correctamente |

---

## 🔀 Control de versiones

El proyecto se desarrolló con **Git** y se publicó en **GitHub**, con commits separados por cada etapa del desarrollo:

1. Configuración base con Vite, React y Bootstrap 5.
2. Datos de los videojuegos y estilos con Flexbox y CSS Grid.
3. Barra de navegación y pie de página.
4. Tarjetas dinámicas y filtro por categoría.
5. Carrito de compras.
6. Formulario de contacto con validación.
7. Conexión de componentes mediante state y props.
8. Documentación (README) y configuración del linter.

Puedes ver el historial completo en la pestaña **Commits** del repositorio.