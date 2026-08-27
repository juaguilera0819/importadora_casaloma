import React, { useEffect, useRef } from 'react';
import './QuienesSomos.css';

function QuienesSomos() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-active');
          }
        });
      },
      { threshold: 0.2 } // Se activa al visualizar el 20% del contenedor
    );

    const elements = sectionRef.current.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="quienes-somos" ref={sectionRef}>
      <div className="quienes-somos__contenedor">
        {/* Lado izquierdo: Imagen */}
        <div className="quienes-somos__caja-imagen reveal"></div>

        {/* Lado derecho: Texto */}
        <div className="quienes-somos__contenido">
          <h2 className="quienes-somos__titulo reveal">¿QUIENES SOMOS?</h2>
          <p className="quienes-somos__descripcion reveal">
            Somos más que un servicio de reparación y reemplazo de parabrisas - somos un equipo dedicado y apasionado por garantizar su seguridad y comodidad en la carretera.
          </p>
          <p className="quienes-somos__descripcion reveal">
            Situado en Bogotá, nos especializamos en ofrecer soluciones de alta calidad, fiables y eficientes de vidrio de automóviles adaptados a sus necesidades.
          </p>
        </div>
      </div>

      {/* Línea divisora horizontal */}
      <div className="quienes-somos__divisor reveal"></div>
    </section>
  );
}

export default QuienesSomos;