import React, { useEffect, useRef } from 'react';
import './Servicios.css';

function Services() {
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
      { threshold: 0.15 } // Se activa cuando se ve el 15% de la sección
    );

    const elements = sectionRef.current.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="services" ref={sectionRef}>
      <div className="services__container">
        <h2 className="services__title reveal">NUESTROS SERVICIOS</h2>
        <p className="services__description reveal">
          En IMPORTADORA CASALOMA nos hemos convertido en la opción de confianza para los conductores
          que se conforman con nada menos que una atención y calidad excepcionales.
        </p>

        {/* Grid de las 3 tarjetas */}
        <div className="services__grid">
          <div className="services__card reveal"></div>
          <div className="services__card reveal"></div>
          <div className="services__card reveal"></div>
        </div>
      </div>
    </section>
  );
}

export default Services;