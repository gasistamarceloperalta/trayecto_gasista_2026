import React from 'react';

const imagenes = import.meta.glob(
  '../assets/images/modulo01/clase_02/*',
  { eager: true }
);
const img = (nombre) => imagenes[`../assets/images/modulo01/clase_02/${nombre}`]?.default;

export default function Module1Class2() {
  return (
    <>
      {/* Calefón */}
      <section className="mb-5 bg-body p-4 p-md-5 rounded shadow-sm border-start border-4 border-primary">
        <h3 className="fw-bold mb-4 d-flex align-items-center">
          <i className="bi bi-fire me-3 text-primary-custom fs-2"></i>
          Calefón y su Clasificación
        </h3>
        <div className="text-muted lh-lg">
          <p>El calefón es un tipo de calentador de agua definido técnicamente como un calentador instantáneo de calentamiento directo. A diferencia de los termotanques, el agua se calienta rápidamente mientras circula por una serpentina que recibe calor de un quemador de gas o una resistencia eléctrica.</p>
          
          <h5 className="fw-bold text-body mt-4">1. Funcionamiento y Componentes</h5>
          <ul>
            <li><strong>Principio:</strong> Al abrir una canilla, el flujo de agua activa un diafragma que abre el paso del gas hacia el quemador, el cual es encendido por una llama piloto o un sistema electrónico.</li>
            <li><strong>Componentes clave:</strong> Serpentina (caño curvo de cobre), radiador, quemador, válvula de gas y conducto de ventilación.</li>
            <li><strong>Capacidad:</strong> Se mide en litros por minuto (L/min), que representa la cantidad de agua que el artefacto puede elevar en 20°C respecto a la temperatura de entrada.</li>
          </ul>

          <h5 className="fw-bold text-body mt-4">2. Ventajas y Desventajas</h5>
          <ul>
            <li><strong>Ventajas:</strong> Calientan agua de forma inmediata e ininterrumpida, ocupan poco espacio y solo consumen energía cuando se utiliza el agua caliente.</li>
            <li><strong>Desventajas:</strong> Requieren una presión mínima (carga de agua) para funcionar, no responden bien ante varias demandas simultáneas y son propensos a obstruirse por el sarro en zonas de aguas duras.</li>
          </ul>

          <h5 className="fw-bold text-body mt-4">3. Requisitos de Instalación (Seguridad y Presión)</h5>
          <p>La instalación del calefón está estrictamente regulada para prevenir accidentes por monóxido de carbono y asegurar su correcto encendido:</p>
          <ul>
            <li><strong>Ubicación prohibida:</strong> Está totalmente prohibido instalar calefones dentro de baños, dormitorios o cualquier local habitable.</li>
            <li><strong>Ubicación en cocina:</strong> No puede colocarse sobre el artefacto de cocina ni sobre la pileta de lavar (según reglamentos de gas).</li>
            <li><strong>Ventilación:</strong> Debe contar con un conducto de humo hacia el exterior, que puede ser de tiro natural o tiro balanceado.</li>
            <li><strong>Carga de Agua (Presión):</strong> Para que el diafragma abra el paso del gas, se necesita una altura mínima desde el fondo del tanque de reserva hasta la ducha:
              <ul>
                <li>4 metros si la bajada alimenta a varios artefactos o unidades.</li>
                <li>2 metros si la bajada es exclusiva para el calefón y tiene un diámetro de al menos 19 mm.</li>
              </ul>
            </li>
            <li><strong>Válvulas:</strong> Se recomienda usar una llave de paso tipo esclusa en la entrada de agua fría cuando hay poca carga, ya que no resta presión.</li>
          </ul>

          <div className="my-4 text-center">
            <img src={img('calefon_01.png')} alt="Calefón" className="img-fluid rounded shadow-sm"/>
          </div>

          <h4 className="fw-bold text-body mt-5 border-bottom pb-2">Clasificación</h4>
          <p>Esta clasificación es crucial para la seguridad, ya que determina cómo el artefacto obtiene el aire para la combustión y cómo expulsa el monóxido de carbono.</p>

          <h5 className="fw-bold text-body mt-4">1. Calefones de Tiro Natural (A)</h5>
          <ul>
            <li><strong>Funcionamiento:</strong> Toman el aire necesario para que el quemador funcione directamente del ambiente donde se encuentran instalados.</li>
            <li><strong>Evacuación:</strong> Los gases quemados son expulsados al exterior mediante un conducto o caño de ventilación vertical, aprovechando el tiro ascendente natural del aire caliente.</li>
            <li><strong>Instalación:</strong> Al depender del aire del local, requieren que el ambiente tenga rejillas de ventilación permanentes para asegurar la renovación del oxígeno.</li>
          </ul>

          <h5 className="fw-bold text-body mt-4">2. Calefones de Tiro Balanceado (B y C)</h5>
          <ul>
            <li><strong>Funcionamiento:</strong> Son sistemas estancos o herméticos respecto al ambiente interior. Toman el aire para la combustión directamente del exterior y expulsan los gases también hacia el exterior.</li>
            <li><strong>Tipos de salida:</strong>
              <ul>
                <li>Salida posterior (B): La ventilación sale directamente por la pared detrás del artefacto.</li>
                <li>Salida lateral (C): El conducto se dirige hacia un costado antes de salir al exterior.</li>
              </ul>
            </li>
            <li><strong>Ventaja de seguridad:</strong> Son los más seguros ya que no consumen el oxígeno del local ni pueden liberar gases tóxicos dentro de la vivienda en condiciones normales de uso.</li>
          </ul>

          <h5 className="fw-bold text-body mt-4">3. Calefones de Tiro Forzado</h5>
          <p><strong>A. Funcionamiento: El Rol del Extractor</strong><br />
          A diferencia de un calefón de tiro natural, que depende de la diferencia de densidad del aire para que los gases "suban solos", el de tiro forzado incorpora un ventilador o extractor eléctrico (turbina) ubicado generalmente en la parte superior del intercambiador de calor.</p>
          <ul>
            <li><strong>Ciclo de encendido:</strong> Al abrir el grifo, el sensor de flujo activa primero el ventilador.</li>
            <li><strong>Presostato de seguridad:</strong> Antes de liberar el gas, un sensor de presión de aire (presostato) verifica que el ventilador esté girando y que el conducto no esté obstruido. Si no hay flujo de aire, el equipo no enciende.</li>
            <li><strong>Combustión asistida:</strong> Una vez confirmada la evacuación, se produce la chispa y la apertura de las válvulas de gas.</li>
          </ul>

          <p className="mt-3"><strong>B. Tipo de Salida y Evacuación</strong></p>
          <ul>
            <li><strong>Diámetro Reducido:</strong> Al ser una expulsión mecánica, suelen utilizar conductos de menor diámetro (frecuentemente de 2 o 3 pulgadas) en comparación con los de tiro natural.</li>
            <li><strong>Material:</strong> Se utilizan tubos de aluminio rígido o acero inoxidable con juntas estancas para evitar fugas de gases hacia el interior de la vivienda.</li>
            <li><strong>Configuración Coaxial o Monotubo:</strong>
              <ul>
                <li>Monotubo: Solo expulsa gases (el aire para quemar lo toma del ambiente).</li>
                <li>Coaxial: Un tubo dentro de otro; el interno expulsa gases y el externo aspira aire limpio del exterior (esto lo convierte técnicamente en un equipo de cámara estanca).</li>
              </ul>
            </li>
          </ul>

          <p className="mt-3"><strong>C. Ventajas de Seguridad (Análisis de Riesgos)</strong></p>
          <ol>
            <li><strong>Eliminación del "Efecto Tapón":</strong> En días de mucho viento o alta presión atmosférica, los gases de un tiro natural pueden "rebotar" y entrar a la casa. El ventilador del tiro forzado vence cualquier resistencia climática.</li>
            <li><strong>Sensor de Obstrucción Real:</strong> Si un nido de pájaros o suciedad bloquea la salida, el presostato corta el suministro eléctrico y de gas instantáneamente.</li>
            <li><strong>Menor Dependencia del "Sombrerete":</strong> No requiere una terminación de conducto tan compleja en el techo para generar succión, ya que la fuerza proviene del motor interno.</li>
            <li><strong>Aislamiento de la Combustión:</strong> En los modelos que son además "Cámara Estanca", el proceso de fuego ocurre en una caja sellada, sin contacto con el oxígeno del ambiente donde se encuentra el usuario.</li>
          </ol>

          <div className="my-4 text-center">
            <img src={img('calefon_02_tipos.png')} alt="Clasificación de Calefones" className="img-fluid rounded shadow-sm"/>
          </div>
        </div>
      </section>

      {/* Termotanque */}
      <section className="mb-5 bg-body p-4 p-md-5 rounded shadow-sm border-start border-4 border-secondary">
        <h3 className="fw-bold mb-4 d-flex align-items-center">
          <i className="bi bi-thermometer-half me-3 text-secondary-custom fs-2"></i>
          Termotanque
        </h3>
        <div className="text-muted lh-lg">
          <h5 className="fw-bold text-body mt-4">1. Definición</h5>
          <p>El termotanque es un calentador acumulador de agua. Técnicamente, son receptáculos aislados térmicamente donde una reserva de agua es calentada y mantenida a una temperatura seleccionada previamente. A diferencia del calefón (que es instantáneo), el termotanque funciona mediante una fuente de calor que se activa automáticamente si la temperatura del agua desciende respecto al nivel elegido en el termostato.</p>
          
          <h5 className="fw-bold text-body mt-4">2. Clasificación por el Tipo de Energía</h5>
          <ul>
            <li><strong>A Gas:</strong> Son los más utilizados en Argentina; el calor se transfiere al agua a través del fondo del tanque y de las paredes del conducto de humo.</li>
            <li><strong>Eléctricos:</strong> Utilizan una resistencia eléctrica blindada sumergida en el agua, regulada por un control automático de temperatura.</li>
            <li><strong>Duales:</strong> Modelos que pueden funcionar alternativamente con gas o electricidad.</li>
            <li><strong>Otras fuentes:</strong> También existen modelos que utilizan combustibles sólidos (leña, carbón), combustibles líquidos (gas-oil, kerosene) o energía solar.</li>
          </ul>

          <h5 className="fw-bold text-body mt-4">3. Clasificación por Capacidad y Rendimiento</h5>
          <ul>
            <li><strong>Por Capacidad:</strong> Se fabrican en una amplia gama que va desde pequeños depósitos de 20 litros hasta grandes unidades industriales de 6.000 litros.</li>
            <li><strong>De Alta Recuperación:</strong> Son modelos diseñados para producir una mayor cantidad de agua caliente por hora, ya que calientan el agua fría de reposición en menos tiempo, reduciendo la espera en situaciones de alto consumo.</li>
          </ul>

          <h5 className="fw-bold text-body mt-4">4. Clasificación por Formato y Ubicación</h5>
          <ul>
            <li><strong>Verticales y Horizontales:</strong> Según la disposición del tanque para adaptarse al espacio disponible.</li>
            <li><strong>De Pie o Murales:</strong> Dependiendo de si se apoyan en el suelo o se cuelgan de la pared.</li>
          </ul>

          <h5 className="fw-bold text-body mt-4">5. Características y Ventajas Técnicas</h5>
          <ul>
            <li><strong>Presión:</strong> Una ventaja clave es que no requieren una "carga mínima" de agua para encender, pudiendo funcionar incluso si el tanque de reserva está a su mismo nivel.</li>
            <li><strong>Uso simultáneo:</strong> Si están bien dimensionados, permiten el uso de varios grifos al mismo tiempo sin variaciones bruscas de temperatura.</li>
            <li><strong>Sistemas de seguridad:</strong> Vienen provistos de un termostato (corta el paso de energía al alcanzar la temperatura), válvula de seguridad (corta el gas si se apaga el piloto), válvula de escape (para sobrepresiones o exceso de vapor) y ánodos de magnesio para reducir la corrosión galvánica.</li>
          </ul>

          <div className="my-4 text-center">
            <img src={img('termotanque_01.png')} alt="Termotanque" className="img-fluid rounded shadow-sm" />
          </div>
        </div>
      </section>

      {/* Columna de Agua y Presión Máxima */}
      <section className="mb-5 bg-body p-4 p-md-5 rounded shadow-sm border-start border-4 border-tertiary">
        <h3 className="fw-bold mb-4 d-flex align-items-center">
          <i className="bi bi-water me-3 text-tertiary-custom fs-2"></i>
          Columna de Agua y Presión Máxima
        </h3>
        <div className="text-muted lh-lg">
          <p>Una columna de agua es un concepto físico utilizado para medir y explicar la presión hidrostática en las instalaciones sanitarias.</p>
          
          <h5 className="fw-bold text-body mt-4">1. Definición y Relación con la Presión</h5>
          <ul>
            <li><strong>La regla de los 10 metros:</strong> Una columna de agua de 10 metros de altura sobre una superficie de 1cm² ejerce una presión de 1kg/cm².</li>
            <li><strong>Proporcionalidad:</strong> Si la altura de la columna aumenta, la presión crece en la misma proporción. Por ejemplo, una columna de 20 metros generará una presión de 2kg/cm².</li>
          </ul>

          <h5 className="fw-bold text-body mt-4">2. Independencia de la Forma y Sección</h5>
          <p>Un principio clave destacado en las fuentes es que la presión que ejerce el agua no depende de la sección (ancho) ni de la forma del recipiente, sino exclusivamente de la altura de la columna de agua. Esto significa que un tubo delgado de 10 metros de alto genera la misma presión en su base que un tanque ancho de la misma altura.</p>

          <h5 className="fw-bold text-body mt-4">3. Aplicación Práctica: "La Carga de Agua"</h5>
          <ul>
            <li>Es la distancia vertical medida desde el fondo del tanque de reserva hasta la salida del artefacto más elevado (como la flor de la ducha).</li>
            <li>Esta altura es la que garantiza que el agua baje con la fuerza suficiente para que funcionen artefactos como los calefones, los cuales requieren una carga mínima de entre 2 y 4 metros de columna de agua según el caso.</li>
          </ul>

          <div className="my-4 text-center">
            <img src={img('columna_de_agua_01.jpg')} alt="Columna de Agua" className="img-fluid rounded shadow-sm"/>
          </div>

          <h4 className="fw-bold text-body mt-5 border-bottom pb-2">La Presión Máxima</h4>
          <p>La presión máxima recomendada para una columna de agua (o carga) en instalaciones sanitarias comunes es de 45 metros.</p>

          <h5 className="fw-bold text-body mt-4">1. Justificación del Límite de 45 Metros</h5>
          <ul>
            <li><strong>Confort y Resistencia:</strong> Se establece este máximo para garantizar un uso confortable de los artefactos y porque las cañerías comunes están preparadas para resistir esa presión máxima de trabajo.</li>
            <li><strong>Equivalencia:</strong> Una columna de agua de 45 metros equivale a una presión estática de 4,5 kg/cm².</li>
          </ul>

          <h5 className="fw-bold text-body mt-4">2. Soluciones para Edificios de Gran Altura</h5>
          <ul>
            <li><strong>Tanque de Reserva Intermedio:</strong> Se instalan estos tanques para que actúen como "reductores de presión" en los sectores más bajos del edificio, evitando que los artefactos de las primeras plantas reciban una carga excesiva.</li>
            <li><strong>Válvulas Reductoras de Presión:</strong> En los sectores de la red que superan la carga de 45 m, se pueden intercalar estas válvulas para proteger la instalación.</li>
          </ul>

          <div className="my-4 text-center">
            <img src={img('Columna_de_agua_02.png')} alt="Presión Máxima" className="img-fluid rounded shadow-sm"/>
          </div>
        </div>
      </section>

      {/* Bomba Presurizadora */}
      <section className="mb-5 bg-body p-4 p-md-5 rounded shadow-sm border-start border-4 border-quaternary">
        <h3 className="fw-bold mb-4 d-flex align-items-center">
          <i className="bi bi-gear-wide-connected me-3 text-quaternary-custom fs-2"></i>
          La Bomba Presurizadora
        </h3>
        <div className="text-muted lh-lg">
          <h5 className="fw-bold text-body mt-4">1. Definición</h5>
          <p>Son pequeños equipos diseñados para viviendas que sufren de falta de presión de agua, ya sea porque el tanque de reserva está a poca altura respecto a los artefactos o porque las cañerías tienen una sección (diámetro) insuficiente. A diferencia de los tanques de reserva elevados que usan la gravedad, estos equipos inyectan presión de forma mecánica. Su característica principal es que presurizan la instalación solo cuando están en funcionamiento, es decir, mientras hay un consumo abierto.</p>
          
          <h5 className="fw-bold text-body mt-4">2. Funcionamiento</h5>
          <p>El equipo se basa en una electrobomba centrífuga que incorpora un sensor automático.</p>
          <ul>
            <li><strong>Activación:</strong> Se pone en marcha automáticamente en el momento en que se abre una canilla o una ducha.</li>
            <li><strong>Parada:</strong> Se detiene en cuanto se cierran los grifos.</li>
          </ul>

          <h5 className="fw-bold text-body mt-4">3. Tipos y Aplicaciones</h5>
          <ul>
            <li><strong>Presurización Total:</strong> La bomba se coloca a la salida del tanque de reserva, justo antes del colector. De esta manera, se brinda mayor presión a toda la instalación de la casa.</li>
            <li><strong>Presurización Sectorizada:</strong> El equipo se instala para alimentar únicamente una o más bajadas específicas que presenten problemas (por ejemplo, solo la bajada que alimenta una ducha de alta presión o un hidromasaje).</li>
          </ul>

          <h5 className="fw-bold text-body mt-4">Diferencia con Equipos Hidroneumáticos</h5>
          <ul>
            <li><strong>Presurizadores:</strong> Son más simples, pequeños y solo funcionan durante el consumo.</li>
            <li><strong>Hidroneumáticos:</strong> Incluyen un tanque con una membrana elástica y aire comprimido; estos mantienen la instalación bajo presión constante (presión permanente) incluso cuando las canillas están cerradas, y la bomba solo enciende para recuperar la presión del tanque cuando esta baja de un nivel prefijado.</li>
          </ul>

          <div className="my-4 text-center">
            <img src={img('bomba_presurizadora_01.png')} alt="Bomba Presurizadora" className="img-fluid rounded shadow-sm" />
          </div>
        </div>
      </section>

      {/* Caños y Medidas */}
      <section className="mb-5 bg-body p-4 p-md-5 rounded shadow-sm border-start border-4 border-primary">
        <h3 className="fw-bold mb-4 d-flex align-items-center">
          <i className="bi bi-pip me-3 text-primary-custom fs-2"></i>
          Caños y Medidas
        </h3>
        <div className="text-muted lh-lg">
          <p>Los caños para uso sanitario se clasifican principalmente por su función (provisión de agua o desagüe) y por el material del que están fabricados.</p>
          
          <h5 className="fw-bold text-body mt-4">1. Caños para Provisión de Agua Potable</h5>
          <p><strong>A. Metálicos</strong></p>
          <ul>
            <li><strong>Cobre y Latón:</strong> Son muy resistentes y tienen paredes internas muy lisas que facilitan el flujo de agua. El cobre tiene propiedades que inhiben el crecimiento de bacterias.</li>
            <li><strong>Acero Galvanizado:</strong> Tubos de acero recubiertos de zinc para protegerlos de la corrosión. Son muy rígidos, ideales para tramos largos como montantes o colectores.</li>
            <li><strong>Acero Inoxidable:</strong> Material muy resistente a la corrosión y la presión, con bajo coeficiente de dilatación.</li>
            <li><strong>Plomo:</strong> Muy usado antiguamente por su maleabilidad, pero hoy su uso está cuestionado y limitado a reparaciones.</li>
          </ul>
          <p><strong>B. Plásticos</strong></p>
          <ul>
            <li><strong>Polipropileno (P.P.):</strong> Muy flexible y ligero. Existen varios tipos, siendo el Polipropileno Copolímero Random el más avanzado por su resistencia a altas presiones y temperaturas.</li>
            <li><strong>Polietileno (P.E.):</strong> Se vende en rollos de gran longitud. El PEBD (baja densidad) es económico y se usa para redes de distribución externa o riego.</li>
            <li><strong>PVC y C-PVC:</strong> El PVC rígido se usa principalmente para agua fría. El C-PVC (colorado) está formulado para resistir agua caliente hasta 80-85°C.</li>
          </ul>

          <h5 className="fw-bold text-body mt-4">2. Caños para Desagües (Cloacales y Pluviales)</h5>
          <p><strong>A. Metálicos</strong></p>
          <ul>
            <li><strong>Hierro Fundido (F.F.):</strong> Es el material de mayor resistencia física y larga vida útil. Es incombustible y tiene una excelente aislación acústica.</li>
            <li><strong>Plomo:</strong> Se utiliza para desagües secundarios, piletas de piso y ramales de inodoros debido a que se puede curvar y adaptar fácilmente en obra.</li>
            <li><strong>Chapa Galvanizada:</strong> Se utiliza exclusivamente para desagües pluviales, principalmente en canaletas de techo y caños de lluvia exteriores.</li>
          </ul>
          <p><strong>B. Plásticos</strong></p>
          <ul>
            <li><strong>Polipropileno Sanitario (P.P.S.):</strong> Actualmente muy utilizado por su facilidad de montaje. Se une mediante juntas elásticas (O-rings).</li>
            <li><strong>PVC:</strong> Muy común en desagües. Existe la "Línea Aprobada" (3,2 mm), obligatoria para desagües cloacales primarios.</li>
          </ul>

          <h5 className="fw-bold text-body mt-4">Resumen de Aplicación por Color Reglamentario</h5>
          <ul>
            <li><strong>Azul:</strong> Provisión de agua fría.</li>
            <li><strong>Rojo Carmín:</strong> Provisión de agua caliente.</li>
            <li><strong>Rojo Bermellón:</strong> Desagües cloacales primarios.</li>
            <li><strong>Marrón Sepia:</strong> Desagües cloacales secundarios.</li>
            <li><strong>Amarillo:</strong> Desagües pluviales.</li>
            <li><strong>Verde:</strong> Ventilaciones.</li>
          </ul>

          <div className="my-4 text-center">
            <img src={img('canios_01.png')} alt="Caños" className="img-fluid rounded shadow-sm" />
          </div>

          <h4 className="fw-bold text-body mt-5 border-bottom pb-2">Medidas</h4>
          
          <h5 className="fw-bold text-body mt-4">1. Cañerías de Provisión de Agua Potable</h5>
          <ul>
            <li><strong>Tabla de equivalencias comerciales habituales:</strong>
              <ul>
                <li>9 mm: 3/8".</li>
                <li>13 mm: 1/2" (Medida más común para ramales internos).</li>
                <li>19 mm: 3/4" (Usada en bajadas y cañerías de entrada).</li>
                <li>25 mm: 1".</li>
                <li>32 mm: 1 1/4".</li>
                <li>38 mm: 1 1/2".</li>
                <li>50 mm: 2".</li>
              </ul>
            </li>
          </ul>

          <h5 className="fw-bold text-body mt-4">2. Cañerías de Desagüe (Cloacales y Pluviales)</h5>
          <ul>
            <li><strong>Diámetros estándar para desagües:</strong>
              <ul>
                <li>100 o 110 mm: Es el diámetro reglamentario para la cañería principal, inodoros y caños de descarga vertical (C.D.V.).</li>
                <li>60 o 63 mm: Usado para salidas de piletas de piso, desagües de lavarropas y ventilaciones subsidiarias.</li>
                <li>50 mm: Diámetro común para ramales secundarios de cocina o lavadero.</li>
                <li>32 o 38/40 mm: Utilizados en los desvíos cortos de artefactos secundarios como lavatorios y bidés.</li>
              </ul>
            </li>
          </ul>

          <div className="my-4 text-center">
            <img src={img('canios_02.png')} alt="Medidas" className="img-fluid rounded shadow-sm"/>
          </div>
        </div>
      </section>

      {/* Herramientas */}
      <section className="mb-5 bg-body p-4 p-md-5 rounded shadow-sm border-start border-4 border-secondary">
        <h3 className="fw-bold mb-4 d-flex align-items-center">
          <i className="bi bi-tools me-3 text-secondary-custom fs-2"></i>
          Herramientas
        </h3>
        <div className="text-muted lh-lg">

          {/* Terraja */}
          <h5 className="fw-bold text-body mt-4">Terraja</h5>
          <p>La terraja es la herramienta manual utilizada para realizar roscas exteriores en los caños que requieren uniones roscadas, permitiendo la conexión de accesorios. Aunque en el P.V.C. es muy común la unión pegada, el manual confirma que este material también admite uniones roscadas.</p>
          <p>A continuación, se describe la herramienta y su uso paso a paso:</p>

          <h6 className="fw-bold text-body mt-3">Descripción de la Terraja</h6>
          <ul>
            <li><strong>Función:</strong> Tallar una rosca en el extremo exterior de un caño.</li>
            <li><strong>Componentes:</strong> Posee cuchillas metálicas (peines) que varían según el material y el diámetro del caño.</li>
            <li><strong>Versatilidad:</strong> La pieza que contiene las cuchillas (cabezal) puede ser fija, cambiable o ajustable para adaptarse a distintos diámetros.</li>
            <li><strong>Tipos:</strong> Existen versiones manuales (ideales para trabajos pequeños o autoconstrucción) y roscadoras eléctricas para mayor volumen de obra.</li>
          </ul>

          <h6 className="fw-bold text-body mt-3">Uso paso a paso (Preparación y Roscado)</h6>
          <p>Para obtener una rosca estanca y precisa, se deben seguir estos pasos extraídos de las secciones de trabajo de caños:</p>
          <ol>
            <li><strong>Corte del caño:</strong> El corte debe ser perfectamente perpendicular al eje del caño. Se recomienda usar una "caja guía" o ingletera para asegurar la escuadra, evitando que la unión quede torcida y pierda hermeticidad.</li>
            <li><strong>Sacar rebabas (Biselado):</strong> Es fundamental eliminar las rebabas y virutas que quedan tras el corte. En caños plásticos como el P.V.C., se debe repasar el borde interno y externo con una lima o un escariador. Esto facilita la entrada de la terraja y evita que las virutas obstruyan las cuchillas.</li>
            <li><strong>Preparación de la herramienta:</strong> Se debe seleccionar el cabezal correspondiente al diámetro del caño (por ejemplo, 1/2", 3/4", etc.) y verificar que las cuchillas estén limpias.</li>
            <li><strong>Roscado y Lubricación:</strong>
              <ul>
                <li>Se coloca el caño en una prensa (morza) para inmovilizarlo.</li>
                <li>Se posiciona la terraja alineada con el caño y se comienza a girar lentamente.</li>
                <li>El manual enfatiza que se debe tener presente la lubricación constante de las cuchillas y del caño durante todo el proceso de tallado para evitar desgarros en el material y proteger el filo de la herramienta.</li>
              </ul>
            </li>
            <li><strong>Limpieza final:</strong> Una vez terminada la longitud de rosca necesaria, se retira la terraja y se limpian cuidadosamente los restos de material y lubricante tanto del caño como de las cuchillas de la herramienta antes de proceder al sellado de la unión.</li>
          </ol>
          <p><strong>Nota sobre el P.V.C.:</strong> Para instalaciones cloacales, se utiliza preferentemente el P.V.C. de "Línea Aprobada" (espesor de 3,2 mm), ya que su mayor espesor de pared garantiza una mejor resistencia estructural en las uniones.</p>

          <div className="row g-3 mt-2 mb-4">
            <div className="col-md-6">
              <div className="ratio ratio-16x9 rounded overflow-hidden shadow-sm">
                <iframe src="https://www.youtube.com/embed/KWbxUR9Sl5U" title="Terraja 1" allowFullScreen></iframe>
              </div>
            </div>
            <div className="col-md-6">
              <div className="ratio ratio-16x9 rounded overflow-hidden shadow-sm">
                <iframe src="https://www.youtube.com/embed/WA3_QnpjUUA" title="Terraja 2" allowFullScreen></iframe>
              </div>
            </div>
          </div>

          {/* Tijera Corta Tubo */}
          <h5 className="fw-bold text-body mt-4">Tijera Corta Tubo</h5>
          <p>La tijera corta tubo (también llamada "tijera para tubos plásticos") es una herramienta especializada diseñada para realizar cortes precisos en cañerías plásticas.</p>
          <p>Sus características principales son las siguientes:</p>
          <ul>
            <li><strong>Diseño y Funcionamiento:</strong> Trabaja de forma similar a una tijera de jardinería para podar. Posee una mandíbula donde se aloja el caño y una hoja curva muy afilada que realiza el corte.</li>
            <li><strong>Materiales Aptos:</strong> Está diseñada específicamente para caños de polipropileno (P.P.) y polietileno (P.E.) de diámetros pequeños, generalmente hasta 1 pulgada (25 mm).</li>
            <li><strong>Calidad del Corte:</strong> Permite realizar un corte rápido, limpio y parejo. Al estar bien afilada, evita deformar el caño por aplastamiento excesivo durante la operación.</li>
            <li><strong>Ventajas en la Instalación:</strong> Su uso garantiza cortes perfectamente perpendiculares al eje del caño, lo cual es fundamental para asegurar uniones herméticas, especialmente en sistemas de termofusión o uniones pegadas, ya que no deja rebabas ni virutas significativas.</li>
            <li><strong>Mantenimiento:</strong> El manual recomienda mantenerla bien afilada para asegurar su eficiencia y evitar dañar los materiales plásticos.</li>
          </ul>
          <p>En comparación con otras herramientas, mientras que para caños de gran diámetro o materiales metálicos se utilizan cortatubos de rodillos o sierras, la tijera es la opción preferida para el trabajo ágil con cañerías de distribución interna de agua.</p>

          <div className="row g-3 mt-2 mb-4">
            <div className="col-md-6">
              <div className="ratio ratio-16x9 rounded overflow-hidden shadow-sm">
                <iframe src="https://www.youtube.com/embed/Zni5RJOuQCg" title="Tijera Corta Tubo" allowFullScreen></iframe>
              </div>
            </div>
          </div>

          {/* Llave Stilson */}
          <h5 className="fw-bold text-body mt-4">Llave Stilson</h5>
          <p>La llave de caño (o llave Stilson) es el corazón de nuestra caja de herramientas, pero también es el arma más peligrosa en manos de quien no conoce la física detrás del agarre. Vamos a analizar esta herramienta fundamental para que no termines destruyendo una instalación por un exceso de confianza.</p>

          <h6 className="fw-bold text-body mt-3">1. Análisis de Situación (Diagnóstico)</h6>
          <p>El fenómeno físico que gobierna a la llave de caño es el Efecto de Cuña y Torque Descentralizado. A diferencia de una llave fija que aplica presión uniforme, la Stilson está diseñada para que, al aplicar fuerza, la mandíbula móvil se "clave" más profundamente en el material.</p>
          <ul>
            <li><strong>Estado de la herramienta:</strong> Si las ranuras (dientes) de las mandíbulas están romas (lisas), el fenómeno de fricción falla, provocando el deslizamiento y el "pulido" accidental del tubo, lo que arruina la pieza.</li>
          </ul>

          <h6 className="fw-bold text-body mt-3">2. La "Traducción al Castellano"</h6>
          <p>Imagina que la llave de caño es como la mandíbula de un pitbull. Cuanto más tiras de la correa, más fuerte muerde. El problema es que, si le pides que muerda un globo (un tubo de pared delgada o plástico), lo va a reventar antes de girarlo. Está hecha para "clavar los dientes", no para ser delicada.</p>

          <h6 className="fw-bold text-body mt-3">3. Hoja de Ruta de Materiales</h6>
          <p>Para trabajar correctamente con esta herramienta sobre cañerías, debes identificar el material para no cometer un pecado capital:</p>
          <div className="table-responsive mt-2 mb-3">
            <table className="table table-bordered table-hover">
              <thead className="table-light">
                <tr>
                  <th>Material</th>
                  <th>Compatibilidad con Llave de Caño</th>
                  <th>Tipo de Unión Común</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Hierro Galvanizado</td>
                  <td>Excelente (es su hábitat natural)</td>
                  <td>Roscada</td>
                </tr>
                <tr>
                  <td>Bronce/Latón</td>
                  <td>Media (usar con precaución para no deformar)</td>
                  <td>Roscada</td>
                </tr>
                <tr>
                  <td>Termofusión (PP-R)</td>
                  <td>Baja/Nula (puedes marcar el tubo y crear un punto de ruptura)</td>
                  <td>Fusión térmica</td>
                </tr>
                <tr>
                  <td>PVC / Polipropileno</td>
                  <td>Prohibido (la mandíbula dentada fractura el plástico)</td>
                  <td>Pegado o O-ring</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h6 className="fw-bold text-body mt-3">4. Guía de Herramientas y "Uso Correcto"</h6>
          <ul>
            <li><strong>La Llave Stilson:</strong> Se elige según el diámetro del tubo. Para un tubo de 1/2" o 3/4", una llave de 10" o 12" es ideal.</li>
            <li><strong>Llave de Fuerza (Opcional):</strong> A veces necesitamos una segunda llave para hacer "contra-fuerza".</li>
          </ul>
          <p>⚠️ <strong>Alerta de Mal Uso:</strong> El error más común es usar un caño como palanca para alargar el mango de la llave. Consecuencia: Excedes el límite elástico del acero de la llave y puedes partir la mandíbula móvil o, peor aún, quebrar el accesorio de la pared, transformando un goteo en una inundación total en segundos.</p>

          <h6 className="fw-bold text-body mt-3">5. Procedimiento Paso a Paso</h6>
          <ol>
            <li><strong>Limpieza:</strong> Limpia de grasa o óxido la zona de agarre. Si hay grasa, la llave patinará y "limará" el tubo.</li>
            <li><strong>Ajuste de la Apertura:</strong> Gira la tuerca de ajuste de modo que el tubo quede en el centro de las mandíbulas, no en la punta. Debe haber un pequeño espacio entre el fondo de la "U" de la llave y el caño.</li>
            <li><strong>Orientación (Vital):</strong> La llave solo muerde en una dirección. La mandíbula móvil debe quedar orientada hacia donde quieres girar. Si tiras hacia el lado equivocado, la llave se soltará.</li>
            <li><strong>El "Mellado" Inicial:</strong> Aplica una presión leve para que los dientes marquen el metal.</li>
            <li><strong>El Giro:</strong> Aplica fuerza constante y firme. Si sientes que la llave "cede" sin que el caño gire, detente: estás deformando el tubo.</li>
          </ol>

          <h6 className="fw-bold text-body mt-3">6. Tip del Profesional (El "Secreto del Oficio")</h6>
          <p>Si tienes que usar la llave de caño en una pieza cromada (como el brazo de una ducha) o de bronce estético y no quieres dejar las marcas de los "dientes", envuelve la pieza con un trozo de cámara de neumático vieja o una cinta de cuero. Esto permite que la presión se distribuya y la goma genere fricción sin que el acero penetre en el acabado brillante. ¡Tu cliente (o tu pareja) te lo agradecerá cuando vea que no rayaste nada!</p>

          <div className="row g-3 mt-2 mb-4">
            <div className="col-md-6">
              <div className="ratio ratio-16x9 rounded overflow-hidden shadow-sm">
                <iframe src="https://www.youtube.com/embed/xdCp4mfiTL8" title="Llave Stilson 1" allowFullScreen></iframe>
              </div>
            </div>
            <div className="col-md-6">
              <div className="ratio ratio-16x9 rounded overflow-hidden shadow-sm">
                <iframe src="https://www.youtube.com/embed/QzbqoZ62-2g" title="Llave Stilson 2" allowFullScreen></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Selladores de Roscas */}
      <section className="mb-5 bg-body p-4 p-md-5 rounded shadow-sm border-start border-4 border-tertiary">
        <h3 className="fw-bold mb-4 d-flex align-items-center">
          <i className="bi bi-bandaid me-3 text-tertiary-custom fs-2"></i>
          Selladores de Roscas
        </h3>
        <div className="text-muted lh-lg">
          <p>En ingeniería sanitaria, el sellado de roscas se basa en el principio de interferencia mecánica y obturación de huelgos. Debido a las tolerancias de fabricación, siempre existen espacios microscópicos entre los hilos de una rosca macho y hembra. Los selladores actúan como un fluido no gaseoso o sólido deformable que ocupa ese espacio (claro o huelgo), resistiendo la presión hidrostática del fluido sin deformarse ni extruirse.</p>

          {/* Teflón */}
          <h5 className="fw-bold text-body mt-4">Teflón</h5>
          <div className="my-4 text-center">
            <img src={img('teflon.png')} alt="Teflon alta densidad" className="img-fluid rounded shadow-sm"/>
          </div>
          <p>La Cinta de Sellado de Roscas PTFE (Politetrafluoroetileno), conocida popularmente como Teflón. Muchos creen que es solo "envolver y listo", pero si se aplica mal, genera micro-filtraciones o, peor aún, puede rajar una pieza de bronce o polipropileno por exceso de tensión. Vamos a desglosar este arte.</p>

          <h6 className="fw-bold text-body mt-3">1. Análisis de Situación (Diagnóstico)</h6>
          <p>El fenómeno físico aquí es el Sellado por Interferencia de Roscas. En las uniones roscadas cónicas (tipo NPT) o cilíndricas, existen pequeñas imperfecciones y espacios entre los hilos del macho y la hembra. El PTFE actúa como un sólido deformable que rellena esos huecos bajo presión, eliminando la trayectoria de fuga del fluido.</p>

          <h6 className="fw-bold text-body mt-3">2. La "Traducción al Castellano"</h6>
          <p>Imagina que la rosca de un caño es como una escalera de caracol. El Teflón es como poner una alfombra mullida sobre los escalones: cuando intentas cerrar la puerta (ajustar la pieza), la alfombra se aplasta y ocupa todo el espacio libre, haciendo que ni el aire ni el agua puedan pasar por los costados.</p>

          <h6 className="fw-bold text-body mt-3">3. Hoja de Ruta de Materiales</h6>
          <p>Para un sellado de élite, no todas las cintas son iguales:</p>
          <div className="table-responsive mt-2 mb-3">
            <table className="table table-bordered table-hover">
              <thead className="table-light">
                <tr>
                  <th>Tipo de Cinta</th>
                  <th>Uso Recomendado</th>
                  <th>Espesor Sugerido</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Blanca Estándar</td>
                  <td>Agua fría/caliente domiciliaria (1/2" a 1").</td>
                  <td>0.075 mm</td>
                </tr>
                <tr>
                  <td>Amarilla (Alta Densidad)</td>
                  <td>Instalaciones de Gas (es más gruesa y resistente).</td>
                  <td>0.1 mm</td>
                </tr>
                <tr>
                  <td>Rosada/Verde</td>
                  <td>Uso industrial o diámetros mayores a 2".</td>
                  <td>0.12 mm</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h6 className="fw-bold text-body mt-3">4. Guía de Herramientas y "Uso Correcto"</h6>
          <ul>
            <li><strong>Tijera o Cutter:</strong> Para un corte limpio del sobrante.</li>
            <li><strong>Cepillo de cerdas metálicas:</strong> Para limpiar roscas viejas antes de aplicar.</li>
          </ul>
          <p>⚠️ <strong>Alerta de Mal Uso:</strong> El error más común es enrollar la cinta en sentido contrario a la rosca. Si lo haces así, al enroscar la pieza hembra, la cinta se "desenrollará" y se hará un nudo (efecto acordeón), dejando la unión sin sello y bloqueando el paso del agua. Consecuencia: Filtración inmediata y posible obstrucción de válvulas por restos de cinta sueltos.</p>

          <h6 className="fw-bold text-body mt-3">5. Procedimiento Paso a Paso (La Técnica del Maestro)</h6>
          <ol>
            <li><strong>Limpieza Absoluta:</strong> Usa el cepillo para quitar restos de sellador viejo o viruta de metal. La rosca debe estar seca.</li>
            <li><strong>Orientación de Giro:</strong> Sujeta el caño con la mano izquierda y la cinta con la derecha. Debes enrollar en el sentido de las agujas del reloj (visto de frente a la boca del caño). Así, al ajustar, la fricción aprieta la cinta en lugar de sacarla.</li>
            <li><strong>El Inicio Estratégico:</strong> No cubras el primer hilo de la rosca. Deja el primer milímetro libre para que la pieza hembra "muerda" bien el metal/plástico y no entre torcida.</li>
            <li><strong>Tensión Constante:</strong> Mantén la cinta tensa mientras das las vueltas. Debe "dibujar" la forma de los hilos.</li>
            <li><strong>Cantidad de Vueltas:</strong>
              <ul>
                <li>Para roscas metálicas: Entre 5 y 8 vueltas.</li>
                <li>Para roscas de plástico (PP): Máximo 3 o 4 vueltas (el exceso puede romper el accesorio hembra por expansión).</li>
              </ul>
            </li>
            <li><strong>Cierre:</strong> Corta y presiona el extremo final con el dedo para que se adhiera al resto de la cinta.</li>
          </ol>

          <h6 className="fw-bold text-body mt-3">6. Tip del Profesional (El "Secreto del Oficio")</h6>
         <p>Si estás trabajando con bronce pesado o diámetros grandes, el PTFE solo a veces no alcanza. Mi secreto es el "Sándwich Maestro": Da 3 vueltas de cinta de teflón, luego aplica una capa fina de sellador no fraguante (pasta verde o gris), y termina con 2 vueltas más de teflón encima. La pasta lubrica la rosca permitiendo un ajuste más profundo, mientras que la cinta garantiza la estanqueidad total. ¡No falla nunca!</p>
          <div className="row g-3 mt-2 mb-4">
            <div className="col-md-6">
              <div className="ratio ratio-16x9 rounded overflow-hidden shadow-sm">
                <iframe src="https://www.youtube.com/embed/wlg5yx1Vlu8" title="Teflon" allowFullScreen></iframe>
              </div>
            </div>
          </div>

          {/* Sellador Hidro 3 */}
          <h5 className="fw-bold text-body mt-4">Sellador Hidro 3</h5>
          <div className="my-4 text-center">
            <img src={img('medium_sellaroscas-2238.jpg')} alt="Sellador Hidro 3" className="img-fluid rounded shadow-sm"/>
          </div>
          <p>Sellador de Polipropileno Homopolímero o P.P.-H. de color marrón castaño se rige por las siguientes recomendaciones:</p>

          <h6 className="fw-bold text-body mt-3">1. Uso Principal</h6>
          <p>El sellador se utiliza específicamente para las uniones roscadas del sistema. A diferencia de otros sistemas plásticos que se unen por termofusión o pegado, el polipropileno homopolímero requiere un tratamiento especial en sus roscas para asegurar la estanqueidad.</p>

          <h6 className="fw-bold text-body mt-3">2. Recomendaciones de Aplicación</h6>
          <p>Para lograr un sellado efectivo en este tipo de cañerías, las fuentes indican lo siguiente:</p>
          <ul>
            <li><strong>Combinación obligatoria:</strong> Habitualmente no se utiliza el sellador con el teflón de forma conjunta sobre la rosca.</li>
            <li><strong>Instrucciones del fabricante:</strong> El manual enfatiza repetidamente que para este material se debe consultar siempre al fabricante, ya que sus indicaciones tienen prioridad absoluta sobre cualquier instrucción general del manual.</li>
            <li><strong>Limpieza previa:</strong> Antes de aplicar cualquier elemento sellador, las superficies de las roscas deben estar perfectamente limpias.</li>
          </ul>

          <h6 className="fw-bold text-body mt-3">3. Consideraciones Técnicas</h6>
          <ul>
            <li><strong>Resistencia:</strong> El sistema P.P.-H. es apto para conducción de agua fría y caliente, resistiendo temperaturas de hasta 100°C (respetando los límites del fabricante), por lo que el sellador utilizado debe ser compatible con estas exigencias térmicas.</li>
            <li><strong>Lubricación:</strong> Durante el proceso previo de tallado de la rosca con terraja (si se realiza en obra), se recomienda el uso de lubricante para no desgarrar el material, pero este debe limpiarse completamente antes de aplicar el sellador definitivo.</li>
          </ul>
          <p>En resumen, la recomendación técnica para el sellador en sistemas de polipropileno marrón es aplicarlo siempre en conjunto con teflón de alta densidad, siguiendo estrictamente las especificaciones que Industrias Saladillo (fabricante de Hidro 3) detalla para sus productos.</p>

          <div className="row g-3 mt-2 mb-4">
            <div className="col-md-6">
              <div className="ratio ratio-16x9 rounded overflow-hidden shadow-sm">
                <iframe src="https://www.youtube.com/embed/pIgZysWEIqA" title="Sellador Hidro 3" allowFullScreen></iframe>
              </div>
            </div>
          </div>

          {/* Selladores Anaeróbicos */}
          <h5 className="fw-bold text-body mt-4">Selladores Anaeróbicos</h5>
          <div className="my-4 text-center">
            <img src={img('Sellador-Anaerobico-Losung.jpg')} alt="Selladores Anaeróbicos" className="img-fluid rounded shadow-sm"/>
          </div>
          <p>Selladores Anaeróbicos, es la frontera final entre una instalación profesional y una que "llora" a la semana. En el mundo de la hidráulica de élite, estos productos no son simples pegamentos; son polímeros que reaccionan ante la ausencia de oxígeno y el contacto con metales. Si los usas bien, la unión será eterna; si los usas mal, habrás creado una pieza monolítica imposible de desarmar o, peor aún, una fuga silenciosa.</p>

          <h6 className="fw-bold text-body mt-3">1. Análisis de Situación (Diagnóstico)</h6>
          <p>El fenómeno físico aquí es la Polimerización por Exclusión de Aire. A diferencia de los selladores de fraguado evaporativo (como el sellador de roscas común), el anaeróbico permanece líquido mientras esté expuesto al aire (en el bote). Solo cuando enroscas la pieza y el sellador queda atrapado entre los filetes del metal, sin oxígeno, se convierte en un plástico termoestable rígido que sella y traba.</p>
          <p><strong>Materiales y Compatibilidad:</strong></p>
          <ul>
            <li><strong>Funcionan en:</strong> Bronce, latón, acero al carbono, hierro galvanizado (metales activos).</li>
            <li><strong>Cuidado con:</strong> Acero inoxidable o aluminio (metales pasivos), ya que requieren un activador químico para que el sellador "entienda" que debe endurecer.</li>
            <li><strong>Prohibido en:</strong> Plásticos (PVC, polipropileno, termofusión). El solvente del anaeróbico puede atacar el polímero y debilitar la rosca hasta quebrarla.</li>
          </ul>

          <h6 className="fw-bold text-body mt-3">2. La "Traducción al Castellano"</h6>
          <p>Imagina que el sellador anaeróbico es como un vampiro: mientras haya luz (oxígeno), está tranquilo y "líquido", pero en cuanto lo encierras en un sarcófago de metal (la rosca apretada), despierta, se pone duro como una piedra y se agarra a las paredes para no soltarse nunca. Es el guardaespaldas que evita que las vibraciones de la bomba o los cambios de presión aflojen tus cañerías.</p>

          <h6 className="fw-bold text-body mt-3">3. Hoja de Ruta de Materiales</h6>
          <p>Para una unión roscada metálica de ½" a 2":</p>
          <div className="table-responsive mt-2 mb-3">
            <table className="table table-bordered table-hover">
              <thead className="table-light">
                <tr>
                  <th>Material</th>
                  <th>Especificación</th>
                  <th>Función</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Sellador Anaeróbico de Fuerza Media</td>
                  <td>Tipo Loctite 567 o similar</td>
                  <td>Sellar y permitir desarme futuro con herramientas manuales.</td>
                </tr>
                <tr>
                  <td>Limpiador/Desengrasante</td>
                  <td>Alcohol isopropílico o acetona</td>
                  <td>Eliminar restos de aceite de corte de la rosca.</td>
                </tr>
                <tr>
                  <td>Activador (Opcional)</td>
                  <td>Spray de imprimación</td>
                  <td>Solo si trabajas con acero inoxidable o en climas muy fríos.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h6 className="fw-bold text-body mt-3">4. Guía de Herramientas y "Uso Correcto"</h6>
          <ol>
            <li>Llave Stillson o Sueca: Para el ajuste mecánico inicial.</li>
            <li>Cepillo de cerdas de acero: Para limpiar los valles de la rosca.</li>
            <li>Paño de microfibra: Para secar perfectamente.</li>
          </ol>
          <p>⚠️ <strong>Alerta de Mal Uso: El "Síndrome de Hulk"</strong><br />
          El error: Usar un sellador de Alta Resistencia (color verde usualmente) en una unión de 1". La consecuencia: El sellador anaeróbico de alta resistencia tiene un torque de rotura tan elevado que, si necesitas desarmar la pieza el año que viene, romperás el caño o la llave antes de que la rosca gire. Para plomería sanitaria, siempre usa Fuerza Media (desarmable).</p>

          <h6 className="fw-bold text-body mt-3">5. Procedimiento Paso a Paso</h6>
          <ol>
            <li><strong>Limpieza Quirúrgica:</strong> Pasa el cepillo de alambre por la rosca macho para quitar virutas. Limpia con alcohol. La grasa es el enemigo mortal del anaeróbico.</li>
            <li><strong>Aplicación Estratégica:</strong> Aplica un cordón de sellador en el segundo y tercer hilo de la rosca macho, dando toda la vuelta. No necesitas cubrir toda la rosca; al girar, el producto se distribuirá solo hacia atrás.</li>
            <li><strong>Enroscado Manual:</strong> Presenta la pieza y gira a mano hasta donde haga tope.</li>
            <li><strong>Ajuste Mecánico:</strong> Da entre 1 y 2 vueltas con la llave. No es necesario "matar" la pieza; el sello lo hace el químico, no la deformación del metal.</li>
            <li><strong>Limpieza de Excedente:</strong> Lo que queda afuera nunca se secará (porque hay oxígeno). Límpialo con un trapo para que no junte mugre.</li>
            <li><strong>Tiempo de Curado:</strong> Espera al menos 30 a 60 minutos antes de dar presión de agua.</li>
          </ol>

          <h6 className="fw-bold text-body mt-3">6. Tip del Profesional (El "Secreto del Oficio")</h6>
          <p>¿Cómo desarmar un anaeróbico que se puso rebelde? Si te encuentras con una unión sellada con anaeróbico de alta resistencia y no mueve, no fuerces la llave. Usa una pistola de calor (o un soplete con cuidado) y calienta la unión hasta unos 150°C - 200°C. El calor "ablanda" el polímero plástico y te permitirá desenroscar la pieza como si fuera mantequilla, protegiendo la integridad de tus herramientas y de la instalación.</p>

          <div className="row g-3 mt-2 mb-4">
            <div className="col-md-6">
              <div className="ratio ratio-16x9 rounded overflow-hidden shadow-sm">
                <iframe src="https://www.youtube.com/embed/2Xrkt1C0zPY" title="Selladores Anaeróbicos" allowFullScreen></iframe>
              </div>
            </div>
          </div>

          {/* Cáñamo y Pasta */}
          <h5 className="fw-bold text-body mt-4">Cáñamo y Pasta</h5>
          <p>Entramos en el terreno de la "Vieja Escuela" que nunca falla. Aquí no hay química moderna, hay física pura y expansión orgánica.</p>

          <h6 className="fw-bold text-body mt-3">1. Análisis de Situación (Diagnóstico)</h6>
          <p>El fenómeno físico aquí es la Higroscopía y el Sellado por Interferencia. El cáñamo es una fibra natural (lino) que, al entrar en contacto con una micro-fuga de agua, se hincha. Al expandirse dentro de la cámara estanca de la rosca, aumenta la presión interna y sella el paso del fluido. La pasta (o "minio") actúa como lubricante para el enroscado y como agente anticorrosivo para el metal.</p>
          <p><strong>Estado de Conservación:</strong></p>
          <ul>
            <li><strong>Ideal para:</strong> Roscas de Hierro Galvanizado (HG), Bronce pesado y accesorios de fundición.</li>
            <li><strong>Estado crítico:</strong> Si al desarmar ves el cáñamo negro y quebradizo, hubo oxidación galvánica por falta de pasta protectora.</li>
          </ul>

          <h6 className="fw-bold text-body mt-3">2. La "Traducción al Castellano"</h6>
          <p>Imagina que el cáñamo son como esponjas microscópicas trenzadas. Cuando enroscas, las aplastas entre los dientes de los caños. Si una gota de agua intenta escapar, la fibra se la "bebe", se pone gorda y tapona el agujero ella misma. Es un sistema que se defiende solo.</p>

          <h6 className="fw-bold text-body mt-3">3. Hoja de Ruta de Materiales</h6>
          <p>Para una unión de 3/4" a 4":</p>
          <div className="table-responsive mt-2 mb-3">
            <table className="table table-bordered table-hover">
              <thead className="table-light">
                <tr>
                  <th>Material</th>
                  <th>Especificación</th>
                  <th>Función</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Cáñamo (Lino)</td>
                  <td>Peinado, sin nudos ni paja.</td>
                  <td>Elemento expansivo de sellado.</td>
                </tr>
                <tr>
                  <td>Pasta Selladora</td>
                  <td>No fraguante (Glicero-litargirio o sintética).</td>
                  <td>Lubricar y proteger el metal del óxido.</td>
                </tr>
                <tr>
                  <td>Hoja de Sierra</td>
                  <td>Grano fino (24 dpp).</td>
                  <td>"Picar" la rosca (el secreto del agarre).</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h6 className="fw-bold text-body mt-3">4. Guía de Herramientas y "Uso Correcto"</h6>
          <ol>
            <li>Llave Stillson (de 14" o 18"): Para torque pesado.</li>
            <li>Cepillo de alambre: Para limpiar óxido viejo.</li>
            <li>Hoja de sierra manual: Solo para crear rugosidad.</li>
          </ol>
          <p>⚠️ <strong>Alerta de Mal Uso: El "Teflón sobre Cáñamo"</strong><br />
          El error: Poner cinta de teflón encima del cáñamo "por si las dudas". La consecuencia: El teflón es un lubricante seco. Evita que el agua llegue a la fibra de cáñamo, impidiendo que esta se hinche. Además, crea una capa resbaladiza que hace que el cáñamo se desplace hacia afuera al enroscar (efecto escupida). O usas uno, o usas el otro. Nunca los mezcles.</p>

          <h6 className="fw-bold text-body mt-3">5. Procedimiento Paso a Paso</h6>
          <ol>
            <li><strong>El "Picado" de la Rosca:</strong> Toma la hoja de sierra y pásala de forma transversal a los hilos de la rosca macho, creando pequeñas muescas. Esto evita que el cáñamo "patine" al girar la pieza hembra.</li>
            <li><strong>El Peinado:</strong> Toma un mechón fino de cáñamo (no más grueso que un cordón de zapato). Quita los nudos.</li>
            <li><strong>El Sentido de Giro:</strong> Empieza desde la punta del caño y enrolla en el sentido de las agujas del reloj (siguiendo la rosca). Si lo haces al revés, al enroscar se desarmará todo el "pelo".</li>
            <li><strong>La Cama de Pasta:</strong> Cubre el cáñamo con una capa generosa de pasta selladora. No escatimes; la pasta debe penetrar en la fibra.</li>
            <li><strong>Ajuste de Fuerza:</strong> Enrosca a mano y termina con la Stillson. Sentirás una resistencia firme pero "gomosa". Eso es el cáñamo acomodándose.</li>
          </ol>

          <h6 className="fw-bold text-body mt-3">6. Tip del Profesional (El "Secreto del Oficio")</h6>
          <p>La técnica de la "Trenza Imposible": Si tienes una rosca muy gastada o con mucho juego, antes de poner el cáñamo, unta la rosca con un poco de litargirio y glicerina (si aún consigues) o una pasta de fraguado rápido. El cáñamo actuará como la armadura de un hormigón, dándole estructura a la pasta y permitiendo que la unión soporte presiones de columna de agua muy altas (edificios de más de 10 pisos) sin pestañear.</p>

          <div className="row g-3 mt-2 mb-4">
            <div className="col-md-6">
              <div className="ratio ratio-16x9 rounded overflow-hidden shadow-sm">
                <iframe src="https://www.youtube.com/embed/1Oh2GX-rY6c" title="Cáñamo y Pasta" allowFullScreen></iframe>
              </div>
            </div>
          </div>

          {/* Tabla resumen */}
          <div className="table-responsive mt-4">
            <table className="table table-bordered table-hover">
              <thead className="table-light">
                <tr>
                  <th>Tipo de Sellador</th>
                  <th>Características Principales</th>
                  <th>Uso Recomendado</th>
                  <th>Resistencia</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Cinta de PTFE (Teflón)</td>
                  <td>Película sólida plástica. Es limpia y económica.</td>
                  <td>Roscas metálicas y plásticas de pequeño diámetro.</td>
                  <td>Media (propenso a fugas si se retrocede la rosca).</td>
                </tr>
                <tr>
                  <td>Pasta Selladora (Fraguante)</td>
                  <td>Se endurece con el tiempo. Base resina.</td>
                  <td>Gas y agua fría/caliente en instalaciones viejas.</td>
                  <td>Alta (difícil de desarmar luego).</td>
                </tr>
                <tr>
                  <td>Selladores Anaeróbicos</td>
                  <td>Geles químicos que curan en ausencia de aire.</td>
                  <td>Alta presión, vibraciones, instalaciones industriales.</td>
                  <td>Muy Alta (el estándar de élite actual).</td>
                </tr>
                <tr>
                  <td>Cáñamo con Pasta</td>
                  <td>Fibra vegetal que se hincha con la humedad.</td>
                  <td>Cañerías de hierro fundido o grandes diámetros.</td>
                  <td>Tradicional (el favorito de la vieja escuela).</td>
                </tr>
              </tbody>
            </table>
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
            <a href="https://drive.google.com/file/d/1jk8NHBUH3ecaGpyNmauNgWHApmw3scfe/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
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
            <a href="https://drive.google.com/file/d/1SUdsD3cda1wxTqbqgFaJ5U9zdK8Nia5N/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
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
