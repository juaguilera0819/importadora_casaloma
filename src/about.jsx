import React from 'react'
import './About.css'

function About() {
  return (
    <section className="about">
      <div className="about__container">
        {/* Lado izquierdo: Texto */}
        <div className="about__content">
          <h2 className="about__title">NOSOTROS</h2>
          <p className="about__description">
            Llevamos 13 años con la meta de ayudar a los colombianos con la seguridad
            de sus autos. Nuestra pasión por los autos siempre nos ha motivado a aprender
            sobre ellos y mantenernos actualizados, es lo que nos hace una empresa única.
          </p>
        </div>

        {/* Lado derecho: Contenedor para la imagen */}
        <div className="about__image-box"></div>
      </div>
    </section>
  )
}

export default About