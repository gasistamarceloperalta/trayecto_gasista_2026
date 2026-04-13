import React from 'react';
const imagenes = import.meta.glob(
  '../assets/images/modulo02/clase_04/*',
  { eager: true }
);
const img = (nombre) => imagenes[`../assets/images/modulo02/clase_04/${nombre}.jpg`]?.default;
export default function Module2Class4() {
  return (
    <>
      <section className="mb-5 bg-body p-4 p-md-5 rounded shadow-sm border-start border-4 border-primary">
        <h3 className="fw-bold mb-4 d-flex align-items-center">
          <i className="bi bi-book-half me-3 text-primary-custom fs-2"></i>
          Clase 04 - 13/04
        </h3>
        
        <div className="mt-4">
          <h4 className="fw-bold text-body mb-3 border-bottom pb-2">INSTALACIÓN DE MEDIDOR DE ALTO CONSUMO</h4>
          <div className="row g-4 mb-4">
            {[1,2,3,4].map((item) => (
              <div key={img(item)} className="col-6 col-md-3">
                <div className="ratio ratio-1x1 rounded overflow-hidden shadow-sm">
                  <img src={img(item)} alt={`Imagen de práctica ${item}`} className="img-fluid rounded shadow-sm object-fit-cover" 
      />
                </div>
              </div>
            ))}
          </div>
          <div className="mb-5">
            <h5 className="fw-bold text-body mb-3">Video Tutorial</h5>
            <div className="ratio ratio-16x9 rounded overflow-hidden shadow-sm">
              <iframe 
                src="https://www.youtube.com/embed/zxqyvWaGFz0?si=8Rm5R_xAScGDja_N" 
                title="YouTube video player" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen>
              </iframe>
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h4 className="fw-bold text-body mb-3 border-bottom pb-2">PINTADA DE PARED</h4>
          <div className="row g-4 mb-4">
            {/* AQUÍ COMIENZA LA INSERCIÓN */}
    <div className="col-12 col-md-6 col-lg-4">
      <div className="ratio ratio-4x3 rounded overflow-hidden shadow-sm">
        <img 
          src={img(5)} 
          alt="Práctica de pintada de pared" 
          className="img-fluid rounded shadow-sm object-fit-cover" 
        />
      </div>
    </div>
    {/* AQUÍ TERMINA LA INSERCIÓN */}
          </div>
        </div>

        <div className="mt-5">
          <h4 className="fw-bold text-body mb-3 border-bottom pb-2">ROSCADORA ELÉCTRICA</h4>
          <div className="text-muted lh-lg mb-4">
            <p>Para utilizar una roscadora eléctrica de manera correcta y segura en el mecanizado de tuberías de acero galvanizado, se debe seguir este procedimiento detallado basado en las fuentes:</p>
            
            <h5 className="fw-bold text-body mt-4 mb-3">1. Sujeción y Centrado de la Tubería</h5>
            <ul className="list-group list-group-flush mb-4">
              <li className="list-group-item bg-transparent px-0">
                <strong>Introducción:</strong> Introduzca la tubería por el interior de los discos huecos de la máquina, haciendo que sobresalga por el extremo opuesto.
              </li>
              <li className="list-group-item bg-transparent px-0">
                <strong>Centrado:</strong> Gire el <strong>primer disco</strong> (el más exterior); sus tres apoyos móviles se cerrarán para centrar la tubería.
              </li>
              <li className="list-group-item bg-transparent px-0">
                <strong>Fijación:</strong> Gire el <strong>segundo disco</strong> (interior), que cuenta con <strong>mordazas dentadas</strong>. Es necesario dar varios golpes finales al disco para asegurar que las mordazas aprisionen la tubería por completo y no se mueva durante el proceso.
              </li>
            </ul>

            <h5 className="fw-bold text-body mt-4 mb-3">2. Corte de la Tubería</h5>
            <ul className="list-group list-group-flush mb-4">
              <li className="list-group-item bg-transparent px-0">
                <strong>Posicionamiento:</strong> Desplace el conjunto de mecanizado por los raíles mediante el volante de brazos hasta que la <strong>cuchilla del cortatubos</strong> coincida con la marca de corte en la tubería.
              </li>
              <li className="list-group-item bg-transparent px-0">
                <strong>Operación:</strong> Encienda el motor con los botones del frontal. Gire la maneta del cortatubos para presionar levemente la tubería mientras esta gira hasta que el sobrante se desprenda y caiga en la bandeja.
              </li>
              <li className="list-group-item bg-transparent px-0">
                <strong>Finalización:</strong> Apague el motor y retire el cortatubos.
              </li>
            </ul>

            <h5 className="fw-bold text-body mt-4 mb-3">3. Escariado (Eliminación de Rebaba)</h5>
            <ul className="list-group list-group-flush mb-4">
              <li className="list-group-item bg-transparent px-0">
                <strong>Preparación:</strong> Baje el <strong>escariador</strong>, extienda su vástago y fíjelo girándolo.
              </li>
              <li className="list-group-item bg-transparent px-0">
                <strong>Ejecución:</strong> Encienda el motor y acerque las cuchillas del escariador a la boca de la tubería usando el volante.
              </li>
              <li className="list-group-item bg-transparent px-0">
                <strong>Limpieza:</strong> Presione levemente durante unos segundos para <strong>eliminar la rebaba interior</strong> provocada por el corte. Separe el escariador y apague el motor.
              </li>
            </ul>

            <h5 className="fw-bold text-body mt-4 mb-3">4. Proceso de Roscado</h5>
            <ul className="list-group list-group-flush mb-4">
              <li className="list-group-item bg-transparent px-0">
                <strong>Ajuste del Diámetro:</strong> En el <strong>portaterrajas</strong>, mueva la maneta reguladora para que la marca coincida con el diámetro de la tubería (rango de 1/2 a 2 pulgadas) y fije la distancia con la palanca pequeña.
              </li>
              <li className="list-group-item bg-transparent px-0">
                <strong>Armado:</strong> Empuje la maneta reguladora para <strong>armar el gatillo del seguro</strong>.
              </li>
              <li className="list-group-item bg-transparent px-0">
                <strong>Inicio del Roscado:</strong> Encienda el motor. Notará que el sistema de lubricación comienza a verter <strong>aceite de corte</strong> sobre la terraja para refrigerar y mejorar el acabado.
              </li>
              <li className="list-group-item bg-transparent px-0">
                <strong>Avance:</strong> Acerque la terraja a la tubería con el volante, presionando levemente hasta que se ejecuten los primeros hilos de la rosca; a partir de ahí, el proceso avanzará solo.
              </li>
              <li className="list-group-item bg-transparent px-0">
                <strong>Desconexión Automática:</strong> Cuando la rosca alcance la profundidad programada, el <strong>gancho del seguro</strong> saltará, liberando los dientes de la terraja automáticamente para evitar daños.
              </li>
              <li className="list-group-item bg-transparent px-0">
                <strong>Finalización:</strong> Detenga el motor y retire la tubería ya mecanizada.
              </li>
            </ul>
          </div>
          
          <div className="mb-5">
            <h5 className="fw-bold text-body mb-3">Video Tutorial</h5>
            <div className="ratio ratio-16x9 rounded overflow-hidden shadow-sm">
              <iframe 
                src="https://www.youtube.com/embed/m_Fn81jKhpI?si=QMegR-mVugycJWI0" 
                title="YouTube video player" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen>
              </iframe>
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