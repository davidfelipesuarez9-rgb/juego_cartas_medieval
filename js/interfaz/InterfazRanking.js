import { servicioAlmacenamiento } from '../servicios/ServicioAlmacenamiento.js';

function mostrarRanking() {
  const perfiles = servicioAlmacenamiento.obtenerPerfiles();
  const contenedor = document.getElementById('lista-ranking');
  if (!contenedor) return;

  const ordenados = [...perfiles].sort((a, b) => b.puntuacion - a.puntuacion);

  contenedor.innerHTML = ordenados.map((perfil, indice) => `
    <p>${indice + 1}. ${perfil.nombre} — ${perfil.puntuacion} puntos (${perfil.victorias}V / ${perfil.derrotas}D)</p>
  `).join('');
}

export const interfazRanking = {
  inicializar() {
    document.addEventListener('click', (evento) => {
      if (evento.target.closest('[data-navegar="ranking"]')) mostrarRanking();
    });
  }
};