import React from 'react';

export default function Module1Class11() {
  return (
    <>
      <section className="mb-5 bg-body p-4 p-md-5 rounded shadow-sm border-start border-4 border-primary">
        <h3 className="fw-bold mb-4 d-flex align-items-center">
          <i className="bi bi-book-half me-3 text-primary-custom fs-2"></i>
          Marco Teórico
        </h3>
        <div className="text-muted lh-lg">
          <p>En la clase del día de hoy, el instructor procedió a realizar preguntas de manera general, las cuales se basaron en una prueba de matriculación de tercera categoría.</p>
          <p>A continuación, se transcribe una parte de las respuestas dadas por los estudiantes con base en dicho cuestionario:</p>
          
          <h5 className="fw-bold mt-4 text-body">PREGUNTAS REALIZADAS:</h5>
          <ul className="list-unstyled">
            <li className="mb-3">
              <strong>Sobre ventilación y tiro:</strong>
              <ul>
                <li>A través de qué, ¿cómo puede ser ese conductor?</li>
                <li>Respecto al tiro natural y forzado: ¿Qué es cada uno? y ¿cómo se define el tiro natural?</li>
                <li>¿Cómo se genera ese tipo [de tiro]?</li>
              </ul>
            </li>
            <li className="mb-3">
              <strong>Sobre corrosión y materiales:</strong>
              <ul>
                <li>¿Para qué sirve la brida y la cupla aislante?</li>
                <li>¿Cómo se llama técnicamente el proceso entre dos metales de distinto potencial?</li>
                <li>¿Cuándo lo uso técnicamente? (refiriéndose al par galvánico)</li>
              </ul>
            </li>
            <li className="mb-3">
              <strong>Sobre cañerías y presiones:</strong>
              <ul>
                <li>¿Qué es cañería interna?</li>
                <li>¿Cuál es la presión de distribución en baja y en media presión?</li>
                <li>En baja presión, 0,020 kg/cm², ¿qué representan cuántos gramos?</li>
                <li>¿Y en metro o milímetro de columna de agua?</li>
                <li>¿Qué es prolongación domiciliaria o de dónde a dónde va?</li>
              </ul>
            </li>
            <li className="mb-3">
              <strong>Sobre combustión y seguridad:</strong>
              <ul>
                <li>¿Qué producto de combustión es tóxico y venenoso y cómo se produce?</li>
                <li>Si no se llega a quemar todo el gas, ¿qué está faltando?</li>
                <li>Visualmente, ¿cómo me doy cuenta que esa llama está produciendo monóxido?</li>
                <li>Si hay una combustión balanceada y completa, ¿cuál va a ser el producto de la combustión?</li>
                <li>¿Cuál es el nombre técnico del producto de la combustión?</li>
              </ul>
            </li>
            <li className="mb-3">
              <strong>Sobre conceptos físicos y técnicos:</strong>
              <ul>
                <li>¿Qué es pérdida de carga? o ¿cómo la podemos definir?</li>
                <li>¿Qué me puede generar pérdida de carga?</li>
                <li>¿Qué es presión?</li>
                <li>¿Cuál es la diferencia entre llave de paso y robinete?</li>
                <li>¿Quién sabe qué es un robinete?</li>
                <li>Y la llave de paso, ¿qué es?</li>
              </ul>
            </li>
          </ul>

          <h4 className="fw-bold mt-5 text-body border-bottom pb-2">CONCEPTO TEÓRICO DE LAS RESPUESTAS</h4>

          <h5 className="fw-bold mt-4 text-body">1. Sistemas de Ventilación y Tiro</h5>
          <p>La evacuación de los productos de combustión es un factor de seguridad crítico que se divide en dos categorías principales:</p>
          <ul>
            <li><strong>Tiro Natural:</strong> Se genera de forma espontánea mediante dos mecanismos físicos:
              <ul>
                <li><strong>Diferencia de Densidad:</strong> El aire caliente tiende a elevarse.</li>
                <li><strong>Efecto del Viento:</strong> El paso del viento por el sombrerete genera una succión interna en el conducto de ventilación.</li>
              </ul>
            </li>
            <li><strong>Tiro Forzado:</strong> Utiliza un extractor o forzador eléctrico.
              <ul>
                <li><strong>Medida de Seguridad (Enclavamiento):</strong> El artefacto debe estar obligatoriamente "enclavado" con el suministro eléctrico. Esto significa que, si no hay electricidad para accionar el forzador, el dispositivo de seguridad bloquea la salida de gas para evitar la acumulación de gases nocivos en el ambiente.</li>
              </ul>
            </li>
          </ul>

          <h5 className="fw-bold mt-4 text-body">2. Corrosión Galvánica y Protección de Materiales</h5>
          <p>Cuando se conectan metales con distinto potencial electroquímico, se produce un fenómeno técnico conocido como par galvánico o corrosión galvánica.</p>
          <ul>
            <li><strong>Mecanismo:</strong> Se establecen un ánodo y un cátodo; el material más fuerte (cátodo) "se come" al más débil (ánodo), despojándolo de electrones hasta degradarlo.</li>
            <li><strong>Prevención:</strong> Se utilizan bridas o cuplas aislantes para interrumpir el contacto eléctrico entre materiales diferentes (por ejemplo, en la unión de cañería de epoxi con otros metales).</li>
          </ul>

          <h5 className="fw-bold mt-4 text-body">3. Parámetros de Presión y Distribución</h5>
          <p>El sistema de distribución se clasifica según los rangos de presión operativa detallados en la siguiente tabla:</p>
          <div className="table-responsive my-3">
            <table className="table table-bordered table-striped">
              <thead className="table-light">
                <tr>
                  <th>Tipo de Presión</th>
                  <th>Valor en kg/cm²</th>
                  <th>Unidades Equivalentes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Baja Presión</td>
                  <td>0,020 kg/cm²</td>
                  <td>20 g / 180 a 200 mm de columna de agua (mmca)</td>
                </tr>
                <tr>
                  <td>Media Presión</td>
                  <td>0,5 a 2 kg/cm²</td>
                  <td>Distribución común entre 1 kg/cm² y 2 kg/cm²</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h5 className="fw-bold mt-4 text-body">4. Combustión: Productos y Riesgos</h5>
          <p>La calidad de la combustión determina la seguridad del ambiente y la eficiencia del artefacto.</p>
          
          <h6 className="fw-bold mt-3 text-body">4.1. Combustión Incompleta (Monóxido de Carbono - CO)</h6>
          <p>El monóxido de carbono es un gas tóxico y venenoso. Se produce por una mala mezcla entre el gas y la llama, generalmente debido a la falta de oxígeno.</p>
          <ul>
            <li><strong>Indicadores visuales:</strong> Llama de color naranja y consistencia débil.</li>
            <li><strong>Presencia física:</strong> Aparición de manchas negras en las paredes o acumulación de hollín.</li>
          </ul>

          <h6 className="fw-bold mt-3 text-body">4.2. Combustión Completa (Anhidrido Carbónico - CO2)</h6>
          <p>Se identifica por una llama azul y uniforme.</p>
          <ul>
            <li><strong>Características del CO2:</strong> No es venenoso por sí mismo, pero no es respirable. Al ocupar espacio en el ambiente y desplazar el oxígeno, puede causar asfixia si no existe una ventilación adecuada para evacuarlo.</li>
          </ul>

          <h5 className="fw-bold mt-4 text-body">5. Dinámica de Fluidos: Pérdida de Carga</h5>
          <p>La pérdida de carga se define como la caída de presión que ocurre entre dos puntos de una cañería (Punto A y Punto B). Los factores que generan esta pérdida son:</p>
          <ol>
            <li><strong>Accesorios:</strong> Las llaves de paso son los elementos que más afectan la presión, seguidas por codos, tes y otros accesorios.</li>
            <li><strong>Longitud:</strong> A mayor distancia de la cañería, mayor es el rozamiento del fluido contra las paredes.</li>
            <li><strong>Diámetro:</strong> El tamaño de la sección transversal de la cañería influye directamente en la resistencia al flujo.</li>
          </ol>
          <p><em>Nota técnica:</em> La presión se define formalmente como una fuerza aplicada sobre una superficie determinada (Fuerza / Superficie).</p>

          <h5 className="fw-bold mt-4 text-body">6. Componentes y Delimitación de la Instalación</h5>
          <p>Es fundamental distinguir las partes de la instalación y la función específica de sus válvulas.</p>
          
          <h6 className="fw-bold mt-3 text-body">6.1. Definiciones de Tramos</h6>
          <ul>
            <li><strong>Cañería Interna:</strong> Comprende desde los 20 cm fuera de la línea municipal hasta el último de los artefactos instalados.</li>
            <li><strong>Prolongación Domiciliaria:</strong> Se extiende desde los 20 cm fuera de la línea municipal hasta el o los medidores. Se considera una parte integrante de la cañería interna.</li>
          </ul>

          <h6 className="fw-bold mt-3 text-body">6.2. Diferencia entre Llave de Paso y Robinete</h6>
          <ul>
            <li><strong>Llave de Paso:</strong> Es un dispositivo de corte general o sectorial ubicado en la cañería para interrumpir el flujo de gas.</li>
            <li><strong>Robinete:</strong> Es el componente interno del artefacto (por ejemplo, en una cocina). Tiene un cuerpo cónico que permite regular la intensidad de la llama o cerrar el paso de gas al quemador específico; es lo que se acciona mediante la manija del artefacto.</li>
          </ul>

          <div className="alert alert-info mt-4" role="alert">
            <p className="mb-0">Posteriormente, se procedió con la búsqueda de la pérdida en el circuito. Se realizó el desacople de un tramo y se limpiaron las roscas y los acoples para reaplicar el sellador anaeróbico.</p>
            <p className="mb-0 mt-2">El día de mañana se llevará a cabo nuevamente la prueba de hermeticidad.</p>
          </div>
          
          <p className="text-end mt-4 small text-muted">© 2026 Curso de Trayecto Gasista Estudiante Marcelo Peralta</p>
        </div>
      </section>
    </>
  );
}