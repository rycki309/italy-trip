/* Approved Italy 2026 app shell. Offline-safe update; never touches localStorage. */
const VERSION='italy-2026-travel-ready-v23-20261027';
const CORE=['./index.html', './private.html', './private-vault.js', './integrated-vault.js', './preview.css', './preview-app.js', './manifest.json', './trip-core.js', './trip-itinerary.js', './trip-places.js', './trip-italian.js', './trip-lists.js', './trip-reference.js', './travel-documents.js'];
const MEDIA=['./app-icon.png', './florence-hero.jpg', './nerbona-aerial.jpg', './nerbona-detail-courtyard.jpg', './nerbona-detail-reception.jpg', './nerbona-detail-villa.jpg', './nerbona-english-labeled-map.jpg', './nerbona-hero-clean.jpg', './nerbona-hero-clean2.jpg', './nerbona-hero-clean3.jpg', './nerbona-hero.jpg', './nerbona-official-layout.jpg', './nerbona-official-orientation.jpg', './nerbona-parking.jpg', './rome-hero.jpg', './rome-preview-hero.jpg', './italy-collage.jpg', './rome-photo.jpg', './florence-photo.jpg', './tuscany-photo.jpg', './work-group-photo.jpg'];
const scopePath=new URL(self.registration.scope).pathname;
self.addEventListener('install',event=>event.waitUntil((async()=>{
 const cache=await caches.open(VERSION);
 // Do not activate until every essential HTML/CSS/JS resource is cached.
 await cache.addAll(CORE.map(p=>new Request(p,{cache:'reload'})));
 await Promise.allSettled(MEDIA.map(async p=>{const r=await fetch(new Request(p,{cache:'reload'}));if(r.ok)await cache.put(p,r);}));
 await self.skipWaiting();
})()));
self.addEventListener('activate',event=>event.waitUntil((async()=>{
 const names=await caches.keys();
 await Promise.all(names.filter(n=>n.startsWith('italy-2026-')&&n!==VERSION).map(n=>caches.delete(n)));
 await self.clients.claim();
})()));
self.addEventListener('fetch',event=>{
 const req=event.request;if(req.method!=='GET')return;
 const url=new URL(req.url);if(url.origin!==self.location.origin||!url.pathname.startsWith(scopePath))return;
 const path='./'+url.pathname.slice(scopePath.length);
 const resource=path==='./'?'./index.html':path;
 if(req.mode==='navigate'){event.respondWith((async()=>{
  const cache=await caches.open(VERSION);
  // Online, prefer latest page; offline, use the approved cached HTML.
  try{const r=await fetch(req);if(r.ok){await cache.put(resource,r.clone());return r;}}catch(e){}
  return await cache.match(resource)||await cache.match('./index.html')||new Response('Please reconnect once to install the offline app.',{status:503});
 })());return;}
 if(CORE.includes(resource)||MEDIA.includes(resource)){event.respondWith((async()=>{
  const cache=await caches.open(VERSION);const cached=await cache.match(resource);
  if(MEDIA.includes(resource)&&cached)return cached;
  try{const fresh=await fetch(new Request(req,{cache:'no-cache'}));if(fresh.ok){await cache.put(resource,fresh.clone());return fresh;}}catch(e){}
  return cached||Response.error();
 })());}
});
