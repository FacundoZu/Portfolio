// src/components/Projects.js
import React from 'react';

function Projects() {
  return (
    <section id="projects" className="section projects">
      <h2 className="section-title">Proyectos</h2>
      <div className="project">
        <h3 className="project-title">Proyecto 1</h3>
        <img src="..\public\default.jpg" />
        <p className="project-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste illum accusantium quos ipsum, cupiditate dignissimos accusamus omnis, dolore doloribus reprehenderit rem laudantium sint qui, odit quasi sed error! Consectetur, sit!Descripción del proyecto 1.</p>
        <section className="enlaces">
          <h3>Ver en</h3>
          <a href="">Web</a>
          <a href="">Github</a>
        </section>
      </div>
      <div className="project">
        <h3 className="project-title">Proyecto 2</h3>
        <img src="..\public\default.jpg" />
        <p className="project-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste illum accusantium quos ipsum, cupiditate dignissimos accusamus omnis, dolore doloribus reprehenderit rem laudantium sint qui, odit quasi sed error! Consectetur, sit!Descripción del proyecto 1.</p>
        <section className="enlaces">
          <h3>Ver en</h3>
          <a href="">Web</a>
          <a href="">Github</a>
        </section>
      </div>
      {/* Agrega más proyectos aquí */}
    </section>
  );
}

export default Projects;