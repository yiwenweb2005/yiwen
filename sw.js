const CACHE = 'xiuxian-v1';
const FILES = [
  '/',
  '/index.html',
  '/supply.js',
  '/icon-192.jpg',
  '/icon-512.jpg'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)));
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});
