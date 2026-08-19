// BusEventos: permite que distintas partes del juego se comuniquen
// sin conocerse directamente entre sí (patrón Observer / pub-sub).
class BusEventos {
  constructor() {
    this.suscriptores = {};
  }

  suscribir(nombreEvento, funcion) {
    if (!this.suscriptores[nombreEvento]) {
      this.suscriptores[nombreEvento] = [];
    }
    this.suscriptores[nombreEvento].push(funcion);
  }

  cancelarSuscripcion(nombreEvento, funcion) {
    if (!this.suscriptores[nombreEvento]) return;
    this.suscriptores[nombreEvento] = this.suscriptores[nombreEvento].filter(
      (suscriptor) => suscriptor !== funcion
    );
  }

  emitir(nombreEvento, datos) {
    if (!this.suscriptores[nombreEvento]) return;
    this.suscriptores[nombreEvento].forEach((funcion) => funcion(datos));
  }
}

export const busEventos = new BusEventos();