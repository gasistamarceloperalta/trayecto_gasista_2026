import React from 'react';
const imagenes = import.meta.glob(
  '../assets/images/modulo03/clase_01/*',
  { eager: true }
);
const img = (nombre) => imagenes[`../assets/images/modulo03/clase_01/${nombre}.jpg`]?.default;
export default function Module3Class1() {
  return (
    <>
      <section className="mb-5 bg-body p-4 p-md-5 rounded shadow-sm border-start border-4 border-primary">
        <h3 className="fw-bold mb-4 d-flex align-items-center">
          <i className="bi bi-book-half me-3 text-primary-custom fs-2"></i>
          Clase 01 - 16/04
        </h3>
        
        <p className="text-muted lh-lg mb-5">
          Las tecnologías de las instalaciones de gas comprenden el conjunto de sistemas de conducción (materiales y métodos de unión), dispositivos de seguridad y control, y artefactos de alta eficiencia regulados por normativas (como la NAG-240 y NAG-200) para garantizar la estanqueidad, durabilidad y seguridad en la distribución interna de GN y GLP.
        </p>

        <div className="row g-4 mb-5">
          {/* Módulo I */}
          <div className="col-12">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body p-4">
                <h4 className="fw-bold text-primary-custom mb-3 border-bottom pb-2">Módulo I: Proyecto y Dimensionamiento de Cañerías</h4>
                <div className="mb-4">
                  <h6 className="fw-bold"><i className="bi bi-lightbulb-fill text-warning me-2"></i>Puntos Clave (Explicación Simple):</h6>
                  <p className="text-muted">En este bloque, el instalador aprende que el gas necesita un "camino" del tamaño justo para llegar con fuerza a cada hornalla. Si el tubo es muy fino, el artefacto no funciona bien; si es muy grueso, se gasta dinero de más. Aprendemos a calcular ese diámetro no "a ojo", sino sumando el consumo de cada aparato y midiendo qué tan largo es el recorrido, incluyendo las curvas y llaves (longitud equivalente).</p>
                </div>
                <div>
                  <h6 className="fw-bold mb-3"><i className="bi bi-shield-check text-success me-2"></i>Requerimientos de Seguridad:</h6>
                  <ul className="list-group list-group-flush text-muted">
                    <li className="list-group-item bg-transparent px-0 border-0 d-flex align-items-start">
                      <i className="bi bi-check-circle-fill text-success mt-1 me-3"></i>
                      <span><strong>SÍ:</strong> Determinar el diámetro de la cañería basándose estrictamente en el caudal máximo de gas a utilizar y la longitud total del tramo.</span>
                    </li>
                    <li className="list-group-item bg-transparent px-0 border-0 d-flex align-items-start">
                      <i className="bi bi-check-circle-fill text-success mt-1 me-3"></i>
                      <span><strong>SÍ:</strong> Utilizar las tablas de dimensionamiento (como la Tabla 1 y 4 bis) autorizadas por la norma para asegurar que la caída de presión no afecte el funcionamiento.</span>
                    </li>
                    <li className="list-group-item bg-transparent px-0 border-0 d-flex align-items-start">
                      <i className="bi bi-x-circle-fill text-danger mt-1 me-3"></i>
                      <span><strong>PROHIBIDO:</strong> Dimensionar tramos sin considerar la "longitud equivalente" de los accesorios (codos, tés, llaves), ya que estos generan resistencia al paso del gas.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Módulo II */}
          <div className="col-12">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body p-4">
                <h4 className="fw-bold text-primary-custom mb-3 border-bottom pb-2">Módulo II: Conexiones de Medición y Elementos de Sellado</h4>
                <div className="mb-4">
                  <h6 className="fw-bold"><i className="bi bi-lightbulb-fill text-warning me-2"></i>Puntos Clave (Explicación Simple):</h6>
                  <p className="text-muted">Aquí nos enfocamos en el "corazón" de la instalación: el medidor. Es el punto donde el gas entra a la casa. Las uniones en esta zona suelen estar sujetas a pequeñas vibraciones o movimientos. Por eso, no usamos cualquier pegamento, sino materiales que no se pongan duros como piedra (no fraguantes) para que la unión absorba ese movimiento sin romperse ni perder gas.</p>
                </div>
                <div>
                  <h6 className="fw-bold mb-3"><i className="bi bi-shield-check text-success me-2"></i>Requerimientos de Seguridad:</h6>
                  <ul className="list-group list-group-flush text-muted">
                    <li className="list-group-item bg-transparent px-0 border-0 d-flex align-items-start">
                      <i className="bi bi-check-circle-fill text-success mt-1 me-3"></i>
                      <span><strong>SÍ:</strong> Emplear únicamente cinta de teflón o pastas sellantes no fraguantes aprobadas por la autoridad competente en las conexiones de medidores.</span>
                    </li>
                    <li className="list-group-item bg-transparent px-0 border-0 d-flex align-items-start">
                      <i className="bi bi-check-circle-fill text-success mt-1 me-3"></i>
                      <span><strong>SÍ:</strong> Verificar las actualizaciones reglamentarias vigentes, como la Resolución ENARGAS RESOL-2024-395, que modifica criterios de materiales de conexión.</span>
                    </li>
                    <li className="list-group-item bg-transparent px-0 border-0 d-flex align-items-start">
                      <i className="bi bi-x-circle-fill text-danger mt-1 me-3"></i>
                      <span><strong>PROHIBIDO:</strong> El uso de materiales de sellado que fragüen totalmente en conexiones sujetas a movimiento, ya que podrían fracturarse y generar fugas.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Módulo III */}
          <div className="col-12">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body p-4">
                <h4 className="fw-bold text-primary-custom mb-3 border-bottom pb-2">Módulo III: Pruebas de Hermeticidad y Seguridad Ambiental</h4>
                <div className="mb-4">
                  <h6 className="fw-bold"><i className="bi bi-lightbulb-fill text-warning me-2"></i>Puntos Clave (Explicación Simple):</h6>
                  <p className="text-muted">Este módulo trata sobre la "prueba de fuego" de nuestro trabajo. Antes de dar gas, debemos inflar la cañería con aire a presión y verificar que no baje ni un poquito durante un tiempo determinado. Es como inflar una rueda y meterla en agua para ver si sale una burbuja; si hay pérdida, la instalación no es apta. También aprendemos dónde "no" deben ir los aparatos, como los sótanos o dormitorios sin la ventilación adecuada.</p>
                </div>
                <div>
                  <h6 className="fw-bold mb-3"><i className="bi bi-shield-check text-success me-2"></i>Requerimientos de Seguridad:</h6>
                  <ul className="list-group list-group-flush text-muted">
                    <li className="list-group-item bg-transparent px-0 border-0 d-flex align-items-start">
                      <i className="bi bi-check-circle-fill text-success mt-1 me-3"></i>
                      <span><strong>SÍ:</strong> Realizar obligatoriamente la prueba de hermeticidad siguiendo el procedimiento de la NAG-200 antes de habilitar cualquier tramo.</span>
                    </li>
                    <li className="list-group-item bg-transparent px-0 border-0 d-flex align-items-start">
                      <i className="bi bi-check-circle-fill text-success mt-1 me-3"></i>
                      <span><strong>SÍ:</strong> Respetar los requisitos de ventilación mínima y dimensiones del ambiente donde se instalarán los artefactos.</span>
                    </li>
                    <li className="list-group-item bg-transparent px-0 border-0 d-flex align-items-start">
                      <i className="bi bi-x-circle-fill text-danger mt-1 me-3"></i>
                      <span><strong>PROHIBIDO:</strong> Instalar artefactos de cámara abierta en dormitorios, baños o sótanos que no cumplan con las restricciones específicas de la norma para evitar acumulaciones peligrosas de gases.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr className="my-5" />

        <div className="mt-4">
          <h3 className="fw-bold text-body mb-4 d-flex align-items-center">
            <i className="bi bi-calculator me-3 text-primary-custom fs-2"></i>
            Presupuesto y Cómputo de Materiales
          </h3>
          <h4 className="fw-bold text-muted mb-4">Instalaciones de Gas en Aulas 3.1 y 3.2</h4>
          
          <div className="row g-4 mb-4">
            {[2,3,4,5].map((item) => (
              <div key={img(item)} className="col-6 col-md-3">
                <div className="ratio ratio-1x1 rounded overflow-hidden shadow-sm">
                  <img src={img(item)} alt={`Imagen de práctica ${item}`} className="img-fluid rounded shadow-sm object-fit-cover" 
      />
                </div>
              </div>
            ))}
          </div>

          <div className="text-muted lh-lg">
            <h5 className="fw-bold text-body mt-4 mb-3">1. Consigna de Trabajo</h5>
            <p>El instructor solicita realizar, en grupos de un máximo de tres integrantes, el relevamiento de los materiales utilizados en las instalaciones de las aulas 3.1 y 3.2. El objetivo es calcular la cantidad total de materiales y determinar el costo final de la obra.</p>

            <h5 className="fw-bold text-body mt-4 mb-3">2. Fundamentos Técnicos del Presupuesto</h5>
            <p>Para presupuestar una instalación de gas, no es suficiente contabilizar los caños lineales. De acuerdo con la normativa vigente, se debe considerar la Longitud Equivalente.</p>
            <div className="alert alert-info border-0 shadow-sm my-4">
              <strong>Concepto clave:</strong> Cada accesorio (codo, tee, llave de paso) ofrece una resistencia al flujo del gas. Esta resistencia se traduce en una "pérdida de carga" que equivale a sumar tramos de caño recto.
            </div>
            <p>Para llegar al diámetro correcto y al costo real, se deben medir las longitudes físicas y sumar los valores adicionales indicados en la Tabla Nº 18 del apéndice de la normativa.</p>

            <h5 className="fw-bold text-body mt-4 mb-3">3. Guía de Relevamiento (Pasos Prácticos)</h5>
            <p>Para un relevamiento eficiente, sigue este orden de trabajo:</p>
            <ul className="list-group list-group-flush mb-4">
              <li className="list-group-item bg-transparent px-0"><strong>Diseñar el croquis de planta:</strong> Realizar un esquema unifilar de la instalación desde el punto de conexión (medidor) hasta cada artefacto.</li>
              <li className="list-group-item bg-transparent px-0"><strong>Medir tramos rectos:</strong> Utilizar cinta métrica para registrar la longitud real de cada cañería.</li>
              <li className="list-group-item bg-transparent px-0"><strong>Contabilizar accesorios:</strong> Anotar la cantidad exacta de codos (90° y 45°), tees, cuplas y llaves de paso por aula.</li>
              <li className="list-group-item bg-transparent px-0"><strong>Identificar materiales:</strong> Verificar si la instalación es de hierro negro con revestimiento epoxi o de polietileno con alma de acero (termofusión).</li>
              <li className="list-group-item bg-transparent px-0"><strong>Calcular el consumo:</strong> Relevar la potencia de los artefactos (kcal/h) para verificar que el diámetro instalado sea el adecuado según el caudal requerido.</li>
            </ul>

            <h5 className="fw-bold text-body mt-4 mb-3">4. Herramientas Necesarias</h5>
            <div className="row g-3 mb-4">
              <div className="col-md-6 col-lg-3">
                <div className="p-3 border rounded text-center bg-body h-100 shadow-sm">
                  <i className="bi bi-rulers fs-2 text-primary-custom d-block mb-2"></i>
                  <strong>Cinta métrica</strong>
                  <br/><small>(mín. 5 m): Para longitudes reales.</small>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="p-3 border rounded text-center bg-body h-100 shadow-sm">
                  <i className="bi bi-tools fs-2 text-primary-custom d-block mb-2"></i>
                  <strong>Calibre</strong>
                  <br/><small>Fundamental para identificar diámetros exteriores en caños.</small>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="p-3 border rounded text-center bg-body h-100 shadow-sm">
                  <i className="bi bi-segmented-nav fs-2 text-primary-custom d-block mb-2"></i>
                  <strong>Nivel de mano</strong>
                  <br/><small>Para verificar pendientes y fijaciones reglamentarias.</small>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="p-3 border rounded text-center bg-body h-100 shadow-sm">
                  <i className="bi bi-table fs-2 text-primary-custom d-block mb-2"></i>
                  <strong>Planilla de cómputo</strong>
                  <br/><small>Para volcar datos (Diámetro | Cantidad | Accesorio | Precio).</small>
                </div>
              </div>
            </div>

            <h5 className="fw-bold text-body mt-4 mb-3">5. Errores Comunes y Prevención</h5>
            <ul className="list-group list-group-flush mb-4">
              <li className="list-group-item bg-transparent px-0">
                <strong>Omitir protecciones:</strong> No presupuestar la pintura epoxi para accesorios que sufrieron daños en el revestimiento durante el montaje o el sellador de roscas.
              </li>
              <li className="list-group-item bg-transparent px-0">
                <strong>Ignorar el factor de simultaneidad:</strong> No prever si la instalación soportará el encendido de todos los artefactos al mismo tiempo.
              </li>
              <li className="list-group-item bg-transparent px-0">
                <strong>No contemplar el desperdicio:</strong> Se recomienda comprar entre un 5% y 10% adicional de cañería para compensar recortes y roscas.
              </li>
              <li className="list-group-item bg-transparent px-0">
                <strong>Corrosión galvánica:</strong> Evitar la unión de metales diferentes sin el aislamiento eléctrico (unión doble aislante) correspondiente.
              </li>
            </ul>

            <h5 className="fw-bold text-body mt-4 mb-3">6. Normativa Argentina Aplicable (NAG-200)</h5>
            <p>Toda la ejecución se rige por las Disposiciones y normas mínimas para la ejecución de instalaciones domiciliarias de gas:</p>
            <ul className="list-group list-group-flush mb-4">
              <li className="list-group-item bg-transparent px-0"><strong>Capítulo III:</strong> Normas sobre la prolongación domiciliaria y especificaciones de materiales.</li>
              <li className="list-group-item bg-transparent px-0"><strong>Tabla Nº 18:</strong> Referencia obligatoria para el cálculo de longitudes equivalentes.</li>
              <li className="list-group-item bg-transparent px-0"><strong>Cálculo de diámetros:</strong> Basado en la pérdida de carga admitida y la densidad del gas.</li>
            </ul>

            <h5 className="fw-bold text-body mt-5 mb-4 border-top pt-4">Documentos</h5>
            <div className="row g-3">
              <div className="col-md-6">
                <div className="p-3 border rounded d-flex justify-content-between align-items-center bg-body-secondary hover-shadow transition-all h-100">
                  <div className="d-flex align-items-center">
                    <i className="bi bi-file-earmark-spreadsheet-fill text-success fs-3 me-3"></i>
                    <div>
                      <h6 className="mb-1 fw-bold text-body">Planillas de materiales</h6>
                    </div>
                  </div>
                  <button className="btn btn-sm btn-outline-primary rounded-pill px-3">
                    <i className="bi bi-download"></i>
                  </button>
                </div>
              </div>
              <div className="col-md-6">
                <div className="p-3 border rounded d-flex justify-content-between align-items-center bg-body-secondary hover-shadow transition-all h-100">
                  <div className="d-flex align-items-center">
                    <i className="bi bi-file-earmark-spreadsheet-fill text-success fs-3 me-3"></i>
                    <div>
                      <h6 className="mb-1 fw-bold text-body">Planilla de presupuesto</h6>
                    </div>
                  </div>
                  <button className="btn btn-sm btn-outline-primary rounded-pill px-3">
                    <i className="bi bi-download"></i>
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <footer className="text-center mt-5 pt-4 border-top text-muted">
        <p>© 2026 Curso de Trayecto Gasista Estudiante Marcelo Peralta</p>
      </footer>
    </>
  );
}