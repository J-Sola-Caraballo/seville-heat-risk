// Textos bilingües. Toda cifra procede del artículo (Sola-Caraballo et al., 2026, Urban Climate) salvo indicación.
const L = (u, t) => `<a href="${u}" target="_blank" rel="noopener">${t}</a>`;
const LINKS = {
  doi: "https://doi.org/10.1016/j.uclim.2026.103156",
  tep: "https://grupo.us.es/tep206/", cool: "https://grupo.us.es/tep206/cool-and-scape/",
  target: "https://doi.org/10.5194/gmd-12-785-2019",
  umep: "https://umep-docs.readthedocs.io/en/latest/processor/Urban%20Heat%20Island%20TARGET.html",
  catastro: "https://www.sedecatastro.gob.es/Accesos/SECAccDescargaDatos.aspx",
  cnig: "https://centrodedescargas.cnig.es/CentroDescargas/catalogo",
  pnoa: "https://pnoa.ign.es/", proj1: "https://investigacion.us.es/sisius/sis_proyecto.php?idproy=35409", proj2: "https://investigacion.us.es/sisius/sis_proyecto.php?idproy=41052", prisma: "https://prisma.us.es/investigador/8683", ine: "https://www.ine.es/", adrh: "https://www.ine.es/dyngs/INEbase/es/operacion.htm?c=Estadistica_C&cid=1254736177088&menu=ultiDatos&idp=1254735976608",
  hrl: "https://land.copernicus.eu/en/products/high-resolution-layer-imperviousness",
  corine: "https://land.copernicus.eu/en/products/corine-land-cover",
  aemet: "https://www.aemet.es/", meteonorm: "https://meteonorm.com/", ipcc: "https://www.ipcc.ch/report/ar6/wg2/",
  demuzere: "https://doi.org/10.5194/essd-14-3835-2022", us: "https://www.us.es/",
  p_lopez: "https://prisma.us.es/investigador/6652", p_rivera: "https://prisma.us.es/investigador/3567", p_galan: "https://prisma.us.es/investigador/1403",
  p_serrano: "https://produccioncientifica.ugr.es/investigadores/357493/detalle",
  ipccwg1: "https://www.ipcc.ch/report/ar6/wg1/", qgis: "https://qgis.org/", agrawal: "https://doi.org/10.1016/j.uclim.2026.102808",
  rcp: "https://www.ipcc.ch/report/ar5/syr/", sentinel: "https://www.esa.int/Applications/Observing_the_Earth/Copernicus/Sentinel-2",
  diaz: "https://doi.org/10.1016/j.envint.2015.09.022", he: "https://doi.org/10.1016/S2542-5196(22)00139-5", salata: "https://doi.org/10.1016/j.scs.2021.103518",
  nbe: "https://www.boe.es/buscar/doc.php?id=BOE-A-1979-24866"
};

window.I18N = {
es: {
  site_title: "Herramienta de análisis de riesgo climático por calor | Sevilla 2050",
  site_sub: "Amenaza térmica y vulnerabilidad socioeconómica por sección censal",
  tab_inicio: "Inicio", tab_que: "Qué se ha hecho", tab_visor: "Visor", tab_metodo: "Método",
  tab_uso: "Interpretación y usos", tab_datos: "Datos y cita",
  cite_bar: "Sola-Caraballo et al. (2026). A predictive framework for urban climate risk: Mapping heat hazard and socioeconomic vulnerability at high resolution scenarios. <i>Urban Climate</i>.",
  web_credit: "Sitio web © 2026 Javier de Sola Caraballo · SATH-TEP206", web_credit_html: `Sitio web © 2026 ${L(LINKS.prisma, "Javier de Sola Caraballo")} · ${L(LINKS.tep, "SATH-TEP206")}`, cite_short: "Artículo: <i>Urban Climate</i>, 2026.",
  inicio_h: `Herramienta de análisis de riesgo climático por calor<br>Sevilla 2050`,
  inicio_lead: "",
  fund_h: "Financiación",
  fund_txt: `Esta investigación ha sido financiada por los proyectos ${L(LINKS.proj1, "PID2021-124539OB-I00")} y ${L(LINKS.proj2, "PID2024-155805OB-C21")} (MCIN/AEI/10.13039/501100011033 y «FEDER, una manera de hacer Europa») y por el contrato predoctoral FPU21/02458 (programa FPU, Ministerio de Ciencia, Innovación y Universidades).`,
  inicio_html: `
    <p class="lead2">Esta herramienta y su visor interactivo están basados en los resultados de un estudio publicado en la revista ${L(LINKS.doi, "<i>Urban Climate</i>, 2026")}.</p>
    <p>La herramienta muestra, para cada sección censal de la ciudad de Sevilla, el nivel de riesgo climático proyectado para 2050. Este nivel se obtiene con la metodología propuesta en el artículo citado, a partir de la coincidencia, en cada zona, de la amenaza térmica por calor y de la vulnerabilidad socioeconómica de sus habitantes.</p>
    <p>El calor no incide por igual en todo el territorio, ni todas las personas cuentan con las mismas condiciones para afrontarlo. El objetivo es ofrecer un diagnóstico, con mapa e información detallada, de dónde y por qué el calor afecta más a unas partes de la ciudad que a otras. La herramienta permite ver cómo se distribuye dentro de la ciudad y cuáles son las condiciones promedio de la población de cada sección censal para hacerle frente.</p>
    <p class="pubh"><strong>Publicación original:</strong></p>
    <p class="cite">Sola-Caraballo, J., López-Cabeza, V. P., Serrano-Jiménez, A., Rivera-Gomez, C. y Galan-Marin, C. (2026). <i>A predictive framework for urban climate risk: Mapping heat hazard and socioeconomic vulnerability at high resolution scenarios</i>. <i>Urban Climate</i>, 70, 103156. ${L(LINKS.doi, "https://doi.org/10.1016/j.uclim.2026.103156")}</p>
    <p class="pubh"><strong>Autores del estudio:</strong></p>
    <ul class="authors"><li>${L(LINKS.prisma, "Javier de Sola Caraballo")}</li><li>${L(LINKS.p_lopez, "Victoria Patricia López Cabeza")}</li><li>${L(LINKS.p_serrano, "Antonio Serrano Jiménez")}</li><li>${L(LINKS.p_rivera, "Carlos Rivera Gómez")}</li><li>${L(LINKS.p_galan, "Carmen Galán Marín")}</li></ul>
    <p>La investigación se ha realizado en el grupo ${L(LINKS.tep, "TEP-206 SATH (Sostenibilidad en Arquitectura, Tecnología y Patrimonio)")}, como parte de la tesis doctoral de <strong>${L(LINKS.prisma, "Javier de Sola Caraballo")}</strong>, en la ${L(LINKS.us, "Universidad de Sevilla")}, y se ha desarrollado dentro del proyecto ${L(LINKS.cool, "Cool&amp;scape")}, que también la ha financiado.</p>
    <h3>¿Qué analiza esta investigación?</h3>
    <p>Analiza el riesgo climático por calor esperado en 2050, entendido como la coincidencia de la <strong>amenaza térmica</strong> y de la <strong>vulnerabilidad socioeconómica</strong> de la población para afrontarlo.</p>
    <div class="cards two">
      <div class="card"><div class="ci">🌡️</div><h4>Amenaza térmica</h4><p>Se parte de un clima estimado para el año 2050 y de la temperatura del aire simulada hora a hora. Se analizan tres facetas del calor: las horas de calor extremo durante el día, el estrés térmico durante la noche y el calor acumulado, que condiciona la demanda de refrigeración.</p></div>
      <div class="card"><div class="ci">👥</div><h4>Vulnerabilidad socioeconómica</h4><p>Se consideran tres factores que condicionan la capacidad de hacer frente al calor: la renta de los hogares, que determina el acceso a la climatización y a otros recursos; la edad de la población (mayores de 65 años), que sufre en mayor medida las consecuencias médicas de la exposición; y la edad de la edificación, relacionada con el aislamiento y la protección frente a las temperaturas extremas.</p></div>
    </div>
    <div class="card result"><div class="ci">🗺️</div><div><h4>Riesgo climático</h4><p>El riesgo climático se determina como la coincidencia, en una misma zona, de amenaza térmica y vulnerabilidad socioeconómica. Se gradúa en un mapa con cuatro niveles de amenaza (de 0 a 3) y cuatro de vulnerabilidad (de 0 a 3). El mapa final indica en qué zonas de la ciudad coinciden el calor y la vulnerabilidad, y con qué intensidad.</p></div></div>
    <p class="notice"><strong>Importante:</strong> las temperaturas son el resultado de una simulación para un escenario climático futuro, y las condiciones de vulnerabilidad proceden de datos socioeconómicos promediados por sección censal. Los resultados no se han contrastado con mediciones. El producto final es un diagnóstico comparativo dentro de la ciudad, promediado en cada sección censal.</p>
    <div class="cta"><button class="btn" data-go="visor">Explorar el mapa</button> <button class="btn ghost" data-go="que">Qué se ha hecho</button></div>`,
  que_h: "Qué se ha hecho",
  que_html: `
    <p>Se aplica el concepto de riesgo del ${L(LINKS.ipcc, "Sexto Informe de Evaluación del IPCC (AR6)")}, que entiende el riesgo climático como la interacción de tres componentes: la <strong>amenaza</strong>, la <strong>exposición</strong> y la <strong>vulnerabilidad</strong>. Así, el riesgo no se encuentra necesariamente donde más calor hace, sino donde el calor afecta a hogares que disponen de menos recursos para afrontarlo.</p>
    <figure class="venn">
      <svg viewBox="0 0 440 330" role="img" aria-label="Amenaza, exposición y vulnerabilidad se cruzan en el riesgo climático">
        <circle cx="160" cy="125" r="105" fill="#cf8335" fill-opacity=".42" stroke="#b0621a" stroke-width="1.5"/>
        <circle cx="280" cy="125" r="105" fill="#9aa4ad" fill-opacity=".45" stroke="#6b7785" stroke-width="1.5"/>
        <circle cx="220" cy="222" r="105" fill="#89a0cc" fill-opacity=".5" stroke="#556ba4" stroke-width="1.5"/>
        <text x="110" y="88" text-anchor="middle" font-weight="700" font-size="15" fill="#6e3a0c">Amenaza</text><text x="110" y="106" text-anchor="middle" font-size="11.5" fill="#6e3a0c">térmica por calor</text>
        <text x="330" y="88" text-anchor="middle" font-weight="700" font-size="15" fill="#3d4650">Exposición</text><text x="330" y="106" text-anchor="middle" font-size="11.5" fill="#3d4650">población residente</text>
        <text x="220" y="288" text-anchor="middle" font-weight="700" font-size="15" fill="#2b3f73">Vulnerabilidad</text><text x="220" y="306" text-anchor="middle" font-size="11.5" fill="#2b3f73">socioeconómica</text>
        <circle cx="220" cy="156" r="40" fill="#89628C" fill-opacity=".95" stroke="#631673" stroke-width="1.5"/><text x="220" y="152" text-anchor="middle" font-weight="800" font-size="15" fill="#fff">RIESGO</text><text x="220" y="168" text-anchor="middle" font-size="11" fill="#fff">climático</text>
      </svg>
      <figcaption>El riesgo climático aparece donde se cruzan la amenaza, la exposición y la vulnerabilidad (marco conceptual del IPCC AR6).</figcaption>
    </figure>
    <div class="cards">
      <div class="card"><div class="ci">🌡️</div><h4>Amenaza</h4><p>Se evalúa con tres índices calculados a partir de la temperatura del aire simulada hora a hora:</p><ul class="bl"><li><strong>Horas por encima de la temperatura de disparo</strong> (40 °C): temperatura a partir de la cual aumentan las muertes asociadas al calor.</li><li><strong>Exceso de calor nocturno</strong>: estrés térmico durante la noche, que impide la recuperación fisiológica normal.</li><li><strong>Grados-hora de refrigeración</strong>: calor acumulado, que se traduce en una mayor demanda de energía para climatizar las viviendas.</li></ul></div>
      <div class="card"><div class="ci">🏘️</div><h4>Exposición</h4><p>Es la presencia de población residente. Se aplica como un filtro según la densidad de población (≥ 1.200 habitantes/km²), para centrar el análisis en el tejido residencial consolidado, donde vive la población que se quiere proteger.</p></div>
      <div class="card"><div class="ci">👥</div><h4>Vulnerabilidad</h4><p>Se evalúan tres factores que condicionan la capacidad de hacer frente al calor:</p><ul class="bl"><li><strong>Renta de los hogares</strong>, asociada al acceso a climatización y a la posibilidad de rehabilitar la vivienda.</li><li><strong>Edad de la población</strong> (65 años o más), con mayor sensibilidad médica al calor.</li><li><strong>Antigüedad de los edificios</strong>, relacionada con su aislamiento y con la protección que ofrecen frente al calor.</li></ul></div>
    </div>
    <div class="card wide"><div class="ci">🗺️</div><h4>Riesgo</h4><p>El índice de riesgo climático se construye por comparación dentro de la propia ciudad, a partir de las distribuciones de cada índice en percentiles. Una sección censal se marca como <strong>crítica</strong> cuando se sitúa en el 20 % de los casos más extremos, es decir, cuando supera el percentil 80 (en la renta, cuando queda por debajo del percentil 20; en la edificación, cuando es de 1979 o anterior).</p><p>Cada marca suma un punto: para cada sección se cuenta cuántos de los tres indicadores de amenaza (H) y cuántos de los tres de vulnerabilidad (V) son críticos, de modo que ambos niveles van de 0 a 3. Esas dos cuentas la sitúan en una de las 16 casillas de un <strong>mapa bivariado de 4×4 clases</strong>, que indica en qué secciones censales coinciden el calor y la vulnerabilidad, y con qué intensidad.</p><p>El análisis se aplica a las secciones residenciales de la ciudad y su resultado es un diagnóstico relativo, que compara unas zonas con otras, y no un valor absoluto.</p></div>`,
  metodo_h: "Método",
  metodo_html: `
    <p>La investigación aporta una metodología para evaluar el riesgo climático por calor en las ciudades, con un carácter predictivo, adaptativo y reproducible. Se basa en datos oficiales en abierto, software de código abierto, simulaciones de bajo coste computacional y un cálculo de índices sin ponderar, lo que permite adaptarla o ampliarla según los objetivos de cada caso.</p>
    <p>Este estudio se ha centrado en un escenario futuro (el año 2050), pero la metodología está diseñada para poder aplicarse también al presente. Sevilla actúa como laboratorio urbano; el método puede reproducirse en cualquier ciudad mediana o grande que disponga de datos abiertos similares.</p>
    <h3>Seis pasos</h3>
    <ol class="steps">
      <li><strong>Datos en abierto.</strong> El modelo se alimenta de datos oficiales en abierto: edificios del ${L(LINKS.catastro, "Catastro")} (huella, altura y año de construcción), modelos digitales de elevación y datos LiDAR del ${L(LINKS.cnig, "Centro Nacional de Información Geográfica (CNIG/IGN)")}, impermeabilidad y masas de agua de ${L(LINKS.hrl, "Copernicus")}, y un clima para 2050 obtenido a partir de ${L(LINKS.ipccwg1, "proyecciones climáticas del IPCC")} (un año meteorológico típico adaptado al escenario RCP 4.5).</li>
      <li><strong>Creación de un modelo digital.</strong> Con ${L(LINKS.qgis, "QGIS")}, un software libre de código abierto, se crea un modelo digital del entorno urbano en el que se vuelcan todos los datos abiertos.</li>
      <li><strong>Simulación microclimática.</strong> A partir de ese modelo se simula la temperatura del aire intraurbana, hora a hora y en celdas de 100 m, con TARGET (${L(LINKS.target, "Broadbent et al., 2019")}), un modelo de código abierto incluido en la suite ${L(LINKS.umep, "UMEP")} para QGIS.</li>
      <li><strong>Calibración y validación.</strong> El modelo se ha calibrado y validado con datos de estaciones meteorológicas locales de Sevilla, siguiendo la metodología de ${L(LINKS.agrawal, "Agrawal et al. (2026)")}.</li>
      <li><strong>Cálculo de índices de amenaza y vulnerabilidad.</strong> Se calculan tres índices de amenaza térmica y tres de vulnerabilidad socioeconómica por sección censal, y se comparan con la distribución de la ciudad para puntuar cada uno de 0 a 3.</li>
      <li><strong>Mapeado y clasificación del riesgo.</strong> Se clasifica el riesgo según el marco del IPCC AR6, combinando las puntuaciones de amenaza (H) y de vulnerabilidad (V) en un mapa bivariado.</li>
    </ol>
    <figure class="fig">
      <img src="assets/img/fig1_metodologia.png" alt="Diagrama del marco metodológico del artículo (Figura 1)">
      <figcaption><strong>Marco metodológico.</strong> Los datos de partida alimentan el modelo y permiten calcular los índices de amenaza (H) y de vulnerabilidad (V), que se combinan con el filtro de exposición para obtener el diagnóstico de riesgo. Figura 1 de la publicación original, en inglés, reproducida con licencia CC BY-NC-ND 4.0: Sola-Caraballo et al. (2026), <i>Urban Climate</i> ${L(LINKS.doi, "doi:10.1016/j.uclim.2026.103156")}.</figcaption>
    </figure>
    <h3>Escenario y periodo</h3>
    <p>Se ha seleccionado un escenario climático futuro, el año 2050 con la trayectoria de emisiones RCP 4.5, definida por el IPCC en su Quinto Informe de Evaluación como un escenario intermedio de estabilización (${L(LINKS.rcp, "IPCC AR5")}). El objetivo es estudiar cómo se enfrentaría la ciudad actual, con su morfología y su población de hoy, a un clima esperado dentro de unos 25 años. El clima corresponde a unas condiciones típicas de verano, en un periodo representativo de 14 días de agosto (del 7 al 20) de ese clima futuro.</p>
    <h3>Indicadores</h3>
    <p>Se emplean tres indicadores de amenaza por calor, que exploran distintas facetas del calor (la exposición a temperaturas elevadas, el estrés térmico durante la noche y el calor acumulado), y tres indicadores de la situación socioeconómica, que condicionan la capacidad de hacer frente a esas condiciones.</p>
    <div class="tablewrap"><table class="tbl" id="tbl-ind"></table></div>
    <p>Un indicador se considera <strong>crítico</strong> cuando el valor promedio de la sección censal rebasa el umbral indicado, que se define a partir de la distribución de la propia ciudad.</p>
    <h3>Enfoque en zonas residenciales</h3>
    <p>Se han estudiado las secciones censales residenciales (con una densidad de población de al menos 1.200 habitantes/km²). Con ello se pone el énfasis en la exposición de la población y se evita analizar térmicamente zonas con características muy específicas y poco representativas del tejido residencial, como aeropuertos, polígonos industriales, grandes espacios verdes o áreas eminentemente rurales. Las secciones que aparecen sin color en el mapa quedan fuera de este enfoque.</p>
    <h3>Datos utilizados y año de referencia</h3>
    <p>Los datos representan el estado actual de la ciudad, a partir de los más recientes disponibles de cada fuente en el momento de la publicación del estudio (por ejemplo: datos socioeconómicos de 2023, edificios del Catastro de 2023, Copernicus de 2018). Solo el clima se proyecta a 2050 (RCP 4.5), lo que permite ver cómo se comportaría la ciudad actual frente a las condiciones climáticas esperadas.</p>
    <h3>Datos complementarios</h3>
    <p>Esta herramienta incorpora algunas variables complementarias que no figuran en el artículo, como variables de morfología urbana y otros datos demográficos y socioeconómicos. El NDVI y el albedo proceden de ${L(LINKS.sentinel, "Sentinel-2")}; el factor de visión del cielo, de ${L(LINKS.umep, "UMEP")}; y la ocupación edificada (PAI), de la geometría del ${L(LINKS.catastro, "Catastro")}.</p>`,
  uso_h: "Interpretación y usos",
  uso_html: `
    <p>Este estudio busca obtener una imagen, actual o proyectada, de las condiciones de riesgo climático por calor de una ciudad. Además de ofrecer información específica y detallada, permite realizar un diagnóstico objetivo, basado en datos oficiales y en metodologías científicas, de la situación de la ciudad y de su población por zonas.</p>
    <p>En ningún caso se pretende estigmatizar ni señalar zonas. Se trata de reconocer que cada zona tiene necesidades distintas y de poner de manifiesto, en cada una, qué tipo de intervención requiere.</p>
    <h3>Cómo leer el mapa de riesgo</h3>
    <p>El mapa bivariado combina dos variables de cada sección censal, la amenaza (H) y la vulnerabilidad (V), con valores de 0 a 3. Cada color indica el resultado combinado:</p>
    <div class="legrow"><ul class="legli">
      <li><span class="sw4"><i style="background:#FFFFFF;border:1px solid #bbb"></i></span><span><strong>Blanco:</strong> sin amenaza ni vulnerabilidad críticas (H = 0 y V = 0).</span></li>
      <li><span class="sw4"><i style="background:#E1B7BF"></i><i style="background:#D7898D"></i><i style="background:#CC5A5A"></i></span><span><strong>Tonos cálidos, del rosa claro al rojo anaranjado:</strong> hay amenaza térmica, pero no vulnerabilidad (H &gt; 0 y V = 0). Cuanto más intenso, más indicadores de calor son críticos.</span></li>
      <li><span class="sw4"><i style="background:#BAD0EA"></i><i style="background:#89BBE1"></i><i style="background:#57A5D9"></i></span><span><strong>Tonos azules:</strong> hay vulnerabilidad, pero no amenaza térmica (H = 0 y V &gt; 0).</span></li>
      <li><span class="sw4"><i style="background:#B6A1B7"></i><i style="background:#8C8BAF"></i><i style="background:#89628C"></i></span><span><strong>Tonos morados y violetas:</strong> coinciden amenaza y vulnerabilidad.</span></li>
      <li><span class="sw4"><i style="background:#624E8C"></i><i style="background:#7F3C6B"></i><i style="background:#631673"></i></span><span><strong>Morado oscuro intenso:</strong> coincidencia con niveles altos de ambas (H ≥ 2 y V ≥ 2), que es el <strong>alto riesgo combinado</strong>.</span></li>
    </ul><div id="uso-diamond" class="usodiamond"></div></div>
    <h3>Utilidad y usos</h3>
    <p><strong>Información y mapeado.</strong> La herramienta permite conocer el estado de una ciudad, o de una zona concreta, y analizar con detalle cómo le afectan el calor y la vulnerabilidad socioeconómica. Puede ser consultada tanto por administraciones y personal técnico como por la ciudadanía, que puede conocer la situación de su barrio. Es una forma de ejercer el derecho a la información y un apoyo a la justicia climática.</p>
    <p><strong>Priorización y localización.</strong> Esta investigación localiza los puntos críticos de la ciudad frente al calor y frente a la capacidad de afrontarlo, es decir, los más afectados por temperaturas extremas durante el día, por temperaturas elevadas durante la noche o por condiciones de vulnerabilidad socioeconómica que dificultan hacer frente a ese calor. Esto permite orientar y priorizar los recursos disponibles hacia donde más se necesitan.</p>
    <p><strong>Diagnóstico y conocimiento de cada zona.</strong> Conocer con detalle qué ocurre en cada sección censal ayuda a entender qué tipo de problemática tiene cada zona y, en consecuencia, a planificar mejor las necesidades de actuación. No requiere lo mismo una zona sometida a calor extremo diurno que otra con temperaturas elevadas durante la noche; tampoco se aborda igual una vulnerabilidad derivada de la antigüedad de los edificios que otra derivada de los niveles de renta; y no deberían tener la misma prioridad las zonas con un índice resultante bajo que aquellas en las que coinciden varias condiciones que elevan el riesgo.</p>
    <p><strong>Vocación evolutiva y adaptativa.</strong> La metodología está pensada para evolucionar. Puede aplicarse a nuevas ciudades, incorporar otros escenarios climáticos y nuevos indicadores, definidos según el objetivo de información buscado (por ejemplo, otras dimensiones de la vulnerabilidad), y actualizarse con datos más recientes y con los cambios de la ciudad y de su población, de modo que el diagnóstico se mantenga vigente.</p>
    <h3>Limitaciones</h3>
    <ul>
      <li>Los datos de temperatura proceden de una simulación, calibrada y validada con estaciones meteorológicas, pero sin una monitorización específica que los confirme.</li>
      <li>Las condiciones de vulnerabilidad se limitan a tres indicadores, que no abarcan todas las facetas de la vulnerabilidad socioeconómica. Los indicadores no están ponderados entre sí, por lo que la lectura del mapa es cualitativa.</li>
      <li>Los datos están agregados por sección censal: indican condiciones predominantes, no la situación de cada persona.</li>
      <li>El umbral del percentil 80 es relativo: en toda ciudad habrá siempre una fracción de secciones críticas.</li>
      <li>Es una simulación de un único episodio de 14 días, para un clima de 2050 aplicado a la ciudad actual; no incluye proyecciones de población ni de usos del suelo.</li>
      <li>El diagnóstico es <strong>comparativo y relativo</strong> dentro de la ciudad, no una predicción absoluta, y no se ha validado con datos de mortalidad o morbilidad por sección.</li>
    </ul>`,
  datos_h: "Datos y cita",
  datos_html: `
    <h3>Artículo y datos complementarios</h3>
    <p>Este visor es de consulta. El artículo y su material suplementario (la tabla de resultados por sección censal) se descargan desde la página de la revista:</p>
    <p><a class="btn" href="https://doi.org/10.1016/j.uclim.2026.103156" target="_blank" rel="noopener">Ir al artículo y a los datos complementarios</a></p>
    <h3>Cómo citar</h3>
    <p class="cite">Sola-Caraballo, J., López-Cabeza, V. P., Serrano-Jiménez, A., Rivera-Gomez, C., Galan-Marin, C. (2026). A predictive framework for urban climate risk: Mapping heat hazard and socioeconomic vulnerability at high resolution scenarios. <i>Urban Climate</i>, 70, 103156. ${L(LINKS.doi, "https://doi.org/10.1016/j.uclim.2026.103156")}</p>
    <h3>Licencia de uso y fuentes</h3>
    <p>Contenido y datos mostrados: © Javier de Sola Caraballo y coautores, bajo licencia <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/deed.es" target="_blank" rel="noopener">CC BY-NC-ND 4.0</a>. Se permite compartir con cita de la fuente; no se permite el uso comercial ni la modificación. No está permitida la extracción masiva de los datos.</p>
    <ul>
      <li>${L(LINKS.ine, "INE")}: límites de sección censal, población y renta (${L(LINKS.adrh, "Atlas de Distribución de Renta de los Hogares")}), licencia CC BY 4.0. Este visor no está avalado por el INE.</li>
      <li>${L(LINKS.catastro, "Dirección General del Catastro")}: edificios (INSPIRE), CC BY 4.0.</li>
      <li>${L(LINKS.cnig, "CNIG / IGN")}: modelos digitales y LiDAR. Ortofoto: ${L(LINKS.pnoa, "PNOA")} cedido por © Instituto Geográfico Nacional.</li>
      <li>Copernicus: ${L(LINKS.hrl, "impermeabilidad")} y agua (2018), ${L(LINKS.corine, "CORINE Land Cover")}.</li>
      <li>${L(LINKS.aemet, "AEMET")}: datos meteorológicos.</li>
      <li>Modelo TARGET (${L(LINKS.target, "Broadbent et al., 2019")}) mediante ${L(LINKS.umep, "UMEP")}.</li>
    </ul>
    <h3>Financiación</h3>
    <p>Trabajo financiado por los proyectos ${L(LINKS.proj1, "PID2021-124539OB-I00")} y ${L(LINKS.proj2, "PID2024-155805OB-C21")} (MCIN/AEI/10.13039/501100011033) y por «FEDER, una manera de hacer Europa»; contrato predoctoral FPU21/02458 (programa FPU, Ministerio de Ciencia, Innovación y Universidades).</p>
    <h3>Contacto</h3>
    <p>Javier de Sola Caraballo · <a href="mailto:jdesola@us.es">jdesola@us.es</a> · ${L(LINKS.tep, "Grupo TEP-206 SATH")} · ${L(LINKS.cool, "Proyecto Cool&amp;scape")}</p>`,

  // visor
  no_map: "No se pudo iniciar el mapa. Comprueba que tu navegador admite WebGL y que tienes conexión a internet.", load_err: "No se pudieron cargar los datos del visor. Recarga la página o inténtalo más tarde.",
  layers: "Capas", basemap: "Mapa de fondo: ortofoto PNOA", sat_opacity: "Opacidad de la ortofoto",
  layer_opacity: "Opacidad de la capa", bld: "Edificios (Catastro)", bld_opacity: "Opacidad de los edificios (visibles al acercar)", search_ph: "Buscar barrio o código de sección…",
  print: "Imprimir o guardar esta vista (PDF o imagen)", pv_wait: "Generando la vista en alta calidad…", pv_pdf: "Descargar PDF", pv_png: "Descargar imagen (PNG)", pv_err: "No se pudo generar la vista. Inténtalo de nuevo.", print_hdr: "Herramienta de análisis de riesgo climático por calor | Sevilla 2050", print_ftr: "Visor interactivo divulgativo derivado de la investigación publicada en", print_att: "Ortofoto: PNOA cedido por © Instituto Geográfico Nacional.", print_scale: "Escala",
  disc_title: "Antes de explorar el mapa", disc_ok: "Entendido", disc_close: "Cerrar",
  disc_html: `<p>El nivel de riesgo climático se ha estimado siguiendo la definición del ${L(LINKS.ipcc, "IPCC")}, combinando tres índices de amenaza por calor con tres índices de vulnerabilidad socioeconómica.</p>
    <p>Es el resultado de una comparación dentro de la propia ciudad, no frente a otras ciudades ni a valores absolutos, por lo que siempre habrá zonas más expuestas que otras. Los indicadores no están ponderados entre sí y la lectura es cualitativa.</p>
    <p>Las temperaturas proceden de una simulación calibrada y validada con estaciones meteorológicas, pero aún no contrastada con mediciones específicas en cada zona. Los resultados deben entenderse como un diagnóstico orientativo.</p>
    <p>El objetivo de esta herramienta es favorecer el derecho a la información y la priorización y optimización de las intervenciones urbanas.</p>`,
  g_base: "Base", g_thermal: "Temperatura simulada", g_hazard: "Amenaza térmica", g_vuln: "Vulnerabilidad", g_risk: "Riesgo",
  l_contornos: "Secciones censales (solo contornos)", l_t_media: "Temperatura media del aire", l_t_max_dia: "Media de las temperaturas máximas diarias",
  l_t_min_dia: "Media de las temperaturas mínimas diarias", l_h_sobre40: "Horas sobre 40 °C (H>Tt)", l_hne: "Exceso de calor nocturno (HNe)",
  l_cdh: "Grados-hora de refrigeración (CDH)", l_renta: "Renta mediana por unidad de consumo", l_p_mayor65: "Población de 65 años o más",
  l_anyo_edif: "Año medio de construcción de los edificios", l_bivar: "Riesgo climático bivariado (amenaza × vulnerabilidad)",
  legend: "Leyenda", leg_excl: "Sin color: sección excluida o fuera del área simulada. Línea negra discontinua: área simulada.", leg_thr: "Umbral crítico",
  leg_hazard: "Amenaza (H)", leg_vuln: "Vulnerabilidad (V)",
  hover_hint: "Pasa el cursor sobre una sección y haz clic para ver su ficha.",
  excl_densidad: "Excluida por baja densidad residencial (< 1.200 hab/km²).",
  excl_sim: "Fuera del área simulada: sin datos de simulación.",
  // ficha
  f_resumen: "Resumen", f_socio: "Socioeconomía", f_amenaza: "Amenaza térmica", f_vuln: "Vulnerabilidad", f_morf: "Morfología",
  f_code: "Sección censal", f_pob: "Población residente", f_risk: "Riesgo climático bivariado", f_h: "Amenaza (H)", f_v: "Vulnerabilidad (V)",
  f_crit: "Nivel crítico", f_nocrit: "Por debajo del umbral", f_share: "Compartir esta sección", f_copied: "¡Copiado!",
  f_mean: "Media de la ciudad", f_min: "Mín.", f_max: "Máx.", f_thr: "Umbral", f_val: "Esta sección",
  f_disclaimer: "Fuentes. Datos socioeconómicos: INE (2023). Edificios: Catastro (2023). Amenaza térmica: simulación TARGET, 7–20 de agosto de 2050 (RCP 4.5); no son mediciones. Clasificación: Sola-Caraballo et al. (2026), Urban Climate. Diagnóstico relativo dentro de la ciudad, a escala de sección censal.",
  rd_title: "Perfil de la sección frente a la ciudad", rd_cap: "Posición de la sección entre las 500 evaluadas (0–100, más lejos del centro = peor). Línea roja discontinua: umbral crítico de cada índice (percentil 80; percentil 20 en la renta; año 1979 en la edificación). Un punto fuera de esa línea es crítico.",
  rd_h40: "Horas >40 °C", rd_hne: "Calor nocturno", rd_cdh: "Refrigeración", rd_renta: "Renta baja", rd_65: "Mayores 65", rd_edif: "Edif. antiguos",
  f_of3: "de 3 indicadores en nivel crítico", f_share_btn: "Compartir", f_src_ine: "Datos del INE (2023).", f_close: "Cerrar", f_here: "Esta sección", f_cmean: "Media de la ciudad", f_cthr: "Umbral crítico", f_pobl: "habitantes",
  u_persons: "personas", u_dens: "hab/km²", u_years: "años", u_perhh: "personas/hogar", u_r01: "(0 a 1)", u_rm11: "(−1 a 1)",
  f_comp: "Dato complementario, no incluido en el artículo.",
  risk_0: "Sin riesgo climático", risk_v: "Solo vulnerabilidad", risk_h: "Solo amenaza",
  risk_c: "Coinciden amenaza y vulnerabilidad", risk_hi: "Alto riesgo combinado",
  pob: "Población residente", dens: "Densidad de población", edad_media: "Edad media", p_menor18: "Menores de 18 años",
  p_mayor65: "Población de 65 años o más", pers_hogar: "Tamaño medio del hogar", p_unipers: "Hogares unipersonales",
  p_esp: "Población de nacionalidad española", p_extr: "Población de nacionalidad extranjera", mujeres: "Mujeres",
  t_media: "Temperatura media del aire", t_max_dia: "Media de las máximas diarias", t_min_dia: "Media de las mínimas diarias",
  t_dia: "Temperatura media diurna (°C)", t_noche: "Temperatura media nocturna (°C)",
  h_sobre40: "Horas sobre 40 °C (H>Tt)", hne: "Exceso de calor nocturno (HNe)", cdh: "Grados-hora de refrigeración (CDH)",
  renta: "Renta mediana por unidad de consumo", anyo_edif: "Año medio de construcción de los edificios",
  svf: "Factor de visión del cielo (SVF)", ndvi: "Índice de vegetación (NDVI)", albedo: "Albedo medio", pai: "Ocupación edificada (PAI)",
  altura: "Altura media de los edificios", far: "Edificabilidad (FAR)", arbol: "Cobertura arbórea", imperm: "Superficie impermeable",
  agua: "Superficie de agua", lcz: "Zona climática local (LCZ)",
  hint_svf: "Fracción de cielo visible; valores bajos = calle encajonada.", hint_ndvi: "Mide la cantidad de vegetación verde.",
  hint_albedo: "Fracción de la radiación solar que reflejan las superficies.", hint_pai: "Superficie en planta de edificios / superficie total.",
  hint_far: "Superficie construida total / superficie del suelo.",
  gl: {
    pob: ["Personas residentes en la sección censal.", "INE, Padrón continuo (definición resumida)"],
    dens: ["Población residente dividida por la superficie de la sección.", "Cálculo propio a partir de datos del INE"],
    edad_media: ["Media de las edades de las personas residentes.", "INE (definición resumida)"],
    p_menor18: ["Porcentaje de residentes con menos de 18 años.", "INE (definición resumida)"],
    p_mayor65: ["Porcentaje de residentes con 65 años o más. Menor capacidad de termorregulación frente al calor.", "INE"],
    pers_hogar: ["Número medio de personas que viven en cada hogar.", "INE (definición resumida)"],
    p_unipers: ["Porcentaje de hogares formados por una sola persona.", "INE (definición resumida)"],
    p_esp: ["Porcentaje de residentes con nacionalidad española.", "INE, Padrón continuo (definición resumida)"],
    p_extr: ["Porcentaje de residentes con nacionalidad extranjera.", "INE, Padrón continuo (definición resumida)"],
    renta: ["Mediana de la renta anual de los hogares por unidad de consumo (escala de equivalencia que pondera el tamaño y la composición del hogar).", "INE, Atlas de Distribución de Renta de los Hogares (definición resumida)"],
    anyo_edif: ["Año medio de construcción de los edificios de la sección. Los anteriores a 1979 se construyeron antes de la primera norma de aislamiento térmico (NBE-CT-79).", "Dirección General del Catastro; NBE-CT-79"],
    t_media: ["Media de la temperatura del aire simulada cada hora durante los 14 días de agosto de 2050.", "Simulación con TARGET (Broadbent et al., 2019)"],
    t_max_dia: ["Media de las temperaturas máximas de cada uno de los 14 días simulados.", "Simulación con TARGET (Broadbent et al., 2019)"],
    t_min_dia: ["Media de las temperaturas mínimas de cada uno de los 14 días simulados.", "Simulación con TARGET (Broadbent et al., 2019)"],
    h_sobre40: ["Número de horas acumuladas en que la temperatura del aire supera la temperatura de disparo (Tt): aquella por encima de la cual aumenta de forma marcada la mortalidad asociada al calor. Para la provincia de Sevilla Tt = 40 °C. Se cuentan las horas de los 14 días simulados.", "Díaz et al. (2015)"],
    hne: ["Exceso nocturno de calor: suma, en todas las noches de los 14 días simulados, de cuánto supera la temperatura del aire los 24 °C (°C·h). El umbral corresponde al percentil 95 de la temperatura mínima estival y a un umbral de mortalidad nocturna en Sevilla. Mide la falta de recuperación nocturna.", "He et al. (2022); Díaz Jiménez et al. (2015)"],
    cdh: ["Grados-hora de refrigeración: suma hora a hora de cuánto supera la temperatura del aire los 22 °C (°C·h), umbral de confort térmico interior. Indica la demanda potencial de refrigeración.", "Salata et al. (2022)"],
    svf: ["Fracción de cielo visible desde el suelo. 1 = espacio abierto; valores bajos = calle encajonada, que retiene el calor.", "Oke (1981); calculado con UMEP"],
    ndvi: ["Índice de vegetación de diferencia normalizada: mide la cantidad y el vigor de la vegetación verde. Va de −1 a 1; valores altos = más vegetación.", "Rouse et al. (1974); imágenes Sentinel-2"],
    albedo: ["Fracción de la radiación solar que reflejan las superficies. 0 = absorbe todo; 1 = refleja todo. Albedo bajo = más calor almacenado.", "Imágenes Sentinel-2"],
    pai: ["Índice de ocupación en planta: superficie ocupada por edificios dividida por la superficie total de la sección (0 a 1).", "Grimmond y Oke (1999); geometría del Catastro"],
    altura: ["Altura media de los edificios de la sección.", "Dirección General del Catastro"],
    far: ["Superficie construida total dividida por la superficie del suelo (m²/m²).", "Cálculo a partir del Catastro"],
    arbol: ["Porcentaje de la superficie cubierto por copas de árboles.", "Modelo urbano del estudio"],
    imperm: ["Porcentaje de superficie sellada (edificios, asfalto, hormigón).", "Copernicus, High Resolution Layer Imperviousness"],
    agua: ["Porcentaje de superficie ocupada por agua.", "Copernicus"],
    lcz: ["Clasificación de la forma urbana y la cobertura del suelo según su efecto sobre el clima local.", "Stewart y Oke (2012); mapa de Demuzere et al. (2022)"]
  },
  ind_head: ["Indicador", "Qué mide", "Umbral crítico", "Fuente"],
  ind_rows: [
    ["Horas sobre la temperatura de disparo (H>Tt)", "Número de horas acumuladas, durante los 14 días simulados, en que la temperatura del aire supera la temperatura de disparo (40 °C para la provincia de Sevilla): aquella a partir de la cual aumenta la mortalidad atribuida al calor.", "≥ P80<br>5&nbsp;h", L(LINKS.diaz, "Díaz et al. (2015)")],
    ["Exceso de calor nocturno (HNe)", "Exceso de calor acumulado durante la noche, medido como horas y grados por encima de 24 °C. Se relaciona con la falta de recuperación fisiológica durante el sueño. Los 24 °C corresponden al percentil 95 de la temperatura mínima estival y a un umbral de mortalidad nocturna en Sevilla.", "≥ P80<br>358&nbsp;°C·h", L(LINKS.he, "He et al. (2022)") + "; Díaz Jiménez et al. (2015)"],
    ["Grados-hora de refrigeración (CDH)", "Calor acumulado hora a hora por encima de 22 °C, umbral de confort térmico interior. Está relacionado con la demanda potencial de refrigeración.", "≥ P80<br>2.689&nbsp;°C·h", L(LINKS.salata, "Salata et al. (2022)")],
    ["Renta mediana por unidad de consumo", "Mediana de la renta anual de los hogares por unidad de consumo (ajustada por el tamaño y la composición del hogar) en cada sección censal. Refleja la capacidad económica para climatizar y rehabilitar la vivienda.", "≤ P20<br>14.350&nbsp;€", L(LINKS.adrh, "INE (2023)")],
    ["Población de 65 años o más", "Porcentaje de residentes de 65 años o más, con mayor sensibilidad médica a la exposición al calor.", "> P80<br>27,9&nbsp;%", L(LINKS.adrh, "INE (2023)")],
    ["Año medio de construcción de los edificios", "Año medio de construcción de la edificación. 1979 es el año de entrada en vigor de la " + L(LINKS.nbe, "NBE-CT-79") + ", la primera norma que regula el aislamiento térmico de los edificios en España; los anteriores cuentan, en general, con menor aislamiento.", "≤ 1979<br>(año)", L(LINKS.catastro, "Catastro (2023)")]
  ],
  lcz_names: {1:"Compacta de gran altura",2:"Compacta de altura media",3:"Compacta de baja altura",4:"Abierta de gran altura",5:"Abierta de altura media",6:"Abierta de baja altura",7:"Ligera de baja altura",8:"Grandes edificios bajos",9:"Edificación dispersa",10:"Industria pesada",11:"Arbolado denso",12:"Arbolado disperso",13:"Matorral",14:"Vegetación baja",15:"Roca o pavimento",16:"Suelo desnudo o arena",17:"Agua"},
  lulc_names: {"111":"Tejido urbano continuo","112":"Tejido urbano discontinuo","121":"Zonas industriales o comerciales","122":"Redes viarias y ferroviarias","124":"Aeropuertos","141":"Zonas verdes urbanas","142":"Instalaciones deportivas y recreativas","131":"Zonas de extracción minera","133":"Zonas en construcción","211":"Tierras de labor en secano","212":"Regadío permanente"}
},
en: {
  site_title: "Heat-related climate risk analysis tool | Seville 2050",
  site_sub: "Heat hazard and socioeconomic vulnerability by census tract",
  tab_inicio: "Home", tab_que: "What was done", tab_visor: "Viewer", tab_metodo: "Method",
  tab_uso: "Interpretation and uses", tab_datos: "Data and citation",
  cite_bar: "Sola-Caraballo et al. (2026). A predictive framework for urban climate risk: Mapping heat hazard and socioeconomic vulnerability at high resolution scenarios. <i>Urban Climate</i>.",
  web_credit: "Website © 2026 Javier de Sola Caraballo · SATH-TEP206", web_credit_html: `Website © 2026 ${L(LINKS.prisma, "Javier de Sola Caraballo")} · ${L(LINKS.tep, "SATH-TEP206")}`, cite_short: "Article: <i>Urban Climate</i>, 2026.",
  inicio_h: `Heat-related climate risk analysis tool<br>Seville 2050`,
  inicio_lead: "",
  fund_h: "Funding",
  fund_txt: `This research was funded by projects ${L(LINKS.proj1, "PID2021-124539OB-I00")} and ${L(LINKS.proj2, "PID2024-155805OB-C21")} (MCIN/AEI/10.13039/501100011033 and “ERDF, a way of making Europe”) and by predoctoral contract FPU21/02458 (FPU programme, Spanish Ministry of Science, Innovation and Universities).`,
  inicio_html: `
    <p class="lead2">This tool and its interactive viewer are based on the results of a study published in the journal ${L(LINKS.doi, "<i>Urban Climate</i>, 2026")}.</p>
    <p>For every census tract in the city of Seville, the tool shows the level of climate risk projected for 2050. This level is obtained with the methodology proposed in the cited paper, by overlaying, for each area, the heat hazard and the socioeconomic vulnerability of its residents.</p>
    <p>Heat does not affect every part of the city equally, and not everyone has the same means to cope with it. The aim is to show, with a map and detailed information, where and why heat affects some parts of the city more than others. The tool shows how heat is distributed across the city and how well equipped, on average, the residents of each census tract are to cope with it.</p>
    <p class="pubh"><strong>Original publication:</strong></p>
    <p class="cite">Sola-Caraballo, J., López-Cabeza, V. P., Serrano-Jiménez, A., Rivera-Gomez, C. and Galan-Marin, C. (2026). <i>A predictive framework for urban climate risk: Mapping heat hazard and socioeconomic vulnerability at high resolution scenarios</i>. <i>Urban Climate</i>, 70, 103156. ${L(LINKS.doi, "https://doi.org/10.1016/j.uclim.2026.103156")}</p>
    <p class="pubh"><strong>Authors of the study:</strong></p>
    <ul class="authors"><li>${L(LINKS.prisma, "Javier de Sola Caraballo")}</li><li>${L(LINKS.p_lopez, "Victoria Patricia López Cabeza")}</li><li>${L(LINKS.p_serrano, "Antonio Serrano Jiménez")}</li><li>${L(LINKS.p_rivera, "Carlos Rivera Gómez")}</li><li>${L(LINKS.p_galan, "Carmen Galán Marín")}</li></ul>
    <p>The research was carried out in the ${L(LINKS.tep, "TEP-206 SATH research group (Sustainability in Architecture, Technology and Heritage)")}, as part of the doctoral thesis of <strong>${L(LINKS.prisma, "Javier de Sola Caraballo")}</strong>, at the ${L(LINKS.us, "University of Seville")}, and was developed within the ${L(LINKS.cool, "Cool&amp;scape")} project, which also funded it.</p>
    <h3>What does this research analyse?</h3>
    <p>It analyses the heat-related climate risk expected in 2050, understood as the combination of <strong>heat hazard</strong> and the <strong>socioeconomic vulnerability</strong> that limits the population’s ability to cope with it.</p>
    <div class="cards two">
      <div class="card"><div class="ci">🌡️</div><h4>Heat hazard</h4><p>The starting point is the climate projected for 2050, with air temperature simulated hour by hour. Three facets of heat are analysed: hours of extreme daytime heat, thermal stress during the night and accumulated heat, which drives cooling demand.</p></div>
      <div class="card"><div class="ci">👥</div><h4>Socioeconomic vulnerability</h4><p>Three factors shape the capacity to cope with heat: household income, which determines access to cooling and other resources; the share of older residents (65 and over), who are more severely affected by heat exposure; and the age of the building stock, which is linked to insulation and protection from extreme temperatures.</p></div>
    </div>
    <div class="card result"><div class="ci">🗺️</div><div><h4>Climate risk</h4><p>Climate risk is determined by where heat hazard and socioeconomic vulnerability overlap in the same area. Each area is scored on four hazard levels (0 to 3) and four vulnerability levels (0 to 3), and the two scores are combined in a single map. The final map shows where in the city high heat and high vulnerability coincide, and how strongly.</p></div></div>
    <p class="notice"><strong>Important:</strong> temperatures are the result of a simulation for a future climate scenario, and vulnerability conditions come from socioeconomic data averaged by census tract. The results have not been verified against field measurements, and the final product is a comparative diagnosis within the city, based on tract-level averages.</p>
    <div class="cta"><button class="btn" data-go="visor">Explore the map</button> <button class="btn ghost" data-go="que">What was done</button></div>`,
  que_h: "What was done",
  que_html: `
    <p>The study applies the risk framework of the ${L(LINKS.ipcc, "IPCC Sixth Assessment Report (AR6)")}, which treats climate risk as the interaction of three components: <strong>hazard</strong>, <strong>exposure</strong> and <strong>vulnerability</strong>. Risk is therefore not necessarily greatest where it is hottest, but where heat affects households with the fewest resources to cope with it.</p>
    <figure class="venn">
      <svg viewBox="0 0 440 330" role="img" aria-label="Hazard, exposure and vulnerability overlap in climate risk">
        <circle cx="160" cy="125" r="105" fill="#cf8335" fill-opacity=".42" stroke="#b0621a" stroke-width="1.5"/>
        <circle cx="280" cy="125" r="105" fill="#9aa4ad" fill-opacity=".45" stroke="#6b7785" stroke-width="1.5"/>
        <circle cx="220" cy="222" r="105" fill="#89a0cc" fill-opacity=".5" stroke="#556ba4" stroke-width="1.5"/>
        <text x="110" y="88" text-anchor="middle" font-weight="700" font-size="15" fill="#6e3a0c">Hazard</text><text x="110" y="106" text-anchor="middle" font-size="11.5" fill="#6e3a0c">heat</text>
        <text x="330" y="88" text-anchor="middle" font-weight="700" font-size="15" fill="#3d4650">Exposure</text><text x="330" y="106" text-anchor="middle" font-size="11.5" fill="#3d4650">resident population</text>
        <text x="220" y="288" text-anchor="middle" font-weight="700" font-size="15" fill="#2b3f73">Vulnerability</text><text x="220" y="306" text-anchor="middle" font-size="11.5" fill="#2b3f73">socioeconomic</text>
        <circle cx="220" cy="156" r="40" fill="#89628C" fill-opacity=".95" stroke="#631673" stroke-width="1.5"/><text x="220" y="152" text-anchor="middle" font-weight="800" font-size="15" fill="#fff">CLIMATE</text><text x="220" y="168" text-anchor="middle" font-size="11" fill="#fff">RISK</text>
      </svg>
      <figcaption>Climate risk appears where hazard, exposure and vulnerability overlap (IPCC AR6 conceptual framework).</figcaption>
    </figure>
    <div class="cards">
      <div class="card"><div class="ci">🌡️</div><h4>Hazard</h4><p>It is assessed with three indices calculated from air temperature simulated hour by hour:</p><ul class="bl"><li><strong>Hours above the trigger temperature</strong> (40 °C): the temperature above which heat-related deaths increase.</li><li><strong>Nocturnal heat excess</strong>: thermal stress during the night, which hinders normal physiological recovery.</li><li><strong>Cooling degree-hours</strong>: accumulated heat, which translates into greater energy demand to cool homes.</li></ul></div>
      <div class="card"><div class="ci">🏘️</div><h4>Exposure</h4><p>The presence of residents. It is applied as a population-density filter (≥ 1,200 inhabitants/km²), so that the analysis focuses on consolidated residential areas, where the people to be protected live.</p></div>
      <div class="card"><div class="ci">👥</div><h4>Vulnerability</h4><p>Three factors that determine the capacity to cope with heat are assessed:</p><ul class="bl"><li><strong>Household income</strong>, associated with access to cooling and the possibility of retrofitting the home.</li><li><strong>Age of the population</strong>: residents aged 65 or over, who are medically more sensitive to heat.</li><li><strong>Age of the buildings</strong>, related to their insulation and the protection they offer against heat.</li></ul></div>
    </div>
    <div class="card wide"><div class="ci">🗺️</div><h4>Risk</h4><p>The climate risk index is built by comparing tracts within the city itself, using the percentile distribution of each indicator. A census tract is flagged as <strong>critical</strong> when it falls within the most extreme 20% of cases, that is, when it exceeds the 80th percentile (for income, when it falls below the 20th percentile; for buildings, when they date from 1979 or earlier).</p><p>Each flag adds one point, so that the hazard level (H) and the vulnerability level (V) range from 0 to 3. Combining them gives a <strong>4×4 bivariate map</strong>, which shows in which census tracts heat and vulnerability coincide, and how strongly. The analysis is applied to the residential tracts of the city.</p><p>In practice, for each tract we count how many of the three hazard indicators and how many of the three vulnerability indicators are critical; those two counts place it in one of the 16 cells of the map. The result is therefore a relative diagnosis, which compares some parts of the city with others, and not an absolute value.</p></div>`,
  metodo_h: "Method",
  metodo_html: `
    <p>The research offers a predictive, adaptive and reproducible methodology for assessing heat-related climate risk in cities. It relies on official open data, open-source software, computationally inexpensive simulations and an unweighted calculation of indices, so it can be adapted or extended to the objectives of each case.</p>
    <p>This study focuses on a future scenario (the year 2050), although the methodology can equally be applied to present-day conditions. Seville serves as the case study, but the method can be reproduced in any medium-sized or large city with similar open data.</p>
    <h3>Six steps</h3>
    <ol class="steps">
      <li><strong>Open data.</strong> The model uses official open data: buildings from the ${L(LINKS.catastro, "Cadastre")} (footprint, height and construction year), digital elevation models and LiDAR data from the ${L(LINKS.cnig, "National Geographic Information Centre (CNIG/IGN)")}, imperviousness and water bodies from ${L(LINKS.hrl, "Copernicus")}, and a 2050 climate obtained from ${L(LINKS.ipccwg1, "IPCC climate projections")} (a typical meteorological year adapted to the RCP 4.5 scenario).</li>
      <li><strong>Creation of a digital model.</strong> With ${L(LINKS.qgis, "QGIS")}, free and open-source software, a digital model of the urban environment is built and all the open data are loaded into it.</li>
      <li><strong>Microclimate simulation.</strong> From that model, intra-urban air temperature is simulated hour by hour on 100 m cells with TARGET (${L(LINKS.target, "Broadbent et al., 2019")}), an open-source model included in the ${L(LINKS.umep, "UMEP")} suite for QGIS.</li>
      <li><strong>Calibration and validation.</strong> The model has been calibrated and validated with data from local weather stations in Seville, following the methodology of ${L(LINKS.agrawal, "Agrawal et al. (2026)")}.</li>
      <li><strong>Calculation of hazard and vulnerability indices.</strong> Three heat hazard indices and three socioeconomic vulnerability indices are calculated for each census tract and compared with the distribution across the city. The three hazard indicators give a hazard score (H) and the three vulnerability indicators a vulnerability score (V), each from 0 to 3.</li>
      <li><strong>Mapping and risk classification.</strong> Risk is classified following the IPCC AR6 framework, combining the hazard (H) and vulnerability (V) scores in a bivariate map.</li>
    </ol>
    <figure class="fig">
      <img src="assets/img/fig1_metodologia.png" alt="Diagram of the methodological framework of the paper (Figure 1)">
      <figcaption><strong>Methodological framework.</strong> The input data feed the model and make it possible to calculate the hazard (H) and vulnerability (V) indices, which are combined with the exposure filter to obtain the risk diagnosis. Figure 1 of the original publication, reproduced under licence (CC BY-NC-ND 4.0): Sola-Caraballo et al. (2026), <i>Urban Climate</i> ${L(LINKS.doi, "doi:10.1016/j.uclim.2026.103156")}.</figcaption>
    </figure>
    <h3>Scenario and period</h3>
    <p>A future climate scenario was selected: the year 2050 under the RCP 4.5 emissions pathway, defined by the IPCC in its Fifth Assessment Report as an intermediate stabilisation scenario (${L(LINKS.rcp, "IPCC AR5")}). The aim is to study how today’s city, with its present-day morphology and population, would cope with the climate expected in about 25 years. The simulation covers a representative 14-day period (7 to 20 August) of that future climate, under typical summer conditions.</p>
    <h3>Indicators</h3>
    <p>Three heat hazard indicators are used, which explore different facets of heat (exposure to high temperatures, thermal stress during the night and accumulated heat), together with three indicators of the socioeconomic situation, which determine the capacity to cope with those conditions.</p>
    <div class="tablewrap"><table class="tbl" id="tbl-ind"></table></div>
    <p>An indicator is considered <strong>critical</strong> when the average value for the census tract exceeds the threshold shown (or falls below it, in the case of income and building age). The thresholds are set from the city’s own distribution.</p>
    <h3>Focus on residential areas</h3>
    <p>The study covers residential census tracts (with a population density of at least 1,200 inhabitants/km²). This keeps the focus on where people live and avoids analysing the thermal conditions of areas with very specific characteristics that are not representative of residential areas, such as airports, industrial estates, large green spaces or predominantly rural areas. Tracts shown without colour on the map fall outside this focus.</p>
    <h3>Data used and reference year</h3>
    <p>The data represent the present state of the city, using the most recent data available from each source at the time the study was published (for example: socioeconomic data from 2023, Cadastre buildings from 2023, Copernicus from 2018). Only the climate is projected to 2050 (RCP 4.5), which shows how the present-day city would behave under the expected climate conditions.</p>
    <h3>Complementary data</h3>
    <p>This tool includes some complementary variables that do not appear in the paper, such as urban morphology variables and other demographic and socioeconomic data. NDVI and albedo come from ${L(LINKS.sentinel, "Sentinel-2")}; the Sky View Factor from ${L(LINKS.umep, "UMEP")}; and the building plan area index (PAI) from the geometry of the ${L(LINKS.catastro, "Cadastre")}.</p>`,
  uso_h: "Interpretation and uses",
  uso_html: `
    <p>This study aims to give a picture, current or projected, of a city’s heat-related climate risk. Besides detailed, location-specific information, it offers an objective, area-by-area diagnosis of the city and its population, based on official data and scientific methods.</p>
    <p>The aim is not to stigmatise or single out any area, but to recognise that each area has different needs and to show what kind of intervention each one requires.</p>
    <h3>How to read the risk map</h3>
    <p>The bivariate map combines two variables for each census tract, hazard (H) and vulnerability (V), with values from 0 to 3. Each colour shows the combined result:</p>
    <div class="legrow"><ul class="legli">
      <li><span class="sw4"><i style="background:#FFFFFF;border:1px solid #bbb"></i></span><span><strong>White:</strong> no critical hazard or vulnerability (H = 0 and V = 0).</span></li>
      <li><span class="sw4"><i style="background:#E1B7BF"></i><i style="background:#D7898D"></i><i style="background:#CC5A5A"></i></span><span><strong>Warm tones, from pale pink to orange-red:</strong> there is heat hazard but no vulnerability (H &gt; 0 and V = 0). The more intense the colour, the more heat indicators are critical.</span></li>
      <li><span class="sw4"><i style="background:#BAD0EA"></i><i style="background:#89BBE1"></i><i style="background:#57A5D9"></i></span><span><strong>Blue tones:</strong> there is vulnerability but no heat hazard (H = 0 and V &gt; 0).</span></li>
      <li><span class="sw4"><i style="background:#B6A1B7"></i><i style="background:#8C8BAF"></i><i style="background:#89628C"></i></span><span><strong>Purple and violet tones:</strong> hazard and vulnerability coincide.</span></li>
      <li><span class="sw4"><i style="background:#624E8C"></i><i style="background:#7F3C6B"></i><i style="background:#631673"></i></span><span><strong>Intense dark purple:</strong> both are high (H ≥ 2 and V ≥ 2), which is <strong>high combined risk</strong>.</span></li>
    </ul><div id="uso-diamond" class="usodiamond"></div></div>
    <h3>Usefulness and uses</h3>
    <p><strong>Information and mapping.</strong> The tool lets users see the situation of a city, or of a specific area, and examine in detail how heat and socioeconomic vulnerability affect it. It can be consulted by administrations and technical staff as well as by the general public, who can learn about the situation in their own neighbourhood. It supports the right to information and climate justice.</p>
    <p><strong>Prioritisation.</strong> The study identifies the city’s hotspots in terms of heat and the capacity to cope with it: the areas most affected by extreme daytime temperatures or high night-time temperatures, or where socioeconomic vulnerability makes coping harder. This helps direct available resources to where they are most needed.</p>
    <p><strong>Understanding each area.</strong> Knowing in detail what is happening in each census tract helps identify what kind of problem each area faces and, in turn, plan more suitable actions. An area exposed to extreme daytime heat needs a different response from one with very warm nights. Vulnerability linked to old buildings calls for different measures from vulnerability linked to low income. And areas with a low overall index should not be given the same priority as those where several conditions coincide and compound the risk.</p>
    <p><strong>An evolving, adaptive approach.</strong> The methodology is designed to evolve. It can be applied to new cities, incorporate other climate scenarios and new indicators, chosen to suit the purpose of the analysis (for example, other dimensions of vulnerability), and be updated with more recent data and with changes in the city and its population, so that the diagnosis stays up to date.</p>
    <h3>Limitations</h3>
    <ul>
      <li>Temperature data come from a simulation that was calibrated and validated against weather-station records, but the results have not been verified with dedicated field measurements.</li>
      <li>Vulnerability is captured by only three indicators, which cannot cover every facet of socioeconomic vulnerability. The indicators are not weighted against each other, so the map should be read qualitatively.</li>
      <li>Data are aggregated by census tract: they show predominant conditions, not each person’s situation.</li>
      <li>The 80th-percentile threshold is relative: in any city there will always be a fraction of critical tracts.</li>
      <li>It simulates a single 14-day episode, applying a 2050 climate to today’s city; no population or land-use projections are included.</li>
      <li>The diagnosis is <strong>comparative and relative</strong> within the city, not an absolute prediction, and it has not been validated against mortality or morbidity data by tract.</li>
    </ul>`,
  datos_h: "Data and citation",
  datos_html: `
    <h3>Article and supplementary data</h3>
    <p>This viewer is for consultation only. The article and its supplementary material (the per-tract results table) can be downloaded from the journal page:</p>
    <p><a class="btn" href="https://doi.org/10.1016/j.uclim.2026.103156" target="_blank" rel="noopener">Go to the article and supplementary data</a></p>
    <h3>How to cite</h3>
    <p class="cite">Sola-Caraballo, J., López-Cabeza, V. P., Serrano-Jiménez, A., Rivera-Gomez, C., Galan-Marin, C. (2026). A predictive framework for urban climate risk: Mapping heat hazard and socioeconomic vulnerability at high resolution scenarios. <i>Urban Climate</i>, 70, 103156. ${L(LINKS.doi, "https://doi.org/10.1016/j.uclim.2026.103156")}</p>
    <h3>Licence of use and sources</h3>
    <p>Content and data shown: © Javier de Sola Caraballo and co-authors, under <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/" target="_blank" rel="noopener">CC BY-NC-ND 4.0</a>. Sharing with attribution is allowed; commercial use and modification are not. Bulk extraction of the data is not permitted.</p>
    <ul>
      <li>${L(LINKS.ine, "INE")}: census-tract boundaries, population and income (${L(LINKS.adrh, "Household Income Distribution Atlas")}), CC BY 4.0. This viewer is not endorsed by the INE.</li>
      <li>${L(LINKS.catastro, "Spanish Cadastre")}: buildings (INSPIRE), CC BY 4.0.</li>
      <li>${L(LINKS.cnig, "CNIG / IGN")}: digital models and LiDAR. Orthophoto: ${L(LINKS.pnoa, "PNOA")} provided by © Instituto Geográfico Nacional.</li>
      <li>Copernicus: ${L(LINKS.hrl, "imperviousness")} and water (2018), ${L(LINKS.corine, "CORINE Land Cover")}.</li>
      <li>${L(LINKS.aemet, "AEMET")}: meteorological data.</li>
      <li>TARGET model (${L(LINKS.target, "Broadbent et al., 2019")}) through ${L(LINKS.umep, "UMEP")}.</li>
    </ul>
    <h3>Funding</h3>
    <p>Work funded by projects ${L(LINKS.proj1, "PID2021-124539OB-I00")} and ${L(LINKS.proj2, "PID2024-155805OB-C21")} (MCIN/AEI/10.13039/501100011033) and by “ERDF, a way of making Europe”; predoctoral contract FPU21/02458 (FPU programme, Spanish Ministry of Science, Innovation and Universities).</p>
    <h3>Contact</h3>
    <p>Javier de Sola Caraballo · <a href="mailto:jdesola@us.es">jdesola@us.es</a> · ${L(LINKS.tep, "TEP-206 SATH group")} · ${L(LINKS.cool, "Cool&amp;scape project")}</p>`,

  no_map: "The map could not be started. Check that your browser supports WebGL and that you are online.", load_err: "The viewer data could not be loaded. Reload the page or try again later.",
  layers: "Layers", basemap: "Base map: PNOA orthophoto", sat_opacity: "Orthophoto opacity",
  layer_opacity: "Layer opacity", bld: "Buildings (Cadastre)", bld_opacity: "Building opacity (visible when zoomed in)", search_ph: "Search neighbourhood or tract code…",
  print: "Print or save this view (PDF or image)", pv_wait: "Generating the high-quality view…", pv_pdf: "Download PDF", pv_png: "Download image (PNG)", pv_err: "The view could not be generated. Please try again.", print_hdr: "Heat-related climate risk analysis tool | Seville 2050", print_ftr: "Interactive outreach viewer derived from the research published in", print_att: "Orthophoto: PNOA provided by © Instituto Geográfico Nacional.", print_scale: "Scale",
  disc_title: "Before exploring the map", disc_ok: "Understood", disc_close: "Close",
  disc_html: `<p>The climate risk level has been estimated following the ${L(LINKS.ipcc, "IPCC")} definition, combining three heat hazard indices with three socioeconomic vulnerability indices.</p>
    <p>It results from comparing areas within the city itself, not with other cities or absolute values, so some areas will always rank as more exposed than others. The indicators are not weighted against each other and the reading is qualitative.</p>
    <p>Temperatures come from a simulation calibrated and validated with weather stations, but the results have not yet been verified with local measurements. They should be understood as an indicative diagnosis.</p>
    <p>This tool aims to support the right to information and to help prioritise and optimise urban interventions.</p>`,
  g_base: "Base", g_thermal: "Simulated temperature", g_hazard: "Heat hazard", g_vuln: "Vulnerability", g_risk: "Risk",
  l_contornos: "Census tracts (outlines only)", l_t_media: "Mean air temperature", l_t_max_dia: "Mean of daily maximum temperatures",
  l_t_min_dia: "Mean of daily minimum temperatures", l_h_sobre40: "Hours above 40 °C (H>Tt)", l_hne: "Nocturnal heat excess (HNe)",
  l_cdh: "Cooling degree-hours (CDH)", l_renta: "Median income per consumption unit", l_p_mayor65: "Population aged 65 and over",
  l_anyo_edif: "Mean building construction year", l_bivar: "Bivariate climate risk (hazard × vulnerability)",
  legend: "Legend", leg_excl: "No colour: excluded tract or outside the simulated area. Dashed black line: simulated area.", leg_thr: "Critical threshold",
  leg_hazard: "Hazard (H)", leg_vuln: "Vulnerability (V)",
  hover_hint: "Hover over a tract and click to see its profile.",
  excl_densidad: "Excluded for low residential density (< 1,200 inhab/km²).",
  excl_sim: "Outside the simulated area: no simulation data.",
  f_resumen: "Summary", f_socio: "Socioeconomics", f_amenaza: "Heat hazard", f_vuln: "Vulnerability", f_morf: "Morphology",
  f_code: "Census tract", f_pob: "Resident population", f_risk: "Bivariate climate risk", f_h: "Hazard (H)", f_v: "Vulnerability (V)",
  f_crit: "Critical level", f_nocrit: "Below threshold", f_share: "Share this tract", f_copied: "Copied!",
  f_mean: "City mean", f_min: "Min", f_max: "Max", f_thr: "Threshold", f_val: "This tract",
  f_disclaimer: "Sources. Socioeconomic data: INE (2023). Buildings: Cadastre (2023). Heat hazard: TARGET simulation, 7–20 August 2050 (RCP 4.5); not measurements. Classification: Sola-Caraballo et al. (2026), Urban Climate. Relative diagnosis within the city, at census-tract scale.",
  rd_title: "Tract profile compared with the city", rd_cap: "Position of the tract among the 500 assessed (0–100, further from the centre = worse). Dashed red line: critical threshold of each index (80th percentile; 20th percentile for income; the year 1979 for buildings). A point outside that line is critical.",
  rd_h40: "Hours >40 °C", rd_hne: "Night heat", rd_cdh: "Cooling", rd_renta: "Low income", rd_65: "Aged 65+", rd_edif: "Old buildings",
  f_of3: "of 3 indicators at critical level", f_share_btn: "Share", f_src_ine: "INE data (2023).", f_close: "Close", f_here: "This tract", f_cmean: "City mean", f_cthr: "Critical threshold", f_pobl: "inhabitants",
  u_persons: "people", u_dens: "inhab/km²", u_years: "years", u_perhh: "people/household", u_r01: "(0 to 1)", u_rm11: "(−1 to 1)",
  f_comp: "Complementary data, not included in the paper.",
  risk_0: "No climate risk", risk_v: "Vulnerability only", risk_h: "Hazard only",
  risk_c: "Hazard and vulnerability coincide", risk_hi: "High combined risk",
  pob: "Resident population", dens: "Population density", edad_media: "Mean age", p_menor18: "Population under 18",
  p_mayor65: "Population aged 65 and over", pers_hogar: "Mean household size", p_unipers: "One-person households",
  p_esp: "Population of Spanish nationality", p_extr: "Population of foreign nationality", mujeres: "Women",
  t_media: "Mean air temperature", t_max_dia: "Mean of daily maxima", t_min_dia: "Mean of daily minima",
  t_dia: "Mean daytime temperature (°C)", t_noche: "Mean night-time temperature (°C)",
  h_sobre40: "Hours above 40 °C (H>Tt)", hne: "Nocturnal heat excess (HNe)", cdh: "Cooling degree-hours (CDH)",
  renta: "Median income per consumption unit", anyo_edif: "Mean construction year of buildings",
  svf: "Sky View Factor (SVF)", ndvi: "Vegetation index (NDVI)", albedo: "Mean albedo", pai: "Building plan area index (PAI)",
  altura: "Mean building height", far: "Floor Area Ratio (FAR)", arbol: "Tree cover", imperm: "Impervious surface",
  agua: "Water surface", lcz: "Local Climate Zone (LCZ)",
  hint_svf: "Fraction of visible sky; low values = enclosed street.", hint_ndvi: "Measures the amount of green vegetation.",
  hint_albedo: "Fraction of solar radiation reflected by surfaces.", hint_pai: "Building footprint area / total area.",
  hint_far: "Total built floor area / land area.",
  gl: {
    pob: ["People living in the census tract.", "INE, Continuous Register (summarised definition)"],
    dens: ["Resident population divided by the tract area.", "Calculated from INE data"],
    edad_media: ["Mean of the ages of the residents.", "INE (summarised definition)"],
    p_menor18: ["Share of residents under 18 years old.", "INE (summarised definition)"],
    p_mayor65: ["Share of residents aged 65 or over. Reduced thermoregulatory capacity under heat.", "INE"],
    pers_hogar: ["Mean number of people living in each household.", "INE (summarised definition)"],
    p_unipers: ["Share of households made up of one person.", "INE (summarised definition)"],
    p_esp: ["Share of residents with Spanish nationality.", "INE, Continuous Register (summarised definition)"],
    p_extr: ["Share of residents with foreign nationality.", "INE, Continuous Register (summarised definition)"],
    renta: ["Median annual household income per consumption unit (an equivalence scale that weights household size and composition).", "INE, Household Income Distribution Atlas (summarised definition)"],
    anyo_edif: ["Mean construction year of the buildings in the tract. Buildings before 1979 predate Spain's first thermal insulation regulation (NBE-CT-79).", "Spanish Cadastre; NBE-CT-79"],
    t_media: ["Mean of the hourly simulated air temperature over the 14 days of August 2050.", "Simulation with TARGET (Broadbent et al., 2019)"],
    t_max_dia: ["Mean of the daily maximum temperatures of the 14 simulated days.", "Simulation with TARGET (Broadbent et al., 2019)"],
    t_min_dia: ["Mean of the daily minimum temperatures of the 14 simulated days.", "Simulation with TARGET (Broadbent et al., 2019)"],
    h_sobre40: ["Cumulative number of hours in which air temperature exceeds the trigger temperature (Tt): the temperature above which heat-related mortality rises sharply. For the province of Seville Tt = 40 °C. Hours are counted over the 14 simulated days.", "Díaz et al. (2015)"],
    hne: ["Nocturnal heat excess: sum, over all nights of the 14 simulated days, of how far air temperature exceeds 24 °C (°C·h). The threshold corresponds to the 95th percentile of summer minimum temperature and to a nocturnal mortality threshold in Seville. Measures lack of night-time recovery.", "He et al. (2022); Díaz Jiménez et al. (2015)"],
    cdh: ["Cooling degree-hours: hour-by-hour sum of how far air temperature exceeds 22 °C (°C·h), an indoor thermal comfort threshold. Indicates potential cooling demand.", "Salata et al. (2022)"],
    svf: ["Fraction of sky visible from the ground. 1 = open space; low values = enclosed street, which retains heat.", "Oke (1981); computed with UMEP"],
    ndvi: ["Normalised Difference Vegetation Index: measures the amount and vigour of green vegetation. Ranges from −1 to 1; high values = more vegetation.", "Rouse et al. (1974); Sentinel-2 imagery"],
    albedo: ["Fraction of solar radiation reflected by surfaces. 0 = absorbs everything; 1 = reflects everything. Low albedo = more stored heat.", "Sentinel-2 imagery"],
    pai: ["Plan area index: area covered by buildings divided by the total tract area (0 to 1).", "Grimmond and Oke (1999); Cadastre geometry"],
    altura: ["Mean height of the buildings in the tract.", "Spanish Cadastre"],
    far: ["Total built floor area divided by land area (m²/m²).", "Calculated from the Cadastre"],
    arbol: ["Percentage of the area covered by tree canopy.", "Urban model of the study"],
    imperm: ["Percentage of sealed surface (buildings, asphalt, concrete).", "Copernicus, High Resolution Layer Imperviousness"],
    agua: ["Percentage of the area covered by water.", "Copernicus"],
    lcz: ["Classification of urban form and land cover by its effect on local climate.", "Stewart and Oke (2012); map by Demuzere et al. (2022)"]
  },
  ind_head: ["Indicator", "What it measures", "Critical threshold", "Source"],
  ind_rows: [
    ["Hours above trigger temperature (H>Tt)", "Cumulative number of hours, over the 14 simulated days, in which air temperature exceeds the trigger temperature (40 °C for the province of Seville): the temperature above which heat-attributable mortality increases.", "≥ P80<br>5&nbsp;h", L(LINKS.diaz, "Díaz et al. (2015)")],
    ["Nocturnal heat excess (HNe)", "Excess heat accumulated during the night, measured as hours and degrees above 24 °C. It is related to the lack of physiological recovery during sleep. 24 °C corresponds to the 95th percentile of summer minimum temperature and to a nocturnal mortality threshold in Seville.", "≥ P80<br>358&nbsp;°C·h", L(LINKS.he, "He et al. (2022)") + "; Díaz Jiménez et al. (2015)"],
    ["Cooling degree-hours (CDH)", "Heat accumulated hour by hour above 22 °C, an indoor thermal comfort threshold. It is related to the potential cooling demand.", "≥ P80<br>2,689&nbsp;°C·h", L(LINKS.salata, "Salata et al. (2022)")],
    ["Median income per consumption unit", "Median annual household income per consumption unit (adjusted for household size and composition) in each census tract. It reflects the economic capacity to cool and retrofit the home.", "≤ P20<br>€14,350", L(LINKS.adrh, "INE (2023)")],
    ["Population aged 65 and over", "Share of residents aged 65 or over, who are medically more sensitive to heat exposure.", "> P80<br>27.9&nbsp;%", L(LINKS.adrh, "INE (2023)")],
    ["Mean construction year of buildings", "Mean construction year of the building stock. 1979 is the year " + L(LINKS.nbe, "NBE-CT-79") + " came into force, the first regulation of the thermal insulation of buildings in Spain; earlier buildings generally have less insulation.", "≤ 1979<br>(year)", L(LINKS.catastro, "Cadastre (2023)")]
  ],
  lcz_names: {1:"Compact high-rise",2:"Compact mid-rise",3:"Compact low-rise",4:"Open high-rise",5:"Open mid-rise",6:"Open low-rise",7:"Lightweight low-rise",8:"Large low-rise",9:"Sparsely built",10:"Heavy industry",11:"Dense trees",12:"Scattered trees",13:"Bush or scrub",14:"Low plants",15:"Bare rock or paved",16:"Bare soil or sand",17:"Water"},
  lulc_names: {"111":"Continuous urban fabric","112":"Discontinuous urban fabric","121":"Industrial or commercial units","122":"Road and rail networks","124":"Airports","141":"Green urban areas","142":"Sport and leisure facilities","131":"Mineral extraction sites","133":"Construction sites","211":"Non-irrigated arable land","212":"Permanently irrigated land"}
}
};
