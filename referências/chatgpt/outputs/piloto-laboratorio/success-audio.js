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
