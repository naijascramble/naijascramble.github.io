/* Naija Scramble service worker — offline shell + fresh content when online */
var CACHE = 'naija-scramble-v5';
var SHELL = [
  '/', '/index.html',
  '/play', '/play.html',
  '/suggest', '/suggest.html',
  '/leaderboard', '/leaderboard.html',
  '/claim', '/claim.html',
  '/privacy', '/privacy.html',
  '/style.css', '/words.js',
  '/og.png', '/icon-192.png', '/icon-512.png', '/manifest.json'
];

self.addEventListener('install', function(e){
  e.waitUntil(
    caches.open(CACHE)
      .then(function(c){ return Promise.all(SHELL.map(function(u){ return c.add(u).catch(function(){}); })); })
      .then(function(){ return self.skipWaiting(); })
  );
});

self.addEventListener('activate', function(e){
  e.waitUntil(
    caches.keys()
      .then(function(keys){ return Promise.all(keys.filter(function(k){ return k !== CACHE; }).map(function(k){ return caches.delete(k); })); })
      .then(function(){ return self.clients.claim(); })
  );
});

self.addEventListener('fetch', function(e){
  var req = e.request;
  if(req.method !== 'GET') return;
  var url = new URL(req.url);
  if(url.origin !== self.location.origin) return;   // let Google Sheets / fonts pass straight through

  // Pages: network-first so updates show whenever online; cache is the offline fallback.
  if(req.mode === 'navigate'){
    e.respondWith(
      fetch(req)
        .then(function(res){
          var copy = res.clone();
          caches.open(CACHE).then(function(c){ c.put(req, copy); });
          return res;
        })
        .catch(function(){ return caches.match(req).then(function(r){ return r || caches.match('/'); }); })
    );
    return;
  }

  // Same-origin assets: serve cache fast, refresh in the background.
  e.respondWith(
    caches.match(req).then(function(cached){
      var net = fetch(req).then(function(res){
        if(res && res.status === 200){
          var copy = res.clone();
          caches.open(CACHE).then(function(c){ c.put(req, copy); });
        }
        return res;
      }).catch(function(){ return cached; });
      return cached || net;
    })
  );
});
