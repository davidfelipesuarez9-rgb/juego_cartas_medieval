// js/principal.js

import { gestorPantallas } from './interfaz/GestorPantallas.js';
import { interfazBienvenida } from './interfaz/InterfazBienvenida.js';
import { cartas } from './datos/cartas.js';

gestorPantallas.inicializar();
interfazBienvenida.inicializar();

// --- Prueba temporal: catálogo de cartas (Fase 6) ---
import { interfazColeccion } from './interfaz/InterfazColeccion.js';
interfazColeccion.inicializar();