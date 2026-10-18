/* Italy 2026 offline shell v4. Core app files are installed atomically. */
const VERSION='italy-2026-offline-v4-20261018';
const CORE=['./','./index.html','./private.html','./private-vault.js','./integrated-vault.js','./preview.css','./preview-app.js','./manifest.json','./trip-core.js','./trip-itinerary.js','./trip-places.js','./trip-italian.js','./trip-lists.js','./trip-reference.js'];
const MEDIA=['./app-icon.png','./florence-hero.jpg','./nerbona-aerial.jpg','./nerbona-detail-courtyard.jpg','./nerbona-detail-reception.jpg','./nerbona-detail-villa.jpg','./nerbona-english-labeled-map.jpg','./nerbona-hero-clean.jpg','./nerbona-hero-clean2.jpg','./nerbona-hero-clean3.jpg','./nerbona-hero.jpg','./nerbona-official-layout.jpg','./nerbona-official-orientation.jpg','./nerbona-parking.jpg','./rome-hero.jpg','./rome-preview-hero.jpg'];
self.addEventListener('install',event=>event.waitUntil((async()=>{
 const cache=await caches.open(VERSION);
 // Do not activate a partial app: JS and HTML must be from the same version.
 await cache.addAll(CORE.map(path=>new Request(path,{cache:'reload'})));
 await Promise.allSettled(MEDIA.map(async path=>{const response=await fetch(new Request(path,{cache:'reload'}));if(response.ok)await cache.put(path,response);}));
 await self.skipWaiting();
})()));
self.addEventListener('activate',event=>event.waitUntil((async()=>{
 const names=await caches.keys();await Promise.all(names.filter(n=>n.startsWith('italy-2026-')&&n!==VERSION).map(n=>caches.delete(n)));
 await self.clients.claim();
})()));
self.addEventListener('message',event=>{
 if(event.data?.type==='ITALY_CACHE_STATUS')event.source?.postMessage({type:'ITALY_CACHE_STATUS',version:VERSION});
});
self.addEventListener('fetch',event=>{
 const request=event.request;
 if(request.method!=='GET')return;
 const url=new URL(request.url);
 if(url.origin!==self.location.origin || !url.pathname.startsWith(new URL(self.registration.scope).pathname))return;
 const rel='./'+url.pathname.slice(new URL(self.registration.scope).pathname.length);
 const isCore=CORE.includes(rel)||rel==='./';
 const isMedia=MEDIA.includes(rel);
 if(request.mode==='navigate'){
   event.respondWith((async()=>{
     const cache=await caches.open(VERSION);
     try{const fresh=await fetch(request);if(fresh.ok){await cache.put(request,fresh.clone());return fresh;}}catch{}
     return await cache.match(request,{ignoreSearch:true}) || await cache.match('./index.html') || new Response('Offline app not installed. Reconnect once and reload.',{status:503,headers:{'Content-Type':'text/plain'}});
   })());return;
 }
 if(isCore){event.respondWith((async()=>{const cache=await caches.open(VERSION);return await cache.match(rel) || await fetch(request);})());return;}
 if(isMedia){event.respondWith((async()=>{const cache=await caches.open(VERSION);const cached=await cache.match(rel);if(cached)return cached;try{const fresh=await fetch(request);if(fresh.ok)event.waitUntil(cache.put(rel,fresh.clone()));return fresh;}catch{return Response.error();}})());return;}
 event.respondWith(fetch(request).catch(()=>caches.match(request)));
});
