// js/principal.js

import { gestorPantallas } from './interfaz/GestorPantallas.js';
import { interfazBienvenida } from './interfaz/InterfazBienvenida.js';
import { cartas } from './datos/cartas.js';

gestorPantallas.inicializar();
interfazBienvenida.inicializar();

// --- Prueba temporal: catálogo de cartas (Fase 6) ---
console.log('Cartas cargadas:', cartas.length);
console.log('Magos:', cartas.filter(carta => carta.tipo === 'mago').length);