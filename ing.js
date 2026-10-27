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
