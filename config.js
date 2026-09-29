// URL de la aplicación web de Apps Script (hoja de progreso)
window.SYNC_URL = 'https://script.google.com/macros/s/AKfycbyd5ym9vncQcTj9oROmdxKHVguosX1EIGso-YMFNZxZZKo3KQdIpiPFp1SYDKnhsSh_9A/exec';
// Orden de las asignaturas en la portada (ids de SUBJECTS)
window.SUBJECT_ORDER = ['mat','geo','bio','fyq','tec'];

// ---- Indicador de actualización (se muestra en la portada) ----
// contenido: última vez que se cambió contenido de la web (lecciones/tareas).
// revision:  última vez que se revisó Classroom (aunque no hubiera cambios).
// La rutina diaria DEBE actualizar 'revision' en cada ejecución y 'contenido' solo si publica algo. Formato ISO con zona (+02:00 verano, +01:00 invierno).
window.LAST_UPDATE = {
  contenido: '2026-09-29T17:30:00+02:00',
  revision:  '2026-09-29T17:30:00+02:00',
  parcial:   'Tecnología y Portal pendientes de revisar'
};
(function(){
  function fmt(iso,conHora){
    try{
      var o={timeZone:'Europe/Madrid',weekday:'long',day:'numeric',month:'long'};
      if(conHora){o.hour='2-digit';o.minute='2-digit';}
      return new Date(iso).toLocaleString('es-ES',o);
    }catch(e){return iso;}
  }
  function paint(){
    var app=document.getElementById('app'),U=window.LAST_UPDATE;
    if(!app||!U||!app.querySelector('.today')||app.querySelector('#lastupd'))return;
    var top=app.querySelector('.topbar');if(!top)return;
    var horas=(Date.now()-new Date(U.revision).getTime())/3600000;
    var viejo=horas>80; // más de ~3 días (cubre el fin de semana)
    var d=document.createElement('div');
    d.id='lastupd';
    d.className='callout'+(viejo?' warn':'');
    d.style.cssText='margin:0 0 18px;font-size:.9rem;line-height:1.5';
    d.innerHTML='<span class="lab">Última actualización</span>'+
      'Classroom revisado: <strong>'+fmt(U.revision,true)+'</strong><br>'+
      'Contenido nuevo publicado: <strong>'+fmt(U.contenido,true)+'</strong>'+
      (U.parcial?'<br><span class="small">Pendiente: '+U.parcial+'</span>':'')+
      (viejo?'<br><strong>Aviso:</strong> hace más de 3 días que no se revisa. Puede estar desactualizada.':'');
    top.insertAdjacentElement('afterend',d);
  }
  var app=document.getElementById('app');
  if(app&&window.MutationObserver){new MutationObserver(paint).observe(app,{childList:true});}
  paint();
})();

// ---- Marcar tareas como hechas: "Hecha en cuaderno" / "Entregada en clase" ----
// Se guarda en este navegador (aula:entregada:<id>) y se envía a la hoja de progreso (tipo 'tarea_entregada').
(function(){
  function key(id){return 'aula:entregada:'+id;}
  function getRec(id){try{return JSON.parse(localStorage.getItem(key(id)));}catch(e){return null;}}
  function setRec(id,v){try{if(v)localStorage.setItem(key(id),JSON.stringify(v));else localStorage.removeItem(key(id));}catch(e){}}
  function setDone(id,v){try{localStorage.setItem('aula:done:'+id,JSON.stringify(!!v));}catch(e){}}
  function wasDone(id){try{return JSON.parse(localStorage.getItem('aula:done:'+id))===true;}catch(e){return false;}}
  function send(tipo,s,t,modo){
    if(!window.SYNC_URL)return;
    try{fetch(window.SYNC_URL,{method:'POST',mode:'no-cors',body:JSON.stringify({tipo:tipo,asignatura:s.name,leccion:t.id,pantalla:'',resultado:modo,detalle:t.title})});}catch(e){}
  }
  function fecha(iso){try{return new Date(iso).toLocaleDateString('es-ES',{timeZone:'Europe/Madrid',weekday:'long',day:'numeric',month:'long'});}catch(e){return '';}}
  function rerender(){if(typeof render==='function')render();}
  function mark(s,t,modo){
    setRec(t.id,{modo:modo,fecha:new Date().toISOString(),antes:wasDone(t.id)});
    setDone(t.id,true);send('tarea_entregada',s,t,modo);rerender();
  }
  function undo(s,t){
    var r=getRec(t.id);setRec(t.id,null);setDone(t.id,r&&r.antes);
    send('tarea_deshecha',s,t,r?r.modo:'');rerender();
  }
  function mkBtn(txt,cls,fn,color){
    var b=document.createElement('button');b.className=cls;b.textContent=txt;
    if(color)b.style.setProperty('--accent','var(--'+color+')');
    b.onclick=fn;return b;
  }
  function paintTasks(){
    var app=document.getElementById('app');if(!app||typeof SUBJECTS==='undefined')return;
    var box=app.querySelector('.today');if(!box)return;
    var pend=[],hechas=[];
    box.querySelectorAll('[data-task]').forEach(function(abrir){
      var row=abrir.parentElement;if(!row||row.dataset.enh)return;row.dataset.enh='1';
      var s=SUBJECTS[abrir.dataset.task];if(!s||!s.task)return;var t=s.task;
      var info=row.firstElementChild,rec=getRec(t.id);
      var group=document.createElement('div');group.className='row';group.style.gap='8px';
      row.insertBefore(group,abrir);
      if(rec){
        row.style.opacity='.6';
        var ok=document.createElement('div');ok.className='small';ok.style.color='var(--ok)';ok.style.fontWeight='600';
        ok.textContent='✔ '+(rec.modo==='clase'?'Entregada en clase':'Hecha en cuaderno')+' · '+fecha(rec.fecha);
        info.appendChild(ok);
        group.appendChild(mkBtn('Deshacer','chip',function(){undo(s,t);}));
        abrir.classList.add('sec');group.appendChild(abrir);
        hechas.push(row);
      }else{
        group.appendChild(mkBtn('✔ Hecha en cuaderno','btn small sec',function(){mark(s,t,'cuaderno');}));
        group.appendChild(mkBtn('✔ Entregada en clase','btn small sec',function(){mark(s,t,'clase');}));
        group.appendChild(abrir);
        pend.push(row);
      }
    });
    // Las hechas bajan al final de la lista
    hechas.forEach(function(r){box.appendChild(r);});
    var eb=box.querySelector('.eyebrow');
    if(eb&&(pend.length||hechas.length))eb.textContent='Tareas pendientes'+(hechas.length?' · '+pend.length+' por hacer, '+hechas.length+(hechas.length===1?' hecha':' hechas'):'');
  }
  var app=document.getElementById('app');
  if(app&&window.MutationObserver){new MutationObserver(paintTasks).observe(app,{childList:true});}
  paintTasks();
})();
