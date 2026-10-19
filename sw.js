const CACHE='mofumofu-mobile-v33';
const PRECACHE=["./", "./index.html", "./manifest.webmanifest", "./icon-192.png", "./icon-512.png", "./apple-touch-icon.png", "./assets/img_001_825b24d3973bee5c.webp", "./assets/img_002_e77e8f9d92022d2d.webp", "./assets/img_003_0bd95592c3097a53.webp", "./assets/img_004_ffd41e1657166248.webp", "./assets/img_005_40bbd9d7463c9516.webp", "./assets/img_006_5c597c40ef62f61c.webp", "./assets/img_007_96606aaa6acf7322.webp", "./assets/img_008_d6dbbc85d656bb05.png", "./assets/img_009_1aff3ce4f8d14e4e.webp", "./assets/img_010_3574424dec7844a4.webp", "./assets/img_011_d75568a56b2d5768.webp", "./assets/img_012_7b160837e2b43e1e.webp", "./assets/img_013_93e823f7c34d5229.png", "./assets/img_014_7dfa0df0e4d3c820.webp", "./assets/img_015_edcef39078b92fc6.webp", "./assets/img_016_aa00932065568b1c.webp", "./assets/img_017_5f371785bc99a1a1.webp", "./assets/img_018_5cc0b541e7968f74.webp", "./assets/img_019_db0faeaaa3442e83.webp", "./assets/img_020_2a3d8349f9c7bc39.webp", "./assets/img_021_4c45214a90fe85c3.webp", "./assets/img_022_7d5090c41b209d83.webp", "./assets/img_023_08ed537b679811d7.png", "./assets/img_024_11f95b273a761a77.webp", "./assets/img_025_21e245df4b361f50.webp"];
self.addEventListener('install',event=>{event.waitUntil(caches.open(CACHE).then(c=>c.addAll(PRECACHE)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',event=>{event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',event=>{
  if(event.request.method!=='GET') return;
  event.respondWith(caches.match(event.request).then(hit=>hit||fetch(event.request).then(resp=>{
    const copy=resp.clone(); caches.open(CACHE).then(c=>c.put(event.request,copy)); return resp;
  }).catch(()=>caches.match('./index.html'))));
});
