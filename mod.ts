addEventListener('fetch', (event) => {
  const response = new Response('🍔', {
    headers: { 'content-type': 'text/plain; charset=UTF-8' },
  });
  event.respondWith(response);
});

