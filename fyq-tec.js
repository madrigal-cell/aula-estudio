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
 task:{id:'ftask', title:'Deberes: ejercicios 7 a 12 de la ficha', due:'Para la próxima clase', instr:'Ejercicios 7 y 8 (magnitudes), 9 y 10 (repaso de ciencia y observación), 11 y 12 (prefijos y unidades).', steps:[
  {t:'read', h:'Ejercicio 7: ¿magnitud o no?', body:`Pregúntate: ¿se puede medir con un número y una unidad?

- a) El volumen que ocupa → **sí** (litros, m³)
- b) El color → **no**
- c) El sabor → **no**
- d) La temperatura → **sí** (K, °C)
- e) La fuerza para arrastrarla → **sí** (newtons)
- f) El precio en euros → **no** es una magnitud física (no es una propiedad de la materia)`},
  {t:'read', h:'Ejercicio 8: características de una persona', body:`- a) La altura → **sí** (metros)
- b) La simpatía → **no**
- c) La masa → **sí** (kg)
- d) La belleza → **no**
- e) La velocidad → **sí** (m/s)
- f) La habilidad → **no**`},
  {t:'read', h:'Ejercicio 9: ¿Física o Química?', body:`¿Aparece una sustancia nueva? No → Física. Sí → Química.

- a) Vagón en una montaña rusa → **Física** (movimiento)
- b) El eco en un concierto → **Física** (sonido)
- c) Deshielo de una pista → **Física** (sigue siendo agua)
- d) Encender una chimenea → **Química** (la madera arde y cambia)
- e) Fuegos artificiales → **Química**
- f) Freír un huevo → **Química** (el huevo cambia y no vuelve atrás)
- g) Medir la velocidad de un F1 → **Física**
- h) Calentar agua → **Física** (sigue siendo agua)`},
  {t:'read', h:'Ejercicio 10: observación cuantitativa', body:`**Cuantitativa** = con números. **Cualitativa** = con palabras.

De la vela encendida, la única observación científica **cuantitativa** es:

**e) Se consume 1 cm cada 3 min.**

Las demás: a) forma cilíndrica (cualitativa), b) cuesta 1 € (tiene número pero no es científica), c) arde por combustión (cualitativa), d) parafina (cualitativa), f) poca luz (cualitativa).`},
  {t:'read', h:'Ejercicio 11: símbolo y equivalencia', body:`Modelo: 1 dag = 10 g.

- a) Miligramo → **mg** → 1 mg = 10⁻³ g = 0,001 g
- b) Terámetro → **Tm** → 1 Tm = 10¹² m
- c) Kilolitro → **kL** → 1 kL = 10³ L = 1000 L
- d) Nanosegundo → **ns** → 1 ns = 10⁻⁹ s
- e) Gigajulio → **GJ** → 1 GJ = 10⁹ J
- f) Micronewton → **µN** → 1 µN = 10⁻⁶ N`},
  {t:'read', h:'Ejercicio 12: con todas las letras', body:`Modelo: 1 µm es un micrómetro y equivale a 10⁻⁶ m.

- a) **hL**: un hectolitro, equivale a 10² L = 100 L
- b) **Mg**: un megagramo, equivale a 10⁶ g (= 1000 kg)
- c) **cL**: un centilitro, equivale a 10⁻² L = 0,01 L
- d) **mg**: un miligramo, equivale a 10⁻³ g = 0,001 g

[[ok:Antes de copiar, tapa las respuestas e intenta cada apartado tú. Luego compara.]]`}
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
