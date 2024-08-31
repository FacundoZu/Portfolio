// src/components/Projects.js
import React from 'react';

function Projects() {
  return (
    <section id="projects" className="section projects">
      <h2 className="section-title">Proyectos</h2>
      <div className="project">
        <h3 className="project-title">Proyecto 1</h3>
        <p className="project-description">Descripción del proyecto 1.</p>
      </div>
      <div className="project">
        <h3 className="project-title">Proyecto 2</h3>
        <p className="project-description">Descripción del proyecto 2.</p>
      </div>
      {/* Agrega más proyectos aquí */}
    </section>
  );
}

export default Projects;