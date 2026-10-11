import { useState } from 'react'

const inicial = { nombre: '', email: '', mensaje: '' }
const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// Formulario de contacto con validación antes de enviar.
function FormularioContacto() {
  const [datos, setDatos] = useState(inicial)
  const [errores, setErrores] = useState({})
  const [enviado, setEnviado] = useState(false)

  const cambiar = (e) => {
    setDatos({ ...datos, [e.target.name]: e.target.value })
    setEnviado(false)
  }

  const validar = () => {
    const err = {}
    if (!datos.nombre.trim()) err.nombre = 'El nombre es obligatorio.'
    else if (datos.nombre.trim().length < 3) err.nombre = 'El nombre debe tener al menos 3 caracteres.'

    if (!datos.email.trim()) err.email = 'El email es obligatorio.'
    else if (!regexEmail.test(datos.email.trim())) err.email = 'Ingresa un email válido (ej: nombre@correo.com).'

    if (!datos.mensaje.trim()) err.mensaje = 'El mensaje es obligatorio.'
    else if (datos.mensaje.trim().length < 10) err.mensaje = 'El mensaje debe tener al menos 10 caracteres.'
    return err
  }

  const enviar = (e) => {
    e.preventDefault()
    const err = validar()
    setErrores(err)
    if (Object.keys(err).length > 0) {
      setEnviado(false)
      return
    }
    // Aquí iría el envío real al administrador; en este proyecto solo se simula.
    setEnviado(true)
    setDatos(inicial)
  }

  const clase = (campo) => `form-control ${errores[campo] ? 'is-invalid' : ''}`

  return (
    <form className="formulario" onSubmit={enviar} noValidate>
      {enviado && (
        <div className="alert alert-success" role="alert">
          ¡Mensaje enviado! El administrador te responderá pronto.
        </div>
      )}
      {Object.keys(errores).length > 0 && !enviado && (
        <div className="alert alert-danger" role="alert">
          Revisa los campos marcados en rojo antes de enviar.
        </div>
      )}

      <div className="mb-3">
        <label htmlFor="c-nombre" className="form-label">Nombre</label>
        <input id="c-nombre" name="nombre" className={clase('nombre')} value={datos.nombre} onChange={cambiar} />
        <div className="invalid-feedback">{errores.nombre}</div>
      </div>
      <div className="mb-3">
        <label htmlFor="c-email" className="form-label">Email</label>
        <input id="c-email" name="email" type="email" className={clase('email')} value={datos.email} onChange={cambiar} />
        <div className="invalid-feedback">{errores.email}</div>
      </div>
      <div className="mb-3">
        <label htmlFor="c-mensaje" className="form-label">Mensaje</label>
        <textarea id="c-mensaje" name="mensaje" rows="4" className={clase('mensaje')} value={datos.mensaje} onChange={cambiar}></textarea>
        <div className="invalid-feedback">{errores.mensaje}</div>
      </div>
      <button type="submit" className="btn btn-neon">Enviar mensaje</button>
    </form>
  )
}

export default FormularioContacto
