(()=>{'use strict';const $=id=>document.getElementById(id),ops={'−2':x=>x-2,'×5':x=>x*5,'÷5':x=>x/5,'+2':x=>x+2},fmt=x=>String(Number(x.toFixed(10))).replace('.',',');let stage=0,n=10,plan=[],rows=[],step=0,passed=false,busy=false,reverse=false,trail=[],timer,token=0,last=null,machineLeg='out',journey='input',inputText='',forward=[null,null,null],backward=[null,null,null],boxPosition=0,boxValue=null,emerging=false,expressionVisible=false;
const say=t=>$('feedback').textContent=t;
function celebrate(t){window.playSuccessSound?.();$('party').textContent='✦ '+t+' ✦';$('party').hidden=false;clearTimeout(timer);timer=setTimeout(()=>$('party').hidden=true,1100);}
function reset(){token++;busy=false;stage=0;n=10;plan=[];rows=[];step=0;passed=false;reverse=false;trail=[];last=null;machineLeg='out';journey='input';inputText='';forward=[null,null,null];backward=[null,null,null];boxPosition=0;boxValue=null;clearTimeout(timer);$('party').hidden=true;say('Digite uma entrada na primeira célula da tabela.');render();}
function button(text,fn,cls=''){const b=document.createElement('button');b.textContent=text;b.className=cls;b.onclick=fn;b.disabled=busy;return b;}
function row(){const e=document.createElement('div');e.className='row';return e;}
function slider(min,max){const l=document.createElement('label');l.textContent=`${reverse?'Entrada da máquina inversa':'Número de entrada'}: ${fmt(n)}`;const i=document.createElement('input');i.type='range';i.min=min;i.max=max;i.step=1;i.value=n;i.setAttribute('aria-label','Número de entrada');i.oninput=()=>{n=+i.value;last=null;machineLeg='out';if(stage===0)passed=false;if(stage===3)trail.push(n);render();};i.disabled=busy;l.append(i);return l;}
function returnExpression(){let expr='x';for(const op of plan){if(op==='−2')expr=`${expr} − 2`;else if(op==='+2')expr=`${expr} + 2`;else if(op==='×5')expr=`5(${expr})`;else expr=`(${expr})/5`;}return expr;}
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
 for(let i=0;i<2;i++){const x=i?944:493;phrases[labels[i]].forEach((word,j)=>a+=words(x,417+j*54,word,active===i));}
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
 boxValue=returning?ops[plan[k]](boxValue):k===0?boxValue+2:boxValue/5;
 boxPosition=returning?1-k:k+1;if(returning)backward[boxPosition]=boxValue;else forward[boxPosition]=boxValue;
 emerging=true;draw();updateTable();await wait(650);emerging=false;if(runId!==token)return;
}
busy=false;if(!returning){journey='outDone';say('A ida terminou. Os três valores estão registrados. Agora prepare a volta.');}
else{journey='backDone';const matched=backward.every((v,i)=>Math.abs(v-forward[i])<1e-9);if(matched){if(!rows.some(r=>r[0]===n))rows.push([...forward]);passed=stage===0||rows.length>=3;celebrate('Entrada recuperada!');say(stage===1?`${rows.length} entradas recuperadas. ${passed?'Vamos explicar a regra.':'Experimente outra entrada.'}`:'Os valores coincidem. Você recuperou a entrada '+fmt(n)+'.');}else{passed=false;say(`Repense as operações da volta para obter ${fmt(n)} na entrada. Na tabela, ? indica um valor que não coincidiu.`);}}
render();}
function buildJourney(p){
if(machineLeg==='back'){

 const choices=document.createElement('div');choices.className='cards';for(const op of Object.keys(ops)){const b=button(op,()=>{if(plan.length<2){plan.push(op);expressionVisible=false;journey='backReady';backward=[null,null,forward[2]];boxPosition=2;boxValue=forward[2];passed=false;render();}});b.disabled=busy||plan.length===2;choices.append(b);}p.append(choices);
 if(plan.length){const retryControl=button('Refazer escolhas',()=>{plan=[];expressionVisible=false;backward=[null,null,forward[2]];boxPosition=2;boxValue=forward[2];journey='backReady';passed=false;render();});retryControl.id='refazer-escolhas';p.append(retryControl);}
}
const table=document.createElement('table');table.id='value-table';table.innerHTML='<caption>'+ (machineLeg==='back'?'Ida registrada · volta comparada (negrito = coincide)':'Ida · digite x e experimente')+'</caption><thead><tr><th scope="col">x</th><th scope="col">x + 2</th><th scope="col">(x + 2)/5</th></tr></thead><tbody><tr aria-label="Valores da ida"><td id="out-0"></td><td id="out-1"></td><td id="out-2"></td></tr>'+(machineLeg==='back'?'<tr aria-label="Valores da volta"><td id="back-0"></td><td id="back-1"></td><td id="back-2"></td></tr>':'')+'</tbody>';p.append(table);
if(journey==='input'&&!busy){const input=document.createElement('input');input.id='entry';input.type='text';input.inputMode='decimal';input.autocomplete='off';input.placeholder='Digite x';input.value=inputText;input.setAttribute('aria-label','Número de entrada x, maior que zero e até 12');input.oninput=()=>{inputText=input.value;const clean=inputText.trim().replace(',','.');const v=/^(?:\d+(?:\.\d*)?|\.\d+)$/.test(clean)?Number(clean):NaN;forward[0]=Number.isFinite(v)&&v>0&&v<=12?v:null;boxValue=forward[0];boxPosition=0;if(forward[0]!=null)n=v;draw();const runButton=$('run-machine');if(runButton)runButton.disabled=forward[0]==null;};table.querySelector('#out-0').append(input);}
updateTable();const actions=row();if(journey==='outDone'){actions.append(button('Preparar volta',beginBack,'primary'));}else{const b=button('Experimentar',run,'primary');b.id='run-machine';b.disabled=busy||(machineLeg==='back'?plan.length!==2:forward[0]==null);actions.append(b);}if(journey==='backDone')actions.append(button('Nova entrada',newEntry));p.append(actions);
}

function render(){document.querySelectorAll('nav span').forEach((e,i)=>e.classList.toggle('active',i===stage));$('title').textContent=[machineLeg==='out'?'Experimente a ida':'Monte o caminho de volta','Funciona com outras entradas?','Por que a entrada é recuperada?','Que gráfico esse percurso produz?'][stage];$('task').textContent=[machineLeg==='out'?'Digite x na tabela. A máquina soma 2 e divide por 5.':'Escolha as operações e volte até a entrada.','Teste três números diferentes. Os exemplos sustentam uma conjectura; ainda falta explicá-la.','Acompanhe a composição e identifique as ações que se desfazem.','Mova a entrada. Cada ponto relaciona a entrada do percurso à saída final.'][stage];$('next').hidden=!passed;$('next').disabled=busy;$('back').hidden=stage===0;$('back').disabled=busy;$('restart').disabled=busy;const p=$('panel');p.replaceChildren();
if(stage<2){buildJourney(p);
}else if(stage===2){const expressions=['n → (n + 2)/5 → 5((n + 2)/5) − 2','n → (n + 2) − 2 → n','A cada entrada, a própria entrada.'];const e=document.createElement('div');e.className='equation';e.textContent=expressions[step];p.append(e);const prompt=document.createElement('p');prompt.textContent=['O que desfaz dividir por 5?','O que desfaz somar 2?','Esse percurso é uma função identidade.'][step];p.append(prompt);if(step<2){const choices=document.createElement('div');choices.className='choices';const labels=step===0?['Multiplicar por 5','Retirar 5']:['Retirar 2','Dividir por 2'];labels.forEach((label,i)=>choices.append(button(label,()=>{if(i===0){celebrate('Uma relação explicada!');step++;passed=step===2;say(step===2?'A composição recupera toda entrada do domínio, não apenas os exemplos.':'Agora observe a soma de 2 e sua operação inversa.');render();}else say('Acompanhe a operação anterior: qual ação recupera o número?');})));p.append(choices);}
}else{p.append(slider(reverse?1:2,12));p.append(button(reverse?'Ordem: inversa → original':'Ordem: original → inversa',()=>{reverse=!reverse;n=Math.max(reverse?1:2,n);trail=[];say(reverse?'Neste sentido, a entrada deve ser maior que 0,4. Testamos inteiros de 1 a 12.':'Neste sentido, números positivos. Testamos inteiros de 2 a 12.');render();}));const result=document.createElement('p');result.textContent=reverse?`${fmt(n)} → ${fmt(5*n-2)} → ${fmt(n)}`:`${fmt(n)} → ${fmt((n+2)/5)} → ${fmt(n)}`;p.append(result);if(!passed){const choices=document.createElement('div');choices.className='choices';choices.append(button('Saída = entrada',()=>{passed=true;celebrate('Identidade descoberta!');say('Os pontos pertencem à reta y = x, na parte correspondente ao domínio.');render();}),button('Saída = dobro',()=>say('Compare as coordenadas de cada ponto: o que permanece igual?')));p.append(choices);}else{const e=document.createElement('p');e.textContent='f⁻¹(f(n)) = n · f(f⁻¹(y)) = y, nos respectivos domínios.';p.append(e);}}
draw();}
$('next').onclick=()=>{if(stage===3){say('E5 concluída. Explique: por que experimentar exemplos não substitui justificar a regra?');celebrate('Percurso concluído!');return;}stage++;passed=false;last=null;if(stage===1){newEntry();return;}if(stage===2)step=0;if(stage===3)trail=[n];say('');render();};$('back').onclick=()=>{stage=Math.max(0,stage-1);passed=false;step=0;last=null;if(stage<2){newEntry();return;}say('');render();};$('restart').onclick=reset;reset();
window.InverseActivity={
 help:'Digite a entrada na tabela e experimente. Na volta, escolha duas operações, na ordem em que serão executadas. Refazer limpa essas escolhas e mantém a ida registrada. Nova reinicia toda a atividade.',
 sources:['#run-machine','#next','#back','#restart','#panel .row','#refazer-escolhas'],
 state:()=>({atStart:stage===0,busy,primary:stage<2&&journey!=='outDone'?{label:'Experimentar',disabled:busy||(machineLeg==='back'?plan.length!==2:forward[0]==null)}:null,retry:stage<2&&machineLeg==='back',next:!busy&&(journey==='outDone'&&stage<2||passed),terminal:stage===3&&passed,nextLabel:stage<2&&journey==='outDone'?'Próximo: preparar volta':'Próximo'}),
 primary:run,next:()=>{if(stage<2&&journey==='outDone')beginBack();else $('next').click();},back:()=>$('back').click(),reset,
 retry:()=>{plan=[];backward=[null,null,forward[2]];boxPosition=2;boxValue=forward[2];journey='backReady';passed=false;expressionVisible=false;say('Escolha novamente as operações da volta.');render();}
};

})();
