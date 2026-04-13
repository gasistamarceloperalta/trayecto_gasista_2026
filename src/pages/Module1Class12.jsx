import React from 'react';
const imagenes = import.meta.glob(
  '../assets/images/modulo01/clase_12/*',
  { eager: true }
);
const img = (nombre) => imagenes[`../assets/images/modulo01/clase_12/${nombre}`]?.default;

export default function Module1Class12() {
  return (
    <>
      <section className="mb-5 bg-body p-4 p-md-5 rounded shadow-sm border-start border-4 border-primary">
        <h3 className="fw-bold mb-4 d-flex align-items-center">
          <i className="bi bi-clipboard-check me-3 text-primary-custom fs-2"></i>
          Informe de Práctica: Prueba de Hermeticidad y Sellado
        </h3>
        <div className="text-muted lh-lg">
          <p className="lead text-body">En la clase del día de hoy se procedió a realizar nuevamente la prueba de hermeticidad, la cual no registró pérdida alguna.</p>
          
          <p>Una vez verificada la estanqueidad, se desarmó el circuito y se comenzó con el sellado utilizando una mezcla de litargirio y glicerina.</p>
          
          <div className="alert alert-info border-info mt-4 mb-4">
            <p className="mb-0">Finalmente, se dejó secar el material para realizar la prueba de hermeticidad definitiva durante la próxima clase.</p>
          </div>

          <div className="row mt-5 mb-4 g-4">
            <div className="col-md-6 text-center">
              <img src={img('hermeticidad_01.jpg')} alt="Práctica de hermeticidad 1" className="img-fluid rounded shadow-sm w-100 object-fit-cover" />
            </div>
            <div className="col-md-6 text-center">
              <img src={img('hermeticidad_02.jpg')} alt="Práctica de hermeticidad 2" className="img-fluid rounded shadow-sm w-100 object-fit-cover" />
            </div>
          </div>
          
          <p className="text-end mt-5 small text-muted border-top pt-3">© 2026 Curso de Trayecto Gasista Estudiante Marcelo Peralta</p>
        </div>
      </section>
    </>
  );
}