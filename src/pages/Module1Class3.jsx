import React from 'react';
const imagenes = import.meta.glob(
  '../assets/images/modulo01/clase_03/*',
  { eager: true }
);
const img = (nombre) => imagenes[`../assets/images/modulo01/clase_03/${nombre}`]?.default;

export default function Module1Class3() {
  return (
    <>
      {/* Ruptor de Vacío */}
      <section className="mb-5 bg-body p-4 p-md-5 rounded shadow-sm border-start border-4 border-primary">
        <h3 className="fw-bold mb-4 d-flex align-items-center">
          <i className="bi bi-pipe me-3 text-primary-custom fs-2"></i>
          Ruptor de Vacío
        </h3>
        <div className="text-muted lh-lg">
          <p>Un ruptor de vacío es un dispositivo o configuración de cañería esencial para garantizar la salubridad del agua en las instalaciones domiciliarias.</p>
          
          <h5 className="fw-bold text-body mt-4">1. Definición y Función</h5>
          <p>El ruptor de vacío es una cañería de ventilación de colocación obligatoria en las columnas de bajada que alimentan artefactos considerados "peligrosos". Su función principal es abrir la cañería al exterior para evitar que se produzca un vacío en su interior.</p>

          <h5 className="fw-bold text-body mt-4">2. ¿Qué peligro previene?</h5>
          <p>Sin este dispositivo, si se produce un corte o caída de presión, el agua contenida en una bajada podría descender por gravedad generando un vacío (succión). Esta succión puede aspirar agua servida o contaminada desde un artefacto donde la entrada de agua esté sumergida (como un bidet, un lavarropas o una ducha manual dejada dentro de una bañera llena) y distribuirla hacia otros grifos de la casa ubicados en niveles inferiores.</p>

          <h5 className="fw-bold text-body mt-4">3. Ubicación y Requisitos de Instalación</h5>
          <ul>
            <li><strong>Punto de origen:</strong> Debe nacer al comienzo de la cañería de bajada, inmediatamente por debajo de la llave de paso de cierre general de esa bajada.</li>
            <li><strong>Remate superior:</strong> Su extremo superior debe elevarse por encima del nivel del "techo" del tanque de reserva.</li>
            <li><strong>Terminación:</strong> Debe terminar en una curva en "U" invertida (hacia abajo) y contar con una malla fina de material inoxidable para impedir el ingreso de insectos o impurezas.</li>
            <li><strong>Sifón invertido:</strong> En las conexiones directas desde la red externa, se utiliza un "sifón invertido" que incorpora una válvula de aire o ruptor de vacío para evitar que el agua ya ingresada a la casa retroceda hacia la red pública si esta pierde presión.</li>
          </ul>

          <h5 className="fw-bold text-body mt-4">4. Artefactos que lo requieren</h5>
          <p>Es obligatorio para todas las bajadas que alimenten artefactos donde el nivel de agua pueda superar el nivel de la entrada, tales como:</p>
          <ul>
            <li><strong>Bidets:</strong> Especialmente aquellos con transferencia o lluvia interna.</li>
            <li>Lavarropas y lavavajillas.</li>
            <li><strong>Válvulas de inodoro:</strong> Cuando se utilizan válvulas automáticas en lugar de depósitos, la columna que las alimenta debe llevar un ruptor de vacío.</li>
          </ul>

          <h5 className="fw-bold text-body mt-4">5. Medidas y Diámetros</h5>
          <ul>
            <li><strong>Diámetro:</strong> Habitualmente se realiza en el mismo material que la bajada. El diámetro se determina según tablas técnicas (como la 5A-10 del manual), con un mínimo de 9 mm y un máximo exigible de 50 mm.</li>
            <li><strong>Altura:</strong> Si la bajada supera los 45 metros de altura, las exigencias de diámetro del ruptor aumentan para asegurar que el aire ingrese con la rapidez necesaria para romper el vacío.</li>
          </ul>
          <p>En los planos de instalaciones sanitarias, este dispositivo se identifica con la abreviatura <strong>R.V.</strong></p>

          <div className="my-4 text-center">
            <img src={img('ruptor_de_vacio.png')} alt="Ruptor de Vacío" className="img-fluid rounded shadow-sm"/>
          </div>

          <div className="row g-3 mt-4">
            <div className="col-md-6">
              <div className="ratio ratio-16x9 rounded overflow-hidden shadow-sm">
                <iframe src="https://www.youtube.com/embed/peaKLzhiR7k" title="Ruptor de Vacío Tutorial" allowFullScreen></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Aparatos del tipo Infrarrojo */}
      <section className="mb-5 bg-body p-4 p-md-5 rounded shadow-sm border-start border-4 border-secondary">
        <h3 className="fw-bold mb-4 d-flex align-items-center">
          <i className="bi bi-wifi me-3 text-secondary-custom fs-2"></i>
          Aparatos del tipo Infrarrojo
        </h3>
        <div className="text-muted lh-lg">
          <p>Se encuentran dentro de la categoría de sistemas "inteligentes" aplicados principalmente a la grifería.</p>
          
          <h5 className="fw-bold text-body mt-4">1. Funcionamiento del Sistema</h5>
          <p>El accionamiento electrónico por infrarrojos sigue un proceso automático de tres pasos:</p>
          <ul>
            <li><strong>Emisión:</strong> Un emisor integrado en la grifería emite permanentemente un haz cónico estrecho de rayos infrarrojos (o ultrasonido, dependiendo del modelo).</li>
            <li><strong>Detección:</strong> Cuando el usuario acerca sus manos, el receptor del aparato capta los rayos reflejados por el cuerpo.</li>
            <li><strong>Activación:</strong> Esta señal activa un módulo electrónico que, a su vez, acciona una electroválvula (válvula eléctrica) para permitir el paso del agua. El flujo se corta automáticamente cuando el usuario retira las manos y el reflejo de los rayos cesa.</li>
          </ul>

          <h5 className="fw-bold text-body mt-4">2. Componentes y Alimentación</h5>
          <ul>
            <li><strong>Módulo electrónico:</strong> Contiene el emisor, el receptor y un amplificador.</li>
            <li><strong>Módulo hidráulico:</strong> Contiene la electroválvula que abre o cierra el paso del agua.</li>
            <li><strong>Fuente de energía:</strong> Estos sistemas pueden estar conectados a la red eléctrica (generalmente de 12 a 24 voltios) o funcionar con baterías de litio o alcalinas.</li>
          </ul>

          <h5 className="fw-bold text-body mt-4">3. Ubicación y Ventajas</h5>
          <ul>
            <li><strong>Instalación:</strong> Los sensores y componentes electrónicos pueden estar integrados en el cuerpo de la grifería o ser externos a ella.</li>
            <li><strong>Aplicaciones:</strong> Su uso es cada vez más frecuente en edificios públicos (como laboratorios, hospitales, aeropuertos o escuelas).</li>
            <li><strong>Beneficios:</strong> Se destacan principalmente por dos razones: la higiene (al evitar el contacto físico con el artefacto) y la economía de agua (ya que el grifo solo permanece abierto mientras se detecta presencia).</li>
          </ul>
          <p>Además de la grifería, el manual menciona que se están incorporando aceleradamente otros complementos electrónicos "inteligentes" en hidrocabinas de ducha que permiten programar funciones como vapor, sauna y distintos tipos de chorros, aunque no especifica el uso de infrarrojos en todos esos casos adicionales.</p>

          <div className="my-4 text-center">
            <img src={img('aparatos_tipo_infrarrojo.png')} alt="Aparatos Infrarrojos" className="img-fluid rounded shadow-sm" referrerPolicy="no-referrer" />
          </div>

          <div className="row g-3 mt-4">
            <div className="col-md-6">
              <div className="ratio ratio-16x9 rounded overflow-hidden shadow-sm">
                <iframe src="https://www.youtube.com/embed/eMsJcN5CIVM" title="Aparatos Infrarrojos Tutorial" allowFullScreen></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ventilación para una Cocina */}
      <section className="mb-5 bg-body p-4 p-md-5 rounded shadow-sm border-start border-4 border-tertiary">
        <h3 className="fw-bold mb-4 d-flex align-items-center">
          <i className="bi bi-wind me-3 text-tertiary-custom fs-2"></i>
          Ventilación para una Cocina
        </h3>
        <div className="text-muted lh-lg">
          <p>Ventilación para el ambiente "Cocina", basado estrictamente en las normativas de seguridad vigentes para instalaciones de gas natural.</p>
          <p>A continuación, se detallan las exigencias reglamentarias para garantizar la correcta evacuación de productos de combustión y la renovación de aire:</p>
          
          <h5 className="fw-bold text-body mt-4">Requisitos de Ventilación para Ambiente Cocina</h5>
          <div className="table-responsive mt-3">
            <table className="table table-bordered table-hover">
              <thead className="table-light">
                <tr>
                  <th>Punto Clave (Respuesta Técnica)</th>
                  <th>Justificación / Referencia Reglamentaria</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Entrada de Aire Exterior (Rejilla Inferior):</strong> Es obligatorio contar con una abertura permanente para la aspiración de aire de combustión. El área libre mínima debe ser de 100 cm².</td>
                  <td>La normativa exige asegurar el aporte de oxígeno necesario para la combustión de las hornallas y el horno, evitando el enrarecimiento del ambiente.</td>
                </tr>
                <tr>
                  <td><strong>Salida de Aire (Rejilla Superior):</strong> Se debe instalar una abertura para la evacuación de aire viciado y productos de combustión. El área libre mínima requerida es de 100 cm².</td>
                  <td>Establecido para permitir la circulación por convección natural, eliminando gases de combustión y exceso de temperatura en la parte superior del local.</td>
                </tr>
                <tr>
                  <td><strong>Ubicación de Rejillas:</strong> La rejilla inferior debe ubicarse en el tercio inferior de la pared (máximo a 30 cm del suelo), mientras que la superior debe estar en el tercio superior (mínimo a 1,80 m del suelo).</td>
                  <td>El diseño busca generar un "barrido" de aire efectivo en todo el volumen del ambiente para prevenir la acumulación de monóxido de carbono (CO).</td>
                </tr>
                <tr>
                  <td><strong>Ventilación de Artefactos:</strong> Si la cocina cuenta con un calefón de tiro natural dentro del mismo ambiente, este requiere su propio conducto de evacuación individual, independiente de las rejillas de ventilación del local.</td>
                  <td>Los artefactos de cámara abierta (no estancos) requieren un sistema de evacuación específico que no debe ser obstruido ni suplantado por la ventilación general.</td>
                </tr>
                <tr>
                  <td><strong>Material y Paso de Aire:</strong> Las rejillas deben ser de material incombustible y su diseño debe garantizar que el área libre efectiva (paso de aire real) coincida con los 100 cm² declarados, considerando la obstrucción de la trama.</td>
                  <td>Requisito de seguridad para evitar que la suciedad o el diseño estético de la rejilla reduzcan el caudal de aire por debajo del límite de seguridad.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h5 className="fw-bold text-body mt-4">Observaciones Técnicas Adicionales</h5>
          <ul>
            <li><strong>Volumen Mínimo:</strong> El local debe poseer un volumen mínimo de 7 m³ para la instalación de una cocina estándar.</li>
            <li><strong>Prohibición de Interconexión:</strong> No se permite que las aberturas de ventilación den a conductos de basura, garajes o dormitorios; deben comunicar directamente con el exterior o con un espacio ventilado permanente.</li>
          </ul>

          <div className="my-4 text-center">
            <img src={img('ventilacion_de_cocina_02.png')} alt="Ventilación para una Cocina" className="img-fluid rounded shadow-sm" referrerPolicy="no-referrer" />
          </div>
        </div>
      </section>

      {/* Catálogo y Bibliografía */}
      <section className="mb-5 bg-body-secondary p-4 p-md-5 rounded shadow-sm">
        <h3 className="fw-bold mb-4 d-flex align-items-center">
          <i className="bi bi-journal-bookmark-fill me-3 text-primary fs-2"></i>
          Catálogo y Material de Descarga
        </h3>
        <div className="row g-3">
          <div className="col-md-6">
            <a href="https://drive.google.com/file/d/1ymf4rMHPHIJ7KDDo2vJtkHWUXUh_RHoV/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
              <div className="p-3 border rounded d-flex justify-content-between align-items-center bg-body hover-shadow transition-all h-100">
                <div className="d-flex align-items-center">
                  <i className="bi bi-file-earmark-pdf-fill text-danger fs-3 me-3"></i>
                  <div>
                    <h6 className="mb-1 fw-bold text-body">Catálogo de Productos 2026</h6>
                    <small className="text-muted">Google Drive PDF</small>
                  </div>
                </div>
                <button className="btn btn-sm btn-outline-primary rounded-pill px-3">
                  <i className="bi bi-box-arrow-up-right"></i>
                </button>
              </div>
            </a>
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
