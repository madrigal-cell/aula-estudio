/* ===== Ampliación 27 oct: Geografía (Tema 2) y Biología (células) ===== */
(function(){
var G=SUBJECTS.geo, B=SUBJECTS.bio;

/* ---------- GEOGRAFÍA · Tema 2: Los Estados del Mundo (la Unión Europea) ---------- */
G.tema='Tema 2 · Los Estados del Mundo (la Unión Europea) y vocabulario del relieve';
G.lessons.push(
 {id:'g8', title:'¿Qué es la Unión Europea?', mins:7, steps:[
  {t:'read', h:'Un club de países', body:`Imagina un **club** al que pertenecen 27 países europeos. Se ayudan en la economía y en la política.

La **Unión Europea (UE)** es eso: una asociación económica y política **única en el mundo**.

[[idea:UE = 27 países que comparten normas, comercio y moneda.]]`},
  {t:'read', h:'Cuatro datos para recordar', body:`<div class="levels"><div class="level"><b>1</b><span>**27** países miembros.</span></div><div class="level"><b>2</b><span>Moneda única: el **euro**.</span></div><div class="level"><b>3</b><span>Capital: **Bruselas**.</span></div><div class="level"><b>4</b><span>Según la presentación de clase, la preside **Úrsula von der Leyen**.</span></div></div>

${say('Dilo en voz alta: 27 países, euro, Bruselas.')}`},
  {t:'quiz', q:'¿Cuántos países forman la UE?', opts:['15','27','50'], a:1, why:'Son 27 países miembros.'},
  {t:'input', q:'¿Cómo se llama la moneda de la UE? (una palabra)', a:['euro','el euro'], hint:'La usas cuando pagas en una tienda.', why:'La moneda única es el euro.'},
  {t:'quiz', q:'¿Dónde está la capital de la UE?', opts:['Madrid','París','Bruselas'], a:2, why:'La capital está en Bruselas (Bélgica).'}
 ]},
 {id:'g9', title:'Los 27 países, por grupos', mins:9, steps:[
  {t:'recall', h:'Repaso de 1 minuto', qs:[['¿Cuántos países tiene la UE?','27'],['¿Cómo se llama su moneda?','El euro'],['¿Cuál es su capital?','Bruselas']]},
  {t:'read', h:'Trocea la lista: 7 grupos', body:`Memorizar 27 nombres seguidos es difícil. Mejor **7 grupos pequeños**:

<div class="tblwrap"><table class="tbl"><tr><th>Grupo</th><th>Países</th></tr><tr><td>Península Ibérica</td><td>España, Portugal</td></tr><tr><td>Los seis del principio</td><td>Francia, Alemania, Italia, Bélgica, Luxemburgo, Países Bajos</td></tr><tr><td>Norte</td><td>Dinamarca, Suecia, Finlandia, Irlanda</td></tr><tr><td>Bálticos</td><td>Estonia, Letonia, Lituania</td></tr></table></div>`},
  {t:'read', h:'Los otros tres grupos', body:`<div class="tblwrap"><table class="tbl"><tr><th>Grupo</th><th>Países</th></tr><tr><td>Centro</td><td>Polonia, Chequia (República Checa), Eslovaquia, Hungría, Austria</td></tr><tr><td>Sureste</td><td>Rumanía, Bulgaria, Croacia, Eslovenia, Grecia</td></tr><tr><td>Islas del Mediterráneo</td><td>Chipre, Malta</td></tr></table></div>

[[ok:Cuenta: 2 + 6 + 4 + 3 + 5 + 5 + 2 = 27.]]

[[warn:En la presentación aparecen como candidatos en proceso de adhesión: Macedonia, Bosnia y Andorra. Todavía NO son miembros.]]`},
  {t:'quiz', q:'¿Cuál de estos países NO está en la lista de 27?', opts:['Portugal','Reino Unido','Polonia'], a:1, why:'El Reino Unido salió de la UE (lo verás en "Fortalezas y debilidades").'},
  {t:'quiz', q:'¿Qué grupo forman Estonia, Letonia y Lituania?', opts:['Los bálticos','Los de las islas','Los seis del principio'], a:0, why:'Son los tres países bálticos.'},
  {t:'input', q:'¿Cuántos países hay en el grupo "Norte"? (número)', a:'4', hint:'Dinamarca, Suecia, Finlandia, Irlanda.', why:'Son 4.'}
 ]},
 {id:'g10', title:'Orígenes: de 6 a 27 países', mins:8, steps:[
  {t:'recall', h:'Repaso de 1 minuto', qs:[['¿Cuántos países tiene hoy la UE?','27'],['Nombra un país del grupo bálticos','Estonia, Letonia o Lituania']]},
  {t:'read', h:'¿Por qué nació?', body:`Después de la **Segunda Guerra Mundial**, Europa estaba destrozada.

La idea fue sencilla: si los países **comercian juntos**, es más difícil que vuelvan a pelear.

[[idea:La UE nació para cooperar en economía y evitar nuevas guerras.]]`},
  {t:'read', h:'Tres fechas', body:`<div class="scale"><span class="hi">1951</span><span class="hi">1957</span><span class="hi">1993</span></div>

<div class="levels"><div class="level"><b>1951</b><span>Seis países fundan la **CECA** (carbón y acero): Bélgica, Francia, Alemania Occidental, Italia, Luxemburgo y Países Bajos.</span></div><div class="level"><b>1957</b><span>**Tratado de Roma**: nacen la **CEE** (mercado común) y **EURATOM** (energía atómica).</span></div><div class="level"><b>1993</b><span>**Tratado de Maastricht**: se consolida la UE actual.</span></div></div>`},
  {t:'order', h:'Ordena la historia', q:'Toca los hechos en orden, del más antiguo al más reciente.', items:['1951: CECA','1957: Tratado de Roma','1993: Tratado de Maastricht']},
  {t:'quiz', q:'¿Cuántos países fundaron la CECA?', opts:['6','12','27'], a:0, why:'Fueron 6: los "seis del principio".'}
 ]},
 {id:'g11', title:'Las instituciones de la UE', mins:9, steps:[
  {t:'recall', h:'Repaso de 1 minuto', qs:[['¿Qué tratado de 1957 creó el mercado común?','Tratado de Roma (CEE)'],['¿Cuántos países fundaron la CECA?','6']]},
  {t:'read', h:'Seis instituciones, seis trabajos', body:`Piensa en una **ciudad**: hay vecinos que votan, un alcalde, gente que hace las normas, jueces y un banco.

<div class="tblwrap"><table class="tbl"><tr><th>Institución</th><th>Qué hace</th></tr><tr><td>**Parlamento Europeo**</td><td>Representa a los ciudadanos (se elige votando). Hace leyes, vigila y aprueba presupuestos.</td></tr><tr><td>**Consejo Europeo**</td><td>Reúne a los jefes de Estado o de gobierno. Marca las prioridades.</td></tr><tr><td>**Consejo de la UE**</td><td>Representa a los gobiernos. Aprueba leyes junto con el Parlamento.</td></tr></table></div>`},
  {t:'read', h:'Las otras tres', body:`<div class="tblwrap"><table class="tbl"><tr><th>Institución</th><th>Qué hace</th></tr><tr><td>**Comisión Europea**</td><td>Es el órgano ejecutivo. Propone las leyes y defiende los intereses de toda la UE.</td></tr><tr><td>**Tribunal de Justicia (TJUE)**</td><td>Vigila que el derecho de la UE se interprete y se aplique bien.</td></tr><tr><td>**Banco Central Europeo (BCE)**</td><td>Gestiona el euro y la política monetaria.</td></tr></table></div>

[[ok:Anclas: Parlamento = "los ciudadanos". Tribunal = "los jueces". BCE = "el banco del euro".]]`},
  {t:'quiz', q:'¿Qué institución gestiona el euro?', opts:['El Tribunal de Justicia','El Banco Central Europeo','El Parlamento Europeo'], a:1, why:'El BCE gestiona el euro y la política monetaria.'},
  {t:'quiz', q:'¿Qué institución se elige por voto directo de los ciudadanos?', opts:['El Parlamento Europeo','La Comisión Europea','El Consejo Europeo'], a:0, why:'Los ciudadanos votan a los miembros del Parlamento Europeo.'},
  {t:'quiz', q:'¿Quién vigila que se aplique bien el derecho de la UE?', opts:['El BCE','El Tribunal de Justicia','El Consejo de la UE'], a:1, why:'Es el trabajo del Tribunal de Justicia (los "jueces").'}
 ]},
 {id:'g12', title:'Objetivos de la UE y el euro', mins:9, steps:[
  {t:'recall', h:'Repaso de 1 minuto', qs:[['¿Qué institución es "el banco del euro"?','El Banco Central Europeo'],['¿Qué institución propone las leyes?','La Comisión Europea']]},
  {t:'read', h:'Cinco objetivos', body:`<div class="levels"><div class="level"><b>1</b><span>Promover la **paz**, la seguridad y los valores europeos.</span></div><div class="level"><b>2</b><span>Crear un **mercado único**: circulan libres bienes, servicios, capitales y personas.</span></div><div class="level"><b>3</b><span>**Desarrollo sostenible**: economía, justicia social y medio ambiente.</span></div><div class="level"><b>4</b><span>Garantizar los **derechos y libertades** de los ciudadanos.</span></div><div class="level"><b>5</b><span>Tener **voz en el mundo** (por ejemplo, en cambio climático).</span></div></div>`},
  {t:'read', h:'La unión monetaria: el euro', body:`La **Unión Monetaria** es compartir una misma moneda.

<div class="scale"><span class="hi">1970 Plan Werner</span><span class="hi">1986 Acta Única</span><span class="hi">1993 Maastricht</span><span class="hi">1999 euro</span></div>

El **BCE** controla el euro. Los países deben cumplir criterios de **convergencia**: controlar el déficit y la inflación.`},
  {t:'read', h:'¿Cuántos países usan el euro?', body:`La presentación dice: **20 de los 27** usan el euro, y los 7 que no son Bulgaria, Chequia, Dinamarca, Hungría, Polonia, Rumanía y Suecia.

[[warn:Ojo: Bulgaria adoptó el euro el 1 de enero de 2026. Hoy son 21 países con euro y 6 sin él. Para el examen, confirma en clase qué cifra quieren que pongas.]]`},
  {t:'quiz', q:'¿Qué significa "mercado único"?', opts:['Que solo hay una tienda','Que bienes, servicios, capitales y personas circulan libres','Que solo se usa una lengua'], a:1, why:'Mercado único = libre circulación de bienes, servicios, capitales y personas.'},
  {t:'input', q:'¿En qué año empezó a usarse el euro (según la línea del tiempo)? (número)', a:'1999', hint:'Mira la última fecha de la línea.', why:'El euro se introdujo en 1999.'}
 ]},
 {id:'g13', title:'Fortalezas y debilidades de la UE', mins:9, steps:[
  {t:'recall', h:'Repaso de 1 minuto', qs:[['Nombra dos objetivos de la UE','Paz, mercado único, derechos...'],['¿Desde qué año se usa el euro?','1999']]},
  {t:'read', h:'Fortalezas: lo que le funciona', body:`<div class="levels"><div class="level"><b>+</b><span>**Mercado único**: comercio sin barreras.</span></div><div class="level"><b>+</b><span>**Paz y estabilidad** desde su creación.</span></div><div class="level"><b>+</b><span>**Liderazgo global**: clima, derechos humanos, comercio.</span></div><div class="level"><b>+</b><span>**Diversidad cultural** y cooperación.</span></div></div>`},
  {t:'read', h:'Debilidades: lo que le cuesta', body:`<div class="levels"><div class="level"><b>–</b><span>**Desigualdades económicas** entre países ricos y menos desarrollados.</span></div><div class="level"><b>–</b><span>**Crisis políticas**, como el Brexit.</span></div><div class="level"><b>–</b><span>**Decisiones lentas**: ponerse de acuerdo 27 es complicado.</span></div><div class="level"><b>–</b><span>**Migración y fronteras**: tensiones internas.</span></div></div>`},
  {t:'read', h:'El Brexit en 3 datos', body:`- **23 junio 2016**: el Reino Unido votó en referéndum si seguía en la UE.
- Resultado: **51,9 %** salir, **48,1 %** quedarse.
- **31 enero 2020**: salió oficialmente.

[[idea:Brexit = British + exit ("salida británica").]]`},
  {t:'quiz', q:'¿Cuál es una DEBILIDAD de la UE?', opts:['Paz y estabilidad','Decisiones lentas con 27 países','Mercado único'], a:1, why:'Ponerse de acuerdo entre 27 países puede ser lento: es una debilidad.'},
  {t:'quiz', q:'¿Qué ganó en el referéndum del Brexit?', opts:['Salir de la UE','Quedarse en la UE'], a:0, why:'Ganó salir, con un 51,9 %.'}
 ]},
 {id:'g14', title:'Vocabulario del relieve 1: capas y relieve continental', mins:9, steps:[
  {t:'read', h:'Tres capas, tres materiales', body:`La vida humana ocurre donde se encuentran tres capas de la Tierra:

<div class="levels"><div class="level"><b>1</b><span>**Litosfera**: la parte sólida, las rocas.</span></div><div class="level"><b>2</b><span>**Hidrosfera**: toda el agua (mares, ríos, hielo).</span></div><div class="level"><b>3</b><span>**Atmósfera**: la capa de aire.</span></div></div>

[[ok:Truco: litos = piedra, hidro = agua, atmos = vapor/aire.]]`},
  {t:'read', h:'Elevaciones: de menos a más', body:`<div class="tblwrap"><table class="tbl"><tr><th>Palabra</th><th>Idea</th></tr><tr><td>**Colina**</td><td>Elevación pequeña y suave.</td></tr><tr><td>**Montaña**</td><td>Elevación grande y de pendiente fuerte.</td></tr><tr><td>**Sierra**</td><td>Montañas en fila, con cumbres como los dientes de una sierra.</td></tr><tr><td>**Serranía**</td><td>Conjunto de sierras, más bajas e irregulares.</td></tr><tr><td>**Cordillera**</td><td>Gran cadena de montañas muy larga.</td></tr><tr><td>**Sistema montañoso**</td><td>Conjunto de cordilleras o sierras relacionadas.</td></tr></table></div>`},
  {t:'read', h:'Terreno llano y hundido', body:`<div class="tblwrap"><table class="tbl"><tr><th>Palabra</th><th>Idea</th></tr><tr><td>**Llanura**</td><td>Terreno plano y poco elevado.</td></tr><tr><td>**Meseta**</td><td>Terreno llano pero **alto** (como una mesa).</td></tr><tr><td>**Depresión**</td><td>Terreno más **bajo** que lo que lo rodea.</td></tr></table></div>

${say('Dilo en voz alta: llanura baja, meseta alta, depresión hundida.')}`},
  {t:'quiz', q:'Un terreno plano pero situado a mucha altura es una…', opts:['Llanura','Meseta','Depresión'], a:1, why:'Meseta = llana y alta. La llanura es plana y baja.'},
  {t:'quiz', q:'¿Qué capa de la Tierra es el agua?', opts:['Litosfera','Hidrosfera','Atmósfera'], a:1, why:'Hidro significa agua: hidrosfera.'},
  {t:'quiz', q:'Una gran cadena de montañas muy larga es una…', opts:['Colina','Cordillera','Meseta'], a:1, why:'Cordillera = cadena larga de montañas.'}
 ]},
 {id:'g15', title:'Vocabulario del relieve 2: aguas continentales y ríos', mins:10, steps:[
  {t:'recall', h:'Repaso de 1 minuto', qs:[['¿Qué es una meseta?','Terreno llano y alto'],['¿Qué es la hidrosfera?','Toda el agua de la Tierra']]},
  {t:'read', h:'Agua dulce en el continente', body:`<div class="tblwrap"><table class="tbl"><tr><th>Palabra</th><th>Idea</th></tr><tr><td>**Lago**</td><td>Gran masa de agua en una depresión.</td></tr><tr><td>**Laguna**</td><td>Lago pequeño y poco profundo.</td></tr><tr><td>**Río**</td><td>Corriente de agua continua que acaba en otro río, un lago o el mar.</td></tr><tr><td>**Arroyo**</td><td>Corriente pequeña, a veces solo cuando llueve.</td></tr></table></div>`},
  {t:'read', h:'Las partes de un río', body:`<div class="tblwrap"><table class="tbl"><tr><th>Palabra</th><th>Idea</th></tr><tr><td>**Cauce**</td><td>El "camino" excavado por donde corre el agua.</td></tr><tr><td>**Caudal**</td><td>La **cantidad** de agua que lleva.</td></tr><tr><td>**Curso alto**</td><td>Zona del nacimiento: mucha pendiente, el agua erosiona.</td></tr><tr><td>**Curso medio**</td><td>Pendiente más suave.</td></tr><tr><td>**Curso bajo**</td><td>Cerca de la desembocadura: terreno casi llano.</td></tr><tr><td>**Meandro**</td><td>Curva cerrada que hace el río.</td></tr><tr><td>**Cuenca**</td><td>Todo el terreno cuyas aguas van a ese río.</td></tr></table></div>

[[ok:Cauce = el camino. Caudal = cuánta agua. No los mezcles.]]`},
  {t:'read', h:'El régimen del río', body:`El **régimen** es cómo cambia el caudal a lo largo del año.

- **Regular**: casi no cambia. **Irregular**: cambia mucho.
- **Pluvial**: se alimenta de la **lluvia**. **Nival**: se alimenta de la **nieve** derretida.
- **Crecida**: sube el caudal. Si el agua se sale del cauce: **desbordamiento**.
- **Estiaje**: el caudal más bajo del año (suele ser en verano).`},
  {t:'quiz', q:'¿Qué mide el caudal?', opts:['Lo largo que es el río','La cantidad de agua que lleva','La altura de la montaña'], a:1, why:'Caudal = cantidad de agua.'},
  {t:'quiz', q:'Un río que se alimenta sobre todo de nieve derretida es…', opts:['Nival','Pluvial'], a:0, why:'Nival viene de nieve; pluvial, de lluvia.'},
  {t:'quiz', q:'El estiaje es…', opts:['El momento de más agua','El momento de menos agua','Una curva del río'], a:1, why:'Estiaje = caudal mínimo.'}
 ]},
 {id:'g16', title:'Vocabulario del relieve 3: la costa', mins:10, steps:[
  {t:'recall', h:'Repaso de 1 minuto', qs:[['¿Qué es el caudal?','La cantidad de agua de un río'],['¿Qué es la cuenca?','El terreno que vierte al río']]},
  {t:'read', h:'Donde acaba el río: la desembocadura', body:`<div class="tblwrap"><table class="tbl"><tr><th>Tipo</th><th>Idea</th></tr><tr><td>**Estuario**</td><td>Desembocadura ancha, en forma de embudo.</td></tr><tr><td>**Delta**</td><td>Los sedimentos forman terreno en forma de triángulo o abanico.</td></tr><tr><td>**Ría**</td><td>Valle de un río inundado por el mar.</td></tr></table></div>`},
  {t:'read', h:'Formas de la costa (1)', body:`<div class="tblwrap"><table class="tbl"><tr><th>Palabra</th><th>Idea</th></tr><tr><td>**Playa**</td><td>Franja de arena o gravas junto al mar.</td></tr><tr><td>**Acantilado**</td><td>Costa alta y cortada, casi vertical.</td></tr><tr><td>**Cabo**</td><td>Punta de tierra que entra en el mar.</td></tr><tr><td>**Bahía**</td><td>Entrada de mar en la costa, de boca ancha.</td></tr><tr><td>**Golfo**</td><td>Entrada de mar muy grande, mayor que una bahía.</td></tr></table></div>`},
  {t:'read', h:'Formas de la costa (2)', body:`<div class="tblwrap"><table class="tbl"><tr><th>Palabra</th><th>Idea</th></tr><tr><td>**Península**</td><td>Tierra rodeada de agua **menos por un lado**.</td></tr><tr><td>**Istmo**</td><td>Franja **estrecha** de tierra que une dos tierras grandes.</td></tr><tr><td>**Isla**</td><td>Tierra rodeada de agua **por todos lados**.</td></tr><tr><td>**Archipiélago**</td><td>Conjunto de islas.</td></tr><tr><td>**Albufera**</td><td>Laguna junto al mar, separada de él por una barra de arena.</td></tr><tr><td>**Marisma**</td><td>Terreno bajo, inundable, junto a la costa.</td></tr></table></div>

[[ok:Península = "casi isla". Isla = agua por todos lados.]]`},
  {t:'quiz', q:'Una costa alta y cortada casi en vertical es un…', opts:['Acantilado','Delta','Golfo'], a:0, why:'Acantilado = costa alta y cortada.'},
  {t:'quiz', q:'Tierra rodeada de agua por todas partes menos por una…', opts:['Isla','Península','Istmo'], a:1, why:'Península: una sola zona la une al continente.'},
  {t:'quiz', q:'Un conjunto de islas se llama…', opts:['Archipiélago','Cabo','Bahía'], a:0, why:'Archipiélago = conjunto de islas.'}
 ]},
 {id:'g17', title:'Vocabulario 4: fondo del mar, riesgos y océanos', mins:11, steps:[
  {t:'recall', h:'Repaso de 1 minuto', qs:[['Isla frente a península','Isla: agua por todos lados. Península: unida por un lado'],['¿Qué es un golfo?','Entrada de mar muy grande']]},
  {t:'read', h:'El relieve del fondo del mar', body:`<div class="levels"><div class="level"><b>1</b><span>**Plataforma continental**: fondo poco profundo, prolongación del continente.</span></div><div class="level"><b>2</b><span>**Talud continental**: cuesta fuerte hacia el fondo.</span></div><div class="level"><b>3</b><span>**Llanura abisal**: fondo plano y muy profundo.</span></div><div class="level"><b>4</b><span>**Dorsal oceánica**: cordillera submarina.</span></div><div class="level"><b>5</b><span>**Fosa marina**: la zona más honda, estrecha y alargada.</span></div></div>`},
  {t:'read', h:'Riesgos: volcanes', body:`El calor de la Tierra mueve las **placas tectónicas**. Eso causa terremotos y erupciones.

- **Falla**: grieta de la corteza donde los bloques se desplazan.
- **Volcán**: abertura por donde sale el magma.
- **Cráter**: la boca. **Cono**: el montículo. **Chimenea**: el conducto interior.
- **Erupción**: la salida de lava, gases y cenizas.`},
  {t:'read', h:'Riesgos: terremotos', body:`<div class="levels"><div class="level"><b>1</b><span>**Hipocentro**: el punto **interior** donde empieza el temblor.</span></div><div class="level"><b>2</b><span>**Epicentro**: el punto de la **superficie** justo encima.</span></div><div class="level"><b>3</b><span>**Ondas sísmicas**: las vibraciones que se reparten desde ahí.</span></div></div>

Un **maremoto** es un terremoto bajo el mar. Puede provocar un **tsunami**: olas gigantes.`},
  {t:'read', h:'Continentes y océanos', body:`Seis **continentes**: Asia, América, África, Europa, Oceanía y Antártida.

- **Océano**: enorme masa de agua salada. **Mar**: masa de agua salada más pequeña.
- **Oleaje**: las olas, movidas por el viento.
- **Mareas**: el nivel del mar sube (**pleamar**) y baja (**bajamar**).
- **Corrientes marinas**: "ríos" de agua dentro del mar.`},
  {t:'quiz', q:'El punto de la superficie justo encima de donde nace un terremoto es el…', opts:['Hipocentro','Epicentro','Cráter'], a:1, why:'Epicentro = en la superficie. Hipocentro = dentro de la Tierra.'},
  {t:'quiz', q:'La marea alta se llama…', opts:['Pleamar','Bajamar'], a:0, why:'Pleamar = marea alta. Bajamar = marea baja.'},
  {t:'quiz', q:'Una cordillera submarina es una…', opts:['Fosa marina','Dorsal oceánica','Plataforma continental'], a:1, why:'Dorsal oceánica = cordillera bajo el mar.'}
 ]}
);

/* Tarea principal actual de Geografía */
G.task={id:'gtask2', title:'Tema 2: infografía de la UE (por parejas) y vocabulario del relieve (por grupos)', due:'Sin fecha de entrega en Classroom (se hace en clase)', instr:'Presentación "Los Estados del Mundo" (la UE): hacer por parejas una infografía que recoja la idea de lo que es la UE. Además, el vocabulario del relieve con imágenes, por grupos, en un documento de Google.', steps:[
  {t:'read', h:'Qué se pide', body:`Hay **dos** cosas:

<div class="levels"><div class="level"><b>1</b><span>Una **infografía por parejas** que recoja la idea de lo que es la UE.</span></div><div class="level"><b>2</b><span>El **vocabulario del relieve** con una imagen por cada palabra en negrita. Se hace **en grupo**, en un documento de Google.</span></div></div>

[[warn:En Classroom no hay fecha de entrega. Pregunta en clase para cuándo la quieren.]]`},
  {t:'read', h:'Una infografía = poco texto + dibujos', body:`Una infografía cuenta una idea con **imágenes, colores y pocas palabras**. Cada bloque lleva un **título** y un **dibujo**.

Un plan sencillo, con los 5 bloques de la presentación:

<div class="levels"><div class="level"><b>1</b><span>**Qué es**: 27 países, euro, Bruselas.</span></div><div class="level"><b>2</b><span>**Orígenes**: 1951, 1957, 1993.</span></div><div class="level"><b>3</b><span>**Instituciones**: las 6, con un icono cada una.</span></div><div class="level"><b>4</b><span>**Objetivos y euro**.</span></div><div class="level"><b>5</b><span>**Fortalezas y debilidades**: dos columnas (+ y –).</span></div></div>`},
  {t:'read', h:'Consejos de diseño', body:`- Pocas palabras en cada bloque: **máximo una frase**.
- Usa **3 colores** como mucho y repítelos.
- Lo más importante, **lo más grande**.
- Un mapa de Europa con los 27 países coloreados queda muy bien.

${say('Pregunta a tu pareja: ¿se entiende en 10 segundos?')}`},
  {t:'quiz', q:'¿Qué le pasa a una infografía con muchísimo texto?', opts:['Que se entiende mejor','Que deja de ser una infografía y cuesta leerla'], a:1, why:'Una infografía usa poco texto y mucha imagen.'},
  {t:'read', h:'Para el vocabulario del relieve', body:`Usa las lecciones **g14 a g17**: ahí están todas las palabras con una explicación corta.

Para cada palabra: escribe **tu definición con tus palabras** y busca una **imagen clara** (mejor un dibujo o foto con la parte señalada).`},
  {t:'read', h:'Antes de entregar', body:`<div class="levels"><div class="level"><b>✔</b><span>La infografía tiene los 5 bloques.</span></div><div class="level"><b>✔</b><span>Poco texto y bien legible.</span></div><div class="level"><b>✔</b><span>Cada palabra en negrita del vocabulario tiene definición **e imagen**.</span></div><div class="level"><b>✔</b><span>Está en el documento de Google del grupo.</span></div></div>`}
]};

/* ---------- BIOLOGÍA · fichas de las células ---------- */
B.lessons.push(
 {id:'b9', title:'Célula procariota (la bacteria)', mins:9, steps:[
  {t:'recall', h:'Repaso de 1 minuto', qs:[['¿Qué significa procariota?','Antes del núcleo: no tiene núcleo definido'],['Un virus, ¿es una célula?','No']]},
  {t:'read', h:'Una casa sin habitaciones', body:`La célula **procariota** es como una casa **sin habitaciones**: todo está en un solo espacio.

No tiene **núcleo verdadero** ni **orgánulos con membrana** (como mitocondrias o aparato de Golgi). El ejemplo de clase es una **bacteria**.

[[idea:Procariota = sin núcleo y sin orgánulos con membrana.]]`},
  {t:'read', h:'Las partes, de fuera hacia dentro', body:`<div class="levels"><div class="level"><b>1</b><span>**Cápsula**: capa externa que protege y ayuda a pegarse a superficies.</span></div><div class="level"><b>2</b><span>**Pared celular**: da forma y rigidez.</span></div><div class="level"><b>3</b><span>**Membrana plasmática**: regula lo que entra y sale.</span></div><div class="level"><b>4</b><span>**Citoplasma**: medio acuoso del interior.</span></div></div>`},
  {t:'read', h:'Lo que hay dentro', body:`<div class="tblwrap"><table class="tbl"><tr><th>Parte</th><th>Qué hace</th></tr><tr><td>**Nucleoide**</td><td>Aquí está el ADN circular, **sin membrana**.</td></tr><tr><td>**Ribosomas**</td><td>Fabrican proteínas (más pequeños que los eucariotas).</td></tr><tr><td>**Plásmidos**</td><td>ADN extra; puede dar ventajas, como resistir antibióticos.</td></tr><tr><td>**Pili o fimbrias**</td><td>Pelitos cortos para pegarse a superficies.</td></tr><tr><td>**Flagelo**</td><td>Cola larga para moverse.</td></tr></table></div>

[[ok:Flagelo = el motor. Nucleoide = ADN "suelto".]]`},
  {t:'quiz', q:'¿Dónde está el ADN de una bacteria?', opts:['En un núcleo con membrana','En el nucleoide, sin membrana'], a:1, why:'La procariota no tiene núcleo verdadero: el ADN está en el nucleoide.'},
  {t:'quiz', q:'¿Qué estructura permite a la bacteria moverse?', opts:['Pili','Flagelo','Cápsula'], a:1, why:'El flagelo es la cola que da movimiento.'},
  {t:'input', q:'¿Cómo se llaman los trocitos de ADN extra que pueden dar resistencia a antibióticos? (una palabra)', a:['plásmidos','plasmidos','plásmido','plasmido'], hint:'Empieza por "plás...".', why:'Son los plásmidos.'}
 ]},
 {id:'b10', title:'Célula eucariota animal: dibujo y ficha', mins:10, steps:[
  {t:'recall', h:'Repaso de 1 minuto', qs:[['¿Qué le falta a una célula procariota?','Núcleo y orgánulos con membrana'],['¿Dónde está el ADN de la bacteria?','En el nucleoide']]},
  {t:'read', h:'Cómo dibujarla paso a paso', body:`<div class="levels"><div class="level"><b>1</b><span>Dibuja un óvalo grande: la **membrana plasmática**.</span></div><div class="level"><b>2</b><span>Dentro, en el centro, un círculo: el **núcleo**, y dentro otro pequeño: el **nucléolo**.</span></div><div class="level"><b>3</b><span>Alrededor del núcleo, sacos y laminitas: los **retículos** y el **Golgi**.</span></div><div class="level"><b>4</b><span>Añade **mitocondrias**, **ribosomas** (puntitos), **vesículas** y **centriolos**.</span></div><div class="level"><b>5</b><span>Rotula con flechas rectas. Todo el interior es **citoplasma**.</span></div></div>`},
  {t:'read', h:'La ficha: 11 partes', body:`<div class="tblwrap"><table class="tbl"><tr><th>Parte</th><th>Función</th></tr><tr><td>Membrana plasmática</td><td>Delimita y protege la célula; regula entrada y salida.</td></tr><tr><td>Núcleo</td><td>Contiene el ADN y dirige la célula.</td></tr><tr><td>Nucléolo</td><td>Produce ribosomas.</td></tr><tr><td>Ribosomas</td><td>Fabrican proteínas.</td></tr><tr><td>Retículo rugoso</td><td>Síntesis y transporte de proteínas.</td></tr><tr><td>Retículo liso</td><td>Síntesis de lípidos.</td></tr></table></div>`},
  {t:'read', h:'La ficha: las otras partes', body:`<div class="tblwrap"><table class="tbl"><tr><th>Parte</th><th>Función</th></tr><tr><td>Aparato de Golgi</td><td>Modifica, empaqueta y distribuye proteínas y lípidos.</td></tr><tr><td>Mitocondrias</td><td>Producen energía.</td></tr><tr><td>Centriolos (centrosoma)</td><td>Participan en la división celular.</td></tr><tr><td>Vesículas</td><td>Almacenan y transportan sustancias.</td></tr><tr><td>Citoplasma</td><td>Medio donde están los orgánulos y ocurren las reacciones químicas.</td></tr></table></div>

[[warn:En la ficha escribe solo los orgánulos que salen en la infografía de clase.]]`},
  {t:'quiz', q:'¿Qué orgánulo produce ribosomas?', opts:['El nucléolo','El Golgi','La vesícula'], a:0, why:'El nucléolo produce ribosomas.'},
  {t:'quiz', q:'¿Qué orgánulo participa en la división celular?', opts:['Los centriolos','Las mitocondrias'], a:0, why:'Los centriolos (centrosoma) participan en la división.'},
  {t:'quiz', q:'El retículo que fabrica lípidos es el…', opts:['Rugoso','Liso'], a:1, why:'Liso = lípidos. Rugoso = proteínas (lleva ribosomas).'}
 ]},
 {id:'b11', title:'Célula eucariota vegetal: dibujo y ficha', mins:10, steps:[
  {t:'recall', h:'Repaso de 1 minuto', qs:[['¿Qué hacen las mitocondrias?','Producen energía'],['¿Qué hace el nucléolo?','Produce ribosomas']]},
  {t:'read', h:'Como la animal, pero con extras', body:`La célula **vegetal** tiene casi todo lo de la animal. Además tiene **cinco cosas propias** en la infografía:

<div class="levels"><div class="level"><b>1</b><span>**Pared celular**: da forma, soporte y protección (celulosa).</span></div><div class="level"><b>2</b><span>**Cloroplastos**: hacen la fotosíntesis.</span></div><div class="level"><b>3</b><span>**Vacuola central**: guarda agua, nutrientes y desechos. Mantiene la turgencia.</span></div><div class="level"><b>4</b><span>**Peroxisomas**: reacciones de oxidación y degradación de sustancias tóxicas.</span></div><div class="level"><b>5</b><span>**Plasmodesmos**: canales de comunicación entre células vegetales.</span></div></div>`},
  {t:'read', h:'Cómo dibujarla', body:`<div class="levels"><div class="level"><b>1</b><span>Dibuja un **rectángulo** con esquinas redondeadas: la **pared celular**. Otro rectángulo justo dentro: la **membrana**.</span></div><div class="level"><b>2</b><span>La **vacuola central** ocupa un gran espacio. Dibújala grande.</span></div><div class="level"><b>3</b><span>Añade núcleo con nucléolo, retículos, Golgi, ribosomas y mitocondrias.</span></div><div class="level"><b>4</b><span>Pon varios **cloroplastos** (verdes) pegados a la pared.</span></div></div>`},
  {t:'read', h:'La ficha: lo común', body:`<div class="tblwrap"><table class="tbl"><tr><th>Parte</th><th>Función</th></tr><tr><td>Membrana plasmática</td><td>Delimita la célula y regula el paso de sustancias.</td></tr><tr><td>Núcleo y nucléolo</td><td>ADN y dirección / produce ribosomas.</td></tr><tr><td>Retículo rugoso y liso</td><td>Proteínas / lípidos.</td></tr><tr><td>Ribosomas</td><td>Síntesis de proteínas.</td></tr><tr><td>Aparato de Golgi</td><td>Modifica, empaqueta y distribuye.</td></tr><tr><td>Mitocondrias</td><td>Energía mediante la respiración celular.</td></tr><tr><td>Citoplasma</td><td>Medio de los orgánulos y de las reacciones.</td></tr></table></div>`},
  {t:'quiz', q:'¿Qué orgánulo hace la fotosíntesis?', opts:['Mitocondria','Cloroplasto','Vacuola'], a:1, why:'Los cloroplastos transforman energía solar en materia orgánica.'},
  {t:'quiz', q:'¿Qué estructura da forma y soporte a la célula vegetal?', opts:['La pared celular','El nucléolo'], a:0, why:'La pared celular (de celulosa).'},
  {t:'quiz', q:'¿Qué son los plasmodesmos?', opts:['Canales que comunican células vegetales','Pelos para moverse'], a:0, why:'Son canales de comunicación y transporte entre células vegetales.'}
 ]},
 {id:'b12', title:'Animal frente a vegetal: la ficha comparativa', mins:9, steps:[
  {t:'recall', h:'Repaso de 1 minuto', qs:[['Nombra dos orgánulos solo de la vegetal','Cloroplastos, vacuola central, pared celular...'],['¿Qué hace el centriolo?','Participa en la división celular']]},
  {t:'read', h:'Tres columnas', body:`Según las infografías de clase:

<div class="tblwrap"><table class="tbl"><tr><th>En las dos</th><th>Solo animal</th><th>Solo vegetal</th></tr><tr><td>Membrana plasmática, núcleo, nucléolo, ribosomas, retículo rugoso, retículo liso, Golgi, mitocondrias, citoplasma</td><td>Centriolos, vesículas</td><td>Pared celular, cloroplastos, vacuola central, peroxisomas, plasmodesmos</td></tr></table></div>

[[ok:Truco: la vegetal es la que "tiene pared, hace comida y guarda agua en grande".]]`},
  {t:'quiz', q:'¿Cuál de estas partes está en las DOS células?', opts:['Cloroplasto','Mitocondria','Centriolo'], a:1, why:'Las mitocondrias están en la animal y en la vegetal.'},
  {t:'quiz', q:'¿Cuál es solo de la célula animal (en las infografías)?', opts:['Centriolos','Pared celular','Cloroplastos'], a:0, why:'Los centriolos aparecen solo en la animal.'},
  {t:'quiz', q:'Una célula con pared celular y cloroplastos es…', opts:['Animal','Vegetal','Procariota'], a:1, why:'Pared + cloroplastos = vegetal.'},
  {t:'order', h:'Cuenta la historia', q:'Toca en orden: de la célula más simple a las dos eucariotas.', items:['Procariota (bacteria)','Eucariota animal','Eucariota vegetal']}
 ]}
);

/* Tarea principal actual de Biología */
B.task={id:'btask2', title:'Células: ficha de la vegetal, comparación y esquemas de la unidad', due:'Esquemas: el día del examen (fecha por confirmar en clase)', instr:'1) Terminar el dibujo de la célula eucariota vegetal y completar la ficha con la infografía. 2) Completar la ficha que compara la célula animal y la vegetal. 3) Subir a Classroom fotos de los esquemas, resúmenes y mapas conceptuales de la unidad.', steps:[
  {t:'read', h:'Qué se pide', body:`<div class="levels"><div class="level"><b>1</b><span>Termina el **dibujo de la célula vegetal** y la **ficha** (solo orgánulos de la infografía).</span></div><div class="level"><b>2</b><span>Completa la **ficha comparativa**: animal frente a vegetal.</span></div><div class="level"><b>3</b><span>Sube a Classroom **fotos** de tus esquemas, resúmenes y mapas conceptuales de la Unidad 1. Fecha tope: **el día del examen**.</span></div></div>`},
  {t:'read', h:'Ayuda para la célula vegetal', body:`Mira las lecciones **b10, b11 y b12**. Ahí tienes los pasos del dibujo y la ficha.

Haz primero el dibujo a lápiz. Luego rotula con flechas. Por último, copia las funciones.`},
  {t:'read', h:'Qué esquemas puedes subir', body:`Cada uno es **una hoja**:

<div class="levels"><div class="level"><b>1</b><span>Niveles de organización (la escalera de 7 escalones).</span></div><div class="level"><b>2</b><span>Mapa conceptual de las biomoléculas.</span></div><div class="level"><b>3</b><span>Tipos de células: procariota, animal y vegetal.</span></div><div class="level"><b>4</b><span>Tejidos, órganos, sistemas y aparatos.</span></div></div>`},
  {t:'order', h:'Comprueba el orden', q:'Toca los niveles en orden, del más pequeño al más grande.', items:['Átomo','Molécula','Célula','Tejido','Órgano','Sistema/aparato','Organismo']},
  {t:'read', h:'Antes de subirlo', body:`<div class="levels"><div class="level"><b>✔</b><span>Las fotos se ven **claras** y sin sombras.</span></div><div class="level"><b>✔</b><span>Cada dibujo tiene sus **flechas y nombres**.</span></div><div class="level"><b>✔</b><span>La ficha comparativa tiene las **tres columnas**.</span></div><div class="level"><b>✔</b><span>Has subido todo antes del examen.</span></div></div>`}
]};
})();
