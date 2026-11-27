(()=>{'use strict';const $=id=>document.getElementById(id),ops={'−4':x=>x-4,'×2':x=>x*2,'÷2':x=>x/2,'+4':x=>x+4},fmt=x=>String(Math.round(x*100)/100).replace('.',',');let stage=0,n=10,plan=[],rows=[],step=0,passed=false,busy=false,reverse=false,trail=[],timer,token=0,last=null,machineLeg='out',journey='input',inputText='',forward=[null,null,null],backward=[null,null,null],boxPosition=0,boxValue=null,emerging=false,expressionVisible=false;
const say=t=>$('feedback').textContent=t;
function celebrate(t){window.playSuccessSound?.();$('party').textContent='✦ '+t+' ✦';$('party').hidden=false;clearTimeout(timer);timer=setTimeout(()=>$('party').hidden=true,1100);}
function reset(){token++;busy=false;stage=0;n=10;plan=[];rows=[];step=0;passed=false;reverse=false;trail=[];last=null;machineLeg='out';journey='input';inputText='';forward=[null,null,null];backward=[null,null,null];boxPosition=0;boxValue=null;clearTimeout(timer);$('party').hidden=true;say('Digite uma entrada na primeira célula da tabela.');render();}
function button(text,fn,cls=''){const b=document.createElement('button');b.textContent=text;b.className=cls;b.onclick=fn;b.disabled=busy;return b;}
function row(){const e=document.createElement('div');e.className='row';return e;}
function slider(min,max){const l=document.createElement('label');l.textContent=`${reverse?'Entrada da máquina inversa':'Comprimento de entrada'}: ${fmt(n)} cm`;const i=document.createElement('input');i.type='range';i.min=min;i.max=max;i.step=1;i.value=n;i.setAttribute('aria-label','Comprimento de entrada em centímetros');i.oninput=()=>{n=+i.value;last=null;machineLeg='out';if(stage===0)passed=false;if(stage===3)trail.push(n);render();};i.disabled=busy;l.append(i);return l;}
function returnExpression(){let expr='x';for(const op of plan){if(op==='−4')expr=`${expr} − 4`;else if(op==='+4')expr=`${expr} + 4`;else if(op==='×2')expr=`2(${expr})`;else expr=`(${expr})/2`;}return expr;}
function machineDrawing(active=-1){const returning=machineLeg==='back',labels=returning?[plan[1]||'?',plan[0]||'?']:['÷2','+4'];
const phrases={'÷2':['Divide','por 2'],'+4':['Soma','4'],'−4':['Subtrai','4'],'×2':['Multiplica','por 2'],'?':['?','']};
const text=(x,y,t,size=16,color='#473366')=>`<text x="${x}" y="${y}" text-anchor="middle" fill="${color}" font-size="${size}" font-family="system-ui" font-weight="650">${t}</text>`;
const box=(x,val)=>`<g class="number-box"><path id="card-shape" d="M${x} 131H${x+48}V179H${x}Z" fill="#ff6633" stroke="#fffdf5" stroke-width="2" stroke-linejoin="round"/><g id="card-number">${text(x+24,162,val==null?'':fmt(val),22,'white')}</g></g>`;
const words=(x,y,word,bounce)=>`<g aria-label="${word}">${Array.from(word).map((c,i)=>`<text x="${x+(i-(word.length-1)/2)*Math.min(8.2,60/Math.max(1,word.length-1))}" y="${y}" text-anchor="middle" fill="#473366" font-size="${word.length>8?13:16}" font-family="system-ui" font-weight="700" class="${bounce?'bounce-letter':''}" style="animation-delay:${i*.045}s">${c===' '?'&#160;':c}</text>`).join('')}</g>`;
let a=`<defs><linearGradient id="belt" x2="0" y2="1"><stop stop-color="#8064a4"/><stop offset="1" stop-color="#473366"/></linearGradient></defs>`;
a+=text(200,18,returning?'VOLTA · máquina a descobrir':'IDA · máquina conhecida',13);
a+='<rect x="67" y="30" width="266" height="173" rx="13" fill="#fffdf5" fill-opacity=".35" stroke="#473366" stroke-width="3"/><rect x="91" y="40" width="218" height="43" rx="8" fill="#fffdf5" stroke="#ffe071" stroke-width="6"/>';
a+=text(200,69,returning?(plan.length?returnExpression():'?'):'x/2 + 4',returning&&plan.length?21:25,'#b52d22');
a+='<path d="M125 83V104M275 83V104" stroke="#ffe071" stroke-width="7" stroke-linecap="round"/>';
a+=box([9,176,343][boxPosition],boxValue);
for(let i=0;i<2;i++){const x=i?275:125,working=active===i;
 a+=`<g class="${working?'working-station':''}"><path d="M${x-47} 120Q${x-34} 120 ${x-30} 139V160Q${x-34} 179 ${x-47} 179Z" fill="#957cba" stroke="#473366" stroke-width="2"/><rect x="${x-51}" y="120" width="8" height="59" rx="4" fill="#473366"/><path d="M${x+47} 120Q${x+34} 120 ${x+30} 139V160Q${x+34} 179 ${x+47} 179Z" fill="#957cba" stroke="#473366" stroke-width="2"/><rect x="${x+43}" y="120" width="8" height="59" rx="4" fill="#473366"/><rect x="${x-34}" y="103" width="68" height="78" rx="7" fill="#fffdf5" stroke="#ffe071" stroke-width="3"/>`;
 phrases[labels[i]].forEach((line,j)=>a+=words(x,132+j*24,line,working));a+='</g>';}
a+='<rect x="5" y="183" width="390" height="25" rx="12" fill="url(#belt)" stroke="#473366" stroke-width="2"/>';
for(let x=17;x<395;x+=24)a+=`<circle cx="${x}" cy="195" r="8" fill="#a790c4"/><circle cx="${x}" cy="195" r="3" fill="#8064a4"/>`;
a+='<path d="M35 209L48 227H77L89 209M311 209L323 227H352L365 209" fill="none" stroke="#473366" stroke-width="5"/>';

a+=text(33,122,'entrada',11)+text(200,96,'entre etapas',10)+text(367,122,'saída',11);
a+=text(200,247,returning?'VOLTA: da direita para a esquerda':'IDA: da esquerda para a direita',13);
return a;}

function draw(highlight=-1){const svg=$('visual');let out='';const text=(x,y,t,size=16)=>`<text x="${x}" y="${y}" text-anchor="middle" fill="#473366" font-size="${size}" font-family="system-ui">${t}</text>`;
if(stage===3){svg.setAttribute('viewBox','0 0 400 220');svg.setAttribute('aria-label','Gráfico: entrada do percurso no eixo horizontal e saída final no eixo vertical');for(let k=0;k<=12;k+=2){const v=32+k*13;out+=`<path d="M${v} 30V186 M32 ${186-k*13}H188" stroke="#deb214"/>`+text(v,203,k,11)+text(20,190-k*13,k,11);}out+='<path d="M32 24V186H205" stroke="#473366" fill="none" stroke-width="2"/>';out+=text(277,65,'(entrada, saída final)',14)+text(277,95,`(${fmt(n)}, ${fmt(n)})`,21)+text(277,140,reverse?'Inversa → original':'Original → inversa',14);if(passed)out+='<path d="M32 186L188 30" stroke="#473366" stroke-width="2" stroke-dasharray="5 4"/>'+text(270,175,'y = x',20);for(const v of [...trail,n])out+=`<circle cx="${32+v*13}" cy="${186-v*13}" r="4" fill="#b44218"/>`;out+=text(120,218,'entrada',11)+text(34,16,'saída final',11);
}else{svg.setAttribute('viewBox','0 0 400 258');svg.setAttribute('aria-label',machineLeg==='back'?(plan.length?'Máquina de volta: '+returnExpression():'Máquina de volta com expressão ainda desconhecida.'):'Máquina de ida: dividir por dois, depois somar quatro.');out=machineDrawing(highlight);}
svg.innerHTML=out;if(stage!==3&&(highlight>=0||emerging))animateCard(highlight);}

function animateCard(active){if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;
 const shape=$('card-shape'),number=$('card-number'),returning=machineLeg==='back',outward=active<0;
 const home=[33,200,367][boxPosition],station=outward?(returning?(boxPosition===1?275:125):(boxPosition===1?125:275)):(active===0?125:275);
 const from=outward?station:home,to=outward?home:station,duration=outward?600:1100,start=performance.now();
 const halfHeight=x=>{const t=Math.max(0,Math.min(1,(Math.abs(x-station)-29)/53));return 5+19*t*t*(3-2*t);};
 function frame(now){if(!shape.isConnected)return;const t=Math.min(1,(now-start)/duration),ease=t*t*(3-2*t),center=from+(to-from)*ease;let top=[],bottom=[];
 for(let i=0;i<=24;i++){const x=center-24+i*2,h=halfHeight(x);top.push(`${x},${155-h}`);bottom.unshift(`${x},${155+h}`);}
 shape.setAttribute('d','M'+top.join(' L')+' L'+bottom.join(' L')+' Z');
 const sy=halfHeight(center)/24;number.setAttribute('transform',`translate(${center} 155) scale(1 ${sy}) translate(${-home} -155)`);
 if(t<1)requestAnimationFrame(frame);
 }requestAnimationFrame(frame);
}

function newEntry(){journey='input';machineLeg='out';expressionVisible=false;inputText='';forward=[null,null,null];backward=[null,null,null];boxPosition=0;boxValue=null;passed=false;last=null;say('Digite outro número para experimentar a ida.');render();}
function beginBack(){journey='backReady';machineLeg='back';expressionVisible=false;backward=[null,null,forward[2]];boxPosition=2;boxValue=forward[2];passed=false;say('Escolha as operações e experimente a volta.');render();}
function editPlan(i){expressionVisible=false;plan.splice(i,1);backward=[null,null,forward[2]];boxPosition=2;boxValue=forward[2];journey='backReady';passed=false;render();}
function updateTable(){const table=$('value-table');if(!table)return;const value=(v)=>v==null?'—':fmt(v);for(let i=0;i<3;i++){const cell=$('out-'+i);if(cell&&!cell.querySelector('input'))cell.textContent=value(forward[i]);const back=$('back-'+i);if(back)back.innerHTML=backward[i]==null?'—':Math.abs(backward[i]-forward[i])<1e-9?'<strong>'+fmt(backward[i])+'</strong>':'?';}}
async function run(){if(busy)return;const returning=machineLeg==='back';if(returning&&plan.length!==2)return;if(!returning&&!(Number.isFinite(forward[0])&&forward[0]>0&&forward[0]<=12)){say('Digite um número maior que zero e até 12; pode usar vírgula.');return;}
busy=true;expressionVisible=returning;const runId=++token;if(returning){backward=[null,null,forward[2]];boxPosition=2;boxValue=forward[2];}else{n=forward[0];forward=[n,null,null];boxPosition=0;boxValue=n;}render();
const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches,wait=ms=>new Promise(r=>setTimeout(r,reduced?0:ms));
say(returning?'Acompanhe a volta, da direita para a esquerda.':'Acompanhe a ida, da esquerda para a direita.');
for(let k=0;k<2;k++){
 emerging=false;draw(returning?1-k:k);await wait(1400);if(runId!==token)return;
 boxValue=returning?ops[plan[k]](boxValue):k===0?boxValue/2:boxValue+4;
 boxPosition=returning?1-k:k+1;if(returning)backward[boxPosition]=boxValue;else forward[boxPosition]=boxValue;
 emerging=true;draw();updateTable();await wait(650);emerging=false;if(runId!==token)return;
}
busy=false;if(!returning){journey='outDone';say('A ida terminou. Os três valores estão registrados. Agora prepare a volta.');}
else{journey='backDone';const matched=backward.every((v,i)=>Math.abs(v-forward[i])<1e-9);if(matched){if(!rows.some(r=>r[0]===n))rows.push([...forward]);passed=stage===0||rows.length>=3;celebrate('Entrada recuperada!');say(stage===1?`${rows.length} entradas recuperadas. ${passed?'Vamos explicar a regra.':'Experimente outra entrada.'}`:'Os valores coincidem. Você recuperou a entrada '+fmt(n)+'.');}else{passed=false;say(`Repense as operações da volta para obter ${fmt(n)} na entrada. Na tabela, ? indica um valor que não coincidiu.`);}}
render();}
function buildJourney(p){
if(machineLeg==='back'){

 const choices=document.createElement('div');choices.className='cards';for(const op of Object.keys(ops)){const b=button(op,()=>{if(plan.length<2){plan.push(op);expressionVisible=false;journey='backReady';backward=[null,null,forward[2]];boxPosition=2;boxValue=forward[2];passed=false;render();}});b.disabled=busy||plan.length===2;choices.append(b);}p.append(choices);
 if(plan.length)p.append(button('Refazer escolhas',()=>{plan=[];expressionVisible=false;backward=[null,null,forward[2]];boxPosition=2;boxValue=forward[2];journey='backReady';passed=false;render();}));
}
const table=document.createElement('table');table.id='value-table';table.innerHTML='<caption>'+ (machineLeg==='back'?'Ida registrada · volta comparada (negrito = coincide)':'Ida · digite x e experimente')+'</caption><thead><tr><th scope="col">x</th><th scope="col">x/2</th><th scope="col">x/2 + 4</th></tr></thead><tbody><tr aria-label="Valores da ida"><td id="out-0"></td><td id="out-1"></td><td id="out-2"></td></tr>'+(machineLeg==='back'?'<tr aria-label="Valores da volta"><td id="back-0"></td><td id="back-1"></td><td id="back-2"></td></tr>':'')+'</tbody>';p.append(table);
if(journey==='input'&&!busy){const input=document.createElement('input');input.id='entry';input.type='text';input.inputMode='decimal';input.autocomplete='off';input.placeholder='Digite x';input.value=inputText;input.setAttribute('aria-label','Número de entrada x, maior que zero e até 12');input.oninput=()=>{inputText=input.value;const clean=inputText.trim().replace(',','.');const v=/^(?:\d+(?:\.\d*)?|\.\d+)$/.test(clean)?Number(clean):NaN;forward[0]=Number.isFinite(v)&&v>0&&v<=12?v:null;boxValue=forward[0];boxPosition=0;if(forward[0]!=null)n=v;draw();const runButton=$('run-machine');if(runButton)runButton.disabled=forward[0]==null;};table.querySelector('#out-0').append(input);}
updateTable();const actions=row();if(journey==='outDone'){actions.append(button('Preparar volta',beginBack,'primary'));}else{const b=button('Experimentar',run,'primary');b.id='run-machine';b.disabled=busy||(machineLeg==='back'?plan.length!==2:forward[0]==null);actions.append(b);}if(journey==='backDone')actions.append(button('Nova entrada',newEntry));p.append(actions);
}

function render(){document.querySelectorAll('nav span').forEach((e,i)=>e.classList.toggle('active',i===stage));$('title').textContent=[machineLeg==='out'?'Experimente a ida':'Monte o caminho de volta','Funciona com outras entradas?','Por que a entrada é recuperada?','Que gráfico esse percurso produz?'][stage];$('task').textContent=[machineLeg==='out'?'Digite x na tabela. A máquina divide por 2 e soma 4.':'Escolha as operações e experimente voltar até a entrada.','Teste três comprimentos diferentes. Os exemplos sustentam uma conjectura; ainda falta explicá-la.','Acompanhe a composição e identifique as ações que se desfazem.','Mova a entrada. Cada ponto relaciona a entrada do percurso à saída final.'][stage];$('next').hidden=!passed;$('next').disabled=busy;$('back').hidden=stage===0;$('back').disabled=busy;$('restart').disabled=busy;const p=$('panel');p.replaceChildren();
if(stage<2){buildJourney(p);
}else if(stage===2){const expressions=['n → n/2 + 4 → 2(n/2 + 4 − 4)','n → 2(n/2) → n','A cada entrada, a própria entrada.'];const e=document.createElement('div');e.className='equation';e.textContent=expressions[step];p.append(e);const prompt=document.createElement('p');prompt.textContent=['O que desfaz o acréscimo de 4?','O que desfaz tomar a metade?','Esse percurso é uma função identidade.'][step];p.append(prompt);if(step<2){const choices=document.createElement('div');choices.className='choices';const labels=step===0?['Retirar 4','Dividir por 4']:['Multiplicar por 2','Somar 2'];labels.forEach((label,i)=>choices.append(button(label,()=>{if(i===0){celebrate('Uma relação explicada!');step++;passed=step===2;say(step===2?'A composição recupera toda entrada do domínio, não apenas os exemplos.':'Agora observe a metade e o dobro.');render();}else say('Acompanhe a operação anterior: qual ação recupera a medida?');})));p.append(choices);}
}else{p.append(slider(reverse?5:2,12));p.append(button(reverse?'Ordem: inversa → original':'Ordem: original → inversa',()=>{reverse=!reverse;n=Math.max(reverse?5:2,n);trail=[];say(reverse?'Neste sentido, a entrada deve ser maior que 4 cm. Testamos inteiros de 5 a 12.':'Neste sentido, comprimentos positivos. Testamos inteiros de 2 a 12.');render();}));const result=document.createElement('p');result.textContent=reverse?`${fmt(n)} → ${fmt(2*(n-4))} → ${fmt(n)} cm`:`${fmt(n)} → ${fmt(n/2+4)} → ${fmt(n)} cm`;p.append(result);if(!passed){const choices=document.createElement('div');choices.className='choices';choices.append(button('Saída = entrada',()=>{passed=true;celebrate('Identidade descoberta!');say('Os pontos pertencem à reta y = x, na parte correspondente ao domínio.');render();}),button('Saída = dobro',()=>say('Compare as coordenadas de cada ponto: o que permanece igual?')));p.append(choices);}else{const e=document.createElement('p');e.textContent='f⁻¹(f(n)) = n · f(f⁻¹(y)) = y, nos respectivos domínios.';p.append(e);}}
draw();}
$('next').onclick=()=>{if(stage===3){say('E5 concluída. Explique: por que experimentar exemplos não substitui justificar a regra?');celebrate('Percurso concluído!');return;}stage++;passed=false;last=null;if(stage===1){newEntry();return;}if(stage===2)step=0;if(stage===3)trail=[n];say('');render();};$('back').onclick=()=>{stage=Math.max(0,stage-1);passed=false;step=0;last=null;if(stage<2){newEntry();return;}say('');render();};$('restart').onclick=reset;reset();})();
