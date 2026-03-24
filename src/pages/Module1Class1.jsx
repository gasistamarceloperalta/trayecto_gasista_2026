import React from 'react';
import imgSifones from '../assets/images/modulo01/clase_01/sifones.png';
import imgVasosComunicantes from '../assets/images/modulo01/clase_01/vasos_comunicantes.png';
import imgPresionHidrostatica from '../assets/images/modulo01/clase_01/presion_hidroestatica.png';
import imgInfografiaPasoAPaso from '../assets/images/modulo01/clase_01/infografia_metro_patron_04.png';
import imgLaChocla from '../assets/images/modulo01/clase_01/la_chocla.png';


export default function Module1Class1() {
  return (
    <>
      {/* Vasos Comunicantes */}
      <section className="mb-5 bg-body p-4 p-md-5 rounded shadow-sm border-start border-4 border-primary">
        <h3 className="fw-bold mb-4 d-flex align-items-center">
          <i className="bi bi-droplet-half me-3 text-primary-custom fs-2"></i>
          Vasos Comunicantes
        </h3>
        <div className="text-muted lh-lg">
          <p>El fenómeno físico de los vasos comunicantes es un concepto fundamental para entender el funcionamiento de las instalaciones sanitarias, basándose en la tendencia de los líquidos a buscar un nivel de equilibrio.</p>
          
          <h5 className="fw-bold text-body mt-4">1. Definición del fenómeno</h5>
          <ul>
            <li><strong>Equilibrio de niveles:</strong> Si se tienen dos recipientes abiertos conectados por su parte inferior y se vierte líquido en uno de ellos, el fluido circulará hacia el recipiente más vacío hasta que ambos alcancen exactamente el mismo nivel.</li>
            <li><strong>Presión y reposo:</strong> En el momento en que los niveles se igualan, la presión del líquido es la misma en ambas columnas, el sistema entra en equilibrio y el fluido deja de desplazarse.</li>
          </ul>

          <h5 className="fw-bold text-body mt-4">2. Aplicaciones prácticas en instalaciones</h5>
          <p>Este fenómeno se manifiesta en diversos componentes de una obra sanitaria:</p>
          <ul>
            <li><strong>Sifones:</strong> El funcionamiento de un sifón cloacal se basa en este principio. Al verter agua en su interior, esta asciende por ambas ramas (la columna de entrada y la de salida) manteniendo un nivel coincidente que genera el cierre hidráulico.</li>
          </ul>
          <div className="my-4 text-center">
            <img src={imgSifones} alt="Sifones" className="img-fluid rounded shadow-sm"/>
          </div>
          <ul>
            <li><strong>Tanques de reserva:</strong> El agua de un tanque y las cañerías de distribución conectadas a él se comportan como vasos comunicantes. Asimismo, cuando se instalan dos o más tanques de reserva interconectados por su parte inferior (mediante un colector o puente), el agua mantiene el mismo nivel en todos ellos.</li>
            <li><strong>Red de agua potable:</strong> Si la red pública estuviera en reposo (sin consumo), por efecto de este fenómeno, el agua tendría un mismo nivel uniforme y estático en todos los puntos, conocido como nivel piezométrico estático.</li>
          </ul>

          <h5 className="fw-bold text-body mt-4">3. Uso como herramienta de medición (Nivel de manguera)</h5>
          <p>El manual destaca el uso de este principio físico para realizar tareas de precisión en la obra:</p>
          <ul>
            <li><strong>Traslado de niveles:</strong> Se utiliza una manguera transparente llena de agua para marcar puntos a una misma altura en lugares alejados.</li>
            <li><strong>Funcionamiento:</strong> Debido a los vasos comunicantes, el agua en ambos extremos de la manguera tendrá siempre el mismo nivel, lo que sirve como referencia exacta para poner a un mismo nivel dos puntos distantes.</li>
          </ul>
          <p>Este fenómeno es tan significativo que ayuda a comprender otros conceptos como la presión hidrostática, la cual depende de la altura de la "columna de agua" y no de la sección o forma del recipiente.</p>
          <div className="my-4 text-center">
            <img src={imgVasosComunicantes} alt="Vasos Comunicantes" className="img-fluid rounded shadow-sm"/>
          </div>
        </div>
        
        <div className="row g-3 mt-4">
          <div className="col-md-6">
            <div className="ratio ratio-16x9 rounded overflow-hidden shadow-sm">
              <iframe src="https://www.youtube.com/embed/JSkqnPZZIFc" title="Vasos Comunicantes 1" allowFullScreen></iframe>
            </div>
          </div>
          <div className="col-md-6">
            <div className="ratio ratio-16x9 rounded overflow-hidden shadow-sm">
              <iframe src="https://www.youtube.com/embed/z7b4bnBnaDI" title="Vasos Comunicantes 2" allowFullScreen></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Presión Hidrostática */}
      <section className="mb-5 bg-body p-4 p-md-5 rounded shadow-sm border-start border-4 border-secondary">
        <h3 className="fw-bold mb-4 d-flex align-items-center">
          <i className="bi bi-speedometer2 me-3 text-secondary-custom fs-2"></i>
          Presión Hidrostática
        </h3>
        <div className="text-muted lh-lg">
          <p>La presión hidrostática (o presión hidráulica estática) es un fenómeno físico fundamental en las instalaciones sanitarias, definido como la fuerza que ejerce una columna de agua sobre una superficie determinada.</p>
          
          <h5 className="fw-bold text-body mt-4">1. Definición y Relación con la Altura</h5>
          <ul>
            <li><strong>Independencia de la forma:</strong> La presión que ejerce el agua en reposo sobre las paredes y el fondo de un recipiente no depende de la sección o forma de la columna de agua, sino exclusivamente de su altura.</li>
            <li><strong>Relación de medida:</strong> En la práctica sanitaria, se establece que una columna de agua de 10 metros de altura sobre una superficie de 1 cm² genera una presión de 1 kg/cm². Si la altura se duplica (20 metros), la presión aumenta proporcionalmente (2 kg/cm²).</li>
            <li><strong>Unidades de medida:</strong> Además de kg/cm², se utilizan metros de columna de agua (m. col. agua) y atmósferas (1 kg/cm² ≈ 1 atmósfera ≈ 10 m. col. agua).</li>
          </ul>

          <h5 className="fw-bold text-body mt-4">2. Aplicación en el Tanque de Reserva</h5>
          <ul>
            <li><strong>Carga de agua:</strong> La presión en los artefactos de una vivienda (duchas, canillas) está dada por el peso de la columna de agua que baja desde el tanque elevado.</li>
            <li><strong>Cargas mínimas:</strong> Para garantizar el funcionamiento de ciertos artefactos, como los calefones, las normas exigen una altura mínima o "carga" (usualmente de 2 a 4 metros) medida desde el fondo del tanque hasta la salida del artefacto.</li>
            <li><strong>Presión y altura del edificio:</strong> En edificios, cuanta más altura separa al tanque del artefacto, mayor será la presión hidrostática en este último.</li>
          </ul>

          <h5 className="fw-bold text-body mt-4">3. Teorema Básico y Medición</h5>
          <ul>
            <li><strong>Diferencia de presión:</strong> La diferencia de presión entre dos puntos de un líquido en equilibrio es igual al peso de la columna de ese líquido cuya base es la unidad de superficie y su altura es el desnivel entre ambos puntos.</li>
            <li><strong>Instrumento de medición:</strong> La presión de los fluidos se mide técnicamente con un aparato llamado manómetro.</li>
          </ul>

          <h5 className="fw-bold text-body mt-4">4. Presión Estática vs. Dinámica</h5>
          <ul>
            <li><strong>Presión Estática:</strong> Es la presión del agua cuando el sistema está en reposo (sin consumo). En este estado, el nivel del agua busca equilibrarse en todos los puntos por el fenómeno de los vasos comunicantes, definiendo el llamado nivel estático o hidrostático.</li>
            <li><strong>Presión Dinámica:</strong> Al abrir un grifo y comenzar el movimiento del fluido, parte de la presión original se consume en vencer la resistencia del roce con las cañerías, lo que se conoce como pérdida de carga.</li>
          </ul>

          <h5 className="fw-bold text-body mt-4">5. Importancia en las Pruebas de Obra</h5>
          <ul>
            <li><strong>Prueba Hidráulica:</strong> Para verificar la hermeticidad de las instalaciones, se llenan las cañerías y se las somete a presión hidráulica, asegurando que no existan filtraciones ni exudaciones bajo la carga prevista. En desagües, se suelen realizar ensayos de presión interna a baja presión (por ejemplo, 2 m.c.a. o 0,2 kg/cm²).</li>
          </ul>
          <div className="my-4 text-center">
            <img src={imgPresionHidrostatica} alt="Presión Hidrostática" className="img-fluid rounded shadow-sm" />
          </div>
        </div>

      </section>

      {/* Metro Patrón */}
      <section className="mb-5 bg-body p-4 p-md-5 rounded shadow-sm border-start border-4 border-tertiary">
        <h3 className="fw-bold mb-4 d-flex align-items-center">
          <i className="bi bi-rulers me-3 text-tertiary-custom fs-2"></i>
          Metro Patrón
        </h3>
        <div className="text-muted lh-lg">
          <p>En topografía y geodesia aplicada a la construcción, el establecimiento de un Plano de Referencia de Cota Fija es vital. Físicamente, nos basamos en el principio de Vasos Comunicantes (Ley de Pascal). Al usar un nivel de manguera, la presión atmosférica actúa por igual en ambos extremos abiertos, garantizando que la superficie del líquido esté en un mismo plano horizontal, independientemente de las irregularidades del suelo.</p>
          
          <h5 className="fw-bold text-body mt-4">El "Cero" de la Obra</h5>
          <p>Imagina que el suelo de tu futura casa es una montaña rusa: un poco más alto aquí, un poco más bajo allá. Si instalas los caños siguiendo el suelo, te van a quedar todos torcidos. El "Metro Patrón" es como dibujar una línea invisible perfectamente derecha en el aire. Desde esa línea, mides siempre hacia abajo para saber dónde poner cada cosa, sin importar si el piso hoy es solo tierra o escombros.</p>

          <h5 className="fw-bold text-body mt-4">El truco del sorbete</h5>
          <p>¿Viste cuando sumergís un sorbete transparente en un vaso con gaseosa y tapas la punta con el dedo? El líquido se queda ahí. Si tuvieras un sorbete en forma de "U" gigante lleno de agua, el nivel en ambas puntas siempre sería el mismo. No importa si una punta está en la cocina y la otra en el baño: el agua no miente, siempre marca la misma altura.</p>

          <div className="my-4 text-center">
            <img src={imgInfografiaPasoAPaso} alt="Infografía Paso a Paso" className="img-fluid rounded shadow-sm"/>
          </div>

          <h5 className="fw-bold text-body mt-4">Secretos del Oficio</h5>
          <ol>
            <li><strong>Cuidado con las Burbujas:</strong> Si usas nivel de manguera, asegúrate de que no tenga ni una sola burbuja de aire. Una burbuja pequeña puede falsear el nivel por varios centímetros, y en una cloaca, 1 cm es la diferencia entre que el agua corra o se tape.</li>
            <li><strong>El "Choclazo" Perfecto:</strong> Al usar el hilo con tiza (chocla), no lo sueltes si hay viento o si el hilo está flojo. Debe estar muy tenso y el golpe contra la pared debe ser seco para que la línea sea nítida y fina.</li>
            <li><strong>La Regla de Oro:</strong> Siempre, pero SIEMPRE, marca el metro patrón antes de picar o colocar cañerías. Trabajar "a ojo" o midiendo desde un piso de tierra es la receta perfecta para el desastre sanitario.</li>
          </ol>
        </div>

        <div className="row g-3 mt-4">
          <div className="col-md-6">
            <div className="ratio ratio-16x9 rounded overflow-hidden shadow-sm">
              <iframe src="https://www.youtube.com/embed/t0x4j-TrFpY" title="Metro Patrón 1" allowFullScreen></iframe>
            </div>
          </div>
          <div className="col-md-6">
            <div className="ratio ratio-16x9 rounded overflow-hidden shadow-sm">
              <iframe src="https://www.youtube.com/embed/6XCotpfPWRQ" title="Metro Patrón 2" allowFullScreen></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Herramientas */}
      <section className="mb-5 bg-body p-4 p-md-5 rounded shadow-sm border-start border-4 border-quaternary">
        <h3 className="fw-bold mb-4 d-flex align-items-center">
          <i className="bi bi-tools me-3 text-quaternary-custom fs-2"></i>
          Herramientas: La Chocla
        </h3>
        <div className="text-muted lh-lg">
          <h5 className="fw-bold text-body mt-4">1. Definición y Función</h5>
          <p>La "chocla" es el sistema utilizado para trazar líneas largas y perfectamente rectas sobre paredes o pisos. El manual lo describe como un "hilo de albañil empolvado" con cal, yeso o algún polvo colorante. Su función principal en la instalación sanitaria es marcar el Nivel de Referencia (+ 1 M) sobre el nivel de piso terminado en todos los locales sanitarios.</p>
          
          <h5 className="fw-bold text-body mt-4">2. Procedimiento de uso (Trazado)</h5>
          <p>El manual explica el paso a paso para realizar este trazo:</p>
          <ol>
            <li><strong>Marcar los puntos:</strong> Se miden y marcan dos puntos a la misma altura (usualmente usando un nivel de manguera) en los extremos de la pared.</li>
            <li><strong>Entizar el hilo:</strong> Se utiliza un hilo impregnado en polvo colorante.</li>
            <li><strong>Tensar:</strong> Una persona en cada extremo hace coincidir el hilo con las marcas.</li>
            <li><strong>"Chocar" o disparar:</strong> Se toma el hilo por el centro, se aparta un poco de la pared sin que se desplace de los extremos y se suelta bruscamente.</li>
            <li><strong>Resultado:</strong> Al golpear la pared, el hilo deposita el polvo y deja una línea nítida y precisa.</li>
          </ol>

          <h5 className="fw-bold text-body mt-4">3. Aplicación en Instalaciones Sanitarias</h5>
          <p>Este trazado es fundamental para:</p>
          <ul>
            <li>Establecer la altura exacta de las conexiones de agua (fría y caliente) y las descargas de los artefactos.</li>
            <li>Asegurar que todos los elementos queden alineados a la altura reglamentaria antes de comenzar la rotura de paredes o el tendido de cañerías.</li>
          </ul>
          <div className="my-4 text-center">
            <img src={imgLaChocla} alt="La Chocla" className="img-fluid rounded shadow-sm"/>
          </div>
        </div>

        <div className="row g-3 mt-4">
          <div className="col-md-6">
            <div className="ratio ratio-16x9 rounded overflow-hidden shadow-sm">
              <iframe src="https://www.youtube.com/embed/VmEa1CWqYVI" title="Herramientas 1" allowFullScreen></iframe>
            </div>
          </div>
          <div className="col-md-6">
            <div className="ratio ratio-16x9 rounded overflow-hidden shadow-sm">
              <iframe src="https://www.youtube.com/embed/9dwgM3hTIOc" title="Herramientas 2" allowFullScreen></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Bibliografía */}
      <section className="mb-5 bg-body-secondary p-4 p-md-5 rounded shadow-sm">
        <h3 className="fw-bold mb-4 d-flex align-items-center">
          <i className="bi bi-journal-bookmark-fill me-3 text-primary fs-2"></i>
          Bibliografía y Material de Descarga
        </h3>
        <div className="row g-3">
          <div className="col-md-6">
            <a href="https://drive.google.com/file/d/1VcnU0kP6YRilWDf5E750nmwgo4Km23DD/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
              <div className="p-3 border rounded d-flex justify-content-between align-items-center bg-body hover-shadow transition-all h-100">
                <div className="d-flex align-items-center">
                  <i className="bi bi-file-earmark-pdf-fill text-danger fs-3 me-3"></i>
                  <div>
                    <h6 className="mb-1 fw-bold text-body">Material de Estudio 1</h6>
                    <small className="text-muted">Google Drive PDF</small>
                  </div>
                </div>
                <button className="btn btn-sm btn-outline-primary rounded-pill px-3">
                  <i className="bi bi-box-arrow-up-right"></i>
                </button>
              </div>
            </a>
          </div>
          <div className="col-md-6">
            <a href="https://drive.google.com/file/d/12vnIg-oPZdOOPAun01c8h1BQe_4GDxnD/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
              <div className="p-3 border rounded d-flex justify-content-between align-items-center bg-body hover-shadow transition-all h-100">
                <div className="d-flex align-items-center">
                  <i className="bi bi-file-earmark-pdf-fill text-danger fs-3 me-3"></i>
                  <div>
                    <h6 className="mb-1 fw-bold text-body">Material de Estudio 2</h6>
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
