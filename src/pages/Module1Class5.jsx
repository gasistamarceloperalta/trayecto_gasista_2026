import React from 'react';

const imagenes = import.meta.glob(
  '../assets/images/modulo01/clase_05/*',
  { eager: true }
);
const img = (nombre) => imagenes[`../assets/images/modulo01/clase_05/${nombre}`]?.default;


export default function Module1Class5() {
  return (
    <>
      {/* La Prueba de Hermeticidad */}
      <section className="mb-5 bg-body p-4 p-md-5 rounded shadow-sm border-start border-4 border-primary">
        <h3 className="fw-bold mb-4 d-flex align-items-center">
          <i className="bi bi-droplet-half me-3 text-primary-custom fs-2"></i>
          La Prueba de Hermeticidad
        </h3>
        <div className="text-muted lh-lg">
          <p>También denominada prueba hidráulica, es el procedimiento fundamental para detectar pérdidas en las uniones de las cañerías de desagüe cloacal y pluvial antes de que la instalación quede oculta.</p>
          <p>A continuación, se detallan los aspectos técnicos, procedimientos y requisitos extraídos de los manuales:</p>
          
          <h5 className="fw-bold text-body mt-4">1. Etapas de las Pruebas</h5>
          <p>Se deben realizar obligatoriamente dos pruebas en distintos momentos de la obra:</p>
          <ul>
            <li><strong>Primera prueba:</strong> Se efectúa antes de las terminaciones (revoques, contrapisos y pisos) para poder detectar y corregir fallas a simple vista.</li>
            <li><strong>Segunda prueba:</strong> Se realiza una vez terminada la instalación, sirviendo para descartar daños que pudieran haber ocurrido durante la etapa de cierre de la obra.</li>
          </ul>

          <h5 className="fw-bold text-body mt-4">2. Procedimiento Técnico</h5>
          <p>El proceso consiste en llenar la instalación con agua y verificar su estanqueidad:</p>
          <ul>
            <li><strong>Obturación:</strong> Se deben tapar provisoriamente todas las bocas abiertas (salidas de inodoros, bocas de acceso, etc.) utilizando tapones de prueba. Estos pueden ser mecánicos (tipo brida), neumáticos ("vejigas" inflables) o de goma.</li>
            <li><strong>Llenado:</strong> Se colman las cañerías con agua limpia hasta un nivel determinado.</li>
            <li><strong>Uso de un "vertical":</strong> Para lograr la presión mínima de ensayo (0,2 kg/cm² o 2 m.c.a.), se suele colocar un caño de aproximadamente 2 metros de altura (el "vertical") en el punto de carga, con un embudo en su extremo superior.</li>
          </ul>

          <h5 className="fw-bold text-body mt-4">3. Criterios de Aceptación</h5>
          <p>Para considerar que la cañería es hermética, debe cumplir lo siguiente:</p>
          <ul>
            <li><strong>Tiempo de observación:</strong> El nivel del agua en el punto de carga debe mantenerse estable durante un mínimo de 2 horas.</li>
            <li><strong>Ausencia de filtraciones:</strong> No deben presentarse exudaciones visibles ni pérdidas de ningún tipo en las uniones o el cuerpo de los caños.</li>
            <li><strong>Asentamiento de materiales:</strong> En caños de hormigón o fibrocemento, se recomienda dejar las cañerías cargadas una noche entera para que el material se sature antes de realizar la medición definitiva, debido a su porosidad.</li>
          </ul>

          <h5 className="fw-bold text-body mt-4">4. Recomendaciones Generales</h5>
          <ul>
            <li><strong>Tramos por separado:</strong> Las cañerías se prueban por tramos (por ejemplo, los tirones de la cañería principal entre cámaras) para facilitar la localización de posibles fallas.</li>
            <li><strong>Uniones pegadas:</strong> Si se utiliza P.V.C. con soldadura en frío o juntas de cemento, se debe esperar al menos 24 horas para que el sellado cure totalmente antes de someterlo a la prueba.</li>
            <li><strong>Dilatación térmica:</strong> Se debe evitar que los tramos a probar estén dilatados por una exposición prolongada al sol, ya que esto podría falsear los resultados.</li>
          </ul>
          <p className="mt-3"><em>En instalaciones de provisión de agua, la prueba de hermeticidad se realiza de forma similar, pero con mayores presiones, utilizando una bomba hidráulica manual para inyectar presión y verificar que no existan fugas en las uniones roscadas o de termofusión.</em></p>

          <div className="my-4 text-center">
            <img src={img('prueba_de_hermeticidad.png')} alt="Prueba de Hermeticidad" className="img-fluid rounded shadow-sm"/>
          </div>

          <div className="row g-3 mt-4">
            <div className="col-md-8 mx-auto">
              <div className="ratio ratio-16x9 rounded overflow-hidden shadow-sm">
                <iframe src="https://www.youtube.com/embed/K6IN3H_xnzg" title="Prueba de Hermeticidad Tutorial" allowFullScreen></iframe>
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
