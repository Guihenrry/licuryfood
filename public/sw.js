if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return n[e]||(s=new Promise((async s=>{if("document"in self){const n=document.createElement("script");n.src=e,document.head.appendChild(n),n.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!n[e])throw new Error(`Module ${e} didn’t register its module`);return n[e]}))},s=(s,n)=>{Promise.all(s.map(e)).then((e=>n(1===e.length?e[0]:e)))},n={require:Promise.resolve(s)};self.define=(s,i,a)=>{n[s]||(n[s]=Promise.resolve().then((()=>{let n={};const c={uri:location.origin+s.slice(1)};return Promise.all(i.map((s=>{switch(s){case"exports":return n;case"module":return c;default:return e(s)}}))).then((e=>{const s=a(...e);return n.default||(n.default=s),n}))})))}}define("./sw.js",["./workbox-4a677df8"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/354-8a48b4488d902e91c964.js",revision:"znb07LgGDWD9gSsCkOfHi"},{url:"/_next/static/chunks/675-23653c1b51e0ee9e96e3.js",revision:"znb07LgGDWD9gSsCkOfHi"},{url:"/_next/static/chunks/714-6da6507c041bfc456bcf.js",revision:"znb07LgGDWD9gSsCkOfHi"},{url:"/_next/static/chunks/962-c445fdf187438d12fb5e.js",revision:"znb07LgGDWD9gSsCkOfHi"},{url:"/_next/static/chunks/framework-92300432a1172ef1338b.js",revision:"znb07LgGDWD9gSsCkOfHi"},{url:"/_next/static/chunks/main-b42f5d20a91031f33467.js",revision:"znb07LgGDWD9gSsCkOfHi"},{url:"/_next/static/chunks/pages/_app-49ad583b3996cff62aee.js",revision:"znb07LgGDWD9gSsCkOfHi"},{url:"/_next/static/chunks/pages/_error-82a806cd39f8ab3dc3ac.js",revision:"znb07LgGDWD9gSsCkOfHi"},{url:"/_next/static/chunks/pages/cardapio/%5Bslug%5D-d544deb92bc81be6aef5.js",revision:"znb07LgGDWD9gSsCkOfHi"},{url:"/_next/static/chunks/pages/finalizar-pedido/%5Bslug%5D-5cdd6e2b83bcd1418980.js",revision:"znb07LgGDWD9gSsCkOfHi"},{url:"/_next/static/chunks/pages/index-bd0fa7d6b2b1c1415296.js",revision:"znb07LgGDWD9gSsCkOfHi"},{url:"/_next/static/chunks/pages/sucesso-c2758696ffd94ceafb76.js",revision:"znb07LgGDWD9gSsCkOfHi"},{url:"/_next/static/chunks/pages/termos-e-privacidade-347eba8c8fd5ea15ca75.js",revision:"znb07LgGDWD9gSsCkOfHi"},{url:"/_next/static/chunks/polyfills-a54b4f32bdc1ef890ddd.js",revision:"znb07LgGDWD9gSsCkOfHi"},{url:"/_next/static/chunks/webpack-20d43e08bea62467b090.js",revision:"znb07LgGDWD9gSsCkOfHi"},{url:"/_next/static/znb07LgGDWD9gSsCkOfHi/_buildManifest.js",revision:"znb07LgGDWD9gSsCkOfHi"},{url:"/_next/static/znb07LgGDWD9gSsCkOfHi/_ssgManifest.js",revision:"znb07LgGDWD9gSsCkOfHi"},{url:"/favicon.ico",revision:"fb747aae43a6e387d6ed395590fd8f2d"},{url:"/fonts/inter-v3-latin-600.woff2",revision:"5fc9e9c717d652c0a2d32c69b1a9e966"},{url:"/fonts/inter-v3-latin-700.woff2",revision:"e8ecbd3caa74a29a6339db388cff7c17"},{url:"/fonts/inter-v3-latin-regular.woff2",revision:"cf387a4738fea57e757cac39922609b7"},{url:"/icon-1024x1024.png",revision:"25f569608f09185f8720eecf76cb4e49"},{url:"/icon-128x128.png",revision:"b7b09a92b530c450ea8ed16498cd6773"},{url:"/icon-256x256.png",revision:"902390ff56a39e8ac5bb1a436f44e1fc"},{url:"/icon-512x512.png",revision:"96180b7e62e0db5e0525759221ec8fa6"},{url:"/images/bolos-background.jpg",revision:"e68bbec40ceb85f2cf798ef9b765abb0"},{url:"/images/doces-background.jpg",revision:"ba2da214c62f5eb9c0549365f79d44da"},{url:"/images/laila-empadas.jpg",revision:"0d7cd0dcb4e7f4bfee8b76267e12a877"},{url:"/images/pizzaria-background.jpg",revision:"73cad08058e1cd468ba40d19762dfdb4"},{url:"/images/que-seja-doce.jpg",revision:"b4b8a3cf8405d63b3e70f6299789b3b3"},{url:"/images/salgados-background.jpg",revision:"a9bc1e4bed226ceb1805434d3a86a5aa"},{url:"/manifest.json",revision:"64e07160623034bd4a47d7349ef0f494"},{url:"/og-image-01.jpg",revision:"314353cd750c6a26f278d01d83d5c95f"},{url:"/og-image-02.jpg",revision:"317765b9b4905526407075fb4197270f"},{url:"/storybook/pizza.png",revision:"e09d2c21de98e3821bcf2d40a6d1d71e"},{url:"/storybook/pizzaria-avatar.png",revision:"3cc708faffab4fe3c6fc24c4c7b0e63d"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));