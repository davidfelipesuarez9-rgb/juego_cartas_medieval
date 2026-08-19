import { gestorPantallas } from './interfaz/GestorPantallas.js';
import { interfazBienvenida } from './interfaz/InterfazBienvenida.js';

gestorPantallas.inicializar();
interfazBienvenida.inicializar();

import { Carta } from './modelos/Carta.js';

import { cartas } from './datos/cartas.js';

console.log('Cartas cargadas:', cartas.length);
console.log('Primera carta:', cartas[0]);

import { obtenerHabilidadPorId } from './datos/habilidades.js';

console.log(obtenerHabilidadPorId('golpe-real'));
console.log(obtenerHabilidadPorId('golpe-critico'));
console.log(obtenerHabilidadPorId('no-existe'));