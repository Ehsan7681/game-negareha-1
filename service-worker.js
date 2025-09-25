const CACHE_NAME = 'negareh-app-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/css/styles.css',
  '/js/app.js',
  '/manifest.json',
  // تصاویر و صوت‌ها را می‌توانید اینجا لیست کنید یا در زیر با الگوی خاصی اضافه کنید
  '/images/main_negareh/Screenshot 2025-09-25 092107.jpg',
  '/images/negare1/amin.png',
  '/audio/negare1/amin.mp3',
  // ... بقیه فایل‌ها
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});