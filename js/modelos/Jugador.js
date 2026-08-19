// Jugador: representa un perfil guardado en este dispositivo.
// A diferencia de BusEventos/EstadoJuego/GestorPantallas, esto NO es un singleton:
// se va a crear una instancia distinta por cada perfil.
export class Jugador {
  constructor({ nombreUsuario, avatar }) {
    this.nombreUsuario = nombreUsuario;
    this.avatar = avatar;
    this.victorias = 0;
    this.derrotas = 0;
    this.batallasJugadas = 0;
    this.puntuacion = 0;
  }

  get porcentajeVictorias() {
    if (this.batallasJugadas === 0) return 0;
    return Math.round((this.victorias / this.batallasJugadas) * 100);
  }

  registrarVictoria(puntosGanados) {
    this.victorias += 1;
    this.batallasJugadas += 1;
    this.puntuacion += puntosGanados;
  }

  registrarDerrota(puntosGanados) {
    this.derrotas += 1;
    this.batallasJugadas += 1;
    this.puntuacion += puntosGanados;
  }

  static desdeDatos(datos) {
    const jugador = new Jugador({ nombreUsuario: datos.nombreUsuario, avatar: datos.avatar });
    jugador.victorias = datos.victorias;
    jugador.derrotas = datos.derrotas;
    jugador.batallasJugadas = datos.batallasJugadas;
    jugador.puntuacion = datos.puntuacion;
    return jugador;
  }
}