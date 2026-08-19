// js/principal.js

import { gestorPantallas } from './interfaz/GestorPantallas.js';
import { interfazBienvenida } from './interfaz/InterfazBienvenida.js';
import { cartas } from './datos/cartas.js';

gestorPantallas.inicializar();
interfazBienvenida.inicializar();

// --- Prueba temporal: catálogo de cartas (Fase 6) ---
console.log('Total de cartas:', cartas.length);

const porTipo = {};
const porRareza = {};

cartas.forEach(carta => {
  porTipo[carta.tipo] = (porTipo[carta.tipo] || 0) + 1;
  porRareza[carta.rareza] = (porRareza[carta.rareza] || 0) + 1;
});

console.log('Por tipo:', porTipo);
console.log('Por rareza:', porRareza);