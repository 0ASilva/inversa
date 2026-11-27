/* Shared layout. Activity logic supplies explicit actions; no inferred completion. */
(()=>{'use strict';const $=id=>document.getElementById(id),api=window.InverseActivity;if(!api)return;const root=document.querySelector('main')||$('lab-inversa-v2'),number=+document.body.dataset.activity;
const embedded=parent!==window,names=['Apresentação','Rio','Máquina de fitas','Laboratório gráfico','Composição','Diário de descobertas'];
const filenames=['piloto-completo-ate-e6','piloto-rio','piloto-fita','piloto-laboratorio','piloto-composicao','piloto-diario'];
function navigate(n){if(embedded){parent.postMessage({type:'inverse:go',stage:n},'*');return;}if(n===7){showHelp('Você concluiu o percurso disponível. Pode retomar as atividades pelo menu.');return;}const modular=location.pathname.endsWith('/index.html');location.href=modular?(n===1?'../piloto-completo-ate-e6.html':'../'+filenames[n-1]+'/index.html'):filenames[n-1]+'.html';}
function send(direction){navigate(number+direction);}
function setImage(button,name){if(button.dataset.icon===name)return;button.dataset.icon=name;button.replaceChildren();const img=document.createElement('img');img.src=window.InverseIcons[name];img.alt='';img.draggable=false;button.append(img);}
function iconButton(id,label,icon){const b=document.createElement('button');b.type='button';b.id=id;b.className='layout-icon';b.setAttribute('aria-label',label);b.title=label;setImage(b,icon);return b;}
const footer=document.createElement('div');footer.className='layout-footer';footer.setAttribute('role','group');footer.setAttribute('aria-label','Ações da atividade');
const back=iconButton('layout-back','Voltar','voltar'),primary=document.createElement('button'),fresh=document.createElement('button'),retry=iconButton('layout-retry','Refazer escolhas','refazer'),next=iconButton('layout-next','Próximo','proximo');primary.id='layout-primary';primary.className='layout-primary';fresh.id='layout-new';fresh.className='layout-new';fresh.textContent='Nova';fresh.title='Reiniciar esta atividade';fresh.setAttribute('aria-label','Nova: reiniciar esta atividade');footer.append(back,primary,fresh,retry,next);root.append(footer);const feedback=$('feedback');if(feedback){feedback.classList.add('layout-feedback');root.append(feedback);}
const dialog=document.createElement('dialog');dialog.className='layout-dialog';dialog.innerHTML='<h2>Seu percurso</h2><div class="layout-menu-list"></div><form method="dialog"><button>Fechar</button></form>';root.append(dialog);names.forEach((name,i)=>{const b=document.createElement('button');b.type='button';b.textContent=name;b.setAttribute('aria-current',String(i+1===number));b.onclick=()=>{dialog.close();if(i+1!==number)navigate(i+1);};dialog.querySelector('div').append(b);});
$('layout-menu').onclick=()=>dialog.showModal();setImage($('layout-menu'),'menu');setImage($('help'),'ajuda');
const help=document.createElement('dialog');help.className='layout-dialog';help.innerHTML='<h2>Como explorar</h2><p></p><form method="dialog"><button>Entendi</button></form>';root.append(help);
function showHelp(text){help.querySelector('p').textContent=text||api.help;help.showModal();}
if(!$('help').onclick)$('help').onclick=()=>showHelp();
function soundIcon(){setImage($('sound-toggle'),window.inverseSoundEnabled===false?'sem-som':'som');}
window.addEventListener('inverse:sound',()=>{soundIcon();if(embedded)parent.postMessage({type:'inverse:sound',enabled:window.inverseSoundEnabled},'*');});
window.addEventListener('message',e=>{if(e.source===parent&&e.data?.type==='inverse:sound-sync'){window.setInverseSound?.(e.data.enabled,false);soundIcon();}});
function refresh(){const s=api.state();back.disabled=!!s.busy;fresh.disabled=!!s.busy;retry.hidden=!s.retry;retry.disabled=!!s.busy;primary.hidden=!s.primary;if(s.primary){if(primary.textContent!==s.primary.label)primary.textContent=s.primary.label;primary.disabled=!!s.primary.disabled;}next.hidden=!s.next;next.classList.toggle('layout-pulse',!!s.nextPulse&&!s.busy);retry.classList.toggle('layout-pulse',!!s.retry);next.disabled=!!s.busy||!!s.nextDisabled;if(s.next){const label=s.nextLabel||'Próximo';next.title=label;next.setAttribute('aria-label',label);}soundIcon();for(const selector of api.sources||[]){document.querySelectorAll(selector).forEach(e=>{if(!e.hasAttribute('data-layout-source'))e.setAttribute('data-layout-source','');});}}
back.onclick=()=>{if(api.state().atStart)send(-1);else api.back();refresh();};primary.onclick=()=>{api.primary();refresh();};fresh.onclick=()=>{root.querySelectorAll('dialog[open]').forEach(d=>d.close());api.reset();refresh();};retry.onclick=()=>{api.retry();refresh();};next.onclick=()=>{if(api.state().terminal)send(1);else api.next();refresh();};
for(const d of document.querySelectorAll('#finish,#reflection')){const b=document.createElement('button');b.type='button';b.className='layout-primary';b.textContent='Próximo';b.onclick=()=>{d.close();send(1);};d.append(b);}
let queued=false;const observer=new MutationObserver(records=>{if(!records.some(r=>!r.target.closest?.('svg,.layout-footer,.layout-header,.layout-dialog')))return;if(queued)return;queued=true;queueMicrotask(()=>{queued=false;refresh();});});observer.observe(root,{subtree:true,childList:true,attributes:true,attributeFilter:['hidden','disabled','aria-current','aria-pressed']});
/* Retractable header: hides when the student scrolls down; returns only when pulled (scroll up, swipe down at the top, or tap the handle). */
const header=document.querySelector('.layout-header');let showHeader=()=>{};
if(header){const handle=document.createElement('button');handle.type='button';handle.className='layout-header-handle';handle.setAttribute('aria-label','Mostrar cabeçalho');handle.title='Mostrar cabeçalho';handle.hidden=true;root.prepend(handle);
const marks=new WeakMap();let lock=0,touchY=null,touchTarget=null;
const measure=()=>header.style.setProperty('--layout-header-h',header.offsetHeight+'px');measure();addEventListener('resize',measure);
const set=hidden=>{if(header.classList.contains('is-recolhido')===hidden)return;header.classList.toggle('is-recolhido',hidden);handle.hidden=!hidden;lock=performance.now()+450;};
showHeader=()=>set(false);handle.onclick=showHeader;
const topOf=t=>t===document||t===document.documentElement||t===document.body?(document.scrollingElement||document.documentElement).scrollTop:t.scrollTop;
document.addEventListener('scroll',e=>{const t=e.target;if(t.closest?.('.layout-dialog,dialog'))return;const y=topOf(t),last=marks.has(t)?marks.get(t):0;marks.set(t,y);if(performance.now()<lock)return;if(y-last>6&&y>12)set(true);else if(last-y>10)set(false);},{capture:true,passive:true});
const atTop=el=>{for(let n=el;n&&n.nodeType===1;n=n.parentElement){if(n.scrollTop>0)return false;}return (document.scrollingElement||document.documentElement).scrollTop<=0;};
addEventListener('touchstart',e=>{touchY=e.touches[0].clientY;touchTarget=e.target;},{passive:true});
addEventListener('touchmove',e=>{if(touchY===null||!header.classList.contains('is-recolhido'))return;if(e.touches[0].clientY-touchY>40&&atTop(touchTarget)){set(false);touchY=null;}},{passive:true});
addEventListener('touchend',()=>{touchY=null;},{passive:true});
addEventListener('wheel',e=>{if(e.deltaY<-20&&header.classList.contains('is-recolhido')&&atTop(e.target))set(false);},{passive:true});}
window.InverseLayout={refresh,navigate,showHeader};refresh();if(embedded)parent.postMessage({type:'inverse:ready'},'*');
})();
