const formatoPrecio = new Intl.NumberFormat('es-CL', {
  style: 'currency',
  currency: 'CLP',
  maximumFractionDigits: 0,
})

// Carrito de compras: recibe por props los ítems y las funciones para modificarlos.
function Carrito({ items, onEliminar, onVaciar, onComprar }) {
  const total = items.reduce((suma, i) => suma + i.precio * i.cantidad, 0)

  if (items.length === 0) {
    return <p className="text-center sin-resultados">Tu carrito está vacío. Agrega productos desde el catálogo.</p>
  }

  return (
    <div className="formulario">
      <ul className="list-unstyled mb-3">
        {items.map((item) => (
          <li key={item.id} className="item-carrito">
            <span>
              {item.nombre} <small className="text-info">x{item.cantidad}</small>
            </span>
            <span className="d-flex align-items-center gap-3">
              {formatoPrecio.format(item.precio * item.cantidad)}
              <button type="button" className="btn btn-outline-danger btn-sm" onClick={() => onEliminar(item.id)}>
                Quitar 1
              </button>
            </span>
          </li>
        ))}
      </ul>
      <p className="precio text-end">Total: {formatoPrecio.format(total)}</p>
      <div className="d-flex flex-wrap justify-content-end gap-2">
        <button type="button" className="btn btn-outline-light" onClick={onVaciar}>Vaciar carrito</button>
        <button type="button" className="btn btn-neon" onClick={onComprar}>Finalizar compra</button>
      </div>
    </div>
  )
}

export default Carrito
