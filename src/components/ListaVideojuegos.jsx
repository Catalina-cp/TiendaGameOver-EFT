import TarjetaVideojuego from './TarjetaVideojuego.jsx'

// Genera dinámicamente una tarjeta por cada videojuego recibido por props.
function ListaVideojuegos({ juegos, onAgregarAlCarrito }) {
  if (juegos.length === 0) {
    return <p className="text-center sin-resultados">No hay productos en esta categoría.</p>
  }

  return (
    <div className="grilla-productos">
      {juegos.map((juego) => (
        <TarjetaVideojuego key={juego.id} juego={juego} onAgregarAlCarrito={onAgregarAlCarrito} />
      ))}
    </div>
  )
}

export default ListaVideojuegos
