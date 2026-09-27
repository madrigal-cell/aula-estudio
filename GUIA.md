# Guía de mantenimiento del Aula 3º ESO

Web de estudio adaptada para una alumna de 3º ESO con dislexia, discalculia y TDA. Publicada en GitHub Pages desde este repositorio (rama `main`, raíz). Esta guía la lee Claude cada día antes de actualizar el contenido.

## 1. Estructura del repositorio

| Archivo | Qué contiene |
|---|---|
| `index.html` | Página, CSS y las etiquetas `<script>` que cargan los demás archivos. Solo se toca para añadir un `<script src="nuevo.js">` cuando aparece una asignatura nueva. |
| `config.js` | `window.SYNC_URL` (hoja de progreso) y `window.SUBJECT_ORDER` (orden de asignaturas en la portada). Al añadir una asignatura, añadir su id al array. |
| `util.js` | Funciones de marcado: `fr(n,d,neg)`, `bars([...])`, `say(texto)`, `md(texto)`. No tocar. |
| `app.js` | Motor de la aplicación. No tocar salvo error. |
| `mat.js`, `geo-bio.js`, `fyq-tec.js` | Contenido por asignatura: cada uno define `SUBJECTS.<id> = {...}`. |
| `estado.json` | Registro de lo que ya está cubierto en la web (por asignatura: temas, materiales y tareas de Classroom ya procesados). Actualizarlo en cada cambio. |
| `apps-script.gs` | Copia del script de la hoja de progreso (solo referencia). |

Para publicar: `push_files` del conector de GitHub (owner `madrigal-cell`, repo `aula-estudio`, branch `main`). Tras subir, comprobar con `get_file_contents` que el archivo existe y su tamaño es el esperado. GitHub Pages publica en 1-2 minutos.

## 2. Formato del contenido

```js
SUBJECTS.mat = {
 id:'mat', name:'Matemáticas', color:'mat', tema:'Tema 1 · Números racionales e irracionales',
 lessons:[ {id:'m1', title:'…', mins:10, steps:[ …pantallas… ]}, … ],
 task:{id:'mtask', title:'Tarea para hoy: …', due:'Se entrega el …', instr:'…', steps:[ …pantallas… ]}
};
```

- `id` de asignatura: `mat`, `geo`, `bio`, `fyq`, `tec` ya existen. Para una nueva usar 3 letras (`len` Lengua, `ing` Inglés, `mus` Música, `efi` Educación Física, `fra` Francés, `rel` Religión/Valores, `edu` Educación en valores, `pla` Plástica…).
- `color`: uno de `mat geo bio fyq tec s1 s2 s3 s4 s5` (los `sN` son colores libres para asignaturas nuevas; no repetir).
- `id` de lección: letra de la asignatura + número (`m1`, `g3`, `len2`). Debe ser único en toda la web y no cambiar nunca (el progreso se guarda por id).
- Solo puede haber **una** `task` por asignatura (la más urgente). Si hay varias, la principal va en `task` y las demás se mencionan dentro de ella como pantallas.
- Cuando cambia el tema de una asignatura, las lecciones del tema anterior se conservan (añadir las nuevas después y actualizar `tema`). No borrar lecciones ya publicadas.

### Tipos de pantalla (`steps`)

| `t` | Campos | Uso |
|---|---|---|
| `read` | `h`, `body` | Explicación. Una sola idea. |
| `example` | `h`, `intro`, `steps:[{why, html}]` | Ejemplo resuelto que se destapa paso a paso. `why` = por qué se hace; `html` = la operación. |
| `recall` | `h`, `qs:[[pregunta, respuesta], …]` | Repaso de 1 minuto al empezar una lección (2-3 preguntas de la anterior). |
| `quiz` | `q`, `opts:[…]`, `a` (índice correcto), `why` | Elección con corrección inmediata. 2-3 opciones. |
| `input` | `q`, `a` (string o array de válidas), `hint`, `why` | Respuesta escrita. Comparación sin espacios y con `.`→`,`. |
| `order` | `h`, `q`, `items:[…en orden correcto]` | Tocar en orden. |
| `write` | `h`, `q`, `hint` | Texto libre que se guarda y se puede copiar (solo en tareas). |

### Marcado dentro de `body`, `intro`, `q`, `why`, `hint`

- `{3/4}` → fracción vertical; `{-3/4}` negativa. `**texto**` → resaltado (una o dos por pantalla, no más).
- Párrafos separados por línea en blanco. Listas con `- `.
- `[[idea:…]]` idea clave (azul), `[[ok:…]]` truco (verde), `[[warn:…]]` cuidado (ámbar).
- HTML permitido: `<div class="levels"><div class="level"><b>1</b><span>…</span></div></div>` (pasos numerados), `<div class="tblwrap"><table class="tbl">…</table></div>` (tablas), `<div class="scale"><span>…</span></div>` (recta/escala).
- Dentro de plantillas JS (backticks) se pueden usar `${fr(3,4)}`, `${bars([['1 cuarto',4,1],['3 cuartos',4,3]])}` (barras de fracción: etiqueta, partes, rellenas) y `${say('Dilo en voz alta: …')}`.

## 3. Método pedagógico (obligatorio)

Basado en lo que recomiendan las guías para dislexia, discalculia y TDA:

1. **Concreto → dibujo → símbolo.** Cada idea matemática empieza con una situación real (chocolate, cintas, dinero, una piscina), sigue con un dibujo (barras `bars`, recta `scale`, tabla) y solo al final el símbolo. Nunca empezar por la definición.
2. **Una idea por pantalla.** Máximo ~60 palabras de texto corrido. Frases de 12 palabras o menos. Verbo al principio.
3. **Nombrar bien.** "Tres cuartos", nunca "tres sobre cuatro". El de abajo dice el *tamaño* del trozo; el de arriba *cuántos*.
4. **Anclas de memoria**, no acrónimos: una imagen o palabra por concepto ("mcm = cita", "MCD = trocitos", "Golgi = oficina de correos").
5. **Recuperar, no releer.** Cada lección (salvo la primera de un tema) empieza con un `recall` de la anterior. Cada 2-3 pantallas de `read`, un `quiz` o `input`.
6. **Ejemplo + "ahora tú" gemelo.** Tras cada `example`, otro `example` con el mismo formato y otros números, titulado "Ahora tú: …", con la instrucción "hazlo en el cuaderno y luego destapa".
7. **Acción física.** Usar `say()` para pedir que diga algo en voz alta; pedir dibujar o tapar con la mano.
8. **Errores como pistas.** En `why` explicar exactamente qué mirar, sin "casi" ni "mal".
9. **Para las tareas de Classroom**: resolverlas paso a paso como `example` (para que compruebe, no para copiar), añadir al principio una pantalla con qué se pide y la fecha, y al final una lista de comprobación antes de entregar.
10. Lecciones de 6-12 minutos (5-10 pantallas). Estilo: cercano, tuteo, sin infantilizar (tiene 15 años).

Modelo de referencia: las lecciones `m1`, `m2` y `m3` de `mat.js`.

## 4. Cómo leer Classroom

- Abrir Chrome (extensión de Claude) y navegar a `https://classroom.google.com/u/3/h` (la cuenta de la alumna es la cuarta sesión del perfil; si el avatar no es el suyo, probar `/u/2/`, `/u/4/`… hasta ver las clases de 3º ESO A).
- Portada: tarjetas de clase con enlaces `/u/3/c/<ID>`. Trabajo de clase: `/u/3/w/<ID>/t/all`. Tablón (anuncios con deberes en texto): `/u/3/c/<ID>`. Entregas de la alumna: `/u/3/a/not-turned-in/all` (sin entregar), `/u/3/a/turned-in/all` (entregadas), `/u/3/a/missing/all` (con retraso).
- Classroom carga lento: esperar 8-10 s tras navegar y usar `get_page_text`. Los materiales se despliegan al pulsar su título; los adjuntos son enlaces a `drive.google.com/file/d/<ID>/view`.
- PDF con texto: abrir el enlace de Drive, hacer clic en el visor y pulsar PageDown muchas veces para que cargue todo, luego `get_page_text`. PDF escaneado o presentación en imagen: `get_page_text` solo da "Página X de Y"; entonces ir página a página (escribir el número en la casilla "Página") y leer con `zoom` sobre la región del documento.
- Sites de asignatura (Matemáticas, FyQ, Tecnología): navegar y leer con `read_page`/`get_page_text`.
- Clases conocidas (ID → asignatura): `ODg1MTAwNzkzOTUy` Matemáticas · `ODc4MDM0NTM0OTIz` Geografía · `ODc3MzE5ODcyNDI5` Física y Química (en Classroom se llama "3ºESO A. 26/27", los deberes van en el tablón) · `ODI2NDE4MjY0Mjk3` Biología y Geología · `ODg0ODgwNjUzMjM3` Tecnología (preguntas semanales en el tablón) · `ODg0ODc0MDgwOTQ5` Portal 3º de ESO (tutoría: normas, horarios, avisos).
- Si aparece una clase nueva (Lengua, Inglés, Música, EF…): crear su `SUBJECTS.<id>` en un archivo nuevo `<id>.js`, añadir `<script src="<id>.js"></script>` en `index.html` antes de `app.js`, añadir el id a `SUBJECT_ORDER` en `config.js` y registrarla en `estado.json`.

## 5. Rutina diaria de actualización (lunes a viernes)

1. Leer `GUIA.md` y `estado.json` del repositorio.
2. Recorrer todas las clases de Classroom (portada + trabajo de clase + tablón de cada una). Anotar todo lo que no esté en `estado.json`: temas nuevos, materiales, tareas y anuncios con deberes o avisos.
3. Para cada novedad de contenido: leer el material, escribir las lecciones o la tarea guiada siguiendo el método, y publicarlas. Antes de subir un archivo JS, comprobar que no tiene errores de sintaxis (revisar comillas, backticks y comas).
4. Actualizar `estado.json` con lo procesado (título, fecha de publicación en Classroom, id de lección o tarea creada).
5. Si no hay novedades, no cambiar nada en el repositorio.
6. Al terminar, dejar un resumen breve de lo hecho (sirve de base para el correo de las 16:00).

## 6. Correo diario de las 16:00 (todos los días)

Enviar con el conector de Gmail a madrigal@owmakers.com, asunto `Aula 3º ESO · <día> <fecha>`. Contenido, en español, claro y corto:

1. **Para entregar**: tareas pendientes con asignatura, título, fecha y hora de entrega, y qué hay que hacer (2 líneas). Marcar las que vencen hoy o mañana.
2. **Sin entregar / con retraso**: lo que aparezca en `/u/3/a/missing/all` o marcado "Sin entregar" con fecha pasada.
3. **Entregado estos días**: para reconocérselo.
4. **Avisos y recordatorios**: anuncios del tablón (exámenes, material que llevar, salidas, horarios de tutoría, cambios), documentales o preguntas semanales.
5. **Novedades en la web**: qué lecciones o tareas guiadas se han añadido hoy, con el enlace https://madrigal-cell.github.io/aula-estudio/ .
6. **Cómo va**: leer la hoja de Google "Aula 3º ESO - progreso" (Drive) y resumir en 2-3 líneas qué ha hecho en la web en las últimas 24 h y en qué falla (si no hay actividad, decirlo sin dramatizar).
7. **Sugerencia para hoy**: una sola cosa concreta que Madri puede hacer con ella esta tarde (10-15 min).

Si no se pudo entrar en Classroom (Chrome cerrado o sin sesión), enviar igualmente el correo diciendo que no se pudo revisar, con la parte de progreso de la hoja y lo que ya se sabía del día anterior.
