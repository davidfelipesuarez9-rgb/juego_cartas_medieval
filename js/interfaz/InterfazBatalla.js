import { estadoJuego } from '../nucleo/EstadoJuego.js';
import { GestorBatalla } from '../juego/GestorBatalla.js';
import { obtenerHabilidadPorId } from '../datos/habilidades.js';
import { calcularPuntuacion } from '../juego/SistemaPuntuacion.js';
import { servicioAlmacenamiento } from '../servicios/ServicioAlmacenamiento.js';
import { servicioHistorialBatallas } from '../servicios/ServicioHistorialBatallas.js';

const ICONOS_CATEGORIA = {
  ataque: '⚔️', buff: '💪', curacion: '💚', debuff: '☠️',
  danoContinuo: '☣️', proteccion: '🛡️', probabilidad: '🎲'
};

let gestorBatalla = null;
let procesando = false;

function iniciarBatalla() {
  const equipo = estadoJuego.obtener('equipoJugador');
  gestorBatalla = new GestorBatalla(equipo);
  procesando = false;
  document.getElementById('resultado-batalla').hidden = true;
  document.getElementById('seleccion-cambio').hidden = true;
  document.getElementById('registro-batalla').innerHTML = '';
  actualizarVista();
}

function actualizarBarra(idBarra, idTexto, carta) {
  const porcentaje = carta.porcentajeVida;
  const relleno = document.getElementById(idBarra);
  relleno.style.width = `${porcentaje}%`;
  relleno.style.backgroundColor = porcentaje > 50 ? '#4caf50' : porcentaje > 20 ? '#e0a800' : '#c0392b';
  document.getElementById(idTexto).textContent = `${carta.vidaActual} / ${carta.vidaMaxima}`;
}

function renderizarHabilidades(carta) {
  const contenedor = document.getElementById('botones-habilidades');
  contenedor.innerHTML = '';
  (carta.habilidades || []).forEach(idHabilidad => {
    const habilidad = obtenerHabilidadPorId(idHabilidad);
    const boton = document.createElement('button');
    boton.type = 'button';
    const icono = ICONOS_CATEGORIA[habilidad.categoria] || '✨';
    boton.textContent = `${icono} ${habilidad.nombre}`;
    boton.addEventListener('click', () => ejecutarTurno({ tipo: 'habilidad', idHabilidad }));
    contenedor.appendChild(boton);
  });
}

function actualizarVista() {
  document.getElementById('nombre-jugador').textContent = gestorBatalla.cartaJugador.nombre;
  document.getElementById('nombre-maquina').textContent = gestorBatalla.cartaMaquina.nombre;
  document.getElementById('emoji-jugador').textContent = gestorBatalla.cartaJugador.simbolo;
  document.getElementById('emoji-maquina').textContent = gestorBatalla.cartaMaquina.simbolo;
  actualizarBarra('vida-jugador', 'texto-vida-jugador', gestorBatalla.cartaJugador);
  actualizarBarra('vida-maquina', 'texto-vida-maquina', gestorBatalla.cartaMaquina);
  renderizarHabilidades(gestorBatalla.cartaJugador);

  const registro = document.getElementById('registro-batalla');
  registro.innerHTML = gestorBatalla.registro.map(linea => `<p>${linea}</p>`).join('');
  registro.scrollTop = registro.scrollHeight;
}

function mostrarEfecto(idContenedor, delta) {
  if (delta === 0) return;
  const contenedor = document.getElementById(idContenedor);
  if (!contenedor) return;

  const numero = document.createElement('span');
  numero.className = delta < 0 ? 'numero-flotante dano' : 'numero-flotante curacion';
  numero.textContent = delta < 0 ? delta : `+${delta}`;
  contenedor.appendChild(numero);
  numero.addEventListener('animationend', () => numero.remove());

  contenedor.classList.remove('sacudida');
  void contenedor.offsetWidth;
  contenedor.classList.add('sacudida');
}

function mostrarSeleccionCambio() {
  const contenedor = document.getElementById('opciones-cambio');
  contenedor.innerHTML = '';
  gestorBatalla.equipoJugador.forEach((carta, indice) => {
    if (carta.estaDerrotada) return;
    const boton = document.createElement('button');
    boton.type = 'button';
    boton.textContent = carta.nombre;
    boton.addEventListener('click', () => {
      gestorBatalla.cambiarCartaJugador(indice);
      document.getElementById('seleccion-cambio').hidden = true;
      actualizarVista();
      procesando = false;
    });
    contenedor.appendChild(boton);
  });
  document.getElementById('seleccion-cambio').hidden = false;
}

function finalizarBatalla(resultado) {
  const cartasEnemigasDerrotadas = gestorBatalla.equipoMaquina.filter(c => c.estaDerrotada).length;
  const gano = resultado === 'victoria';
  const puntos = calcularPuntuacion(gano, cartasEnemigasDerrotadas);

  const jugador = estadoJuego.obtener('jugador');
  if (jugador) {
    if (gano) jugador.registrarVictoria(puntos);
    else jugador.registrarDerrota(puntos);
    servicioAlmacenamiento.guardarPerfil(jugador);
  }

  servicioHistorialBatallas.guardarBatalla({
    fecha: new Date().toISOString(),
    resultado,
    puntos,
    cartasEnemigasDerrotadas,
    jugador: jugador ? jugador.nombre : 'Desconocido'
  });

  document.getElementById('texto-resultado').textContent =
    gano ? `¡Victoria! Ganaste ${puntos} puntos.` : `Derrota... Ganaste ${puntos} puntos igual.`;
  document.getElementById('resultado-batalla').hidden = false;
}

async function ejecutarTurno(accion) {
  if (procesando || !gestorBatalla || gestorBatalla.terminada) return;
  procesando = true;

  const cartaJugadorAntes = gestorBatalla.cartaJugador;
  const cartaMaquinaAntes = gestorBatalla.cartaMaquina;
  const vidaJugadorAntes = cartaJugadorAntes.vidaActual;
  const vidaMaquinaAntes = cartaMaquinaAntes.vidaActual;

  const resultado = await gestorBatalla.turnoJugador(accion);

  mostrarEfecto('carta-maquina', cartaMaquinaAntes.vidaActual - vidaMaquinaAntes);
  mostrarEfecto('carta-jugador', cartaJugadorAntes.vidaActual - vidaJugadorAntes);
  actualizarVista();

  if (resultado.fin) return finalizarBatalla(resultado.resultado);
  if (resultado.necesitaCambioJugador) return mostrarSeleccionCambio();

  procesando = false;
}

export const interfazBatalla = {
  inicializar() {
    document.getElementById('btn-atacar').addEventListener('click', () => ejecutarTurno({ tipo: 'atacar' }));
    document.getElementById('btn-defender').addEventListener('click', () => ejecutarTurno({ tipo: 'defender' }));

    document.addEventListener('click', (evento) => {
      const boton = evento.target.closest('[data-navegar="batalla"]');
      if (boton) iniciarBatalla();
    });
  }
};