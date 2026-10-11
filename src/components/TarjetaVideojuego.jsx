const formatoPrecio = new Intl.NumberFormat('es-CL', {
  style: 'currency',
  currency: 'CLP',
  maximumFractionDigits: 0,
})

// Tarjeta (Bootstrap card) de un producto: imagen, nombre, precio y descripción.
function TarjetaVideojuego({ juego, onAgregarAlCarrito }) {
  return (
    <article className="card tarjeta-juego h-100">
      <img
        src={juego.imagen}
        className="card-img-top"
        alt={juego.nombre}
        onError={(e) => {
          e.currentTarget.onerror = null
          e.currentTarget.src = 'img/placeholder.svg'
        }}
      />
      <div className="card-body d-flex flex-column">
        <span className="badge etiqueta-categoria align-self-start mb-2">{juego.categoria}</span>
        <h3 className="card-title h5">{juego.nombre}</h3>
        <p className="card-text flex-grow-1">{juego.descripcion}</p>
        <p className="precio">{formatoPrecio.format(juego.precio)}</p>
        <button type="button" className="btn btn-neon btn-sm" onClick={() => onAgregarAlCarrito(juego.id)}>
          🛒 Agregar al carrito
        </button>
      </div>
    </article>
  )
}

export default TarjetaVideojuego
