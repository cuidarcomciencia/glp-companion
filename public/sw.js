// Service Worker para notificações em background
self.addEventListener('install', (event) => {
  console.log('Service Worker instalado');
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  console.log('Service Worker ativado');
  event.waitUntil(clients.claim());
});

self.addEventListener('push', (event) => {
  const data = event.data?.json() ?? {};
  const title = data.title || 'Lembrete de Medicamento';
  const options = {
    body: data.body || 'Está na hora de tomar seu medicamento',
    icon: '/icon.svg',
    badge: '/icon.svg',
    tag: 'medication-reminder',
    requireInteraction: true,
    data: data,
  };

  event.waitUntil(
    self.registration.showNotification(title, options)
  );
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(
    clients.openWindow('/')
  );
});
