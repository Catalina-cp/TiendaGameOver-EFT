import { useState } from 'react'
import { videojuegosIniciales } from './data/videojuegos.js'
import BarraNavegacion from './components/BarraNavegacion.jsx'
import FiltroCategorias from './components/FiltroCategorias.jsx'
import ListaVideojuegos from './components/ListaVideojuegos.jsx'
import Carrito from './components/Carrito.jsx'
import FormularioContacto from './components/FormularioContacto.jsx'
import PiePagina from './components/PiePagina.jsx'

const CATEGORIAS = ['Consolas', 'Accesorios', 'Acción', 'Aventura', 'Deportes']

function App() {
  // Estado: catálogo (cargado desde src/data), categoría activa y carrito
  const [juegos] = useState(videojuegosIniciales)
  const [categoriaActiva, setCategoriaActiva] = useState('Todas')
  const [carrito, setCarrito] = useState([])

  const agregarAlCarrito = (id) => {
    const juego = juegos.find((j) => j.id === id)
    const existe = carrito.find((i) => i.id === id)
    if (existe) {
      setCarrito(carrito.map((i) => (i.id === id ? { ...i, cantidad: i.cantidad + 1 } : i)))
    } else {
      setCarrito([...carrito, { id, nombre: juego.nombre, precio: juego.precio, cantidad: 1 }])
    }
  }

    const quitarDelCarrito = (id) => {
    setCarrito(
      carrito
        .map((i) => (i.id === id ? { ...i, cantidad: i.cantidad - 1 } : i))
        .filter((i) => i.cantidad > 0)
    )
  }

  const vaciarCarrito = () => setCarrito([])

  const comprar = () => {
    alert('¡Gracias por tu compra en Game Over! (simulación)')
    setCarrito([])
  }

  const totalCarrito = carrito.reduce((suma, i) => suma + i.cantidad, 0)

  const juegosFiltrados =
    categoriaActiva === 'Todas' ? juegos : juegos.filter((j) => j.categoria === categoriaActiva)

  return (
    <>
      <BarraNavegacion totalCarrito={totalCarrito} />

      <header id="inicio" className="portada">
        <h1>Tienda Game Over</h1>
        <p>
          Bienvenidos a Game Over, una tienda especializada en videojuegos, consolas y accesorios
          para todas las plataformas.
        </p>
        <a href="#productos" className="btn btn-neon btn-lg">Ver productos</a>
      </header>

      <main>
        <section id="productos" className="seccion container">
          <h2>Productos destacados</h2>
          <FiltroCategorias
            categorias={['Todas', ...CATEGORIAS]}
            categoriaActiva={categoriaActiva}
            onCambiarCategoria={setCategoriaActiva}
          />
          <ListaVideojuegos juegos={juegosFiltrados} onAgregarAlCarrito={agregarAlCarrito} />
        </section>

        <section id="carrito" className="seccion container seccion-form">
          <h2>Tu carrito</h2>
          <Carrito items={carrito} onEliminar={quitarDelCarrito} onVaciar={vaciarCarrito} onComprar={comprar} />
        </section>

        <section id="contacto" className="seccion container seccion-form">
          <h2>Contacto</h2>
          <p className="text-center">¿Tienes dudas? Escríbele al administrador del sitio.</p>
          <FormularioContacto />
        </section>
      </main>

      <PiePagina />
    </>
  )
}

export default App
