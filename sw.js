if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return r[e]||(s=new Promise((async s=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},s=(s,r)=>{Promise.all(s.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(s)};self.define=(s,i,t)=>{r[s]||(r[s]=Promise.resolve().then((()=>{let r={};const c={uri:location.origin+s.slice(1)};return Promise.all(i.map((s=>{switch(s){case"exports":return r;case"module":return c;default:return e(s)}}))).then((e=>{const s=t(...e);return r.default||(r.default=s),r}))})))}}define("./sw.js",["./workbox-7f09860b"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/[...all].6bc5eb17.js",revision:"ee8ea34f3ab3362a6f907449b037b1ee"},{url:"assets/index.230ff1ae.css",revision:"1d9a997b7406f9e11c0b17d23219387a"},{url:"assets/index.5611c94c.js",revision:"cca431c61ac480578e356fadf7c4b3da"},{url:"assets/vendor.2ef4c889.js",revision:"2c12e4ecb4719bb3f21575f2d3e7012a"},{url:"index.html",revision:"4f7d4c1f8b0a3f8f10a26a76a1b19dd7"},{url:"registerSW.js",revision:"c6edeedf308f55a0233bca84bce8f068"},{url:"manifest.webmanifest",revision:"cca7b59ee9c085404152fff3fc2872fc"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
//# sourceMappingURL=sw.js.map
