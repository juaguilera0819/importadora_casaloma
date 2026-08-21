import React from 'react'
import './Servicios.css'

function Services() {
  return (
    <section className="services">
      <div className="services__container">
        <h2 className="services__title">NUESTROS SERVICIOS</h2>
        <p className="services__description">
          En IMPORTADORA CASALOMA nos hemos convertido en la opción de confianza para los conductores
          que se conforman con nada menos que una atención y calidad excepcionales.
        </p>

        {/* Grid de las 3 tarjetas oscuras */}
        <div className="services__grid">
          <div className="services__card"></div>
          <div className="services__card"></div>
          <div className="services__card"></div>
        </div>
      </div>
    </section>
  )
}

export default Services