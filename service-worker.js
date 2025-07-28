const CACHE_NAME = 'css-learning-v1'; // Ubah nama cache
const urlsToCache = [
  '/',
  'index.html',
  // Tambahkan semua file HTML dari folder 'Learning css'
  '1. pembagian css/CSS eksternal.html',
  '1. pembagian css/CSS Inline.html',
  '1. pembagian css/CSS Internal.html',
  '2. CSS selector/index.html',
  '3. CSS cascade/index.html',
  '4. CSS Inheritance/index.html',
  '5. CSS color/warna/index.html',
  '6. CSS color Alpha/index.html',
  '7. CSS Text/index.html',
  '8. box/index.html',
  '9. box model/index.html',
  '10. border/index.html',
  '11. padding/index.html',
  '12. margin/index.html',
  '13. display elemen/index.html',
  '14. list style/index.html',
  '15. Table style/index.html',
  '16. Form style/index.html',
  '17. image style/index.html',
  '18. absolute-position/index.html',
  '19. relative-position/index.html',
  '20. fixed-position/index.html',
  '21. Sticky-position/index.html',
  '22. Z-index/index.html',
  '23. Float/index.html',
  '24. fixed-width/index.html',
  '25. Liquid Layout/index.html',
  '26. Grid Layout/index.html',
  '27. Viewport/index.html',
  '28. Responsive layout/index.html',
  '0. Latihan CSS/Latihan 1/index.html',
  '0. Latihan CSS/Latihan 2/index.html',
  '0. Latihan CSS/Latihan 3/index.html',
  '0. Latihan CSS/Latihan 4/index.html',
  '0. Latihan CSS/Latihan 4/artikel-1.html',
  '0. Latihan CSS/Latihan 4/artikel-2.html',
  '0. Latihan CSS/Latihan 5/index.html',
  '0. Latihan CSS/Latihan 5/buku.html',
  '0. Latihan CSS/Latihan 5/kontak.html',
  '0. Latihan CSS/Latihan 6/index.html',
  '0. Latihan CSS/Latihan 7/index.html',

  // Tambahkan semua file CSS, JS, dan gambar yang digunakan
  'style.css',
  'script.js',
  'manifest.json',
  'img/quality_restoration_20250330050655089.jpg', // Gambar utama
  'img/icons/icon-192x192.png',
  'img/icons/icon-512x512.png',
  'img/icons/favicon.ico',
  'img/icons/apple-touch-icon.png',
  'img/icons/favicon-32x32.png',
  'img/icons/favicon-16x16.png',
  'https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&family=Poppins:wght@300;400;500;600;700&display=swap',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css',
  'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.7/MathJax.js?config=TeX-MML-AM_CHTML',

  // Tambahkan gambar-gambar dari folder 'Learning css'
  '16. Form style/instagram.png',
  '16. Form style/telegram.png',
  '16. Form style/whatsapp.png',
  '17. image style/instagram.png',
  '17. image style/telegram.png',
  '17. image style/whatsapp.png',
  '24. fixed-width/whatsapp.png',
  '25. Liquid Layout/whatsapp.png',
  '27. Viewport/whatsapp.png',
  '0. Latihan CSS/Latihan 5/img/at-taisir.jpg',
  '0. Latihan CSS/Latihan 5/img/bumi-manusia.jpg',
  '0. Latihan CSS/Latihan 5/img/Lambang_Kabupaten_Lumajang.png',
  '0. Latihan CSS/Latihan 5/img/rectoverso.jpg',
  '0. Latihan CSS/Latihan 7/map.png'
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
    caches.match(event.request).then(response => {
      return response || fetch(event.request).catch(() => {
        // Bisa kembalikan page offline, gambar dummy, atau lain
      });
    })
  );
});

self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
