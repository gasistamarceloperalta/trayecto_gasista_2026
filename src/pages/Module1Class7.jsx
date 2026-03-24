import React from 'react';

const imagenes = import.meta.glob(
  '../assets/images/modulo01/clase_07/*',
  { eager: true }
);
const img = (nombre) => imagenes[`../assets/images/modulo01/clase_07/${nombre}`]?.default;


export default function Module1Class7() {
  return (
    <>
      {/* Circuito de Prueba */}
      <section className="mb-5 bg-body p-4 p-md-5 rounded shadow-sm border-start border-4 border-primary">
        <h3 className="fw-bold mb-4 d-flex align-items-center">
          <i className="bi bi-diagram-3 me-3 text-primary-custom fs-2"></i>
          Circuito de Prueba
        </h3>
        <div className="text-muted lh-lg">
                    <div className="my-4 text-center">
            <img src={img('circuito_epoxi.jpeg')} alt="Niple" className="img-fluid rounded shadow-sm"/>
          </div>
          <h5 className="fw-bold text-body mt-4">1. Competencias Técnicas Requeridas</h5>
          <p>Para trabajar con epoxi, un profesional debe dominar:</p>
          <ul>
            <li><strong>Roscado de tubería metálica:</strong> Uso de terrajas para crear hilos NPT o BSP con la profundidad correcta.</li>
            <li><strong>Cálculo de "descuento de accesorios":</strong> Capacidad de restar la longitud interna de los codos y la T a la medida total para cortar el tubo exacto.</li>
            <li><strong>Torque controlado:</strong> Aplicación de fuerza sin marcar o dañar la resina epóxica (que protege contra la corrosión).</li>
            <li><strong>Sellado de alta presión:</strong> Aplicación técnica de pasta selladora (litargirio y glicerina o selladores anaeróbicos) y cáñamo/teflón.</li>
            <li><strong>Prueba de estanqueidad:</strong> Realización de pruebas neumáticas o hidráulicas para verificar cero fugas en las juntas roscadas.</li>
          </ul>

          <h5 className="fw-bold text-body mt-4">2. Preparación y Roscado</h5>
          <p>Se realiza el corte de los niples según las medidas del plano (restando el espacio de los accesorios). Se utiliza una terraja manual para crear las roscas en los extremos. Es vital limpiar la viruta metálica y el aceite de corte para que el sellador adhiera bien.</p>

          <h5 className="fw-bold text-body mt-4">3. Sellado de Juntas</h5>
          <p>Se aplica una capa uniforme de sellador para gas/agua (tipo pasta anaeróbica) sobre la rosca macho. Se puede reforzar con un par de vueltas de cinta de teflón de alta densidad o hilo de cáñamo fino para asegurar que el sellador penetre en los valles de la rosca.</p>

          <h5 className="fw-bold text-body mt-4">4. Ensamblaje de Tramos</h5>
          <p>Se procede al ajuste de los codos y la T superior utilizando llaves de fuerza (Stilson). Se deben usar mordazas protegidas o trapos para no rayar el recubrimiento epóxico del tubo, ya que cualquier rasguño es un punto potencial de oxidación futura.</p>

          <h5 className="fw-bold text-body mt-4">5. Cierre con Unión Doble y Prueba</h5>
          <p>El paso final es conectar la unión doble situada en la parte inferior. Esta pieza permite unir dos secciones fijas del circuito sin tener que girar todo el conjunto. Una vez apretada, se realiza la presurización para confirmar que no hay goteos.</p>
        </div>
      </section>

      {/* Niple */}
      <section className="mb-5 bg-body p-4 p-md-5 rounded shadow-sm border-start border-4 border-secondary">
        <h3 className="fw-bold mb-4 d-flex align-items-center">
          <i className="bi bi-nut me-3 text-secondary-custom fs-2"></i>
          Niple
        </h3>
        <div className="text-muted lh-lg">
          <p>De acuerdo con los manuales de Nisnovich, el niple (también denominado "machón") es un accesorio fundamental para la vinculación de elementos en las instalaciones sanitarias.</p>
          <p>A continuación, se detalla su uso, características y aplicaciones específicas:</p>

          <h5 className="fw-bold text-body mt-4">1. Función y Definición Técnica</h5>
          <p>El niple se define como un trozo corto de caño que posee roscas exteriores (macho) en ambos extremos. Su función principal es servir de puente para unir dos piezas que tienen rosca hembra o para realizar extensiones cortas en una línea recta.</p>

          <h5 className="fw-bold text-body mt-4">2. Variantes del Accesorio</h5>
          <p>Existen distintos tipos de niples según la necesidad de la instalación:</p>
          <ul>
            <li><strong>Sentido de la rosca:</strong> Generalmente, ambas roscas son "derechas" (sentido horario), pero existen versiones especiales con una rosca derecha en un extremo y una izquierda en el otro.</li>
            <li><strong>Niple "Entrerrosca":</strong> Es una variante que incluye una tuerca fija central (usualmente hexagonal), lo que permite aplicar herramientas de ajuste con mayor facilidad sin dañar la rosca.</li>
            <li><strong>Longitudes:</strong> Se comercializan en versiones "cortos" y "largos", pudiendo estos últimos alcanzar una longitud de hasta 50 cm.</li>
          </ul>

          <h5 className="fw-bold text-body mt-4">3. Aplicaciones en la Obra</h5>
          <p>El uso del niple varía según el sistema donde se aplique:</p>
          <ul>
            <li><strong>Provisión de agua:</strong> Es indispensable en instalaciones de acero galvanizado para unir cuplas, válvulas y otros accesorios con rosca interna. También se utiliza en el armado de colectores y puentes colectores a la salida de los tanques de reserva para conectar las distintas bajadas.</li>
            <li><strong>Sistemas de desagüe:</strong> En este contexto, se suelen llamar "enchufes dobles" o niples, y se utilizan para asegurar que las piezas penetren la medida justa en las campanas y facilitar el armado de la cañería en tramos rectos de igual diámetro.</li>
            <li><strong>Pruebas de hermeticidad:</strong> Durante la realización de la prueba hidráulica, se utiliza un niple central para conectar el "vertical" (caño de carga de agua) al sistema, permitiendo un ajuste seguro para inyectar la presión necesaria.</li>
          </ul>

          <h5 className="fw-bold text-body mt-4">4. Consideraciones de Instalación</h5>
          <ul>
            <li><strong>Material:</strong> Al elegir el niple, se debe considerar que sea compatible con el material del caño al que se une para evitar problemas de corrosión galvánica o fallas en el sellado.</li>
            <li><strong>Ajuste:</strong> Para su colocación, el manual recomienda el uso de llaves fijas o ajustables sobre la parte plana del accesorio (si es entrerrosca) para no deformar los filetes de la rosca.</li>
          </ul>

          <div className="my-4 text-center">
            <img src={img('Niple_de_conexion.png')} alt="Niple" className="img-fluid rounded shadow-sm"/>
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
