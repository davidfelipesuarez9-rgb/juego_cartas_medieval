const CLAVE_HISTORIAL = 'reinos-en-batalla:historial';

export const servicioHistorialBatallas = {
  obtenerHistorial() {
    try {
      const datos = localStorage.getItem(CLAVE_HISTORIAL);
      return datos ? JSON.parse(datos) : [];
    } catch (error) {
      console.warn('No se pudo leer el historial:', error);
      return [];
    }
  },
  guardarBatalla(entrada) {
    try {
      const historial = this.obtenerHistorial();
      historial.unshift(entrada);
      localStorage.setItem(CLAVE_HISTORIAL, JSON.stringify(historial.slice(0, 50)));
    } catch (error) {
      console.warn('No se pudo guardar la batalla:', error);
    }
  }
};