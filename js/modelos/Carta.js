// Carta: representa una carta del juego, tanto sus datos base
// como su estado actual durante una batalla (vida restante, etc.)
export class Carta {
  constructor({ id, nombre, simbolo, vida, defensa, dano, tipo, rareza, habilidades, descripcion }) {
    this.id = id;
    this.nombre = nombre;
    this.simbolo = simbolo;
    this.vidaMaxima = vida;
    this.vidaActual = vida;
    this.defensa = defensa;
    this.dano = dano;
    this.tipo = tipo;
    this.rareza = rareza;
    this.habilidades = habilidades;
    this.descripcion = descripcion;
  }

  get estaDerrotada() {
    return this.vidaActual <= 0;
  }

  get porcentajeVida() {
    return Math.max(0, Math.round((this.vidaActual / this.vidaMaxima) * 100));
  }

  recibirDano(cantidad) {
    this.vidaActual = Math.max(0, this.vidaActual - cantidad);
  }

  recibirCuracion(cantidad) {
    this.vidaActual = Math.min(this.vidaMaxima, this.vidaActual + cantidad);
  }
}