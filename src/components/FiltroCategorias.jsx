// Botones de filtro. Recibe por props la lista de categorías, la activa
// y la función que actualiza el estado en App.
function FiltroCategorias({ categorias, categoriaActiva, onCambiarCategoria }) {
  return (
    <div className="filtros" role="group" aria-label="Filtrar por categoría">
      {categorias.map((cat) => (
        <button
          key={cat}
          type="button"
          className={`btn btn-filtro ${cat === categoriaActiva ? 'activo' : ''}`}
          onClick={() => onCambiarCategoria(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  )
}

export default FiltroCategorias
