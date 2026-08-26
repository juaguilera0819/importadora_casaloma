import React from 'react';
import './Catalogo.css';

const productosMock = [
  { id: 1, nombre: 'Aromatizante para carro Carblock', precio: '$50.000', imagen: 'https://via.placeholder.com/200' },
  { id: 2, nombre: 'Quitaolores para carros 500ml', precio: '$50.000', imagen: 'https://via.placeholder.com/200' },
  { id: 3, nombre: 'Aromatizante para carro Carblock', precio: '$50.000', imagen: 'https://via.placeholder.com/200' },
  { id: 4, nombre: 'Quitaolores para carros 500ml', precio: '$50.000', imagen: 'https://via.placeholder.com/200' },
  { id: 5, nombre: 'Aromatizante para carro Carblock', precio: '$50.000', imagen: 'https://via.placeholder.com/200' },
  { id: 6, nombre: 'Quitaolores para carros 500ml', precio: '$50.000', imagen: 'https://via.placeholder.com/200' },
  { id: 7, nombre: 'Aromatizante para carro Carblock', precio: '$50.000', imagen: 'https://via.placeholder.com/200' },
  { id: 8, nombre: 'Quitaolores para carros 500ml', precio: '$50.000', imagen: 'https://via.placeholder.com/200' },
  { id: 9, nombre: 'Aromatizante para carro Carblock', precio: '$50.000', imagen: 'https://via.placeholder.com/200' },
  { id: 10, nombre: 'Quitaolores para carros 500ml', precio: '$50.000', imagen: 'https://via.placeholder.com/200' },
  { id: 11, nombre: 'Aromatizante para carro Carblock', precio: '$50.000', imagen: 'https://via.placeholder.com/200' },
  { id: 12, nombre: 'Quitaolores para carros 500ml', precio: '$50.000', imagen: 'https://via.placeholder.com/200' },
  { id: 13, nombre: 'Aromatizante para carro Carblock', precio: '$50.000', imagen: 'https://via.placeholder.com/200' },
  { id: 14, nombre: 'Quitaolores para carros 500ml', precio: '$50.000', imagen: 'https://via.placeholder.com/200' },
  { id: 15, nombre: 'Aromatizante para carro Carblock', precio: '$50.000', imagen: 'https://via.placeholder.com/200' },
  { id: 16, nombre: 'Quitaolores para carros 500ml', precio: '$50.000', imagen: 'https://via.placeholder.com/200' },
  { id: 17, nombre: 'Aromatizante para carro Carblock', precio: '$50.000', imagen: 'https://via.placeholder.com/200' },
  { id: 18, nombre: 'Quitaolores para carros 500ml', precio: '$50.000', imagen: 'https://via.placeholder.com/200' },
  { id: 19, nombre: 'Aromatizante para carro Carblock', precio: '$50.000', imagen: 'https://via.placeholder.com/200' },
  { id: 20, nombre: 'Quitaolores para carros 500ml', precio: '$50.000', imagen: 'https://via.placeholder.com/200' },
  { id: 21, nombre: 'Aromatizante para carro Carblock', precio: '$50.000', imagen: 'https://via.placeholder.com/200' },
  { id: 22, nombre: 'Quitaolores para carros 500ml', precio: '$50.000', imagen: 'https://via.placeholder.com/200' },
  { id: 23, nombre: 'Aromatizante para carro Carblock', precio: '$50.000', imagen: 'https://via.placeholder.com/200' },
  { id: 24, nombre: 'Quitaolores para carros 500ml', precio: '$50.000', imagen: 'https://via.placeholder.com/200' },
];

function Catalogo() {
  return (
    <div className="catalogo-page">
      {/* Hero Banner */}
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

      {/* Grilla de 24 Productos */}
      <section className="catalogo-container">
        <div className="products-grid">
          {productosMock.map((producto) => (
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
          ))}
        </div>
      </section>
    </div>
  );
}

export default Catalogo;