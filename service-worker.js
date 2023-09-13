//Update cache names any time any of the cached files change.
const CACHE_NAME = 'static-cache-v2';
//Add list of files to cache here.
const FILES_TO_CACHE = [
    'index.html',
    'activites.html',
    'confirmation.html',
    'devenir-partenaires.html',
    'js/script.js',
    'js/validation.js', 
    'images/ballerine.jpg',
    'images/bricolage-2.jpg',
    'images/bricolage.jpg',
    'images/danse.jpg',
    'images/EnfantPhoto-bg.jpg',
    'images/entreprise-divider-after.png',
    'images/entreprise-divider.png',
    'images/escalade.jpg',
    'images/guitare.jpg',
    'images/header-explorer.png',
    'images/Explore.png',
    'images/musique.jpg',
    'images/parent-1.jpg',
    'images/parent-2.jpg',
    'images/parent-3.jpg',
    'images/peinture.jpg',
    'images/piano.jpg',
    'images/piscine.jpg',
    'images/scoutt.jpg',
    'images/icons/android-chrome-192x192.png',
    'images/icons/apple-touch-icon.png',
    'favicon-16x16.png', 
    'favicon-32x32.png', 
    'favicon.ico', 
    'tailwind.config.js', 

];
self.addEventListener('install', (evt) => {
console.log('[ServiceWorker] Install');
// Precache static resources here.
// Precache static resources here.
evt.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
    console.log('[ServiceWorker] Pre-caching offline page');
    return cache.addAll(FILES_TO_CACHE);
    })
    );
    self.skipWaiting();
});
self.addEventListener('activate', (evt) => {
console.log('[ServiceWorker] Activate');
//Remove previous cached data from disk.
self.clients.claim();
});
self.addEventListener('fetch', (evt) => {
console.log('[ServiceWorker] Fetch', evt.request.url);
//Add fetch event handler here.
});




    self.addEventListener('activate', (evt) => {
        console.log('[ServiceWorker] Activate');
        //Remove previous cached data from disk.
        evt.waitUntil(
        caches.keys().then((keyList) => {
        return Promise.all(keyList.map((key) => {
        if (key !== CACHE_NAME) {
        console.log('[ServiceWorker] Removing old cache',
        key);
        return caches.delete(key);
        }
        }));
        })
        );
        self.clients.claim();

    self.addEventListener('fetch', (evt) => {
console.log('[ServiceWorker] Fetch', evt.request.url);
//Add fetch event handler here.
if (evt.request.mode !== 'navigate') {
// Not a page navigation, bail.
return;
}
evt.respondWith(
fetch(evt.request)
.catch(() => {
return caches.open(CACHE_NAME)
.then((cache) => {
return cache.match('/Cochenille/PointNClick/offline.html' );
});
})
);
});
        });

    self.addEventListener('fetch', (evt) => {
console.log('[ServiceWorker] Fetch', evt.request.url);
//Add fetch event handler here.
if (evt.request.mode !== 'navigate') {
// Not a page navigation, bail.
return;
}
evt.respondWith(
fetch(evt.request)
.catch(() => {
return caches.open(CACHE_NAME)
.then((cache) => {
return cache.match('/Cochenille/PointNClick/offline.html' );
});
})
);
});
