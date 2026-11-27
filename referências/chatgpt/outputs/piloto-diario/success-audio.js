/* Comemoração curta, gerada localmente. Sem arquivos externos ou persistência. */
(()=>{'use strict';let context,muted=false;
const button=document.getElementById('sound-toggle');
function prepare(){if(muted)return null;try{const Audio=window.AudioContext||window.webkitAudioContext;if(!Audio)return null;context??=new Audio();if(context.state==='suspended')context.resume().catch(()=>{});return context;}catch{return null;}}
document.addEventListener('pointerdown',prepare,{capture:true});document.addEventListener('keydown',prepare,{capture:true});
window.inverseSoundEnabled=true;
window.setInverseSound=(enabled,notify=true)=>{muted=!enabled;window.inverseSoundEnabled=!muted;button?.setAttribute('aria-pressed',String(!muted));button?.setAttribute('aria-label',muted?'Ativar som das comemorações':'Silenciar som das comemorações');if(muted&&context)context.suspend().catch(()=>{});if(notify)window.dispatchEvent(new Event('inverse:sound'));};
button?.addEventListener('click',()=>{window.setInverseSound(muted);if(!muted)prepare();});

window.playSuccessSound=()=>{const ctx=prepare();if(!ctx||muted)return;const play=()=>{if(muted||ctx.state!=='running')return;[523.25,659.25,783.99].forEach((frequency,i)=>{const osc=ctx.createOscillator(),gain=ctx.createGain(),start=ctx.currentTime+i*.12;osc.type='sine';osc.frequency.value=frequency;gain.gain.setValueAtTime(0,start);gain.gain.linearRampToValueAtTime(.07,start+.015);gain.gain.exponentialRampToValueAtTime(.001,start+.26);osc.connect(gain);gain.connect(ctx.destination);osc.start(start);osc.stop(start+.28);osc.onended=()=>{osc.disconnect();gain.disconnect();};});};if(ctx.state==='suspended')ctx.resume().then(play).catch(()=>{});else play();};
})();

/* Sons de ação (27/11/2026): salto, baú, festa da volta e máquina em funcionamento. Gerados localmente; respeitam o botão de som. */
(()=>{'use strict';
function ctx(){if(window.inverseSoundEnabled===false)return null;try{const A=window.AudioContext||window.webkitAudioContext;if(!A)return null;window.__inverseAudio??=new A();const c=window.__inverseAudio;if(c.state==='suspended')c.resume().catch(()=>{});return c;}catch{return null;}}
function tone(c,{type='sine',from,to=from,start=0,dur=.2,vol=.06,filter=null}){const o=c.createOscillator(),g=c.createGain(),t=c.currentTime+start;o.type=type;o.frequency.setValueAtTime(from,t);if(to!==from)o.frequency.exponentialRampToValueAtTime(to,t+dur);g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(vol,t+.012);g.gain.exponentialRampToValueAtTime(.0008,t+dur);let last=o;if(filter){const f=c.createBiquadFilter();f.type='lowpass';f.frequency.value=filter;o.connect(f);last=f;}last.connect(g);g.connect(c.destination);o.start(t);o.stop(t+dur+.02);o.onended=()=>{o.disconnect();g.disconnect();};}
const sounds={
 salto:c=>tone(c,{type:'triangle',from:320,to:760,dur:.16,vol:.07}),
 bau:c=>{tone(c,{type:'sawtooth',from:180,to:95,dur:.32,vol:.04,filter:900});[1046.5,1318.5,1568,2093].forEach((f,i)=>tone(c,{from:f,start:.3+i*.07,dur:.3,vol:.045}));},
 festa:c=>{[[523.25,0],[659.25,.13],[783.99,.26],[1046.5,.39]].forEach(([f,s],i)=>tone(c,{type:'triangle',from:f,start:s,dur:i===3?.6:.18,vol:.07}));tone(c,{from:1318.5,start:.39,dur:.6,vol:.035});},
 maquina:(c,ms=1200)=>{const d=ms/1000,t=c.currentTime,o=c.createOscillator(),w=c.createOscillator(),wg=c.createGain(),f=c.createBiquadFilter(),g=c.createGain();o.type='sawtooth';o.frequency.value=72;w.frequency.value=9;wg.gain.value=9;w.connect(wg);wg.connect(o.frequency);f.type='lowpass';f.frequency.value=520;g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(.05,t+.08);g.gain.setValueAtTime(.05,t+d-.12);g.gain.linearRampToValueAtTime(0,t+d);o.connect(f);f.connect(g);g.connect(c.destination);o.start(t);w.start(t);o.stop(t+d+.02);w.stop(t+d+.02);o.onended=()=>{o.disconnect();w.disconnect();wg.disconnect();f.disconnect();g.disconnect();};tone(c,{type:'square',from:1400,start:d-.05,dur:.05,vol:.025,filter:3000});}
};
window.playInverseSound=(name,arg)=>{const c=ctx();if(!c||!sounds[name])return;const go=()=>{if(c.state==='running')sounds[name](c,arg);};if(c.state==='suspended')c.resume().then(go).catch(()=>{});else go();};
})();
