/* Física y Química retirada de la web (decisión de Madri, 18/10/2026). Este archivo conserva solo Tecnología y, al final, los 5 exámenes de repaso de Geografía (se cargan aquí porque este script va después de geo-bio.js). */

/* ===================== TECNOLOGÍA ===================== */
SUBJECTS.tec = {
 id:'tec', name:'Tecnología', color:'tec', tema:'Preguntas de la semana',
 lessons:[
 {id:'t1', title:'La central termoeléctrica fósil', mins:8, steps:[
  {t:'read', h:'Cómo funciona', body:`Una central termoeléctrica quema un **combustible fósil** (carbón, gas o petróleo) para producir electricidad. La cadena es siempre la misma:

<div class="levels"><div class="level"><b>1</b><span><strong>Caldera</strong>: se quema el combustible y calienta agua hasta convertirla en **vapor** a mucha presión.</span></div><div class="level"><b>2</b><span><strong>Turbina</strong>: el vapor empuja las palas y las hace girar.</span></div><div class="level"><b>3</b><span><strong>Generador</strong> (alternador): el giro de la turbina mueve un imán dentro de una bobina y produce **electricidad**.</span></div><div class="level"><b>4</b><span><strong>Condensador y torre de refrigeración</strong>: el vapor se enfría, vuelve a ser agua y empieza otra vez.</span></div><div class="level"><b>5</b><span><strong>Transformador</strong>: sube la tensión para enviar la electricidad por la red.</span></div></div>

[[ok:Calor → vapor → giro → electricidad.]]`},
  {t:'read', h:'Las respuestas a las preguntas', body:`- **¿Qué fenómeno físico hace funcionar el generador?** La **inducción electromagnética**: al mover un imán cerca de un conductor (o al revés) aparece una corriente eléctrica.
- **Principal ventaja**: producen mucha electricidad de forma **continua y controlable**, sin depender del viento o del sol.
- **Principal inconveniente**: al quemar combustible emiten **CO₂** y otros gases que contaminan y calientan el planeta; además los combustibles fósiles se agotan.
- **¿Qué componente se relaciona con la subida de la temperatura global?** El **dióxido de carbono (CO₂)**, un gas de efecto invernadero.`},
  {t:'quiz', q:'¿Qué hace girar la turbina en una central térmica?', opts:['El agua de un río','El vapor a presión','El viento'], a:1, why:'El agua calentada en la caldera se convierte en vapor a presión, que empuja la turbina.'},
  {t:'quiz', q:'El generador produce electricidad gracias a…', opts:['La combustión','La inducción electromagnética','La gravedad'], a:1, why:'Un imán que gira dentro de bobinas genera corriente: inducción electromagnética.'}
 ]},
 {id:'t2', title:'Cambio climático: dos documentales', mins:10, steps:[
  {t:'read', h:'Dos conceptos que no son lo mismo', body:`- **Efecto invernadero**: fenómeno **natural**. Algunos gases de la atmósfera (CO₂, vapor de agua, metano) retienen parte del calor del Sol. Sin él, la Tierra sería un planeta helado.
- **Calentamiento global**: la **subida de la temperatura media** del planeta porque las personas hemos añadido muchos más gases de efecto invernadero (sobre todo CO₂ al quemar combustibles fósiles).

[[ok:El efecto invernadero es el mecanismo. El calentamiento global es el problema de tener el mecanismo "demasiado fuerte".]]`},
  {t:'read', h:'"Una verdad incómoda" (Al Gore, 2006)', body:`- **Mensaje principal**: el calentamiento global es real, lo causamos las personas y hay que actuar ya.
- **¿Cómo se conocen las temperaturas y el CO₂ de hace miles de años?** Con **testigos de hielo**: cilindros de hielo perforados en la Antártida y Groenlandia. Cada capa de hielo guarda burbujas de aire antiguo; midiendo su CO₂ y su composición se reconstruye el clima del pasado.
- **Argumento contra "es un ciclo natural"**: las gráficas de CO₂ y temperatura de los últimos 650.000 años siempre subieron y bajaron juntas, pero el CO₂ actual está **muy por encima** de cualquier máximo anterior y ha subido en muy poco tiempo, coincidiendo con la industrialización.
- **Eventos naturales que usa como ejemplo**: el **retroceso de los glaciares** (el Kilimanjaro, los Alpes) y huracanes más fuertes como el **Katrina**.`},
  {t:'read', h:'"El gran fraude del calentamiento global" (2007)', body:`- **Argumento principal**: que el calentamiento **no** lo causa el CO₂ humano, sino ciclos naturales como la **actividad del Sol**, y que el CO₂ sube **después** de la temperatura, no antes.
- **Mensaje que pretende transmitir**: que el consenso científico es exagerado, que hay intereses políticos y económicos detrás, y que las medidas contra el CO₂ perjudican a los países pobres.
- **¿Cómo se llama a quienes cuestionan el calentamiento?** **Negacionistas** (o "escépticos") del cambio climático.
- **Tim Ball**: geógrafo canadiense que aparece en el documental como experto en clima. Se presentó como profesor de climatología, pero su especialidad era la geografía histórica; fue uno de los negacionistas más conocidos y estuvo relacionado con grupos financiados por la industria del petróleo. Murió en 2022.

[[warn:La gran mayoría de los científicos del clima (más del 97 %) coincide en que el calentamiento actual lo causan las personas. El documental de 2007 fue criticado por usar datos manipulados y citas fuera de contexto.]]`},
  {t:'quiz', q:'¿Cómo se sabe cuánto CO₂ había en la atmósfera hace 100.000 años?', opts:['Con termómetros antiguos','Con burbujas de aire atrapadas en el hielo (testigos de hielo)','Con fotos de satélite'], a:1, why:'Los testigos de hielo guardan aire antiguo en burbujas capa a capa.'},
  {t:'quiz', q:'¿Qué diferencia hay entre efecto invernadero y calentamiento global?', opts:['Son lo mismo','El efecto invernadero es natural; el calentamiento global es la subida de temperatura por el exceso de gases','El calentamiento global es natural; el efecto invernadero lo causan las personas'], a:1, why:'El efecto invernadero natural es necesario; el problema es el exceso de gases que provocamos.'}
 ]}
 ]
};

/* ===================== GEOGRAFÍA: 5 EXÁMENES DE REPASO ===================== */
(function(){
 if(typeof SUBJECTS==='undefined'||!SUBJECTS.geo) return;
 const Q=(q,opts,a,why)=>({t:'quiz',q:q,opts:opts,a:a,why:why});
 const I=(q,a,hint,why)=>({t:'input',q:q,a:a,hint:hint,why:why});
 const O=(h,q,items)=>({t:'order',h:h,q:q,items:items});
 const intro=(n)=>({t:'read', h:`Examen ${n} de 5: cómo se hace`, body:`Este examen tiene **15 preguntas** de todo el Tema 1.

- Hazlo **sin mirar** los apuntes ni las lecciones.
- Coge un papel y **apunta cuántas aciertas**.
- Si fallas una, lee el porqué y **sigue**. No pasa nada.

[[ok:Un examen sirve para saber qué te falta. Cada fallo es una pista de qué repasar.]]`});
 const fin=(n)=>({t:'read', h:`Resultado del examen ${n}`, body:`Cuenta tus aciertos sobre 15.

- **13 a 15**: lo llevas muy bien. Pasa al siguiente examen.
- **10 a 12**: bien, pero repasa las preguntas que fallaste.
- **Menos de 10**: vuelve a las lecciones del tema que más fallaste y repite este examen otro día.

<div class="tblwrap"><table class="tbl"><tr><th>Si fallaste…</th><th>Repasa</th></tr><tr><td>Ramas, física y humana</td><td>¿Qué es la Geografía?</td></tr><tr><td>Localización, causas, consecuencias</td><td>¿Para qué sirve?</td></tr><tr><td>Foto aérea, guion, vocabulario</td><td>Herramienta 1: la fotografía aérea</td></tr><tr><td>Mapas topográficos y temáticos</td><td>Herramienta 2: el mapa</td></tr><tr><td>Latitud, longitud, meridianos</td><td>Coordenadas</td></tr><tr><td>Escala y cálculos</td><td>La escala</td></tr><tr><td>Tipos de gráfico</td><td>Los gráficos</td></tr></table></div>

[[idea:Haz un examen cada día. Verás cómo suben tus aciertos.]]`});
 const mk=(n,steps)=>({id:'gx'+n, title:`Examen ${n} de 5 · Geografía Tema 1`, mins:12, steps:[intro(n)].concat(steps,[fin(n)])});
 const ex=[];
 ex.push(mk(1,[
  Q(`La Geografía estudia…`,[`El espacio terrestre y cómo lo usamos las personas`,`Solo los mapas antiguos`,`Únicamente las montañas y los ríos`],0,`La Geografía estudia el espacio terrestre: cómo es la Tierra y cómo la usamos las personas.`),
  Q(`Estudiar lo que hace especial a una sola región es…`,[`Geografía general`,`Geografía regional`,`Geografía física`],1,`La geografía regional estudia lo que hace especial a cada región. La general busca reglas para todo el planeta.`),
  Q(`¿Cuál de estas NO es una de las cuatro cosas que estudia la Geografía de un suceso?`,[`Localización`,`Previsiones`,`Opiniones personales`],2,`Son cuatro: localización, causas, consecuencias y previsiones. Las opiniones personales no están.`),
  Q(`Preguntarse "¿qué puede pasar después con este fenómeno?" es hablar de…`,[`Previsiones`,`Localización`,`Causas`],0,`Lo que puede pasar en el futuro son las previsiones.`),
  Q(`Una foto aérea corregida de sus distorsiones se llama…`,[`Mapa temático`,`Ortofoto`,`Gráfico sectorial`],1,`Las fotos aéreas corregidas se llaman ortofotos.`),
  O(`Ordena el guion de la foto aérea`,`Toca los cinco pasos en el orden correcto.`,[`Observa`,`Identifica`,`Describe`,`Explica`,`Evalúa`]),
  Q(`Un mapa que muestra el relieve y sirve para orientarse es…`,[`Temático`,`Topográfico`,`Sectorial`],1,`El mapa topográfico informa del relieve y sirve para orientarse. El temático trata un solo tema.`),
  Q(`El mapa de Juan de la Cosa (1500) destaca porque…`,[`Fue el primero en incluir América`,`Ponía Jerusalén en el centro`,`Estaba dibujado al revés`],0,`El de Juan de la Cosa (1500) fue el primero con América. Los T-O ponían Jerusalén en el centro y el de Al-Idrisi está al revés.`),
  Q(`El paralelo 0 se llama…`,[`Greenwich`,`Ecuador`,`Trópico`],1,`El paralelo 0 es el Ecuador. Greenwich es el meridiano 0.`),
  Q(`La longitud va de 0° a…`,[`90°`,`180°`,`360°`],1,`La longitud va de 0° a 180°, Este u Oeste. La latitud llega a 90°.`),
  I(`Un mapa está a escala 1:25.000. Dos puntos están a 6 cm en el mapa. ¿Cuántos kilómetros reales son? Escribe solo el número.`,[`1,5`,`1,5km`],`6 · 25.000 = 150.000 cm. Pasa a metros y luego a kilómetros.`,`150.000 cm = 1.500 m = 1,5 km.`),
  Q(`Un mapa a escala 1:2.000.000 es de…`,[`Gran escala: mucho detalle`,`Pequeña escala: poco detalle`,`Gran escala: poco detalle`],1,`Un número grande detrás del 1 significa pequeña escala: zona grande y poco detalle.`),
  Q(`Para comparar la población de cinco ciudades en un mismo año uso un gráfico…`,[`De barras`,`De líneas`,`Sectorial`],0,`Comparar lugares o categorías es trabajo de las barras. Las líneas son para la evolución en el tiempo.`),
  Q(`¿Cuál de estos elementos debe tener todo gráfico?`,[`Una fotografía`,`La fuente de los datos`,`Un meridiano`],1,`Todo gráfico necesita título, unidad de medida, ejes con valores y fuente.`),
  Q(`Hábitat concentrado significa que…`,[`Las casas están repartidas por el campo`,`Las casas están juntas, como en un pueblo`,`No hay casas`],1,`Concentrado: casas juntas. Disperso: casas repartidas por el campo.`)
 ]));
 ex.push(mk(2,[
  Q(`La hidrografía estudia…`,[`Las aguas`,`Las ciudades`,`El clima`],0,`Hidrografía = las aguas (ríos, mares, lagos). Forma parte de la Geografía física.`),
  Q(`La demografía pertenece a la…`,[`Geografía física`,`Geografía humana`,`Geografía regional`],1,`La demografía estudia la población: es Geografía humana.`),
  Q(`En Geografía, "¿dónde ocurre?" se llama…`,[`Causas`,`Consecuencias`,`Localización`],2,`Dónde pasa algo es la localización.`),
  Q(`Una de las cosas que nos ayuda a hacer la Geografía es…`,[`Valorar el patrimonio natural y cultural del mundo`,`Memorizar todas las capitales`,`Evitar otras culturas`],0,`La Geografía nos ayuda a valorar el patrimonio natural y cultural, y a tener actitud abierta ante culturas diferentes.`),
  Q(`En una foto en falso color, la vegetación sale…`,[`Azul`,`Roja`,`Negra`],1,`En falso color la vegetación aparece roja.`),
  Q(`Las carreteras, los puentes y los invernaderos son…`,[`Elementos físicos`,`Infraestructuras (elementos humanos)`,`Parcelas`],1,`Son infraestructuras: obras hechas por las personas.`),
  Q(`El mapa de Al-Idrisi (1154) tiene de curioso que…`,[`Está al revés`,`Es el primero con América`,`Solo tiene mares`],0,`El mapa de Al-Idrisi está orientado al revés respecto a los nuestros.`),
  Q(`Un mapa que representa solo el tipo de suelo de un país es…`,[`Topográfico`,`Temático`,`Una ortofoto`],1,`Un solo tema (el suelo) → temático.`),
  O(`Ordena el guion para comentar un mapa`,`Toca las cinco preguntas en el orden correcto.`,[`Qué tipo de mapa es y qué territorio representa`,`Qué tema trata y qué información da`,`Dónde hay más y dónde menos`,`Por qué se distribuye así`,`Compara y saca conclusiones`]),
  Q(`El meridiano 0 pasa por…`,[`El Ecuador`,`Greenwich`,`El Polo Sur`],1,`El meridiano 0 es el de Greenwich.`),
  Q(`La latitud va de 0° a…`,[`90°`,`180°`,`360°`],0,`La latitud va de 0° (Ecuador) a 90° (polos), Norte o Sur.`),
  I(`Un mapa está a escala 1:10.000. Dos puntos están a 5 cm. ¿Cuántos metros reales son? Escribe solo el número.`,[`500`,`500m`],`5 · 10.000 = 50.000 cm. Divide entre 100 para pasar a metros.`,`50.000 cm = 500 m.`),
  Q(`La escala 1:50.000 significa que 1 cm del mapa son…`,[`50 m reales`,`500 m reales`,`5.000 m reales`],1,`1 cm · 50.000 = 50.000 cm = 500 m.`),
  Q(`Para mostrar cómo cambia la temperatura mes a mes uso un gráfico…`,[`De líneas`,`Sectorial`,`Topográfico`],0,`Evolución en el tiempo → líneas.`),
  Q(`Un gráfico sectorial ("quesitos") muestra…`,[`La evolución en el tiempo`,`Una distribución en porcentajes`,`El relieve de un lugar`],1,`El sectorial reparte un total en porcentajes.`)
 ]));
 ex.push(mk(3,[
  Q(`La biogeografía estudia…`,[`Los seres vivos`,`El relieve`,`La población`],0,`Biogeografía = seres vivos (plantas y animales) en el espacio.`),
  Q(`La Geografía general busca…`,[`Reglas generales que valen para todo el planeta`,`Solo lo especial de una región`,`Dibujar mapas`],0,`La general busca reglas generales. La regional estudia cada región.`),
  Q(`La Geografía es "analítica" porque…`,[`Solo dice cómo es un lugar`,`Explica por qué un lugar es como es`,`Mide ángulos`],1,`Descriptiva = cómo es. Analítica = por qué es así.`),
  Q(`Un geógrafo estudia una sequía. Preguntarse "¿por qué ocurre?" es analizar…`,[`La localización`,`Las causas`,`Las previsiones`],1,`El porqué son las causas.`),
  Q(`Las fotos aéreas se pueden tomar desde…`,[`Avión, dron o satélite`,`Solo desde un avión`,`Solo desde el suelo`],0,`Se toman desde arriba: avión, dron o satélite.`),
  Q(`En el guion de la foto, ¿qué haces en el paso "Identifica"?`,[`Valorar lo positivo y lo negativo`,`Reconocer los elementos físicos y humanos`,`Explicar las causas del cambio`],1,`Identificar es reconocer los elementos: físicos (relieve, ríos…) y humanos (pueblos, carreteras…).`),
  I(`Se compararon fotos de El Ejido de 1956, 1977 y… ¿qué año? Escribe solo el número.`,[`2010`],`Es una década después de 2000.`,`Las fotos eran de 1956, 1977 y 2010.`),
  Q(`Un mapa es una representación…`,[`En relieve`,`Plana de la superficie terrestre`,`Solo de países`],1,`Un mapa es una representación plana de una parte o del total de la superficie terrestre.`),
  Q(`Los mapas T-O medievales ponían en el centro…`,[`Jerusalén`,`Roma`,`Sevilla`],0,`Los mapas T-O ponían Jerusalén en el centro.`),
  Q(`Los meridianos son…`,[`Círculos horizontales`,`Semicírculos de polo a polo`,`Líneas que miden el relieve`],1,`Los meridianos van de polo a polo. Los círculos horizontales son los paralelos.`),
  Q(`Mairena del Aljarafe está en 37° 20' N. Ese dato es su…`,[`Longitud`,`Latitud`,`Escala`],1,`Norte o Sur indica la latitud. Este u Oeste indica la longitud.`),
  I(`Un mapa está a escala 1:100.000. Dos puntos están a 3 cm. ¿Cuántos kilómetros reales son? Escribe solo el número.`,[`3`,`3km`],`3 · 100.000 = 300.000 cm. Pasa a metros y a kilómetros.`,`300.000 cm = 3.000 m = 3 km.`),
  Q(`¿Qué escala da MÁS detalle?`,[`1:10.000`,`1:1.000.000`,`1:10.000.000`],0,`El número más pequeño detrás del 1 es gran escala: más detalle.`),
  O(`Ordena las cuatro preguntas`,`Sobre un suceso geográfico, ordena las preguntas como en la lección.`,[`Localización`,`Causas`,`Consecuencias`,`Previsiones`]),
  Q(`En un gráfico de barras me fijo sobre todo en…`,[`Cuál es la barra más alta y cuál la más baja`,`Cómo cambia con los años`,`Qué meridiano pasa por él`],0,`Las barras comparan: miro cuál es el más alto y el más bajo y por qué.`)
 ]));
 ex.push(mk(4,[
  Q(`La geomorfología estudia…`,[`El relieve`,`El clima`,`Las ciudades`],0,`Geomorfología = relieve (montañas, llanuras, valles).`),
  Q(`¿Cuál de estas es Geografía humana?`,[`La climatología`,`La geografía urbana`,`La hidrografía`],1,`La geografía urbana estudia las ciudades, es humana. Clima y aguas son físicas.`),
  Q(`Preguntarse "¿en qué provincia ocurrió?" es hablar de…`,[`Causas`,`Localización`,`Previsiones`],1,`Dónde ocurre = localización.`),
  Q(`Aprender Geografía nos da una actitud…`,[`Abierta ante culturas diferentes`,`Cerrada ante lo distinto`,`Indiferente ante el entorno`],0,`Nos ayuda a tener una actitud abierta ante culturas diferentes.`),
  Q(`Un espacio "humanizado" es…`,[`Transformado por las personas`,`Casi sin tocar`,`Siempre una ciudad`],0,`Humanizado = transformado por las personas. Natural = casi sin tocar.`),
  Q(`Cada trozo de terreno cultivado se llama…`,[`Parcela`,`Meridiano`,`Ortofoto`],0,`Cada trozo de terreno cultivado es una parcela.`),
  Q(`Un mapa topográfico sirve sobre todo para…`,[`Orientarse`,`Analizar un solo tema`,`Comparar porcentajes`],0,`El topográfico sirve para orientarse. El temático, para analizar un tema.`),
  Q(`Un mapa del tiempo (lluvias y temperaturas) es…`,[`Topográfico`,`Temático`,`Una ortofoto`],1,`El tiempo es un solo tema → temático.`),
  I(`¿Cómo se llama el meridiano 0? Escribe su nombre.`,[`Greenwich`],`Empieza por G.`,`El meridiano 0 es el de Greenwich.`),
  Q(`Un punto a 40° S está…`,[`Al sur del Ecuador`,`Al norte del Ecuador`,`Sobre Greenwich`],0,`S es Sur: está por debajo del Ecuador.`),
  I(`Un mapa está a escala 1:20.000. Dos puntos están a 4 cm. ¿Cuántos metros reales son? Escribe solo el número.`,[`800`,`800m`],`4 · 20.000 = 80.000 cm. Divide entre 100.`,`80.000 cm = 800 m.`),
  Q(`La escala gráfica es…`,[`Una fracción como 1:50.000`,`Una barrita con metros o kilómetros`,`Un tipo de gráfico de barras`],1,`La gráfica es una barrita con distancias. La numérica es 1:50.000.`),
  Q(`Para mostrar el porcentaje que gasta una familia en comida, ropa y ocio uso un gráfico…`,[`Sectorial`,`De líneas`,`Topográfico`],0,`Un reparto en porcentajes es sectorial.`),
  Q(`En un gráfico de líneas, si la línea sube significa que…`,[`El valor aumenta con el tiempo`,`El valor es el más bajo`,`Hay más porcentaje`],0,`Subir = aumentar a lo largo del tiempo.`),
  Q(`Los mapas antiguos demuestran que un mapa es…`,[`Siempre exacto`,`Una manera de mirar el mundo`,`Un dibujo sin intención`],1,`Cada época y cultura dibujaba el mundo a su manera: un mapa es una manera de mirar.`)
 ]));
 ex.push(mk(5,[
  Q(`Climatología, geomorfología, biogeografía e hidrografía son partes de la Geografía…`,[`Humana`,`Física`,`Regional`],1,`Son partes de la Geografía física: la naturaleza.`),
  Q(`La geografía rural estudia…`,[`El campo`,`Las ciudades`,`El clima`],0,`Rural = el campo. Urbana = las ciudades.`),
  Q(`Las cuatro cuestiones de un suceso son localización, causas, consecuencias y…`,[`Previsiones`,`Opiniones`,`Medidas`],0,`La cuarta son las previsiones.`),
  Q(`La Geografía es "descriptiva" porque…`,[`Dice cómo es un lugar`,`Explica sus causas`,`Predice el futuro`],0,`Descriptiva = dice cómo es un lugar.`),
  Q(`En el guion de la foto, el paso "Explica" consiste en…`,[`Decir si es rural o urbano`,`Explicar causas y consecuencias de la transformación`,`Valorar lo positivo y lo negativo`],1,`Explicar es dar las causas y consecuencias del cambio. Valorar lo bueno y lo malo es "Evalúa".`),
  Q(`Comparar fotos de distintos años sirve para ver…`,[`Cómo cambia un territorio`,`Cuántos meridianos hay`,`La escala del mapa`],0,`Como en El Ejido, las fotos de años distintos muestran los cambios del territorio.`),
  Q(`En el guion del mapa, la pregunta "¿dónde hay más y dónde menos?" trata de…`,[`La distribución del tema`,`El año del mapa`,`El autor del mapa`],0,`Pregunta por cómo se reparte el tema: zonas con más y con menos.`),
  Q(`¿Cuál de estos es un mapa temático?`,[`Densidad de población de Europa`,`Mapa con relieve, ríos y carreteras`,`Foto de satélite`],0,`Un solo tema (la población) → temático.`),
  Q(`Los paralelos se hacen más pequeños hacia…`,[`El Ecuador`,`Los polos`,`Greenwich`],1,`El Ecuador es el más grande. Hacia los polos se van haciendo pequeños.`),
  I(`La longitud llega como máximo a cuántos grados. Escribe el número.`,[`180`],`Es el doble de 90.`,`La longitud va de 0° a 180°.`),
  I(`Dos pueblos están a 750 m reales. El mapa está a escala 1:25.000. ¿A cuántos centímetros estarán en el mapa? Escribe solo el número.`,[`3`,`3cm`],`750 m = 75.000 cm. Divide entre 25.000.`,`75.000 : 25.000 = 3 cm.`),
  Q(`Un mapa de todo el mundo es de…`,[`Gran escala`,`Pequeña escala`,`Escala gráfica`],1,`Zona enorme y poco detalle → pequeña escala.`),
  O(`Ordena por detalle`,`Ordena estas escalas de MÁS detalle a MENOS detalle.`,[`1:5.000`,`1:50.000`,`1:500.000`,`1:5.000.000`]),
  Q(`Para comparar la altura de cinco montañas uso un gráfico…`,[`De barras`,`De líneas`,`Sectorial`],0,`Comparar categorías → barras.`),
  Q(`¿Para qué sirve la fuente en un gráfico?`,[`Para saber de dónde salen los datos`,`Para pintarlo de colores`,`Para medir el relieve`],0,`La fuente dice de dónde proceden los datos.`)
 ]));
 ex.forEach(function(e){SUBJECTS.geo.lessons.push(e);});
})();
