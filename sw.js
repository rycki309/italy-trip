const CACHE='italy-2026-private-vault-starter-20261017';
const ASSETS=[
  './','./index.html','./private.html','./private-vault.js','./preview.css','./preview-app.js','./manifest.json',
  './trip-core.js','./trip-itinerary.js','./trip-places.js','./trip-italian.js','./trip-lists.js','./trip-reference.js',
  './assets/app-icon.png',
  './assets/florence-hero.jpg',
  './assets/nerbona-aerial.jpg',
  './assets/nerbona-detail-courtyard.jpg',
  './assets/nerbona-detail-reception.jpg',
  './assets/nerbona-detail-villa.jpg',
  './assets/nerbona-english-labeled-map.jpg',
  './assets/nerbona-hero-clean.jpg',
  './assets/nerbona-hero-clean2.jpg',
  './assets/nerbona-hero-clean3.jpg',
  './assets/nerbona-hero.jpg',
  './assets/nerbona-official-layout.jpg',
  './assets/nerbona-official-orientation.jpg',
  './assets/nerbona-parking.jpg',
  './assets/rome-hero.jpg',
  './assets/rome-preview-hero.jpg'
];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET') return;
  e.respondWith(caches.match(e.request).then(hit=>hit||fetch(e.request).then(r=>{const copy=r.clone();caches.open(CACHE).then(c=>c.put(e.request,copy));return r;}).catch(()=>caches.match('./index.html'))));
});
