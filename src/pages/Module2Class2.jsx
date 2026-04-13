import React from 'react';
const imagenes = import.meta.glob(
  '../assets/images/modulo02/clase_02/*',
  { eager: true }
);
const img = (nombre) => imagenes[`../assets/images/modulo02/clase_02/${nombre}`]?.default;
export default function Module2Class2() {
  return (
    <>
      <section className="mb-5 bg-body p-4 p-md-5 rounded shadow-sm border-start border-4 border-primary">
        <h3 className="fw-bold mb-4 d-flex align-items-center">
          <i className="bi bi-book-half me-3 text-primary-custom fs-2"></i>
          Clase 02 - 08/04
        </h3>
        <div className="text-muted lh-lg">
          <h4 className="fw-bold text-body mt-4 mb-3">📋 Actividades Realizadas</h4>
          <ul className="list-group list-group-flush mb-4">
            <li className="list-group-item bg-transparent px-0">
              <strong>Debate grupal:</strong> Se realizó una puesta en común oral del cuestionario desarrollado por el equipo, con el fin de incentivar el análisis y el pensamiento crítico entre los estudiantes.
            </li>
            <li className="list-group-item bg-transparent px-0">
              <strong>Práctica técnica:</strong> Se prosiguió con las tareas de desmontaje de la instalación.
            </li>
          </ul>
        </div>
      </section>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="ratio ratio-4x3 rounded overflow-hidden shadow-sm">
              <img src={img('desarme_02.jpg')} alt="Práctica de desarme 2" className="img-fluid rounded shadow-sm  object-fit-cover" />
            </div>
          </div>
        </div>
      <footer className="text-center mt-5 pt-4 border-top text-muted">
        <p>© 2026 Curso de Trayecto Gasista Estudiante Marcelo Peralta</p>
      </footer>
    </>
  );
}