if(!self.define){let e,i={};const r=(r,s)=>(r=new URL(r+".js",s).href,i[r]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=i,document.head.appendChild(e)}else e=r,importScripts(r),i()})).then((()=>{let e=i[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(s,n)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let o={};const l=e=>r(e,c),f={module:{uri:c},exports:o,require:l};i[c]=Promise.all(s.map((e=>f[e]||l(e)))).then((e=>(n(...e),o)))}}define(["./workbox-4f586afe"],(function(e){"use strict";e.setCacheNameDetails({prefix:"sgone"}),self.skipWaiting(),e.precacheAndRoute([{url:"android-chrome-192x192.png",revision:"4bcc76f5ae528d72a2467d245cf5597b"},{url:"android-chrome-512x512.png",revision:"cd7c12a0ef7a83cc802c2a88e265a69a"},{url:"apple-touch-icon.png",revision:"097d627f8192f532effd782dba52f351"},{url:"browserconfig.xml",revision:"d67279e678355313e9f3581894c9cc7e"},{url:"css/326.f1356052.css",revision:null},{url:"css/651.03284d7d.css",revision:null},{url:"css/app.278dc9c8.css",revision:null},{url:"favicon-16x16.png",revision:"08920d1156fe41166ee0366748e4b69c"},{url:"favicon-32x32.png",revision:"128e4d7ed57f95f8adc0a74bbd64801e"},{url:"img/hutton.e2c48da2.svg",revision:null},{url:"img/ics-sdg.0d0625d2.svg",revision:null},{url:"img/logo.svg",revision:"618f4d1d8be86aafef337976126f8fa6"},{url:"index.html",revision:"3b16048e21ee0fe32cb0082f5f0d037a"},{url:"joiner.worker.js",revision:"def6674f1362ec2bf2ad07ffcc0f8769"},{url:"js/326.1ed4d4ed.js",revision:null},{url:"js/651.2e8d0ae8.js",revision:null},{url:"js/app.e5257fa5.js",revision:null},{url:"js/chunk-vendors.d453de0d.js",revision:null},{url:"levenshtein.worker.js",revision:"1d97ba92c74a43ca64360ee1e48a7597"},{url:"manifest.json",revision:"09ce2908c9c3fa72dd43a815a0b4e772"},{url:"mstile-144x144.png",revision:"c16c800acf82cbdb07eddebd219e217b"},{url:"mstile-150x150.png",revision:"900817e1830e19ce162085c4ce76b2b0"},{url:"mstile-310x150.png",revision:"a78292451d3e22a5db573068cfb21983"},{url:"mstile-310x310.png",revision:"d24a722603defe17cb947a9a72bde68f"},{url:"mstile-70x70.png",revision:"40f25a03709a86ffb0059cfa6fbacaff"},{url:"robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"},{url:"safari-pinned-tab.svg",revision:"f6cff66ae5f3259039f72dc77a21451c"},{url:"site.webmanifest",revision:"7f7d42ee100da5e5f4565e62d2ebeed9"}],{})}));
//# sourceMappingURL=service-worker.js.map
