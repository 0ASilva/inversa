
(()=>{
const root=document.getElementById('lab-inversa-v2'),$=id=>root.querySelector('#'+id),svg=$('plot');
const F={aff:x=>.75*x+1,pos:x=>x*x/4,all:x=>x*x/4,cube:x=>x*x*x/25};
const names={aff:'f(x)=0,75x+1 · domínio ℝ',pos:'f(x)=x²/4 · domínio [0,+∞)',all:'f(x)=x²/4 · domínio ℝ',cube:'f(x)=x³/25 · domínio ℝ'};
let s={version:2,stage:'A',round:1,p:[2,-1],phase:'ready',theta:0,leg:0,question:'number',recovery:false,fn:'aff',panel:'choose',t:0,trail:[],full:false,proj:true,reveal:true,numericPassed:false,symbolPassed:false,choice:null};
let raf=0,last=0,running=false,motion='',drag=false,timer=0,busy=false;
const reduced=()=>matchMedia('(prefers-reduced-motion: reduce)').matches;
const fmt=x=>String(Math.round(x*100)/100).replace('.',',').replace('-','−');
const clamp=x=>Math.max(-4,Math.min(4,x));
function save(){}
function stop(){cancelAnimationFrame(raf);running=false;last=0;}
function clearFeedback(){$('message').textContent='';$('feedback').classList.remove('celebrate','revisit');}
function feedback(message,kind){$('message').textContent=message;$('feedback').classList.remove('celebrate','revisit');void $('feedback').offsetWidth;if(kind)$('feedback').classList.add(kind);}
function success(message,after){window.playSuccessSound?.();stop();busy=true;feedback('✓ '+message,'celebrate');sync();timer=setTimeout(()=>{busy=false;if(after)after();sync();save();},reduced()?450:1100);}
function point(){return s.stage==='C'?[s.t,F[s.fn](s.t)]:s.p;}
function symbolic(){return s.stage==='B'&&s.question==='symbol'&&s.phase!=='explore';}
function isGeometry(){return s.stage==='A'||s.recovery;}
function sync(){const geo=isGeometry(),C=s.stage==='C',exploring=s.stage==='B'&&s.phase==='explore';
$('stage-a').classList.toggle('active',s.stage==='A');$('stage-b').classList.toggle('active',s.stage!=='A');$('title').textContent=s.stage==='A'?`A — Experimentar ${s.round}/2`:C?'Construir o gráfico':'B — Investigar';
$('task').textContent=geo?({ready:'Toque em P para começar.',anim:s.recovery?'Vamos acompanhar o segmento novamente.':'Observe a cópia do segmento se deslocar.',mark:'Toque no plano para marcar o simétrico.',done:'P\' é o ponto simétrico de P.'}[s.phase]):exploring?'Mova P e observe seu simétrico.':C?(s.panel==='choose'?'Escolha uma função e seu domínio.':s.panel==='trace'?names[s.fn]:'O reflexo é função sobre a imagem de f?'):(s.question==='number'?"Se P = (2, −1), quais são as coordenadas de P'?":"Se P = (a, b), quais são as coordenadas de P'?");
$('start').hidden=!geo||s.phase!=='ready';$('pause').hidden=!geo||s.phase!=='anim';$('pause').textContent=running?'Pausar':'Continuar';$('mark').hidden=!geo||s.phase!=='mark';$('next').hidden=!geo||s.phase!=='done';$('next').textContent='Continuar';
$('explore').hidden=!exploring;$('answers').hidden=s.stage!=='B'||s.phase!=='ask'||s.recovery;$('functions').hidden=!C||s.panel!=='choose';$('trace').hidden=!C||s.panel!=='trace';$('scan').textContent=running&&motion==='scan'?'Pausar varredura':'Varrer';$('test').hidden=!C||s.panel!=='test';$('navigation').hidden=!C||s.panel==='choose';
$('px').value=s.p[0];$('py').value=s.p[1];$('t').min=s.fn==='pos'?0:-4;$('t').value=s.t;$('reveal').checked=s.reveal;$('full').checked=s.full;$('proj').checked=s.proj;
const labels=s.question==='number'?['(−2, 1)','(2, 1)','(−1, 2)','(2, −1)']:['(−a, −b)','(b, a)','(a, −b)','(a, b)'];
for(let i=0;i<4;i++){$('answer-'+i).textContent=labels[i];$('answer-'+i).disabled=busy;$('answer-'+i).setAttribute('aria-pressed',String(s.choice===i));}
$('yes').disabled=busy;$('no').disabled=busy;draw();}
function draw(){const W=Math.max(280,svg.clientWidth||500),H=Math.max(110,$('scene').clientHeight);svg.setAttribute('height',H);svg.setAttribute('viewBox',`0 0 ${W} ${H}`);const u=(Math.min(W,H)-48)/10,cx=W/2,cy=H/2,X=x=>cx+x*u,Y=y=>cy-y*u;svg._map={u,cx,cy};let out=[];
const line=(a,b,color='var(--border)',dash='',w=1)=>`<line x1="${X(a[0])}" y1="${Y(a[1])}" x2="${X(b[0])}" y2="${Y(b[1])}" stroke="${color}" stroke-width="${w}" stroke-dasharray="${dash}"/>`;
const text=(p,t,dx=8,dy=-10,style='fill="var(--foreground)" class="text-small"')=>`<text x="${X(p[0])+(p[0]>2&&dx>0?-8:dx)}" y="${Y(p[1])+dy}" text-anchor="${p[0]>2&&dx>0?'end':'start'}" ${style}>${t}</text>`;const strong='fill="#681787" class="point-label"',axis=(a,b)=>`<line x1="${X(a[0])}" y1="${Y(a[1])}" x2="${X(b[0])}" y2="${Y(b[1])}" stroke="#000" stroke-width="1.8" marker-start="url(#axis-arrow)" marker-end="url(#axis-arrow)"/>`;out.push('<defs><marker id="axis-arrow" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#000"/></marker></defs>');
const dot=(p,col,r=6)=>`<circle cx="${X(p[0])}" cy="${Y(p[1])}" r="${r}" fill="${col}"/>`;
const sym=symbolic();if(!sym)for(let k=-4;k<=4;k++){out.push(line([k,-4.5],[k,4.5]),line([-4.5,k],[4.5,k]));if(k&&k%2===0)out.push(text([k,0],k,-4,16),text([0,k],k,-22,4));}
out.push(line([-4.6,-4.6],[4.6,4.6],'#ffffff','',1.6),axis([-4.7,0],[4.7,0]),axis([0,-4.7],[0,4.7]),text([4.7,0],'x',3,17),text([0,4.7],'y',8,0),text([2.9,4.2],'y = x',0,0,'fill="#ffffff" class="text-small"'));
const p=point(),q=[p[1],p[0]],o=[(p[0]+p[1])/2,(p[0]+p[1])/2],v=[p[0]-o[0],p[1]-o[1]];
const path=(pts,col,dash='')=>`<path d="${pts.map((z,i)=>(i?'L':'M')+X(z[0])+','+Y(z[1])).join(' ')}" fill="none" stroke="${col}" stroke-width="2.5" stroke-dasharray="${dash}"/>`;
if(s.stage==='C'){const xs=Array.from({length:201},(_,i)=>(s.fn==='pos'?0:-4)+(s.fn==='pos'?4:8)*i/200);out.push(path(xs.map(x=>[x,F[s.fn](x)]),'var(--viz-series-1)'));if(s.full)out.push(path(xs.map(x=>[F[s.fn](x),x]),'var(--viz-series-2)','5 4'));for(const x of s.trail)out.push(dot([F[s.fn](x),x],'var(--viz-series-2)',2));}
if(isGeometry()&&s.phase!=='ready'){
 const end=[p[0]+(o[0]-p[0])*s.leg,p[1]+(o[1]-p[1])*s.leg];out.push(line(p,end,'var(--muted-foreground)','3 4',2));
 if(s.leg===1){const c=Math.cos(s.theta),sn=Math.sin(s.theta),delta=[(v[0]*c-v[1]*sn-v[0])/2,(v[0]*sn+v[1]*c-v[1])/2];out.push(line([o[0]+delta[0],o[1]+delta[1]],[p[0]+delta[0],p[1]+delta[1]],'var(--viz-series-2)','',3));}
}
const shown=s.stage==='C'||s.phase==='explore'&&s.reveal||isGeometry()&&s.phase==='done';
if(shown){if(!isGeometry()&&(s.stage!=='C'||s.proj)){out.push(line(p,q,'var(--muted-foreground)','4 4'));if(!sym)for(const z of [p,q])out.push(line([z[0],0],z,'var(--border)','3 3'),line([0,z[1]],z,'var(--border)','3 3'));}out.push(dot(q,'#681787',7),text(q,sym?"P' (b, a)":isGeometry()?"P' · simétrico":"P'",9,18,strong));}
out.push(dot(p,'#681787',7),text(p,sym?'P (a, b)':'P',9,-10,strong));svg.innerHTML=out.join('');$('coords').textContent=sym?'P = (a, b)'+(shown?" · P' = (b, a)":''):`P = (${fmt(p[0])}; ${fmt(p[1])})`+(shown?` · P' = (${fmt(q[0])}; ${fmt(q[1])})`:'');
}
function animate(){if(!isGeometry()||s.phase!=='ready')return;stop();s.phase='anim';s.theta=0;s.leg=0;motion='geometry';if(reduced()){s.leg=1;s.theta=Math.PI;s.phase='mark';sync();save();return;}running=true;sync();raf=requestAnimationFrame(tick);}
function tick(now){if(!running)return;const dt=last?Math.min(60,now-last):0;last=now;if(motion==='geometry'){if(s.leg<1)s.leg=Math.min(1,s.leg+dt/600);else s.theta=Math.min(Math.PI,s.theta+dt*Math.PI/1900);draw();if(s.theta>=Math.PI){stop();s.phase='mark';sync();save();return;}}else{move(s.t+dt/850,true);if(s.t>=4){stop();$('scan').textContent='Varrer';save();return;}}raf=requestAnimationFrame(tick);}
function mark(){if(!isGeometry()||s.phase!=='mark')return;s.phase='done';feedback("Você marcou P', o simétrico de P.");sync();$('next').focus();save();}
function ask(question){stop();s.stage='B';s.question=question;s.phase='ask';s.recovery=false;s.p=[2,-1];s.choice=null;sync();$('answer-0').focus();save();}
function recover(){s.recovery=true;s.phase='ready';s.p=[2,-1];feedback('Vamos experimentar de outro jeito.','revisit');animate();save();}
function answer(i){if(busy||s.phase!=='ask'||s.recovery)return;s.choice=i;const good=i===(s.question==='number'?2:1);if(!good){recover();return;}if(s.question==='number'){s.numericPassed=true;success('Você encontrou o par!',()=>{clearFeedback();ask('symbol');});}else{s.symbolPassed=true;success('Uma relação descoberta!',()=>{s.stage='C';s.panel='choose';s.t=0;s.trail=[];clearFeedback();$('fn-aff').focus();});}save();}
function move(value,auto=false){if(!auto){stop();$('scan').textContent='Varrer';}const old=s.t;s.t=Math.max(s.fn==='pos'?0:-4,Math.min(4,value));const n=Math.max(1,Math.ceil(Math.abs(s.t-old)/.04));for(let i=1;i<=n;i++)s.trail.push(old+(s.t-old)*i/n);if(s.trail.length>1000)s.trail=s.trail.slice(-1000);$('t').value=s.t;draw();}
function chooseFn(id){s.testPassed=false;stop();clearFeedback();s.fn=id;s.panel='trace';s.t=0;s.trail=[];s.full=false;sync();save();}
$('start').onclick=animate;$('mark').onclick=mark;$('pause').onclick=()=>{if(running)stop();else{running=true;last=0;raf=requestAnimationFrame(tick);}sync();};
$('next').onclick=()=>{clearFeedback();if(s.recovery){ask(s.question);return;}if(s.round===1){let p;do{p=[Math.floor(Math.random()*7)-3,Math.floor(Math.random()*7)-3];}while(p[0]===p[1]||p.every((x,i)=>x===s.p[i]));s.p=p;s.round=2;s.phase='ready';s.leg=0;s.theta=0;sync();$('start').focus();}else{s.stage='B';s.phase='explore';sync();$('to-number').focus();}save();};
for(const [id,index] of [['px',0],['py',1]])$(id).oninput=e=>{s.p[index]=+e.target.value;draw();save();};$('reveal').onchange=e=>{s.reveal=e.target.checked;draw();save();};$('to-number').onclick=()=>{clearFeedback();ask('number');};for(let i=0;i<4;i++)$('answer-'+i).onclick=()=>answer(i);
for(const id of Object.keys(F))$('fn-'+id).onclick=()=>chooseFn(id);$('t').oninput=e=>{move(+e.target.value);save();};$('full').onchange=e=>{s.full=e.target.checked;draw();save();};$('proj').onchange=e=>{s.proj=e.target.checked;draw();save();};$('clear').onclick=()=>{s.trail=[];draw();save();};
$('scan').onclick=()=>{if(running){stop();$('scan').textContent='Continuar varredura';return;}motion='scan';if(s.t>=4||!s.trail.length)s.t=s.fn==='pos'?0:-4;if(reduced()){move(4,true);save();return;}running=true;last=0;$('scan').textContent='Pausar varredura';raf=requestAnimationFrame(tick);};
$('to-test').onclick=()=>{stop();s.panel='test';clearFeedback();sync();save();};$('return-trace').onclick=()=>{s.panel='trace';clearFeedback();sync();save();};
function judge(yes){if(busy)return;s.testPassed=false;const good=yes===(s.fn!=='all');if(good){s.testPassed=true;success(s.fn==='all'?'Você identificou: uma entrada, duas saídas.':'Você reconheceu uma função inversa.');}else{feedback(s.fn==='all'?'Compare os reflexos de (−2, 1) e (2, 1).':'Explore de novo: duas entradas distintas têm a mesma saída?','revisit');s.panel='trace';if(s.fn==='all'){s.trail.push(-2,2);s.t=2;}sync();}save();}
$('yes').onclick=()=>judge(true);$('no').onclick=()=>judge(false);$('change-function').onclick=()=>{stop();clearTimeout(timer);busy=false;s.panel='choose';clearFeedback();sync();save();};$('review').onclick=()=>{stop();clearTimeout(timer);busy=false;clearFeedback();ask('number');};
function mouse(e){const b=svg.getBoundingClientRect(),m=svg._map;return[(e.clientX-b.left-m.cx)/m.u,-(e.clientY-b.top-m.cy)/m.u];}
svg.onpointerdown=e=>{if(busy)return;const p=mouse(e);if(isGeometry()){if(s.phase==='ready'&&Math.hypot(p[0]-s.p[0],p[1]-s.p[1])*svg._map.u<25)animate();else if(s.phase==='mark')mark();return;}if((s.phase==='explore'||s.stage==='C'&&s.panel==='trace')&&Math.hypot(p[0]-point()[0],p[1]-point()[1])*svg._map.u<25){drag=true;svg.setPointerCapture(e.pointerId);}};
svg.onpointermove=e=>{if(!drag)return;const p=mouse(e);if(s.phase==='explore'){s.p=p.map(x=>Math.round(clamp(x)*10)/10);$('px').value=s.p[0];$('py').value=s.p[1];draw();}else move(clamp(p[0]));};svg.onpointerup=()=>{drag=false;save();};svg.onpointercancel=()=>{drag=false;};
function restore(data){const a=data?.privateContent;if(a?.version!==2||!['A','B','C'].includes(a.stage)||!Array.isArray(a.p)||a.p.length!==2||!a.p.every(Number.isFinite)||!F[a.fn])return;stop();clearTimeout(timer);busy=false;s={...s,...a,trail:Array.isArray(a.trail)?a.trail.filter(Number.isFinite).slice(-1000):[]};if(s.phase==='anim')s.phase='ready';clearFeedback();sync();}
new ResizeObserver(draw).observe($('scene'));sync();

window.InverseActivity={
 help:'Acompanhe o segmento e marque o ponto simétrico. Depois investigue as coordenadas, construa rastros e examine quando a reflexão representa uma função inversa.',
 sources:['#start','#pause','#mark','#next','#to-number','#to-test','#scan'],
 state:()=>({atStart:s.stage==='A'&&s.round===1,busy,primary:isGeometry()&&s.phase!=='done'?{label:s.phase==='ready'?'Experimentar':s.phase==='mark'?'Marcar':running?'Pausar':'Retomar',disabled:busy}:s.stage==='C'&&s.panel==='trace'?{label:running?'Pausar':'Varrer',disabled:busy}:null,retry:false,next:isGeometry()?s.phase==='done':s.stage==='B'?s.phase==='explore':s.panel==='trace'||s.panel==='test'&&s.testPassed,terminal:s.stage==='C'&&s.panel==='test'&&s.testPassed}),
 primary:()=>{if(isGeometry())$(s.phase==='ready'?'start':s.phase==='mark'?'mark':'pause').click();else $('scan').click();},
 next:()=>{if(isGeometry())$('next').click();else if(s.stage==='B')$('to-number').click();else $('to-test').click();},
 reset:()=>{stop();clearTimeout(timer);busy=false;s={version:2,stage:'A',round:1,p:[2,-1],phase:'ready',theta:0,leg:0,question:'number',recovery:false,fn:'aff',panel:'choose',t:0,trail:[],full:false,proj:true,reveal:true,numericPassed:false,symbolPassed:false,choice:null,testPassed:false};clearFeedback();sync();},
 back:()=>{stop();clearTimeout(timer);busy=false;s.recovery=false;clearFeedback();if(s.stage==='C'){if(s.panel==='test')s.panel='trace';else if(s.panel==='trace')s.panel='choose';else {ask('symbol');return;}}else if(s.stage==='B'){if(s.phase==='explore'){s.stage='A';s.round=2;s.phase='done';s.leg=1;s.theta=Math.PI;}else if(s.question==='symbol'){ask('number');return;}else s.phase='explore';}else{s.round=1;s.phase='done';s.p=[2,-1];s.leg=1;s.theta=Math.PI;}sync();}
};

})();
