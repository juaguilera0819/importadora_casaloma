import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logoImg from '../imagenes/LOGO.png';
import './header.css';

// Importación de las imágenes del aromatizante (rosa) y quitaolores (azul)
import imgAromatizante from '../imagenes/aromatizante.jpg';
import imgQuitaOlores from '../imagenes/quitaolores.png';

// Productos mock con las imágenes correspondientes asignadas
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

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const searchContainerRef = useRef(null);
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // Filtrar sugerencias a medida que se escribe
  const sugerencias = searchTerm.trim() === '' 
    ? [] 
    : productosMock.filter((p) =>
        p.nombre.toLowerCase().includes(searchTerm.toLowerCase())
      );

  const handleSearch = (termToSearch = searchTerm) => {
    setShowDropdown(false);
    if (termToSearch.trim()) {
      navigate(`/catalogo?search=${encodeURIComponent(termToSearch.trim())}`);
    } else {
      navigate('/catalogo');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleSelectProduct = (nombreProducto) => {
    setSearchTerm(nombreProducto);
    handleSearch(nombreProducto);
  };

  // Cerrar el desplegable si se hace clic fuera del buscador
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target)
      ) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link to="/" className="site-header__logo" onClick={closeMenu}>
          <img src={logoImg} alt="Importadora Casaloma Logo" className="site-header__logo-img" />
        </Link>

        {/* Contenedor del Buscador con Autocompletado */}
        <div className="site-header__search-container" ref={searchContainerRef}>
          <input
            type="text"
            className="site-header__search-input"
            placeholder="Buscar productos..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setShowDropdown(true);
            }}
            onFocus={() => setShowDropdown(true)}
            onKeyDown={handleKeyDown}
          />
          <button
            className="site-header__search-btn"
            aria-label="Buscar"
            onClick={() => handleSearch()}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>

          {/* Menú Desplegable con Imágenes y Resultados */}
          {showDropdown && searchTerm.trim() !== '' && (
            <div className="search-results-dropdown">
              {sugerencias.length > 0 ? (
                sugerencias.map((producto) => (
                  <div
                    key={producto.id}
                    className="search-results-dropdown__item"
                    onClick={() => handleSelectProduct(producto.nombre)}
                  >
                    <img
                      src={producto.imagen}
                      alt={producto.nombre}
                      className="search-results-dropdown__img"
                    />
                    <div className="search-results-dropdown__info">
                      <span className="search-results-dropdown__title">{producto.nombre}</span>
                      <span className="search-results-dropdown__price">{producto.precio}</span>
                    </div>
                  </div>
                ))
              ) : (
                <div className="search-results-dropdown__no-results">
                  No se encontraron productos
                </div>
              )}
            </div>
          )}
        </div>

        <nav className="site-header__nav">
          <Link to="/">INICIO</Link>
          <Link to="/catalogo">CATÁLOGO</Link>
        </nav>

        <button className={`site-header__hamburger ${isMenuOpen ? 'is-active' : ''}`} onClick={toggleMenu} aria-label="Abrir menú">
          <span></span><span></span><span></span>
        </button>
      </div>

      <nav className={`site-header__mobile-menu ${isMenuOpen ? 'is-open' : ''}`}>
        <Link to="/" onClick={closeMenu}>INICIO</Link>
        <Link to="/catalogo" onClick={closeMenu}>CATÁLOGO</Link>
      </nav>
    </header>
  );
};

export default Header;