import { gestorPantallas } from './interfaz/GestorPantallas.js';
import { Jugador } from './modelos/Jugador.js';
import { servicioAlmacenamiento } from './servicios/ServicioAlmacenamiento.js';

gestorPantallas.inicializar();

// Prueba temporal del ServicioAlmacenamiento (la quitamos en el Paso 3)
const jugadorPrueba = new Jugador({ nombreUsuario: 'David', avatar: 'vampiro' });
jugadorPrueba.registrarVictoria(12);
servicioAlmacenamiento.guardarPerfil(jugadorPrueba);

console.log('Perfiles guardados:', servicioAlmacenamiento.obtenerPerfiles());
console.log('Busqueda por nombre (minusculas):', servicioAlmacenamiento.buscarPerfilPorNombre('david'));