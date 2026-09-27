/* ===================== DATOS ===================== */
const SUBJECTS = {};

/* ---------- utilidades de marcado ----------
   {3/4} → fracción vertical   {-3/4} → negativa   **texto** → resaltado   \n\n → párrafo */
function bar(d,n,cls){cls=cls||'f';let h='';for(let i=0;i<d;i++)h+=`<i class="${i<n?cls:''}"></i>`;return `<span class="bar">${h}</span>`;}
function barrow(label,d,n,cls){return `<div class="barrow"><span class="lab">${label}</span>${bar(d,n,cls)}</div>`;}
function bars(rows){return '<div class="bars">'+rows.map(r=>barrow(r[0],r[1],r[2],r[3])).join('')+'</div>';}
function say(t){return `<div class="say"><span>🗣️</span><span>${t}</span></div>`;}
function fr(n,d,neg){const f=`<span class="fr"><span class="n">${n}</span><span class="d">${d}</span></span>`;return neg?`<span class="fr-wrap"><span class="op">−</span>${f}</span>`:f;}
function md(s){
  if(!s) return '';
  s = s.replace(/\{(-?)([^\/}]+)\/([^}]+)\}/g,(m,neg,n,d)=>fr(n,d,neg==='-'));
  s = s.replace(/\*\*(.+?)\*\*/g,'<strong>$1</strong>');
  s = s.replace(/\[\[warn:(.+?)\]\]/gs,'<div class="callout warn"><span class="lab">Cuidado</span>$1</div>');
  s = s.replace(/\[\[ok:(.+?)\]\]/gs,'<div class="callout ok"><span class="lab">Truco</span>$1</div>');
  s = s.replace(/\[\[idea:(.+?)\]\]/gs,'<div class="callout"><span class="lab">Idea clave</span>$1</div>');
  const parts = s.split(/\n\s*\n/).map(p=>{
    p=p.trim(); if(!p) return '';
    if(p.startsWith('<')) return p;
    if(/^- /m.test(p)) return '<ul>'+p.split(/\n/).map(l=>'<li>'+l.replace(/^- /,'')+'</li>').join('')+'</ul>';
    return '<p>'+p.replace(/\n/g,'<br>')+'</p>';
  });
  return parts.join('');
}
function plain(html){const d=document.createElement('div');d.innerHTML=html;
  d.querySelectorAll('.fr').forEach(f=>{const n=f.querySelector('.n').textContent,dd=f.querySelector('.d').textContent;f.replaceWith(' '+n+' entre '+dd+' ');});d.querySelectorAll('.op').forEach(o=>{const m={'−':' menos ','+':' más ','·':' por ',':':' entre ','=':' igual a '};o.replaceWith(m[o.textContent.trim()]||o.textContent);});
  return d.textContent.replace(/\s+/g,' ').trim();}
