/* Minimal service worker: it only exists so the browser offers "Install app".
   The OQC pages themselves always come from Google, so nothing is cached. */
self.addEventListener('install', function (e) { self.skipWaiting(); });
self.addEventListener('activate', function (e) { self.clients.claim(); });
self.addEventListener('fetch', function (e) { /* pass through */ });
