import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../imagenes/LOGO.png'; // 1. Importas la imagen aquí
import './header.css';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="site-header">
      <div className="site-header__inner">
        {/* Logo con imagen */}
        <Link to="/" className="site-header__logo" onClick={closeMenu}>
          <img 
            src={logoImg} /* 2. Usas la variable aquí */
            alt="Importadora Casaloma Logo" 
            className="site-header__logo-img" 
          />
        </Link>

        {/* Buscador */}
        <div className="site-header__search-container">
          <input
            type="text"
            className="site-header__search-input"
            placeholder="Buscar productos..."
          />
          <button className="site-header__search-btn" aria-label="Buscar">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>
        </div>

        {/* Navegación Desktop */}
        <nav className="site-header__nav">
          <Link to="/">INICIO</Link>
          <Link to="/catalogo">CATÁLOGO</Link>
        </nav>

        {/* Botón Hamburguesa */}
        <button
          className={`site-header__hamburger ${isMenuOpen ? 'is-active' : ''}`}
          onClick={toggleMenu}
          aria-label="Abrir menú"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Menú Desplegable Responsivo */}
      <nav className={`site-header__mobile-menu ${isMenuOpen ? 'is-open' : ''}`}>
        <Link to="/" onClick={closeMenu}>
          INICIO
        </Link>
        <Link to="/catalogo" onClick={closeMenu}>
          CATÁLOGO
        </Link>
      </nav>
    </header>
  );
};

export default Header;