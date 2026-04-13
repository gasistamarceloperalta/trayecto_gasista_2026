import React from 'react';
const imagenes = import.meta.glob(
  '../assets/images/modulo01/clase_13/*',
  { eager: true }
);
const img = (nombre) => imagenes[`../assets/images/modulo01/clase_13/${nombre}`]?.default;
export default function Module1Class13() {
  return (
    <>
      <section className="mb-5 bg-body p-4 p-md-5 rounded shadow-sm border-start border-4 border-primary">
        <h3 className="fw-bold mb-4 d-flex align-items-center">
          <i className="bi bi-clipboard-check me-3 text-primary-custom fs-2"></i>
          Informe de Práctica: Prueba de Hermeticidad y Desarme de Instalación
        </h3>
        <div className="text-muted lh-lg">
          <p className="lead text-body">En la clase del día de hoy se procedió a realizar nuevamente la prueba de hermeticidad, la cual no registró pérdida alguna.</p>
          
          <p>Una vez verificada la estanqueidad, se desarmó el circuito y se procedió al orden y guardado de las piezas.</p>
          
          <p>Posteriormente, el grupo colaboró en el desarme de una instalación por parte del Equipo 3 en el aula taller.</p>
          
          <div className="alert alert-info border-info mt-4 mb-4">
            <p className="mb-0">Al finalizar la jornada, el instructor brindó las pautas y especificaciones técnicas relacionadas con el examen de la próxima clase.</p>
          </div>

          <div className="row mt-5 mb-4 g-4">
            <div className="col-md-6 text-center">
              <img src={img('hermeticidad_03.jpg')} alt="Práctica de hermeticidad 1" className="img-fluid rounded shadow-sm w-100 object-fit-cover" />

            </div>
            <div className="col-md-6 text-center">
              <img src={img('hermeticidad_04.jpg')} alt="Práctica de hermeticidad 1" className="img-fluid rounded shadow-sm w-100 object-fit-cover" />

            </div>
          </div>
          
          <p className="text-end mt-5 small text-muted border-top pt-3">© 2026 Curso de Trayecto Gasista Estudiante Marcelo Peralta</p>
        </div>
      </section>
    </>
  );
}