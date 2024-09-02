// src/App.js
import React from 'react';
import './App.css';
import Nav from './components/Nav.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import { Home } from './components/Home.jsx';

function App() {
  return (
    <div>
        <Nav />
        <Home />
        <About />
        <Projects />
        <Contact />
        <Footer />
    </div>
  );
}

export default App;
