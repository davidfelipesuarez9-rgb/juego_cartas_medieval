import { gestorPantallas } from './interfaz/GestorPantallas.js';
import { interfazBienvenida } from './interfaz/InterfazBienvenida.js';

gestorPantallas.inicializar();
interfazBienvenida.inicializar();

import { Carta } from './modelos/Carta.js';

// Prueba temporal del modelo Carta (la quitamos cuando construyamos el catálogo)
const cartaPrueba = new Carta({
  id: 1,
  nombre: 'Caballero de la Muerte',
  simbolo: '💀',
  vida: 100,
  defensa: 40,
  dano: 30,
  tipo: 'guerrero',
  rareza: 'comun',
  habilidades: ['golpe-real'],
  descripcion: 'Un guerrero caido que sigue luchando mas alla de la muerte.',
});

cartaPrueba.recibirDano(35);
console.log(cartaPrueba);
console.log('Porcentaje de vida:', cartaPrueba.porcentajeVida);
console.log('¿Esta derrotada?', cartaPrueba.estaDerrotada);