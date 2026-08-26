import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import './app.css'
import Header from './header.jsx'
import Hero from './Hero.jsx'
import Servicios from './Servicios.jsx'
import Nosotros from './About.jsx'
import QuienesSomos from './QuienesSomos.jsx'
import NuestraMision from './NuestraMision.jsx'
import Catalogo from './catalogo.jsx'
import Footer from './Footer.jsx'

// Helper para resetear el scroll arriba cada vez que cambia la ruta
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// Componente para agrupar todas las secciones de la página de Inicio
function Inicio() {
  return (
    <>
      <Hero />
      <Servicios />
      <Nosotros />
      <QuienesSomos />
      <NuestraMision />
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="app">
        <Header />
        <main className="main">
          <Routes>
            {/* Ruta principal (Inicio) */}
            <Route path="/" element={<Inicio />} />
            
            {/* Ruta para la vista independiente del Catálogo */}
            <Route path="/catalogo" element={<Catalogo />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App