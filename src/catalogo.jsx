import React from 'react';
import { useLocation } from 'react-router-dom';
import './Catalogo.css';

// Importación de las imágenes desde la carpeta externa "../imagenes"
import imgAromatizante from '../imagenes/aromatizante.jpg';
import imgQuitaOlores from '../imagenes/quitaolores.png';

// Generación de productos alternando las imágenes según el tipo
const productosMock = Array.from({ length: 24 }, (_, index) => {
  const esAromatizante = index % 2 === 0;
  return {
    id: index + 1,
    nombre: esAromatizante
      ? 'Aromatizante para carro Carblock'
      : 'Quitaolores para carros 500ml',
    precio: '$50.000',
    imagen: esAromatizante ? imgAromatizante : imgQuitaOlores,
  };
});

function Catalogo() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get('search') || '';

  const productosFiltrados = productosMock.filter((producto) =>
    producto.nombre.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="catalogo-page">
      <section className="catalogo-hero">
        <div className="catalogo-hero__content">
          <h1 className="catalogo-hero__title">
            CATÁLOGO DE<br />PRODUCTOS
          </h1>
          <p className="catalogo-hero__description">
            Explora nuestra amplia variedad de autopartes y componentes importados de la más alta calidad. Filtra por marca, modelo o categoría para encontrar la pieza exacta que tu vehículo necesita con entrega rápida y garantía.
          </p>
          <a
            href="https://wa.me/573856693012"
            target="_blank"
            rel="noopener noreferrer"
            className="catalogo-hero__btn"
          >
            CONTÁCTANOS
          </a>
        </div>
      </section>

      <section className="catalogo-container">
        <div className="products-grid">
          {productosFiltrados.length > 0 ? (
            productosFiltrados.map((producto) => (
              <div key={producto.id} className="product-card">
                <div className="product-card__image-container">
                  <img
                    src={producto.imagen}
                    alt={producto.nombre}
                    className="product-card__image"
                  />
                </div>
                <div className="product-card__info">
                  <h3 className="product-card__name">{producto.nombre}</h3>
                  <span className="product-card__price">{producto.precio}</span>
                </div>
              </div>
            ))
          ) : (
            <p>No se encontraron productos que coincidan con "{searchQuery}".</p>
          )}
        </div>
      </section>
    </div>
  );
}

export default Catalogo;