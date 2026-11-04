/* ===== Ampliación 4 nov: Biología (la enfermedad) y Tecnología (croquis de vivienda) ===== */
(function(){
var B=SUBJECTS.bio, T=SUBJECTS.tec;

/* ---------- BIOLOGÍA · Unidad 2 · La enfermedad ---------- */
B.tema=`02. El sistema inmunológico · La enfermedad`;
B.lessons.push(
 {id:'b16', title:`La enfermedad: síntomas, signos y microbios`, mins:10, steps:[
  {t:'recall', h:`Repaso de 1 minuto`, qs:[[`¿Qué es la salud?`,`Un estado de bienestar y equilibrio físico y emocional`],[`Nombra los tres grupos de factores de riesgo`,`Conductuales, biológicos y ambientales`]]},
  {t:'read', h:`Qué es una enfermedad`, body:`Una **enfermedad** es un estado en el que **alguna parte del cuerpo se altera** y **no hace bien su función**. Eso produce **malestar**.

Las enfermedades se clasifican en todo el mundo con una lista oficial llamada **CIE**.

Las **enfermedades infecciosas** son las que causan los **microorganismos** (microbios).

${say(`Dilo en voz alta: enfermedad = una parte del cuerpo no hace bien su función.`)}`},
  {t:'read', h:`Síntomas y signos`, body:`Una enfermedad se **nota** de dos formas.

<div class="tblwrap"><table class="tbl"><tr><th>Síntomas</th><th>Signos</th></tr><tr><td>**Subjetivos**: solo los **siente el enfermo**</td><td>**Objetivos**: **otros los ven** o se **miden**</td></tr><tr><td>Picor, cansancio, mareo, dolor</td><td>Fiebre, presión arterial</td></tr></table></div>

[[ok:Ancla: síntoma = lo SIENTO yo. Signo = lo VE el médico o lo marca el termómetro.]]`},
  {t:'quiz', q:`El dolor de cabeza es un…`, opts:[`Síntoma`,`Signo`], a:0, why:`Solo lo siente la persona enferma. Nadie más puede verlo ni medirlo.`},
  {t:'quiz', q:`La fiebre medida con un termómetro es un…`, opts:[`Signo`,`Síntoma`], a:0, why:`Se mide con un aparato y lo puede comprobar cualquiera: es objetivo, así que es un signo.`},
  {t:'example', h:`Ejemplo: tos o cansancio, ¿cuál es cuál?`, intro:`Mira cómo se decide, paso a paso.`, steps:[
   {why:`Pregúntate: ¿lo puede ver u oír otra persona?`, html:`**Tos**: sí, otra persona la oye.`},
   {why:`Si lo perciben otros, es un signo.`, html:`La tos es un **signo**.`},
   {why:`Ahora el cansancio: solo lo nota quien lo tiene.`, html:`El cansancio es un **síntoma**.`}
  ]},
  {t:'example', h:`Ahora tú: picor y presión arterial alta`, intro:`Hazlo en el cuaderno y luego destapa.`, steps:[
   {why:`¿Quién nota el picor?`, html:`Solo quien lo tiene: **síntoma**.`},
   {why:`¿La presión arterial se puede medir?`, html:`Sí, con un aparato: **signo**.`}
  ]},
  {t:'read', h:`Quién causa las enfermedades infecciosas`, body:`Hay **cuatro tipos de microbios** y cada uno se trata de una forma.

<div class="tblwrap"><table class="tbl"><tr><th>Microbio</th><th>Enfermedades</th><th>Tratamiento</th></tr><tr><td>**Virus**</td><td>gripe, COVID-19, rabia, sarampión</td><td>antivirales</td></tr><tr><td>**Bacterias**</td><td>cólera, tétanos, tuberculosis, sífilis</td><td>antibióticos</td></tr><tr><td>**Protozoos**</td><td>malaria, enfermedad del sueño, Chagas</td><td>antiprotozoarios</td></tr><tr><td>**Hongos**</td><td>tiña, pie de atleta</td><td>antifúngicos</td></tr></table></div>

[[warn:Los antibióticos solo sirven contra bacterias, NUNCA contra virus. Usarlos mal crea bacterias resistentes.]]`},
  {t:'quiz', q:`Tienes gripe. ¿Sirven los antibióticos?`, opts:[`No: la gripe la causa un virus`,`Sí: curan todas las infecciones`], a:0, why:`Los antibióticos solo actúan contra bacterias. La gripe es de virus.`},
  {t:'quiz', q:`El tétanos lo causa…`, opts:[`Una bacteria`,`Un virus`], a:0, why:`En la tabla, el tétanos está en las bacterias, y se trata con antibióticos.`}
 ]},
 {id:'b17', title:`Cómo se contagia una enfermedad y sus fases`, mins:10, steps:[
  {t:'recall', h:`Repaso de 1 minuto`, qs:[[`¿Qué diferencia hay entre síntoma y signo?`,`Síntoma: lo siente el enfermo. Signo: lo ven otros o se mide`],[`¿Contra qué microbios sirven los antibióticos?`,`Solo contra bacterias`]]},
  {t:'read', h:`Contagio directo`, body:`**Directo** = el microbio pasa **de persona a persona**, sin nada en medio.

Puede pasar de una persona **enferma** o de una **portadora sin síntomas**.

¿Cómo? Por **contacto físico** o al **respirar microgotas de saliva** cuando alguien habla, tose o estornuda.

${say(`Dilo en voz alta: directo = de persona a persona.`)}`},
  {t:'read', h:`Contagio indirecto`, body:`**Indirecto** = el microbio llega **a través de algo intermedio**: agua, alimentos, objetos o animales.

Dos casos especiales:

- **Vector**: un animal artrópodo (como el mosquito) que **lleva** el microbio **sin enfermar**. Ejemplo: mosquito Anopheles y malaria.
- **Zoonosis**: enfermedad que pasa **de animales a personas**. Ejemplo: la rabia por mordedura.

[[ok:Ancla: indirecto = hay un intermediario. Si es un bicho que pica y lo lleva, es vector.]]`},
  {t:'quiz', q:`Una persona tose cerca de otra y le pasa un virus. Es contagio…`, opts:[`Directo`,`Indirecto`], a:0, why:`Pasa de persona a persona por las microgotas, sin intermediario.`},
  {t:'quiz', q:`Un mosquito pica a un enfermo y luego a ti. El mosquito es un…`, opts:[`Vector`,`Zoonosis`], a:0, why:`Un animal artrópodo que lleva el microbio sin enfermar es un vector.`},
  {t:'example', h:`Ejemplo: beber agua contaminada`, intro:`Mira cómo se decide, paso a paso.`, steps:[
   {why:`¿Pasa de persona a persona sin nada en medio?`, html:`No: el microbio viaja en el **agua**.`},
   {why:`Hay un intermediario (el agua).`, html:`Es contagio **indirecto**.`}
  ]},
  {t:'example', h:`Ahora tú: un perro con rabia muerde a una persona`, intro:`Hazlo en el cuaderno y luego destapa.`, steps:[
   {why:`¿De dónde viene la enfermedad?`, html:`De un **animal** a una persona.`},
   {why:`Eso tiene nombre.`, html:`Es una **zoonosis**. Además, el contagio es por mordedura.`}
  ]},
  {t:'read', h:`Las tres fases de una infección`, body:`<div class="levels"><div class="level"><b>1</b><span>**Incubación**: desde que entra el microbio hasta los **primeros síntomas**. Ya puedes contagiar.</span></div><div class="level"><b>2</b><span>**Desarrollo**: aparecen **todos los síntomas y signos**. Hace falta atención médica.</span></div><div class="level"><b>3</b><span>**Convalecencia**: ya has superado la enfermedad y **te recuperas**. Dura según el microbio y tu cuerpo.</span></div></div>`},
  {t:'order', h:`Ordena las fases`, q:`Toca las fases en el orden en que ocurren.`, items:[`Incubación`,`Desarrollo`,`Convalecencia`]},
  {t:'quiz', q:`¿En qué fase todavía no tienes síntomas, pero ya puedes contagiar?`, opts:[`Incubación`,`Convalecencia`], a:0, why:`En la incubación el microbio ya está dentro y aún no hay síntomas, pero ya puedes contagiar.`}
 ]}
);

/* Tarea de Biología: 4 nov (La enfermedad). Se conserva la anterior al final. */
var oldB=B.task;
B.task={id:'btask4', title:`La enfermedad: esquema del punto 2 + ejercicios 9, 11, 13 y 14`, due:`Antes de la próxima clase (sin fecha concreta)`, instr:`En la libreta: haz un esquema o resumen del punto 2 (la enfermedad) y resuelve los ejercicios 9, 11, 13 y 14. Después sube fotos a la tarea de Classroom.`, steps:[
  {t:'read', h:`Qué se pide`, body:`El profesor ha publicado la tarea **"04.11.26: La enfermedad"**.

<div class="levels"><div class="level"><b>1</b><span>En la libreta, haz un **esquema o resumen** del **punto 2** de la unidad (definiciones, clasificaciones, ejemplos). Usa el libro, el PDF o la presentación.</span></div><div class="level"><b>2</b><span>Haz los **ejercicios 9, 11, 13 y 14**.</span></div><div class="level"><b>3</b><span>**Súbelo a Classroom** antes de la próxima clase.</span></div></div>

[[warn:No hay fecha concreta en Classroom: es antes de la próxima clase. Si no tienes iPad, pide el libro en papel al profesor sustituto.]]
[[ok:Antes de empezar, haz las lecciones b16 y b17.]]`},
  {t:'example', h:`Esquema del punto 2 (para comprobar)`, intro:`Haz tu esquema en la libreta y luego destapa para ver qué tendría que aparecer.`, steps:[
   {why:`Empieza por la definición.`, html:`**Enfermedad**: alguna parte del organismo se altera y no hace bien su función, y produce malestar. Se clasifican en la CIE. Las **infecciosas** las causan microorganismos.`},
   {why:`Después, cómo se nota.`, html:`**Síntomas**: subjetivos, solo los percibe el enfermo (picor, cansancio, mareo, dolor). **Signos**: objetivos, los ven otros o se miden (presión arterial, fiebre).`},
   {why:`Los microbios y su tratamiento.`, html:`**Virus**: gripe, COVID-19, rabia, sarampión → antivirales. **Bacterias**: cólera, tétanos, tuberculosis, sífilis → antibióticos. **Protozoos**: malaria, enfermedad del sueño, Chagas → antiprotozoarios. **Hongos**: tiña, pie de atleta → antifúngicos. Los antibióticos nunca sirven contra virus.`},
   {why:`Cómo se contagian.`, html:`**Directo**: de persona a persona (contacto físico o microgotas al hablar, toser o estornudar). **Indirecto**: por un intermediario (agua, alimentos, objetos o animales). **Vector**: artrópodo que lleva el microbio sin enfermar (mosquito y malaria). **Zoonosis**: de animales a personas (rabia).`},
   {why:`Las fases.`, html:`**Incubación** (hasta los primeros síntomas; ya se contagia) → **Desarrollo** (todos los síntomas y signos) → **Convalecencia** (recuperación).`}
  ]},
  {t:'example', h:`Ejercicio 9: síntomas y signos (para comprobar)`, intro:`En la ilustración hay mareo, dolor de cabeza, dolor de oído, dolor de garganta, mucosidad, estornudos y tos, falta de apetito y vómitos. Clasifícalos y razona. Luego destapa.`, steps:[
   {why:`Primero, los que solo siente el enfermo.`, html:`**Síntomas**: mareo, dolor de cabeza, dolor de oído, dolor de garganta y falta de apetito. Razón: son sensaciones subjetivas; solo las percibe quien está enfermo.`},
   {why:`Después, los que otros pueden ver u oír.`, html:`**Signos**: mucosidad, estornudos y tos, y vómitos. Razón: son manifestaciones objetivas; otra persona las observa.`}
  ]},
  {t:'example', h:`Ejercicio 11: Molly, tétanos y gripe (para comprobar)`, intro:`Responde a, b y c en la libreta y luego destapa.`, steps:[
   {why:`a) Tipo de enfermedad.`, html:`Las dos son enfermedades **infecciosas**, porque las causan microorganismos.`},
   {why:`b) Microorganismos.`, html:`**Tétanos**: una **bacteria**. **Gripe**: un **virus**.`},
   {why:`c) Cómo se contagió, tétanos.`, html:`**Tétanos**: contagio **indirecto**. La bacteria estaba en el **clavo oxidado**, un objeto intermedio, y entró por la herida del pinchazo.`},
   {why:`c) Cómo se contagió, gripe.`, html:`**Gripe**: contagio **directo**, de persona a persona. Su amiga tenía gripe y pasa por las **microgotas de saliva** al hablar, toser o estornudar.`}
  ]},
  {t:'example', h:`Ejercicio 13: la peste (para comprobar)`, intro:`Mira cada flecha del dibujo, decide qué tipo de contagio es y luego destapa.`, steps:[
   {why:`Rata → persona por mordedura.`, html:`**Zoonosis**: la enfermedad pasa de un animal (la rata) a una persona.`},
   {why:`Rata → pulga → persona por picadura.`, html:`**Indirecto mediante vector**: la pulga es un artrópodo que lleva la bacteria de la rata a la persona.`},
   {why:`Peste pulmonar: de una persona a otras.`, html:`**Contagio directo**: pasa de persona a persona sin intermediario (por el aire, desde los pulmones).`}
  ]},
  {t:'example', h:`Ejercicio 14: tipo de contagio (para comprobar)`, intro:`Decide en cada caso y luego destapa. Mira si hay un intermediario.`, steps:[
   {why:`a) Rubeola de madre a bebé.`, html:`**Directo**: de persona a persona, durante la gestación.`},
   {why:`b) Pinchazo con jeringuilla infectada.`, html:`**Indirecto**: el microbio llega por un objeto.`},
   {why:`c) Transfusión de sangre contaminada.`, html:`**Indirecto**: llega por un intermediario, la sangre transfundida.`},
   {why:`d) Leche fresca de una vaca enferma.`, html:`**Indirecto** (el intermediario es un alimento) y además **zoonosis**, porque viene de un animal.`},
   {why:`e) Mucosa de una cabra enferma al asistir en el parto.`, html:`**Directo** con un animal: contacto físico. Es una **zoonosis**.`}
  ]},
  {t:`read`, h:`Ojo con el 14`, body:`Las soluciones de **b** y **c** las razona esta web con las definiciones de la presentación.

[[warn:Si en clase el profesor las corrige de otra forma, hazle caso a él y apunta su corrección.]]`},
  {t:'read', h:`Antes de subirlo`, body:`<div class="levels"><div class="level"><b>✔</b><span>Hay un **esquema o resumen** del punto 2.</span></div><div class="level"><b>✔</b><span>Están los ejercicios **9, 11, 13 y 14**, con tus razonamientos.</span></div><div class="level"><b>✔</b><span>Las fotos se ven bien y están **dentro de la tarea** de Classroom.</span></div></div>`},
  {t:'read', h:`Siguen pendientes las anteriores`, body:`Esta es la tarea nueva, pero **no se han borrado las anteriores**: **la salud y los factores de riesgo** (30 oct) y lo de la **Unidad 1**.

Debajo las tienes tal como estaban.`}
 ].concat(oldB&&oldB.steps?oldB.steps:[])};

/* ---------- TECNOLOGÍA · Croquis a mano de una vivienda (entrega 20 nov, 22:00) ---------- */
T.lessons.push(
 {id:'tp1', title:`Dibujar a mano la planta de un apartamento`, mins:10, steps:[
  {t:'read', h:`Qué es una planta`, body:`La **planta** es el dibujo de una vivienda **vista desde arriba**, como si le quitaras el techo.

Se ven **paredes, puertas y muebles**.

[[idea:Imagina que eres un dron mirando hacia abajo.]]

${say(`Dilo en voz alta: planta = la casa vista desde arriba.`)}`},
  {t:'read', h:`Qué te pide el profesor`, body:`Trabajo **por parejas**, **a mano**, sin medios digitales. El apartamento tiene **seis zonas**:

<div class="levels"><div class="level"><b>1</b><span>Recibidor</span></div><div class="level"><b>2</b><span>Sala de estar</span></div><div class="level"><b>3</b><span>Cocina</span></div><div class="level"><b>4</b><span>Zona de estudio, dentro del salón</span></div><div class="level"><b>5</b><span>Dormitorio</span></div><div class="level"><b>6</b><span>Baño</span></div></div>

[[warn:Entrega: viernes 20 de noviembre, antes de las 22:00. Si llega tarde, no se corrige y la nota es cero.]]`},
  {t:'read', h:`Cómo te van a puntuar`, body:`<div class="tblwrap"><table class="tbl"><tr><th>Aspecto</th><th>Puntos</th></tr><tr><td>**Escala**: que cada cosa tenga un tamaño apropiado</td><td>4</td></tr><tr><td>**Limpieza y estética**: línea precisa, sin manchas; color, textura y sombreado suman</td><td>3</td></tr><tr><td>**Distribución**: espacios bien organizados y con lógica</td><td>3</td></tr></table></div>

[[ok:La escala vale casi la mitad. Empieza por ahí.]]`},
  {t:'read', h:`La escala: un cm del papel = 50 cm de verdad`, body:`Para que todo guarde proporción, usa una **regla fija**: **1 cm del papel = 50 cm reales**.

<div class="tblwrap"><table class="tbl"><tr><th>Real</th><th>En el papel</th></tr><tr><td>1 metro (100 cm)</td><td>2 cm</td></tr><tr><td>Puerta (90 cm)</td><td>1,8 cm</td></tr><tr><td>Cama de 2 m de largo</td><td>4 cm</td></tr><tr><td>Salón de 5 m</td><td>10 cm</td></tr></table></div>

[[ok:Truco: cada metro real son 2 cm en el papel. Cuenta de 2 en 2.]]

Son medidas orientativas. Compruébalas con tu profesor.`},
  {t:'input', q:`Una mesa mide 1 metro de largo. ¿Cuántos cm mide en el dibujo? (1 m = 2 cm)`, a:['2','2cm'], hint:`Cada metro real son 2 cm en el papel.`, why:`1 metro real son 2 cm en el papel.`},
  {t:'input', q:`Una cocina mide 3 metros de largo. ¿Cuántos cm mide en el dibujo?`, a:['6','6cm'], hint:`3 metros × 2 cm cada metro.`, why:`3 metros × 2 cm = 6 cm.`},
  {t:'read', h:`La distribución: piensa cómo vives`, body:`Ordena el piso con lógica:

- El **recibidor** va **junto a la puerta de entrada**.
- La **cocina** cerca del salón, para pasar la comida.
- La **zona de estudio** dentro del salón, con **luz natural** cerca de una ventana.
- El **dormitorio** y el **baño** en la parte más tranquila.

[[idea:Pregúntate: ¿se puede andar de una zona a otra sin dar rodeos?]]`},
  {t:'order', h:`Ordena los pasos`, q:`Toca los pasos en el orden recomendado para dibujar la planta.`, items:[`Calcula el tamaño con la escala`,`Dibuja los muros a lápiz`,`Pon puertas y ventanas`,`Coloca los muebles`,`Repasa con rotulador y borra el lápiz`,`Añade color, textura y sombreado`]},
  {t:'read', h:`Para que quede limpio`, body:`<div class="levels"><div class="level"><b>1</b><span>Usa **regla y lápiz** primero. Así puedes borrar.</span></div><div class="level"><b>2</b><span>Repasa los **muros** con una línea **más gruesa**.</span></div><div class="level"><b>3</b><span>Pasa a limpio **sin manchas** y no dobles la hoja.</span></div><div class="level"><b>4</b><span>Pon **nombre** a cada zona.</span></div></div>`}
 ]}
);

var oldT=T.task;
T.task={id:'ttask2', title:`Vivienda: croquis a mano de la planta de un apartamento`, due:`Viernes 20 de noviembre, antes de las 22:00`, instr:`Por parejas, dibuja a mano la planta de un apartamento con recibidor, sala de estar, cocina, zona de estudio en el salón, dormitorio y baño. Se puntúa escala (4), limpieza y estética (3) y distribución (3). Entrega tarde = nota cero.`, steps:[
  {t:'read', h:`Qué se pide`, body:`La tarea **"Vivienda. Croquis a mano"** es **por parejas** y **sin medios digitales**.

<div class="levels"><div class="level"><b>1</b><span>Dibuja a mano la **planta del apartamento** (vista desde arriba).</span></div><div class="level"><b>2</b><span>Incluye **recibidor, sala de estar, cocina, zona de estudio en el salón, dormitorio y baño**.</span></div><div class="level"><b>3</b><span>**Entrégala** en Classroom.</span></div></div>

[[warn:Fecha: viernes 20 de noviembre, antes de las 22:00. Una entrega con retraso no se corrige y la nota es cero.]]
[[ok:Antes de empezar, haz la lección tp1.]]`},
  {t:'read', h:`Cómo se corrige`, body:`<div class="tblwrap"><table class="tbl"><tr><th>Aspecto</th><th>Máximo</th></tr><tr><td>**Escala**</td><td>4 puntos</td></tr><tr><td>**Limpieza y estética** (precisión, sin manchas, color, textura, sombreado)</td><td>3 puntos</td></tr><tr><td>**Distribución** (organización lógica de usos y espacios)</td><td>3 puntos</td></tr></table></div>`},
  {t:'example', h:`Plan de trabajo con tu pareja (para comprobar)`, intro:`Decidid cada punto en el cuaderno y luego destapad para comparar.`, steps:[
   {why:`Primero, la escala.`, html:`Elegid **1 cm = 50 cm reales** (cada metro son 2 cm). Un apartamento de unos 6 m × 7 m ocupa 12 cm × 14 cm en un folio.`},
   {why:`Después, el esqueleto.`, html:`Dibujad los **muros** a lápiz, con regla, y repartid las seis zonas.`},
   {why:`Ahora, lo que se abre y lo que se pone.`, html:`Marcad **puertas y ventanas**. Colocad los **muebles** con su escala.`},
   {why:`Por último, lo que se ve.`, html:`Pasad a limpio, **repasad con rotulador**, borrad el lápiz y añadid color, textura y sombreado.`}
  ]},
  {t:'read', h:`Antes de entregar`, body:`<div class="levels"><div class="level"><b>✔</b><span>Están las **seis zonas** y cada una tiene su nombre.</span></div><div class="level"><b>✔</b><span>Has usado **la misma escala** en todo el dibujo.</span></div><div class="level"><b>✔</b><span>La **distribución** tiene lógica: recibidor junto a la puerta, estudio con luz.</span></div><div class="level"><b>✔</b><span>El dibujo está **limpio**, sin manchas.</span></div><div class="level"><b>✔</b><span>Lo has entregado **antes del 20 de noviembre a las 22:00**.</span></div></div>`}
 ].concat(oldT&&oldT.steps?[{t:'read', h:`Siguen pendientes las anteriores`, body:`Esta es la tarea nueva, pero **no se ha borrado la anterior** del calentamiento global.

Debajo la tienes tal como estaba.`}].concat(oldT.steps):[])};
})();
