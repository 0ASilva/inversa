(function(root){'use strict';
 const forward=n=>n/2+3,inverse=y=>2*(y-3);
 const operations={subtract:{label:'Retirar 3 cm',symbol:'−3',pair:'add',apply:x=>x-3},double:{label:'Dobrar',symbol:'×2',pair:'scale',apply:x=>x*2},halve:{label:'Tomar a metade',symbol:'÷2',pair:'scale',apply:x=>x/2},add:{label:'Acrescentar 3 cm',symbol:'+3',pair:'add',apply:x=>x+3}};
 function parseNumber(text){const raw=String(text).trim().replace(',','.');if(!/^[-+]?(?:\d+(?:\.\d*)?|\.\d+)$/.test(raw))return null;const n=Number(raw);return Number.isFinite(n)?n:null;}
 function validFields(values,expected){return values.length===expected.length&&values.every((value,i)=>parseNumber(value)===expected[i]);}
 const api={forward,inverse,operations,parseNumber,validFields};if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.TapeModel=api;
})(typeof window!=='undefined'?window:globalThis);
