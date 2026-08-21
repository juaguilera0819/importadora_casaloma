import React from 'react'
import './app.css'
import Header from './header.jsx'
import Hero from './Hero.jsx'
import Servicios from './Servicios.jsx'
import Nosotros from './About.jsx'
import QuienesSomos from './QuienesSomos.jsx'
import NuestraMision from './NuestraMision.jsx'
import Footer from './Footer.jsx'

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <Hero />
        <Servicios />
        <Nosotros />
        <QuienesSomos />
        <NuestraMision />
      </main>
      <Footer />
    </div>
  )
}

export default App