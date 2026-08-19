import { eventBus } from './core/EventBus.js';

// Nos suscribimos a un evento de prueba.
eventBus.on('test:ping', (data) => {
  console.log('Evento recibido:', data);
});

// Emitimos ese evento con algo de información.
eventBus.emit('test:ping', { message: 'Hola desde el EventBus' });