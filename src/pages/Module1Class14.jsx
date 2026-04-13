import React from 'react';
const imagenes = import.meta.glob(
  '../assets/images/modulo01/clase_14/*',
  { eager: true }
);
const img = (nombre) => imagenes[`../assets/images/modulo01/clase_14/${nombre}`]?.default;
export default function Module1Class14() {
  return (
    <>
      <section className="mb-5 bg-body p-4 p-md-5 rounded shadow-sm border-start border-4 border-primary">
        <h3 className="fw-bold mb-4 d-flex align-items-center">
          <i className="bi bi-file-earmark-text me-3 text-primary-custom fs-2"></i>
          Informe: Examen Teórico y Desmantelamiento de Instalaciones
        </h3>
        <div className="text-muted lh-lg">
          <p className="lead text-body">En la clase de hoy se realizó el examen teórico, el cual constó de 10 preguntas basadas en los conceptos desarrollados en el módulo de instalaciones sanitarias y de gas domiciliario.</p>
          
          <div className="alert alert-warning border-warning mt-4 mb-4">
            <p className="mb-0"><strong>Observación:</strong> Se señaló que algunas de las preguntas presentaban ambigüedades en su formulación, lo que generó confusión en las respuestas dadas.</p>
          </div>

          <p>Una vez finalizado el examen, se continuó con el desarme del resto de las instalaciones de gas en el aula taller.</p>

          <div className="mt-5 mb-4 text-center">
            <img src={img('hermeticidad_05.jpg')} alt="Práctica de hermeticidad 5" className="img-fluid rounded shadow-sm w-100 object-fit-cover" />
          </div>

        </div>
      </section>

      <section className="mb-5 bg-body p-4 p-md-5 rounded shadow-sm border-start border-4 border-info">
        <h3 className="fw-bold mb-4 d-flex align-items-center">
          <i className="bi bi-folder2-open me-3 text-info fs-2"></i>
          Documentación Extra
        </h3>
        <div className="list-group">
          <a href="https://drive.google.com/file/d/1KuOHuz02iDNjcwPxDFH-TX4jmBv883sK/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action d-flex align-items-center p-3">
            <i className="bi bi-file-earmark-pdf-fill me-3 text-danger fs-3"></i>
            <div>
              <h6 className="mb-1 fw-bold">Documento de Apoyo 1</h6>
              <small className="text-muted">Ver en Google Drive</small>
            </div>
          </a>
          <a href="https://drive.google.com/file/d/1xZnyW7JaIG7ZWEDEImxpIOrjMeR8b_7R/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action d-flex align-items-center p-3">
            <i className="bi bi-file-earmark-pdf-fill me-3 text-danger fs-3"></i>
            <div>
              <h6 className="mb-1 fw-bold">Documento de Apoyo 2</h6>
              <small className="text-muted">Ver en Google Drive</small>
            </div>
          </a>
          <a href="https://drive.google.com/file/d/1pdfl0OI-vexILHTgb101tFIPskFP2IXy/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action d-flex align-items-center p-3">
            <i className="bi bi-file-earmark-pdf-fill me-3 text-danger fs-3"></i>
            <div>
              <h6 className="mb-1 fw-bold">Documento de Apoyo 3</h6>
              <small className="text-muted">Ver en Google Drive</small>
            </div>
          </a>
          <a href="https://drive.google.com/file/d/1vqei49kiJeYElAExLq7uFaa0fRoirFhy/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action d-flex align-items-center p-3">
            <i className="bi bi-file-earmark-pdf-fill me-3 text-danger fs-3"></i>
            <div>
              <h6 className="mb-1 fw-bold">Documento de Apoyo 4</h6>
              <small className="text-muted">Ver en Google Drive</small>
            </div>
          </a>
          <a href="https://drive.google.com/file/d/1RToSi04JY0-NECtOoQvfB4oAqkFJ9dIp/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action d-flex align-items-center p-3">
            <i className="bi bi-file-earmark-pdf-fill me-3 text-danger fs-3"></i>
            <div>
              <h6 className="mb-1 fw-bold">Documento de Apoyo 5</h6>
              <small className="text-muted">Ver en Google Drive</small>
            </div>
          </a>
        </div>
      </section>

      <footer className="text-center py-4 mt-5 border-top">
        <p className="text-muted small mb-0">© 2026 Curso de Trayecto Gasista Estudiante Marcelo Peralta</p>
      </footer>
    </>
  );
}