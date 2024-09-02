// src/components/Header.js
import React from 'react';

function Nav() {
  return (
    <header className="header">
      <div className='header-info'>
        <h1 className="header-title">FZ</h1>
        <nav className="nav ">
          <a className="nav-link" href="#about">Inicio</a>
          <a className="nav-link" href="#home">Sobre mí</a>
          <a className="nav-link" href="#projects">Proyectos</a>
          <a className="nav-link" href="#contact">Contacto</a>
        </nav>
      </div>
    </header>
  );
}

export default Nav;