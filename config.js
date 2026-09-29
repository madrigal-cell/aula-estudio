// URL de la aplicación web de Apps Script (hoja de progreso)
window.SYNC_URL = 'https://script.google.com/macros/s/AKfycbyd5ym9vncQcTj9oROmdxKHVguosX1EIGso-YMFNZxZZKo3KQdIpiPFp1SYDKnhsSh_9A/exec';
// Orden de las asignaturas en la portada (ids de SUBJECTS)
window.SUBJECT_ORDER = ['mat','geo','bio','fyq','tec'];

// ---- Indicador de actualización (se muestra en la portada) ----
// contenido: última vez que se cambió contenido de la web (lecciones/tareas).
// revision:  última vez que se revisó Classroom (aunque no hubiera cambios).
// La rutina diaria DEBE actualizar 'revision' en cada ejecución y 'contenido' solo si publica algo. Formato ISO con zona (+02:00 verano, +01:00 invierno).
window.LAST_UPDATE = {
  contenido: '2026-09-27T23:51:00+02:00',
  revision:  '2026-09-29T16:13:00+02:00',
  parcial:   'FyQ (ejercicios 13-15), Tecnología y Portal pendientes de revisar'
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
