import React from 'react';

export default function Hero() {
  return (
    <div className="hero-jumbotron text-center">
      <div className="container">
        <h1 className="display-4 fw-bold mb-4">GASISTA MATRICULADO CATEGORÍA 2</h1>
        <p className="lead mb-5 fs-4">Cursada 2026 Formacion Profesional para instalaciones domiciliarias.</p>
        <div>
          <a href="#modulos" className="btn btn-primary-custom btn-lg me-3 px-4 py-2 rounded-pill shadow">Ver Módulos</a>
          <a href="#contacto" className="btn btn-outline-light btn-lg px-4 py-2 rounded-pill">Inscribirse</a>
        </div>
      </div>
    </div>
  );
}
