import React from 'react';

const imagenes = import.meta.glob(
  '../assets/images/modulo01/clase_06/*',
  { eager: true }
);
const img = (nombre) => imagenes[`../assets/images/modulo01/clase_06/${nombre}`]?.default;


export default function Module1Class6() {
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
            <img src={img('circuito_epoxi.jpeg')} alt="Circuito de Prueba" className="img-fluid rounded shadow-sm"/>
          </div>
          <p>El diagrama muestra un circuito cerrado de distribución con medidas precisas en milímetros. Se identifican los siguientes componentes:</p>
          <ul>
            <li><strong>Material:</strong> Tubería de acero al carbono con recubrimiento epoxi.</li>
            <li><strong>Accesorios:</strong> Se observan 4 codos de 90°, una T central en la parte superior (posible derivación o venteo) y una unión doble (universal) en la parte inferior izquierda, fundamental para poder "cerrar" el circuito, ya que el epoxi no es flexible.</li>
            <li><strong>Estado:</strong> El diseño es ortogonal, lo que exige que las roscas estén perfectamente alineadas para evitar tensiones que agrieten el recubrimiento epóxico.</li>
          </ul>
        </div>
      </section>

      {/* Sellador para Gas (Litargirio y Glicerina) */}
      <section className="mb-5 bg-body p-4 p-md-5 rounded shadow-sm border-start border-4 border-secondary">
        <h3 className="fw-bold mb-4 d-flex align-items-center">
          <i className="bi bi-bandaid me-3 text-secondary-custom fs-2"></i>
          Sellador para Gas (Litargirio y Glicerina)
        </h3>
        <div className="text-muted lh-lg">
          <div className="my-4 text-center">
            <img src={img('que-es-el-litargirio-y-la-glicerina.jpg')} alt="Litargirio y Glicerina" className="img-fluid rounded shadow-sm" />
          </div>
          <p>El litargirio (óxido de plomo) y la glicerina es la alquimia pura de la plomería clásica, un sellador anaeróbico artesanal que, bien usado, es eterno, pero mal usado es una sentencia de muerte para las piezas.</p>
          <p>Aquí tienes el análisis técnico y práctico para dominar esta mezcla.</p>

          <h5 className="fw-bold text-body mt-4">1. Análisis de Situación (Diagnóstico)</h5>
          <p>El uso de litargirio y glicerina responde a la necesidad de un sellado rígido y de alta resistencia química y térmica. Físicamente, estamos ante una reacción química de fraguado que transforma un polvo y un líquido en una piedra sólida. Se utiliza principalmente en uniones roscadas de hierro galvanizado o bronce en instalaciones de gas, vapor o aceites.</p>
          <ul>
            <li><strong>Fenómeno Crítico:</strong> El fraguado es exotérmico y extremadamente rápido. Una vez que endurece, la unión es prácticamente indisoluble sin aplicar calor extremo.</li>
          </ul>

          <h5 className="fw-bold text-body mt-4">2. La "Traducción al Castellano"</h5>
          <p>Imagina que estás fabricando cemento instantáneo para metales. Es como preparar una masa de pan que, en lugar de quedar esponjosa, se convierte en granito en menos de 10 minutos. Si te tardas mucho en armar la pieza, la "masa" se pone dura y no te deja enroscar, rompiendo la rosca o dejando la unión abierta.</p>

          <h5 className="fw-bold text-body mt-4">3. Hoja de Ruta de Materiales</h5>
          <p>Para una reparación estándar en roscas de ½ " o ¾ ", necesitas:</p>
          <ul>
            <li><strong>Polvo de Litargirio:</strong> Debe estar seco, de color amarillento/naranja vibrante.</li>
            <li><strong>Glicerina Líquida:</strong> Debe ser neutra y tener una consistencia viscosa (tipo jarabe).</li>
            <li><strong>Cáñamo (Opcional pero recomendado):</strong> Hebras finas de lino para dar cuerpo estructural a la unión.</li>
          </ul>

          <h5 className="fw-bold text-body mt-4">4. Guía de Herramientas y "Uso Correcto"</h5>
          <ul>
            <li><strong>Espátula pequeña o cuchillo sin filo:</strong> Para mezclar.</li>
            <li><strong>Superficie de mezcla limpia:</strong> Un vidrio o un trozo de cerámica (no uses cartón porque absorbe la glicerina).</li>
            <li><strong>Llave Para Caños (Stillson):</strong> De 12" o 14".</li>
          </ul>
          <div className="alert alert-warning mt-3">
            <strong>⚠️ Alerta de Mal Uso:</strong> El error más grave es mezclar demasiada cantidad o intentar "estirar" la mezcla agregando más glicerina cuando ya empezó a endurecer.<br/>
            <strong>Consecuencia:</strong> Si usas una mezcla que ya inició el fraguado, crearás una unión con "falsas grietas" que fugará apenas reciba presión. Además, jamás uses esto en PVC o Termofusión, el calor de la reacción y la rigidez fracturan los plásticos.
          </div>

          <h5 className="fw-bold text-body mt-4">5. Procedimiento Paso a Paso</h5>
          <ol>
            <li><strong>Limpieza Absoluta:</strong> Limpia las roscas (macho y hembra) con un cepillo de acero. No debe haber grasa, restos de sellador viejo ni agua.</li>
            <li><strong>La Proporción Maestra:</strong> Coloca una pequeña montaña de polvo de litargirio en tu vidrio y haz un hueco en el centro. Agrega glicerina gota a gota.</li>
            <li><strong>El Batido:</strong> Mezcla hasta obtener una consistencia de pasta dental espesa. No debe chorrear, pero debe brillar.</li>
            <li><strong>Aplicación:</strong> Unta la rosca macho cubriendo bien los valles del roscado. Si es una instalación de alta presión.</li>
            <li><strong>Torque Inmediato:</strong> Tienes aproximadamente 3 a 5 minutos para presentar la pieza y apretar. Una vez que sientas que la pasta se pone "gomosa", deja de girar.</li>
            <li><strong>Limpieza de Excedentes:</strong> Limpia el sobrante exterior inmediatamente; una vez seco, solo sale con amoladora o cincel.</li>
          </ol>

          <div className="my-4 text-center">
            <img src={img('sellador_litargirio_glicerina.png')} alt="Procedimiento Litargirio" className="img-fluid rounded shadow-sm"/>
          </div>

          <h5 className="fw-bold text-body mt-4">6. Tip del Profesional ("Secreto del Oficio")</h5>
          <p>El verdadero secreto es la <strong>Prueba de la Gota</strong>: antes de aplicar la mezcla a la tubería, deja una gota de la pasta en tu vidrio de mezcla. Cuando esa gota esté dura como una piedra, sabrás que la unión interna también ha fraguado y puedes habilitar el suministro con total confianza.</p>
        </div>
      </section>

      {/* Sellador Epoxi para Gas */}
      <section className="mb-5 bg-body p-4 p-md-5 rounded shadow-sm border-start border-4 border-tertiary">
        <h3 className="fw-bold mb-4 d-flex align-items-center">
          <i className="bi bi-shield-check me-3 text-tertiary-custom fs-2"></i>
          Sellador Epoxi para Gas
        </h3>
        <div className="text-muted lh-lg">
          <div className="my-4 text-center">
            <img src={img('sellador_epoxi_gas.jpg')} alt="Sellador Epoxi" className="img-fluid rounded shadow-sm"/>
          </div>
          <p>Comúnmente conocido por marcas como Trabasil, Parsecs o Litargirio moderno.</p>

          <h5 className="fw-bold text-body mt-4">1. Análisis de Situación (Diagnóstico)</h5>
          <p>El sellador epoxi en instalaciones de gas no es solo un "pegamento". Su función técnica es el sellado anaeróbico o por reacción química para garantizar la estanqueidad en un sistema que transporta un fluido altamente volátil bajo presión controlada.</p>
          <ul>
            <li><strong>Fenómeno Físico:</strong> Se busca evitar la difusión gaseosa a través de las micro-crestas de la rosca. El gas natural o GLP tiene una densidad menor que el aire y buscará cualquier poro microscópico para escapar.</li>
            <li><strong>Materiales Compatibles:</strong> Se utiliza exclusivamente en roscas de Hierro Negro (NPT) o Hierro Galvanizado, y en menor medida en bronce, siempre que sean uniones roscadas.</li>
          </ul>

          <h5 className="fw-bold text-body mt-4">2. La "Traducción al Castellano"</h5>
          <p>Imagine que la rosca de un caño es como una escalera de caracol. Por más que usted apriete un tornillo contra otro, siempre queda un "aire" entre los escalones. El sellador epoxi es como verter cemento líquido en esa escalera: rellena todos los huecos y, al endurecer, convierte las dos piezas en un solo bloque sólido. Si el sello falla, el gas se escapa como el aire de un globo pinchado.</p>

          <h5 className="fw-bold text-body mt-4">3. Hoja de Ruta de Materiales</h5>
          <p>Para una unión estándar de gas (suponiendo diámetros domiciliarios de ½ ", ¾ " o 1"):</p>
          <div className="table-responsive mt-3">
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
                  <td>Sellador Epoxi</td>
                  <td>Aprobado por ente regulador (ej. ENARGAS en Arg)</td>
                  <td>Sello químico de la unión.</td>
                </tr>
                <tr>
                  <td>Solvente/Desengrasante</td>
                  <td>Alcohol isopropílico o Thinner</td>
                  <td>Limpieza de roscas (Crucial).</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h5 className="fw-bold text-body mt-4">4. Guía de Herramientas y "Uso Correcto"</h5>
          <ol>
            <li><strong>Llave de fuerza (Stillson o Sueca):</strong> De 10" o 12" según el diámetro.</li>
            <li><strong>Cepillo de acero:</strong> Para limpiar restos de grasa o viruta de la rosca.</li>
            <li><strong>Trapo limpio de algodón:</strong> No debe soltar pelusa.</li>
          </ol>
          <div className="alert alert-warning mt-3">
            <strong>⚠️ Alerta de Mal Uso:</strong><br/>
            <strong>El Error:</strong> Usar el sellador epoxi sobre roscas sucias o con aceite de corte (el que viene de fábrica).<br/>
            <strong>La Consecuencia:</strong> El epoxi no "muerde" el metal, se genera una película de grasa intermedia y, con la vibración de la casa o el paso del tiempo, se produce una fuga silenciosa. El sellador se despega como una cáscara de naranja.
          </div>

          <h5 className="fw-bold text-body mt-4">5. Procedimiento Paso a Paso</h5>
          <ol>
            <li><strong>Limpieza Profunda:</strong> Pase el cepillo de acero por la rosca macho y hembra. Limpie con solvente para eliminar cualquier rastro de aceite. La rosca debe estar seca y brillante.</li>
            <li><strong>Aplicación del Sellador:</strong> Coloque una capa uniforme de sellador epoxi sobre los primeros 3/4 de la rosca macho. No sature el primer hilo para evitar que el excedente entre al interior de la cañería y tape los inyectores de los artefactos.</li>
            <li><strong>Ajuste Mecánico:</strong> Enrosque a mano y luego termine con la llave Stillson. El ajuste debe ser firme pero no excesivo (no queremos "estirar" la rosca hembra).</li>
            <li><strong>Fraguado:</strong> ¡Vital! Respete el tiempo de secado del fabricante (generalmente de 2 a 4 horas antes de dar presión) y realice la prueba de estanqueidad con agua y jabón.</li>
          </ol>

          <div className="my-4 text-center">
            <img src={img('sellador_epoxi.png')} alt="Procedimiento Epoxi" className="img-fluid rounded shadow-sm"/>
          </div>

          <h5 className="fw-bold text-body mt-4">6. Tip del Profesional (El "Secreto del Oficio")</h5>
          <p><strong>"La técnica del espejo":</strong> En instalaciones de gas, el epoxi endurece y se vuelve rígido. Si alguna vez tiene que corregir la posición de un codo o una T porque quedó "torcida", nunca retroceda el ajuste. Si lo hace, romperá el sello químico que ya empezó a actuar. Si se pasó de largo, desenrosque todo, limpie de nuevo y empiece de cero. La seguridad vale más que diez minutos de limpieza.</p>
        </div>
      </section>

      {/* El Sellador Anaeróbico */}
      <section className="mb-5 bg-body p-4 p-md-5 rounded shadow-sm border-start border-4 border-quaternary">
        <h3 className="fw-bold mb-4 d-flex align-items-center">
          <i className="bi bi-tools me-3 text-quaternary-custom fs-2"></i>
          El Sellador Anaeróbico
        </h3>
        <div className="text-muted lh-lg">
          <div className="my-4 text-center">
            <img src={img('sellador_anaerobico.jpg')} alt="Sellador Anaeróbico" className="img-fluid rounded shadow-sm"/>
          </div>
          <p>Si estás preguntando por esto, es porque quieres dejar de pelear con el goteo eterno y pasar a una instalación de nivel profesional. Vamos a desglosar qué es, cómo se usa y, lo más importante, por qué no es "pegamento mágico" para cualquier cosa.</p>

          <h5 className="fw-bold text-body mt-4">1. Análisis de Situación (Diagnóstico)</h5>
          <p>El fenómeno físico aquí es la Polimerización por Ausencia de Oxígeno. A diferencia de los selladores tradicionales que secan por evaporación, el anaeróbico es una resina que permanece líquida mientras está en contacto con el aire. En el momento en que roscas dos piezas metálicas, el aire se expulsa y el contacto con los iones metálicos actúa como catalizador, transformando el líquido en un plástico termoestable rígido que sella micrométricamente cada cresta y valle de la rosca.</p>

          <h5 className="fw-bold text-body mt-4">2. La "Traducción al Castellano"</h5>
          <p>Imagina que el sellador es como un ejército de soldados que solo se despiertan cuando los encierras en una habitación oscura y les quitas el aire. Mientras están en el frasco, están durmiendo. Pero en cuanto aprietas la rosca y los dejas "sin respirar" entre dos metales, se toman de las manos y se convierten en una pared de piedra que no deja pasar ni una molécula de agua.</p>

          <h5 className="fw-bold text-body mt-4">3. Hoja de Ruta de Materiales</h5>
          <p>El sellador anaeróbico no es universal. Aquí lo que necesitas saber para comprar el correcto:</p>
          <div className="table-responsive mt-3">
            <table className="table table-bordered table-hover">
              <thead className="table-light">
                <tr>
                  <th>Componente</th>
                  <th>Especificación Técnica</th>
                  <th>Uso Ideal</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Tipo de Fluido</td>
                  <td>Agua fría/caliente, Gas o Aire comprimido</td>
                  <td>Verificar aprobación según el fluido.</td>
                </tr>
                <tr>
                  <td>Resistencia</td>
                  <td>Baja (Desmontable) o Alta (Fija)</td>
                  <td>Usa Baja/Media para grifería que debas cambiar a futuro.</td>
                </tr>
                <tr>
                  <td>Diámetro</td>
                  <td>Hasta 2" (50 mm) habitualmente</td>
                  <td>Ideal para roscas de ½ ", ¾ " y 1".</td>
                </tr>
                <tr>
                  <td>Compatibilidad</td>
                  <td>Solo Metales (Bronce, Acero, Latón)</td>
                  <td><strong>¡OJO!</strong> No funciona en plásticos (PVC/Termofusión).</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h5 className="fw-bold text-body mt-4">4. Guía de Herramientas y "Uso Correcto"</h5>
          <ul>
            <li><strong>Llave de Fuerza (Stilson o Sueca):</strong> Para el ajuste final.</li>
            <li><strong>Cepillo de alambre (Acero o Bronce):</strong> Fundamental para limpiar la rosca.</li>
            <li><strong>Desengrasante (Alcohol isopropílico o similar):</strong> Para eliminar restos de aceite de mecanizado.</li>
          </ul>
          <div className="alert alert-warning mt-3">
            <strong>⚠️ Alerta de Mal Uso:</strong> El error más común es usar llave de fuerza para "reapretar" una unión que ya tiene el sellador curado (seco). Si la mueves una vez que el proceso de polimerización empezó, romperás los cristales plásticos y la pérdida es inevitable. Consecuencia: Tienes que desarmar todo, limpiar y empezar de cero. No hay "ajustito de último momento".
          </div>

          <h5 className="fw-bold text-body mt-4">5. Procedimiento Paso a Paso</h5>
          <ol>
            <li><strong>Limpieza Quirúrgica:</strong> Pasa el cepillo de alambre por la rosca macho y hembra. Si hay restos de grasa o teflón viejo, el anaeróbico no "morderá" el metal y fallará.</li>
            <li><strong>Desengrasado:</strong> Limpia con un trapo con alcohol. La superficie debe estar seca y libre de aceites.</li>
            <li><strong>Aplicación:</strong> Aplica un cordón de sellador en los primeros tres hilos de la rosca macho. No hace falta bañar toda la pieza; al enroscar, el producto se distribuirá solo hacia atrás.</li>
            <li><strong>Enroscado Manual:</strong> Presenta la pieza y enrosca a mano hasta donde llegues.</li>
            <li><strong>Ajuste Técnico:</strong> Usa la llave para dar el torque final. No hace falta "matar" la pieza; el sellador ocupa el espacio, no la fuerza del metal.</li>
            <li><strong>Tiempo de Curado:</strong> Deja reposar. Aunque algunos son de acción rápida, espera al menos 20 a 30 minutos para presiones bajas y 2 horas para pruebas hidráulicas fuertes.</li>
          </ol>

          <h5 className="fw-bold text-body mt-4">6. Tip del Profesional (El "Secreto del Oficio")</h5>
          <p><strong>"El truco de la primera gota":</strong> Muchos cometen el error de dejar que la punta del frasco toque la rosca metálica sucia. Si haces esto, contaminas el contenido del envase y el sellador empezará a endurecerse dentro del frasco, arruinándolo. Vierte el producto sin que el pico toque el metal. Además, si alguna vez necesitas desarmar una unión de "Alta Resistencia" que parece soldada, aplica calor localizado con un soplete; el calor debilita el plástico anaeróbico y te permitirá desenroscar sin romper la tubería.</p>

          <div className="my-4 text-center">
            <img src={img('sellador_anaerobico.png')} alt="Sellador Anaeróbico" className="img-fluid rounded shadow-sm"/>
          </div>

          <div className="row g-3 mt-4">
            <div className="col-md-8 mx-auto">
              <div className="ratio ratio-16x9 rounded overflow-hidden shadow-sm">
                <iframe src="https://www.youtube.com/embed/XF1t57JLeKg" title="Sellador Anaeróbico Tutorial" allowFullScreen></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Elementos Sellantes Permitidos */}
      <section className="mb-5 bg-body p-4 p-md-5 rounded shadow-sm border-start border-4 border-primary">
        <h3 className="fw-bold mb-4 d-flex align-items-center">
          <i className="bi bi-check-circle me-3 text-primary-custom fs-2"></i>
          Elementos Sellantes Permitidos
        </h3>
        <div className="text-muted lh-lg">
          
          <h5 className="fw-bold text-body mt-4">1. Elementos Permitidos</h5>
          <p><strong>Punto Clave (Respuesta):</strong> Solo se permite el uso de elementos sellantes que posean matrícula de aprobación otorgada por un Organismo de Certificación reconocido por el ENARGAS. Los tipos autorizados son:</p>
          <ul>
            <li><strong>Pastas sellantes fraguantes:</strong> Aquellas que endurecen tras su aplicación.</li>
            <li><strong>Pastas sellantes no fraguantes o semifraguantes:</strong> Ideales para conexiones sujetas a movimiento o que requieran desvinculación futura.</li>
            <li><strong>Cinta de politetrafluoretileno (Teflón®):</strong> Debe ser específicamente de alta densidad para aplicaciones de gas.</li>
          </ul>
          <p><strong>Justificación/Referencia:</strong></p>
          <ul>
            <li><strong>Requisito de Aprobación:</strong> "Los materiales deben poseer matrícula de aprobación otorgada por un OC reconocido por el ENARGAS conforme lo estipula la normativa de aplicación".</li>
            <li><strong>Registro Obligatorio:</strong> "Todo fabricante o importador de elementos sellantes... deberán inscribirse en el 'Registro de Fabricantes de Elementos Auxiliares para Cañerías de Gas'".</li>
            <li><strong>Norma Específica:</strong> La NAG-214 es la norma que define las características de resistencia y sellabilidad que deben reunir estos elementos.</li>
          </ul>

          <h5 className="fw-bold text-body mt-4 text-danger">2. Prohibiciones Expresas</h5>
          <p><strong>Punto Clave (Respuesta):</strong> Queda terminantemente prohibido el uso de:</p>
          <ul>
            <li><strong>Cáñamo:</strong> No se admite bajo ninguna circunstancia como elemento de estanqueidad.</li>
            <li><strong>Pintura:</strong> No se permite el uso de pinturas de ningún tipo para el sellado de roscas.</li>
          </ul>
          <p><strong>Justificación/Referencia:</strong></p>
          <ul>
            <li><strong>Texto Normativo:</strong> "En las conexiones se usará únicamente pastas sellantes u otros elementos autorizados..., quedando prohibido el uso de 'cáñamo' y/o pintura".</li>
          </ul>

          <h5 className="fw-bold text-body mt-4">3. Recomendaciones de Aplicación Técnica</h5>
          <ul>
            <li><strong>Lugar de Aplicación:</strong> La pasta debe aplicarse únicamente sobre la rosca macho para evitar que el exceso penetre en la cañería y reduzca la sección de pasaje del gas.</li>
            <li><strong>Preparación (Litargirio y Glicerina):</strong> Si bien se aconseja su uso por ser de fragüe rápido, debe prepararse en el momento de su empleo y en pequeñas cantidades.</li>
            <li><strong>Uniones Dobles:</strong> En las uniones dobles de asiento cónico, el asiento debe estar limpio; está prohibido el empleo de pastas fraguantes en dicha superficie de contacto.</li>
          </ul>

          <div className="my-4 text-center">
            <img src={img('norma_sellantes.png')} alt="Elementos Sellantes" className="img-fluid rounded shadow-sm"/>
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
