const CACHE='italy-2026-integrated-vault-v2-20261017';
const ASSETS=[
  './','./index.html','./private.html','./private-vault.js','./integrated-vault.js','./preview.css','./preview-app.js','./manifest.json',
  './trip-core.js','./trip-itinerary.js','./trip-places.js','./trip-italian.js','./trip-lists.js','./trip-reference.js',
  './app-icon.png',
  './florence-hero.jpg',
  './nerbona-aerial.jpg',
  './nerbona-detail-courtyard.jpg',
  './nerbona-detail-reception.jpg',
  './nerbona-detail-villa.jpg',
  './nerbona-english-labeled-map.jpg',
  './nerbona-hero-clean.jpg',
  './nerbona-hero-clean2.jpg',
  './nerbona-hero-clean3.jpg',
  './nerbona-hero.jpg',
  './nerbona-official-layout.jpg',
  './nerbona-official-orientation.jpg',
  './nerbona-parking.jpg',
  './rome-hero.jpg',
  './rome-preview-hero.jpg'
];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{
 if(e.request.method!=='GET'||new URL(e.request.url).origin!==self.location.origin)return;
 const req=e.request;
 // Fresh assets online; cached files only when offline. Never cache failed responses.
 e.respondWith(fetch(req).then(r=>{if(r.ok){const copy=r.clone();e.waitUntil(caches.open(CACHE).then(c=>c.put(req,copy)));}return r;}).catch(async()=>{
   const hit=await caches.match(req);if(hit)return hit;
   if(req.mode==='navigate')return caches.match('./index.html');
   return Response.error();
 }));
});
