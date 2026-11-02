/* ===== Ampliación 2 nov: Inglés (present perfect 2) y Biología (Unidad 2: la salud) ===== */
(function(){
var I=SUBJECTS.ing, B=SUBJECTS.bio;

/* ---------- INGLÉS · Unit 2 · Present perfect 2: just, yet, already · for, since ---------- */
I.tema='Unit 2 · Present Perfect: just, yet, already, for, since';
I.lessons.push(
 {id:'i5', title:'Just, yet y already', mins:10, steps:[
  {t:'recall', h:'Repaso de 1 minuto', qs:[['¿Cómo se forma el present perfect?','have / has + participio'],['¿Qué auxiliar va con "she"?','has']]},
  {t:'read', h:'Tres palabras pequeñas', body:`Tres palabras cuentan **cuándo** pasó algo, sin decir la fecha:

<div class="levels"><div class="level"><b>1</b><span>**just** = **acaba de** pasar</span></div><div class="level"><b>2</b><span>**already** = **ya** ha pasado</span></div><div class="level"><b>3</b><span>**yet** = **todavía** (no) / **ya** (en preguntas)</span></div></div>

${say('Dilo en voz alta: just, already, yet.')}`},
  {t:'read', h:'Dónde se colocan', body:`<div class="tblwrap"><table class="tbl"><tr><th>Frase</th><th>Ejemplo</th></tr><tr><td>**Afirmativa**: just / already van **entre** have y el participio</td><td>I've **just** arrived home. She's **already** done her homework.</td></tr><tr><td>**Negativa**: yet va **al final**</td><td>He hasn't had breakfast **yet**.</td></tr><tr><td>**Pregunta**: yet va **al final**</td><td>Has he had breakfast **yet**?</td></tr></table></div>

[[ok:Truco: just y already van pegadas al verbo (en medio). Yet se va al final.]]`},
  {t:'quiz', q:'¿Dónde va "yet"?', opts:['Al final de la frase','Entre have y el participio'], a:0, why:'Yet va al final: "He hasn\'t had breakfast yet".'},
  {t:'quiz', q:'Elige la correcta: "My cousins have ___ moved to Italy." (acaban de mudarse)', opts:['just','yet'], a:0, why:'Just = acaban de. Yet va al final de la frase y se usa en negativas o preguntas.'},
  {t:'quiz', q:'Elige la correcta: "I haven\'t eaten dinner ___. I\'m so hungry."', opts:['yet','already'], a:0, why:'Es una frase negativa y todavía no has cenado: yet, al final.'},
  {t:'example', h:'Ejemplo: Have you fed the dog ___?', intro:'Mira cómo se decide, paso a paso.', steps:[
   {why:'Mira el tipo de frase. Es una pregunta.', html:`Have you fed the dog ...?`},
   {why:'En preguntas, "ya" se dice yet y va al final.', html:`Have you fed the dog **yet**?`}
  ]},
  {t:'example', h:'Ahora tú: Has Jo called ___?', intro:'Hazlo en el cuaderno y luego destapa.', steps:[
   {why:'Es una pregunta.', html:`Has Jo called ...?`},
   {why:'Pregunta → yet, al final.', html:`Has Jo called **yet**?`}
  ]},
  {t:'input', q:'Completa con just, yet o already: "We have ______ seen that film. We saw it ages ago."', a:['already'], hint:'Ya lo hemos visto hace tiempo: ya.', why:'Already = ya. Lo vimos hace mucho, así que ya lo hemos visto.'}
 ]},
 {id:'i6', title:'For, since y How long', mins:10, steps:[
  {t:'recall', h:'Repaso de 1 minuto', qs:[['¿Qué significa "just"?','Acaba de'],['¿Dónde va "yet"?','Al final de la frase']]},
  {t:'read', h:'Durante cuánto tiempo', body:`Para decir **desde cuándo** o **cuánto tiempo** dura algo usamos el present perfect con **for** o **since**.

<div class="levels"><div class="level"><b>1</b><span>**for** + un **periodo**: for six months, for years, for two weeks</span></div><div class="level"><b>2</b><span>**since** + un **momento** concreto: since last year, since I was ten, since Monday</span></div></div>

[[idea:For = cuánto dura. Since = cuándo empezó.]]`},
  {t:'read', h:'Ejemplos', body:`- I've lived here **for** six months. (durante seis meses)
- I've lived here **since** last year. (desde el año pasado)
- I haven't lived here **for** two years. (no vivo aquí desde hace dos años)

${say('Dilo en voz alta: for six months, since last year.')}`},
  {t:'quiz', q:'"___ last week": ¿for o since?', opts:['since','for'], a:0, why:'"Last week" es un momento concreto, así que lleva since.'},
  {t:'quiz', q:'"___ many years": ¿for o since?', opts:['for','since'], a:0, why:'"Many years" es un periodo de tiempo, así que lleva for.'},
  {t:'read', h:'La pregunta: How long...?', body:`Para preguntar **cuánto tiempo** usamos **How long + have / has + sujeto + participio**.

"**How long have you lived** here?" = ¿Cuánto tiempo llevas viviendo aquí?

[[warn:Cuidado: el orden es How long → have/has → sujeto → participio.]]`},
  {t:'order', h:'Ordena la pregunta', q:'Toca las palabras en orden: "¿Cuánto tiempo ha tenido Max ese juego?"', items:['How long','has','Max','had','that game']},
  {t:'example', h:'Ejemplo: you / loved / reading', intro:'Se construye la pregunta, paso a paso.', steps:[
   {why:'Empieza con How long.', html:`**How long**`},
   {why:'Después, have o has. You → have.', html:`How long **have**`},
   {why:'Después el sujeto y el participio.', html:`How long have **you loved** reading?`}
  ]},
  {t:'example', h:'Ahora tú: they / studied / Japanese', intro:'Hazlo en el cuaderno y luego destapa.', steps:[
   {why:'How long + have (they → have).', html:`How long **have**`},
   {why:'Sujeto y participio.', html:`How long have **they studied**`},
   {why:'Termina la pregunta.', html:`How long have they studied Japanese?`}
  ]},
  {t:'input', q:'Completa con for o since: "Marta has sung in a rock band ______ last year."', a:['since'], hint:'"Last year" es un momento concreto.', why:'Since + momento concreto: since last year.'}
 ]}
);

/* Tarea de Inglés: se añade Present Perfect 2 (30 oct) */
I.task.title='Unit 2 · Present perfect 2 (just/yet/already, for/since) + Present perfect 1 + Vocab 1 + writing';
I.task.instr='Haz en el cuaderno las actividades de las dos capturas de "Present perfect 2" (30 oct). Sigue pendiente lo anterior: 20 frases del present perfect, Vocab 1 (ejercicios 1, 2 y 5) y el writing sobre tu abuelo/a.';
I.task.steps[0]={t:'read', h:'Qué se pide', body:`Hay **cuatro cosas** en el cuaderno. Ninguna tiene fecha en Classroom.

<div class="levels"><div class="level"><b>1</b><span>**Nuevo (30 oct)**: "Present perfect 2". Dos capturas del libro: **just, yet y already** y **for, since y How long**. "Do these activities in your notebook".</span></div><div class="level"><b>2</b><span>**29 oct**: las **20 frases** de "Present Perfect (Positive)".</span></div><div class="level"><b>3</b><span>**Vocab 1**: ejercicios 1, 2 y 5 de "Skills and abilities".</span></div><div class="level"><b>4</b><span>**Writing** sobre tu abuelo/a.</span></div></div>

[[ok:Antes de empezar, haz las lecciones i5 e i6.]]`};
I.task.steps.splice(1,0,
 {t:'example', h:'Capturas 1: ejercicio 1 (para comprobar)', intro:'Primera captura, "Just, yet and already". Elige la opción correcta en el cuaderno y luego destapa.', steps:[
  {why:'Frases 1 a 3.', html:`1 Have you fed the dog **yet**? · 2 My cousins have **just** moved to Italy. · 3 We've **already** done our chores.`},
  {why:'Frases 4 a 6.', html:`4 He's **already seen** the new Joker film. · 5 I haven't eaten dinner **yet**. · 6 My little sister has **just learnt** to ride a bike.`}
 ]},
 {t:'example', h:'Capturas 1: ejercicio 2 (para comprobar)', intro:'Elige la palabra correcta en el cuaderno y luego destapa.', steps:[
  {why:'Frases 1 a 3.', html:`1 I have **just** met Millie in town. · 2 Elisa hasn't finished her homework **yet**. · 3 We have **already** seen that film. We saw it ages ago.`},
  {why:'Frases 4 a 6.', html:`4 The bus has **just** left. · 5 Has Jo called **yet**? · 6 I've **already** made the pizza, but I haven't made the salad **yet**.`}
 ]},
 {t:'example', h:'Capturas 1: ejercicio 3, corregir (para comprobar)', intro:'Corrige las frases en el cuaderno y luego destapa. La 1 ya viene hecha en el libro.', steps:[
  {why:'Frases 1 y 2.', html:`1 I've **already paid** for the online course, but I haven't started it yet. · 2 Max has already written a lot of computer code, and he has **just created** his first app.`},
  {why:'Frases 3 a 5.', html:`3 I've just finished my maths homework, but I haven't done my science project **yet**. · 4 Emily has **already finished** building her robot – have you seen it yet? · 5 Have you packed your bag for tomorrow **yet**?`}
 ]},
 {t:'example', h:'Capturas 1: ejercicio 4, reescribir (para comprobar)', intro:'Reescribe en present perfect con la palabra del paréntesis. Hazlo en el cuaderno y luego destapa.', steps:[
  {why:'Frases 1 a 3.', html:`1 My mum has already had lunch today. · 2 Our teacher hasn't given us instructions **yet**. · 3 I've **just seen** an enormous dog in the park!`},
  {why:'Frases 4 a 6.', html:`4 Have you asked Matt to the cinema **yet**? · 5 I've **just finished** a great mystery film. · 6 Jim and Ella haven't arrived at the party **yet**.`}
 ]},
 {t:'example', h:'Capturas 2: ejercicios 1 y 2 (para comprobar)', intro:'Segunda captura, "for, since y How long". Hazlo en el cuaderno y luego destapa.', steps:[
  {why:'Ejercicio 1: elige la forma del verbo.', html:`1 Sam **'s** loved making cakes since he was young. · 2 We **'ve** lived here for years. · 3 I **'ve** designed my own clothes since I was ten.`},
  {why:'Ejercicio 1: frases 4 a 6.', html:`4 Kate **hasn't** known Lisa for long. · 5 You **haven't** had that mobile phone for long. · 6 I **haven't** read that book.`},
  {why:'Ejercicio 2: for o since.', html:`2 Marta has sung in a rock band **since** last year. · 3 My mum's had the same phone **for** years. · 4 Rafael and Antonio haven't been at school **since** last week. · 5 I haven't been to the cinema **since** last month. · 6 My cousin has lived in France **for** many years.`}
 ]},
 {t:'example', h:'Capturas 2: ejercicio 3, el chat (para comprobar)', intro:'Completa los huecos del chat con for o since y luego destapa.', steps:[
  {why:'Huecos 1 a 3.', html:`1 **for** ages (ya viene hecho) · 2 interested in robots **for** a long time · 3 I have loved robots **since** I was about six years old.`},
  {why:'Huecos 4 a 6.', html:`4 I have made three small robots **since** then. · 5 I have enjoyed cooking **for** about five years now. · 6 My skills have improved a lot **since** last year.`}
 ]},
 {t:'example', h:'Capturas 2: ejercicios 4 y 5 (para comprobar)', intro:'Ordena las preguntas (ejercicio 4) y completa con la caja (ejercicio 5). Hazlo en el cuaderno y luego destapa.', steps:[
  {why:'Ejercicio 4: preguntas 2 y 3.', html:`2 How long **have they studied** Japanese? · 3 How long **has Max had** that game?`},
  {why:'Ejercicio 4: preguntas 4 y 5.', html:`4 How long **have you known** how to sing? · 5 How long **has Tina enjoyed** sewing?`},
  {why:'Ejercicio 5: palabras de la caja (for, have, How, long, since, visited).', html:`2 How **long** have you played chess? · 3 We **have** lived in this street since I was born. · 4 **How** long has your brother driven a car? · 5 We've been at the library **for** ages! · 6 They haven't **visited** their cousins for five years.`}
 ]}
);
I.task.steps[I.task.steps.length-1]={t:'read', h:'Antes de terminar', body:`<div class="levels"><div class="level"><b>✔</b><span>Has hecho en el cuaderno las actividades de las **dos capturas** de Present perfect 2.</span></div><div class="level"><b>✔</b><span>**just** y **already** van en medio; **yet** va al final.</span></div><div class="level"><b>✔</b><span>**for** + periodo; **since** + momento concreto.</span></div><div class="level"><b>✔</b><span>Siguen pendientes (si no las has hecho): las **20 frases**, **Vocab 1** y el **writing** del abuelo/a.</span></div><div class="level"><b>✔</b><span>Pregunta en clase para cuándo son.</span></div></div>`};

/* ---------- BIOLOGÍA · Unidad 2 · La salud y los factores de riesgo ---------- */
B.tema='02. El sistema inmunológico · La salud y los factores de riesgo';
B.lessons.push(
 {id:'b15', title:'La salud y los factores de riesgo', mins:10, steps:[
  {t:'recall', h:'Repaso de 1 minuto', qs:[['¿Qué es un tejido?','Conjunto de células parecidas con una función común'],['Nombra los cuatro grupos de tejidos','Conectivo, epitelial, nervioso y muscular']]},
  {t:'read', h:'Empezamos la Unidad 2', body:`La Unidad 2 se llama **La salud y la enfermedad. El sistema inmunitario**.

Empezamos por la pregunta más básica: **¿qué es estar sano?**

[[idea:Escribe el título de la unidad en tu libreta.]]`},
  {t:'read', h:'Qué es la salud', body:`La **salud** es un estado de **bienestar y equilibrio físico y emocional**.

No es solo **no estar enfermo**. Una persona sana puede llevar una **vida plena**, en lo individual y en lo social.

${say('Dilo en voz alta: salud = bienestar físico y emocional.')}`},
  {t:'quiz', q:'Según el libro, la salud es…', opts:['Solo no tener enfermedades','Bienestar y equilibrio físico y emocional'], a:1, why:'La salud incluye el bienestar físico y emocional, no solo la ausencia de enfermedad.'},
  {t:'read', h:'Qué es un factor de riesgo', body:`Un **factor de riesgo** es una **característica, condición o comportamiento** que puede **poner en peligro la salud**.

Hay **tres grupos**:

<div class="levels"><div class="level"><b>1</b><span>**Conductuales**</span></div><div class="level"><b>2</b><span>**Biológicos**</span></div><div class="level"><b>3</b><span>**Ambientales**</span></div></div>`},
  {t:'read', h:'1. Conductuales: lo que haces', body:`Vienen de **acciones que haces libremente**. Se pueden **cambiar** si cambias la conducta.

Ejemplos:

- el **tabaquismo** y el **alcoholismo**
- la **mala alimentación**
- el **sedentarismo**
- las **relaciones sexuales sin protección**
- **no seguir el calendario de vacunación**

[[ok:Ancla: conductual = tu conducta, tú decides.]]`},
  {t:'read', h:'2. Biológicos: lo que traes', body:`Vienen de **tu propio cuerpo**, condicionado por la **herencia genética**.

A veces su impacto **baja** si cambias el estilo de vida.

Ejemplos: la **obesidad**, la **hipertensión**, la **hiperglucemia** y el **envejecimiento**.

[[ok:Ancla: biológico = viene en tu cuerpo.]]`},
  {t:'read', h:'3. Ambientales: lo que te rodea', body:`Son **factores externos** que afectan a tu salud.

Ejemplos:

- **contaminantes** químicos, físicos y biológicos del agua y del aire
- **accidentes** de tráfico, domésticos o laborales
- el **entorno** social, laboral y familiar

[[ok:Ancla: ambiental = el ambiente de fuera.]]`},
  {t:'quiz', q:'El tabaquismo es un factor de riesgo…', opts:['Conductual','Biológico','Ambiental'], a:0, why:'El tabaco es una conducta: la persona decide si fuma o no.'},
  {t:'quiz', q:'La hipertensión es un factor de riesgo…', opts:['Biológico','Conductual'], a:0, why:'La hipertensión depende del propio cuerpo, así que es biológico.'},
  {t:'quiz', q:'La contaminación del aire es un factor de riesgo…', opts:['Ambiental','Biológico'], a:0, why:'Viene de fuera del cuerpo: es ambiental.'},
  {t:'order', h:'Une cada grupo con su ancla', q:'Toca los grupos en este orden: lo que haces, lo que traes, lo que te rodea.', items:['Conductuales','Biológicos','Ambientales']}
 ]}
);

/* Tarea de Biología: 30 oct (La salud y los factores de riesgo). Se conserva la tarea anterior al final. */
var oldTask=B.task;
B.task={id:'btask3', title:'Documento: La salud y los factores de riesgo (+ ODS 3 si tienes iPad)', due:'Antes de la próxima clase de la semana que viene', instr:'Escribe el título de la Unidad 2, lee el primer apartado y haz un documento (en libreta o en Google Presentaciones) sobre la salud y los factores de riesgo. Súbelo a Classroom en fotos o en PDF.', steps:[
  {t:'read', h:'Qué se pide', body:`El profesor ha publicado la tarea **"30.10.26: La salud y los factores de riesgo"** (Unidad 2, el sistema inmunológico).

<div class="levels"><div class="level"><b>1</b><span>Escribe el **título de la unidad** en tu libreta.</span></div><div class="level"><b>2</b><span>**Lee** el primer apartado del libro de Edelvives (o el PDF adjunto).</span></div><div class="level"><b>3</b><span>Haz un **documento** (en papel o en Google Presentaciones) sobre **la salud y los factores de riesgo**.</span></div></div>

[[warn:Fecha: antes de la próxima clase de la semana que viene (no hay fecha concreta en Classroom). Sube fotos de la libreta o un PDF a esa tarea.]]`},
  {t:'read', h:'Qué debe llevar el documento', body:`<div class="levels"><div class="level"><b>1</b><span>El **concepto de salud**.</span></div><div class="level"><b>2</b><span>El **concepto y una breve explicación de CADA factor de riesgo**.</span></div><div class="level"><b>3</b><span>**Solo si tienes iPad**: un texto breve que relacione los factores con las **metas 3.3 a 3.9** del **ODS 3**, "Salud y bienestar".</span></div></div>

[[ok:Si no tienes iPad, haz las partes 1 y 2 en la libreta. Pide el libro en papel al profesor sustituto si lo necesitas.]]`},
  {t:'example', h:'Parte 1: el concepto de salud (para comprobar)', intro:'Escríbelo con tus palabras en la libreta y luego destapa para comprobar.', steps:[
   {why:'Primero, qué es la salud.', html:`La **salud** es un estado de bienestar y equilibrio físico y emocional.`},
   {why:'Después, qué incluye.', html:`No es solo la ausencia de enfermedad. Permite a la persona llevar una vida individual y social plena y productiva.`}
  ]},
  {t:'example', h:'Parte 2: factores de riesgo (para comprobar)', intro:'Escribe el concepto y los tres grupos con un ejemplo cada uno. Luego destapa.', steps:[
   {why:'El concepto.', html:`Un **factor de riesgo** es una característica, condición o comportamiento que puede comprometer la salud de una persona.`},
   {why:'Grupo 1: conductuales.', html:`**Conductuales**: vienen de acciones que se hacen libremente y se pueden modificar si cambia la conducta. Ejemplos: tabaquismo, alcoholismo, mala alimentación, sedentarismo, relaciones sexuales sin protección, no seguir el calendario de vacunación.`},
   {why:'Grupo 2: biológicos.', html:`**Biológicos**: se deben a la fisiología del individuo y a la herencia genética. A veces su impacto se reduce si se cambia el estilo de vida. Ejemplos: obesidad, hipertensión, hiperglucemia, envejecimiento.`},
   {why:'Grupo 3: ambientales.', html:`**Ambientales**: son factores externos al individuo. Ejemplos: contaminantes químicos, físicos y biológicos del agua y del aire; accidentes de tráfico, domésticos o laborales; el entorno social, laboral y familiar.`}
  ]},
  {t:'read', h:'Parte 3 (solo con iPad): el ODS 3', body:`El **ODS 3** se llama **"Salud y bienestar"**. Las metas **3.3 a 3.9** hablan, en resumen, de:

<div class="tblwrap"><table class="tbl"><tr><th>Meta</th><th>De qué trata</th></tr><tr><td>**3.3**</td><td>Acabar con las epidemias (sida, tuberculosis, malaria...)</td></tr><tr><td>**3.4**</td><td>Reducir las muertes por enfermedades no transmisibles y cuidar la salud mental</td></tr><tr><td>**3.5**</td><td>Prevenir el abuso de drogas y alcohol</td></tr><tr><td>**3.6**</td><td>Reducir las muertes por accidentes de tráfico</td></tr><tr><td>**3.7**</td><td>Acceso a la salud sexual y reproductiva</td></tr><tr><td>**3.8**</td><td>Cobertura sanitaria para todos</td></tr><tr><td>**3.9**</td><td>Reducir las enfermedades por contaminación (aire, agua, suelo)</td></tr></table></div>

[[warn:Es un resumen. Comprueba el texto exacto en el enlace de la tarea (un.org/sustainabledevelopment/es/health).]]`},
  {t:'example', h:'Parte 3: cómo relacionarlos (ejemplo)', intro:'Une cada factor de riesgo con una meta. Escribe tu texto en el iPad y luego destapa para ver ideas.', steps:[
   {why:'Conductuales con 3.5 y 3.4.', html:`El **tabaquismo** y el **alcoholismo** se relacionan con la meta **3.5** (prevenir el abuso de sustancias). El **sedentarismo** y la **mala alimentación** se relacionan con la **3.4** (enfermedades no transmisibles).`},
   {why:'Biológicos con 3.4 y 3.8.', html:`La **hipertensión** y la **obesidad** se relacionan con la **3.4**, y con la **3.8** porque hace falta atención sanitaria.`},
   {why:'Ambientales con 3.6 y 3.9.', html:`Los **accidentes de tráfico** se relacionan con la **3.6**. La **contaminación** del agua y del aire, con la **3.9**.`}
  ]},
  {t:'read', h:'Antes de subirlo', body:`<div class="levels"><div class="level"><b>✔</b><span>Está el **título de la unidad** en la libreta.</span></div><div class="level"><b>✔</b><span>Aparece el **concepto de salud**.</span></div><div class="level"><b>✔</b><span>Aparecen los **tres grupos** de factores, cada uno con su explicación y ejemplos.</span></div><div class="level"><b>✔</b><span>Con iPad: está el texto sobre las **metas 3.3 a 3.9**.</span></div><div class="level"><b>✔</b><span>Lo has subido a Classroom (**fotos** de la libreta o **PDF**).</span></div></div>`},
  {t:'read', h:'Sigue pendiente de la Unidad 1', body:`Esta tarea es la nueva, pero **no se ha borrado la anterior**.

Abajo la tienes tal como estaba: **célula vegetal** y **esquemas y mapas conceptuales de la Unidad 1** (se suben el día del examen, fecha sin confirmar).`}
 ].concat(oldTask&&oldTask.steps?oldTask.steps:[])};
})();
