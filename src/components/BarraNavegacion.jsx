// Barra de navegación (Bootstrap 5). Recibe por props la cantidad de ítems del carrito.
function BarraNavegacion({ totalCarrito }) {
  return (
    <nav className="navbar navbar-expand-md navbar-dark barra-nav sticky-top">
      <div className="container">
        <a className="navbar-brand fw-bold" href="#inicio">
          🎮 Game Over
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menuPrincipal"
          aria-controls="menuPrincipal"
          aria-expanded="false"
          aria-label="Abrir menú"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="menuPrincipal">
          <ul className="navbar-nav ms-auto gap-md-2">
            <li className="nav-item">
              <a className="nav-link" href="#inicio">Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#productos">Productos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#carrito">
                🛒 Carrito <span className="badge bg-info text-dark">{totalCarrito}</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contacto">Contacto</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default BarraNavegacion
