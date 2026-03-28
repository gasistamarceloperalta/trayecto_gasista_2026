import React from 'react';
const imagenes = import.meta.glob(
  '../assets/images/modulo01/clase_09/*',
  { eager: true }
);
const img = (nombre) => imagenes[`../assets/images/modulo01/clase_09/${nombre}`]?.default;
export default function Module1Class9() {
  return (
    <>
      {/* Actividad */}
      <section className="mb-5 bg-body p-4 p-md-5 rounded shadow-sm border-start border-4 border-primary">
        <h3 className="fw-bold mb-4 d-flex align-items-center">
          <i className="bi bi-clipboard-check me-3 text-primary-custom fs-2"></i>
          Actividad Práctica
        </h3>
        <div className="text-muted lh-lg">
          <p className="lead fw-semibold text-body">Se realizó la prueba de hermeticidad con el circuito construido por el Equipo 3.</p>
          <div className="mt-4 p-4 bg-light rounded border">
            <h5 className="fw-bold text-body mb-3"><i className="bi bi-people-fill me-2 text-primary-custom"></i>Integrantes del Equipo:</h5>
            <ul className="list-unstyled mb-0 row">
              <li className="col-md-6 mb-2"><i className="bi bi-person-check text-success me-2"></i>Carlos Baez</li>
              <li className="col-md-6 mb-2"><i className="bi bi-person-check text-success me-2"></i>Leo Bogado</li>
              <li className="col-md-6 mb-2"><i className="bi bi-person-check text-success me-2"></i>Martín Galarza</li>
              <li className="col-md-6 mb-2"><i className="bi bi-person-check text-success me-2"></i>Pavel Tkachenko</li>
              <li className="col-md-6 mb-2"><i className="bi bi-person-check text-success me-2"></i>Marcelo Peralta</li>
            </ul>
            <div className="mt-4 text-center">
              <img src={img('foto_01.jpg')} alt="Equipo 3" className="img-fluid rounded shadow-sm"/>
            </div>
          </div>
        </div>
      </section>

      {/* El Manómetro de Columna de Agua */}
      <section className="mb-5 bg-body p-4 p-md-5 rounded shadow-sm border-start border-4 border-info">
        <h3 className="fw-bold mb-4 d-flex align-items-center">
          <i className="bi bi-speedometer2 me-3 text-info fs-2"></i>
          El Manómetro de Columna de Agua (MCA)
        </h3>
        <div className="text-muted lh-lg">
          <p>La Columna de Agua es un instrumento de medición de presión que utiliza el principio de vasos comunicantes. Se basa en la altura que alcanza un líquido (agua) en un tubo en forma de "U" cuando se le aplica una presión de gas.</p>
          <p>En Argentina, lo usamos principalmente para medir la Baja Presión de suministro (habitualmente 20 gramos o 200 mm de columna de agua para Gas Natural) y para realizar las Pruebas de Hermeticidad en instalaciones internas.</p>

          <h5 className="fw-bold text-body mt-4 border-bottom pb-2">Pasos prácticos para su uso</h5>
          <ol className="list-group list-group-numbered mt-3">
            <li className="list-group-item border-0 px-0 bg-transparent"><strong>Carga del instrumento:</strong> Llená el tubo en "U" con agua destilada (o con un colorante suave para ver mejor) hasta que ambas ramas marquen exactamente el "cero" en la escala graduada.</li>
            <li className="list-group-item border-0 px-0 bg-transparent"><strong>Conexión:</strong> Conectá la manguera de goma del manómetro al punto de prueba (habitualmente en el barral del medidor o en una boca de artefacto).</li>
            <li className="list-group-item border-0 px-0 bg-transparent"><strong>Presurización:</strong> Introducir aire a la cañería (con un inflador o pera de goma) hasta alcanzar la presión de prueba requerida por la normativa.</li>
            <li className="list-group-item border-0 px-0 bg-transparent"><strong>Estabilización:</strong> Esperar unos minutos a que la temperatura del aire dentro de la cañería se estabilice; esto evita falsas lecturas por dilatación térmica.</li>
            <li className="list-group-item border-0 px-0 bg-transparent"><strong>Observación:</strong> Verificá que el nivel del agua se mantenga constante durante el tiempo que exige la norma (mínimo 15 minutos para pruebas de rutina).</li>
          </ol>

          <div className="mt-4 text-center">
            <img src={img('infografia_01_clase_09.png')} alt="Equipo 3" className="img-fluid rounded shadow-sm"/>
          </div>

          <div className="row mt-5">
            <div className="col-md-6">
              <h5 className="fw-bold text-body border-bottom pb-2"><i className="bi bi-tools me-2 text-secondary-custom"></i>Herramientas recomendadas</h5>
              <ul className="mt-3">
                <li><strong>Manómetro de columna de agua:</strong> Preferentemente de vidrio o policarbonato resistente.</li>
                <li><strong>Manguera de conexión:</strong> De cristal o goma, sin fisuras.</li>
                <li><strong>Inflador de mano o pera de goma:</strong> Para presurizar la cañería.</li>
                <li><strong>Agua con colorante:</strong> Ayuda a la lectura rápida de la escala.</li>
              </ul>
            </div>
            <div className="col-md-6">
              <h5 className="fw-bold text-body border-bottom pb-2"><i className="bi bi-exclamation-triangle me-2 text-warning"></i>Errores comunes a evitar</h5>
              <ul className="mt-3">
                <li><strong>No nivelar el instrumento:</strong> Si el manómetro está inclinado, la lectura de la escala será errónea.</li>
                <li><strong>Burbujas de aire:</strong> Asegurate de que no queden burbujas atrapadas en el agua dentro del tubo, ya que alteran la medición.</li>
                <li><strong>Confundir presión de prueba con presión de trabajo:</strong> Nunca olvides que la prueba de hermeticidad se hace a una presión superior a la de trabajo para garantizar un margen de seguridad.</li>
                <li><strong>No purgar la manguera:</strong> Si la manguera tiene restos de agua de una prueba anterior, puede obstruir el paso del aire.</li>
              </ul>
            </div>
          </div>

          <div className="alert alert-info mt-4 border-info">
            <h5 className="alert-heading fw-bold"><i className="bi bi-journal-bookmark me-2"></i>Normativa Argentina Aplicable</h5>
            <hr />
            <ul className="mb-0">
              <li className="mb-2"><strong>NAG-200 (Reglamento Técnico para instalaciones internas):</strong> Establece los parámetros de presión y los procedimientos para la ejecución y prueba de las cañerías.</li>
              <li><strong>NAG-226:</strong> Procedimiento específico para la revisión técnica de instalaciones existentes, donde el uso del MCA es mandatorio para verificar la hermeticidad.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Procedimiento y Diagnóstico */}
      <section className="mb-5 bg-body p-4 p-md-5 rounded shadow-sm border-start border-4 border-warning">
        <h3 className="fw-bold mb-4 d-flex align-items-center">
          <i className="bi bi-search me-3 text-warning fs-2"></i>
          Procedimiento y Diagnóstico
        </h3>
        <div className="text-muted lh-lg">
          
          <h4 className="fw-bold text-body mt-4">1. Procedimiento de Ensayo</h4>
          <p>Se realizó la prueba de hermeticidad en el circuito construido utilizando un manómetro de columna de agua.</p>
          <ul>
            <li><strong>Presión de carga inicial:</strong> Entre 18 mmH₂O y 20 mmH₂O.</li>
            <li><strong>Tiempo de ensayo estipulado:</strong> 15 minutos de reposo.</li>
          </ul>

          <h4 className="fw-bold text-body mt-5">2. Observaciones y Diagnóstico</h4>
          <div className="alert alert-danger border-danger mt-3">
            <strong>Resultado:</strong> La prueba arrojó un resultado negativo casi de inmediato.
          </div>
          <ul>
            <li>La columna de agua comenzó a descender apenas transcurridos 2 minutos del inicio del reposo, confirmando una pérdida importante en el sistema.</li>
            <li><strong>Área de inspección:</strong> Se priorizaron las uniones roscadas y piezas de conexión.</li>
            <li><strong>Método de detección:</strong> Aplicación de solución de agua y jabón blanco en cada unión para identificar la formación de burbujas.</li>
          </ul>

          <div className="row mt-4 mb-4">
            <div className="col-6 text-center">
              <img src={img('foto_03.jpg')} alt="Equipo 3" className="img-fluid rounded shadow-sm"/>
            </div>
            <div className="col-6 text-center">
              <img src={img('foto_02.jpg')} alt="Equipo 3" className="img-fluid rounded shadow-sm"/>
            </div>
          </div>

          <div className="mt-4">
            <h5 className="fw-bold text-body mb-3"><i className="bi bi-camera-video me-2 text-danger"></i>Video Tutorial - Prueba de Hermeticidad</h5>
            <div className="ratio ratio-16x9 rounded overflow-hidden shadow-sm">
              <iframe src="https://www.youtube.com/embed/gxSN0zdr1aQ" title="Video Tutorial" allowFullScreen></iframe>
            </div>
          </div>

          <h4 className="fw-bold text-body mt-5">3. Plan de Acción (Mantenimiento)</h4>
          <p>Una vez detectado el punto exacto de la fuga, el protocolo a seguir será:</p>
          <ol className="list-group list-group-numbered mt-3 mb-4">
            <li className="list-group-item border-0 px-0 bg-transparent"><strong>Desarmado</strong> de la conexión defectuosa.</li>
            <li className="list-group-item border-0 px-0 bg-transparent"><strong>Limpieza exhaustiva</strong> de las roscas (eliminación de restos de selladores previos o viruta).</li>
            <li className="list-group-item border-0 px-0 bg-transparent"><strong>Aplicación de sellador anaeróbico</strong> de fragüe rápido para asegurar la estanqueidad.</li>
            <li className="list-group-item border-0 px-0 bg-transparent"><strong>Re-ensayo:</strong> Realizar una nueva prueba de 15 minutos para verificar que la aguja/columna permanezca estática.</li>
          </ol>

          <div className="alert alert-success mt-4 border-success">
            <strong>Nota técnica:</strong> Recordá que, según la normativa, la caída de presión en estos ensayos debe ser <strong>cero</strong>. El uso del sellador anaeróbico es ideal aquí por su resistencia a las vibraciones y la presión.
          </div>

          <div className="mt-4">
            <h5 className="fw-bold text-body mb-3"><i className="bi bi-camera-video me-2 text-danger"></i>Video Tutorial - Reparación</h5>
            <div className="ratio ratio-16x9 rounded overflow-hidden shadow-sm" style={{ maxWidth: '400px', margin: '0 auto' }}>
              <iframe src="https://www.youtube.com/embed/cAeu7Zvnu2k" title="Video Tutorial Reparación" allowFullScreen></iframe>
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