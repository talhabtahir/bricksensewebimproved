self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('brick-sense-cache').then(cache => {
      return cache.addAll([
        '/',
        '/bricksensewebimproved/',
        '/bricksensewebimproved/index.html',
        '/bricksensewebimproved/img/logo.png',
        '/bricksensewebimproved/img/app-1.png',
        '/bricksensewebimproved/img/app-2.png',
        '/bricksensewebimproved/img/feature.png'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
