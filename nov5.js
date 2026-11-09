/* ===== Ampliación 9 nov: Geografía · Tema 2 definitivo "Los Estados del Mundo" (PDF de 10 págs) y Actividad 1: resumen del tema ===== */
(function(){
var G=SUBJECTS.geo;

G.tema=`Tema 2 · Los Estados del Mundo (el Estado, democracias, organización territorial)`;
G.lessons.push(
 {id:'g21', title:`El Estado: territorio, población y poder`, mins:10, steps:[
  {t:'recall', h:`Repaso de 1 minuto`, qs:[[`¿Qué poder aprueba las leyes?`,`El legislativo: el Parlamento`],[`¿Qué poder aplica las leyes y administra el país?`,`El ejecutivo: el Gobierno`]]},
  {t:'read', h:`Qué es un Estado`, body:`Piensa en un club con **sede**, **socios** y **normas** que mandan sobre todos los socios.

Un **Estado** es lo mismo, pero a lo grande: la **unidad política y administrativa superior** que rige un **territorio**. Todos los habitantes están **sometidos a su autoridad**.

${say(`Dilo en voz alta: Estado = territorio + población + poder.`)}`},
  {t:'read', h:`Las tres piezas del Estado`, body:`<div class="levels"><div class="level"><b>1</b><span>**Territorio**: la zona sobre la que manda, con **fronteras** claras y reconocidas.</span></div><div class="level"><b>2</b><span>**Población**: las personas que viven allí. Se rigen por **el mismo gobierno y las mismas leyes**.</span></div><div class="level"><b>3</b><span>**Poder**: dicta **leyes** y tiene **instituciones** para hacerlas cumplir.</span></div></div>

Además tiene **símbolos**: himno, bandera, capital y, casi siempre, moneda.`},
  {t:'quiz', q:`¿Cuál NO es una pieza del Estado?`, opts:[`Un equipo de fútbol`,`El territorio`,`La población`], a:0, why:`Las tres piezas son territorio, población y poder. Un equipo de fútbol no es parte del Estado.`},
  {t:'read', h:`La población: derechos y obligaciones`, body:`Los **ciudadanos** tienen **derechos** que el Estado debe respetar.

También tienen **obligaciones**, como **pagar impuestos**. Quien no las cumple sufre una **sanción**.

El poder del Estado se ve en sus instituciones:

- la **policía**, para mantener el orden;
- el **ejército**, para defenderse de agresiones de fuera;
- el **cuerpo diplomático**, para las relaciones con otros países;
- los **funcionarios**, que hacen el trabajo diario.`},
  {t:'quiz', q:`¿Qué institución se ocupa de defender al Estado de agresiones exteriores?`, opts:[`El ejército`,`La policía`], a:0, why:`La policía mantiene el orden dentro. El ejército defiende de agresiones de fuera.`},
  {t:'read', h:`Hasta dónde llega el territorio`, body:`El territorio no es solo la tierra que pisas.

<div class="tblwrap"><table class="tbl"><tr><th>Parte</th><th>Qué abarca</th></tr><tr><td>**Aguas territoriales**</td><td>Desde la costa hasta unas **200 millas** (unos 370 km) mar adentro</td></tr><tr><td>**Espacio aéreo**</td><td>El cielo sobre el territorio: los aviones de otros países piden permiso</td></tr><tr><td>**Suelo y subsuelo**</td><td>Y los recursos que hay debajo</td></tr><tr><td>**Embajadas y consulados**</td><td>Se consideran territorio del país que representan: **inviolables**</td></tr><tr><td>**Barcos y aviones militares**</td><td>Rige la autoridad del país de su **bandera**</td></tr></table></div>

[[warn:La policía de un país no puede entrar en una embajada sin permiso del embajador.]]`},
  {t:'quiz', q:`Un barco de guerra de un país entra en un puerto extranjero. ¿Qué autoridad rige a bordo?`, opts:[`La del país de su bandera`,`La del puerto donde está`], a:0, why:`Según las normas internacionales, en barcos y aviones militares rige el país de su bandera.`},
  {t:'read', h:`Cómo se trazan las fronteras`, body:`Hay tres tipos de criterios.

<div class="tblwrap"><table class="tbl"><tr><th>Criterio</th><th>Ejemplos</th></tr><tr><td>**Naturales**</td><td>relieve, ríos, lagos, mares</td></tr><tr><td>**Humanos**</td><td>hechos históricos (conquistas, donaciones, ventas), culturales (lenguas, identidades), intereses locales, criterios económicos</td></tr><tr><td>**Artificiales**</td><td>formas geométricas, meridianos y paralelos</td></tr></table></div>

[[ok:Ancla: natural = la pone la naturaleza. Humano = lo decidimos las personas. Artificial = regla y compás sobre el mapa.]]

Las fronteras **cambian** con la historia y aún hoy hay **disputas fronterizas**.`},
  {t:'example', h:`Ejemplo: ¿qué tipo de frontera es?`, intro:`Un río separa dos países. Mira cómo se decide.`, steps:[
   {why:`Pregúntate: ¿quién ha puesto esa línea?`, html:`La **naturaleza**: es un río.`},
   {why:`Los ríos están en la lista de los naturales.`, html:`Frontera **natural**.`}
  ]},
  {t:'example', h:`Ahora tú: una frontera que sigue un paralelo`, intro:`Hazlo en el cuaderno y luego destapa.`, steps:[
   {why:`¿Sigue un río o una montaña, o es una línea dibujada con coordenadas?`, html:`Es una línea de **coordenadas geográficas**.`},
   {why:`Los meridianos y paralelos están en el grupo de las artificiales.`, html:`Frontera **artificial**.`}
  ]}
 ]},
 {id:'g22', title:`Para qué sirve el Estado: funciones y Estado de bienestar`, mins:10, steps:[
  {t:'recall', h:`Repaso de 1 minuto`, qs:[[`¿Cuáles son las tres piezas de un Estado?`,`Territorio, población y poder`],[`¿Qué tipos de criterios se usan para trazar fronteras?`,`Naturales, humanos y artificiales`]]},
  {t:'read', h:`Las funciones del Estado`, body:`Un Estado hace **muchas cosas** a la vez.

<div class="levels"><div class="level"><b>1</b><span>Mantiene el **orden público** dentro de su territorio.</span></div><div class="level"><b>2</b><span>**Defiende** el territorio y a los ciudadanos.</span></div><div class="level"><b>3</b><span>Establece **relaciones internacionales** (embajadas, organismos).</span></div><div class="level"><b>4</b><span>**Elabora leyes** para que haya convivencia.</span></div><div class="level"><b>5</b><span>Proporciona **servicios**: educación, sanidad, transporte.</span></div><div class="level"><b>6</b><span>**Regula la economía** y las relaciones laborales.</span></div></div>`},
  {t:'quiz', q:`Un Estado construye hospitales y colegios públicos. ¿Qué función cumple?`, opts:[`Proporciona servicios esenciales`,`Establece relaciones internacionales`], a:0, why:`Sanidad y educación son los servicios esenciales de la lista.`},
  {t:'quiz', q:`Un Estado firma un acuerdo comercial con otro país. ¿Qué función es?`, opts:[`Relaciones internacionales`,`Orden público`], a:0, why:`Los intercambios comerciales entre países entran en las relaciones internacionales.`},
  {t:'read', h:`Cuando el Estado falla`, body:`Los Estados **no siempre** cumplen sus funciones.

A veces no son capaces de **defenderse** y otro país los invade. A veces las relaciones internacionales **fracasan**.

Y en algunos Estados, **oprimen a sus propios ciudadanos**: represión política, medios de comunicación controlados y detenciones arbitrarias. Entonces el Estado es **la fuente del conflicto**.

[[idea:Un Estado puede ser quien protege o quien amenaza. Por eso importa cómo es.]]`},
  {t:'read', h:`El Estado de bienestar`, body:`En el siglo XX los Estados añadieron una función más: intervenir en la **economía** y la **sociedad** para que todos tengan una **vida digna** y haya **menos desigualdad**.

Eso es el **Estado de bienestar** (también **Estado social**).

Con el dinero de los **impuestos** ofrece:

- sanidad y educación **gratuitas**;
- **subsidios**: ayuda económica en una situación especial y por un tiempo;
- **pensiones** para jubilados;
- un **salario mínimo**: por debajo es ilegal contratar.

${say(`Dilo en voz alta: impuestos de todos, servicios para todos.`)}`},
  {t:'quiz', q:`Una persona se queda sin trabajo y recibe una ayuda durante unos meses. Eso es un…`, opts:[`Subsidio`,`Impuesto`], a:0, why:`Un subsidio es una ayuda económica que da el Estado en una situación especial y durante un tiempo.`},
  {t:'read', h:`Dónde existe`, body:`El Estado de bienestar solo existe en **países desarrollados** y es más fuerte en **Europa**.

Los demás Estados **no tienen recursos** para pagar ni los servicios más básicos a la mayoría de la población.

El **presupuesto español de 2010** muestra en qué se gasta:

<div class="tblwrap"><table class="tbl"><tr><th>Gasto</th><th>%</th></tr><tr><td>**Gasto social** (pensiones, vivienda, desempleo...)</td><td>51,6</td></tr><tr><td>Transferencias a otras Administraciones</td><td>21</td></tr><tr><td>Deuda pública</td><td>6,6</td></tr><tr><td>Actuaciones productivas (I+D+i, infraestructuras)</td><td>6,3</td></tr><tr><td>Servicios públicos básicos (justicia, defensa, seguridad)</td><td>6,2</td></tr><tr><td>Otras actuaciones económicas</td><td>4,9</td></tr><tr><td>Resto</td><td>3,4</td></tr></table></div>`},
  {t:'input', q:`¿Qué porcentaje del presupuesto de 2010 fue gasto social? (solo el número)`, a:['51,6','51.6'], hint:`Es la fila más grande de la tabla.`, why:`El gasto social fue el 51,6 %: más de la mitad del presupuesto.`},
  {t:'example', h:`Ejemplo: ¿Estado de bienestar o no?`, intro:`Un país con pensiones, sanidad gratuita y salario mínimo. Mira cómo se decide.`, steps:[
   {why:`Busca si el Estado interviene para reducir desigualdades.`, html:`Sí: da **pensiones**, **sanidad gratuita** y fija un **salario mínimo**.`},
   {why:`Eso coincide con la definición.`, html:`Es un **Estado de bienestar**.`}
  ]},
  {t:'example', h:`Ahora tú: un país sin recursos para sanidad básica`, intro:`Hazlo en el cuaderno y luego destapa.`, steps:[
   {why:`¿Puede pagar los servicios esenciales a la mayoría?`, html:`No: **carece de recursos**.`},
   {why:`Entonces no cumple la condición.`, html:`**No** es un Estado de bienestar.`}
  ]}
 ]},
 {id:'g23', title:`Democracias y dictaduras`, mins:12, steps:[
  {t:'recall', h:`Repaso de 1 minuto`, qs:[[`¿Qué es un Estado de bienestar?`,`El que usa los impuestos para dar servicios y reducir desigualdades`],[`¿Quién aprueba las leyes: Parlamento, Gobierno o jueces?`,`El Parlamento`]]},
  {t:'read', h:`Qué significa democracia`, body:`La palabra viene del griego: **demos** = pueblo y **kratos** = gobierno.

**Democracia = gobierno del pueblo.** Las decisiones de los gobiernos deben ser aceptadas por los ciudadanos, que **toman parte** en ellas.

Para que un Estado sea democrático necesita **tres cosas**:

<div class="levels"><div class="level"><b>1</b><span>Los ciudadanos **participan** en el gobierno.</span></div><div class="level"><b>2</b><span>Hay **separación de poderes**.</span></div><div class="level"><b>3</b><span>Hay **Estado de derecho**.</span></div></div>`},
  {t:'read', h:`Elecciones de verdad`, body:`Como somos muchos, los ciudadanos **eligen representantes**. Para que sea democrático:

- **Todos los mayores de edad** pueden **votar**, sin importar su sexo ni su situación económica.
- Cualquiera puede **presentarse** si respeta las normas.
- Se puede **exponer el programa libremente**, sin censura.
- Se celebran **periódicamente** (en España, cada cuatro años) para que nadie se perpetúe en el poder.
- Se garantiza la **limpieza de los resultados**.

Quien pierde pasa a la **oposición** y puede criticar al gobierno con libertad.`},
  {t:'quiz', q:`Las elecciones se celebran cada cuatro años. ¿Para qué sirve eso?`, opts:[`Para que nadie se perpetúe en el poder`,`Para ahorrar dinero`], a:0, why:`Que haya elecciones periódicas impide que unas personas se queden en el poder para siempre.`},
  {t:'read', h:`Separación de poderes`, body:`En una democracia el poder se **reparte** para que ninguna persona controle todo.

<div class="tblwrap"><table class="tbl"><tr><th>Poder</th><th>Quién</th><th>Qué hace</th></tr><tr><td>**Legislativo**</td><td>Parlamento</td><td>Aprueba las leyes y controla al Gobierno</td></tr><tr><td>**Ejecutivo**</td><td>Gobierno</td><td>Aplica las leyes y administra el país</td></tr><tr><td>**Judicial**</td><td>Jueces</td><td>Vela por que se cumplan las leyes</td></tr></table></div>

[[ok:Ancla: cada poder vigila a los otros dos, como tres amigos que se cuidan entre sí.]]`},
  {t:'read', h:`El Estado de derecho`, body:`En un **Estado de derecho** las leyes las cumplen **todos**, también quienes mandan.

La ley máxima es la **Constitución**: define cómo es el Estado y recoge los **derechos y deberes** de los ciudadanos.

Si un gobierno vulnera tus derechos, puedes **recurrir a los jueces** para que lo corrijan.`},
  {t:'quiz', q:`Un gobierno vulnera el derecho de una persona. ¿A quién puede recurrir?`, opts:[`A los jueces`,`Al propio gobierno que lo vulneró`], a:0, why:`En un Estado de derecho los jueces corrigen los abusos, incluso los del Gobierno.`},
  {t:'read', h:`Qué es una dictadura`, body:`En una **dictadura**, una persona o un grupo concentra **todos los poderes**. Puede ser el ejército, un partido, un grupo étnico o líderes religiosos.

A menudo llegan por la fuerza: un **golpe de Estado** (un pequeño grupo toma el poder) o una **revolución** (levantamiento popular).

- Los ciudadanos **no participan** en el gobierno.
- El gobierno **no respeta más leyes** que las suyas.
- No hay instituciones que defiendan a los ciudadanos.

[[warn:Existen las falsas democracias: hay elecciones, pero solo puede presentarse un partido o se manipulan los resultados.]]`},
  {t:'read', h:`El mapa de la democracia`, body:`El **Índice de Democracia 2020** (The Economist) clasifica **167 países**:

<div class="tblwrap"><table class="tbl"><tr><th>Régimen</th><th>Países</th></tr><tr><td>Democracias plenas</td><td>23</td></tr><tr><td>Democracias imperfectas</td><td>52</td></tr><tr><td>Regímenes híbridos</td><td>35</td></tr><tr><td>Regímenes autoritarios</td><td>57</td></tr></table></div>

La mayor parte del mundo **no es una democracia plena**.`},
  {t:'quiz', q:`Un país hace elecciones, pero solo deja presentarse a un partido. Es una…`, opts:[`Falsa democracia`,`Democracia plena`], a:0, why:`Si solo puede presentarse un partido, no hay elecciones libres: es una dictadura encubierta.`},
  {t:'read', h:`Los derechos humanos`, body:`El **10 de diciembre de 1948** la ONU aprobó la **Declaración Universal de Derechos Humanos**.

Recoge los derechos de **toda persona**: a la **vida**, la **libertad**, la **seguridad**, la **igualdad**, la **educación**, el **trabajo**, la libertad de **expresión**, de **reunión**, de **residencia** y de **circulación**.

Casi todos los países la han firmado, pero **muchos siguen vulnerando** estos derechos.`},
  {t:'order', h:`Ordena`, q:`Toca en orden las tres cosas que necesita un Estado democrático.`, items:[`Participación de los ciudadanos`,`Separación de poderes`,`Estado de derecho`]}
 ]},
 {id:'g24', title:`Estados laicos, confesionales y teocracias; monarquías y repúblicas`, mins:8, steps:[
  {t:'recall', h:`Repaso de 1 minuto`, qs:[[`¿Qué es una dictadura?`,`Una persona o grupo concentra todos los poderes`],[`¿Qué documento recoge los derechos de toda persona, aprobado por la ONU en 1948?`,`La Declaración Universal de Derechos Humanos`]]},
  {t:'read', h:`El papel de la religión`, body:`Otra forma de clasificar los Estados es según el lugar que ocupa la **religión**.

<div class="tblwrap"><table class="tbl"><tr><th>Tipo</th><th>Cómo es</th></tr><tr><td>**Laico**</td><td>**Separación total** entre Estado y religión. Las leyes no se basan en ninguna doctrina. Cada ciudadano elige su religión o ninguna.</td></tr><tr><td>**Confesional**</td><td>Hay una **religión oficial** con grandes privilegios. Algunos son democráticos (Dinamarca, Grecia, Reino Unido, Suecia). La mayoría no.</td></tr><tr><td>**Teocracia**</td><td>Hay una religión oficial, los **libros sagrados son la ley** y los religiosos gobiernan o tienen enorme influencia. Las demás religiones están prohibidas o restringidas.</td></tr></table></div>

[[ok:Ancla: laico = separados. Confesional = una religión con privilegios. Teocracia = la religión manda.]]`},
  {t:'quiz', q:`Los libros sagrados son la ley y los religiosos gobiernan. Es un Estado…`, opts:[`Teocrático`,`Laico`], a:0, why:`Cuando la religión manda y sus libros son la ley, es una teocracia.`},
  {t:'quiz', q:`Las leyes no se basan en ninguna religión y cada persona elige la suya. Es un Estado…`, opts:[`Laico`,`Confesional`], a:0, why:`Hay separación total entre Estado y religión: laico.`},
  {t:'read', h:`Monarquías y repúblicas`, body:`Ahora mira quién es el **jefe del Estado**.

- **Monarquía**: el jefe es un **rey**. Tiene el cargo **por derecho de nacimiento** y lo transmite a sus hijos. Puede ser democrática o dictatorial.
- **República**: el jefe es un **presidente**. En las democráticas lo **eligen los ciudadanos**. En las dictaduras lo eligen los **grupos que controlan el poder**.

[[ok:Ancla: monarquía = por herencia. República = presidente.]]`},
  {t:'quiz', q:`El jefe del Estado es un rey que heredó el cargo de su madre. Es una…`, opts:[`Monarquía`,`República`], a:0, why:`Un cargo por derecho de nacimiento es propio de una monarquía.`},
  {t:'example', h:`Ejemplo: clasificar un Estado`, intro:`Un Estado con presidente elegido por los ciudadanos y varios partidos libres. Mira cómo se decide.`, steps:[
   {why:`Primero, el jefe del Estado.`, html:`Es un **presidente**: **república**.`},
   {why:`Después, cómo se elige.`, html:`Lo eligen los ciudadanos: república **democrática**.`}
  ]},
  {t:'example', h:`Ahora tú: un rey que gobierna sin elecciones`, intro:`Hazlo en el cuaderno y luego destapa.`, steps:[
   {why:`¿Cómo llega el jefe al cargo?`, html:`Por herencia: **monarquía**.`},
   {why:`¿Hay elecciones libres?`, html:`No: es una monarquía **dictatorial**.`}
  ]}
 ]},
 {id:'g25', title:`Cómo se organiza un Estado: centralizado y descentralizado (España)`, mins:12, steps:[
  {t:'recall', h:`Repaso de 1 minuto`, qs:[[`¿Cuál es el jefe del Estado en una república?`,`El presidente`],[`¿Y en una monarquía?`,`Un rey, por derecho de nacimiento`]]},
  {t:'read', h:`Dividir para gobernar mejor`, body:`Un Estado grande es difícil de administrar desde un solo sitio. Por eso se divide en **unidades territoriales** más pequeñas.

En **España** de menor a mayor:

<div class="levels"><div class="level"><b>1</b><span>**Municipios**: ciudades y pueblos con un ayuntamiento.</span></div><div class="level"><b>2</b><span>**Provincias**: varios municipios juntos.</span></div><div class="level"><b>3</b><span>**Comunidades Autónomas**: varias provincias juntas.</span></div></div>

En otros países se llaman **departamentos**, **cantones**, **regiones**...`},
  {t:'read', h:`Quién decide qué`, body:`Hay dos tipos de instituciones.

- **Estatales**: deciden sobre **todo el territorio**: el parlamento nacional, el gobierno del país y los tribunales superiores.
- **Regionales y locales**: deciden solo en **su zona** (región, provincia, municipio).

[[idea:Las decisiones las toman los que están más cerca del problema y lo conocen mejor.]]`},
  {t:'read', h:`Centralizado o descentralizado`, body:`<div class="tblwrap"><table class="tbl"><tr><th>Estado centralizado</th><th>Estado descentralizado</th></tr><tr><td>Las instituciones locales y regionales **no tienen autonomía**: dependen de la Administración central.</td><td>Las regiones tienen **instituciones propias** (parlamento, gobierno, tribunales) elegidas por sus ciudadanos.</td></tr><tr><td>Los funcionarios los elige la Administración central.</td><td>El Estado mantiene el **poder máximo**: hay leyes comunes para todo el territorio.</td></tr><tr><td>Ejemplo: **Francia**</td><td>Ejemplo: **España**</td></tr></table></div>

En los descentralizados la Constitución define las **competencias**: las materias en que cada región o municipio tiene poder (educación, sanidad, transportes...).`},
  {t:'quiz', q:`Las regiones tienen su propio parlamento y su propio gobierno. Es un Estado…`, opts:[`Descentralizado`,`Centralizado`], a:0, why:`Instituciones propias elegidas por los ciudadanos de la región: es descentralizado.`},
  {t:'read', h:`España: 17 Comunidades y 2 Ciudades Autónomas`, body:`España se divide en **17 Comunidades Autónomas** y **2 Ciudades Autónomas** (Ceuta y Melilla).

Algunas materias son **competencia exclusiva del Estado**, por ejemplo:

- nacionalidad, extranjería y asilo;
- relaciones internacionales;
- defensa y Fuerzas Armadas;
- moneda, banca y seguros;
- Hacienda general y deuda del Estado;
- tráfico, correos y telecomunicaciones;
- títulos académicos y profesionales;
- convocatoria de referéndum.`},
  {t:'quiz', q:`¿Quién decide la moneda y la defensa en España?`, opts:[`El Estado`,`Cada Comunidad Autónoma`], a:0, why:`La moneda y la defensa son competencias exclusivas del Estado.`},
  {t:'read', h:`El ayuntamiento y la Comunidad`, body:`<div class="tblwrap"><table class="tbl"><tr><th></th><th>Municipio</th><th>Comunidad Autónoma</th></tr><tr><td>**Quién representa**</td><td>**Pleno**: concejales elegidos por los ciudadanos</td><td>**Asamblea**: diputados autonómicos elegidos por los ciudadanos</td></tr><tr><td>**Quién gobierna**</td><td>**Alcalde** + **Junta de Gobierno** (la designa el alcalde)</td><td>**Consejo de Gobierno**: **presidente** (lo elige la Asamblea) + **consejeros** (los elige el presidente)</td></tr><tr><td>**Funciones**</td><td>Controlar al gobierno, planes urbanísticos, presupuesto, tributos; el alcalde dirige la administración y dicta bandos</td><td>Aprobar leyes y presupuestos y controlar al Consejo de Gobierno; el Consejo ejerce el poder ejecutivo</td></tr></table></div>`},
  {t:'example', h:`Ejemplo: de lo pequeño a lo grande`, intro:`El pueblo de Mijares está en la provincia de Ávila. Mira cómo se sube.`, steps:[
   {why:`Empieza por la unidad más pequeña.`, html:`**Municipio**: Mijares.`},
   {why:`Los municipios se juntan en provincias.`, html:`**Provincia**: Ávila.`},
   {why:`Las provincias se agrupan en comunidades.`, html:`**Comunidad Autónoma**: Castilla y León.`}
  ]},
  {t:'example', h:`Ahora tú: Palencia`, intro:`Palencia es una provincia de Castilla y León. Hazlo en el cuaderno y luego destapa.`, steps:[
   {why:`¿En qué se divide una provincia?`, html:`En **municipios**.`},
   {why:`¿En qué comunidad está?`, html:`En la **Comunidad Autónoma** de Castilla y León.`}
  ]}
 ]}
);

/* Tarea de Geografía: 9 nov, Actividad 1. Resumen del tema (entrega vie 13 nov, 23:59). Se conservan las anteriores al final. */
var oldG=G.task;
G.task={id:'gtask4', title:`Actividad 1: resumen del Tema 2 (Los Estados del Mundo)`, due:`Viernes 13 de noviembre, 23:59`, instr:`Haz el resumen del tema del documento TEMA 2. DEFINITIVO LOS ESTADOS DEL MUNDO (10 páginas, 9 apartados). Classroom no indica el formato: pregunta a la profesora si va en la libreta o se sube.`, steps:[
  {t:'read', h:`Qué se pide`, body:`La profesora ha publicado la **"Actividad 1. Resumen del tema"** y el documento **"Tema 2. Definitivo. Los Estados del Mundo"** (10 páginas).

Hay que **hacer el resumen del tema** de ese documento.

<div class="levels"><div class="level"><b>1</b><span>Lee los **9 apartados** del documento.</span></div><div class="level"><b>2</b><span>Haz un **resumen** de cada uno, con tus palabras.</span></div><div class="level"><b>3</b><span>**Entrégalo** en Classroom antes de la fecha.</span></div></div>

[[warn:Fecha de entrega: viernes 13 de noviembre, 23:59.]]
[[warn:Classroom no dice si es en la libreta o en un documento. Pregúntaselo a la profesora.]]
[[ok:Antes de empezar, haz las lecciones g21 a g25: cada una cubre unos apartados del documento.]]`},
  {t:'read', h:`Qué apartados tiene el tema`, body:`<div class="tblwrap"><table class="tbl"><tr><th>N.º</th><th>Apartado</th><th>Lección</th></tr><tr><td>1</td><td>El Estado: definición y componentes</td><td>g21</td></tr><tr><td>2</td><td>Las fronteras de un Estado</td><td>g21</td></tr><tr><td>3</td><td>Las funciones del Estado</td><td>g22</td></tr><tr><td>4</td><td>El Estado de bienestar</td><td>g22</td></tr><tr><td>5</td><td>Los Estados democráticos</td><td>g23</td></tr><tr><td>6</td><td>Las dictaduras</td><td>g23</td></tr><tr><td>7</td><td>Estados laicos, confesionales y teocracias</td><td>g24</td></tr><tr><td>8</td><td>Monarquías y repúblicas</td><td>g24</td></tr><tr><td>9</td><td>La organización territorial del Estado</td><td>g25</td></tr></table></div>

[[ok:Truco: haz un apartado cada día y no lo dejes todo para el viernes.]]`},
  {t:'example', h:`Resumen apartados 1 y 2 (para comprobar)`, intro:`Escribe tu resumen en la libreta y luego destapa para comparar.`, steps:[
   {why:`Empieza por la definición.`, html:`**Estado**: unidad política y administrativa superior que rige un territorio y cuya autoridad someten a todos sus habitantes. Componentes: **territorio** (con fronteras), **población** (misma ley y gobierno) y **poder** (leyes e instituciones: policía, ejército, cuerpo diplomático, funcionarios). Símbolos: himno, bandera, capital, moneda.`},
   {why:`Después, las fronteras.`, html:`El territorio incluye **aguas territoriales** (unas 200 millas), **espacio aéreo**, **suelo y subsuelo**. Las **embajadas** son inviolables y en barcos y aviones militares rige el país de su bandera. Criterios de frontera: **naturales** (relieve, ríos, lagos, mares), **humanos** (históricos, culturales, locales, económicos) y **artificiales** (formas geométricas, meridianos y paralelos).`}
  ]},
  {t:'example', h:`Resumen apartados 3 y 4 (para comprobar)`, intro:`Hazlo en la libreta y luego destapa.`, steps:[
   {why:`Las funciones.`, html:`**Funciones**: mantener el orden público, defender el territorio, establecer relaciones internacionales, elaborar leyes, proporcionar servicios (educación, sanidad, transporte) y regular la economía. A veces el Estado falla o incluso oprime a sus ciudadanos.`},
   {why:`El bienestar.`, html:`**Estado de bienestar**: el Estado interviene en la economía y la sociedad para dar una vida digna y reducir desigualdades. Con los impuestos ofrece sanidad y educación gratuitas, subsidios, pensiones y salario mínimo. Solo existe en países desarrollados, sobre todo en Europa.`}
  ]},
  {t:'example', h:`Resumen apartados 5 y 6 (para comprobar)`, intro:`Hazlo en la libreta y luego destapa.`, steps:[
   {why:`La democracia.`, html:`**Democracia** (demos + kratos): gobierno del pueblo. Requiere **participación** de los ciudadanos (elecciones libres, periódicas y limpias; derecho a votar y presentarse), **separación de poderes** (legislativo = Parlamento, ejecutivo = Gobierno, judicial = jueces) y **Estado de derecho** (Constitución y leyes para todos).`},
   {why:`La dictadura.`, html:`**Dictadura**: una persona o grupo concentra todos los poderes, a menudo tras un golpe de Estado o una revolución. Los ciudadanos no participan y no se respetan los derechos humanos. Existen **falsas democracias**. Los derechos humanos se recogen en la Declaración Universal de 1948.`}
  ]},
  {t:'example', h:`Resumen apartados 7, 8 y 9 (para comprobar)`, intro:`Hazlo en la libreta y luego destapa.`, steps:[
   {why:`Religión.`, html:`**Laico**: separación total entre Estado y religión. **Confesional**: religión oficial con privilegios (algunos son democráticos). **Teocracia**: los libros sagrados son la ley y los religiosos gobiernan.`},
   {why:`Jefe del Estado.`, html:`**Monarquía**: jefe = rey, por derecho de nacimiento (democrática o dictatorial). **República**: jefe = presidente (elegido por los ciudadanos si es democrática).`},
   {why:`Organización territorial.`, html:`Los Estados se dividen en unidades menores (en España: municipios, provincias y Comunidades Autónomas). **Centralizado**: lo local depende de la Administración central (Francia). **Descentralizado**: las regiones tienen instituciones y **competencias** propias, pero el Estado mantiene el poder máximo (España: 17 Comunidades y 2 Ciudades Autónomas).`}
  ]},
  {t:'write', h:`Tu resumen`, q:`Escribe aquí el resumen de uno de los apartados con tus palabras. Se guarda y lo puedes copiar.`, hint:`Una idea por frase. Usa las palabras en negrita de las lecciones.`},
  {t:'read', h:`Antes de entregar`, body:`<div class="levels"><div class="level"><b>✔</b><span>Están **los 9 apartados**.</span></div><div class="level"><b>✔</b><span>Está **con tus palabras**, no copiado.</span></div><div class="level"><b>✔</b><span>Has comprobado **cómo se entrega** (libreta o Classroom).</span></div><div class="level"><b>✔</b><span>Lo has entregado **antes del viernes 13 a las 23:59**.</span></div></div>

[[idea:Este resumen te sirve también para el examen de Geografía del lunes 23 de noviembre.]]`},
  {t:'read', h:`Siguen pendientes las anteriores`, body:`Esta es la tarea nueva, pero **no se han borrado las anteriores**: el **comentario de noticias**, el **vocabulario del Tema 2** y la **infografía de la UE**.

Debajo las tienes tal como estaban.`}
 ].concat(oldG&&oldG.steps?oldG.steps:[])};

/* ATEDU: la tarea "Presentación trabajo Marruecos" cambió el 9 nov (11:41): ahora vence martes 10 nov, 20:00 */
var A=SUBJECTS.ate;
if(A&&A.task&&A.task.steps){
 A.task.due=`Presentación: martes 10 de noviembre, 20:00 (documento: jueves 29 de octubre, ya entregado)`;
 A.task.steps=[{t:'read', h:`Cambio de fecha de la presentación`, body:`En Classroom, la tarea **"Presentación trabajo Marruecos"** vence ahora **mañana, martes 10 de noviembre, a las 20:00**.

Antes decía lunes 9 a las 9:15 (en clase).

[[warn:Comprueba en Classroom si hay que subirla o solo presentarla. Si no lo tienes claro, pregúntaselo a la profesora.]]`}].concat(A.task.steps);
}
})();
