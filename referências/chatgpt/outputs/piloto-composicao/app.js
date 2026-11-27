(()=>{'use strict';const $=id=>document.getElementById(id),ops={'−2':x=>x-2,'×5':x=>x*5,'÷5':x=>x/5,'+2':x=>x+2},fmt=x=>{const r=Number(x.toFixed(6)),cut=Math.abs(r-x)>1e-12;return String(r).replace('.',',').replace('-','−')+(cut?'…':'');};
/* E5 v0.34 (27/11/2026): Montar e Investigar viram um só momento. Dois números; ida com Ir; volta montada pelo estudante e executada sozinha.
   Estágios internos: 0 = Investigar (ida e volta), 2 = Explicar, 3 = Relacionar. O estágio 1 antigo deixou de existir. */
let stage=0,n=10,plan=[],step=0,passed=false,busy=false,reverse=false,trail=[],timer,token=0,last=null,machineLeg='out',boxPosition=0,boxValue=null,emerging=false,expressionVisible=false;
let trials=[],t=0,phase='input',inputText='',lastResult='';
const blank=()=>({x:null,out:[null,null,null],back:[null,null,null],status:'input'});
const say=m=>$('feedback').textContent=m;
const SECOND='Agora teste um número não inteiro, como −3,5 ou 1/3. A volta ainda recupera a entrada?';
function celebrate(m){window.playSuccessSound?.();$('party').textContent='✦ '+m+' ✦';$('party').hidden=false;clearTimeout(timer);timer=setTimeout(()=>$('party').hidden=true,1300);}
function parse(text){const c=text.trim().replace(/\s+/g,'').replace(/[−–]/g,'-').replace(/,/g,'.');if(/^-?(\d+(\.\d*)?|\.\d+)$/.test(c))return Number(c);const f=c.match(/^(-?)(\d+(?:\.\d+)?)\/(\d+(?:\.\d+)?)$/);if(f&&Number(f[3])!==0)return (f[1]?-1:1)*Number(f[2])/Number(f[3]);return NaN;}
function reset(){token++;busy=false;stage=0;plan=[];step=0;passed=false;reverse=false;trail=[];last=null;clearTimeout(timer);$('party').hidden=true;trials=[blank()];t=0;startInput();}
function startInput(){phase='input';machineLeg='out';expressionVisible=false;inputText='';boxPosition=0;boxValue=null;lastResult='';say('');render();setTimeout(()=>$('entry')?.focus({preventScroll:true}),60);}
function button(text,fn,cls=''){const b=document.createElement('button');b.textContent=text;b.className=cls;b.onclick=fn;b.disabled=busy;return b;}
function row(){const e=document.createElement('div');e.className='row';return e;}
function slider(min,max){const l=document.createElement('label');l.textContent=`${reverse?'Entrada da máquina inversa':'Número de entrada'}: ${fmt(n)}`;const i=document.createElement('input');i.type='range';i.min=min;i.max=max;i.step=1;i.value=n;i.setAttribute('aria-label','Número de entrada');i.oninput=()=>{n=+i.value;last=null;machineLeg='out';if(stage===3)trail.push(n);render();};i.disabled=busy;l.append(i);return l;}
function returnExpression(){let expr='x';for(const op of plan){const g=/\s/.test(expr)?`(${expr})`:expr;if(op==='−2')expr=`${expr} − 2`;else if(op==='+2')expr=`${expr} + 2`;else if(op==='×5')expr=`5${g}`;else expr=`${g}/5`;}return expr;}
function machineDrawing(active=-1){
 const returning=machineLeg==='back',labels=returning?[plan[1]||'?',plan[0]||'?']:['+2','÷5'];
 const phrases={'÷5':['Divide','por 5'],'+2':['Soma','2'],'−2':['Subtrai','2'],'×5':['Multiplica','por 5'],'?':['?','']};
 const text=(x,y,t,size=44,color='#681787',family='system-ui, -apple-system, Segoe UI, sans-serif')=>`<text x="${x}" y="${y}" text-anchor="middle" fill="${color}" font-size="${size}" font-family="${family}" font-weight="${family.startsWith('Georgia')?400:700}">${t}</text>`;
 const home=[248,718,1194][boxPosition],value=boxValue==null?'':fmt(boxValue),font=Math.min(62,124/Math.max(1,value.length)*1.65);
 const card=`<g class="number-box"><path id="card-shape" d="M${home-48} 371H${home+48}Q${home+70} 371 ${home+70} 393V477Q${home+70} 499 ${home+48} 499H${home-48}Q${home-70} 499 ${home-70} 477V393Q${home-70} 371 ${home-48} 371Z" fill="#ff6633" stroke="white" stroke-width="6" stroke-linejoin="round"/><g id="card-number">${text(home,435+font*.34,value,font,'white')}</g></g>`;
 const words=(x,y,word,bounce)=>{const size=/[0-9?]/.test(word)?43:27,ctx=document.createElement('canvas').getContext('2d');ctx.font=`700 ${size}px system-ui`;const chars=Array.from(word),widths=chars.map(c=>ctx.measureText(c).width);let cursor=x-widths.reduce((a,b)=>a+b,0)/2;return `<g aria-label="${word}">${chars.map((c,i)=>{const cx=cursor+widths[i]/2;cursor+=widths[i];return `<text x="${cx}" y="${y}" text-anchor="middle" fill="${/[0-9]/.test(c)?'#d94a1c':'#681787'}" font-size="${size}" font-family="system-ui, -apple-system, Segoe UI, sans-serif" font-weight="700" class="${bounce?'bounce-letter':''}" style="animation-delay:${i*.045}s">${c===' '?'&#160;':c}</text>`;}).join('')}</g>`;};
 const art=window.MachineArtwork;
 let a=art.defs+art.back+card+`<g id="machine-foreground">${art.front}</g>`;
 // Formula is live, not the obsolete x/2+3 outlined in the supplied artwork.
 if(returning){const expression=plan.length?returnExpression():'?';a+=text(715,273,expression,Math.min(64,350/Math.max(1,expression.length)*1.7),'#241436','Georgia, Times New Roman, serif');}
 else a+=text(715,240,'x + 2',51,'#241436','Georgia, Times New Roman, serif')+'<path d="M635 253H795" stroke="#241436" stroke-width="3"/>'+text(715,294,'5',46,'#241436','Georgia, Times New Roman, serif');
 const pulseAt=returning&&phase==='choose'&&plan.length<2?(plan.length===0?1:0):-1;
 for(let i=0;i<2;i++){const x=i?944:493;if(i===pulseAt)a+=`<circle cx="${x}" cy="440" r="66" class="q-halo"/>`;a+=`<g class="${i===pulseAt?'q-pulse':''}">`;phrases[labels[i]].forEach((word,j)=>a+=words(x,417+j*54,word,active===i));a+='</g>';}
 return a;
}

function draw(highlight=-1){const svg=$('visual');svg.parentElement.classList.toggle('machine-scene',stage!==3);let out='';const text=(x,y,t,size=16)=>`<text x="${x}" y="${y}" text-anchor="middle" fill="#473366" font-size="${size}" font-family="system-ui">${t}</text>`;
if(stage===3){svg.setAttribute('viewBox','0 0 400 220');svg.setAttribute('aria-label','Gráfico: entrada do percurso no eixo horizontal e saída final no eixo vertical');for(let k=0;k<=12;k+=2){const v=32+k*13;out+=`<path d="M${v} 30V186 M32 ${186-k*13}H188" stroke="#deb214"/>`+text(v,203,k,11)+text(20,190-k*13,k,11);}out+='<path d="M32 24V186H205" stroke="#473366" fill="none" stroke-width="2"/>';out+=text(277,65,'(entrada, saída final)',14)+text(277,95,`(${fmt(n)}, ${fmt(n)})`,21)+text(277,140,reverse?'Inversa → original':'Original → inversa',14);if(passed)out+='<path d="M32 186L188 30" stroke="#473366" stroke-width="2" stroke-dasharray="5 4"/>'+text(270,175,'y = x',20);for(const v of [...trail,n])out+=`<circle cx="${32+v*13}" cy="${186-v*13}" r="4" fill="#b44218"/>`;out+=text(120,218,'entrada',11)+text(34,16,'saída final',11);
}else{svg.setAttribute('viewBox','140 45 1155 555');svg.setAttribute('aria-label',machineLeg==='back'?(plan.length?'Máquina de volta: '+returnExpression():'Máquina de volta com expressão ainda desconhecida.'):'Máquina de ida: somar dois, depois dividir por cinco.');out=machineDrawing(highlight);}
svg.innerHTML=out;if(stage!==3&&(highlight>=0||emerging))animateCard(highlight);}

function animateCard(active){if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;
 const shape=$('card-shape'),number=$('card-number'),returning=machineLeg==='back',outward=active<0;
 const home=[248,718,1194][boxPosition],station=outward?(returning?(boxPosition===1?944:493):(boxPosition===1?493:944)):(active===0?493:944);
 const from=outward?station:home,to=outward?home:station,duration=outward?600:1100,start=performance.now();
 const halfHeight=x=>{const t=Math.max(0,Math.min(1,(Math.abs(x-station)-69)/86));return 20+44*t*t*(3-2*t);};
 function frame(now){if(!shape.isConnected)return;const t=Math.min(1,(now-start)/duration),ease=t*t*(3-2*t),center=from+(to-from)*ease;let top=[],bottom=[];
 for(let i=0;i<=24;i++){const x=center-70+i*(140/24),h=halfHeight(x);top.push(`${x},${435-h}`);bottom.unshift(`${x},${435+h}`);}
 shape.setAttribute('d','M'+top.join(' L')+' L'+bottom.join(' L')+' Z');
 const sy=halfHeight(center)/64;number.setAttribute('transform',`translate(${center} 435) scale(1 ${sy}) translate(${-home} -435)`);
 if(t<1)requestAnimationFrame(frame);
 }requestAnimationFrame(frame);
}


const wait=ms=>new Promise(r=>setTimeout(r,matchMedia('(prefers-reduced-motion: reduce)').matches?0:ms));
async function leg(returning,runId){const tr=trials[t];machineLeg=returning?'back':'out';expressionVisible=returning;
 if(returning){tr.back=[null,null,tr.out[2]];boxPosition=2;boxValue=tr.out[2];}else{boxPosition=0;boxValue=tr.x;}
 render();
 for(let k=0;k<2;k++){emerging=false;draw(returning?1-k:k);window.playInverseSound?.('maquina',1300);await wait(1400);if(runId!==token)return false;
  boxValue=returning?ops[plan[k]](boxValue):k===0?boxValue+2:boxValue/5;boxPosition=returning?1-k:k+1;
  if(returning)tr.back[boxPosition]=boxValue;else tr.out[boxPosition]=boxValue;
  emerging=true;draw();updateTable();await wait(650);emerging=false;if(runId!==token)return false;}
 return true;}
const same=(a,b)=>a!=null&&b!=null&&Math.abs(a-b)<=1e-9*Math.max(1,Math.abs(b));
async function go(){if(busy||phase!=='input')return;const v=parse(inputText);if(!Number.isFinite(v)){say('Digite um número: pode ter sinal, vírgula ou ser uma fração como 1/3.');return;}
 const tr=trials[t];tr.x=v;tr.out=[v,null,null];tr.back=[null,null,null];n=v;busy=true;phase='running';const runId=++token;say('');
 if(!await leg(false,runId))return;
 tr.back=[null,null,tr.out[2]];machineLeg='back';boxPosition=2;boxValue=tr.out[2];busy=false;
 if(plan.length===2){await goBack();return;}
 phase='choose';render();}
async function goBack(){const tr=trials[t];busy=true;phase='running';const runId=++token;say('');
 if(!await leg(true,runId))return;busy=false;
 const ok=tr.back.every((v,i)=>same(v,tr.out[i]));
 if(!ok){tr.status='erro';phase='wrong';say(`A volta não chegou a ${fmt(tr.x)}. O ? na tabela mostra onde os valores não coincidem. Refaça as operações.`);render();return;}
 tr.status='ok';
 if(t===0){celebrate('Entrada recuperada!');trials.push(blank());t=1;plan=plan.slice();lastResult=`Com ${fmt(tr.x)}, a volta recuperou a entrada.`;phase='input';machineLeg='out';boxPosition=0;boxValue=null;inputText='';render();setTimeout(()=>$('entry')?.focus({preventScroll:true}),60);return;}
 passed=true;phase='done';celebrate('As duas entradas voltaram!');say('Nos dois números, a volta desfez a ida. Avance para explicar por quê.');render();}
function choose(op){if(busy||phase!=='choose'||plan.length>=2)return;plan.push(op);render();if(plan.length===2)goBack();}
function redo(){if(busy||phase!=='wrong')return;plan=[];const tr=trials[t];tr.back=[null,null,tr.out[2]];tr.status='input';boxPosition=2;boxValue=tr.out[2];machineLeg='back';expressionVisible=false;phase='choose';say('');render();}
function updateTable(){trials.forEach((tr,k)=>{for(let i=0;i<3;i++){const cell=$(`out-${k}-${i}`);if(cell&&!cell.querySelector('input'))cell.textContent=tr.out[i]==null?'—':fmt(tr.out[i]);const back=$(`back-${k}-${i}`);if(back){const v=tr.back[i];back.innerHTML=v==null?'—':same(v,tr.out[i])?'<strong>'+fmt(v)+'</strong>':'?';back.classList.toggle('mismatch',v!=null&&!same(v,tr.out[i]));}}});}
function instruction(text,cls=''){const e=document.createElement('p');e.className='instruction '+cls;e.textContent=text;return e;}
function buildJourney(p){
 const showBackRows=k=>k<t||phase!=='input';
 if(phase==='input')p.append(instruction(t===0?'Digite um número em x e toque em Ir.':SECOND,'highlight'));
 else if(lastResult&&t===1&&phase!=='done')p.append(instruction(lastResult,'quiet'));
 const table=document.createElement('table');table.id='value-table';
 let body='';trials.forEach((tr,k)=>{body+=`<tr class="ida" aria-label="Ida do número ${k+1}"><td id="out-${k}-0"></td><td id="out-${k}-1"></td><td id="out-${k}-2"></td></tr>`;if(showBackRows(k))body+=`<tr class="volta" aria-label="Volta do número ${k+1}"><td id="back-${k}-0"></td><td id="back-${k}-1"></td><td id="back-${k}-2"></td></tr>`;});
 table.innerHTML='<caption>Ida e volta (negrito = coincide)</caption><thead><tr><th scope="col">x</th><th scope="col">x + 2</th><th scope="col">(x + 2)/5</th></tr></thead><tbody>'+body+'</tbody>';p.append(table);
 if(phase==='input'&&!busy){const input=document.createElement('input');input.id='entry';input.type='text';input.inputMode='text';input.autocomplete='off';input.placeholder='Digite x';input.value=inputText;input.className='pulse-field';input.setAttribute('aria-label','Número de entrada x: qualquer número real, com vírgula, sinal ou fração');input.oninput=()=>{inputText=input.value;const v=parse(inputText);boxValue=Number.isFinite(v)?v:null;boxPosition=0;draw();window.InverseLayout?.refresh();};input.onkeydown=e=>{if(e.key==='Enter'){e.preventDefault();go();}};table.querySelector(`#out-${t}-0`).append(input);}
 updateTable();
 if(phase==='choose'||phase==='wrong'||(phase==='running'&&machineLeg==='back')){
  p.append(instruction(phase==='wrong'?'As operações não desfizeram a ida. Toque em Refazer.':plan.length===0?'Escolha a primeira operação da volta (estação da direita).':'Agora a segunda operação (estação da esquerda).',phase==='choose'?'highlight':''));
  const choices=document.createElement('div');choices.className='cards';for(const op of Object.keys(ops)){const b=button(op,()=>choose(op));b.disabled=busy||phase!=='choose'||plan.length>=2;choices.append(b);}p.append(choices);}
}
function render(){const visible=[0,2,3];document.querySelectorAll('nav span').forEach((e,i)=>e.classList.toggle('active',visible[i]===stage));
 $('title').textContent=['Ida e volta da máquina','','Por que a entrada é recuperada?','Que gráfico esse percurso produz?'][stage];
 $('task').textContent=['','','Acompanhe a composição e identifique as ações que se desfazem.','Mova a entrada. Cada ponto relaciona a entrada do percurso à saída final.'][stage];$('task').hidden=stage===0;
 $('next').hidden=!passed;$('next').disabled=busy;$('back').hidden=stage===0;$('back').disabled=busy;$('restart').disabled=busy;const p=$('panel');p.replaceChildren();
 if(stage===0){buildJourney(p);
}else if(stage===2){const expressions=['n → (n + 2)/5 → 5((n + 2)/5) − 2','n → (n + 2) − 2 → n','A cada entrada, a própria entrada.'];const e=document.createElement('div');e.className='equation';e.textContent=expressions[step];p.append(e);const prompt=document.createElement('p');prompt.textContent=['O que desfaz dividir por 5?','O que desfaz somar 2?','Esse percurso é uma função identidade.'][step];p.append(prompt);if(step<2){const choices=document.createElement('div');choices.className='choices';const labels=step===0?['Multiplicar por 5','Retirar 5']:['Retirar 2','Dividir por 2'];labels.forEach((label,i)=>choices.append(button(label,()=>{if(i===0){celebrate('Uma relação explicada!');step++;passed=step===2;say(step===2?'A composição recupera toda entrada do domínio, não apenas os exemplos.':'Agora observe a soma de 2 e sua operação inversa.');render();}else say('Acompanhe a operação anterior: qual ação recupera o número?');})));p.append(choices);}
}else{p.append(slider(reverse?1:2,12));p.append(button(reverse?'Ordem: inversa → original':'Ordem: original → inversa',()=>{reverse=!reverse;n=Math.max(reverse?1:2,n);trail=[];say(reverse?'Neste sentido, a entrada deve ser maior que 0,4. Testamos inteiros de 1 a 12.':'Neste sentido, números positivos. Testamos inteiros de 2 a 12.');render();}));const result=document.createElement('p');result.textContent=reverse?`${fmt(n)} → ${fmt(5*n-2)} → ${fmt(n)}`:`${fmt(n)} → ${fmt((n+2)/5)} → ${fmt(n)}`;p.append(result);if(!passed){const choices=document.createElement('div');choices.className='choices';choices.append(button('Saída = entrada',()=>{passed=true;celebrate('Identidade descoberta!');say('Os pontos pertencem à reta y = x, na parte correspondente ao domínio.');render();}),button('Saída = dobro',()=>say('Compare as coordenadas de cada ponto: o que permanece igual?')));p.append(choices);}else{const e=document.createElement('p');e.textContent='f⁻¹(f(n)) = n · f(f⁻¹(y)) = y, nos respectivos domínios.';p.append(e);}}
draw();}
$('next').onclick=()=>{if(stage===3){say('E5 concluída. Explique: por que experimentar exemplos não substitui justificar a regra?');celebrate('Percurso concluído!');return;}stage=stage===0?2:stage+1;passed=false;last=null;if(stage===2)step=0;if(stage===3){n=Math.max(2,Math.min(12,Math.round(trials[0]?.x??10)));trail=[n];}say('');machineLeg='out';render();};
$('back').onclick=()=>{stage=stage===2?0:Math.max(0,stage-1);passed=false;step=0;last=null;if(stage===0){reset();return;}say('');render();};$('restart').onclick=reset;reset();
window.InverseActivity={
 help:'Digite um número em x e toque em Ir: a máquina faz a ida. Depois escolha, na ordem, as duas operações da volta; a máquina volta sozinha. Se a volta não recuperar a entrada, toque em Refazer. Repita com um segundo número.',
 sources:['#next','#back','#restart'],
 state:()=>({atStart:stage===0,busy,primary:stage===0&&phase==='input'?{label:'Ir',disabled:busy||!Number.isFinite(parse(inputText))}:null,retry:stage===0&&phase==='wrong'&&!busy,next:!busy&&passed,nextPulse:passed&&stage===0,terminal:stage===3&&passed,nextLabel:'Próximo'}),
 primary:go,next:()=>$('next').click(),back:()=>$('back').click(),reset,retry:redo
};
})();
