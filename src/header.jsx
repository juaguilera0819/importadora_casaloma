import React, { useState } from 'react';
import './header.css';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="site-header">
      <div className="site-header__inner">
        {/* Logo */}
        <a href="#inicio" className="site-header__logo">
          <div className="site-header__logo-badge">IC</div>
          <div className="site-header__logo-text">
            <span className="brand-title">IMPORTADORA</span>
            <span className="brand-subtitle">CASALOMA</span>
          </div>
        </a>

        {/* Buscador */}
        <div className="site-header__search-container">
          <input
            type="text"
            className="site-header__search-input"
            placeholder="Buscar productos..."
          />
          <button className="site-header__search-btn" aria-label="Buscar">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>
        </div>

        {/* Navegación Desktop */}
        <nav className="site-header__nav">
          <a href="#inicio">INICIO</a>
          <a href="#catalogo">CATÁLOGO</a>
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
        <a href="#inicio" onClick={toggleMenu}>INICIO</a>
        <a href="#catalogo" onClick={toggleMenu}>CATÁLOGO</a>
      </nav>
    </header>
  );
};

export default Header;