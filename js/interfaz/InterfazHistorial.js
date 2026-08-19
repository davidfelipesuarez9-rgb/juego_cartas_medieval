import { servicioHistorialBatallas } from '../servicios/ServicioHistorialBatallas.js';

function mostrarHistorial() {
  const historial = servicioHistorialBatallas.obtenerHistorial();
  const contenedor = document.getElementById('lista-historial');
  if (!contenedor) return;

  if (historial.length === 0) {
    contenedor.innerHTML = '<p>Todavía no has jugado ninguna batalla.</p>';
    return;
  }

  contenedor.innerHTML = historial.map(entrada => `
    <div class="entrada-historial">
      <p><strong>${entrada.resultado === 'victoria' ? 'Victoria' : 'Derrota'}</strong> — ${entrada.puntos} puntos — ${entrada.cartasEnemigasDerrotadas} cartas enemigas derrotadas</p>
      <p>${new Date(entrada.fecha).toLocaleString('es')}</p>
    </div>
  `).join('');
}

export const interfazHistorial = {
  inicializar() {
    document.addEventListener('click', (evento) => {
      if (evento.target.closest('[data-navegar="historial"]')) mostrarHistorial();
    });
  }
};