import { avatares } from '../datos/avatares.js';
import { validarNombreJugador } from '../utilidades/validadores.js';
import { servicioAlmacenamiento } from '../servicios/ServicioAlmacenamiento.js';
import { Jugador } from '../modelos/Jugador.js';
import { estadoJuego } from '../nucleo/EstadoJuego.js';
import { gestorPantallas } from './GestorPantallas.js';

class InterfazBienvenida {
  constructor() {
    this.formulario = document.getElementById('formulario-bienvenida');
    this.entradaNombre = document.getElementById('entrada-nombre');
    this.contenedorAvatares = document.getElementById('selector-avatares');
    this.errorNombre = document.getElementById('error-nombre');
    this.errorAvatar = document.getElementById('error-avatar');
    this.avatarSeleccionado = null;
  }

  inicializar() {
    this.renderizarAvatares();
    this.formulario.addEventListener('submit', (evento) => this.manejarEnvio(evento));
  }

  renderizarAvatares() {
    avatares.forEach((avatar) => {
      const boton = document.createElement('button');
      boton.type = 'button';
      boton.className = 'opcion-avatar';
      boton.dataset.avatarId = avatar.id;
      boton.setAttribute('aria-pressed', 'false');
      boton.setAttribute('aria-label', avatar.nombre);
      boton.textContent = avatar.simbolo;

      boton.addEventListener('click', () => this.seleccionarAvatar(avatar.id));

      this.contenedorAvatares.appendChild(boton);
    });
  }

  seleccionarAvatar(idAvatar) {
    this.avatarSeleccionado = idAvatar;

    const botones = this.contenedorAvatares.querySelectorAll('.opcion-avatar');
    botones.forEach((boton) => {
      const estaSeleccionado = boton.dataset.avatarId === idAvatar;
      boton.classList.toggle('seleccionado', estaSeleccionado);
      boton.setAttribute('aria-pressed', String(estaSeleccionado));
    });

    this.ocultarError(this.errorAvatar);
  }

  manejarEnvio(evento) {
    evento.preventDefault();

    const nombreIngresado = this.entradaNombre.value;
    const mensajeErrorNombre = validarNombreJugador(nombreIngresado);

    let formularioValido = true;

    if (mensajeErrorNombre) {
      this.mostrarError(this.errorNombre, mensajeErrorNombre);
      formularioValido = false;
    } else {
      this.ocultarError(this.errorNombre);
    }

    if (!this.avatarSeleccionado) {
      this.mostrarError(this.errorAvatar, 'Elige un avatar para continuar.');
      formularioValido = false;
    }

    if (!formularioValido) return;

    this.confirmarPerfil(nombreIngresado.trim());
  }

  confirmarPerfil(nombreUsuario) {
    let jugador = servicioAlmacenamiento.buscarPerfilPorNombre(nombreUsuario);

    if (!jugador) {
      jugador = new Jugador({ nombreUsuario, avatar: this.avatarSeleccionado });
      servicioAlmacenamiento.guardarPerfil(jugador);
    }

    estadoJuego.establecer('jugador', jugador);
    gestorPantallas.mostrar('menu');
  }

  mostrarError(elemento, mensaje) {
    elemento.textContent = mensaje;
    elemento.hidden = false;
  }

  ocultarError(elemento) {
    elemento.hidden = true;
  }
}

export const interfazBienvenida = new InterfazBienvenida();