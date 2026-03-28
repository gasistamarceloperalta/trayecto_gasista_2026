import React from 'react';
const imagenes = import.meta.glob(
  '../assets/images/modulo01/clase_10/*',
  { eager: true }
);
const img = (nombre) => imagenes[`../assets/images/modulo01/clase_10/${nombre}`]?.default;
export default function Module1Class10() {
  return (
    <>
      {/* Actividad y Capacitación */}
      <section className="mb-5 bg-body p-4 p-md-5 rounded shadow-sm border-start border-4 border-primary">
        <h3 className="fw-bold mb-4 d-flex align-items-center">
          <i className="bi bi-journal-check me-3 text-primary-custom fs-2"></i>
          Actividad y Capacitación
        </h3>
        <div className="text-muted lh-lg">
          <div className="alert alert-success border-success mb-3">
            <strong>Actividad Realizada:</strong> Se realizó la búsqueda de la fuga del circuito, pudiendo encontrar con éxito la misma.
          </div>
          <div className="alert alert-warning border-warning mb-4">
            <strong>Pendiente:</strong> Se procederá, la próxima clase, a la reparación de dicha fuga.
          </div>
          <p className="lead fw-semibold text-body">
            Capacitación Especial: Se llevó a cabo una Masterclass sobre la construcción de andamios, dictada por la empresa <a href="https://mekano.com.ar/" target="_blank" rel="noopener noreferrer" className="text-decoration-none fw-bold">MEKANO</a>.
          </p>
          <div className="mt-4 text-center">
            <img src={img('sitio_web.png')} alt="Sitio Mekano" className="img-fluid rounded shadow-sm"/>
          </div>
        </div>
      </section>

      {/* Masterclass Parte 1 */}
      <section className="mb-5 bg-body p-4 p-md-5 rounded shadow-sm border-start border-4 border-info">
        <h3 className="fw-bold mb-4 d-flex align-items-center">
          <i className="bi bi-building me-3 text-info fs-2"></i>
          Masterclass: Ingeniería, Montaje y Seguridad en Andamios Multidireccionales
        </h3>
        <div className="text-muted lh-lg">
          <h4 className="fw-bold text-body mt-4 border-bottom pb-2">I. Marco Normativo y Seguridad Integral (Criterio Cero Riesgo)</h4>
          <p>El montaje de estructuras de altura se rige por la premisa de la protección total del operario. La seguridad se clasifica en tres niveles:</p>
          
          <h5 className="fw-bold text-body mt-3">1. Equipo de Protección Personal (EPP)</h5>
          <ul>
            <li><strong>Base Obligatoria:</strong> Casco de seguridad, calzado con puntera metálica, ropa de trabajo técnica, protectores auditivos y guantes de protección.</li>
            <li><strong>Uso Eventual:</strong> Protección respiratoria (espacios confinados), chalecos refractarios (baja visibilidad) y protección visual.</li>
          </ul>

          <h5 className="fw-bold text-body mt-3">2. Sistema Anticaídas</h5>
          <ul>
            <li><strong>Arnés de Cuerpo Completo:</strong> Con puntos de anclaje delantero y trasero certificados.</li>
            <li><strong>Dispositivos de Amarre:</strong> Uso de cabos de vida simples y dobles (Y) con amortiguador de impacto para garantizar el tránsito 100% enganchado.</li>
            <li><strong>Conectores:</strong> Ganchos de gran apertura y dispositivos anticaídas deslizantes (sujetadores).</li>
          </ul>

          <h4 className="fw-bold text-body mt-5 border-bottom pb-2">II. Anatomía y Componentes del Sistema Multidireccional</h4>
          <p>El sistema se destaca por su modularidad cada 50 cm y su capacidad de conexión en 8 direcciones simultáneas gracias a la tecnología de rosetas.</p>
          
          <h5 className="fw-bold text-body mt-3">1. Elementos Estructurales</h5>
          <ul>
            <li><strong>Verticales:</strong> Columnas con rosetas cada 0.50m. Medidas: 0.50m a 3.00m.</li>
            <li><strong>Horizontales (Largueros):</strong> Definen la longitud y el ancho del andamio. Medidas: 0.73m, 1.09m, 1.25m, 1.50m, 2.00m, 2.50m y 3.00m.</li>
            <li><strong>Diagonales:</strong> Fundamentales para la rigidez contra esfuerzos laterales. Cubren rangos de 0.73m a 3.00m.</li>
          </ul>

          <h5 className="fw-bold text-body mt-3">2. El Nudo Mecánico (Proceso de Unión)</h5>
          <p>El montaje del nudo se realiza en una secuencia de tres pasos:</p>
          <ol>
            <li><strong>Presentación:</strong> Colocación de la cabeza del horizontal sobre la roseta.</li>
            <li><strong>Inserción:</strong> Introducción de la cuña/chaveta en la perforación.</li>
            <li><strong>Fijación:</strong> Golpe de martillo para rigidizar la unión, transformando el conjunto en una estructura sólida.</li>
          </ol>
        </div>
      </section>

      {/* Masterclass Parte 2 */}
      <section className="mb-5 bg-body p-4 p-md-5 rounded shadow-sm border-start border-4 border-warning">
        <h3 className="fw-bold mb-4 d-flex align-items-center">
          <i className="bi bi-tools me-3 text-warning fs-2"></i>
          Procedimiento Operativo y Aplicaciones
        </h3>
        <div className="text-muted lh-lg">
          <h4 className="fw-bold text-body mt-4 border-bottom pb-2">III. Procedimiento Operativo de Montaje</h4>
          <p>Un montaje técnicamente correcto sigue una secuencia lógica para asegurar la estabilidad:</p>
          
          <h5 className="fw-bold text-body mt-3">1. Base y Nivelación</h5>
          <ul>
            <li><strong>Husillos (Tornillones):</strong> Bases regulables para compensar desniveles del suelo.</li>
            <li><strong>Collarines de Inicio:</strong> Piezas cortas o largas que se asientan sobre el husillo para recibir los primeros verticales.</li>
            <li><strong>Nivelación Inicial:</strong> Ajuste de los tornillones para garantizar una base 100% plana antes de subir en altura.</li>
          </ul>

          <h5 className="fw-bold text-body mt-3">2. Plataformas y Accesos</h5>
          <ul>
            <li><strong>Tablones Metálicos:</strong> Superficies antideslizantes con perforaciones para drenaje.</li>
            <li><strong>Accesos Seguros:</strong> Uso de plataformas con trampilla, escaleras internas con pasamanos o escaleras marineras para espacios reducidos.</li>
          </ul>

          <h5 className="fw-bold text-body mt-3">3. Accesorios de Estabilidad y Seguridad Colectiva</h5>
          <ul>
            <li><strong>Ménsulas:</strong> Para generar voladizos o ampliar áreas de trabajo.</li>
            <li><strong>Abrazaderas:</strong> Nudos fijos y giratorios para amarres a estructuras existentes.</li>
            <li><strong>Rodapiés (Zócalos):</strong> Instalación perimetral obligatoria para evitar la caída de objetos.</li>
            <li><strong>Barandas:</strong> Doble protección (superior a 1m e intermedia) en todos los niveles operativos.</li>
          </ul>

          <h4 className="fw-bold text-body mt-5 border-bottom pb-2">IV. Aplicaciones y Conclusiones Técnicas</h4>
          <p>La versatilidad del sistema MEKANO permite su uso en:</p>
          <ul>
            <li>Andamios de fachada de alta complejidad.</li>
            <li>Plataformas industriales de gran capacidad de carga.</li>
            <li>Estructuras autoportantes y torres de acceso.</li>
          </ul>

          <div className="row mt-4 mb-4">
            <div className="col-6 text-center">
              <img src={img('foto_01_clase_10.jpg')} alt="Inicio de andamio" className="img-fluid rounded shadow-sm"/>
            </div>
            <div className="col-6 text-center">
              <img src={img('foto_02_clase_10.jpg')} alt="Sitio Mekano" className="img-fluid rounded shadow-sm"/>
            </div>
          </div>

          <div className="alert alert-secondary mt-5 border-secondary">
            <h5 className="alert-heading fw-bold"><i className="bi bi-quote me-2"></i>Resumen Final de la Masterclass</h5>
            <hr />
            <p className="mb-0 fst-italic">"La excelencia en el montaje no reside solo en la velocidad, sino en la precisión de la nivelación inicial y la correcta triangulación con diagonales. El sistema multidireccional ofrece flexibilidad geométrica total, pero requiere que cada cuña esté correctamente golpeada y cada rodapié en su lugar para transformar un conjunto de piezas en un entorno de ingeniería seguro."</p>
          </div>

          <div className="mt-5">
            <h5 className="fw-bold text-body mb-3"><i className="bi bi-camera-video me-2 text-danger"></i>Video Tutoriales</h5>
            <div className="row g-4">
              <div className="col-md-6">
                <div className="ratio ratio-16x9 rounded overflow-hidden shadow-sm">
                  <iframe src="https://www.youtube.com/embed/6WceJSjl3Tw" title="Video Tutorial 1" allowFullScreen></iframe>
                </div>
              </div>
              <div className="col-md-6">
                <div className="ratio ratio-16x9 rounded overflow-hidden shadow-sm">
                  <iframe src="https://www.youtube.com/embed/Mt3gAbLLabQ" title="Video Tutorial 2" allowFullScreen></iframe>
                </div>
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