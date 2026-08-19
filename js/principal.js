import { gestorPantallas } from './interfaz/GestorPantallas.js';
import { validarNombreJugador } from './utilidades/validadores.js';

gestorPantallas.inicializar();

// Prueba temporal de validadores.js (la quitamos en el Paso 4)
console.log(validarNombreJugador(''));
console.log(validarNombreJugador('Da'));
console.log(validarNombreJugador('David123'));
console.log(validarNombreJugador('David@123'));