self.addEventListener('install', (e) => {
    console.log('[Service Worker] Installazione in corso...');
});
self.addEventListener('fetch', (e) => {
    // Lascia passare le richieste di rete normalmente
});
