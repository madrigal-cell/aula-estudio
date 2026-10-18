/* Física y Química retirada de la web (decisión de Madri, 18/10/2026). Este archivo conserva solo Tecnología. */

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
