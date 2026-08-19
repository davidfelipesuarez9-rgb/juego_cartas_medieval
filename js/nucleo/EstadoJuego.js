import { busEventos } from './BusEventos.js';

class EstadoJuego {
  constructor() {
    this.estado = {
      jugador: null,
      maquina: null,
      turnoActual: null,
      numeroTurno: 0,
      batallaActiva: false,
    };
  }

  obtener(clave) {
    return this.estado[clave];
  }

  establecer(clave, valor) {
    this.estado[clave] = valor;
    busEventos.emitir('estado:cambio', { clave, valor });
  }

  reiniciar() {
    this.estado = {
      jugador: null,
      maquina: null,
      turnoActual: null,
      numeroTurno: 0,
      batallaActiva: false,
    };
    busEventos.emitir('estado:reinicio');
  }
}

export const estadoJuego = new EstadoJuego();