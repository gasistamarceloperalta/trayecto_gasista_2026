import React from 'react';

const imagenes = import.meta.glob(
  '../assets/images/modulo01/clase_04/*',
  { eager: true }
);
const img = (nombre) => imagenes[`../assets/images/modulo01/clase_04/${nombre}`]?.default;

export default function Module1Class4() {
  return (
    <>
      {/* Instalación de Bomba Presurizadora y Prueba de Hermeticidad */}
      <section className="mb-5 bg-body p-4 p-md-5 rounded shadow-sm border-start border-4 border-primary">
        <h3 className="fw-bold mb-4 d-flex align-items-center">
          <i className="bi bi-gear-wide-connected me-3 text-primary-custom fs-2"></i>
          Instalación de Bomba Presurizadora y Prueba de Hermeticidad
        </h3>
        <div className="text-muted lh-lg">
          
          <h5 className="fw-bold text-body mt-4">1. Preparación de las Uniones</h5>
          <p>Se realizó el acople de las cañerías utilizando dos métodos de sellado según el caso: teflón de alto impacto y cáñamo con pasta selladora. Una vez completadas las uniones, se conformó el circuito para iniciar el control de calidad.</p>
          
          <div className="my-4 text-center">
            <img src={img('fotografia_12_03_2026.jpeg')} alt="Preparación de las Uniones" className="img-fluid rounded shadow-sm"/>
          </div>

          <h5 className="fw-bold text-body mt-4">2. Procedimiento de la Prueba de Hermeticidad</h5>
          <ul>
            <li><strong>Llenado y purgado:</strong> Se introdujo agua al sistema mediante el bombeo. Para eliminar el aire atrapado (purgado), se aflojó un tapón estratégicamente ubicado.</li>
            <li><strong>Sellado:</strong> Una vez que el agua comenzó a fluir de forma constante por el tapón, este se ajustó firmemente.</li>
            <li><strong>Presurización:</strong> Se aplicó una presión de carga de 1.5 kg (o 1 ½ kg) para verificar la resistencia de las uniones.</li>
          </ul>

          <h5 className="fw-bold text-body mt-4">3. Detección y Corrección de Fugas</h5>
          <p>Se debe inspeccionar minuciosamente el circuito en busca de filtraciones. En caso de detectar una pérdida, se marcará el punto afectado, se repasarán las uniones correspondientes y se repetirá la prueba desde el inicio para garantizar la estanqueidad total.</p>

          <div className="row g-3 mt-4">
            <div className="col-md-8 mx-auto">
              <div className="ratio ratio-16x9 rounded overflow-hidden shadow-sm">
                <iframe src="https://www.youtube.com/embed/2ag0ShI47BE" title="Prueba de Hermeticidad" allowFullScreen></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-4 mt-5 border-top">
        <p className="text-muted small mb-0">© 2026 Curso de Trayecto Gasista Estudiante Marcelo Peralta</p>
      </footer>
    </>
  );
}
