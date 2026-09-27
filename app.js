/* ===================== MOTOR ===================== */
const $ = s=>document.querySelector(s);
const app = $('#app');
const store = {
  get(k,d){try{const v=localStorage.getItem('aula:'+k);return v==null?d:JSON.parse(v);}catch(e){return d;}},
  set(k,v){try{localStorage.setItem('aula:'+k,JSON.stringify(v));}catch(e){}}
};
/* ---------- Sincronización con la hoja de Google ---------- */
const SYNC_URL = window.SYNC_URL || '';
function log(tipo,extra){
  if(!SYNC_URL) return;
  const d=Object.assign({tipo,asignatura:state.subj?state.subj.name:'',leccion:state.lesson?state.lesson.id:'',pantalla:state.lesson?(state.step+1):''},extra||{});
  try{fetch(SYNC_URL,{method:'POST',mode:'no-cors',body:JSON.stringify(d)});}catch(e){}
}
function pullProgress(){
  if(!SYNC_URL) return;
  fetch(SYNC_URL).then(r=>r.json()).then(j=>{
    let changed=false;(j.done||[]).forEach(id=>{if(!store.get('done:'+id,false)){store.set('done:'+id,true);changed=true;}});
    if(changed&&state.view!=='lesson')render();
  }).catch(()=>{});
}
const state = { view:'home', subj:null, lesson:null, step:0, revealed:0, answered:{} };
const SESSION_MIN = 12;
let timer = {start:null, elapsed:0, running:false, tick:null, warned:false};

function esc(s){return String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));}
function progressOf(sub){
  const items=[...sub.lessons]; if(sub.task) items.push(sub.task);
  const done=items.filter(l=>store.get('done:'+l.id,false)).length;
  return {done,total:items.length,pct:Math.round(100*done/items.length)};
}
function setAccent(sub){document.documentElement.style.setProperty('--accent',`var(--${sub?sub.color:'mat'})`);document.documentElement.style.setProperty('--accent-s',`var(--${sub?sub.color:'mat'}-s)`);}

/* ---------- Voz ---------- */
let speaking=false;
function pickVoice(){const vs=speechSynthesis.getVoices();return vs.find(v=>/es[-_]ES/i.test(v.lang))||vs.find(v=>/^es/i.test(v.lang))||null;}
function speak(text,btn){
  if(!('speechSynthesis' in window)){btn.textContent='Sin voz en este navegador';return;}
  if(speaking){speechSynthesis.cancel();speaking=false;btn.classList.remove('on');btn.querySelector('.lbl').textContent='Escuchar';return;}
  const u=new SpeechSynthesisUtterance(text);u.lang='es-ES';u.rate=0.9;const v=pickVoice();if(v)u.voice=v;
  u.onend=u.onerror=()=>{speaking=false;btn.classList.remove('on');btn.querySelector('.lbl').textContent='Escuchar';};
  speechSynthesis.cancel();speechSynthesis.speak(u);speaking=true;btn.classList.add('on');btn.querySelector('.lbl').textContent='Parar';
}
function stopSpeech(){if(speaking){speechSynthesis.cancel();speaking=false;}}
if('speechSynthesis' in window){speechSynthesis.onvoiceschanged=()=>{};}

/* ---------- Temporizador ---------- */
function fmt(ms){const s=Math.max(0,Math.floor(ms/1000));return String(Math.floor(s/60)).padStart(2,'0')+':'+String(s%60).padStart(2,'0');}
function timerStart(){if(timer.running)return;timer.start=Date.now()-timer.elapsed;timer.running=true;timer.tick=setInterval(timerUpdate,1000);timerUpdate();}
function timerPause(){if(!timer.running)return;timer.elapsed=Date.now()-timer.start;timer.running=false;clearInterval(timer.tick);timerUpdate();}
function timerReset(){timerPause();timer.elapsed=0;timer.warned=false;timerUpdate();}
function timerUpdate(){
  const el=$('#timer');if(!el)return;
  const ms=timer.running?Date.now()-timer.start:timer.elapsed;const total=SESSION_MIN*60000;
  const pct=Math.min(100,100*ms/total);
  el.querySelector('.ring').style.setProperty('--pct',pct+'%');
  el.querySelector('.tt').textContent=fmt(total-ms)+(timer.running?'':' ⏸');
  if(ms>=total&&!timer.warned){timer.warned=true;timerPause();log('sesion',{resultado:'12 min',detalle:'descanso'});showBreak();}
}
function showBreak(){
  stopSpeech();
  const d=document.createElement('div');d.className='break';d.id='break';
  d.innerHTML=`<div class="card"><div class="eyebrow">Sesión completada</div><h2 style="margin:8px 0 10px">¡12 minutos! Toca descansar</h2><p>Levántate, bebe agua, mira por la ventana. Tres minutos y vuelves.</p><p class="small">Lo que has hecho ya está guardado.</p><div class="row" style="justify-content:center;margin-top:14px"><button class="btn" id="brk-go">Seguir estudiando</button><button class="btn ghost" id="brk-home">Ir al inicio</button></div></div>`;
  document.body.appendChild(d);
  $('#brk-go').onclick=()=>{d.remove();timerReset();timerStart();};
  $('#brk-home').onclick=()=>{d.remove();timerReset();go('home');};
}

/* ---------- Navegación ---------- */
function go(view,subj,lesson){
  stopSpeech();
  state.view=view;state.subj=subj||null;state.lesson=lesson||null;state.step=0;state.revealed=0;state.answered={};
  if(view==='lesson'){timerReset();timerStart();}else{timerPause();}
  const h=view==='home'?'':view==='subject'?subj.id:lesson.id;
  if(location.hash.replace('#','')!==h) history.replaceState(null,'','#'+h);
  render();window.scrollTo({top:0});
}
function fromHash(){
  const h=location.hash.replace('#','');
  if(!h)return go('home');
  const sub=SUBJECTS[h];if(sub)return go('subject',sub);
  for(const k in SUBJECTS){const s=SUBJECTS[k];const l=[...s.lessons,s.task].filter(Boolean).find(x=>x.id===h);if(l)return go('lesson',s,l);}
  go('home');
}

/* ---------- Render ---------- */
function topbar(extra){
  return `<div class="topbar"><button class="brand" id="brand"><span class="dot"></span>Aula 3º ESO</button><div class="tools">${extra||''}<button class="chip" id="opt-font" aria-pressed="${document.body.classList.contains('font-alt')}">Aa letra</button><button class="chip" id="opt-big" aria-pressed="${document.body.classList.contains('big')}">A+ tamaño</button></div></div>`;
}
function bindTop(){
  $('#brand').onclick=()=>go('home');
  $('#opt-font').onclick=()=>{document.body.classList.toggle('font-alt');store.set('font-alt',document.body.classList.contains('font-alt'));render();};
  $('#opt-big').onclick=()=>{document.body.classList.toggle('big');store.set('big',document.body.classList.contains('big'));render();};
}
function render(){
  if(state.view==='home')renderHome();else if(state.view==='subject')renderSubject();else renderLesson();
}
function renderHome(){
  setAccent(null);
  const order=['mat','geo','bio','fyq','tec'];
  const cards=order.map(k=>{const s=SUBJECTS[k];const p=progressOf(s);return `<button class="subject" data-s="${k}" style="--sc:var(--${s.color})"><span class="name">${s.name}</span><span class="tema">${esc(s.tema)}</span><span class="small">${p.done} de ${p.total} completados</span><span class="bar"><i style="width:${p.pct}%"></i></span></button>`;}).join('');
  const mt=SUBJECTS.mat.task;
  app.innerHTML=topbar()+`
   <div class="today"><div><div class="eyebrow">Para hoy</div><div class="t">Matemáticas: operaciones con fracciones</div><div class="small">${esc(mt.due)}</div></div><button class="btn" id="go-task" style="--accent:var(--mat)">Hacer la tarea guiada</button></div>
   <div class="eyebrow" style="margin-bottom:10px">Asignaturas</div>
   <div class="grid">${cards}</div>
   <div class="card" style="margin-top:22px"><h3>Cómo usar esta aula</h3><p>Elige una asignatura y una lección. Cada pantalla tiene <strong>una sola idea</strong>. Lee o pulsa <strong>Escuchar</strong>, y cuando lo tengas, pasa a la siguiente. Cada 12 minutos te avisamos para descansar.</p><p class="small">Los botones "Aa letra" y "A+ tamaño" cambian la tipografía si te resulta más cómoda otra. Tu progreso se guarda en este navegador.</p></div>`;
  bindTop();
  $('#go-task').onclick=()=>go('lesson',SUBJECTS.mat,mt);
  app.querySelectorAll('.subject').forEach(b=>b.onclick=()=>go('subject',SUBJECTS[b.dataset.s]));
}
function renderSubject(){
  const s=state.subj;setAccent(s);const p=progressOf(s);
  const rows=s.lessons.map((l,i)=>{const done=store.get('done:'+l.id,false);return `<button class="lesson" data-l="${l.id}"><span class="n">${i+1}</span><span><span class="t">${esc(l.title)}</span><br><span class="m">${l.mins} min · ${l.steps.length} pantallas</span></span><span class="done">${done?'✔ Hecho':''}</span></button>`;}).join('');
  const task=s.task?`<button class="lesson task" data-l="${s.task.id}"><span class="n">✎</span><span><span class="t">${esc(s.task.title)}</span><br><span class="m">${esc(s.task.due)}</span></span><span class="done">${store.get('done:'+s.task.id,false)?'✔ Hecho':''}</span></button>`:'';
  app.innerHTML=topbar()+`
   <div class="topic-head"><div><div class="eyebrow">${esc(s.name)}</div><h1>${esc(s.tema)}</h1></div><div class="pill">${p.done}/${p.total} completados</div></div>
   ${s.task?'<div class="eyebrow">Tarea pendiente</div>':''}<div class="lessons">${task}</div>
   <div class="eyebrow" style="margin-top:22px">Lecciones (en orden)</div><div class="lessons">${rows}</div>
   <p class="small" style="margin-top:18px">Cada lección son 6-12 minutos. Si una idea no queda clara, vuelve a la pantalla anterior o pulsa Escuchar.</p>`;
  bindTop();
  app.querySelectorAll('.lesson').forEach(b=>b.onclick=()=>{const id=b.dataset.l;const l=id===(s.task&&s.task.id)?s.task:s.lessons.find(x=>x.id===id);go('lesson',s,l);});
}
function renderLesson(){
  const s=state.subj,l=state.lesson;setAccent(s);
  const n=l.steps.length,i=state.step,st=l.steps[i];
  const bar=l.steps.map((_,k)=>`<i class="${k<i?'on':k===i?'cur':''}"></i>`).join('');
  const timerHtml=`<div class="timer" id="timer"><span class="ring"></span><span class="tt">${SESSION_MIN}:00</span></div>`;
  let body='',speakText='';
  if(st.t==='read'){body=`<h2>${st.h}</h2><div class="body">${md(st.body)}</div>`;speakText=st.h+'. '+plain(md(st.body));}
  else if(st.t==='example'){
    const rev=state.revealed;
    body=`<div class="eyebrow">Ejemplo paso a paso</div><h2>${st.h}</h2><div class="body">${md(st.intro)}</div><div class="eq">${st.steps.map((e,k)=>`<div class="eqstep ${k<rev?'':'locked'}"><span class="k">${k+1}</span><div>${k<rev?`<div class="why">${md(e.why).replace(/^<p>|<\/p>$/g,'')}</div><div>${e.html}</div>`:'<div class="why">…</div>'}</div></div>`).join('')}</div>${rev<st.steps.length?`<button class="btn sec reveal" id="reveal">${rev===0?'Ver el primer paso':'Siguiente paso'}</button>`:'<div class="callout ok"><span class="lab">Hecho</span>Ahora intenta repetirlo en el cuaderno sin mirar.</div>'}`;
    speakText=st.h+'. '+plain(md(st.intro))+' '+st.steps.slice(0,rev).map((e,k)=>'Paso '+(k+1)+'. '+plain(md(e.why))+' '+plain(e.html)).join(' ');
  }
  else if(st.t==='recall'){
    body=`<div class="eyebrow">Antes de empezar</div><h2>${st.h}</h2><p>Intenta responder <strong>sin mirar</strong>. Luego destapa para comprobar.</p><div class="recall">${st.qs.map(q=>`<details><summary>${md(q[0]).replace(/^<p>|<\/p>$/g,'')}</summary><p>${md(q[1]).replace(/^<p>|<\/p>$/g,'')}</p></details>`).join('')}</div>`;
    speakText=st.h+'. '+st.qs.map(q=>plain(md(q[0]))).join('. ');
  }
  else if(st.t==='quiz'){
    const ans=state.answered[i];
    body=`<div class="eyebrow">Comprueba</div><h2>${md(st.q).replace(/^<p>|<\/p>$/g,'')}</h2><div class="opts">${st.opts.map((o,k)=>{let cls='opt';if(ans!=null){if(k===st.a)cls+=' right';else if(k===ans)cls+=' wrong';}return `<button class="${cls}" data-k="${k}" ${ans!=null?'disabled':''}><span class="l">${'ABC'[k]}</span><span>${md(o).replace(/^<p>|<\/p>$/g,'')}</span></button>`;}).join('')}</div>${ans!=null?`<div class="feedback ${ans===st.a?'good':'badf'}"><strong style="color:inherit">${ans===st.a?'¡Correcto!':'Casi. Mira por qué:'}</strong><div>${md(st.why)}</div></div>`:''}`;
    speakText=plain(md(st.q))+' Opciones: '+st.opts.map((o,k)=>'ABC'[k]+', '+plain(md(o))).join('. ');
  }
  else if(st.t==='input'){
    const ans=state.answered[i];
    body=`<div class="eyebrow">Calcula</div><h2>${md(st.q).replace(/^<p>|<\/p>$/g,'')}</h2><div class="answerbox row"><input id="ans" type="text" inputmode="text" autocomplete="off" placeholder="Tu respuesta" value="${ans?esc(ans.v):''}" ${ans&&ans.ok?'disabled':''}><button class="btn" id="check" ${ans&&ans.ok?'disabled':''}>Comprobar</button><button class="chip" id="hint">Pista</button></div><div id="hintbox" class="callout hidden"><span class="lab">Pista</span>${md(st.hint)}</div>${ans?`<div class="feedback ${ans.ok?'good':'badf'}"><strong style="color:inherit">${ans.ok?'¡Correcto!':'No es eso. Inténtalo otra vez o mira la pista.'}</strong>${ans.ok||ans.tries>=2?`<div>${md(st.why)}</div>`:''}</div>`:''}`;
    speakText=plain(md(st.q));
  }
  else if(st.t==='order'){
    const o=state.answered[i]||{picked:[],items:shuffle(st.items.slice())};state.answered[i]=o;
    const done=o.picked.length===st.items.length;
    body=`<div class="eyebrow">Ordena</div><h2>${st.h}</h2><p>${st.q}</p><div class="opts">${o.items.map((it,k)=>{const idx=o.picked.indexOf(it);return `<button class="opt ${idx>=0?'right':''}" data-k="${k}" ${idx>=0?'disabled':''}><span class="l">${idx>=0?idx+1:'·'}</span><span>${it}</span></button>`;}).join('')}</div>${done?'<div class="feedback good"><strong style="color:inherit">¡Perfecto! Ese es el orden.</strong></div>':'<div id="ordmsg" class="small"></div>'}`;
    speakText=st.h+'. '+st.q;
  }
  else if(st.t==='write'){
    const saved=store.get('write:'+l.id+':'+i,'');
    body=`<div class="eyebrow">Escribe</div><h2>${st.h}</h2><p>${st.q}</p><textarea id="wr" placeholder="Escribe aquí en frases cortas…">${esc(saved)}</textarea><div class="row" style="margin-top:8px"><button class="chip" id="hint">Ideas para ayudarte</button><span class="small" id="savedmsg"></span></div><div id="hintbox" class="callout hidden"><span class="lab">Ideas</span>${md(st.hint)}</div>`;
    speakText=st.h+'. '+st.q;
  }
  const last=i===n-1;
  const isTask=l===s.task;
  const copyBtn=(isTask&&last&&l.steps.some(x=>x.t==='write'))?`<button class="btn sec" id="copyw">Copiar mis respuestas</button>`:'';
  app.innerHTML=topbar(timerHtml)+`
   <div class="player">
    <div class="row between"><button class="chip" id="back">← ${esc(s.name)}</button><span class="small">${esc(l.title)} · ${i+1} de ${n}</span></div>
    <div class="progress">${bar}</div>
    <div class="step"><div class="row between" style="margin-bottom:10px"><span class="pill">${isTask?'Tarea':'Lección'}</span><button class="speak" id="speak"><span>🔊</span><span class="lbl">Escuchar</span></button></div>${body}</div>
    <div class="row between"><button class="btn ghost" id="prev" ${i===0?'disabled':''}>← Anterior</button><div class="row">${copyBtn}<button class="btn" id="next">${last?'Terminar ✔':'Siguiente →'}</button></div></div>
    <div class="kbd">Teclado: ← → para moverte. Espacio para escuchar.</div>
   </div>`;
  bindTop();timerUpdate();
  $('#back').onclick=()=>go('subject',s);
  $('#prev').onclick=()=>{if(i>0){stopSpeech();state.step--;state.revealed=0;render();window.scrollTo({top:0});}};
  $('#next').onclick=()=>{stopSpeech();if(last){store.set('done:'+l.id,true);log('leccion_completada',{resultado:'ok',detalle:l.title});renderEnd();}else{state.step++;state.revealed=0;render();window.scrollTo({top:0});}};
  $('#speak').onclick=e=>speak(speakText,e.currentTarget);
  const rv=$('#reveal');if(rv)rv.onclick=()=>{state.revealed++;render();};
  if(st.t==='quiz')app.querySelectorAll('.opt').forEach(b=>b.onclick=()=>{const k=+b.dataset.k;state.answered[i]=k;log('pregunta',{resultado:k===st.a?'acierto':'fallo',detalle:plain(md(st.q)).slice(0,120)});render();});
  if(st.t==='input'){
    const check=()=>{const v=$('#ans').value.trim();if(!v)return;const norm=x=>String(x).toLowerCase().replace(/\s+/g,'').replace(/\./g,',');const good=[].concat(st.a).some(a=>norm(a)===norm(v));const prev=state.answered[i]||{tries:0};state.answered[i]={v,ok:good,tries:prev.tries+1};log('calculo',{resultado:good?'acierto':'fallo',detalle:plain(md(st.q)).slice(0,100)+' → '+v});render();};
    $('#check').onclick=check;$('#ans').onkeydown=e=>{if(e.key==='Enter')check();};
    $('#hint').onclick=()=>$('#hintbox').classList.toggle('hidden');
  }
  if(st.t==='order'){
    const o=state.answered[i];
    app.querySelectorAll('.opt').forEach(b=>b.onclick=()=>{const it=o.items[+b.dataset.k];if(it===st.items[o.picked.length]){o.picked.push(it);if(o.picked.length===st.items.length)log('ordenar',{resultado:'completado',detalle:st.h});render();}else{b.classList.add('wrong');log('ordenar',{resultado:'fallo',detalle:st.h+' → '+it});$('#ordmsg').textContent='Ese no va ahora. ¿Cuál es el siguiente más pequeño?';setTimeout(()=>b.classList.remove('wrong'),700);}});
  }
  if(st.t==='write'){
    const ta=$('#wr');let t;ta.oninput=()=>{clearTimeout(t);t=setTimeout(()=>{store.set('write:'+l.id+':'+i,ta.value);$('#savedmsg').textContent='Guardado';setTimeout(()=>{const m=$('#savedmsg');if(m)m.textContent='';},1500);},400);};
    $('#hint').onclick=()=>$('#hintbox').classList.toggle('hidden');
  }
  const cw=$('#copyw');if(cw)cw.onclick=()=>{const txt=l.steps.map((x,k)=>x.t==='write'?x.h+'\n'+(store.get('write:'+l.id+':'+k,'')||'(sin respuesta)')+'\n':'').filter(Boolean).join('\n');
    const done=()=>{cw.textContent='Copiado ✔';setTimeout(()=>cw.textContent='Copiar mis respuestas',2000);};
    if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(txt).then(done).catch(()=>fallbackCopy(txt,done));}else fallbackCopy(txt,done);};
}
function fallbackCopy(txt,cb){const ta=document.createElement('textarea');ta.value=txt;document.body.appendChild(ta);ta.select();try{document.execCommand('copy');}catch(e){}ta.remove();cb();}
function shuffle(a){for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a.join('')===a.slice().sort().join('')?a:a;}
function renderEnd(){
  const s=state.subj,l=state.lesson;const isTask=l===s.task;
  const idx=s.lessons.indexOf(l);const nxt=idx>=0&&idx<s.lessons.length-1?s.lessons[idx+1]:null;
  app.innerHTML=topbar()+`<div class="card end"><div class="big">✔</div><h2>${isTask?'Tarea revisada':'Lección completada'}</h2><p>${esc(l.title)}</p><p class="small">${isTask?'Ahora pásalo al cuaderno y sube la foto a Classroom.':'Buen trabajo. Si quieres, descansa un poco antes de la siguiente.'}</p><div class="row" style="justify-content:center;margin-top:16px">${nxt?`<button class="btn" id="nx">Siguiente lección →</button>`:''}<button class="btn ghost" id="bk">Volver a ${esc(s.name)}</button></div></div>`;
  bindTop();timerPause();
  $('#bk').onclick=()=>go('subject',s);const nx=$('#nx');if(nx)nx.onclick=()=>go('lesson',s,nxt);
}
document.addEventListener('keydown',e=>{
  if(state.view!=='lesson')return;const tag=(e.target.tagName||'').toLowerCase();if(tag==='input'||tag==='textarea')return;
  if(e.key==='ArrowRight'){const b=$('#next');if(b)b.click();}
  else if(e.key==='ArrowLeft'){const b=$('#prev');if(b&&!b.disabled)b.click();}
  else if(e.key===' '){e.preventDefault();const b=$('#speak');if(b)b.click();}
});
window.addEventListener('hashchange',fromHash);
if(store.get('font-alt',false))document.body.classList.add('font-alt');
if(store.get('big',false))document.body.classList.add('big');
fromHash();
pullProgress();
