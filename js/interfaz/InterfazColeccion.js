import { cartas } from '../datos/cartas.js';
import { crearElementoCarta } from './RenderizadorCartas.js';

const MAX_SELECCION = 5;
let seleccionadas = [];

function actualizarContador() {
  document.getElementById('contador-seleccion').textContent =
    `${seleccionadas.length} / ${MAX_SELECCION} cartas seleccionadas`;
  document.getElementById('btn-confirmar-equipo').disabled = seleccionadas.length === 0;
}

function alternarSeleccion(boton, idCarta) {
  const yaEstaba = seleccionadas.includes(idCarta);

  if (yaEstaba) {
    seleccionadas = seleccionadas.filter(id => id !== idCarta);
    boton.classList.remove('seleccionada');
    boton.setAttribute('aria-pressed', 'false');
  } else {
    if (seleccionadas.length >= MAX_SELECCION) return;
    seleccionadas.push(idCarta);
    boton.classList.add('seleccionada');
    boton.setAttribute('aria-pressed', 'true');
  }

  actualizarContador();
}

function renderizarGrilla() {
  const grilla = document.getElementById('grilla-cartas');
  grilla.innerHTML = '';

  cartas.forEach(carta => {
    const boton = crearElementoCarta(carta);
    boton.addEventListener('click', () => alternarSeleccion(boton, carta.id));
    grilla.appendChild(boton);
  });
}

export const interfazColeccion = {
  inicializar() {
    renderizarGrilla();
    actualizarContador();
    document.getElementById('btn-confirmar-equipo').addEventListener('click', () => {
      console.log('Equipo seleccionado (temporal):', seleccionadas);
    });
  },
  obtenerSeleccion() {
    return seleccionadas;
  }
};