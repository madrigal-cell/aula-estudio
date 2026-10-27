/* Tecnología: lecciones del Site del profesor (1er trimestre) + exámenes de repaso + tarea de Classroom.
   Se carga después de fyq-tec.js (que define SUBJECTS.tec con t1 y t2). No cambia ids existentes. */
(function(){
 if(typeof SUBJECTS==='undefined'||!SUBJECTS.tec) return;
 const S=SUBJECTS.tec;
 S.tema='1er trimestre · Electricidad y calentamiento global';
 const Q=(q,opts,a,why)=>({t:'quiz',q:q,opts:opts,a:a,why:why});
 const O=(h,q,items)=>({t:'order',h:h,q:q,items:items});
 const R=(h,qs)=>({t:'recall',h:h,qs:qs});

 const L=[];

 /* ---------- t3 ---------- */
 L.push({id:'t3', title:'La corriente eléctrica', mins:9, steps:[
  {t:'read', h:'Qué es la corriente eléctrica', body:`Imagina un río de **electrones** que se mueven por un cable.

La **corriente eléctrica** es el flujo de carga eléctrica que atraviesa un material **conductor**. Su unidad es el **amperio (A)**, que equivale a culombios por segundo (C/s).

Para que haya corriente, los electrones más alejados del núcleo se sueltan y **circulan libres** entre los átomos.

[[ok:Ejemplo de la naturaleza: un rayo es una corriente enorme de electrones por el aire.]]`},
  Q('¿Qué se mueve por el cable cuando hay corriente eléctrica?',['Electrones libres','Átomos enteros','Moléculas de agua'],0,'La corriente es un flujo de cargas libres, normalmente electrones, dentro de un conductor.'),
  {t:'read', h:'El sentido de los electrones', body:`En un circuito **cerrado**, los electrones van siempre del **polo negativo** al **polo positivo**.

Si el circuito está abierto (hay un corte), no circulan y no hay corriente.

${say('Dilo en voz alta: los electrones van de menos a más.')}`},
  {t:'read', h:'Los cinco efectos de la corriente', body:`<div class="levels"><div class="level"><b>1</b><span><strong>Calorífico</strong>: el conductor se calienta. Estufas, hornillos.</span></div><div class="level"><b>2</b><span><strong>Químico</strong>: cambios químicos en conductores iónicos. Electrólisis.</span></div><div class="level"><b>3</b><span><strong>Magnético</strong>: crea un campo magnético como un imán. Motores, televisiones, voltímetros.</span></div><div class="level"><b>4</b><span><strong>Lumínico</strong>: da luz. Bombilla, fluorescente, LED.</span></div><div class="level"><b>5</b><span><strong>Fisiológico</strong>: actúa sobre personas y animales. Electrocución, aparatos de electromedicina.</span></div></div>

[[ok:Calor, química, imán, luz, cuerpo.]]`},
  Q('Una estufa funciona gracias al efecto…',['Calorífico','Lumínico','Químico'],0,'La estufa se calienta porque el conductor sube de temperatura al pasar la corriente.'),
  Q('Los motores eléctricos usan sobre todo el efecto…',['Magnético','Fisiológico','Calorífico'],0,'La corriente crea un campo magnético; los motores aprovechan ese efecto.'),
  O('Ordena los efectos','Toca los cinco efectos en el orden de la lección.',['Calorífico','Químico','Magnético','Lumínico','Fisiológico'])
 ]});

 /* ---------- t4 ---------- */
 L.push({id:'t4', title:'Voltaje, intensidad y resistencia', mins:10, steps:[
  R('Repaso de 1 minuto',[['¿Cuál es la unidad de la corriente eléctrica?','El amperio (A).'],['¿Hacia dónde van los electrones en un circuito cerrado?','Del polo negativo al positivo.']]),
  {t:'read', h:'Un circuito eléctrico', body:`Un **circuito eléctrico** es un conjunto de elementos conectados entre sí que permiten **generar, transportar y usar** la energía eléctrica.

Sirve para transformarla en otra energía:

- **Calorífica**: una estufa.
- **Lumínica**: una bombilla.
- **Mecánica**: un motor.`},
  {t:'read', h:'Imagina una tubería de agua', body:`Piensa en agua que baja por una tubería.

- El **voltaje** es el desnivel que empuja el agua.
- La **intensidad** es cuánta agua pasa cada segundo.
- La **resistencia** es lo estrecha o sucia que está la tubería: frena el paso.

[[idea:Voltaje empuja. Intensidad es cuánto pasa. Resistencia frena.]]`},
  {t:'read', h:'Las tres magnitudes con su unidad', body:`<div class="tblwrap"><table class="tbl"><tr><th>Magnitud</th><th>Qué es</th><th>Unidad</th><th>Se mide con</th></tr><tr><td>Voltaje (tensión)</td><td>Diferencia de potencial entre 2 puntos</td><td>Voltio (V)</td><td>Voltímetro</td></tr><tr><td>Intensidad (I)</td><td>Carga que circula por segundo</td><td>Amperio (A)</td><td>Amperímetro</td></tr><tr><td>Resistencia</td><td>Oposición al paso de la corriente</td><td>Ohmio (Ω)</td><td>Óhmetro</td></tr></table></div>

También se puede usar un **multímetro** para medir varias cosas.`},
  Q('¿Qué magnitud se mide en ohmios (Ω)?',['La resistencia','El voltaje','La intensidad'],0,'Ohmio = resistencia. Voltio = voltaje. Amperio = intensidad.'),
  Q('¿Con qué aparato se mide el voltaje?',['Voltímetro','Óhmetro','Amperímetro'],0,'Voltaje, voltímetro: empiezan igual.'),
  Q('En la tubería de agua, ¿qué representa el voltaje?',['El desnivel que empuja el agua','La cantidad de agua que pasa','Lo estrecha que es la tubería'],0,'El voltaje es lo que empuja a los electrones, como el desnivel empuja el agua.')
 ]});

 /* ---------- t5 ---------- */
 L.push({id:'t5', title:'Volta, Ampère, Edison y Tesla', mins:8, steps:[
  R('Repaso de 1 minuto',[['¿Qué unidad mide la resistencia?','El ohmio (Ω).'],['¿Qué mide un voltímetro?','El voltaje.']]),
  {t:'read', h:'Cuatro nombres, cuatro ideas', body:`<div class="tblwrap"><table class="tbl"><tr><th>Quién</th><th>Qué hizo</th><th>Su nombre quedó en…</th></tr><tr><td><strong>Alessandro Volta</strong> (italiano)</td><td>Inventó la primera <strong>pila</strong> eléctrica, de corriente continua</td><td>El <strong>voltio</strong></td></tr><tr><td><strong>André-Marie Ampère</strong> (francés)</td><td>Fundó el <strong>electromagnetismo</strong></td><td>El <strong>amperio</strong></td></tr><tr><td><strong>Thomas Edison</strong> (EE. UU.)</td><td>La <strong>bombilla</strong> (1879), la central eléctrica (1882), 1093 patentes. Distribución en <strong>corriente continua</strong></td><td>—</td></tr><tr><td><strong>Nikola Tesla</strong> (serbio)</td><td>Motor de <strong>corriente alterna</strong> y sistema polifásico (Westinghouse, 1888)</td><td>El <strong>tesla</strong> (inducción electromagnética)</td></tr></table></div>`},
  {t:'read', h:'Datos que suelen preguntar', body:`- Volta, tras los experimentos de Galvani con una rana, demostró en 1794 que **no hace falta tejido animal** para producir corriente: bastan metales.
- En 1820 **Oersted** vio que una aguja imantada se desvía cerca de una corriente. Ampère explicó ese hecho en una semana.
- Edison fue el primero en montar un **laboratorio de investigación industrial**.
- Edison: corriente **continua**. Tesla: corriente **alterna**.`},
  Q('¿Quién inventó la primera pila eléctrica?',['Volta','Edison','Tesla'],0,'La primera pila, de corriente continua, es de Volta. Por eso la unidad se llama voltio.'),
  Q('¿Con qué tipo de corriente se relaciona a Tesla?',['Alterna','Continua','Ninguna'],0,'Tesla: motor asíncrono de corriente alterna y sistema polifásico.'),
  Q('La unidad de intensidad, el amperio, recuerda a…',['Ampère','Volta','Edison'],0,'Ampère dio nombre al amperio, y fundó el electromagnetismo.')
 ]});

 /* ---------- t6 ---------- */
 L.push({id:'t6', title:'El generador: cómo se produce la electricidad', mins:10, steps:[
  R('Repaso de 1 minuto',[['¿Quién inventó la pila?','Volta.'],['¿Qué efecto de la corriente usan los motores?','El magnético.']]),
  {t:'read', h:'Qué es un generador', body:`Un **generador eléctrico** convierte **energía mecánica** (movimiento) en **energía eléctrica**.

Se basa en la **inducción electromagnética**, descubierta por **Michael Faraday** en **1831-1832**.

[[idea:Ley de Faraday: aparece una fuerza electromotriz en un conductor que rodea un flujo magnético que cambia.]]`},
  {t:'read', h:'Imán en movimiento, corriente en el cable', body:`Si mueves un imán cerca de un conductor (o al revés), aparece corriente.

- Faraday construyó el primero: el **disco de Faraday**, un disco de cobre que gira entre los polos de un imán. Daba una tensión continua pequeña y era **ineficiente**.
- Después se enrollaron los cables en **bobinas**: con **más vueltas, más voltaje**. El voltaje de salida es proporcional al número de vueltas.

${say('Dilo en voz alta: más vueltas, más voltaje.')}`},
  Q('¿Qué descubrió Faraday en 1831-1832?',['La inducción electromagnética','La pila eléctrica','La bombilla'],0,'La inducción electromagnética es el principio de todos los generadores.'),
  Q('Para tener más voltaje en un generador, la bobina debe tener…',['Más vueltas de cable','Menos vueltas de cable','Un cable más largo y sin enrollar'],0,'El voltaje de salida es proporcional al número de vueltas.'),
  {t:'read', h:'Tipos de centrales eléctricas', body:`Según la fuente de energía, las centrales son:

- **Termoeléctricas**: carbón, petróleo, gas, nucleares, solares termoeléctricas.
- **Hidroeléctricas**: ríos y mareas (mareomotrices).
- **Eólicas**: viento.
- **Solares fotovoltaicas**.

Casi todas, **menos las fotovoltaicas**, tienen un **alternador** movido por una **turbina**.

[[ok:La mayor parte de la electricidad mundial viene de las termoeléctricas y las hidroeléctricas.]]`},
  Q('¿Qué tipo de central NO usa alternador y turbina?',['Solar fotovoltaica','Eólica','Hidroeléctrica'],0,'Todas tienen alternador movido por una turbina, excepto las fotovoltaicas.'),
  Q('Un generador transforma…',['Energía mecánica en eléctrica','Energía eléctrica en mecánica','Calor en frío'],0,'Generador: mecánica → eléctrica. El motor hace al revés.')
 ]});

 /* ---------- t7 ---------- */
 L.push({id:'t7', title:'Centrales térmicas: ventajas e inconvenientes', mins:9, steps:[
  R('Repaso de 1 minuto',[['¿Qué mueve el alternador?','Una turbina.'],['¿Qué principio usa un generador?','La inducción electromagnética.']]),
  {t:'read', h:'Qué es una central termoeléctrica', body:`Es una instalación que genera electricidad **a partir de calor**. El calor puede venir de:

- La **combustión** (carbón, gas natural, petróleo, biocarburantes, residuos).
- La **fisión nuclear** del uranio.
- El **sol** o el interior de la Tierra.

[[ok:Calor → vapor → giro → electricidad. (Lo viste en la lección "La central termoeléctrica fósil".)]]`},
  {t:'read', h:'Ciclo combinado', body:`En una central de **ciclo combinado** se quema **gas natural** en una cámara de combustión y los gases mueven una **turbina de gas**.

Esos gases siguen muy calientes (unos **500 °C**). Se reutilizan para hacer **vapor** que mueve una **turbina de vapor**.

Cada turbina mueve un alternador. Así se aprovecha mejor el combustible.`},
  {t:'read', h:'Ventajas y desventajas', body:`<div class="tblwrap"><table class="tbl"><tr><th>Ventajas</th><th>Desventajas</th></tr><tr><td>No dependen del clima</td><td>Se acaba el combustible (reservas limitadas)</td></tr><tr><td>Construir la planta es más barato</td><td>Rendimiento bajo: solo el <strong>30-40 %</strong> de la energía se convierte en electricidad</td></tr><tr><td>El combustible es fácil de transportar hasta la central</td><td>Emiten <strong>CO₂</strong>, óxidos de azufre y de nitrógeno, polvo y residuos sólidos. Alteran el clima</td></tr></table></div>`},
  Q('El rendimiento medio de una central térmica es de…',['30-40 %','90 %','10 %'],0,'Solo el 30-40 % de la energía de la combustión se convierte en electricidad.'),
  Q('¿Cuál es una VENTAJA de las centrales térmicas?',['No dependen del clima','No emiten gases','Su combustible es infinito'],0,'Funcionan con cualquier tiempo. Emitir gases y agotar reservas son desventajas.'),
  Q('¿Qué gas emiten las centrales de combustión y se considera el principal responsable del calentamiento global?',['CO₂','Oxígeno','Nitrógeno puro'],0,'El dióxido de carbono (CO₂).')
 ]});

 /* ---------- t8 ---------- */
 L.push({id:'t8', title:'Calentamiento global: datos, París y consenso', mins:10, steps:[
  R('Repaso de 1 minuto',[['¿Qué diferencia hay entre efecto invernadero y calentamiento global?','El efecto invernadero es natural; el calentamiento global es la subida de temperatura por el exceso de gases.'],['¿Qué gas emiten las centrales de combustión?','CO₂.']]),
  {t:'read', h:'Los gases de efecto invernadero', body:`Los principales son:

- **Dióxido de carbono (CO₂)**.
- **Metano (CH₄)**.
- **Óxido nitroso (N₂O)**.

Dejan pasar la luz del Sol pero **retienen el calor**, como los cristales de un invernadero. Con un poco es **beneficioso**; con demasiados la Tierra se calienta.

[[idea:Cuantos más gases de invernadero, más calor retenido.]]`},
  {t:'read', h:'Datos del Site', body:`- La mayor parte del calentamiento de los **últimos 35 años** coincide con más emisiones humanas (NASA).
- **2015** fue el año más cálido desde que hay registros (**1880**).
- Consecuencias: **deshielo** (Groenlandia, Antártida), **subida del nivel del mar**, tormentas más intensas, **sequías** más largas.
- Se habla de **cambio climático** porque unas zonas se calientan, otras se enfrían y cambia la lluvia.`},
  Q('Según el Site, ¿desde qué año hay registros de temperatura?',['1880','1950','2000'],0,'Los registros arrancan en 1880; 2015 fue el año más cálido desde entonces.'),
  {t:'read', h:'Las cumbres del clima y París', body:`Las **COP** son reuniones internacionales anuales para decidir cómo reducir las emisiones.

- La primera fue en **Río, en 1992**.
- Tras 21 cumbres, en **2015** nació el **Acuerdo de París**, ratificado por casi 200 países.
- Objetivo: que la temperatura media suba **menos de 2 ºC**, y esforzarse para que no pase de **1,5 ºC** respecto a la época preindustrial.
- Con los compromisos actuales, nos encaminamos a unos **3 ºC**.
- La **COP25** fue en **Madrid**, con escasos avances.`},
  Q('¿Cuánto no debe superar el aumento de temperatura según el Acuerdo de París?',['2 ºC (y esforzarse por 1,5 ºC)','10 ºC','0 ºC'],0,'Menos de 2 ºC y hacer esfuerzos para no pasar de 1,5 ºC respecto a la época preindustrial.'),
  Q('¿Dónde se celebró la COP25?',['Madrid','París','Río de Janeiro'],0,'La COP25 fue en Madrid, bajo la presidencia de Chile.'),
  {t:'read', h:'Consenso científico y negacionismo', body:`El **IPCC** reúne a miles de científicos. Más del **97 %** de los estudios están de acuerdo: el calentamiento es real y lo impulsa la actividad humana.

Los **negacionistas** dicen que es un proceso natural o que se exagera. Entre sus motivos están los **intereses económicos** de la industria de los combustibles fósiles y la desconfianza en las instituciones.

[[warn:Aprende los dos puntos de vista, pero recuerda cuál es el consenso científico.]]`},
  Q('¿Qué significan las siglas IPCC?',['Panel Intergubernamental sobre el Cambio Climático','Instituto de Plantas y Cultivos','Impuesto sobre el Carbono'],0,'IPCC: Panel Intergubernamental de Cambio Climático de Naciones Unidas.')
 ]});

 /* ---------- t9 ---------- */
 L.push({id:'t9', title:'Croquis a mano', mins:6, steps:[
  R('Repaso de 1 minuto',[['¿Qué tres magnitudes eléctricas has aprendido?','Voltaje, intensidad y resistencia.']]),
  {t:'read', h:'Por qué dibujar a mano', body:`El **dibujo a mano alzada** es la primera herramienta del diseñador, del arquitecto y del tecnólogo.

Antes de usar el ordenador hay que **plasmar las ideas de forma rápida y clara**.

Los bocetos permiten:

- **Explorar** muchas ideas en poco tiempo.
- **Comunicar** a otros cómo imaginamos una solución.
- **Visualizar y mejorar** los proyectos.`},
  {t:'read', h:'Qué dice el currículo', body:`En el Site aparecen estos saberes:

- **Técnicas de representación gráfica**: acotación y escalas, boceto y croquis.
- **Vistas normalizadas** de una pieza.
- Aplicaciones **CAD** en 2D y 3D.
- Electricidad básica: elementos de un circuito, magnitudes y unidades, **simbología normalizada**.

[[ok:El Site no da más detalle de las vistas. Si el profe las explica en clase, repásalas con tus apuntes.]]`},
  Q('Un boceto sirve para…',['Explorar ideas rápido y comunicarlas','Dar el acabado final','Medir el voltaje'],0,'Los bocetos exploran, comunican y ayudan a mejorar el proyecto.')
 ]});

 /* ---------- Plan para el viernes ---------- */
 L.push({id:'t10', title:'Plan de estudio hasta el examen', mins:3, steps:[
  {t:'read', h:'Antes de empezar', body:`El examen es el **viernes**. El Site de la asignatura tiene cuatro temas del 1er trimestre y esta web los resume en lecciones cortas.

Esta es una **propuesta**: ajústala a lo que diga el profesor.

[[idea:15 minutos al día valen más que 1 hora el jueves.]]`},
  {t:'read', h:'Un tema por día', body:`<div class="levels"><div class="level"><b>1</b><span><strong>Hoy</strong>: lecciones "La corriente eléctrica" y "Voltaje, intensidad y resistencia".</span></div><div class="level"><b>2</b><span><strong>Mañana</strong>: "Volta, Ampère, Edison y Tesla" y "El generador".</span></div><div class="level"><b>3</b><span><strong>Jueves</strong>: "Centrales térmicas" y "Calentamiento global" + el examen de repaso 1.</span></div><div class="level"><b>4</b><span><strong>Viernes por la mañana</strong>: examen de repaso 2 y mirar solo lo que falles.</span></div></div>`}
 ]});

 /* ---------- Exámenes de repaso ---------- */
 const intro=(n)=>({t:'read', h:`Examen de repaso ${n}: cómo se hace`, body:`Preguntas de todo el 1er trimestre.

- Hazlo **sin mirar** los apuntes.
- Apunta **cuántas aciertas**.
- Si fallas, lee el porqué y **sigue**.

[[ok:Cada fallo te dice qué repasar.]]`});
 const fin=(n)=>({t:'read', h:`Resultado del examen ${n}`, body:`Cuenta tus aciertos.

- **Casi todas**: vas muy bien.
- **La mitad**: repasa las lecciones de lo que fallaste.

<div class="tblwrap"><table class="tbl"><tr><th>Si fallaste…</th><th>Repasa</th></tr><tr><td>Efectos, amperio, sentido de los electrones</td><td>La corriente eléctrica</td></tr><tr><td>Voltio, ohmio, aparatos</td><td>Voltaje, intensidad y resistencia</td></tr><tr><td>Científicos</td><td>Volta, Ampère, Edison y Tesla</td></tr><tr><td>Faraday, bobinas, tipos de central</td><td>El generador</td></tr><tr><td>Ventajas, rendimiento, ciclo combinado</td><td>Centrales térmicas</td></tr><tr><td>París, COP, IPCC, gases</td><td>Calentamiento global</td></tr></table></div>`});
 L.push({id:'tx1', title:'Examen de repaso 1 · Tecnología', mins:10, steps:[intro(1),
  Q('La unidad de la intensidad de corriente es…',['El amperio','El voltio','El ohmio'],0,'Intensidad = amperio (A).'),
  Q('En un circuito cerrado, los electrones van…',['Del polo negativo al positivo','Del positivo al negativo','No se mueven'],0,'De menos a más.'),
  Q('El efecto de la corriente que se usa en una bombilla es el…',['Lumínico','Químico','Fisiológico'],0,'La bombilla transforma energía eléctrica en luz.'),
  Q('La electrólisis es un ejemplo de efecto…',['Químico','Magnético','Calorífico'],0,'La corriente produce cambios químicos en conductores iónicos.'),
  Q('¿Qué aparato mide la resistencia?',['Óhmetro','Voltímetro','Ninguno'],0,'Resistencia, ohmios, óhmetro.'),
  Q('¿A quién se debe la primera pila eléctrica?',['A Volta','A Tesla','A Faraday'],0,'Volta inventó la pila, de corriente continua.'),
  Q('Un generador convierte…',['Energía mecánica en eléctrica','Energía eléctrica en luz','Calor en movimiento'],0,'Generador: mecánica a eléctrica.'),
  Q('¿Cómo se llama el principio que descubrió Faraday?',['Inducción electromagnética','Efecto invernadero','Ciclo combinado'],0,'Inducción electromagnética, en 1831-1832.'),
  O('Ordena la central térmica','Toca los pasos en orden.',['Caldera','Turbina','Generador','Condensador y torre de refrigeración','Transformador']),
  Q('Una desventaja de las centrales térmicas es…',['Emiten CO₂','Dependen del clima','Son muy caras de construir'],0,'Al quemar combustible emiten CO₂. Además, el rendimiento es bajo.'),
  Q('¿Qué es el efecto invernadero?',['Un fenómeno natural: gases que retienen el calor','La subida de temperatura por la industria','Un tipo de central'],0,'Es natural y necesario. El problema es el exceso de gases.'),
  Q('¿Cómo se conoce el CO₂ de hace miles de años?',['Con testigos de hielo','Con termómetros antiguos','Con satélites'],0,'Burbujas de aire antiguo en el hielo.'),
  Q('Al Acuerdo de París se llegó en…',['2015','1992','2025'],0,'La primera COP fue en 1992; el Acuerdo de París, en 2015.')
 ].concat([fin(1)])});
 L.push({id:'tx2', title:'Examen de repaso 2 · Tecnología', mins:10, steps:[intro(2),
  Q('¿Qué efecto de la corriente usan los motores eléctricos?',['Magnético','Fisiológico','Químico'],0,'La corriente crea un campo magnético.'),
  Q('El voltaje se mide en…',['Voltios','Amperios','Ohmios'],0,'Voltaje, voltio, voltímetro.'),
  Q('¿Qué hace la resistencia en un circuito?',['Se opone al paso de la corriente','Empuja a los electrones','Genera electricidad'],0,'Frena el paso de la corriente (como una tubería estrecha).'),
  Q('Tesla se asocia con la corriente…',['Alterna','Continua','Ninguna'],0,'Tesla: corriente alterna.'),
  Q('Edison se asocia con…',['La bombilla (1879)','El motor asíncrono','El disco de Faraday'],0,'Edison desarrolló la bombilla eléctrica en 1879.'),
  Q('Para más voltaje en un generador hay que usar…',['Más vueltas de cable en la bobina','Un imán más pequeño','Menos cable'],0,'El voltaje de salida es proporcional al número de vueltas.'),
  Q('¿Qué centrales NO tienen turbina y alternador?',['Las solares fotovoltaicas','Las eólicas','Las térmicas'],0,'Las fotovoltaicas generan electricidad directamente de la luz.'),
  Q('¿A qué temperatura salen los gases de la turbina de gas en un ciclo combinado?',['Unos 500 ºC','Unos 5 ºC','Unos 5.000 ºC'],0,'Siguen a unos 500 ºC y se reutilizan para hacer vapor.'),
  Q('¿Qué porcentaje de la energía de la combustión se convierte en electricidad?',['30-40 %','90-100 %','Menos del 5 %'],0,'Rendimiento bajo: 30-40 %.'),
  Q('Los negacionistas del cambio climático…',['Cuestionan que el calentamiento esté causado por las personas','Defienden que hay que reducir el CO₂','Son los científicos del IPCC'],0,'Niegan o minimizan el cambio climático; el consenso científico supera el 97 %.'),
  Q('Objetivo del Acuerdo de París:',['Subir menos de 2 ºC (mejor 1,5 ºC)','Subir 3 ºC','Subir 10 ºC'],0,'Menos de 2 ºC y esfuerzos para 1,5 ºC.'),
  Q('¿Quién presenta el reportaje "Una verdad incómoda"?',['Al Gore','Tim Ball','Tesla'],0,'"Una verdad incómoda" (2006) es de Al Gore. Tim Ball sale en el documental contrario.'),
  Q('Los bocetos y croquis sirven para…',['Plasmar ideas rápido a mano','Calcular voltajes','Construir centrales'],0,'El dibujo a mano alzada es la primera herramienta del tecnólogo.')
 ].concat([fin(2)])});

 /* ---------- Tarea Classroom ---------- */
 S.task={id:'ttask', title:'Calentamiento global: tus dos redacciones', due:'Anuncios del 5 y del 14 de octubre (sin fecha de entrega en Classroom)', instr:'Dos textos de Classroom: unas 200 palabras sin usar IA, y cinco medidas explicadas.', steps:[
  {t:'read', h:'Qué se pide', body:`Hay **dos** encargos en el tablón:

- **5 de octubre** (para hacer en clase, **sin IA**): justifica con razones científicas por qué el cambio climático está causado por la quema de combustibles fósiles, fruto del desarrollo humano. Unas **200 palabras**.
- **14 de octubre**: **nombra y explica al menos cinco medidas** para frenar el avance del cambio climático.

[[warn:Escríbelos tú, con tus palabras. Aquí tienes un guion para comprobar que no se te olvida nada.]]`},
  {t:'example', h:'Guion para las 200 palabras', intro:'Hazlo en el cuaderno, párrafo a párrafo, y luego destapa cada idea para comprobar.', steps:[
   {why:'Empieza por el mecanismo natural.', html:'El **efecto invernadero** es natural: gases como el CO₂, el metano y el óxido nitroso retienen el calor del Sol. Gracias a él, la temperatura es soportable.'},
   {why:'Explica qué hemos cambiado.', html:'Al quemar **combustibles fósiles** (carbón, petróleo, gas) en centrales, fábricas y vehículos, emitimos mucho **CO₂** extra. Hay más gases y se retiene más calor.'},
   {why:'Da pruebas científicas.', html:'La mayor parte del calentamiento ocurre en los **últimos 35 años**, a la vez que suben las emisiones. 2015 fue el año más cálido desde 1880. Los **testigos de hielo** muestran que el CO₂ actual supera cualquier máximo de miles de años.'},
   {why:'Responde a la idea "es un ciclo natural".', html:'Los cambios naturales fueron **lentos** (cientos de miles de años). Este es rapidísimo y coincide con la industrialización.'},
   {why:'Cierra con el consenso.', html:'El **IPCC** reúne a miles de científicos, y más del **97 %** de los estudios coinciden en que la actividad humana es la causa principal.'}
  ]},
  {t:'example', h:'Cinco medidas, para comparar', intro:'Piensa tus cinco medidas y explícalas. Luego destapa y mira si coinciden con alguna.', steps:[
   {why:'Medida 1', html:'**Usar más energías sin quema de combustible**: eólica, solar fotovoltaica, hidroeléctrica. No emiten CO₂ al producir electricidad.'},
   {why:'Medida 2', html:'**Reducir la quema de carbón, petróleo y gas**, que es la causa de la mayoría de las emisiones de CO₂.'},
   {why:'Medida 3', html:'**Mejorar el rendimiento y ahorrar energía**: las térmicas solo aprovechan el 30-40 %. Los ciclos combinados y el ahorro en casa gastan menos combustible.'},
   {why:'Medida 4', html:'**Cumplir los acuerdos internacionales**: el Acuerdo de París (menos de 2 ºC, mejor 1,5 ºC) y las cumbres COP.'},
   {why:'Medida 5', html:'**Informarse con sentido crítico** y no creer la desinformación: el consenso científico es muy claro.'}
  ]},
  {t:'read', h:'Antes de entregar', body:`- Mi texto tiene unas **200 palabras**.
- Lo he escrito **sin IA**.
- Menciono el **efecto invernadero**, el **CO₂** y los **combustibles fósiles**.
- Tengo al menos **cinco medidas**, cada una **explicada**.
- Lo he leído en voz alta una vez.`}
 ]};

 L.forEach(function(l){ if(!S.lessons.some(function(x){return x.id===l.id;})) S.lessons.push(l); });
})();
