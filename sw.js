if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return r[e]||(s=new Promise((async s=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},s=(s,r)=>{Promise.all(s.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(s)};self.define=(s,i,t)=>{r[s]||(r[s]=Promise.resolve().then((()=>{let r={};const n={uri:location.origin+s.slice(1)};return Promise.all(i.map((s=>{switch(s){case"exports":return r;case"module":return n;default:return e(s)}}))).then((e=>{const s=t(...e);return r.default||(r.default=s),r}))})))}}define("./sw.js",["./workbox-7f09860b"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/[...all].514720c8.js",revision:"78ce83dbac2c9d77dea5e00629008299"},{url:"assets/go.5d7b6f68.js",revision:"cf5e6496e1c0117ec3d1b75c9b0232b5"},{url:"assets/index.65a9edad.js",revision:"d6cc212b22b17fea76a0cce924699607"},{url:"assets/index.ddd5e648.css",revision:"c080b689cffed9429a47a1148559afda"},{url:"assets/vendor.602b6795.js",revision:"4aa7e7c31a94bf8596310835a0a6b45b"},{url:"index.html",revision:"6f5d09115612594578d0dc57697dda0e"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"manifest.webmanifest",revision:"94a8383e64b22cc8e64719fe38acbd65"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
//# sourceMappingURL=sw.js.map
