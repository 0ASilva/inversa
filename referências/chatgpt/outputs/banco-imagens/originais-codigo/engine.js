/* Regras independentes da interface. Sem armazenamento ou rede. */
(function(root){
  'use strict';
  const directions={right:{dx:1,dy:0,label:'Direita',icon:'→'},left:{dx:-1,dy:0,label:'Esquerda',icon:'←'},up:{dx:0,dy:1,label:'Cima',icon:'↑'},down:{dx:0,dy:-1,label:'Baixo',icon:'↓'}};
  const supports=[[0,0],[1,0],[2,0],[3,0],[3,1],[3,2],[3,3],[3,4],[3,5]];
  const equal=(a,b)=>a[0]===b[0]&&a[1]===b[1];
  function simulate(commands,trip='out'){
    let position=trip==='back'?[3,5]:[0,0];const target=trip==='back'?[0,0]:[3,5],steps=[];
    if(!commands.length)return {steps,position,complete:false,empty:true};
    for(let index=0;index<commands.length;index++){
      const {direction,count}=commands[index],d=directions[direction];
      if(!d||!Number.isInteger(count)||count<1||count>5)throw new Error('Comando inválido');
      for(let unit=0;unit<count;unit++){
        const next=[position[0]+d.dx,position[1]+d.dy];
        if(!supports.some(p=>equal(p,next)))return {steps,position,complete:false,blocked:{index,unit,next}};
        steps.push({from:[...position],to:next,index,unit});position=next;
      }
    }
    return {steps,position,complete:equal(position,target)};
  }
  const api={directions,supports,equal,simulate};
  if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.RiverEngine=api;
})(typeof window!=='undefined'?window:globalThis);
