const CACHE = "gold-mu-v1";
const ASSETS = ["./index.html", "./manifest.json", "./icons/icon-192.png", "./icons/icon-512.png"];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
  );
  self.clients.claim();
});

self.addEventListener("fetch", (e) => {
  const url = e.request.url;
  // Never cache live API calls — always go to network for price data.
  if (url.includes("gold-api.com") || url.includes("er-api.com")) {
    e.respondWith(fetch(e.request).catch(() => new Response("{}", { headers: { "Content-Type": "application/json" } })));
    return;
  }
  e.respondWith(
    caches.match(e.request).then((cached) => cached || fetch(e.request))
  );
});
