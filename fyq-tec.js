/* ===================== FÍSICA Y QUÍMICA ===================== */
SUBJECTS.fyq = {
 id:'fyq', name:'Física y Química', color:'fyq', tema:'UD1 · La actividad científica',
 lessons:[
 {id:'f1', title:'¿Qué es la Ciencia?', mins:6, steps:[
  {t:'read', h:'Una definición', body:`La **Ciencia** es un conjunto de conocimientos obtenidos mediante **observación**, **experimentación** y **razonamiento**.

Los científicos quieren comprender cómo funciona el universo y descubrir las **leyes de la naturaleza**.`},
  {t:'read', h:'Cuatro ciencias, cuatro preguntas', body:`<div class="tblwrap"><table class="tbl"><tr><th>Ciencia</th><th>Qué estudia</th><th>Ejemplo</th></tr><tr><td><strong>Física</strong></td><td>Cambios que **no** convierten la materia en otra cosa</td><td>Un coche que frena, un hielo que se derrite</td></tr><tr><td><strong>Química</strong></td><td>Cambios que crean **sustancias nuevas**</td><td>Freír un huevo, quemar madera</td></tr><tr><td><strong>Biología</strong></td><td>Los seres vivos</td><td>Cómo respira un pez</td></tr><tr><td><strong>Geología</strong></td><td>La Tierra por dentro y su historia</td><td>Un volcán, un terremoto</td></tr></table></div>

[[ok:Pregunta clave: ¿después del cambio sigue siendo la **misma sustancia**? Sí → Física. No → Química.]]`},
  {t:'quiz', q:'El deshielo de una pista de nieve lo estudia la…', opts:['Física','Química','Geología'], a:0, why:'El hielo se convierte en agua: sigue siendo agua. No hay sustancia nueva → Física.'},
  {t:'quiz', q:'La explosión de fuegos artificiales la estudia la…', opts:['Física','Química','Biología'], a:1, why:'Al arder se forman gases y sustancias nuevas → Química.'},
  {t:'quiz', q:'¿Cuál de estas cosas es ciencia?', opts:['El horóscopo','El estudio del genoma humano','El tarot'], a:1, why:'El genoma se estudia con observación y experimentos. Horóscopo y tarot no se pueden comprobar: son pseudociencia.'}
 ]},
 {id:'f2', title:'El método científico', mins:8, steps:[
  {t:'read', h:'Cinco pasos en orden', body:`<div class="levels"><div class="level"><b>1</b><span><strong>Observación</strong>: miro el mundo y me hago una pregunta.</span></div><div class="level"><b>2</b><span><strong>Hipótesis</strong>: propongo una explicación posible.</span></div><div class="level"><b>3</b><span><strong>Experimentación</strong>: diseño un experimento para comprobar la hipótesis.</span></div><div class="level"><b>4</b><span><strong>Conclusión</strong>: si los resultados encajan, la hipótesis es correcta. Si no, la cambio y vuelvo a empezar.</span></div><div class="level"><b>5</b><span><strong>Comunicación</strong>: publico los resultados para que otros científicos los comprueben.</span></div></div>

[[ok:Orden con iniciales: **O-H-E-C-C**.]]`},
  {t:'read', h:'Hipótesis, ley y teoría', body:`- **Hipótesis**: una explicación **todavía sin comprobar**.
- **Ley**: una hipótesis **confirmada** por los experimentos. Describe con detalle un fenómeno.
- **Teoría**: un **conjunto de leyes** relacionadas entre sí.

Newton dijo: "Si he visto más lejos es porque estoy sobre hombros de gigantes": la ciencia se construye sobre lo que otros descubrieron antes (por eso el paso 5, comunicar, es tan importante).`},
  {t:'quiz', q:'¿Qué diferencia hay entre una hipótesis y una ley?', opts:['Ninguna, son sinónimos','La ley ya está confirmada por experimentos; la hipótesis no','La hipótesis es más importante'], a:1, why:'Una ley es una hipótesis que los experimentos han confirmado.'},
  {t:'order', h:'Ordena el método', q:'Toca los pasos en el orden correcto.', items:['Observación','Hipótesis','Experimentación','Conclusión','Comunicación']}
 ]},
 {id:'f3', title:'Magnitudes y el Sistema Internacional', mins:12, steps:[
  {t:'read', h:'Tres palabras', body:`- **Magnitud**: cualquier propiedad que se puede **medir**. La longitud, la masa, el tiempo. (El color, el sabor o la belleza **no** son magnitudes: no se miden con números.)
- **Unidad**: el patrón con el que comparo. El metro, el kilogramo.
- **Medida**: el resultado: un número con su unidad. 3,5 m.

[[ok:Si puedes contestar "¿cuánto?" con un número y una unidad, es una magnitud.]]`},
  {t:'read', h:'Las 7 magnitudes fundamentales del SI', body:`El **Sistema Internacional (SI)** es el que usa todo el mundo. Tiene 7 unidades básicas:

<div class="tblwrap"><table class="tbl"><tr><th>Magnitud</th><th>Símbolo</th><th>Unidad</th><th>Símbolo</th></tr><tr><td>Longitud</td><td>L</td><td>metro</td><td>m</td></tr><tr><td>Masa</td><td>m</td><td>kilogramo</td><td>kg</td></tr><tr><td>Tiempo</td><td>t</td><td>segundo</td><td>s</td></tr><tr><td>Temperatura</td><td>T</td><td>kelvin</td><td>K</td></tr><tr><td>Intensidad de corriente</td><td>I</td><td>amperio</td><td>A</td></tr><tr><td>Cantidad de sustancia</td><td>n</td><td>mol</td><td>mol</td></tr><tr><td>Intensidad luminosa</td><td>i</td><td>candela</td><td>cd</td></tr></table></div>

[[warn:La unidad de masa es el **kilogramo**, no el gramo. Y la temperatura en el SI va en **kelvin**, no en grados.]]`},
  {t:'read', h:'Magnitudes derivadas', body:`Se forman combinando las fundamentales:

<div class="tblwrap"><table class="tbl"><tr><th>Magnitud</th><th>Unidad</th><th>De dónde sale</th></tr><tr><td>Superficie</td><td>m²</td><td>L · L</td></tr><tr><td>Volumen</td><td>m³</td><td>L · L · L</td></tr><tr><td>Densidad</td><td>kg/m³</td><td>masa / volumen</td></tr><tr><td>Velocidad</td><td>m/s</td><td>longitud / tiempo</td></tr><tr><td>Fuerza</td><td>N (newton)</td><td>m · L / t²</td></tr><tr><td>Energía</td><td>J (julio)</td><td>m · L² / t²</td></tr></table></div>`},
  {t:'quiz', q:'¿Cuál de estas es una magnitud?', opts:['La simpatía','El precio en euros','La altura'], a:2, why:'La altura se mide en metros. El precio es un número, pero no una propiedad física de la materia; la simpatía no se mide.'},
  {t:'quiz', q:'Unidad de masa en el SI:', opts:['gramo (g)','kilogramo (kg)','newton (N)'], a:1, why:'El kilogramo es la unidad fundamental de masa. El newton es de fuerza.'}
 ]},
 {id:'f4', title:'Prefijos, conversiones y notación científica', mins:12, steps:[
  {t:'read', h:'Los prefijos', body:`Para cantidades muy grandes o muy pequeñas usamos prefijos delante de la unidad:

<div class="scale"><span>T tera 10¹²</span><span>G giga 10⁹</span><span>M mega 10⁶</span><span class="hi">k kilo 10³</span><span>h hecto 10²</span><span>da deca 10</span><span class="hi">unidad</span><span>d deci 10⁻¹</span><span class="hi">c centi 10⁻²</span><span class="hi">m mili 10⁻³</span><span>µ micro 10⁻⁶</span><span>n nano 10⁻⁹</span><span>p pico 10⁻¹²</span></div>

Ejemplos: 1 km = 1000 m. 1 mg = 0,001 g = 10⁻³ g. 1 GJ = 10⁹ J.

[[ok:De **k, h, da, unidad, d, c, m**: cada salto es multiplicar o dividir por 10. Hacia la derecha (más pequeño) multiplicas; hacia la izquierda divides.]]`},
  {t:'example', h:'Cambiar de unidad con factores de conversión', intro:'Expresa 4500 horas en días.', steps:[
    {why:'Escribo la equivalencia: 1 día = 24 h.', html:'1 día = 24 h'},
    {why:'Multiplico por una fracción que vale 1, colocando arriba la unidad que quiero y abajo la que quiero quitar.', html:'<div class="math">4500 h <span class="op">·</span>'+fr('1 día','24 h')+'</div>'},
    {why:'Las horas se tachan. Divido.', html:'4500 : 24 = <strong>187,5 días</strong>'}]},
  {t:'example', h:'Con unidades al cuadrado', intro:'Expresa 4000 cm² en m².', steps:[
    {why:'1 m = 100 cm, así que 1 m² = 100 · 100 = 10.000 cm².', html:'1 m² = 10.000 cm²'},
    {why:'Factor de conversión.', html:'<div class="math">4000 cm² <span class="op">·</span>'+fr('1 m²','10.000 cm²')+'</div>'},
    {why:'Divido.', html:'4000 : 10.000 = <strong>0,4 m²</strong>'}]},
  {t:'read', h:'Notación científica', body:`Sirve para escribir números enormes o diminutos de forma corta: **un número con una sola cifra entera** (de 1 a 9) **× 10 elevado a algo**.

- 149.600.000.000 m = **1,496 × 10¹¹** m (he movido la coma 11 sitios a la izquierda)
- 0,0000001 m = **1,0 × 10⁻⁷** m (he movido la coma 7 sitios a la derecha)

[[ok:Número grande → exponente **positivo**. Número pequeño (menor que 1) → exponente **negativo**. El exponente es cuántos sitios movió la coma.]]`},
  {t:'quiz', q:'300.000 km/s en notación científica es…', opts:['3 × 10⁵ km/s','30 × 10⁴ km/s','3 × 10⁻⁵ km/s'], a:0, why:'La coma se mueve 5 sitios a la izquierda: 3 × 10⁵. (30 × 10⁴ vale lo mismo, pero no es notación científica porque tiene dos cifras enteras.)'},
  {t:'quiz', q:'0,004523 kg en notación científica:', opts:['4,523 × 10³ kg','4,523 × 10⁻³ kg','45,23 × 10⁻⁴ kg'], a:1, why:'Muevo la coma 3 sitios a la derecha y el número era pequeño → 10⁻³.'},
  {t:'input', q:'34 m/s en km/h. (Pista: 1 km = 1000 m y 1 h = 3600 s.) Escribe solo el número, por ejemplo 90', a:['122,4','122.4'], hint:'34 · 3600 / 1000. Un m/s son 3,6 km/h.', why:'34 · 3,6 = 122,4 km/h.'}
 ]},
 {id:'f5', title:'Medir bien: sensibilidad, precisión y errores', mins:10, steps:[
  {t:'read', h:'Tres palabras que se parecen', body:`- **Sensibilidad**: la medida **más pequeña** que puede dar el aparato. Una balanza con sensibilidad 10 mg no distingue 3 mg.
- **Precisión**: las medidas repetidas salen **muy parecidas** entre sí (poca dispersión).
- **Exactitud**: las medidas se acercan al **valor real**.

[[idea:Puedes ser preciso sin ser exacto: si una balanza da siempre 25,0 - 25,5 - 25,0 - 25,3 g pero la bola pesa 24,0 g, es precisa (siempre parecido) pero poco exacta (lejos del real).]]`},
  {t:'read', h:'Cifras significativas', body:`Son las cifras que se conocen **con seguridad**. Los ceros de la izquierda **no** cuentan; los de la derecha después de la coma **sí**.

- 4,563 m → 4 cifras significativas (el aparato aprecia milímetros)
- 0,15 → 2 cifras
- 15,00 → 4 cifras (los ceros finales dicen que el aparato es preciso)
- 0,000 15 → 2 cifras`},
  {t:'read', h:'Errores al medir', body:`- **Sistemáticos**: el aparato falla o lo usamos mal siempre igual (una regla que empieza en 1 en vez de en 0).
- **Accidentales**: por circunstancias que no controlamos. Solución: medir **varias veces** y hacer la **media**.

Y como en Matemáticas: **error absoluto** = |real − medido|; **error relativo** = error absoluto / real.`},
  {t:'quiz', q:'Balanza digital: 24,6 - 25,3 - 22,9 - 23,8 g. Balanza de laboratorio: 25,0 - 25,5 - 25,0 - 25,3 g. La bola pesa 24,0 g. ¿Cuál es más precisa?', opts:['La digital','La de laboratorio'], a:1, why:'La de laboratorio da valores muy parecidos entre sí (poca dispersión) → más precisa. La digital, aunque más dispersa, tiene la media más cerca de 24,0 → más exacta.'},
  {t:'quiz', q:'¿Cuántas cifras significativas tiene 0,000150?', opts:['2','3','6'], a:1, why:'Los ceros de la izquierda no cuentan. 1, 5 y el 0 final sí: 3 cifras.'}
 ]}
 ],
 task:{id:'ftask2', title:'Deberes: ejercicios 13, 14 y 15 de la ficha', due:'Para la próxima clase (anuncio del 29 de septiembre)', instr:'Cambios de unidades con factores de conversión (13 y 14) y notación científica (15).', steps:[
  {t:'read', h:'Qué te piden', body:`Tres ejercicios de la ficha de la UD1 (página 2):

- **13**: pasar una densidad de g/mL a kg/m³.
- **14**: pasar una velocidad de m/s a km/h.
- **15**: escribir cuatro cantidades en notación científica.

Se hacen en el **cuaderno**. Aquí están resueltos paso a paso para que **compruebes**, no para copiar.

[[ok:Intenta cada uno tú primero. Luego destapa los pasos y compara.]]`},
  {t:'read', h:'Recuerda: el factor de conversión', body:`Un factor de conversión es una **fracción que vale 1**. Arriba y abajo hay lo mismo, en unidades distintas.

${fr('1 kg','1000 g')} vale 1, porque 1 kg y 1000 g son lo mismo.

[[warn:La unidad que quieres quitar va en el lado contrario. Si está arriba, en el factor la pones abajo. Así se tacha.]]`},
  {t:'example', h:'Ejercicio 13: el agua del mar', intro:'La densidad del agua del mar es 1,13 g/mL. Exprésala en kg/m³.', steps:[
    {why:'Hay que cambiar **dos** unidades: gramos (arriba) a kg, y mL (abajo) a m³. Escribo las equivalencias.', html:'1 kg = 1000 g &nbsp;·&nbsp; 1 m³ = 1.000.000 mL'},
    {why:'Los gramos están arriba: en el factor van abajo. Los mL están abajo: en el factor van arriba.', html:'<div class="math">'+fr('1,13 g','1 mL')+'<span class="op">·</span>'+fr('1 kg','1000 g')+'<span class="op">·</span>'+fr('1.000.000 mL','1 m³')+'</div>'},
    {why:'Tacho g con g y mL con mL. Quedan kg arriba y m³ abajo: justo lo que piden.', html:'1,13 · 1.000.000 : 1000'},
    {why:'Multiplicar por un millón y dividir entre mil es lo mismo que multiplicar por 1000.', html:'1,13 · 1000 = <strong>1130 kg/m³</strong>'}]},
  {t:'quiz', q:'¿Por qué 1 m³ son 1.000.000 mL?', opts:['Porque 1 m³ son 1000 L, y cada litro son 1000 mL','Porque un metro son 100 centímetros','Porque "mili" significa un millón'], a:0, why:'1 m³ = 1000 L. Cada litro son 1000 mL. 1000 · 1000 = 1.000.000 mL. ("Mili" es la milésima parte, no un millón.)'},
  {t:'example', h:'Ejercicio 14: el balón de fútbol', intro:'En una falta, el balón alcanza 34 m/s. Expresa esta velocidad en km/h.', steps:[
    {why:'Cambio metros (arriba) a km, y segundos (abajo) a horas.', html:'1 km = 1000 m &nbsp;·&nbsp; 1 h = 3600 s'},
    {why:'Los m están arriba: en el factor van abajo. Los s están abajo: en el factor van arriba.', html:'<div class="math">'+fr('34 m','1 s')+'<span class="op">·</span>'+fr('1 km','1000 m')+'<span class="op">·</span>'+fr('3600 s','1 h')+'</div>'},
    {why:'Tacho m con m y s con s. Multiplico lo de arriba y divido entre lo de abajo.', html:'34 · 3600 : 1000 = 122.400 : 1000'},
    {why:'Dividir entre 1000 es mover la coma 3 sitios a la izquierda.', html:'<strong>122,4 km/h</strong>'}]},
  {t:'read', h:'¿Tiene sentido?', body:`122 km/h es lo que va un coche por la autovía. Para un balonazo muy fuerte, **tiene sentido**.

[[ok:Atajo: de m/s a km/h se multiplica por **3,6**. 34 · 3,6 = 122,4. Úsalo para comprobar, pero en el cuaderno escribe los factores.]]

${say('Dilo en voz alta: de metros por segundo a kilómetros por hora, por tres coma seis.')}`},
  {t:'read', h:'Ejercicio 15: notación científica', body:`Regla: **una sola cifra** antes de la coma (del 1 al 9), **× 10 elevado a** los sitios que se mueve la coma.

- Número **grande** → exponente **positivo**.
- Número **pequeño** (menor que 1) → exponente **negativo**.`},
  {t:'example', h:'Ejercicio 15 a) y b)', intro:'a) 300000 km/s &nbsp;·&nbsp; b) 0,004523 kg', steps:[
    {why:'a) Pongo la coma detrás del 3. Se ha movido **5 sitios a la izquierda**. Número grande → positivo.', html:'300000 = <strong>3 × 10⁵ km/s</strong>'},
    {why:'b) Pongo la coma detrás del 4, la primera cifra que no es cero. Se ha movido **3 sitios a la derecha**. Número pequeño → negativo.', html:'0,004523 = <strong>4,523 × 10⁻³ kg</strong>'}]},
  {t:'example', h:'Ahora tú: 15 c) y d)', intro:'c) 9798,75 cm &nbsp;·&nbsp; d) 0,00000000076 km. Hazlo en el cuaderno y luego destapa.', steps:[
    {why:'c) Coma detrás del primer 9. Se mueve **3 sitios a la izquierda**. Número grande → positivo.', html:'9798,75 = <strong>9,79875 × 10³ cm</strong>'},
    {why:'d) Coma detrás del 7. Cuenta los saltos con el dedo: son **10 a la derecha**. Número pequeño → negativo.', html:'0,00000000076 = <strong>7,6 × 10⁻¹⁰ km</strong>'}]},
  {t:'quiz', q:'Uno más para practicar: 0,00052 en notación científica es…', opts:['5,2 × 10⁴','5,2 × 10⁻⁴','52 × 10⁻⁵'], a:1, why:'La coma salta 4 sitios a la derecha y el número es pequeño → 10⁻⁴. (52 × 10⁻⁵ vale lo mismo, pero tiene dos cifras antes de la coma.)'},
  {t:'read', h:'Antes de darla por hecha', body:`<div class="levels"><div class="level"><b>1</b><span>En el 13 y el 14 he escrito los **factores de conversión**, no solo el resultado.</span></div><div class="level"><b>2</b><span>He tachado las unidades que se van.</span></div><div class="level"><b>3</b><span>Cada resultado lleva su unidad: kg/m³ y km/h.</span></div><div class="level"><b>4</b><span>En el 15 hay **una sola cifra** antes de la coma.</span></div><div class="level"><b>5</b><span>En los números pequeños (b y d) el exponente es **negativo**.</span></div></div>

Cuando lo tengas en el cuaderno, márcala en la portada con **✔ Hecha en cuaderno**.`}
 ]}
};

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
