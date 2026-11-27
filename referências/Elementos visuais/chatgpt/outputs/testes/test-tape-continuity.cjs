const fs=require('fs'),vm=require('vm'),assert=require('assert');
const M=require('../piloto-fita/model.js');
const elements=new Map();
function element(id){if(!elements.has(id))elements.set(id,{value:'',textContent:'',innerHTML:'',clientWidth:480,classList:{add(){},remove(){}},setAttribute(){},querySelectorAll(){return []},replaceChildren(){this.children=[]},append(b){(this.children??=[]).push(b)}});return elements.get(id)}
const context={window:{TapeModel:M},document:{getElementById:element,querySelectorAll:()=>[],querySelector:()=>element('party-strong'),createElement:()=>({setAttribute(){}})},ResizeObserver:class{observe(){}},matchMedia:()=>({matches:true}),cancelAnimationFrame(){},clearTimeout(){},setTimeout(){},requestAnimationFrame(){}};
vm.createContext(context);
let code=fs.readFileSync(require('node:path').join(__dirname,'../piloto-fita/app.js'),'utf8').replace('new ResizeObserver(draw).observe(svg);sync();','new ResizeObserver(draw).observe(svg);sync();window.test={setN(n){s.n=n},goStage,answer(i){busy=false;$("operations").children[i].onclick()},algebra(){busy=false;s.alg=2;sync()},state(){return s}};');
vm.runInContext(code,context);
for(const n of [2,7,12]){
 const t=context.window.test;t.setN(n);t.goStage(3);
 assert.equal(t.state().current,M.forward(n));
 assert(element('question').textContent.includes(String(M.forward(n)).replace('.',',')));
 t.answer(1);assert.equal(t.state().current,n/2);
 t.goStage(3);t.answer(1);t.answer(2);assert.equal(t.state().current,n);
 t.goStage(4);t.algebra();assert(element('expression').innerHTML.includes('+ 3 = '+String(M.forward(n)).replace('.',',')));
 element('length').oninput({target:{value:'9'}});assert.equal(t.state().unlocked,1);assert.equal(t.state().experienced,false);
}
console.log('Continuidade verificada para entradas 2, 7 e 12; mudança de medida exige nova experimentação.');
