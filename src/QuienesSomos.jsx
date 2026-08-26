import React from 'react';
import './QuienesSomos.css';

function QuienesSomos() {
  return (
    <section className="quienes-somos">
      <div className="quienes-somos__contenedor">
        {/* Lado izquierdo: Imagen */}
        <div className="quienes-somos__caja-imagen"></div>

        {/* Lado derecho: Texto */}
        <div className="quienes-somos__contenido">
          <h2 className="quienes-somos__titulo">¿QUIENES SOMOS?</h2>
          <p className="quienes-somos__descripcion">
            Somos más que un servicio de reparación y reemplazo de parabrisas - somos un equipo dedicado y apasionado por garantizar su seguridad y comodidad en la carretera.
          </p>
          <p className="quienes-somos__descripcion">
            Situado en Bogotá, nos especializamos en ofrecer soluciones de alta calidad, fiables y eficientes de vidrio de automóviles adaptados a sus necesidades.
          </p>
        </div>
      </div>

      {/* Línea divisora horizontal */}
      <div className="quienes-somos__divisor"></div>
    </section>
  );
}

export default QuienesSomos;