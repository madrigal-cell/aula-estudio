/* ===================== INGLÉS · Unit 1 ===================== */
SUBJECTS.ing = {
 id:'ing', name:'Inglés', color:'s2', tema:'Unit 1 · Writing: narrative essay sobre un familiar',
 lessons:[
 {id:'i1', title:'El modelo: cinco párrafos', mins:8, steps:[
  {t:'read', h:'Qué es un narrative essay', body:`Un **narrative essay** cuenta una historia o describe a una persona **con orden**.

El modelo de clase se titula **"My Grandfather, My Hero"**: habla de un abuelo.

[[idea:Tu tarea: escribir algo parecido sobre tu abuelo o abuela (u otro familiar), en el cuaderno.]]`},
  {t:'read', h:'La estructura: 5 párrafos', body:`<div class="levels"><div class="level"><b>1</b><span>**Quién es**: nombre, edad y cómo es (aspecto y carácter).</span></div><div class="level"><b>2</b><span>**Su pasado**: cómo fue su vida de joven y qué esfuerzo hizo.</span></div><div class="level"><b>3</b><span>**Una historia**: algo que te cuenta y que cambió tu forma de ver la vida.</span></div><div class="level"><b>4</b><span>**Hoy**: cómo es ahora y qué le gusta hacer.</span></div><div class="level"><b>5</b><span>**Conclusión**: por qué es tu modelo a seguir.</span></div></div>`},
  {t:'read', h:'Cada párrafo empieza con su idea', body:`En el modelo, la **primera frase** de cada párrafo dice **la idea principal**. El resto da detalles.

Ejemplo (inventado, para que veas la idea):

"My grandmother is the kindest person I know. She is seventy years old and she has a big smile."

Primera frase = idea. Después, los datos.`},
  {t:'order', h:'Ordena el essay', q:'Toca los párrafos en el orden del modelo.', items:['Quién es','Su pasado','Una historia importante','Cómo es hoy','Conclusión']},
  {t:'quiz', q:'¿Dónde va la idea principal de cada párrafo?', opts:['En la primera frase','En la última palabra'], a:0, why:'Cada párrafo empieza con una frase que resume su idea.'}
 ]},
 {id:'i2', title:'Frases útiles para contar una historia', mins:9, steps:[
  {t:'recall', h:'Repaso de 1 minuto', qs:[['¿Cuántos párrafos tiene el modelo?','5'],['¿Dónde va la idea principal?','En la primera frase']]},
  {t:'read', h:'Para el pasado', body:`<div class="tblwrap"><table class="tbl"><tr><th>Expresión</th><th>Significa</th></tr><tr><td>**when he was young**</td><td>cuando era joven</td></tr><tr><td>**used to + verbo**</td><td>solía (hacer algo antes)</td></tr><tr><td>**eventually**</td><td>al final, con el tiempo</td></tr><tr><td>**despite**</td><td>a pesar de</td></tr><tr><td>**instead of giving up**</td><td>en lugar de rendirse</td></tr></table></div>`},
  {t:'read', h:'Para hablar de hoy y concluir', body:`<div class="tblwrap"><table class="tbl"><tr><th>Expresión</th><th>Significa</th></tr><tr><td>**today / now**</td><td>hoy / ahora</td></tr><tr><td>**he loves + -ing**</td><td>le encanta (hacer algo)</td></tr><tr><td>**he always says that...**</td><td>siempre dice que...</td></tr><tr><td>**in conclusion**</td><td>en conclusión</td></tr><tr><td>**role model**</td><td>modelo a seguir</td></tr></table></div>

${say('Dilo en voz alta: In conclusion, he is my role model.')}`},
  {t:'quiz', q:'¿Qué significa "despite"?', opts:['a pesar de','por eso','antes'], a:0, why:'Despite = a pesar de.'},
  {t:'quiz', q:'¿Qué expresión usarías para hablar de un hábito del pasado?', opts:['used to','in conclusion','eventually'], a:0, why:'"Used to + verbo" habla de costumbres del pasado.'},
  {t:'input', q:'Completa: "In ______, my grandmother is my role model." (una palabra)', a:['conclusion','Conclusion'], hint:'Empieza el último párrafo.', why:'In conclusion = en conclusión.'}
 ]}
 ],
 task:{id:'itask', title:'Writing: narrative essay sobre tu abuelo/a (u otro familiar)', due:'Sin fecha en Classroom (hazlo en el cuaderno)', instr:'Elabora en tu cuaderno un writing similar al modelo "My Grandfather, My Hero", sobre tu abuelo (o, en su caso, otro familiar).', steps:[
  {t:'read', h:'Qué se pide', body:`Escribe **en tu cuaderno** un writing parecido al modelo, sobre tu **abuelo o abuela** (o, si no, otro familiar).

[[warn:En Classroom no hay fecha de entrega. Pregunta en clase para cuándo lo quieren.]]`},
  {t:'write', h:'Párrafo 1: quién es', q:'Escribe en inglés 3 frases: nombre, edad y cómo es.', hint:'My grandmother ... is ... years old. She is ...'},
  {t:'write', h:'Párrafo 2: su pasado', q:'Escribe 3 frases sobre cómo fue su vida de joven. Usa "when ... was young" o "used to".', hint:'When she was young, she used to ...'},
  {t:'write', h:'Párrafo 3: una historia', q:'Escribe 3 o 4 frases sobre algo que te cuenta y que te enseñó algo.', hint:'One story she always tells me ...'},
  {t:'write', h:'Párrafo 4: hoy', q:'Escribe 3 frases sobre cómo es hoy y qué le gusta hacer.', hint:'Today, she is ... She loves ...'},
  {t:'write', h:'Párrafo 5: conclusión', q:'Escribe 2 frases: por qué es tu modelo a seguir.', hint:'In conclusion, ... is my role model because ...'},
  {t:'read', h:'Antes de entregar', body:`<div class="levels"><div class="level"><b>✔</b><span>Tiene **5 párrafos**.</span></div><div class="level"><b>✔</b><span>Cada párrafo empieza con su **idea principal**.</span></div><div class="level"><b>✔</b><span>Usa algunas expresiones: **despite**, **eventually**, **used to**, **in conclusion**.</span></div><div class="level"><b>✔</b><span>Releído en **voz alta**: ¿suena bien?</span></div><div class="level"><b>✔</b><span>Está en el **cuaderno**.</span></div></div>`}
 ]}
};

/* ===== Ampliación 28 oct: Inglés (Unit 2 vocab) y Biología (tejidos) ===== */
(function(){
var I=SUBJECTS.ing, B=SUBJECTS.bio;

/* ---------- INGLÉS · Unit 2 · Skills and abilities ---------- */
I.tema='Unit 2 · Vocabulario: Skills and abilities (verbos y participios)';
I.lessons.push(
 {id:'i3', title:'Doce verbos y su participio', mins:10, steps:[
  {t:'recall', h:'Repaso de 1 minuto', qs:[['¿Qué significa "used to"?','Solía (hábito del pasado)'],['¿Qué significa "despite"?','A pesar de']]},
  {t:'read', h:'Qué trabajamos', body:`En la Unit 2 el vocabulario se llama **Skills and abilities** (habilidades).

Son **12 verbos**. Para cada uno hay que saber su **participio** (la forma de "has done", "has built"...).

[[idea:Participio = la forma que va después de "has" o "have".]]`},
  {t:'read', h:'Los 12 verbos', body:`<div class="tblwrap"><table class="tbl"><tr><th>Verbo</th><th>Significa</th></tr><tr><td>**build**</td><td>construir</td></tr><tr><td>**catch**</td><td>atrapar, pescar</td></tr><tr><td>**climb**</td><td>escalar</td></tr><tr><td>**design**</td><td>diseñar</td></tr><tr><td>**do**</td><td>hacer</td></tr><tr><td>**drive**</td><td>conducir</td></tr><tr><td>**learn**</td><td>aprender</td></tr><tr><td>**make**</td><td>fabricar, hacer</td></tr><tr><td>**ride**</td><td>montar (bici, caballo)</td></tr><tr><td>**sing**</td><td>cantar</td></tr><tr><td>**swim**</td><td>nadar</td></tr><tr><td>**write**</td><td>escribir</td></tr></table></div>

${say('Dilo en voz alta: build, catch, climb, design.')}`},
  {t:'read', h:'Regulares e irregulares', body:`Casi todos son **irregulares**: cambian de forma.

Solo **dos** son regulares y terminan en **-ed**:

<div class="levels"><div class="level"><b>1</b><span>design → **designed**</span></div><div class="level"><b>2</b><span>climb → **climbed**</span></div></div>

[[ok:Truco: los dos regulares son "diseñar" y "escalar". Los otros diez hay que aprenderlos.]]`},
  {t:'read', h:'Los diez irregulares', body:`<div class="tblwrap"><table class="tbl"><tr><th>Verbo</th><th>Participio</th></tr><tr><td>build</td><td>**built**</td></tr><tr><td>catch</td><td>**caught**</td></tr><tr><td>do</td><td>**done**</td></tr><tr><td>drive</td><td>**driven**</td></tr><tr><td>learn</td><td>**learnt**</td></tr><tr><td>make</td><td>**made**</td></tr><tr><td>ride</td><td>**ridden**</td></tr><tr><td>sing</td><td>**sung**</td></tr><tr><td>swim</td><td>**swum**</td></tr><tr><td>write</td><td>**written**</td></tr></table></div>`},
  {t:'quiz', q:'¿Cuál es el participio de "swim"?', opts:['swum','swimmed'], a:0, why:'Swim es irregular: swim → swum.'},
  {t:'quiz', q:'¿Cuál es el participio de "write"?', opts:['writed','written'], a:1, why:'Write es irregular: write → written.'},
  {t:'quiz', q:'¿Cuáles son los dos verbos regulares?', opts:['design y climb','build y make','sing y swim'], a:0, why:'Designed y climbed terminan en -ed.'},
  {t:'input', q:'Escribe el participio de "catch".', a:['caught'], hint:'Empieza por "c" y termina en "-ght".', why:'Catch → caught.'},
  {t:'input', q:'Escribe el participio de "ride".', a:['ridden'], hint:'Lleva dos "d".', why:'Ride → ridden.'}
 ]}
);
I.task={id:'itask2', title:'Unit 2 · Vocab 1 (Skills and abilities), en el cuaderno + writing del abuelo', due:'Sin fecha en Classroom (hazlo en el cuaderno)', instr:'Haz en tu cuaderno (sección de actividades) los ejercicios 1, 2 y 5 de las dos capturas de "Skills and abilities". Sigue pendiente el writing sobre tu abuelo/a.', steps:[
  {t:'read', h:'Qué se pide', body:`El profesor ha subido **dos capturas** del libro (página "Skills and abilities") con la nota: **"Do in your notebooks activity section"**.

<div class="levels"><div class="level"><b>1</b><span>**Ejercicio 1**: encuentra los 12 verbos en la sopa de letras.</span></div><div class="level"><b>2</b><span>**Ejercicio 2**: empareja cada participio con su verbo y rodea los dos regulares.</span></div><div class="level"><b>5</b><span>**Ejercicio 5**: completa el artículo "Amazing skills!" con la forma correcta.</span></div></div>

[[warn:No hay fecha en Classroom. Además sigue pendiente el writing del abuelo/a (mira la lección i1 e i2).]]`},
  {t:'example', h:'Ejercicio 2: empareja (para comprobar)', intro:'Hazlo primero en el cuaderno y luego destapa para comprobar.', steps:[
   {why:'Del 1 al 6.', html:`1 ride (ridden) · 2 swim (swum) · 3 catch (caught) · 4 design (designed) · 5 write (written) · 6 sing (sung)`},
   {why:'Del 7 al 12.', html:`7 drive (driven) · 8 learn (learnt) · 9 build (built) · 10 do (done) · 11 climb (climbed) · 12 make (made)`},
   {why:'Los dos regulares que hay que rodear.', html:`**designed** y **climbed**`}
  ]},
  {t:'example', h:'Ejercicio 5: el artículo (para comprobar)', intro:'Las frases son del artículo "Amazing skills!". Hazlo en el cuaderno y destapa después. Usa los verbos del recuadro: build, catch, climb, do, drive, ride, swim, write.', steps:[
   {why:'Huecos 1 a 3 (casa pequeña).', html:`1 **done** (ya está puesto) · 2 **built** · 3 **written**`},
   {why:'Huecos 4 y 5 (agua y montaña).', html:`4 **swum** · 5 **climbed**`},
   {why:'Huecos 6 a 8 (vuelta al mundo y pesca).', html:`6 **ridden** · 7 **driven** · 8 **caught**`}
  ]},
  {t:'read', h:'Antes de terminar', body:`<div class="levels"><div class="level"><b>✔</b><span>Has hecho los ejercicios **1, 2 y 5** en el cuaderno.</span></div><div class="level"><b>✔</b><span>Sabes los **12 verbos** y su participio (lección i3).</span></div><div class="level"><b>✔</b><span>Los dos regulares son **designed** y **climbed**.</span></div><div class="level"><b>✔</b><span>Pregunta en clase para cuándo es el writing del abuelo/a.</span></div></div>`}
]};

/* ---------- BIOLOGÍA · Nivel tisular: los tejidos ---------- */
B.tema='01. El ser humano · Células y tejidos';
B.lessons.push(
 {id:'b13', title:'Los tejidos: qué son y tejidos conectivos', mins:10, steps:[
  {t:'recall', h:'Repaso de 1 minuto', qs:[['Ordena: célula, órgano, tejido','Célula → tejido → órgano'],['¿Qué célula tiene pared celular y cloroplastos?','La vegetal']]},
  {t:'read', h:'Qué es un tejido', body:`Piensa en un equipo de fútbol: cada jugador es una célula y todos juegan juntos.

Un **tejido** es un **conjunto de células parecidas** que trabajan **juntas** para una función.

[[idea:Tejido = células parecidas + una función común.]]`},
  {t:'read', h:'Cuatro grupos de tejidos', body:`En el cuerpo humano hay **cuatro grupos**:

<div class="levels"><div class="level"><b>1</b><span>**Conectivos**</span></div><div class="level"><b>2</b><span>**Epitelial**</span></div><div class="level"><b>3</b><span>**Nervioso**</span></div><div class="level"><b>4</b><span>**Muscular**</span></div></div>

${say('Dilo en voz alta: conectivo, epitelial, nervioso, muscular.')}`},
  {t:'quiz', q:'¿Cuántos grupos de tejidos hay en el cuerpo humano?', opts:['Cuatro','Siete'], a:0, why:'Son cuatro: conectivo, epitelial, nervioso y muscular.'},
  {t:'read', h:'Tejidos conectivos: la idea', body:`Sus células están **separadas** y metidas en una **matriz extracelular** (un relleno entre ellas).

La matriz tiene fibras de **colágeno** y **elastina**. Su función es **unir, sostener y proteger**.

[[ok:Truco: conectivo = "conecta y sujeta" el cuerpo.]]`},
  {t:'read', h:'Cinco conectivos (1/2)', body:`<div class="tblwrap"><table class="tbl"><tr><th>Tejido</th><th>Célula</th><th>Función</th></tr><tr><td>**Conjuntivo**</td><td>fibrocitos</td><td>Forma la dermis, tendones y ligamentos</td></tr><tr><td>**Adiposo**</td><td>adipocitos</td><td>Guarda grasa: reserva de energía y aislante</td></tr><tr><td>**Cartilaginoso**</td><td>condrocitos</td><td>Forma los cartílagos: soporte</td></tr></table></div>

[[ok:Anclas: adipocito = "adiposo, grasa". Condrocito = "cartílago".]]`},
  {t:'read', h:'Cinco conectivos (2/2)', body:`<div class="tblwrap"><table class="tbl"><tr><th>Tejido</th><th>Célula</th><th>Función</th></tr><tr><td>**Sanguíneo**</td><td>eritrocitos, leucocitos y plaquetas (en un plasma líquido)</td><td>Transporta gases, nutrientes y hormonas; coagulación y defensa</td></tr><tr><td>**Óseo**</td><td>osteocitos</td><td>Forma los huesos: soporte del esqueleto</td></tr></table></div>

La sangre se fabrica en la **médula ósea roja**.`},
  {t:'quiz', q:'¿Qué célula guarda grasa?', opts:['Adipocito','Condrocito','Osteocito'], a:0, why:'Los adipocitos son las células del tejido adiposo.'},
  {t:'input', q:'¿Cómo se llaman las células del hueso? (una palabra)', a:['osteocitos','osteocito'], hint:'Empieza por "osteo-".', why:'Osteocitos: las células del tejido óseo.'},
  {t:'order', h:'Une cada tejido con su pista', q:'Toca los tejidos en este orden: grasa, cartílago, hueso.', items:['Adiposo','Cartilaginoso','Óseo']}
 ]},
 {id:'b14', title:'Tejidos epitelial, nervioso y muscular', mins:10, steps:[
  {t:'recall', h:'Repaso de 1 minuto', qs:[['¿Qué es un tejido?','Conjunto de células parecidas con una función común'],['¿Qué célula forma el hueso?','Osteocitos']]},
  {t:'read', h:'Tejido epitelial: la piel y los forros', body:`Sus células están **muy pegadas** entre sí. Forman una **barrera** entre el cuerpo y el exterior, o entre los espacios internos.

Hay dos tipos:

<div class="levels"><div class="level"><b>1</b><span>**De revestimiento**: cubre la piel (epidermis), el tubo digestivo (mucosa) y los vasos sanguíneos (endotelio).</span></div><div class="level"><b>2</b><span>**Glandular**: fabrica sustancias (glándulas).</span></div></div>`},
  {t:'read', h:'Glándulas: dos tipos', body:`Las **exocrinas** sueltan su contenido **fuera** o en cavidades del cuerpo.

Las **endocrinas** lo sueltan **a la sangre** (son las hormonas).

[[ok:Truco: exo = fuera, endo = dentro (sangre).]]`},
  {t:'quiz', q:'Una glándula que vierte hormonas a la sangre es…', opts:['Endocrina','Exocrina'], a:0, why:'Endocrina = vierte sus secreciones (hormonas) a la sangre.'},
  {t:'read', h:'Tejido nervioso', body:`Sus células son las **neuronas**. Son ramificadas y muy especializadas. Su función es **transmitir el impulso nervioso**.

Las acompañan las células de la **neuroglía**, que **protegen y nutren** a las neuronas.

${say('Dilo en voz alta: neurona transmite, neuroglía protege.')}`},
  {t:'read', h:'Tejido muscular', body:`Sus células son los **miocitos** y se **contraen**.

Hay tres tipos:

<div class="tblwrap"><table class="tbl"><tr><th>Tipo</th><th>Estriaciones</th><th>Núcleos</th><th>Contracción</th><th>Dónde</th></tr><tr><td>**Estriado cardíaco**</td><td>Sí</td><td>Uno</td><td>Rápida e involuntaria</td><td>Corazón (miocardio)</td></tr><tr><td>**Estriado esquelético**</td><td>Sí</td><td>Varios (plurinucleadas)</td><td>Rápida y voluntaria</td><td>Músculos esqueléticos</td></tr><tr><td>**Liso**</td><td>No</td><td>Uno</td><td>Lenta e involuntaria</td><td>Vísceras</td></tr></table></div>`},
  {t:'quiz', q:'¿Qué músculo se contrae de forma voluntaria?', opts:['El esquelético','El cardíaco','El liso'], a:0, why:'Solo el estriado esquelético es voluntario.'},
  {t:'quiz', q:'¿Qué músculo no tiene estriaciones?', opts:['El liso','El cardíaco'], a:0, why:'El liso no presenta estriaciones.'},
  {t:'order', h:'La función de cada tejido', q:'Toca las funciones en este orden: neurona, miocito, adipocito.', items:['Transmite el impulso nervioso','Se contrae','Guarda grasa']},
  {t:'read', h:'Para el esquema del cuaderno', body:`Tu esquema solo lleva **cuatro cosas** de cada tejido:

<div class="levels"><div class="level"><b>1</b><span>La **definición** de tejido.</span></div><div class="level"><b>2</b><span>Los **tipos** de tejido.</span></div><div class="level"><b>3</b><span>El **nombre de la célula** de cada uno.</span></div><div class="level"><b>4</b><span>La **función principal**.</span></div></div>`}
 ]}
);
})();
