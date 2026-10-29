/* Tecnología: lecciones sacadas de los vídeos de clase (transcritos el 29 oct, examen el 30 oct).
   Se carga después de tec2.js. Ids nuevos tv1-tv10 y tx3; no cambia ids existentes. */
(function(){
 if(typeof SUBJECTS==='undefined'||!SUBJECTS.tec) return;
 const S=SUBJECTS.tec;
 const Q=(q,opts,a,why)=>({t:'quiz',q:q,opts:opts,a:a,why:why});
 const O=(h,q,items)=>({t:'order',h:h,q:q,items:items});
 const R=(h,qs)=>({t:'recall',h:h,qs:qs});
 const V=(txt)=>`<p class="small" style="color:var(--ink2)">🎬 Vídeo: ${txt}</p>`;

 const L=[];

 /* ---------- tv0: guía ---------- */
 L.push({id:'tv0', title:'Vídeos de clase: qué hay y en qué orden', mins:2, steps:[
  {t:'read', h:'Los vídeos, ya en texto', body:`Los **12 vídeos** de la carpeta de Tecnología están resumidos en estas lecciones. No hace falta verlos: aquí tienes lo importante.

<div class="levels"><div class="level"><b>1</b><span><strong>Electricidad</strong>: el átomo, la corriente, el motor y su historia.</span></div><div class="level"><b>2</b><span><strong>Central termoeléctrica</strong>: paso a paso.</span></div><div class="level"><b>3</b><span><strong>El carbón</strong>: salud, empleo y protestas.</span></div><div class="level"><b>4</b><span><strong>El CO₂ y "Una verdad incómoda"</strong>: tres lecciones.</span></div><div class="level"><b>5</b><span><strong>Examen de repaso 3</strong>: solo de los vídeos.</span></div></div>

[[idea:Esta noche: haz las lecciones en orden y termina con el examen de repaso 3.]]`}
 ]});

 /* ---------- tv1 ---------- */
 L.push({id:'tv1', title:'Vídeo: el átomo y qué es la electricidad', mins:9, steps:[
  {t:'read', h:'Todo está hecho de átomos', body:`Un clavo, tu ropa, tu piel: todo está hecho de **átomos**.

Son diminutos. Un átomo de hierro mide unos **156 picómetros**. Un picómetro es un milímetro dividido en mil millones de partes.

No se pueden ver ni con un microscopio electrónico. Lo que sabemos sale de **teorías y cálculos**.

${V('"Qué es Electricidad"')}`},
  {t:'read', h:'Las tres partes del átomo', body:`Piensa en un **sistema solar** en miniatura:

- En el centro, el **núcleo** (el Sol). Tiene **protones** (carga **positiva**) y **neutrones** (sin carga).
- Alrededor giran los **electrones** (los planetas), con carga **negativa**.

[[ok:Electrón y electricidad se parecen porque están relacionados: los electrones son los responsables de la electricidad.]]`},
  Q('¿Qué carga tiene el electrón?',['Negativa','Positiva','No tiene carga'],0,'Protón positivo, neutrón sin carga, electrón negativo.'),
  Q('¿Dónde están los protones y los neutrones?',['En el núcleo','Girando alrededor','Fuera del átomo'],0,'El núcleo tiene protones y neutrones. Los electrones giran alrededor.'),
  {t:'read', h:'El número atómico', body:`En la **tabla periódica**, cada elemento tiene un **número atómico**. Dice cuántos **electrones** tiene el átomo (y cuántos protones).

- El hierro (**Fe**) tiene número atómico **26**: 26 electrones y 26 protones.
- Si hay los mismos protones que electrones, el átomo está **en equilibrio** (neutro).

Varios átomos juntos forman una **molécula**. Agua = 2 de hidrógeno + 1 de oxígeno.`},
  {t:'read', h:'Electrizar: ganar o perder electrones', body:`Un material se **electriza** si gana o pierde electrones.

- **Pierde** electrones → queda con carga **positiva**.
- **Gana** electrones → queda con carga **negativa**.

Las cargas **opuestas se atraen** y las **iguales se repelen**.

${say('Dilo en voz alta: pierde, positivo. Gana, negativo.')}`},
  Q('Un material que ha PERDIDO electrones queda…',['Con carga positiva','Con carga negativa','Neutro'],0,'Si faltan electrones (negativos), ganan los protones (positivos): queda positivo.'),
  {t:'read', h:'Entonces, ¿qué es la electricidad?', body:`Une un material negativo y uno positivo con un **conductor**. Los electrones que sobran en un lado **viajan** al otro para recuperar el equilibrio.

Ese **movimiento de electrones** es la electricidad. No la inventó el ser humano: es de la naturaleza. Nosotros la **aprovechamos**.

- Lámpara: electricidad → **luz**.
- Plancha: electricidad → **calor**.
- Ventilador (motor): electricidad → **movimiento**.

[[idea:Electricidad = electrones que se mueven de donde sobran a donde faltan.]]`},
  {t:'read', h:'Enchufes y pilas', body:`- Un **enchufe** tiene dos contactos con carga. El tercero es la **toma de tierra**, solo por **seguridad**.
- Una **pila** tiene dentro dos partes químicas: una positiva y otra negativa. Los electrones salen por un polo, pasan por el aparato y vuelven por el otro.`},
  Q('¿Para qué sirve el tercer contacto del enchufe (la toma de tierra)?',['Para la seguridad','Para dar más voltaje','Para cargar la pila'],0,'Los dos contactos con carga hacen funcionar el aparato. La tierra es por seguridad.')
 ]});

 /* ---------- tv2 ---------- */
 L.push({id:'tv2', title:'Vídeo: corriente, tensión y resistencia', mins:10, steps:[
  R('Repaso de 1 minuto',[['¿Qué partícula del átomo es responsable de la electricidad?','El electrón.'],['Si un material gana electrones, ¿qué carga tiene?','Negativa.']]),
  {t:'read', h:'Cómo se sueltan los electrones', body:`Un electrón puede salir de su órbita si recibe una fuerza externa:

- Moverse en un **campo magnético**.
- **Calor**.
- **Fricción** (frotar).
- Una **reacción química** (las pilas).

Al saltar de átomo en átomo se forma un **flujo de electrones**: la base de la electricidad.

${V('"Introducción a la electricidad" y "Qué es la corriente eléctrica"')}`},
  {t:'read', h:'Corriente o intensidad', body:`La **corriente** es el flujo de carga que atraviesa un conductor cada segundo.

- Se mide en **amperios (A)** = culombios por segundo.
- Se mide con un **amperímetro**, que se conecta **en serie**.
- También hay **pinzas amperimétricas**: miden el campo magnético alrededor del cable, sin cortarlo.
- La corriente crea un **campo magnético**. Así funciona un **electroimán**.`},
  {t:'read', h:'Continua y alterna', body:`<div class="tblwrap"><table class="tbl"><tr><th>Tipo</th><th>Cómo es</th><th>Siglas</th><th>Símbolo</th></tr><tr><td><strong>Continua</strong> (directa)</td><td>Siempre igual, en <strong>una</strong> dirección</td><td>CC / DC</td><td>Línea recta ⎯</td></tr><tr><td><strong>Alterna</strong></td><td>Cambia de dirección muy rápido, va y vuelve</td><td>CA / AC</td><td>Onda ∿</td></tr></table></div>

[[ok:Pila: continua. Enchufe de casa: alterna.]]`},
  Q('¿Cómo se conecta un amperímetro?',['En serie','En paralelo','No se conecta'],0,'El amperímetro va en serie, para que toda la corriente pase por él.'),
  Q('La corriente que cambia de dirección muy rápido es…',['Alterna','Continua','Estática'],0,'Alterna = va y vuelve. Su símbolo es una onda.'),
  {t:'read', h:'¿Hacia dónde va la corriente?', body:`Hay **dos** formas de contarlo:

- **Sentido convencional**: de **positivo a negativo**. Lo propuso **Benjamin Franklin**, cuando se sabía poco.
- **Flujo de electrones** (el real): de **negativo a positivo**, porque los electrones son negativos y van hacia lo positivo.

[[warn:Si te preguntan por los electrones: de menos a más.]]`},
  {t:'read', h:'Tensión: la bomba del circuito', body:`La **tensión** (voltaje) es la fuerza que empuja a los electrones.

Imagina un circuito de agua: la **bomba** da presión al agua. La tensión hace lo mismo con la corriente.

Se mide en **voltios (V)**.`},
  {t:'read', h:'Resistencia: cuatro factores', body:`La **resistencia** frena el flujo de electrones. Se mide en **ohmios (Ω)**. Depende de:

<div class="levels"><div class="level"><b>1</b><span><strong>Material</strong>: conductores (cobre, oro, plata) o aislantes (goma, vidrio, porcelana).</span></div><div class="level"><b>2</b><span><strong>Longitud</strong>: cable más largo → <strong>más</strong> resistencia.</span></div><div class="level"><b>3</b><span><strong>Área</strong> (grosor): cable más grueso → <strong>menos</strong> resistencia. Doble de área, mitad de resistencia.</span></div><div class="level"><b>4</b><span><strong>Temperatura</strong>: normalmente, más calor → más resistencia.</span></div></div>`},
  Q('Si un cable es más LARGO, su resistencia…',['Aumenta','Disminuye','No cambia'],0,'Más largo, más camino que recorrer: más resistencia.'),
  Q('Si un cable es más GRUESO, su resistencia…',['Disminuye','Aumenta','No cambia'],0,'Más área, más espacio para pasar: menos resistencia.'),
  {t:'read', h:'Un cable: equipo de dos', body:`Un cable tiene **dentro** cobre (**conductor**) y **fuera** goma o plástico (**aislante**).

Los electrones van por el cobre. El aislante los mantiene dentro y evita **descargas**.`},
  Q('¿Cuál de estos es un buen aislante?',['Porcelana','Cobre','Plata'],0,'Cobre, oro y plata conducen. Goma, vidrio y porcelana aíslan.')
 ]});

 /* ---------- tv3 ---------- */
 L.push({id:'tv3', title:'Vídeo: generador y motor eléctrico', mins:6, steps:[
  R('Repaso de 1 minuto',[['¿En qué unidad se mide la resistencia?','En ohmios (Ω).'],['¿Qué crea la corriente al pasar por un cable?','Un campo magnético.']]),
  {t:'read', h:'El generador (alternador)', body:`Transforma **energía mecánica** en **energía eléctrica**.

Una **bobina** de cable **gira entre los polos de un imán**. El campo magnético que la atraviesa cambia y aparece una **fuerza electromotriz** que mueve los electrones.

Produce **corriente alterna**. Por eso se llama **alternador**.

${V('"Motor Eléctrico"')}`},
  {t:'read', h:'El motor: al revés', body:`El **motor eléctrico** transforma **energía eléctrica** en **energía mecánica**.

Conectas la bobina a **corriente continua**. La bobina se convierte en un imán y **choca** con el campo del **imán de herradura**. Esa interacción hace que la bobina **gire**.

[[idea:Generador: movimiento → electricidad. Motor: electricidad → movimiento.]]`},
  Q('Un motor eléctrico transforma…',['Energía eléctrica en mecánica','Energía mecánica en eléctrica','Calor en luz'],0,'El motor gasta electricidad y da movimiento. El generador hace lo contrario.'),
  Q('¿Por qué el generador del vídeo se llama alternador?',['Porque produce corriente alterna','Porque alterna imanes','Porque funciona con pilas'],0,'Al girar la bobina, la corriente cambia de sentido: corriente alterna.')
 ]});

 /* ---------- tv4 ---------- */
 L.push({id:'tv4', title:'Vídeo: la loca historia de la electricidad', mins:8, steps:[
  R('Repaso de 1 minuto',[['¿Qué hace un generador?','Transforma energía mecánica en eléctrica.'],['¿Qué tipo de corriente da una pila?','Continua.']]),
  {t:'read', h:'Los primeros pasos', body:`- **Tales de Mileto** (Antigua Grecia): frotó **ámbar** con un paño y atrajo plumas. Era **electricidad estática**. Llamó a esa fuerza **"electrón"**, que dio nombre a la electricidad.
- Los **chinos**: una aguja imantada flotando en agua señala el norte. Así nació la **brújula**.

${V('"La historia de la electricidad"')}

[[warn:El vídeo dice "hace 4.000 años", pero Tales vivió hace unos 2.600 años (siglo VI a. C.).]]`},
  {t:'read', h:'Inventos clave', body:`<div class="tblwrap"><table class="tbl"><tr><th>Año</th><th>Quién</th><th>Qué</th></tr><tr><td>1752</td><td>Benjamin Franklin</td><td>Una cometa con una llave en una tormenta: los <strong>rayos son electricidad</strong>. Inventó el <strong>pararrayos</strong></td></tr><tr><td>1800</td><td>Alessandro Volta</td><td>La primera <strong>pila</strong>. De él viene el <strong>voltio</strong></td></tr><tr><td>1833</td><td>Samuel Morse</td><td>El <strong>telégrafo</strong> con un solo hilo y su código</td></tr><tr><td>1876</td><td>Alexander Graham Bell</td><td>El <strong>teléfono</strong>: la voz por señales eléctricas</td></tr><tr><td>Finales s. XIX</td><td>Thomas Edison</td><td>La <strong>bombilla</strong>: un filamento de bambú en vacío que duró 40 horas</td></tr></table></div>`},
  Q('¿Qué demostró Franklin con su cometa?',['Que los rayos son electricidad','Que la Tierra es un imán','Cómo hacer una pila'],0,'La llave se cargó de electricidad estática, como las nubes. Después inventó el pararrayos.'),
  Q('¿Quién inventó el teléfono en 1876?',['Graham Bell','Morse','Volta'],0,'Morse: telégrafo (1833). Bell: teléfono (1876).'),
  {t:'read', h:'Tesla contra Edison', body:`**Nikola Tesla** trabajó para Edison. Descubrió los **campos magnéticos rotativos** y creó el **motor de inducción de corriente alterna**. También: radiotransmisor, control remoto, avances en rayos X.

La gran pelea:

- **Edison**: **corriente continua** de baja tensión. Perdía mucha energía en el transporte y necesitaba muchísimos cables.
- **Tesla**: **corriente alterna**. Permitió llevar la electricidad a todos los rincones del mundo.

[[ok:Ganó la alterna: es la de los enchufes de casa.]]`},
  Q('¿Por qué el sistema de Edison era peor para llevar electricidad lejos?',['Perdía mucha energía y necesitaba muchos cables','Era demasiado barato','Usaba corriente alterna'],0,'La continua de baja tensión pierde mucha energía en el camino. La alterna de Tesla la llevó lejos.'),
  O('Ordena los inventos en el tiempo','Del más antiguo al más reciente.',['Pararrayos (Franklin)','Pila (Volta)','Telégrafo (Morse)','Teléfono (Bell)'])
 ]});

 /* ---------- tv5 ---------- */
 L.push({id:'tv5', title:'Vídeo: la central termoeléctrica paso a paso', mins:8, steps:[
  R('Repaso de 1 minuto',[['¿Qué hace girar la turbina de una central térmica?','El vapor a presión.'],['¿Qué tipo de corriente defendía Tesla?','Alterna.']]),
  {t:'read', h:'Del combustible a la caldera', body:`Una central termoeléctrica produce electricidad con el **calor** de quemar combustibles fósiles: **petróleo, diésel, gas natural o carbón**.

- El combustible llega **por tierra o por mar** y se almacena.
- El **carbón** va por **cintas transportadoras cerradas**. El **gas y el petróleo**, por **tuberías**.
- Todo acaba en la **caldera**, donde se quema.

${V('"Generación eléctrica: central termoeléctrica (VOXEL)"')}`},
  {t:'read', h:'Del vapor a la electricidad', body:`<div class="levels"><div class="level"><b>1</b><span>En la <strong>caldera</strong>, el calor pasa a tuberías con agua, que se convierte en <strong>vapor a presión</strong>.</span></div><div class="level"><b>2</b><span>El vapor llega a la <strong>turbina</strong> y hace girar sus paletas.</span></div><div class="level"><b>3</b><span>La turbina, con un acople, mueve el <strong>generador</strong>, que produce electricidad.</span></div><div class="level"><b>4</b><span>El vapor usado vuelve a ser agua en el <strong>condensador</strong> y regresa a la caldera.</span></div><div class="level"><b>5</b><span>Los <strong>transformadores</strong> elevan el voltaje para enviar la electricidad.</span></div></div>`},
  {t:'read', h:'Dos circuitos de agua', body:`- El circuito **agua-vapor** es **cerrado**: la misma agua se usa una y otra vez.
- Para enfriar el vapor en el condensador hay **otro circuito de agua, independiente**, solo para refrigerar.

[[idea:Dos aguas que no se mezclan: una hace vapor, la otra enfría.]]`},
  Q('El circuito agua-vapor de la central es…',['Cerrado: el agua se reutiliza','Abierto: el agua se tira al río','No existe'],0,'El vapor se condensa y vuelve a la caldera. Es un circuito cerrado.'),
  {t:'read', h:'Limpiar los humos del carbón', body:`- **Desulfurizador**: atrapa el **dióxido de azufre** (más del **80 %**).
- **Filtro de mangas**: atrapa casi el **100 %** de las **partículas** (polvo).
- Los gases del petróleo, diésel o gas son mucho más limpios y no suelen necesitar filtros.
- Las **cenizas** del carbón van a **vertederos autorizados**. Se compactan, se tapan con arena y tierra y se plantan árboles.

[[warn:Los filtros quitan azufre y polvo, pero el CO₂ sigue saliendo.]]`},
  Q('¿Qué atrapa el filtro de mangas?',['Las partículas (polvo)','El CO₂','El vapor de agua'],0,'Casi el 100 % de las partículas. El dióxido de azufre lo atrapa el desulfurizador.'),
  O('Ordena el recorrido','Toca en orden lo que pasa en la central.',['El combustible llega y se almacena','Se quema en la caldera','El vapor mueve la turbina','El generador produce electricidad','El transformador eleva el voltaje'])
 ]});

 /* ---------- tv6 ---------- */
 L.push({id:'tv6', title:'Vídeos: el carbón, la salud y el empleo', mins:8, steps:[
  R('Repaso de 1 minuto',[['¿Qué atrapa el desulfurizador?','El dióxido de azufre.'],['¿Adónde van las cenizas del carbón?','A vertederos autorizados.']]),
  {t:'read', h:'El carbón mata: el informe "La nube negra"', body:`Un estudio de la asociación ecologista **WWF** y otros dos organismos: **"La nube negra sobre Europa"**.

- Analizó **257 de las 280** centrales de carbón de Europa.
- En **España**, la contaminación de las centrales (españolas y europeas) causó unas **1.100-1.170 muertes prematuras** en 2013. Casi como los **muertos en accidentes de tráfico** ese año (1.128).
- Causa también decenas de miles de casos de **enfermedades del corazón y bronquitis**.
- Coste sanitario: hasta **62.300 millones de euros**.

${V('"Málaga 24h TV: las centrales térmicas de carbón causan 1.170 muertes"')}`},
  {t:'read', h:'La contaminación no tiene fronteras', body:`El humo viaja de un país a otro.

- Los países cuyas centrales causan más muertes: **Polonia** (unas 6.000), **Alemania** (más de 4.300), **Reino Unido** (casi 3.000), **Rumanía** y **Bulgaria**.
- Las centrales **españolas** causaron **1.530** muertes (dentro y fuera de España). España fue el **sexto** país.

[[idea:Si se eliminara el carbón, se evitarían esas muertes.]]`},
  Q('Las muertes por el carbón en España eran comparables a…',['Las de accidentes de tráfico','Las de la gripe','Ninguna otra causa'],0,'Unas 1.100 muertes prematuras, como las 1.128 de tráfico en 2013.'),
  {t:'read', h:'Ecologistas ocupan una central en Alemania', body:`Unos **100 ecologistas** del grupo **Ende Gelände** ocuparon la central de carbón **Datteln 4**, en el oeste de Alemania.

- Protestaban porque se **abría una central nueva** cuando Alemania se había comprometido a **dejar el carbón en 2038** (quizá 2035).
- Alemania pagará **4.350 millones** a las eléctricas y **40.000 millones** a las regiones del carbón.
- Es difícil porque también decidió **cerrar las nucleares** (en 2022).

${V('"Ecologistas frente al carbón"')}`},
  {t:'read', h:'Los mineros también protestan', body:`En el vídeo, **mineros del carbón** se manifiestan en **Madrid** con cánticos: "¡Los que sacan el carbón, aquí están!", "¡Sí se puede!".

Defienden sus **puestos de trabajo**: si cierran las minas y las centrales, sus comarcas se quedan sin empleo.

[[idea:Es un debate con dos lados: cerrar el carbón salva vidas y frena el clima, pero hay que dar otro trabajo a las comarcas mineras.]]

${V('"Mineros protestando"')}`},
  Q('¿Por qué protestaban los mineros?',['Para defender sus empleos','Para pedir más contaminación','Contra los coches eléctricos'],0,'Si se cierran minas y centrales, pierden su trabajo.'),
  Q('¿En qué año se comprometió Alemania a dejar el carbón?',['2038 (quizá 2035)','2020','2050'],0,'Como muy tarde en 2038; podría adelantarse a 2035. Los cierres empezaron a finales de 2020.')
 ]});

 /* ---------- tv7 ---------- */
 L.push({id:'tv7', title:'Vídeo: un año del CO₂ de la Tierra (NASA)', mins:7, steps:[
  R('Repaso de 1 minuto',[['¿Qué país europeo causaba más muertes por carbón?','Polonia.'],['¿Qué defienden los mineros?','Sus puestos de trabajo.']]),
  {t:'read', h:'Un superordenador pinta el CO₂', body:`**Bill Putman**, científico de la **NASA**, enseña un **modelo de superordenador**: un año entero de CO₂ en la atmósfera, comprimido en unos minutos.

- El **CO₂** es el gas de efecto invernadero más importante que cambiamos los seres humanos.
- De lo que emitimos al quemar combustibles fósiles, **la mitad se queda en la atmósfera**. La otra mitad la absorben la **tierra** (plantas) y los **océanos**.

${V('"NASA: A Year in the Life of Earth\'s CO2"')}`},
  {t:'read', h:'Dónde y cuándo hay más CO₂', body:`- Más CO₂ en el **hemisferio norte**, sobre las grandes zonas emisoras: **América, Europa y Asia**.
- El **viento** lo lleva de un sitio a otro: el CO₂ no se queda quieto.
- En **primavera y verano**, las plantas lo **absorben** por la **fotosíntesis** y baja.
- En **otoño**, la fotosíntesis cae y el CO₂ se **acumula** otra vez.
- En el hemisferio sur se ve otro contaminante: el **monóxido de carbono** de los **incendios**. Es peligroso para el ambiente y para las personas.`},
  Q('¿Qué hacen las plantas con el CO₂ en primavera y verano?',['Lo absorben por la fotosíntesis','Lo producen','No le afectan'],0,'Las plantas toman CO₂ en la fotosíntesis. Por eso baja en primavera y verano.'),
  {t:'read', h:'La Tierra "respira"', body:`Al Gore cuenta lo mismo con la gráfica de **Keeling**, que mide el CO₂ desde **1958** en una isla del Pacífico.

La línea **sube y baja cada año**: en primavera y verano del norte las hojas absorben CO₂; en otoño e invierno caen y lo devuelven.

"Es como si la Tierra **inspirara y espirara** una vez al año."

Pero cada año la línea queda **más alta**: el CO₂ total **no para de subir**.

[[idea:Sube y baja cada año (las plantas), pero la tendencia siempre es hacia arriba (nosotros).]]`},
  Q('¿Por qué hay más CO₂ en el hemisferio norte?',['Allí están las grandes zonas emisoras (América, Europa, Asia)','Porque hace más frío','Porque no hay plantas'],0,'Las grandes emisiones de energía están en el norte.'),
  Q('Del CO₂ que emitimos, ¿cuánto se queda en la atmósfera?',['Más o menos la mitad','Nada','Todo'],0,'La mitad se queda; la otra mitad la absorben tierra y océanos.')
 ]});

 /* ---------- tv8 ---------- */
 L.push({id:'tv8', title:'"Una verdad incómoda" (1): las pruebas', mins:10, steps:[
  R('Repaso de 1 minuto',[['¿Desde cuándo se mide el CO₂ con la gráfica de Keeling?','Desde 1958.'],['¿Por qué la gráfica sube y baja cada año?','Por las plantas: absorben CO₂ en primavera y verano y lo devuelven en otoño e invierno.']]),
  {t:'read', h:'Quién y por qué', body:`**Al Gore** fue vicepresidente de Estados Unidos. Perdió las elecciones del **2000** contra George Bush por muy poco (Florida).

Desde la universidad le preocupaba el CO₂, gracias a su profesor **Roger Revelle**. Decidió dar su conferencia sobre el clima **por todo el mundo**. Esa conferencia es la película (**2006**).

${V('"Una verdad incómoda" (completa) y su resumen')}`},
  {t:'read', h:'La atmósfera es muy fina', body:`Carl Sagan decía: la atmósfera es tan fina como una **capa de barniz** sobre una bola.

El Sol calienta la Tierra. La Tierra devuelve calor como **infrarrojos**. Una parte queda atrapada en la atmósfera: eso es **bueno**, mantiene temperaturas soportables.

Pero la **contaminación** engorda esa capa. Queda atrapado **más calor**. Eso es el **calentamiento global**.`},
  {t:'read', h:'El hielo cuenta la historia', body:`Los científicos (como **Lonnie Thompson**) sacan cilindros de hielo con **taladros tubulares**: los **testigos de hielo**.

- La nieve atrapa **burbujas de aire**: se mide el **CO₂** de cada año.
- Los **isótopos de oxígeno** sirven de **termómetro**.
- Se leen las capas como los anillos de un árbol.

En la **Antártida** llegan a **650.000 años** atrás.`},
  {t:'read', h:'La gráfica más famosa', body:`- En 650.000 años, el CO₂ **nunca pasó de 300 partes por millón (ppm)**.
- CO₂ y temperatura **suben y bajan juntos**: más CO₂, más calor atrapado.
- Hoy el CO₂ está **muy por encima** de cualquier valor natural. "Eso lo hemos hecho nosotros".
- En menos de 50 años subirá aún más: **se sale de la gráfica**.

[[warn:Responde así a "es un ciclo natural": antes hubo ciclos, pero nunca tan alto ni tan rápido.]]`},
  Q('En los últimos 650.000 años, el CO₂ nunca había superado…',['300 ppm','30 ppm','3.000 ppm'],0,'Nunca pasó de 300 partes por millón. Hoy está muy por encima.'),
  {t:'read', h:'Los glaciares desaparecen', body:`- **Kilimanjaro**: en unas décadas no habrá nieve.
- Parque Nacional **Glacier** (EE. UU.), los **Alpes**, **Perú**, **Argentina**, la **Patagonia**: los glaciares retroceden.
- **Himalaya**: el **40 %** de la población mundial bebe agua que viene en gran parte del deshielo de glaciares. Podría quedarse sin agua.`},
  {t:'read', h:'Más calor, más tormentas', body:`- Los **10 años más calurosos** registrados fueron en los últimos 14. El más caluroso: **2005**.
- **Ola de calor en Europa**: **35.000 muertos**. En la India, **50 ºC**.
- Océanos más calientes → **huracanes más fuertes**. El **Katrina** llegó a Florida como categoría 1, pasó por el golfo de México, con agua caliente, y se hizo enorme. Arrasó **Nueva Orleans**.
- **2004**: primer huracán en el Atlántico Sur (**Brasil**). Japón: récord de **10 tifones**.`},
  Q('¿Por qué el huracán Katrina se hizo tan fuerte?',['Pasó por aguas muy calientes del golfo de México','Por un terremoto','Porque hacía frío'],0,'El agua caliente da energía al huracán: más viento y más humedad.'),
  {t:'read', h:'La paradoja: inundaciones Y sequías', body:`El calentamiento causa **las dos cosas**:

- **Inundaciones**: más evaporación del océano, y luego cae todo de golpe. **Bombay**: **93 cm** de lluvia en 24 horas.
- **Sequías**: el calor también seca la tierra y cambia dónde llueve. El **lago Chad**, uno de los mayores del mundo, casi ha desaparecido.

[[ok:Más calor = más agua evaporada. Cae de golpe en un sitio y falta en otro.]]`},
  Q('¿Qué le ha pasado al lago Chad?',['Casi ha desaparecido por la sequía','Se ha desbordado','Se ha congelado'],0,'Fue uno de los mayores lagos del mundo y se ha secado casi por completo.')
 ]});

 /* ---------- tv9 ---------- */
 L.push({id:'tv9', title:'"Una verdad incómoda" (2): hielo, mar y seres vivos', mins:10, steps:[
  R('Repaso de 1 minuto',[['¿Qué son los testigos de hielo?','Cilindros de hielo con burbujas de aire antiguo para medir el CO₂ y la temperatura del pasado.'],['¿Qué año fue el más caluroso según la película?','2005.']]),
  {t:'read', h:'El Ártico, primera alarma', body:`- El hielo del Ártico ha bajado un **40 % en 40 años** (datos de submarinos). En **50-70 años** podría desaparecer en verano.
- El **permafrost** (suelo helado) se derrite: **"árboles borrachos"** torcidos, casas que se hunden.
- Alaska: la tundra estaba helada **225 días** al año; ahora **menos de 75**.`},
  {t:'read', h:'Espejo blanco, mar oscuro', body:`- El **hielo** refleja más del **90 %** de la luz del Sol, como un **espejo**.
- El **océano** absorbe más del **90 %**.

Si el hielo se derrite, hay más mar, se absorbe más calor y se derrite **más hielo**. Un círculo vicioso.

Los **osos polares** se ahogan nadando hasta **90 km** buscando hielo.

[[idea:Menos hielo → más calor absorbido → menos hielo.]]`},
  Q('¿Qué porcentaje de luz solar refleja el hielo?',['Más del 90 %','Un 10 %','Nada'],0,'El hielo es un espejo (refleja más del 90 %); el océano absorbe más del 90 %.'),
  {t:'read', h:'La cinta transportadora del océano', body:`Las corrientes del mar llevan el calor del ecuador a los polos. La **corriente del Golfo** calienta Europa.

En el Atlántico Norte el agua se enfría, es más **salada y pesada**, y se **hunde**. Eso mueve toda la "cinta".

Al final de la última glaciación, un lago enorme de **agua dulce** se vació en el océano. El agua dejó de hundirse, la cinta paró y **Europa volvió a una época glacial** durante unos 1.000 años.

[[warn:Hoy preocupa el deshielo de Groenlandia: también es agua dulce.]]`},
  {t:'read', h:'La Antártida y Larsen B', body:`La plataforma de hielo **Larsen B** (más grande que un estado de EE. UU.) **desapareció en 35 días** en **2002**. Se creía estable 100 años más.

Clave: **hielo flotante** o **hielo sobre tierra**.

- Un cubito que flota en un vaso: al fundirse, el agua **no sube**.
- Cubitos que caen desde fuera: el vaso **rebosa**.

Al romperse el flotante, el hielo de tierra **cae al mar** y sube el nivel.`},
  Q('¿Qué hielo hace subir el nivel del mar al derretirse?',['El hielo que está sobre tierra','El hielo que ya flota','Ninguno'],0,'El hielo flotante ya ocupa su sitio en el agua. El de tierra añade agua nueva.'),
  {t:'read', h:'Seis metros más de mar', body:`- Si se derritiera **Groenlandia** o la **Antártida Occidental**: el mar subiría unos **6 metros**.
- En Groenlandia, el agua de deshielo baja por **molinos glaciares** hasta la roca, lubrica el hielo y lo hace resbalar.
- Zonas inundadas: **Florida, San Francisco, Países Bajos, Pekín, Shanghái** (40 millones), **Calcuta y Bangladesh** (60 millones), **Manhattan**.
- Podría haber **100 millones de refugiados**.
- Unas islas del Pacífico ya han evacuado a su gente a Nueva Zelanda.`},
  {t:'read', h:'Los seres vivos se desajustan', body:`- **Aves y orugas** (estudio holandés): las orugas salen 2 semanas antes y las crías llegan tarde a la comida.
- Un **escarabajo** que moría con las heladas destruye bosques de pinos en EE. UU. y Alaska.
- Los **mosquitos** suben más alto: llegan a ciudades como **Nairobi**.
- **30 enfermedades nuevas** en 25 años.
- **Blanqueo del coral**.
- Las especies desaparecen **1.000 veces más rápido** de lo normal.`},
  Q('¿Cuánto subiría el mar si se derritiera Groenlandia?',['Unos 6 metros','Unos 6 centímetros','Unos 600 metros'],0,'Groenlandia o la Antártida Occidental: unos 6 metros cada una.'),
  Q('¿Por qué hay ahora mosquitos en Nairobi?',['Con el calor suben a más altitud','Porque llueve menos','Los llevan los aviones'],0,'Nairobi se fundó por encima de la línea de los mosquitos. Con el calor, suben.')
 ]});

 /* ---------- tv10 ---------- */
 L.push({id:'tv10', title:'"Una verdad incómoda" (3): causas, mentiras y soluciones', mins:10, steps:[
  R('Repaso de 1 minuto',[['¿Qué pasó con Larsen B?','Desapareció en 35 días en 2002.'],['¿Qué refleja más luz, el hielo o el mar?','El hielo (más del 90 %).']]),
  {t:'read', h:'Tres causas del choque con la Tierra', body:`<div class="levels"><div class="level"><b>1</b><span><strong>Población</strong>: 2.000 millones tras la II Guerra Mundial, 6.500 millones en 2006, unos 9.000 millones en el futuro. Más demanda de comida, agua y bosques. Casi el <strong>30 %</strong> del CO₂ viene de <strong>bosques ardiendo</strong>.</span></div><div class="level"><b>2</b><span><strong>Tecnología</strong>: costumbres viejas + tecnología nueva = consecuencias enormes. Ejemplo: el <strong>mar de Aral</strong> se secó al desviar dos ríos para regar algodón.</span></div><div class="level"><b>3</b><span><strong>Nuestra forma de pensar</strong>: la historia de la rana.</span></div></div>`},
  {t:'read', h:'La rana en el agua', body:`Si una rana salta a agua **hirviendo**, sale de un salto.

Si está en agua **templada** que se calienta **poco a poco**, se queda quieta... hasta que es tarde.

Las personas somos así: si el peligro parece **lento**, no reaccionamos.

${say('Explícale a alguien la historia de la rana en voz alta.')}`},
  {t:'read', h:'¿Quién contamina más?', body:`En **2006**, **Estados Unidos** era con diferencia el **mayor emisor** de CO₂: tanto como Sudamérica, África, Oriente Próximo y Asia **juntos**.

**China** también crece mucho: construye muchísimas centrales de **carbón**.

Solo **dos países desarrollados** no habían ratificado el **Protocolo de Kioto** (1997): **Estados Unidos y Australia**.`},
  Q('¿Qué dos países desarrollados no habían ratificado Kioto?',['Estados Unidos y Australia','España y Francia','China y Japón'],0,'La película lo dice: solo EE. UU. y Australia.'),
  {t:'read', h:'Idea falsa 1: "los científicos no se ponen de acuerdo"', body:`- Se revisaron **928 artículos científicos**. ¿Cuántos dudaban de que el calentamiento lo causamos nosotros? **Cero**.
- Se revisaron **636 artículos de prensa**. **Más de la mitad** decían "no está claro".

La duda la fabricó un **pequeño grupo** ligado al **petróleo**. Un informe filtrado decía: **"La duda es nuestro producto"**.

Un asesor de la Casa Blanca, antes del lobby del petróleo, **tachó** informes científicos. Al dimitir se fue a trabajar a **ExxonMobil**.`},
  Q('De 928 artículos científicos, ¿cuántos discrepaban del consenso?',['Ninguno','La mitad','Casi todos'],0,'Cero. En la prensa, en cambio, más de la mitad transmitían dudas.'),
  {t:'read', h:'Ideas falsas 2 y 3', body:`**2. "Hay que elegir entre economía y medio ambiente"**. Es falso. Sin planeta no hay economía. Y hacer lo correcto **crea riqueza y empleo**. Ejemplo: los coches de EE. UU. contaminaban tanto que **no se podían vender en China**.

**3. "Es demasiado grande para resolverlo"**. Mucha gente pasa de **negarlo** a **desesperarse** sin pasar por **actuar**. Ya resolvimos algo parecido: el **agujero de la capa de ozono**.`},
  {t:'read', h:'Las soluciones suman', body:`No hay una sola solución. Hay muchas que **suman**:

- Electrodomésticos y bombillas **eficientes**.
- Coches y transporte más **eficientes**.
- Energías **renovables**.
- **Captura y almacenamiento de CO₂**.

Juntas podrían bajar las emisiones por debajo de las de **1970**.

[[ok:"La voluntad política es un recurso renovable".]]`},
  {t:'read', h:'Lo que puedes hacer tú', body:`- Ahorrar energía: bombillas de bajo consumo, termostato, aislar la casa.
- **Reciclar**.
- **Caminar, ir en bici** o en transporte público.
- Pedir **energía verde**.
- **Plantar árboles**.
- Hablar del tema, informarte, votar a quien proponga soluciones.

Al final, la foto del **"punto azul pálido"**: la Tierra vista desde 6.500 millones de km. "Es nuestro **único hogar**."`},
  Q('Según Al Gore, ¿es verdad que hay que elegir entre economía y medio ambiente?',['No, es una falsa elección','Sí, siempre','Solo en Europa'],0,'Sin planeta no hay economía, y las soluciones crean empleo.'),
  Q('¿Qué problema medioambiental global ya se resolvió antes?',['El agujero de la capa de ozono','El calentamiento global','El mar de Aral'],0,'Los países se pusieron de acuerdo para eliminar los productos que dañaban el ozono.')
 ]});

 /* ---------- Examen de repaso 3 (vídeos) ---------- */
 L.push({id:'tx3', title:'Examen de repaso 3 · Vídeos de clase', mins:12, steps:[
  {t:'read', h:'Examen de repaso 3: cómo se hace', body:`Preguntas de **los vídeos**.

- Hazlo **sin mirar**.
- Apunta **cuántas aciertas**.
- Si fallas, lee el porqué y sigue.

[[ok:Cada fallo te dice qué lección repasar.]]`},
  Q('Las tres partes del átomo son…',['Protones, neutrones y electrones','Imanes, cables y pilas','Voltios, amperios y ohmios'],0,'Núcleo (protones + neutrones) y electrones alrededor.'),
  Q('Un material que gana electrones queda…',['Negativo','Positivo','Neutro'],0,'Gana negativos: queda negativo.'),
  Q('La corriente de un enchufe de casa es…',['Alterna','Continua','Estática'],0,'La pila da continua; el enchufe, alterna.'),
  Q('Los electrones circulan de…',['Negativo a positivo','Positivo a negativo','Ninguno'],0,'El sentido convencional (de Franklin) es al revés, pero los electrones van de - a +.'),
  Q('Si duplicas el grosor (área) de un cable, su resistencia…',['Se reduce a la mitad','Se duplica','No cambia'],0,'Más área, menos resistencia: doble de área, mitad de resistencia.'),
  Q('El motor eléctrico gira porque…',['El campo de la bobina choca con el del imán','El vapor empuja sus paletas','La pila se calienta'],0,'La bobina con corriente se convierte en imán e interactúa con el imán de herradura.'),
  Q('¿Quién inventó el pararrayos?',['Benjamin Franklin','Tesla','Morse'],0,'Franklin, tras demostrar con su cometa que los rayos son electricidad (1752).'),
  O('Ordena la central termoeléctrica','Del principio al final.',['Caldera','Turbina','Generador','Condensador','Transformador']),
  Q('El desulfurizador de una central de carbón captura…',['Dióxido de azufre','Cenizas','Vapor'],0,'Más del 80 % del dióxido de azufre. Las partículas las coge el filtro de mangas.'),
  Q('Según el informe de WWF, ¿qué país europeo tenía más muertes por sus centrales de carbón?',['Polonia','España','Francia'],0,'Polonia (unas 6.000), luego Alemania y Reino Unido. España era la sexta.'),
  Q('En el vídeo de la NASA, el CO₂ baja en primavera y verano porque…',['Las plantas lo absorben (fotosíntesis)','Hay menos coches','Llueve más'],0,'La fotosíntesis retira CO₂ de la atmósfera.'),
  Q('¿Cómo se sabe el CO₂ de hace 650.000 años?',['Con burbujas de aire en testigos de hielo','Con fotos antiguas','Con termómetros'],0,'Los testigos de hielo de la Antártida llegan a 650.000 años.'),
  Q('¿Por qué el deshielo del Ártico se acelera?',['El mar absorbe la luz que el hielo reflejaba','Porque hay osos polares','Porque llueve más'],0,'El hielo refleja más del 90 %; el mar absorbe más del 90 %. Más mar, más calor.'),
  Q('La historia de la rana enseña que…',['No reaccionamos a los peligros que llegan poco a poco','Las ranas resisten el calor','Hay que hervir el agua'],0,'Si el cambio parece lento, nos quedamos quietos hasta que es tarde.'),
  Q('¿Qué frase resume la estrategia de los que fabricaban dudas?',['"La duda es nuestro producto"','"Sí se puede"','"Nunca más"'],0,'Venía de un informe filtrado: crear controversia en la mente del público.'),
  {t:'read', h:'Resultado del examen 3', body:`Cuenta tus aciertos.

<div class="tblwrap"><table class="tbl"><tr><th>Si fallaste…</th><th>Repasa</th></tr><tr><td>Átomo, cargas</td><td>El átomo y qué es la electricidad</td></tr><tr><td>Alterna, amperímetro, resistencia</td><td>Corriente, tensión y resistencia</td></tr><tr><td>Motor, generador</td><td>Generador y motor eléctrico</td></tr><tr><td>Franklin, Volta, Tesla, Edison</td><td>La loca historia de la electricidad</td></tr><tr><td>Caldera, filtros</td><td>La central termoeléctrica paso a paso</td></tr><tr><td>WWF, mineros, Alemania</td><td>El carbón, la salud y el empleo</td></tr><tr><td>Fotosíntesis, NASA</td><td>Un año del CO₂ de la Tierra</td></tr><tr><td>Hielo, rana, ideas falsas</td><td>"Una verdad incómoda" 1, 2 y 3</td></tr></table></div>

[[ok:Después, haz también los exámenes de repaso 1 y 2.]]`}
 ]});

 L.forEach(function(l){ if(!S.lessons.some(function(x){return x.id===l.id;})) S.lessons.push(l); });
})();
