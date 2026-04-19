import React from 'react';

export default function Module2Class5() {
  return (
    <>
      <section className="mb-5 bg-body p-4 p-md-5 rounded shadow-sm border-start border-4 border-primary">
        <h3 className="fw-bold mb-4 d-flex align-items-center">
          <i className="bi bi-book-half me-3 text-primary-custom fs-2"></i>
          Clase 05 - 14/04
        </h3>
        
        <div className="mt-4">
          <h4 className="fw-bold text-body mb-3 border-bottom pb-2">PINTADA DE PARED</h4>
          <p className="text-muted lh-lg">Se continuo con la refacciones y pintada de la pared donde se realizara las instalaciones para la practica.</p>
          <div className="row g-4 mb-4">
            <div className="col-12 col-md-4">
              <div className="ratio ratio-3x4 rounded overflow-hidden shadow-sm">
                <img src="https://picsum.photos/200/300?random=6" alt="Pintada de pared 1" className="object-fit-cover" />
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="ratio ratio-3x4 rounded overflow-hidden shadow-sm">
                <img src="https://picsum.photos/200/300?random=7" alt="Pintada de pared 2" className="object-fit-cover" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h4 className="fw-bold text-body mb-3 border-bottom pb-2">Relaciones Laborales</h4>
          <p className="text-muted lh-lg mb-2"><strong>Temas tratados:</strong></p>
          <ul className="list-group list-group-flush mb-4 text-muted">
            <li className="list-group-item bg-transparent px-0">
              <i className="bi bi-check2-circle text-primary-custom me-2"></i> Entrevista
            </li>
            <li className="list-group-item bg-transparent px-0">
              <i className="bi bi-check2-circle text-primary-custom me-2"></i> CV
            </li>
          </ul>
        </div>
      </section>

      <footer className="text-center mt-5 pt-4 border-top text-muted">
        <p>© 2026 Curso de Trayecto Gasista Estudiante Marcelo Peralta</p>
      </footer>
    </>
  );
}