import React, { useEffect, useRef } from 'react';
import './NuestraMision.css';

function NuestraMision() {
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
      { threshold: 0.2 } // Se activa al detectar el 20% del componente en pantalla
    );

    const elements = sectionRef.current.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="nuestra-mision" ref={sectionRef}>
      <div className="nuestra-mision__contenedor">
        {/* Lado izquierdo: Texto */}
        <div className="nuestra-mision__contenido">
          <h2 className="nuestra-mision__titulo reveal">NUESTRA MISIÓN</h2>
          <p className="nuestra-mision__descripcion reveal">
            Proveer repuestos automotrices de alta calidad a precios competitivos,
            garantizando la disponibilidad inmediata de autopartes originales y
            homologadas para nuestros clientes. Nos comprometemos a respaldar al
            sector automotor mediante un servicio ágil, asesoría técnica especializada
            y una cadena de distribución eficiente que mantenga cada vehículo en
            movimiento con total seguridad y confianza.
          </p>
        </div>

        {/* Lado derecho: Imagen */}
        <div className="nuestra-mision__caja-imagen reveal"></div>
      </div>
    </section>
  );
}

export default NuestraMision;