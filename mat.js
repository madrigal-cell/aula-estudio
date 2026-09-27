/* ===================== MATEMÁTICAS ===================== */
SUBJECTS.mat = {
 id:'mat', name:'Matemáticas', color:'mat', tema:'Tema 1 · Números racionales e irracionales',
 lessons:[
 {id:'m1', title:'MCD y mcm: trocitos o cita', mins:10, steps:[
  {t:'read', h:'Una historia de dos amigas', body:`Ana y Bea van a la misma piscina.

Ana va cada **4 días**. Bea va cada **6 días**.

Hoy han coincidido. ¿Cuándo volverán a verse?

Piensa un momento antes de pasar. No hace falta calcular nada todavía.`},
  {t:'read', h:'Lo vemos en una línea de días', body:`Marco los días de Ana (cada 4) y los de Bea (cada 6):

<div class="scale"><span>1</span><span>2</span><span>3</span><span class="hi">4</span><span>5</span><span class="hi">6</span><span>7</span><span class="hi">8</span><span>9</span><span>10</span><span>11</span><span class="hi" style="outline:3px solid var(--ok)">12</span></div>

Ana: 4, 8, **12**… Bea: 6, **12**…

El primer día que se repite en las dos listas es el **12**.

Ese número tiene nombre: el **mínimo común múltiplo** (mcm) de 4 y 6.

[[idea:mcm = el **primer día en que coinciden**. Piensa: "mcm = **cita**".]]`},
  {t:'read', h:'Otra historia: cortar cintas', body:`Tengo dos cintas: una de **8 cm** y otra de **12 cm**.

Quiero cortarlas en trozos **iguales**, lo más **largos** posible, sin que sobre nada.

${bars([['8 cm',8,8],['12 cm',12,12]])}

Pruebo trozos de 4 cm:

${bars([['8 cm',2,2,'g'],['12 cm',3,3,'g']])}

Salen justos: 2 trozos y 3 trozos. Un trozo de 5 cm no valdría (sobraría cinta).

El **4** es el trozo más grande que cabe justo en los dos: el **máximo común divisor** (MCD) de 8 y 12.

[[idea:MCD = el **trozo más grande que cabe en los dos**. Piensa: "MCD = **trocitos**".]]`},
  {t:'read', h:'La única pregunta que tienes que hacerte', body:`Cuando un problema te dé dos números y no sepas cuál usar:

<div class="levels"><div class="level"><b>?</b><span>¿Me preguntan **cuándo coinciden** (se repiten, vuelven a verse)? → **mcm**, la cita.</span></div><div class="level"><b>?</b><span>¿Me preguntan por **trozos o grupos iguales lo más grandes posible**? → **MCD**, los trocitos.</span></div></div>

${say('Dilo en voz alta: "coinciden, mcm; trocitos, MCD".')}`},
  {t:'quiz', q:'Dos luces parpadean cada 15 s y cada 24 s. Ahora se encienden juntas. Para saber cuándo volverán a encenderse juntas…', opts:['Busco el MCD (trocitos)','Busco el mcm (cita)'], a:1, why:'"Volver a encenderse juntas" es coincidir → cita → mcm.'},
  {t:'quiz', q:'Tengo 18 caramelos de fresa y 24 de limón. Quiero hacer bolsas iguales, lo más grandes posible, sin que sobre ninguno. ¿Qué busco?', opts:['El MCD (trocitos)','El mcm (cita)'], a:0, why:'"Grupos iguales lo más grandes posible" → trocitos → MCD. MCD(18, 24) = 6 caramelos por tipo en cada bolsa.'},
  {t:'read', h:'Cómo se calcula (sin dibujar)', body:`Cuando los números son grandes no puedes dibujar la línea. Entonces se hace así:

Paso 1. Descompón cada número en factores primos.

48 = 2 · 2 · 2 · 2 · 3 = **2⁴ · 3**
60 = 2 · 2 · 3 · 5 = **2² · 3 · 5**

Paso 2. Elige los factores:

- **MCD** (trocitos): solo los que están **en los dos**, con el exponente **pequeño** → 2² · 3 = **12**
- **mcm** (cita): **todos** los que aparecen, con el exponente **grande** → 2⁴ · 3 · 5 = **240**

[[ok:MCD = pocos y pequeños. mcm = todos y grandes. El mcm siempre sale mayor.]]`},
  {t:'example', h:'Ahora con el ejemplo de la piscina', intro:'Comprueba que el método da lo mismo que la línea de días: mcm(4, 6).', steps:[
    {why:'Descompongo.', html:'4 = 2² &nbsp;&nbsp; 6 = 2 · 3'},
    {why:'Cita → todos los factores, exponente grande.', html:'mcm = 2² · 3 = 4 · 3 = <strong>12</strong>'},
    {why:'Lo mismo que vimos en la línea. El método funciona.', html:'Ana y Bea se ven el día 12 ✔'}]},
  {t:'example', h:'Ahora tú: mismo formato, otros números', intro:'Un aviso suena cada 12 minutos y otro cada 18. Suenan juntos ahora. ¿Cuándo vuelven a sonar juntos? Hazlo en el cuaderno y luego destapa.', steps:[
    {why:'¿Qué me preguntan? "Volver a sonar juntos" → cita → mcm.', html:'Busco mcm(12, 18)'},
    {why:'Descompongo.', html:'12 = 2² · 3 &nbsp;&nbsp; 18 = 2 · 3²'},
    {why:'Todos, exponente grande.', html:'2² · 3² = 4 · 9 = <strong>36</strong>'},
    {why:'Respuesta con su unidad.', html:'<strong>Dentro de 36 minutos.</strong>'}]},
  {t:'input', q:'MCD de 36 y 54. (Pista: 36 = 2² · 3², 54 = 2 · 3³. Trocitos → solo comunes, exponente pequeño.)', a:'18', hint:'Comunes: 2 y 3. Del 2 el pequeño es 2¹; del 3 el pequeño es 3². 2 · 9 = ?', why:'2 · 3² = 2 · 9 = 18.'}
 ]},
 {id:'m2', title:'Fracciones: verlas antes de escribirlas', mins:10, steps:[
  {t:'recall', h:'Repaso de 1 minuto', qs:[['¿Qué busco si me preguntan cuándo coinciden dos cosas?','El mcm (la cita).'],['¿Y si me piden trozos iguales lo más grandes posible?','El MCD (los trocitos).'],['¿Cuál sale siempre más grande, el MCD o el mcm?','El mcm.']]},
  {t:'read', h:'Una tableta de chocolate', body:`Una tableta tiene **4 onzas** iguales. Me como **3**.

${bars([['',4,3]])}

Me he comido **tres cuartos** de la tableta. Se escribe así:

<div class="math">${fr(3,4)}</div>

- El de **abajo** (rosa) dice el **tamaño del trozo**: cuartos. En cuántas partes está cortada la tableta.
- El de **arriba** (azul) dice **cuántos trozos** cojo: tres.

${say('Léelo siempre así: "tres cuartos". Nunca "tres sobre cuatro".')}`},
  {t:'read', h:'El de abajo pone el nombre, el de arriba cuenta', body:`Mira estas tres. Todas están cortadas en **cuartos** (mismo nombre). Solo cambia cuántos cojo:

${bars([['1 cuarto',4,1],['2 cuartos',4,2],['3 cuartos',4,3]])}

Y estas están cortadas distinto (nombres distintos), aunque coja 1 trozo en las tres:

${bars([['1 medio',2,1],['1 cuarto',4,1],['1 octavo',8,1]])}

[[idea:Cuantas **más** partes hago, **más pequeño** es cada trozo. Un octavo es más pequeño que un cuarto, aunque el 8 sea mayor que el 4.]]`},
  {t:'quiz', q:'¿Cuál es más grande, {1/3} o {1/5}?', opts:['{1/3}','{1/5}','Son iguales'], a:0, why:'Cortar en 3 da trozos más grandes que cortar en 5. Un tercio es mayor que un quinto.'},
  {t:'read', h:'Dos fracciones que son la misma', body:`Mira:

${bars([['1 medio',2,1],['2 cuartos',4,2],['4 octavos',8,4]])}

La parte azul es **la misma** en las tres. Son fracciones **equivalentes**: se escriben distinto pero valen igual.

{1/2} = {2/4} = {4/8}

¿Qué ha pasado de una a otra? He **multiplicado arriba y abajo por el mismo número** (por 2). Más trozos, pero más pequeños: la cantidad no cambia.

[[warn:Si **sumas** el mismo número arriba y abajo, sí cambia la cantidad. Solo vale multiplicar o dividir.]]`},
  {t:'read', h:'Simplificar = hacer los trozos más grandes', body:`Simplificar es el camino de vuelta: **dividir** arriba y abajo por el mismo número.

${bars([['6 octavos',8,6],['3 cuartos',4,3]])}

{6/8} → divido los dos entre 2 → {3/4}. Misma cantidad, trozos más grandes.

Cuando ya no puedes dividir más, la fracción es **irreducible**. El atajo: divide por el **MCD** (los trocitos, ¿te acuerdas?).

{42/56}: MCD(42, 56) = 14 → {3/4}

[[ok:Si no ves el MCD, ve dividiendo por 2, por 3, por 5… hasta que no se pueda. Llegas al mismo sitio.]]`},
  {t:'input', q:'Simplifica {42/63}. Escribe la fracción irreducible, por ejemplo 2/5.', a:['2/3'], hint:'Los dos se dividen entre 3: 14/21. ¿Y otra vez? Los dos se dividen entre 7.', why:'42/63 → entre 3 → 14/21 → entre 7 → 2/3. (Directo: MCD = 21.)'},
  {t:'read', h:'El signo menos', body:`El menos puede ir arriba, abajo o delante. Es la **misma** fracción:

{-3/4} = {3/-4} = {-3/4}

Si hay **dos** menos, se anulan: {-3/-4} = {3/4}.

[[ok:Pon siempre el menos **delante** y deja el de abajo positivo. Menos líos.]]`},
  {t:'read', h:'Comparar: mismo nombre primero', body:`Para comparar dos fracciones, dales el **mismo nombre** (el mismo de abajo). Luego mira cuál tiene más trozos.

¿Qué es más, {2/3} o {3/4}?

${bars([['2 tercios',3,2],['3 cuartos',4,3]])}

Cambio las dos a **doceavos** (12 es el mcm de 3 y 4, la cita):

${bars([['8 doceavos',12,8],['9 doceavos',12,9]])}

{2/3} = {8/12} y {3/4} = {9/12}. Gana **{3/4}**.

[[warn:Con negativos es al revés: −9 es **menor** que −8. Cuanto más lejos del cero por la izquierda, más pequeño.]]`},
  {t:'quiz', q:'Ordena de menor a mayor: {-5/6}, {3/4}, 0', opts:['0 < {-5/6} < {3/4}','{-5/6} < 0 < {3/4}','{3/4} < 0 < {-5/6}'], a:1, why:'Los negativos son siempre menores que 0, y los positivos mayores. No hace falta ni calcular.'}
 ]},
 {id:'m3', title:'Sumar y restar: mismo nombre', mins:12, steps:[
  {t:'recall', h:'Repaso de 1 minuto', qs:[['En {3/4}, ¿qué dice el 4?','El tamaño del trozo: cuartos. En cuántas partes se corta.'],['¿Cómo consigo una fracción equivalente?','Multiplicando (o dividiendo) arriba y abajo por el mismo número.'],['¿Qué es más grande, {1/4} o {1/8}?','{1/4}. Menos partes = trozos más grandes.']]},
  {t:'read', h:'Sumar trozos del mismo tamaño', body:`Una onza de chocolate más otra onza de chocolate son dos onzas. Fácil.

${bars([['1 cuarto',4,1],['+ 2 cuartos',4,2],['= 3 cuartos',4,3]])}

{1/4} + {2/4} = {3/4}

Sumo los de **arriba** (cuántos trozos). El de **abajo** no cambia: siguen siendo cuartos.

[[warn:El nombre no se suma. {1/4} + {2/4} **no** es {3/8}. Los trozos no se han hecho más pequeños.]]`},
  {t:'read', h:'¿Y si los trozos son de distinto tamaño?', body:`{1/2} + {1/4}: un medio y un cuarto. No puedo sumar "1 + 1 = 2 trozos" porque son de tamaños distintos.

${bars([['1 medio',2,1],['1 cuarto',4,1]])}

Solución: corto el medio en dos, y ya tengo todo en cuartos.

${bars([['2 cuartos',4,2],['+ 1 cuarto',4,1],['= 3 cuartos',4,3]])}

{1/2} = {2/4} &nbsp;→&nbsp; {2/4} + {1/4} = **{3/4}**

[[idea:Primero el **mismo nombre** (mismo de abajo). Después sumo los de arriba.]]`},
  {t:'quiz', q:'{1/3} + {1/6} = ?', opts:['{2/9}','{1/2}','{2/6}'], a:1, why:'Corto los tercios en sextos: {1/3} = {2/6}. {2/6} + {1/6} = {3/6} = {1/2}.'},
  {t:'read', h:'¿Qué nombre les pongo? La cita', body:`Cuando los dos nombres son distintos, busco un nombre que valga para los dos: el **mcm** de los de abajo. Es la cita otra vez.

{5/6} y {3/4} → mcm(6, 4) = **12**. Los pongo en doceavos.

Para cambiar {5/6} a doceavos me pregunto: "¿por cuánto multiplico 6 para llegar a 12?" Por 2. Pues arriba también por 2:

<div class="math">${fr(5,6)} <span class="op">→</span> ${fr('5 · 2','6 · 2')} <span class="op">=</span> ${fr(10,12)}</div>

Y {3/4}: de 4 a 12 multiplico por 3. Arriba también por 3: {9/12}.

${say('En voz alta: "de 6 a 12, por 2; arriba también por 2".')}`},
  {t:'example', h:'Ejemplo completo, un paso cada vez', intro:'Calcula {5/6} − {3/4} + {2/3}', steps:[
    {why:'Nombres distintos (6, 4, 3). Busco la cita: mcm.', html:'mcm(6, 4, 3) = <strong>12</strong>'},
    {why:'Cambio cada una a doceavos. "¿Por cuánto llego a 12?" y lo mismo arriba.', html:'<div class="math">'+fr(5,6)+'= '+fr(10,12)+'<span class="op">&nbsp;&nbsp;</span>'+fr(3,4)+'= '+fr(9,12)+'<span class="op">&nbsp;&nbsp;</span>'+fr(2,3)+'= '+fr(8,12)+'</div>'},
    {why:'Ya tienen el mismo nombre. Opero solo arriba: 10 − 9 + 8.', html:'<div class="math">'+fr(10,12)+'<span class="op">−</span>'+fr(9,12)+'<span class="op">+</span>'+fr(8,12)+'<span class="op">=</span>'+fr(9,12)+'</div>'},
    {why:'Simplifico (entre 3).', html:'<div class="math">'+fr(9,12)+'<span class="op">=</span>'+fr(3,4)+'</div><strong>Resultado: tres cuartos</strong>'}]},
  {t:'example', h:'Ahora tú: mismo formato', intro:'Calcula {3/4} − {5/6} en el cuaderno. Sigue los mismos 4 pasos. Luego destapa.', steps:[
    {why:'Cita.', html:'mcm(4, 6) = 12'},
    {why:'Mismo nombre.', html:'<div class="math">'+fr(3,4)+'= '+fr(9,12)+'<span class="op">&nbsp;&nbsp;</span>'+fr(5,6)+'= '+fr(10,12)+'</div>'},
    {why:'Opero arriba: 9 − 10 = −1.', html:'<div class="math">'+fr(9,12)+'<span class="op">−</span>'+fr(10,12)+'<span class="op">=</span>'+fr(1,12,true)+'</div>'},
    {why:'No se simplifica. Resultado negativo: es normal, restaba más de lo que tenía.', html:'<strong>Resultado: −1/12</strong>'}]},
  {t:'read', h:'Un número entero también tiene nombre', body:`El 2 es "dos enteros". Para sumarlo o restarlo con fracciones, le pongo el nombre que haga falta.

2 − {3/5} → "¿cuántos quintos son 2 enteros?"

${bars([['1 entero',5,5],['1 entero',5,5]])}

Son 10 quintos: 2 = {10/5}.

{10/5} − {3/5} = **{7/5}**`},
  {t:'input', q:'Calcula {7/12} + {5/18}. Pista: la cita de 12 y 18 es 36. Escribe el resultado como fracción (por ejemplo 3/4).', a:'31/36', hint:'De 12 a 36, por 3 → 21/36. De 18 a 36, por 2 → 10/36. Suma arriba.', why:'{21/36} + {10/36} = {31/36}.'}
 ]},
 {id:'m4', title:'Multiplicar y dividir fracciones', mins:12, steps:[
  {t:'read', h:'Multiplicar: la fácil', body:`Multiplica **arriba con arriba** y **abajo con abajo**. No hace falta denominador común.

{2/3} · {5/7} = {10/21}

[[ok:Si puedes, simplifica **antes** de multiplicar: es más cómodo con números pequeños.
{14/15} · {25/21}: el 14 y el 21 se dividen por 7; el 25 y el 15 por 5 → {2/3} · {5/3} = {10/9}]]`},
  {t:'read', h:'Fracción de una cantidad', body:`"{3/5} de 240" significa multiplicar: {3/5} · 240.

Truco: divide entre el de abajo y multiplica por el de arriba.

240 : 5 = 48 &nbsp;→&nbsp; 48 · 3 = **144**

Una biblioteca con 240 libros tiene prestados {3/5}: son 144 libros. Quedan 240 − 144 = 96.`},
  {t:'read', h:'Dividir: da la vuelta a la segunda', body:`Para dividir, **multiplica por la inversa** de la segunda fracción (la segunda "se da la vuelta").

{-3/5} : {9/10} = {-3/5} · {10/9} = {-30/45} = **{-2/3}**

[[warn:Solo se da la vuelta la fracción **por la que divides** (la segunda). La primera se queda igual.]]

3 litros de zumo en botellas de {3/4} de litro: 3 : {3/4} = 3 · {4/3} = **4 botellas**.`},
  {t:'read', h:'Opuesta e inversa (no son lo mismo)', body:`Son dos cosas que se confunden mucho:

- **Opuesta**: cambia el signo. La opuesta de {2/3} es {-2/3}.
- **Inversa**: da la vuelta. La inversa de {2/3} es {3/2}.

[[idea:Opuesto → "lo contrario" (signo). Inverso → "al revés" (arriba y abajo se cambian).
El 0 tiene opuesto (0), pero **no tiene inverso**: no se puede dividir entre 0.]]`},
  {t:'quiz', q:'¿Cuál es la inversa de {-5/7}?', opts:['{5/7}','{-7/5}','{7/5}'], a:1, why:'Inversa = dar la vuelta. El signo se queda: {-7/5}. La opuesta sería {5/7}.'},
  {t:'quiz', q:'{-8/9} : {4/3} = ?', opts:['{-2/3}','{-32/27}','{-4/3}'], a:0, why:'{-8/9} · {3/4} = {-24/36} = {-2/3}.'}
 ]},
 {id:'m5', title:'Jerarquía y problemas "de lo que queda"', mins:12, steps:[
  {t:'read', h:'El orden de las operaciones', body:`Cuando hay varias operaciones mezcladas, el orden es:

<div class="levels"><div class="level"><b>1</b>Paréntesis (de dentro hacia fuera)</div><div class="level"><b>2</b>Potencias y raíces</div><div class="level"><b>3</b>Multiplicaciones y divisiones, de izquierda a derecha</div><div class="level"><b>4</b>Sumas y restas, de izquierda a derecha</div></div>

[[warn:Multiplicar **no** tiene prioridad sobre dividir. Van en el mismo nivel, de izquierda a derecha.]]`},
  {t:'example', h:'Una operación combinada', intro:'Calcula {2/3} · ( {3/4} − {1/2} ) + {5/6} : {5/3}', steps:[
    {why:'Primero el paréntesis. mcm(4, 2) = 4.', html:'<div class="math">'+fr(3,4)+'<span class="op">−</span>'+fr(2,4)+'<span class="op">=</span>'+fr(1,4)+'</div>'},
    {why:'Cambio la división por multiplicar por la inversa.', html:'<div class="math">'+fr(2,3)+'<span class="op">·</span>'+fr(1,4)+'<span class="op">+</span>'+fr(5,6)+'<span class="op">·</span>'+fr(3,5)+'</div>'},
    {why:'Hago las dos multiplicaciones (simplificando).', html:'<div class="math">'+fr(2,12)+'<span class="op">+</span>'+fr(15,30)+'<span class="op">=</span>'+fr(1,6)+'<span class="op">+</span>'+fr(1,2)+'</div>'},
    {why:'Ahora la suma: mcm(6, 2) = 6.', html:'<div class="math">'+fr(1,6)+'<span class="op">+</span>'+fr(3,6)+'<span class="op">=</span>'+fr(4,6)+'<span class="op">=</span>'+fr(2,3)+'</div><strong>Resultado: 2/3</strong>'}]},
  {t:'read', h:'"Del total" o "de lo que queda"', body:`En los problemas, fíjate a qué se refiere cada fracción.

Un depósito tiene 120 L. Se gasta {1/4} del agua y **después** {2/5} **de lo que queda**.

1. Primer gasto: {1/4} de 120 = 30 L. Quedan 90 L.
2. Segundo gasto: {2/5} **de 90** (no de 120) = 36 L.
3. Quedan 90 − 36 = **54 L**.

[[warn:"De lo que queda" significa que la segunda fracción se aplica al **resto**, no al total inicial.]]`},
  {t:'quiz', q:'Se gasta {1/5} de 75 € y después {1/3} de lo que queda. ¿Cuánto dinero queda?', opts:['40 €','50 €','35 €'], a:0, why:'{1/5} de 75 = 15 → quedan 60. {1/3} de 60 = 20 → quedan 40 €.'},
  {t:'quiz', q:'{3/4} − {2/3} · {9/8}. ¿Qué hago primero?', opts:['La resta, porque va primero','La multiplicación','Da igual el orden'], a:1, why:'Multiplicar va antes que restar. {2/3} · {9/8} = {3/4}, y {3/4} − {3/4} = 0.'}
 ]},
 {id:'m6', title:'Decimales y fracción generatriz', mins:12, steps:[
  {t:'read', h:'Tres tipos de decimales', body:`Cuando divides una fracción, el decimal puede ser:

<div class="tblwrap"><table class="tbl"><tr><th>Tipo</th><th>Cómo es</th><th>Ejemplo</th></tr><tr><td>Exacto</td><td>Se acaba</td><td>{7/8} = 0,875</td></tr><tr><td>Periódico puro</td><td>Se repite desde la coma</td><td>{5/11} = 0,4545… = 0,<u>45</u></td></tr><tr><td>Periódico mixto</td><td>Primero unas cifras, luego se repite</td><td>{7/12} = 0,58333… = 0,58<u>3</u></td></tr></table></div>

El trozo que se repite es el **periodo** (se subraya o se pone una raya encima). Las cifras de antes son el **anteperiodo**.`},
  {t:'read', h:'Adivinar el tipo sin dividir', body:`Simplifica la fracción y mira el **denominador**:

- Solo tiene factores 2 y/o 5 → **exacto**. ({9/40}: 40 = 2³ · 5)
- No tiene ni 2 ni 5 → **periódico puro**. ({4/33}: 33 = 3 · 11)
- Tiene 2 o 5 **y además** otros → **periódico mixto**. ({7/30}: 30 = 2 · 3 · 5)

[[warn:Simplifica antes: {3/6} = {1/2} = 0,5 es exacto aunque el 6 tenga un 3.]]`},
  {t:'read', h:'De decimal exacto a fracción', body:`Escribe el número **sin coma** arriba y un 1 seguido de tantos **ceros como decimales** abajo. Luego simplifica.

2,375 → {2375/1000} → {19/8}

0,875 → {875/1000} → {7/8}`},
  {t:'read', h:'De periódico puro a fracción', body:`Regla: arriba, el número sin coma **menos** la parte entera. Abajo, tantos **9** como cifras tenga el periodo.

1,<u>27</u> → {127 − 1/99} = {126/99} = **{14/11}**

0,<u>6</u> → {6 − 0/9} = {6/9} = **{2/3}**`},
  {t:'read', h:'De periódico mixto a fracción', body:`Regla: arriba, el número hasta completar un periodo **menos** el número hasta el anteperiodo. Abajo, un **9 por cada cifra del periodo** y un **0 por cada cifra del anteperiodo**.

2,1<u>6</u> → {216 − 21/90} = {195/90} = **{13/6}**

0,2<u>18</u> → {218 − 2/990} = {216/990} = **{12/55}**

[[ok:9 = por cada cifra que se repite. 0 = por cada cifra que no se repite (después de la coma).]]`},
  {t:'quiz', q:'¿Qué tipo de decimal da {7/22}? (22 = 2 · 11)', opts:['Exacto','Periódico puro','Periódico mixto'], a:2, why:'Tiene un 2 y además un 11 → mixto. {7/22} = 0,3<u>18</u>.'},
  {t:'quiz', q:'Fracción generatriz de 0,<u>27</u>', opts:['{27/100}','{27/99} = {3/11}','{27/90}'], a:1, why:'Periódico puro con dos cifras en el periodo → dos nueves abajo. {27/99} = {3/11}.'}
 ]},
 {id:'m7', title:'Irracionales y números reales', mins:8, steps:[
  {t:'read', h:'Un número que nunca se repite', body:`Un número **irracional** tiene infinitos decimales y **no se repiten** con ningún patrón. No se puede escribir como fracción.

√2 = 1,41421356… &nbsp;&nbsp; π = 3,14159265…

- Una raíz es irracional si el número **no es un cuadrado perfecto**: √7 es irracional; √49 = 7 no.
- π es irracional.

[[warn:Un decimal no es irracional por tener muchas cifras. Lo importante es que sea **infinito y sin periodo**.]]`},
  {t:'read', h:'Las familias de números', body:`<div class="levels"><div class="level"><b>ℕ</b>Naturales: 0, 1, 2, 3…</div><div class="level"><b>ℤ</b>Enteros: los naturales y los negativos (−3, −2…)</div><div class="level"><b>ℚ</b>Racionales: todo lo que se puede escribir como fracción (enteros, decimales exactos y periódicos)</div><div class="level"><b>ℝ</b>Reales: los racionales **más** los irracionales</div></div>

Cada familia contiene a la anterior: ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ.

Para clasificar un número, busca la familia **más pequeña** en la que cabe: −8 es entero (ℤ); √81 = 9 es natural (ℕ); √10 es irracional.`},
  {t:'quiz', q:'¿Cuál de estos números es irracional?', opts:['√36','√6','0,<u>18</u>'], a:1, why:'√36 = 6 (natural). 0,18 periódico es racional (una fracción). √6 no es cuadrado perfecto → irracional.'},
  {t:'quiz', q:'¿Entre qué dos enteros está √7?', opts:['Entre 2 y 3','Entre 3 y 4','Entre 6 y 8'], a:0, why:'2² = 4 y 3² = 9. Como 4 < 7 < 9, √7 está entre 2 y 3 (≈ 2,65).'}
 ]},
 {id:'m8', title:'Aproximar y medir el error', mins:10, steps:[
  {t:'read', h:'Truncar y redondear', body:`Aproximar = cambiar un número por otro más sencillo y cercano. Usamos **≈** (aproximadamente), no =.

- **Truncar**: cortar. Quito las cifras que sobran. 4,5268 → 4,52
- **Redondear**: elegir el más cercano. Miro la primera cifra que quito: si es 5 o más, subo la anterior. 4,5268 → 4,53

Si la aproximación es menor que el valor real es **por defecto**; si es mayor, **por exceso**.`},
  {t:'read', h:'El error', body:`- **Error absoluto**: cuánto me alejo. Ea = |valor exacto − valor aproximado|. Tiene unidades.
- **Error relativo**: comparo el error con el tamaño del número. Er = Ea : |valor exacto|. Sin unidades. Multiplicado por 100 es el error en %.

Una longitud de 3,45 m se aproxima por 3,5 m:
Ea = |3,45 − 3,5| = 0,05 m
Er = 0,05 : 3,45 ≈ 0,0145 → **1,45 %**

[[idea:Un error de 1 m en 20 m (5 %) es peor que un error de 2 m en 100 m (2 %), aunque 2 m sea más que 1 m. Por eso existe el error relativo.]]`},
  {t:'quiz', q:'Redondea 3,995 a las centésimas', opts:['3,99','4,00','3,90'], a:1, why:'La tercera cifra decimal es 5 → subo la anterior: 3,99 + 0,01 = 4,00.'},
  {t:'input', q:'Una longitud exacta de 2,48 m se aproxima por 2,5 m. ¿Cuál es el error absoluto en metros? (escribe por ejemplo 0,03)', a:['0,02','0.02'], hint:'Resta y quítale el signo.', why:'|2,48 − 2,5| = 0,02 m. El relativo sería 0,02 : 2,48 ≈ 0,008 → 0,81 %.'}
 ]}
 ],
 task:{id:'mtask', title:'Tarea para hoy: Operaciones con fracciones', due:'Se entrega hoy, 27 de septiembre, 23:59', instr:'Copia los ejercicios en el cuaderno, resuélvelos paso a paso, haz una foto en vertical de cada hoja y súbela a Classroom.', steps:[
  {t:'read', h:'Antes de empezar', body:`Hay 3 bloques: dos ejercicios "de palabras a números" (10 y 11) y cuatro fracciones grandes (b, c, d, e).

Vamos uno a uno. En cada uno primero lo intentas tú en el cuaderno y luego destapas los pasos para comprobar.

[[ok:Recuerda: **opuesto** = cambio el signo. **Inverso** = le doy la vuelta. **Cuadrado** = lo multiplico por sí mismo. **Triple** = lo multiplico por 3.]]`},
  {t:'example', h:'Ejercicio 10 a)', intro:'Suma un tercio, el cuadrado de un cuarto y el opuesto de cinco sextos.', steps:[
    {why:'Traduzco cada trozo.', html:'un tercio = '+fr(1,3)+' &nbsp; cuadrado de un cuarto = ('+fr(1,4)+')² = '+fr(1,16)+' &nbsp; opuesto de cinco sextos = '+fr(5,6,true)},
    {why:'Escribo la expresión.', html:'<div class="math">'+fr(1,3)+'<span class="op">+</span>'+fr(1,16)+'<span class="op">−</span>'+fr(5,6)+'</div>'},
    {why:'mcm(3, 16, 6) = 48. Convierto.', html:'<div class="math">'+fr(16,48)+'<span class="op">+</span>'+fr(3,48)+'<span class="op">−</span>'+fr(40,48)+'</div>'},
    {why:'Opero arriba: 16 + 3 − 40 = −21. Simplifico por 3.', html:'<div class="math">'+fr(21,48,true)+'<span class="op">=</span>'+fr(7,16,true)+'</div><strong>Resultado: −7/16</strong>'}]},
  {t:'example', h:'Ejercicio 10 b)', intro:'Suma el inverso de cinco tercios, tres décimos y el cuadrado de siete décimos.', steps:[
    {why:'Traduzco.', html:'inverso de '+fr(5,3)+' = '+fr(3,5)+' &nbsp; tres décimos = '+fr(3,10)+' &nbsp; ('+fr(7,10)+')² = '+fr(49,100)},
    {why:'mcm(5, 10, 100) = 100.', html:'<div class="math">'+fr(60,100)+'<span class="op">+</span>'+fr(30,100)+'<span class="op">+</span>'+fr(49,100)+'</div>'},
    {why:'Sumo arriba: 60 + 30 + 49 = 139. No se simplifica.', html:'<strong>Resultado: 139/100</strong>'}]},
  {t:'example', h:'Ejercicio 10 c)', intro:'Suma el opuesto de tres medios, el opuesto de menos once cuartos y el inverso de ocho tercios.', steps:[
    {why:'Traduzco. Ojo: el opuesto de un negativo es positivo.', html:'opuesto de '+fr(3,2)+' = '+fr(3,2,true)+' &nbsp; opuesto de '+fr(11,4,true)+' = '+fr(11,4)+' &nbsp; inverso de '+fr(8,3)+' = '+fr(3,8)},
    {why:'mcm(2, 4, 8) = 8.', html:'<div class="math">'+fr(12,8,true)+'<span class="op">+</span>'+fr(22,8)+'<span class="op">+</span>'+fr(3,8)+'</div>'},
    {why:'Arriba: −12 + 22 + 3 = 13.', html:'<strong>Resultado: 13/8</strong>'}]},
  {t:'example', h:'Ejercicio 11 a)', intro:'Multiplica el opuesto de cuatro quintos por el inverso de tres décimos y por −2.', steps:[
    {why:'Traduzco.', html:fr(4,5,true)+' <span class="op">·</span> '+fr(10,3)+' <span class="op">·</span> (−2)'},
    {why:'Signos: menos · más · menos = **más**. Multiplico arriba y abajo.', html:'<div class="math">'+fr('4 · 10 · 2','5 · 3')+'<span class="op">=</span>'+fr(80,15)+'</div>'},
    {why:'Simplifico por 5.', html:'<strong>Resultado: 16/3</strong>'}]},
  {t:'example', h:'Ejercicio 11 b)', intro:'Multiplica el triple de cinco sextos por el inverso de menos doce quintos y por un tercio.', steps:[
    {why:'Traduzco. Triple = · 3. Inverso de −12/5 = −5/12.', html:'3 · '+fr(5,6)+' = '+fr(15,6)+' &nbsp;&nbsp; '+fr(15,6)+' <span class="op">·</span> '+fr(5,12,true)+' <span class="op">·</span> '+fr(1,3)},
    {why:'Un solo signo menos → resultado negativo. Multiplico.', html:'<div class="math">'+fr('15 · 5 · 1','6 · 12 · 3',true)+'<span class="op">=</span>'+fr(75,216,true)+'</div>'},
    {why:'Simplifico por 3.', html:'<strong>Resultado: −25/72</strong>'}]},
  {t:'read', h:'Fracciones grandes: el método', body:`Una fracción con fracciones dentro se resuelve así:

<div class="levels"><div class="level"><b>1</b>Resuelvo lo de **arriba** hasta dejar una sola fracción.</div><div class="level"><b>2</b>Resuelvo lo de **abajo** hasta dejar una sola fracción.</div><div class="level"><b>3</b>Divido: arriba **por la inversa** de abajo.</div></div>

[[ok:Tapa con la mano la parte de abajo mientras haces la de arriba. Así solo miras una cosa.]]`},
  {t:'example', h:'Apartado b)', intro:'Arriba: {3/4} + {1/2}. Abajo: {3/5} · {1/3}. (Solución: 25/4)', steps:[
    {why:'Arriba. mcm = 4.', html:'<div class="math">'+fr(3,4)+'<span class="op">+</span>'+fr(2,4)+'<span class="op">=</span>'+fr(5,4)+'</div>'},
    {why:'Abajo. Multiplico.', html:'<div class="math">'+fr(3,5)+'<span class="op">·</span>'+fr(1,3)+'<span class="op">=</span>'+fr(3,15)+'<span class="op">=</span>'+fr(1,5)+'</div>'},
    {why:'Divido: arriba por la inversa de abajo.', html:'<div class="math">'+fr(5,4)+'<span class="op">:</span>'+fr(1,5)+'<span class="op">=</span>'+fr(5,4)+'<span class="op">·</span>'+fr(5,1)+'<span class="op">=</span>'+fr(25,4)+'</div><strong>Resultado: 25/4 ✔</strong>'}]},
  {t:'example', h:'Apartado c)', intro:'Arriba: {5/12} − {1/3}. Abajo: {1/2} : {5/6}. (Solución: 5/36)', steps:[
    {why:'Arriba. mcm = 12.', html:'<div class="math">'+fr(5,12)+'<span class="op">−</span>'+fr(4,12)+'<span class="op">=</span>'+fr(1,12)+'</div>'},
    {why:'Abajo. Dividir = multiplicar por la inversa.', html:'<div class="math">'+fr(1,2)+'<span class="op">·</span>'+fr(6,5)+'<span class="op">=</span>'+fr(6,10)+'<span class="op">=</span>'+fr(3,5)+'</div>'},
    {why:'Divido arriba entre abajo.', html:'<div class="math">'+fr(1,12)+'<span class="op">·</span>'+fr(5,3)+'<span class="op">=</span>'+fr(5,36)+'</div><strong>Resultado: 5/36 ✔</strong>'}]},
  {t:'example', h:'Apartado d)', intro:'Arriba: {2/5} − {1/2} + {1/3}. Abajo: {2/3} · {6/5}. (Solución: 7/24)', steps:[
    {why:'Arriba. mcm(5, 2, 3) = 30.', html:'<div class="math">'+fr(12,30)+'<span class="op">−</span>'+fr(15,30)+'<span class="op">+</span>'+fr(10,30)+'<span class="op">=</span>'+fr(7,30)+'</div>'},
    {why:'Abajo.', html:'<div class="math">'+fr(2,3)+'<span class="op">·</span>'+fr(6,5)+'<span class="op">=</span>'+fr(12,15)+'<span class="op">=</span>'+fr(4,5)+'</div>'},
    {why:'Divido.', html:'<div class="math">'+fr(7,30)+'<span class="op">·</span>'+fr(5,4)+'<span class="op">=</span>'+fr(35,120)+'<span class="op">=</span>'+fr(7,24)+'</div><strong>Resultado: 7/24 ✔</strong>'}]},
  {t:'example', h:'Apartado e)', intro:'Arriba: {1/2} + {3/2} · {1/6}. Abajo: ( {1/2} + {3/2} ) : {1/6}. (Solución: 1/16)', steps:[
    {why:'Arriba: primero la multiplicación (jerarquía), luego la suma.', html:'<div class="math">'+fr(3,2)+'<span class="op">·</span>'+fr(1,6)+'<span class="op">=</span>'+fr(3,12)+'<span class="op">=</span>'+fr(1,4)+'</div><div class="math">'+fr(1,2)+'<span class="op">+</span>'+fr(1,4)+'<span class="op">=</span>'+fr(2,4)+'<span class="op">+</span>'+fr(1,4)+'<span class="op">=</span>'+fr(3,4)+'</div>'},
    {why:'Abajo: primero el paréntesis, luego la división.', html:'<div class="math">'+fr(1,2)+'<span class="op">+</span>'+fr(3,2)+'<span class="op">=</span>'+fr(4,2)+'<span class="op">=</span> 2</div><div class="math">2 <span class="op">:</span>'+fr(1,6)+'<span class="op">=</span> 2 · 6 <span class="op">=</span> 12</div>'},
    {why:'Divido arriba entre abajo.', html:'<div class="math">'+fr(3,4)+'<span class="op">:</span> 12 <span class="op">=</span>'+fr(3,4)+'<span class="op">·</span>'+fr(1,12)+'<span class="op">=</span>'+fr(3,48)+'<span class="op">=</span>'+fr(1,16)+'</div><strong>Resultado: 1/16 ✔</strong>'}]},
  {t:'read', h:'Antes de hacer la foto', body:`Repasa esta lista:

- ¿Está cada ejercicio con su número (10 a, 10 b…)?
- ¿Se ven los pasos intermedios, no solo el resultado?
- ¿Las fracciones finales están simplificadas?
- ¿La foto está en vertical y se lee bien?

[[ok:La profesora valora el proceso, no solo el resultado. Un paso equivocado bien explicado suma más que un número suelto.]]`}
 ]}
};
