// src/components/Header.js
import React from 'react';

function Header() {
  return (
    <header className="header">
      <h1 className="header-title">Mi Portafolio</h1>
      <nav className="nav">
        <a className="nav-link" href="#home">Inicio</a>
        <a className="nav-link" href="#about">Sobre mí</a>
        <a className="nav-link" href="#projects">Proyectos</a>
        <a className="nav-link" href="#contact">Contacto</a>
      </nav>
    </header>
  );
}

export default Header;