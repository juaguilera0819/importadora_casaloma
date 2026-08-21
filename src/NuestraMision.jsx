import React from 'react'
import './NuestraMision.css'

function NuestraMision() {
  return (
    <section className="nuestra-mision">
      <div className="nuestra-mision__contenedor">
        {/* Lado izquierdo: Texto */}
        <div className="nuestra-mision__contenido">
          <h2 className="nuestra-mision__titulo">NUESTRA MISIÓN</h2>
          <p className="nuestra-mision__descripcion">
            Proveer repuestos automotrices de alta calidad a precios competitivos,
            garantizando la disponibilidad inmediata de autopartes originales y
            homologadas para nuestros clientes. Nos comprometemos a respaldar al
            sector automotor mediante un servicio ágil, asesoría técnica especializada
            y una cadena de distribución eficiente que mantenga cada vehículo en
            movimiento con total seguridad y confianza.
          </p>
        </div>

        {/* Lado derecho: Contenedor para la imagen */}
        <div className="nuestra-mision__caja-imagen"></div>
      </div>
    </section>
  )
}

export default NuestraMision