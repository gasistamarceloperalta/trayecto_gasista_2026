import React from 'react';

const imagenes = import.meta.glob(
  '../assets/images/modulo01/clase_08/*',
  { eager: true }
);
const img = (nombre) => imagenes[`../assets/images/modulo01/clase_08/${nombre}`]?.default;


export default function Module1Class8() {
  return (
    <>
      {/* Baja Presión y Media Presión */}
      <section className="mb-5 bg-body p-4 p-md-5 rounded shadow-sm border-start border-4 border-primary">
        <h3 className="fw-bold mb-4 d-flex align-items-center">
          <i className="bi bi-speedometer2 me-3 text-primary-custom fs-2"></i>
          Baja Presión y Media Presión
        </h3>
        <div className="text-muted lh-lg">
          <p>Basándome estrictamente en la normativa técnica vigente para instalaciones domiciliarias e internas de gas (NAG-200 y NAG-214).</p>
          
          <h5 className="fw-bold text-body mt-4">1. Baja Presión</h5>
          <ul>
            <li><strong>Punto Clave (Concepto):</strong> Se define como Baja Presión al rango de operación utilizado en las instalaciones internas domiciliarias para el suministro directo a los artefactos de consumo. En redes de Gas Natural, este valor es de 20 mbar (200 mm c.a.), mientras que para Gas Licuado de Petróleo (GLP) es de 28 mbar (280 mm c.a.).</li>
            <li><strong>Justificación/Referencia:</strong>
              <ul>
                <li>La norma NAG-214 (apartado 3) establece que los elementos sellantes para estas cañerías deben ser aptos para una presión máxima de 0,04 kg/cm² (40 mbar).</li>
                <li>La NAG-240 (objeto y alcance) especifica que las instalaciones internas domiciliarias trabajan a presiones que no superan los 28 mbar para GN o GLP.</li>
              </ul>
            </li>
          </ul>

          <h5 className="fw-bold text-body mt-4">2. Media Presión</h5>
          <ul>
            <li><strong>Punto Clave (Concepto):</strong> Es el rango de presión presente en la red de distribución externa o en la línea municipal antes de la regulación. Generalmente, comprende presiones superiores a la de utilización (Baja Presión) y hasta los 4 bar. Esta presión debe ser reducida mediante un regulador antes de ingresar a la instalación interna del usuario.</li>
            <li><strong>Justificación/Referencia:</strong>
              <ul>
                <li>La norma NAG-212 menciona el uso de "válvulas esféricas a candado para media presión" en las conexiones de servicio.</li>
                <li>El Apéndice E de la normativa técnica define las redes de distribución de media presión como aquellas que operan "hasta 4 bar de gases de petróleo y manufacturado".</li>
              </ul>
            </li>
          </ul>

          <div className="my-4 text-center">
            <img src={img('presiones_domiciliaria.png')} alt="Presión de Gas" className="img-fluid rounded shadow-sm" />
          </div>

          <h5 className="fw-bold text-body mt-4">Resumen Comparativo</h5>
          <div className="table-responsive mt-3">
            <table className="table table-bordered table-hover">
              <thead className="table-light">
                <tr>
                  <th>Característica</th>
                  <th>Baja Presión</th>
                  <th>Media Presión</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Ubicación</strong></td>
                  <td>Instalación interna (post-regulador).</td>
                  <td>Red de distribución / Línea de servicio (pre-regulador).</td>
                </tr>
                <tr>
                  <td><strong>Rango Típico</strong></td>
                  <td>19 mbar a 28 mbar.</td>
                  <td>Desde 0,5 bar hasta 4 bar.</td>
                </tr>
                <tr>
                  <td><strong>Uso Principal</strong></td>
                  <td>Funcionamiento de artefactos domésticos.</td>
                  <td>Transporte y distribución urbana de gas.</td>
                </tr>
                <tr>
                  <td><strong>Seguridad</strong></td>
                  <td>Regulada por la NAG-200.</td>
                  <td>Requiere materiales con mayor resistencia mecánica (ej. SCH 80 o acero con revestimiento).</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="alert alert-info mt-4">
            <strong>Nota Técnica:</strong> Es fundamental recordar que la transición de Media Presión a Baja Presión se realiza exclusivamente a través de un regulador de presión aprobado, el cual garantiza que los artefactos domésticos reciban el fluido de manera constante y segura [Ref. NAG-235 / NAG-200].
          </div>
        </div>
      </section>

      {/* La Regulación y Medición de Gas */}
      <section className="mb-5 bg-body p-4 p-md-5 rounded shadow-sm border-start border-4 border-secondary">
        <h3 className="fw-bold mb-4 d-flex align-items-center">
          <i className="bi bi-sliders me-3 text-secondary-custom fs-2"></i>
          La Regulación y Medición de Gas
        </h3>
        <div className="text-muted lh-lg">
          <p>En el mundo del gas natural, no instalamos "cajas"; configuramos nodos de control de energía bajo normas de seguridad estrictas (como la NAG-200).</p>
          <p>Entender la presión no es solo una cuestión de flujo, es una cuestión de estabilidad de llama y seguridad ante fugas. Vamos a desglosar esta jerarquía de nichos (o gabinetes) según la presión que deben dominar.</p>

          <h5 className="fw-bold text-body mt-4">1. Análisis de Situación (Diagnóstico)</h5>
          <p>Físicamente, el gas se comporta como un fluido compresible. La clasificación de los nichos responde a la reducción de presión necesaria para que tus artefactos (estufa, termotanque) no se conviertan en sopletes incontrolables.</p>
          <ul>
            <li><strong>Baja Presión (BP):</strong> El gas llega a la red domiciliaria a una presión constante de 160 a 200 mmCA (milímetros de columna de agua). Aquí el nicho solo contiene el medidor.</li>
            <li><strong>Media Presión (MP):</strong> El gas viaja por la calle a presiones de 0,5 a 4 bar. El nicho debe albergar un regulador antes del medidor para "domar" esa presión y bajarla a niveles seguros.</li>
          </ul>

          <h5 className="fw-bold text-body mt-4">2. La "Traducción al Castellano"</h5>
          <p>Imagina que la red de gas de la calle es una manguera de bomberos con muchísima fuerza. Si conectas esa manguera directo a tu cocina, volarías las hornallas.</p>
          <ul>
            <li>El <strong>Nicho de Media Presión</strong> es como una canilla con un reductor: frena el chorro violento para que salga un hilo de agua constante y suave.</li>
            <li>El <strong>Nicho de Baja Presión</strong> es cuando el agua ya viene suave desde la calle y solo necesitas un "contador" para ver cuánto usas.</li>
          </ul>

          <h5 className="fw-bold text-body mt-4">3. Hoja de Ruta de Materiales</h5>
          <p>Para armar o identificar un nicho bajo norma, estos son los componentes estándar:</p>
          <div className="table-responsive mt-3">
            <table className="table table-bordered table-hover">
              <thead className="table-light">
                <tr>
                  <th>Componente</th>
                  <th>Especificación Técnica</th>
                  <th>Función</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Gabinete</td>
                  <td>Chapa galvanizada o PRFV (60x40x30 cm estándar)</td>
                  <td>Protección y alojamiento.</td>
                </tr>
                <tr>
                  <td>Regulador</td>
                  <td>Capacidad según caudal (6, 10, 25 m³/h)</td>
                  <td>Reduce la presión de entrada.</td>
                </tr>
                <tr>
                  <td>Medidor</td>
                  <td>Tipo diafragma (G2.5 o G4 común)</td>
                  <td>Registro del consumo.</td>
                </tr>
                <tr>
                  <td>Llave de paso</td>
                  <td>Esférica con bloqueo (candado)</td>
                  <td>Corte general de suministro.</td>
                </tr>
                <tr>
                  <td>Flexible de conexión</td>
                  <td>Cobre o acero inoxidable (aprobado)</td>
                  <td>Conecta el regulador al medidor.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h5 className="fw-bold text-body mt-4">4. Guía de Herramientas y "Uso Correcto"</h5>
          <ul>
            <li><strong>Llave de fuerza (Stilson) de 10" o 12":</strong> Para piezas de acero/hierro.</li>
            <li><strong>Llave Francesa (Ajustable) de 10":</strong> Para conexiones de bronce o reguladores (evita marcar las caras planas).</li>
            <li><strong>Manómetro de columna de agua:</strong> Crucial para verificar que la presión de salida sea la correcta.</li>
          </ul>
          <div className="alert alert-warning mt-3">
            <strong>⚠️ Alerta de Mal Uso</strong><br/>
            <strong>El error del "torque excesivo":</strong> Es muy común ver gente colgándose de la llave Stilson para apretar la unión doble del medidor.<br/>
            <strong>Consecuencia:</strong> Deformarás el asiento de la junta o, peor aún, quebrarás el puente del medidor (que suele ser de fundición de aluminio). Si hay fuga, no es falta de fuerza, es falta de una buena junta o sellador.
          </div>

          <h5 className="fw-bold text-body mt-4">5. Procedimiento Paso a Paso (Instalación de Nicho MP)</h5>
          <ol>
            <li><strong>Ubicación:</strong> El nicho debe estar en la línea municipal, ventilado y accesible desde el exterior.</li>
            <li><strong>Montaje de la "Línea de Entrada":</strong> Se instala la llave de paso de vereda y el regulador. El regulador debe quedar perfectamente horizontal.</li>
            <li><strong>Conexión del Medidor:</strong> Se utilizan pilares de conexión para que el peso del medidor no recaiga sobre la cañería.</li>
            <li><strong>Prueba de Hermeticidad:</strong> Antes de pedir el gas, se infla la cañería interna con aire a una presión de 0.2 kg/cm² y se verifica con manómetro que no caiga durante 15 minutos.</li>
            <li><strong>Ventilación:</strong> La puerta del nicho debe tener rejillas de ventilación superior e inferior para evitar la acumulación de gas en caso de microfugas.</li>
          </ol>

          <h5 className="fw-bold text-body mt-4">6. Tip del Profesional (El "Secreto del Oficio")</h5>
          <p><strong>"La prueba de la burbuja y el centrado":</strong> Muchos confían ciegamente en el sellador de roscas. Mi secreto es que, antes de apretar las uniones dobles del medidor, asegúrate de que los caños estén perfectamente alineados. Si tienes que hacer fuerza con las manos para que las roscas coincidan, la junta va a fallar en 6 meses por tensión mecánica. Un medidor debe "caer" en su lugar; el apriete es solo para sellar, no para corregir mala puntería.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-4 mt-5 border-top">
        <p className="text-muted small mb-0">© 2026 Curso de Trayecto Gasista Estudiante Marcelo Peralta</p>
      </footer>
    </>
  );
}
