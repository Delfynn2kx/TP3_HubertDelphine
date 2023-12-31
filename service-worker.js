//Update cache names any time any of the cached files change.
const CACHE_NAME = 'static-cache-v13';

//Add list of files to cache here.
const FILES_TO_CACHE = [
    'index.html',
    'offline.html',
    'activites.html',
    'confirmation.html',
    'devenir-partenaires.html',
    'js/script.js',
    'js/validation.js', 
    'js/install.js', 
    'images/ballerine.jpg',
    'images/bricolage-2.jpg',
    'images/bricolage.jpg',
    'images/danse.jpg',
    'images/EnfantPhoto-bg.jpg',
    'images/entreprise-divider-after.png',
    'images/entreprise-divider.png',
    'images/escalade.jpg',
    'images/guitare.jpg',
    'images/header-exploreV2.png',
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
    'images/icons/icon-144x144.png',
    'images/icons/icon-192x192.png',
    'images/icons/icon-512x512.png',    
    'favicon-16x16.png', 
    'favicon-32x32.png', 
    'favicon.ico', 
    'css/style.css',
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
        return cache.match('/TP3_HubertDelphine/offline.html' );
        });
        })
        );
        });