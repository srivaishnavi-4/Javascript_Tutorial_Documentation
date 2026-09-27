const CACHE_NAME = "task-manager-v1";

const FILES_TO_CACHE = [
    "./",
    "./index.html",
    "./style.css",
    "./app.js",
    "./manifest.json"
];


// ========================================
// INSTALL
// ========================================

self.addEventListener("install", event => {

    console.log("Service Worker installing...");

    event.waitUntil(

        caches.open(CACHE_NAME)
            .then(cache => {

                console.log(
                    "Caching application files..."
                );

                return cache.addAll(FILES_TO_CACHE);

            })

    );

});


// ========================================
// ACTIVATE
// ========================================

self.addEventListener("activate", event => {

    console.log("Service Worker activated");

    event.waitUntil(

        caches.keys()
            .then(cacheNames => {

                return Promise.all(

                    cacheNames
                        .filter(
                            cacheName =>
                                cacheName !== CACHE_NAME
                        )
                        .map(
                            cacheName =>
                                caches.delete(cacheName)
                        )

                );

            })

    );

});


// ========================================
// FETCH
// ========================================

self.addEventListener("fetch", event => {

    event.respondWith(

        caches.match(event.request)
            .then(cachedResponse => {

                if (cachedResponse) {

                    return cachedResponse;

                }

                return fetch(event.request);

            })

    );

});