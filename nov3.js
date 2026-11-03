/* ===== Ampliación 3 nov: Geografía (Tema 2) · comentario de noticias ===== */
(function(){
var G=SUBJECTS.geo;
var prev=G.task;

G.lessons.push(
 {id:'g18', title:'Comentar una noticia en 3 párrafos', mins:8, steps:[
  {t:'recall', h:'Repaso de 1 minuto', qs:[['¿Cuántos países forman la UE y cómo se llama su moneda?','27 países y el euro'],['¿Cuál es la capital de la UE?','Bruselas']]},
  {t:'read', h:'Comentar es explicar, no copiar', body:`Comentar una noticia es **contar qué dice y por qué importa**. No vale copiar frases del texto.

Piensa en explicarle la noticia a un amigo que no la ha leído.

[[idea:Comentar = explicar con tus palabras + aclarar los términos + decir por qué importan.]]`},
  {t:'read', h:'Un párrafo por cada paso', body:`<div class="levels"><div class="level"><b>1</b><span>**Qué cuenta**: resume la noticia con tus palabras.</span></div><div class="level"><b>2</b><span>**Qué significan** los términos marcados.</span></div><div class="level"><b>3</b><span>**Por qué importan**: qué hacen y qué papel juegan.</span></div></div>

Cada comentario lleva **tres párrafos**, uno por paso.`},
  {t:'quiz', q:'¿Qué va en el párrafo 2?', opts:['Un resumen de la noticia','La explicación de los términos marcados','Tu opinión sobre el periódico'], a:1, why:'El párrafo 2 explica los términos en negrita. El resumen va en el párrafo 1.'},
  {t:'example', h:'Ejemplo con una noticia inventada', intro:`Noticia de ejemplo (inventada): "El **Pleno** del Ayuntamiento aprobó construir un carril bici hasta el instituto."`, steps:[
    {why:'Párrafo 1: qué cuenta, con tus palabras.', html:`El Ayuntamiento ha decidido hacer un carril para bicicletas que llegue hasta el instituto.`},
    {why:'Párrafo 2: qué significa el término marcado.', html:`El **Pleno** es la reunión de todos los concejales. Allí votan las decisiones importantes del municipio.`},
    {why:'Párrafo 3: por qué importa, qué papel juega.', html:`El Pleno es importante porque sin su voto la obra no se puede aprobar. Decide por todo el pueblo.`}
  ]},
  {t:'example', h:'Ahora tú: otra noticia inventada', intro:`Hazlo en el cuaderno y luego destapa. Noticia (inventada): "La **Junta de Portavoces** pidió más autobuses para el barrio."`, steps:[
    {why:'Párrafo 1: qué cuenta.', html:`Los representantes de los grupos políticos han pedido que pasen más autobuses por el barrio.`},
    {why:'Párrafo 2: el término marcado.', html:`La **Junta de Portavoces** reúne a una persona de cada grupo político para organizar el trabajo. Habla en nombre de su grupo.`},
    {why:'Párrafo 3: por qué importa.', html:`Importa porque es el sitio donde los grupos se ponen de acuerdo antes de votar y pueden proponer mejoras.`}
  ]},
  {t:'order', h:'Pon los pasos en orden', q:'Toca los pasos en el orden en que los escribes.', items:['Resumir la noticia con mis palabras','Explicar los términos marcados','Razonar por qué importan']}
 ]},

 {id:'g19', title:'Quién hace qué: Parlamento, Gobierno y jueces', mins:8, steps:[
  {t:'recall', h:'Repaso de 1 minuto', qs:[['¿Cuáles son los 3 párrafos de un comentario de noticia?','Qué cuenta, qué significan los términos, por qué importan'],['¿Se puede copiar frases del texto?','No: hay que explicarlo con tus palabras']]},
  {t:'read', h:'Tres oficios distintos', body:`En un país, tres grupos de instituciones hacen trabajos distintos:

<div class="levels"><div class="level"><b>1</b><span>**Hacer las leyes**: los parlamentos.</span></div><div class="level"><b>2</b><span>**Gobernar y aplicar**: los gobiernos.</span></div><div class="level"><b>3</b><span>**Juzgar**: los jueces y tribunales.</span></div></div>

[[ok:Truco: parlamento = taller de leyes · gobierno = quien dirige · juzgado = árbitro.]]`},
  {t:'quiz', q:'¿Quién se encarga de juzgar si algo es legal?', opts:['Un juzgado o tribunal','Un parlamento','El gobierno'], a:0, why:'Juzgar es el trabajo de los jueces y tribunales. Los parlamentos hacen leyes.'},
  {t:'read', h:'Dos niveles: España y Andalucía', body:`Hay instituciones **para toda España** y otras **para Andalucía**:

<div class="tblwrap"><table class="tbl"><tr><th></th><th>España</th><th>Andalucía</th></tr><tr><td>Hacen leyes</td><td>Congreso de los Diputados</td><td>Parlamento de Andalucía</td></tr><tr><td>Gobiernan</td><td>Gobierno de España</td><td>Consejo de Gobierno de la Junta</td></tr><tr><td>Juzgan</td><td>Tribunales de toda España</td><td>TSJA (tribunal superior de Andalucía)</td></tr></table></div>`},
  {t:'order', h:'Ordena por oficio', q:'Toca primero la institución que hace leyes, luego la que gobierna y al final la que juzga.', items:['Parlamento de Andalucía','Consejo de Gobierno','Juzgado de lo Social']},
  {t:'quiz', q:'Una proposición de ley es…', opts:['Una propuesta de ley que se presenta en un parlamento','Una sentencia de un juez'], a:0, why:'Una proposición de ley es una propuesta de ley. Se presenta ante un parlamento, que decide si la aprueba.'},
  {t:'input', q:'¿Qué institución andaluza dirige el gobierno de la Junta? (tres palabras)', a:['consejo de gobierno','el consejo de gobierno'], hint:'Empieza por "Consejo de…".', why:'El Consejo de Gobierno es el órgano que reúne al presidente y a los consejeros de la Junta.'},
  {t:'read', h:'Cuidado con una palabra', body:`[[warn:En la noticia 3 aparece escrito "Parlament Andaluz". Es el **Parlamento de Andalucía**.]]

Puedes escribir "Parlamento de Andalucía" en tu comentario.`}
 ]},

 {id:'g20', title:'Los términos de las tres noticias', mins:8, steps:[
  {t:'recall', h:'Repaso de 1 minuto', qs:[['¿Quién hace las leyes?','Los parlamentos'],['¿Quién juzga?','Los jueces y tribunales']]},
  {t:'read', h:'Justicia: tres palabras', body:`<div class="levels"><div class="level"><b>1</b><span>**Juzgado de lo Social**: juzga conflictos de **trabajo** (por ejemplo, despidos).</span></div><div class="level"><b>2</b><span>**TSJA**: Tribunal Superior de Justicia de Andalucía. Revisa lo que decidió un juzgado.</span></div><div class="level"><b>3</b><span>**Recurrir**: pedir a un tribunal superior que revise una decisión.</span></div></div>

${say('Dilo en voz alta: recurrir es pedir que lo revise otro tribunal.')}`},
  {t:'quiz', q:'Un despido de trabajadores lo juzga un…', opts:['Juzgado de lo Social','Parlamento'], a:0, why:'Los conflictos de trabajo van al Juzgado de lo Social.'},
  {t:'read', h:'Política: cuatro palabras', body:`<div class="levels"><div class="level"><b>1</b><span>**Consejo de Gobierno**: el gobierno de la Junta de Andalucía. Aprueba decretos y proyectos.</span></div><div class="level"><b>2</b><span>**Congreso de los Diputados**: el parlamento de toda España. Debate y vota leyes.</span></div><div class="level"><b>3</b><span>**Parlamento de Andalucía**: el parlamento de Andalucía.</span></div><div class="level"><b>4</b><span>**Proposición de ley**: una propuesta de ley que presenta un grupo del parlamento.</span></div></div>`},
  {t:'quiz', q:'El Congreso de los Diputados es el parlamento de…', opts:['Toda España','Solo Andalucía'], a:0, why:'El Congreso es nacional. El de Andalucía es el Parlamento de Andalucía.'},
  {t:'read', h:'Dinero: financiación', body:`**Financiación** es el dinero que se pone para pagar algo.

En la noticia 3, la **financiación anual del Estado** es el dinero que el Estado daría cada año a Andalucía para pagar las gafas gratis.

[[idea:Anual = cada año. Estado = el Gobierno central, el de toda España.]]`},
  {t:'input', q:'Si algo se paga "de forma anual", ¿cada cuánto se paga? (una palabra)', a:['año','cada año','anualmente','al año'], hint:'Anual viene de "año".', why:'Anual = cada año.'}
 ]}
);

/* Tarea principal actual de Geografía */
var viejos=(prev&&prev.steps)?prev.steps:[];
G.task={id:'gtask3', title:'Tema 2: comentario de tres noticias + vocabulario con imágenes (jueves) + infografía de la UE', due:'Sin fecha de entrega en Classroom. El jueves 5 de noviembre hay ejercicio con nota del vocabulario con imágenes', instr:'Tarea 1 Tema 2: comentar tres noticias (PDF "Comentario de noticias. Andalucía"), 3 párrafos por noticia. Además, acabar el vocabulario con imágenes (todos lo hacen; el jueves hay ejercicio con nota) y la infografía de la UE.', steps:[
  {t:'read', h:'Qué se pide', body:`Esta semana hay **tres cosas**:

<div class="levels"><div class="level"><b>1</b><span>**Tarea 1 Tema 2**: comentar tres noticias sobre Andalucía. Tres párrafos por noticia.</span></div><div class="level"><b>2</b><span>**Vocabulario con imágenes**: acabarlo. El **jueves 5 de noviembre** hay ejercicio con nota. Todo el mundo lo hace.</span></div><div class="level"><b>3</b><span>**Infografía de la UE** (por parejas), como ya estaba.</span></div></div>

[[warn:La tarea 1 y el vocabulario no tienen fecha de entrega en Classroom. Pregunta cuándo se entrega la tarea 1.]]`},
  {t:'read', h:'Cómo se comenta cada noticia', body:`Cada noticia lleva **tres párrafos**:

<div class="levels"><div class="level"><b>1</b><span>Explica con **tus palabras** qué cuenta.</span></div><div class="level"><b>2</b><span>Explica los **términos marcados** en negrita y subrayados.</span></div><div class="level"><b>3</b><span>Razona **por qué importan**: qué hacen y qué papel juegan.</span></div></div>

Antes, haz las lecciones **g18, g19 y g20**.`},
  {t:'example', h:'Noticia 1 · Tívoli: los despidos', intro:`Noticia: el TSJA confirma que la empresa del parque de atracciones Tívoli (Benalmádena, cerrado desde 2020) podía despedir a toda la plantilla. Los términos marcados: **TSJA**, **Juzgado de lo Social**, **recurrida**. Compruébalo después de escribir el tuyo.`, steps:[
    {why:'Párrafo 1: qué cuenta.', html:`Un juzgado de Málaga dijo que la empresa del parque Tívoli podía despedir a todos sus trabajadores, porque el parque está cerrado desde 2020. Los representantes de los trabajadores no estuvieron de acuerdo y pidieron que lo revisara un tribunal superior. El TSJA ha confirmado la decisión del juzgado.`},
    {why:'Párrafo 2: los términos marcados.', html:`El **Juzgado de lo Social** es el tribunal que resuelve los conflictos de trabajo, como los despidos. El **TSJA** es el Tribunal Superior de Justicia de Andalucía, que revisa lo que decide un juzgado. Si una decisión se **recurre**, se pide a un tribunal superior que la vuelva a mirar.`},
    {why:'Párrafo 3: por qué importan.', html:`Estos tribunales son importantes porque protegen los derechos de las personas trabajadoras y de las empresas. Si los trabajadores no están de acuerdo con el primer juez, pueden recurrir. Así se asegura que la decisión final se revise.`}
  ]},
  {t:'example', h:'Noticia 2 · Menos burocracia', intro:`Noticia: la Junta aprobará un decreto para que crear una empresa sea más fácil, con menos trámites administrativos. Término marcado: **Consejo de Gobierno**. Haz el tuyo y luego destapa.`, steps:[
    {why:'Párrafo 1: qué cuenta.', html:`El gobierno de Andalucía quiere que abrir una empresa sea más fácil y rápido. Para ello va a quitar trámites y papeleo. Con esto espera atraer más inversión a Andalucía.`},
    {why:'Párrafo 2: el término marcado.', html:`El **Consejo de Gobierno** es el órgano que dirige la Junta de Andalucía. Lo forman el presidente y los consejeros, y se reúne para aprobar decretos y proyectos.`},
    {why:'Párrafo 3: por qué importa.', html:`Es importante porque es quien decide cómo funciona la administración andaluza. Si aprueba este decreto, a las personas que quieran crear una empresa les costará menos hacerlo.`}
  ]},
  {t:'example', h:'Noticia 3 · Gafas gratis para menores', intro:`Noticia: la Junta apoya llevar al Congreso una propuesta de ley para que las gafas sean gratis para menores. Términos marcados: **Consejo de Gobierno**, **Congreso de los Diputados**, **Proposición de Ley**, **Parlament Andaluz**, **financiación anual por parte del Estado a Andalucía**. Haz el tuyo y luego destapa.`, steps:[
    {why:'Párrafo 1: qué cuenta.', html:`Un grupo del Parlamento de Andalucía propuso que los productos ópticos y de salud visual, como las gafas, se incluyan en la sanidad pública. La Junta está de acuerdo en llevar esa propuesta al Congreso. Para pagarlo, el Estado tendría que dar dinero a Andalucía cada año.`},
    {why:'Párrafo 2: los términos marcados.', html:`El **Consejo de Gobierno** es el gobierno de la Junta. El **Parlamento de Andalucía** (en el texto, "Parlament Andaluz") es donde se hacen las leyes andaluzas. El **Congreso de los Diputados** es el parlamento de toda España. Una **proposición de ley** es una propuesta de ley presentada por un grupo del parlamento. La **financiación anual del Estado** es el dinero que el Estado daría cada año para pagarlo.`},
    {why:'Párrafo 3: por qué importa.', html:`Cada institución tiene su papel. El Parlamento de Andalucía propone, la Junta lo apoya y el Congreso decide si se convierte en ley para toda España. El Estado pone el dinero. Así, un tema de salud necesita varios niveles de gobierno.`}
  ]},
  {t:'read', h:'Para el ejercicio del jueves: vocabulario', body:`El jueves 5 hay **ejercicio con nota** del vocabulario con imágenes. Es **individual**: cada uno tiene su nota. Si todos aprobáis, hay **0,25 puntos más**.

Repasa las lecciones **g14 a g17** (relieve, aguas, costa, fondo del mar y riesgos). Después de cada una, tapa la palabra y **di en voz alta qué es**.

${say('Dilo en voz alta: epicentro, hipocentro, pleamar, bajamar.')}`},
  {t:'quiz', q:'En tu comentario de noticias, ¿qué hay que hacer con las frases del texto?', opts:['Copiarlas','Explicarlas con mis palabras'], a:1, why:'Comentar es explicar con tus palabras, no copiar.'},
  {t:'read', h:'Antes de entregar', body:`<div class="levels"><div class="level"><b>✔</b><span>Cada noticia tiene **3 párrafos**.</span></div><div class="level"><b>✔</b><span>El párrafo 1 está con **mis palabras**.</span></div><div class="level"><b>✔</b><span>He explicado **todos los términos marcados**.</span></div><div class="level"><b>✔</b><span>He dicho **por qué importan**.</span></div><div class="level"><b>✔</b><span>He repasado el vocabulario para el jueves.</span></div></div>`},
  {t:'read', h:'Sigue pendiente: infografía y vocabulario del relieve', body:`Las pantallas siguientes son de la tarea anterior (**infografía de la UE** por parejas y **vocabulario del relieve** en un documento de Google). Siguen en marcha.`}
].concat(viejos)};
})();
