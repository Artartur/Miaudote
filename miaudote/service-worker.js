const cacheName = "miaudote";

self.addEventListener('install', event => {

  self.skipWaiting();

  event.waitUntil(
    caches.open(cacheName)
      .then(cache => cache.addAll([
          './index.html',
          './manifest.webmanifest', 
          './css/style.css',
           './imgs/120.png',
           './imgs/128.png',
           './imgs/144.png',
           './imgs/152.png',
           './imgs/167.png',
           './imgs/180.png',
           './imgs/192.png',
           './imgs/256.png',
           './imgs/512.png',
           './imgs/1024.png',
           './imgs/pet.png',
           './js/app.js',
           './miau/css/styles.css',
           './miau/js/scripts.js',
           './miau/assets/favicon.png',
           './miau/assets/img/borave.jpg',
           './miau/assets/img/dale.jpg',
           './miau/assets/img/map-image.png',
           './miau/assets/img/close-icon.svg',
           './miau/assets/img/navbar-logo.svg',
           './miau/assets/img/pet.png',
           './miau/assets/img/120.png',
           './miau/assets/img/128.png',
           './miau/assets/img/144.png',
           './miau/assets/img/152.png',
           './miau/assets/img/167.png',
           './miau/assets/img/180.png',
           './miau/assets/img/192.png',
           './miau/assets/img/256.png',
           './miau/assets/img/512.png',
           './miau/assets/img/1024.png',
           './miau/assets/img/about/1.jpg',
           './miau/assets/img/about/2.jpg',
           './miau/assets/img/about/3.jpg',
           './miau/assets/img/about/4.jpg',
           './miau/assets/img/portfolio/jon.jpeg',
           './miau/assets/img/portfolio/marley.jpg',
           './miau/assets/img/portfolio/pave.jpg',
           './miau/assets/img/servicos/4patas.jpg',
           './miau/assets/img/servicos/amitypet.jpg',
           './miau/assets/img/servicos/caoqri.jpg'
          ]))
          );
        });

self.addEventListener('message', function (event) {
  if (event.data.action === 'skipWaiting') {
    self.skipWaiting();
  }
});
        
self.addEventListener('fetch', function (event) {
  //Atualizacao internet
  event.respondWith(async function () {
     try {
       return await fetch(event.request);
     } catch (err) {
       return caches.match(event.request);
     }
}());  
});   
