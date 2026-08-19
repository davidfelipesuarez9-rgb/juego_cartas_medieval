import { busEventos } from '../nucleo/BusEventos.js';

class GestorPantallas {
  constructor() {
    this.pantallas = document.querySelectorAll('[data-pantalla]');
  }

  mostrar(nombrePantalla) {
    const existeDestino = Array.from(this.pantallas).some(
      (pantalla) => pantalla.dataset.pantalla === nombrePantalla
    );

    if (!existeDestino) {
      console.warn(`GestorPantallas: no existe una pantalla con data-pantalla="${nombrePantalla}"`);
      return;
    }

    this.pantallas.forEach((pantalla) => {
      pantalla.hidden = pantalla.dataset.pantalla !== nombrePantalla;
    });

    busEventos.emitir('pantalla:cambio', { pantalla: nombrePantalla });
  }

  inicializar() {
    document.addEventListener('click', (evento) => {
      const disparador = evento.target.closest('[data-navegar]');
      if (!disparador) return;
      this.mostrar(disparador.dataset.navegar);
    });
  }
}

export const gestorPantallas = new GestorPantallas();