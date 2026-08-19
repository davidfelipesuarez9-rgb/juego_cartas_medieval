import { estadoJuego } from '../nucleo/EstadoJuego.js';

function mostrarPerfil() {
  const jugador = estadoJuego.obtener('jugador');
  const contenedor = document.getElementById('datos-perfil');
  if (!jugador || !contenedor) return;
  contenedor.innerHTML = `
    <p><strong>Nombre:</strong> ${jugador.nombre}</p>
    <p><strong>Victorias:</strong> ${jugador.victorias}</p>
    <p><strong>Derrotas:</strong> ${jugador.derrotas}</p>
    <p><strong>Batallas jugadas:</strong> ${jugador.batallasJugadas}</p>
    <p><strong>% de victorias:</strong> ${jugador.porcentajeVictorias}%</p>
    <p><strong>Puntuación:</strong> ${jugador.puntuacion}</p>
  `;
}

export const interfazPerfil = {
  inicializar() {
    document.addEventListener('click', (evento) => {
      if (evento.target.closest('[data-navegar="perfil"]')) mostrarPerfil();
    });
  }
};