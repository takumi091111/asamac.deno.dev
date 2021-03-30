addEventListener('fetch', (event) => {
  const response = new Response('🍔', {
    headers: { 'content-type': 'text/plain' },
  });
  event.respondWith(response);
});

