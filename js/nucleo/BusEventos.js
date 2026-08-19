// EventBus: permite que distintas partes del juego se comuniquen
// sin conocerse directamente entre sí (patrón Observer / pub-sub).
class EventBus {
  constructor() {
    // listeners guarda, por cada nombre de evento, la lista de funciones
    // que quieren ser avisadas cuando ese evento ocurra.
    // Ejemplo de forma: { "card:damaged": [funcion1, funcion2] }
    this.listeners = {};
  }

  // Suscribirse a un evento: "cuando ocurra X, ejecuta esta función".
  on(eventName, callback) {
    if (!this.listeners[eventName]) {
      this.listeners[eventName] = [];
    }
    this.listeners[eventName].push(callback);
  }

  // Cancelar una suscripción (útil para no acumular funciones "zombis").
  off(eventName, callback) {
    if (!this.listeners[eventName]) return;
    this.listeners[eventName] = this.listeners[eventName].filter(
      (listener) => listener !== callback
    );
  }

  // Avisar a todos los suscritos de que un evento ocurrió, con datos opcionales.
  emit(eventName, data) {
    if (!this.listeners[eventName]) return;
    this.listeners[eventName].forEach((callback) => callback(data));
  }
}

// Exportamos UNA instancia ya creada (singleton), no la clase.
// Así, todo el proyecto comparte el mismo bus de eventos.
export const eventBus = new EventBus();