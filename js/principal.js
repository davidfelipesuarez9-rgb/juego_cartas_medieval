// js/principal.js

import { gestorPantallas } from './interfaz/GestorPantallas.js';
import { interfazBienvenida } from './interfaz/InterfazBienvenida.js';
import { cartas } from './datos/cartas.js';

gestorPantallas.inicializar();
interfazBienvenida.inicializar();

// --- Prueba temporal: catálogo de cartas (Fase 6) ---
console.log('Cartas cargadas:', cartas.length);
console.log('Asesinos:', cartas.filter(carta => carta.tipo === 'asesino').length);
console.log('Legendarias hasta ahora:', cartas.filter(carta => carta.rareza === 'legendaria').length);