//Update cache names any time any of the cached files change.
const CACHE_NAME = 'static-cache-v9';

//Add list of files to cache here.
const FILES_TO_CACHE = [
    'offline.html',
    ];
    
    self.addEventListener('install', (evt) => {
    console.log('[ServiceWorker] Install');
    // Precache static resources here.
    evt.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
    console.log('[ServiceWorker] Pre-caching offline page');
    return cache.addAll(FILES_TO_CACHE);
    })
    );
    self.skipWaiting();
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