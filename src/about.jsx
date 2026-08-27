import React, { useEffect, useRef } from 'react';
import './About.css';

function About() {
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
      { threshold: 0.2 } // Se activa cuando se visualiza el 20% de la sección
    );

    const elements = sectionRef.current.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="about" ref={sectionRef}>
      <div className="about__container">
        {/* Lado izquierdo: Texto */}
        <div className="about__content">
          <h2 className="about__title reveal">NOSOTROS</h2>
          <p className="about__description reveal">
            Llevamos 13 años con la meta de ayudar a los colombianos con la seguridad
            de sus autos. Nuestra pasión por los autos siempre nos ha motivado a aprender
            sobre ellos y mantenernos actualizados, es lo que nos hace una empresa única.
          </p>
        </div>

        {/* Lado derecho: Contenedor para la imagen */}
        <div className="about__image-box reveal"></div>
      </div>
    </section>
  );
}

export default About;