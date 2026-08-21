import React, { useState, useEffect } from 'react'
import './Hero.css'

// Hook personalizado para el contador animado
function useCounter(endValue, duration = 2000) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTimestamp = null
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp
      const progress = Math.min((timestamp - startTimestamp) / duration, 1)
      setCount(Math.floor(progress * endValue))
      if (progress < 1) {
        window.requestAnimationFrame(step)
      }
    }
    window.requestAnimationFrame(step)
  }, [endValue, duration])

  return count
}

function Hero() {
  const repuestosCount = useCounter(2000, 2000)
  const experienciaCount1 = useCounter(12, 1500)
  const experienciaCount2 = useCounter(12, 1500)

  return (
    <section className="hero">
      <div className="hero__main">
        <div className="hero__content">
          <h1 className="hero__title">
            REPUESTOS DE<br />ALTA CALIDAD
          </h1>
          <p className="hero__description">
            Repuestos y autopartes de la más alta calidad, garantizando el mejor
            desempeño de tu vehículo. Contamos con un catálogo completo de
            repuestos importados para todas las marcas y modelos.
          </p>
          <a href="#catalogo" className="hero__btn">
            VER CATALOGO
          </a>
        </div>
      </div>

      {/* Tarjeta de métricas flotante */}
      <div className="hero__stats-card">
        <div className="hero__stat-item">
          <span className="hero__stat-number">
            {repuestosCount.toLocaleString('es-CO')}
          </span>
          <span className="hero__stat-label">Repuestos y autopartes</span>
        </div>

        <div className="hero__stat-item">
          <span className="hero__stat-number">{experienciaCount1}</span>
          <span className="hero__stat-label">Años de experiencia</span>
        </div>

        <div className="hero__stat-item">
          <span className="hero__stat-number">{experienciaCount2}</span>
          <span className="hero__stat-label">Años de experiencia</span>
        </div>
      </div>
    </section>
  )
}

export default Hero