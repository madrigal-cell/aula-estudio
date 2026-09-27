/* ===================== GEOGRAFÍA ===================== */
SUBJECTS.geo = {
 id:'geo', name:'Geografía', color:'geo', tema:'Tema 1 · La geografía y el trabajo del geógrafo',
 lessons:[
 {id:'g1', title:'¿Qué es la Geografía?', mins:8, steps:[
  {t:'read', h:'Una definición corta', body:`La **Geografía** es la ciencia que estudia el **espacio terrestre**: cómo es la Tierra y cómo la usamos las personas.

Se divide en dos ramas:

- **Geografía regional**: estudia lo que hace especial a **cada región**.
- **Geografía general**: busca **reglas generales** que valen para todo el planeta.`},
  {t:'read', h:'La Geografía general tiene dos mitades', body:`<div class="levels"><div class="level"><b>F</b><span><strong>Geografía física</strong>: la naturaleza. Climatología (climas), geomorfología (relieve), biogeografía (seres vivos), hidrografía (aguas).</span></div><div class="level"><b>H</b><span><strong>Geografía humana</strong>: las personas. Demografía (población), rural (campo), urbana (ciudades), economía.</span></div></div>

[[ok:Física = lo que ya estaba antes de las personas. Humana = lo que hacemos las personas.]]`},
  {t:'quiz', q:'La climatología pertenece a la…', opts:['Geografía humana','Geografía física','Geografía regional'], a:1, why:'El clima es un elemento natural → Geografía física.'},
  {t:'quiz', q:'Estudiar cuántas personas viven en una ciudad y qué edad tienen es…', opts:['Demografía (humana)','Hidrografía (física)','Geomorfología (física)'], a:0, why:'La población la estudia la demografía, dentro de la Geografía humana.'}
 ]},
 {id:'g2', title:'¿Para qué sirve?', mins:6, steps:[
  {t:'read', h:'No solo describe: explica', body:`La Geografía es **descriptiva** (dice cómo es un lugar) pero también **analítica** (explica por qué es así).

Sobre cualquier suceso con dimensión espacial, la Geografía estudia:

<div class="levels"><div class="level"><b>1</b><strong>Localización</strong>: ¿dónde pasa?</div><div class="level"><b>2</b><strong>Causas</strong>: ¿por qué pasa?</div><div class="level"><b>3</b><strong>Consecuencias</strong>: ¿qué provoca?</div><div class="level"><b>4</b><strong>Previsiones</strong>: ¿qué puede pasar después?</div></div>`},
  {t:'read', h:'Y nos ayuda a…', body:`- Pensar y actuar con **mejor criterio**.
- Tener una **actitud abierta** ante culturas diferentes.
- **Comprender** determinados comportamientos.
- **Valorar el patrimonio** natural y cultural del mundo.`},
  {t:'quiz', q:'Un geógrafo estudia un incendio. Preguntarse "¿qué zonas se quedaron sin bosque?" es analizar…', opts:['La localización','Las causas','Las consecuencias'], a:2, why:'Lo que provoca el suceso son sus consecuencias.'}
 ]},
 {id:'g3', title:'Herramienta 1: la fotografía aérea', mins:10, steps:[
  {t:'read', h:'Qué es', body:`Una **fotografía aérea** es una imagen tomada desde arriba: avión, dron o satélite.

- Puede ser en blanco y negro, en color o en **falso color** (la vegetación sale roja).
- Los contrastes de tonos y texturas dan pistas sobre lo que hay.
- Tienen distorsiones; cuando se corrigen se llaman **ortofotos**.

Comparar fotos de distintos años (El Ejido en 1956, 1977 y 2010) muestra cómo cambia un territorio.`},
  {t:'read', h:'El guion para comentar una foto (5 pasos)', body:`<div class="levels"><div class="level"><b>1</b><span><strong>Observa</strong>: ¿es un espacio natural o humanizado? ¿rural o urbano?</span></div><div class="level"><b>2</b><span><strong>Identifica</strong> los elementos: físicos (relieve, vegetación, ríos…) y humanos (pueblos, carreteras, cultivos…).</span></div><div class="level"><b>3</b><span><strong>Describe</strong> esos elementos: relieve llano o accidentado, hábitat concentrado o disperso, forma y tamaño de las parcelas, tipo de cultivos, cómo es la ciudad, las infraestructuras.</span></div><div class="level"><b>4</b><span><strong>Explica</strong> la transformación: causas y consecuencias del cambio.</span></div><div class="level"><b>5</b><span><strong>Evalúa</strong>: aspectos positivos y negativos.</span></div></div>

[[ok:Memoriza el orden con las iniciales: **O-I-D-E-E** (Observa, Identifica, Describe, Explica, Evalúa).]]`},
  {t:'read', h:'Vocabulario que necesitas', body:`- **Hábitat concentrado**: las casas están juntas (un pueblo). **Disperso**: las casas están repartidas por el campo.
- **Parcela**: cada trozo de terreno cultivado. Pueden ser grandes o pequeñas, regulares o irregulares.
- **Infraestructuras**: carreteras, puentes, puertos, invernaderos, urbanizaciones.
- **Espacio humanizado**: transformado por las personas. **Natural**: casi sin tocar.`},
  {t:'quiz', q:'En una foto ves casas repartidas por el campo, lejos unas de otras. El hábitat es…', opts:['Concentrado','Disperso','Urbano'], a:1, why:'Casas separadas y repartidas → hábitat disperso.'},
  {t:'quiz', q:'¿En qué paso del guion se habla de lo positivo y lo negativo del cambio?', opts:['Paso 3: describe','Paso 4: explica','Paso 5: evalúa'], a:2, why:'Evaluar = valorar lo bueno y lo malo.'}
 ]},
 {id:'g4', title:'Herramienta 2: el mapa', mins:10, steps:[
  {t:'read', h:'Qué es un mapa', body:`Un **mapa** es una representación **plana** de una parte (o del total) de la superficie terrestre. Es "una manera de mirar", una imagen del mundo.

Los mapas antiguos lo demuestran: el de Al-Idrisi (1154) está al revés; los mapas T-O medievales ponían Jerusalén en el centro; el de Juan de la Cosa (1500) fue el primero con América.`},
  {t:'read', h:'Dos tipos de mapas', body:`<div class="levels"><div class="level"><b>T</b><span><strong>Topográfico</strong>: informa sobre el **relieve** y también sobre otros aspectos (ríos, pueblos, carreteras). Sirve para **orientarse**.</span></div><div class="level"><b>T</b><span><strong>Temático</strong>: representa **un solo tema** (densidad de población, tipo de suelo, el tiempo…). Sirve para **analizar** cómo se distribuye algo.</span></div></div>

[[ok:Topográfico = "todo el terreno". Temático = "un tema".]]`},
  {t:'read', h:'Guion para comentar un mapa', body:`<div class="levels"><div class="level"><b>I</b>¿Qué tipo de mapa es y qué territorio representa?</div><div class="level"><b>II</b>¿Qué tema trata y qué información da? (fecha, fuente, leyenda)</div><div class="level"><b>III</b>¿Dónde hay más y dónde menos? Zonas parecidas y zonas de contraste.</div><div class="level"><b>IV</b>¿Por qué se distribuye así? Causas.</div><div class="level"><b>V</b>Compara con otros datos y saca conclusiones.</div></div>`},
  {t:'quiz', q:'Un mapa que muestra solo la densidad de población de Europa es…', opts:['Topográfico','Temático','De carreteras'], a:1, why:'Un solo tema (la población) → temático.'}
 ]},
 {id:'g5', title:'Coordenadas: latitud y longitud', mins:10, steps:[
  {t:'read', h:'La red imaginaria', body:`Para localizar un punto exacto en la Tierra usamos una red de líneas imaginarias:

- **Paralelos**: círculos horizontales. El paralelo 0 es el **Ecuador**. Se hacen más pequeños hacia los polos.
- **Meridianos**: semicírculos de polo a polo, todos iguales. El meridiano 0 es el de **Greenwich**.`},
  {t:'read', h:'Latitud y longitud', body:`<div class="levels"><div class="level"><b>La</b><span><strong>Latitud</strong>: distancia al **Ecuador**. Va de 0° a **90°**. Es **Norte** o **Sur**.</span></div><div class="level"><b>Lo</b><span><strong>Longitud</strong>: distancia a **Greenwich**. Va de 0° a **180°**. Es **Este** u **Oeste**.</span></div></div>

Ejemplo: Mairena del Aljarafe está en 37° 20' N, 6° 02' O. Latitud 37° Norte (está por encima del Ecuador), longitud 6° Oeste (a la izquierda de Greenwich).

[[ok:**Lat**itud → se mide con los paralelos, que van "acostados" (**la**terales). Longitud → con los meridianos, que van de arriba abajo, "**lo**ngos".]]`},
  {t:'quiz', q:'La latitud se mide desde…', opts:['El meridiano de Greenwich','El Ecuador','El Polo Norte'], a:1, why:'Latitud = distancia al Ecuador (paralelo 0), de 0° a 90° N o S.'},
  {t:'quiz', q:'Un punto con longitud 75° O está…', opts:['Al oeste de Greenwich','Al sur del Ecuador','En el Polo'], a:0, why:'La longitud O (Oeste) indica que está a la izquierda del meridiano de Greenwich.'}
 ]},
 {id:'g6', title:'La escala', mins:8, steps:[
  {t:'read', h:'Qué es la escala', body:`La **escala** dice cuántas veces se ha reducido la realidad para caber en el mapa.

- **Numérica**: 1:50.000 → 1 cm del mapa son 50.000 cm reales (500 m).
- **Gráfica**: una barrita con metros o kilómetros.

<div class="levels"><div class="level"><b>G</b><span><strong>Gran escala</strong> (hasta 1:100.000): zona pequeña, **mucho detalle**. Mapas topográficos, un pueblo, un barrio.</span></div><div class="level"><b>P</b><span><strong>Pequeña escala</strong>: zona grande (países, el mundo), **poco detalle**.</span></div></div>

[[warn:Parece al revés, pero: gran escala = número pequeño detrás del 1 = más detalle.]]`},
  {t:'quiz', q:'¿Cuál de estos mapas tiene más detalle?', opts:['1:25.000','1:500.000','1:5.000.000'], a:0, why:'Cuanto más pequeño es el número, menos se ha reducido y más detalle hay. 1:25.000 es gran escala.'},
  {t:'input', q:'En un mapa 1:50.000, dos pueblos están a 4 cm. ¿Cuántos kilómetros reales son?', a:['2','2 km'], hint:'4 · 50.000 = 200.000 cm. Pasa a metros y a kilómetros.', why:'200.000 cm = 2.000 m = 2 km.'}
 ]},
 {id:'g7', title:'Los gráficos', mins:8, steps:[
  {t:'read', h:'Tres tipos de gráfico', body:`<div class="levels"><div class="level"><b>—</b><span><strong>De líneas</strong>: muestra la **evolución en el tiempo**. Preguntas: ¿sube o baja? ¿hay altibajos? ¿por qué?</span></div><div class="level"><b>▮</b><span><strong>De barras</strong>: **compara** lugares o categorías. Preguntas: ¿cuál es el más alto y el más bajo? ¿por qué?</span></div><div class="level"><b>◔</b><span><strong>Sectorial</strong> (de "quesitos"): muestra una **distribución en porcentajes**. Preguntas: ¿cuál es la porción mayor y la menor? ¿por qué?</span></div></div>

Todo gráfico debe tener **título**, **unidad de medida**, **ejes** con sus valores y **fuente** (de dónde salen los datos).`},
  {t:'quiz', q:'Quiero mostrar cómo ha cambiado la población de Sevilla desde 1900 hasta hoy. Uso un gráfico…', opts:['De líneas','De barras','Sectorial'], a:0, why:'Evolución en el tiempo → líneas.'},
  {t:'quiz', q:'Quiero mostrar qué porcentaje de la energía viene del sol, del viento y del gas. Uso…', opts:['De líneas','Sectorial','Topográfico'], a:1, why:'Porcentajes de un total → sectorial.'}
 ]}
 ],
 task:{id:'gtask', title:'Actividad 1: comentar una fotografía aérea', due:'Sin fecha de entrega (se corrige en clase)', instr:'En el cuaderno. Elige Matalascañas o El Ejido (hacer las dos es voluntario y cuenta extra). Sigue el guion de 5 pasos.', steps:[
  {t:'read', h:'Cómo lo vamos a hacer', body:`Vas a responder las 5 preguntas del guion una a una. Escribe aquí tus ideas en frases cortas y luego pásalas al cuaderno.

Ten la foto delante (en Classroom, PDF "TEMA1. Actividad 1. Fotografías aéreas").`},
  {t:'write', h:'1. Observa', q:'¿Es un espacio natural o humanizado? ¿Rural o urbano? Escribe una frase.', hint:'Si ves edificios, carreteras o invernaderos, es humanizado. Si es sobre todo campo o cultivos, rural; si es sobre todo edificios, urbano.'},
  {t:'write', h:'2. Identifica los elementos', q:'Haz dos listas: elementos físicos (relieve, vegetación, ríos, playa, dunas…) y elementos humanos (edificios, carreteras, cultivos, invernaderos, puerto…).', hint:'Matalascañas: playa, dunas, pinar, urbanización, carreteras, paseo marítimo. El Ejido: llanura, invernaderos (plásticos blancos), pueblo, carreteras, costa.'},
  {t:'write', h:'3. Describe', q:'¿Cómo es el relieve (llano/accidentado)? ¿El hábitat es concentrado o disperso? ¿Cómo son las parcelas (grandes/pequeñas, regulares)? ¿Qué cultivos hay? ¿Cómo es la ciudad y sus infraestructuras?', hint:'Usa el vocabulario de la lección "Herramienta 1".'},
  {t:'write', h:'4. Explica la transformación', q:'¿Qué ha cambiado respecto al paisaje natural? ¿Cuáles crees que son las causas (turismo, agricultura intensiva…) y las consecuencias?', hint:'Matalascañas: el turismo de playa hizo crecer una urbanización junto a Doñana. El Ejido: la agricultura bajo plástico convirtió una llanura seca en un "mar de invernaderos".'},
  {t:'write', h:'5. Evalúa', q:'Escribe al menos un aspecto positivo (empleo, economía…) y uno negativo (impacto en la naturaleza, agua, paisaje…) del cambio.', hint:'Positivo: trabajo y riqueza para la zona. Negativo: pérdida de espacios naturales, consumo de agua, contaminación por plásticos o masificación.'},
  {t:'read', h:'Listo para el cuaderno', body:`Pulsa "Copiar mis respuestas" para llevártelas. Pásalas al cuaderno con los 5 títulos del guion. Si te animas a hacer la segunda foto, repite el proceso.`}
 ]}
};

/* ===================== BIOLOGÍA Y GEOLOGÍA ===================== */
SUBJECTS.bio = {
 id:'bio', name:'Biología y Geología', color:'bio', tema:'Unidad 1 · El ser humano',
 lessons:[
 {id:'b1', title:'Los niveles de organización', mins:10, steps:[
  {t:'read', h:'Del átomo al cuerpo entero', body:`El **ser humano** es un ser vivo **pluricelular** del **reino animal**. Está organizado en **niveles**, de lo más pequeño a lo más grande:

<div class="levels"><div class="level"><b>1</b><strong>Atómico</strong>: átomos (C, H, O, N…)</div><div class="level"><b>2</b><strong>Molecular</strong>: moléculas (agua, proteínas, ADN…)</div><div class="level"><b>3</b><strong>Celular</strong>: la célula, la unidad más pequeña con vida</div><div class="level"><b>4</b><strong>Tisular</strong>: tejidos (grupos de células parecidas)</div><div class="level"><b>5</b><strong>Órgano</strong>: corazón, estómago…</div><div class="level"><b>6</b><strong>Sistema / aparato</strong>: varios órganos juntos</div><div class="level"><b>7</b><strong>Organismo</strong>: el ser humano completo</div></div>`},
  {t:'read', h:'Abióticos y bióticos', body:`- Los dos primeros niveles (**atómico** y **molecular**) son **abióticos**: forman la materia viva pero **no tienen vida** por sí solos.
- A partir de la **célula**, los niveles son **bióticos**: ya hay vida (nutrición, relación y reproducción).

[[ok:Para el esquema de la tarea: dibuja una escalera de 7 peldaños, de abajo (átomo) a arriba (organismo), y marca con un color dónde empieza la vida (célula).]]`},
  {t:'order', h:'Ordena los niveles', q:'Toca los niveles en orden, del más pequeño al más grande.', items:['Atómico','Molecular','Celular','Tisular','Órgano','Sistema/aparato','Organismo']},
  {t:'quiz', q:'¿A partir de qué nivel hay vida?', opts:['Molecular','Celular','Tisular'], a:1, why:'La célula es la unidad más pequeña con vida. Átomos y moléculas son abióticos.'}
 ]},
 {id:'b2', title:'Átomos y moléculas inorgánicas', mins:8, steps:[
  {t:'read', h:'Nivel atómico: los bioelementos', body:`Los átomos que forman la materia viva se llaman **bioelementos**. Los más abundantes son seis:

**C** (carbono), **H** (hidrógeno), **O** (oxígeno), **N** (nitrógeno), **P** (fósforo), **S** (azufre).

[[ok:Recuérdalos como **CHONPS**.]]`},
  {t:'read', h:'Nivel molecular: biomoléculas inorgánicas', body:`Los bioelementos se unen y forman **biomoléculas**. Las **inorgánicas** están también en la materia sin vida (rocas, aire):

- **Agua (H₂O)**: la más abundante. Forma los fluidos del cuerpo y es imprescindible para los procesos biológicos.
- **Sales minerales**: sólidas (carbonato de calcio en los huesos) o disueltas como iones (cloruro de sodio, para el impulso nervioso).`},
  {t:'quiz', q:'¿Cuál es la biomolécula más abundante en el cuerpo?', opts:['Las proteínas','El agua','El calcio'], a:1, why:'El agua forma la mayor parte del cuerpo y de sus fluidos.'},
  {t:'quiz', q:'¿Cuál NO es un bioelemento de los seis principales?', opts:['Nitrógeno','Fósforo','Hierro'], a:2, why:'Los seis son C, H, O, N, P, S. El hierro está, pero en cantidades mucho más pequeñas.'}
 ]},
 {id:'b3', title:'Glúcidos y lípidos', mins:10, steps:[
  {t:'read', h:'Biomoléculas orgánicas', body:`Las biomoléculas **orgánicas** son **exclusivas de la materia viva**. Hay cuatro grandes grupos: glúcidos, lípidos, proteínas y ácidos nucleicos (más las vitaminas).`},
  {t:'read', h:'Glúcidos (hidratos de carbono)', body:`Formados por C, H y O. Son la **energía rápida**.

<div class="levels"><div class="level"><b>1</b><span><strong>Monosacáridos</strong>: los más simples, sabor dulce. Glucosa, fructosa.</span></div><div class="level"><b>2</b><span><strong>Disacáridos</strong>: dos unidos. Sacarosa (azúcar), lactosa (leche).</span></div><div class="level"><b>n</b><span><strong>Polisacáridos</strong>: miles unidos, no dulces. Glucógeno (reserva animal), almidón (reserva vegetal), celulosa (estructura de las plantas).</span></div></div>`},
  {t:'read', h:'Lípidos', body:`Son **insolubles en agua** (las grasas no se mezclan con agua). Tres funciones:

- **Energética**: grasas y triglicéridos (aceites, sebos). Energía de reserva.
- **Estructural**: fosfolípidos y colesterol forman las **membranas** de las células.
- **Reguladora**: hormonas sexuales y vitaminas liposolubles.`},
  {t:'quiz', q:'La lactosa de la leche es un…', opts:['Monosacárido','Disacárido','Polisacárido'], a:1, why:'La lactosa está formada por dos monosacáridos unidos → disacárido.'},
  {t:'quiz', q:'¿Qué lípido forma parte de las membranas de las células?', opts:['Los triglicéridos','Los fosfolípidos','El glucógeno'], a:1, why:'Fosfolípidos y colesterol tienen función estructural en las membranas. (El glucógeno es un glúcido.)'}
 ]},
 {id:'b4', title:'Proteínas, ácidos nucleicos y vitaminas', mins:10, steps:[
  {t:'read', h:'Proteínas: la maquinaria', body:`Son **cadenas de aminoácidos** (C, H, O, N). Hacen casi todo el trabajo de la célula:

<div class="tblwrap"><table class="tbl"><tr><th>Función</th><th>Ejemplo</th></tr><tr><td>Reguladora</td><td>Enzimas</td></tr><tr><td>Inmunológica (defensa)</td><td>Anticuerpos</td></tr><tr><td>Estructural</td><td>Queratina (pelo, uñas)</td></tr><tr><td>Transportadora</td><td>Hemoglobina (lleva el oxígeno)</td></tr><tr><td>Nutritiva</td><td>Ovoalbúmina (clara del huevo)</td></tr><tr><td>Contráctil (movimiento)</td><td>Actina y miosina (músculos)</td></tr></table></div>`},
  {t:'read', h:'Ácidos nucleicos y vitaminas', body:`**Ácidos nucleicos**: cadenas de nucleótidos. Son el **ADN** y el **ARN**. Función: **almacenar, transmitir y expresar la información genética** (las instrucciones de la célula).

**Vitaminas**: moléculas pequeñas que hay que tomar con la dieta.

- **Liposolubles** (se almacenan en grasa): A (visión), D (calcio), K (coagulación), E.
- **Hidrosolubles** (hay que tomarlas a diario): complejo B (sistema nervioso), C (huesos y cartílagos).`},
  {t:'quiz', q:'La hemoglobina lleva el oxígeno por la sangre. Es una proteína con función…', opts:['Estructural','Transportadora','Contráctil'], a:1, why:'Transporta el oxígeno → transportadora.'},
  {t:'quiz', q:'¿Dónde se guardan las instrucciones genéticas?', opts:['En los lípidos','En el ADN (ácido nucleico)','En las vitaminas'], a:1, why:'El ADN almacena la información genética.'}
 ]},
 {id:'b5', title:'Tipos de células', mins:8, steps:[
  {t:'read', h:'Cuatro tipos que debes distinguir', body:`<div class="tblwrap"><table class="tbl"><tr><th>Tipo</th><th>Claves</th></tr><tr><td><strong>Eucariota animal</strong></td><td>Tiene núcleo. Sin pared ni cloroplastos. Se alimenta de otros (heterótrofa). Es la nuestra.</td></tr><tr><td><strong>Eucariota vegetal</strong></td><td>Tiene núcleo, **pared de celulosa** y **cloroplastos** (hace la fotosíntesis, autótrofa).</td></tr><tr><td><strong>Procariota</strong></td><td>Sin núcleo definido (el ADN está suelto). Unicelular y simple. Bacterias.</td></tr><tr><td><strong>Virus</strong></td><td>**No son células**. Parásitos que necesitan una célula huésped para copiarse.</td></tr></table></div>

[[ok:**Eu**cariota = "núcleo **bueno**" (tiene núcleo). **Pro**cariota = "**antes** del núcleo" (no tiene).]]`},
  {t:'quiz', q:'Una célula con cloroplastos y pared de celulosa es…', opts:['Animal','Vegetal','Procariota'], a:1, why:'Cloroplastos + pared celular = célula vegetal.'},
  {t:'quiz', q:'¿Cuál NO es una célula?', opts:['Una bacteria','Un virus','Una neurona'], a:1, why:'Los virus no son células: no pueden vivir solos.'}
 ]},
 {id:'b6', title:'La célula humana por dentro', mins:12, steps:[
  {t:'read', h:'Las tres partes básicas', body:`<div class="levels"><div class="level"><b>1</b><span><strong>Membrana plasmática</strong>: la "piel" de la célula. Delimita y regula lo que entra y sale.</span></div><div class="level"><b>2</b><span><strong>Núcleo</strong>: contiene el ADN. Tiene su propia envoltura.</span></div><div class="level"><b>3</b><span><strong>Citoplasma</strong>: el interior, donde flotan los orgánulos.</span></div></div>`},
  {t:'read', h:'Los orgánulos: cada uno con su trabajo', body:`<div class="tblwrap"><table class="tbl"><tr><th>Orgánulo</th><th>Qué hace</th></tr><tr><td>Mitocondria</td><td>Respiración celular: produce **energía**</td></tr><tr><td>Ribosomas</td><td>Fabrican **proteínas**</td></tr><tr><td>Retículo endoplasmático rugoso</td><td>Sacos con ribosomas: fabrican proteínas</td></tr><tr><td>Retículo endoplasmático liso</td><td>Fabrica **lípidos**</td></tr><tr><td>Aparato de Golgi</td><td>Empaqueta y envía sustancias fuera (secreción)</td></tr><tr><td>Lisosomas</td><td>**Digestión** celular (rompen lo que sobra)</td></tr><tr><td>Vacuola</td><td>Almacén</td></tr><tr><td>Centrosoma</td><td>Centriolos: cilios y huso mitótico (división)</td></tr></table></div>

[[ok:Mitocondria = "la central eléctrica". Golgi = "la oficina de correos". Lisosoma = "el estómago".]]`},
  {t:'quiz', q:'¿Qué orgánulo produce la energía de la célula?', opts:['El ribosoma','La mitocondria','El lisosoma'], a:1, why:'La mitocondria hace la respiración celular y produce energía.'},
  {t:'quiz', q:'El retículo endoplasmático rugoso es "rugoso" porque tiene pegados…', opts:['Lisosomas','Ribosomas','Centriolos'], a:1, why:'Los ribosomas pegados le dan aspecto rugoso, y por eso fabrica proteínas.'}
 ]},
 {id:'b7', title:'Los tejidos', mins:12, steps:[
  {t:'read', h:'Qué es un tejido', body:`Un **tejido** es un conjunto de **células parecidas** que trabajan juntas para una función. Hay cuatro grandes grupos: epitelial, conectivo, muscular y nervioso.`},
  {t:'read', h:'Tejido epitelial y tejido nervioso', body:`**Epitelial**: células muy juntas, sin espacios.
- De **revestimiento**: cubre superficies. La epidermis (piel) y las mucosas.
- **Glandular**: fabrica sustancias. Glándulas exocrinas (al exterior, como el sudor) y endocrinas (hormonas).

**Nervioso**: transmite el impulso nervioso. Neuronas (células ramificadas) y neuroglía (células que las protegen y alimentan).`},
  {t:'read', h:'Tejido conectivo (5 tipos)', body:`Une, sostiene y transporta. Sus células están rodeadas de una **matriz**.

<div class="tblwrap"><table class="tbl"><tr><th>Tejido</th><th>Matriz</th><th>Dónde</th></tr><tr><td>Conjuntivo</td><td>Gel con fibras (fibrocitos)</td><td>Dermis, tendones</td></tr><tr><td>Adiposo</td><td>Células llenas de grasa (adipocitos)</td><td>Reserva y aislante</td></tr><tr><td>Cartilaginoso</td><td>Sólida y elástica (condrocitos)</td><td>Nariz, orejas, articulaciones</td></tr><tr><td>Óseo</td><td>Mineralizada con calcio (osteocitos)</td><td>Huesos (esponjoso y compacto)</td></tr><tr><td>Sanguíneo</td><td>Líquida (plasma)</td><td>Sangre: eritrocitos, leucocitos, plaquetas</td></tr></table></div>`},
  {t:'read', h:'Tejido muscular (3 tipos)', body:`Células que se **contraen** (miocitos).

- **Estriado esquelético**: rápido y **voluntario**. Los músculos que mueves tú.
- **Estriado cardíaco**: rápido e **involuntario**. Solo en el corazón.
- **Liso**: lento e **involuntario**. Vísceras (estómago, intestino, vasos).

[[ok:"Estriado" = con rayas al microscopio. El único estriado que no controlas es el del corazón.]]`},
  {t:'quiz', q:'El tejido que forma la sangre es un tejido…', opts:['Epitelial','Conectivo','Muscular'], a:1, why:'El tejido sanguíneo es conectivo con matriz líquida (plasma).'},
  {t:'quiz', q:'El músculo del estómago es…', opts:['Estriado esquelético','Estriado cardíaco','Liso'], a:2, why:'Las vísceras tienen músculo liso: lento e involuntario.'}
 ]},
 {id:'b8', title:'Órgano, sistema, aparato, organismo', mins:8, steps:[
  {t:'read', h:'Los niveles superiores', body:`- **Órgano**: varios tejidos juntos para una función. El **corazón** tiene tejido epitelial (tapiza), nervioso (coordina), muscular cardíaco (impulsa) y conectivo (une e irriga).
- **Sistema**: órganos con tejidos **parecidos**. Sistema esquelético, sistema muscular.
- **Aparato**: órganos con tejidos **diferentes** que colaboran. Aparato locomotor = sistema esquelético + sistema muscular.
- **Organismo**: el ser humano completo.

[[ok:Sistema = "del mismo tipo". Aparato = "de tipos distintos, en equipo".]]`},
  {t:'quiz', q:'El aparato locomotor está formado por…', opts:['Solo huesos','Sistema esquelético + sistema muscular','Solo músculos'], a:1, why:'Un aparato une sistemas distintos: huesos y músculos.'},
  {t:'quiz', q:'¿Cuál es el orden correcto?', opts:['Célula → órgano → tejido → sistema','Célula → tejido → órgano → sistema','Tejido → célula → órgano → sistema'], a:1, why:'Células forman tejidos, tejidos forman órganos, órganos forman sistemas y aparatos.'}
 ]}
 ],
 task:{id:'btask', title:'Tarea: esquema de los niveles de organización', due:'Para la próxima clase', instr:'Tener los apuntes de clase y hacer un diagrama, esquema o dibujo de los niveles de organización de la materia viva.', steps:[
  {t:'read', h:'Plan para el esquema', body:`Un esquema que funciona bien: una **escalera** o una **flecha** de abajo arriba con 7 escalones. En cada escalón, el nombre del nivel y **un ejemplo dibujado**.

<div class="levels"><div class="level"><b>7</b>Organismo — dibuja una persona</div><div class="level"><b>6</b>Sistema / aparato — un esqueleto o el aparato digestivo</div><div class="level"><b>5</b>Órgano — un corazón</div><div class="level"><b>4</b>Tejido — un trozo de músculo o de piel</div><div class="level"><b>3</b>Célula — una célula con su núcleo</div><div class="level"><b>2</b>Molécula — una molécula de agua (H₂O)</div><div class="level"><b>1</b>Átomo — un átomo (bolita con electrones)</div></div>

Marca con una raya o un color entre el 2 y el 3: "aquí empieza la vida" (abióticos abajo, bióticos arriba).`},
  {t:'order', h:'Comprueba que te lo sabes', q:'Toca los niveles en orden, del más pequeño al más grande.', items:['Atómico','Molecular','Celular','Tisular','Órgano','Sistema/aparato','Organismo']},
  {t:'read', h:'Consejo', body:`Hazlo primero a lápiz, sin colores. Cuando estén los 7 nombres en orden, añade los dibujos y los colores. Una idea por escalón; no hace falta escribir mucho.`}
 ]}
};
