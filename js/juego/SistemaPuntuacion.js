const PUNTOS_VICTORIA = 10;
const PUNTOS_POR_CARTA = 2;

export function calcularPuntuacion(gano, cartasEnemigasDerrotadas) {
  return (gano ? PUNTOS_VICTORIA : 0) + cartasEnemigasDerrotadas * PUNTOS_POR_CARTA;
}