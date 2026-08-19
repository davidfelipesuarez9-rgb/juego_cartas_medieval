import { Carta } from '../modelos/Carta.js';
import { cartas } from '../datos/cartas.js';
import { elegirAleatorios } from '../utilidades/aleatorio.js';
import { obtenerHabilidadPorId } from '../datos/habilidades.js';
import { usarHabilidad } from './MotorHabilidades.js';
import { calcularDano } from './SistemaDano.js';
import { decidirAccion } from './IA.js';

function esperar(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function crearCarta(datos) {
  return new Carta({ ...datos, vida: datos.vidaMaxima, simbolo: datos.emoji });
}

export class GestorBatalla {
  constructor(datosEquipoJugador) {
    this.equipoJugador = datosEquipoJugador.map(crearCarta);
    this.equipoMaquina = elegirAleatorios(cartas, 5).map(crearCarta);
    this.indiceActivoJugador = 0;
    this.indiceActivoMaquina = 0;
    this.registro = [];
    this.terminada = false;
  }

  get cartaJugador() { return this.equipoJugador[this.indiceActivoJugador]; }
  get cartaMaquina() { return this.equipoMaquina[this.indiceActivoMaquina]; }

  registrar(texto) { this.registro.push(texto); }

  aplicarVeneno(carta) {
    if (carta.veneno && carta.veneno.turnos > 0) {
      carta.recibirDano(carta.veneno.valor);
      carta.veneno.turnos--;
      this.registrar(`${carta.nombre} sufre ${carta.veneno.valor} de veneno.`);
    }
  }

  resolverAccion(atacante, objetivo, accion) {
    if (accion.tipo === 'atacar') {
      let dano = calcularDano(atacante, objetivo);
      if (objetivo.escudo > 0) {
        dano = Math.max(0, dano - objetivo.escudo);
        objetivo.escudo = 0;
      }
      objetivo.recibirDano(dano);
      this.registrar(`${atacante.nombre} ataca a ${objetivo.nombre} por ${dano}.`);
    } else if (accion.tipo === 'habilidad') {
      const habilidad = obtenerHabilidadPorId(accion.idHabilidad);
      usarHabilidad(habilidad, atacante, objetivo);
      this.registrar(`${atacante.nombre} usa ${habilidad.nombre}.`);
    } else {
      atacante.escudo = (atacante.escudo || 0) + Math.round(atacante.defensa * 0.5);
      this.registrar(`${atacante.nombre} se defiende.`);
    }
  }

  equipoDerrotado(equipo) { return equipo.every(c => c.estaDerrotada); }

  async turnoJugador(accion) {
    this.resolverAccion(this.cartaJugador, this.cartaMaquina, accion);

    if (this.cartaMaquina.estaDerrotada) {
      this.registrar(`${this.cartaMaquina.nombre} derrotada.`);
      if (this.equipoDerrotado(this.equipoMaquina)) {
        this.terminada = true;
        return { fin: true, resultado: 'victoria' };
      }
      this.indiceActivoMaquina = this.equipoMaquina.findIndex(c => !c.estaDerrotada);
    }

    await esperar(500);
    return this.turnoMaquina();
  }

  turnoMaquina() {
    const accion = decidirAccion(this.cartaMaquina);
    this.resolverAccion(this.cartaMaquina, this.cartaJugador, accion);
    this.aplicarVeneno(this.cartaJugador);

    if (this.cartaJugador.estaDerrotada) {
      this.registrar(`${this.cartaJugador.nombre} derrotada.`);
      if (this.equipoDerrotado(this.equipoJugador)) {
        this.terminada = true;
        return { fin: true, resultado: 'derrota' };
      }
      return { fin: false, necesitaCambioJugador: true };
    }

    this.aplicarVeneno(this.cartaMaquina);
    return { fin: false };
  }

  cambiarCartaJugador(indice) { this.indiceActivoJugador = indice; }
}