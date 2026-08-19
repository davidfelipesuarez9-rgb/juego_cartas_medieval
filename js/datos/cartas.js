// js/datos/cartas.js

export const cartas = [

  // ===== TANQUES =====
  {
    id: 'guardian-huesos',
    nombre: 'Guardián de Huesos',
    emoji: '💀',
    tipo: 'tanque',
    rareza: 'comun',
    vidaMaxima: 130,
    defensa: 30,
    dano: 9,
    habilidades: ['ataque-basico'],
    descripcion: 'Un esqueleto reanimado que no conoce el miedo ni el cansancio; golpea con la misma fuerza en el primer asalto que en el último.'
  },
  {
    id: 'centinela-cripta',
    nombre: 'Centinela de la Cripta',
    emoji: '⚰️',
    tipo: 'tanque',
    rareza: 'comun',
    vidaMaxima: 140,
    defensa: 34,
    dano: 8,
    habilidades: ['escudo-ancestral'],
    descripcion: 'Vigila una tumba olvidada desde hace siglos; su armadura oxidada ha detenido más golpes de los que puede recordar.'
  },
  {
    id: 'coloso-hierro-negro',
    nombre: 'Coloso de Hierro Negro',
    emoji: '🗿',
    tipo: 'tanque',
    rareza: 'comun',
    vidaMaxima: 150,
    defensa: 38,
    dano: 7,
    habilidades: ['escudo-ancestral'],
    descripcion: 'Una armadura vacía animada por un antiguo hechizo; avanza lento, pero nada logra derribarlo con facilidad.'
  },
  {
    id: 'muralla-viviente',
    nombre: 'Muralla Viviente',
    emoji: '🧱',
    tipo: 'tanque',
    rareza: 'rara',
    vidaMaxima: 165,
    defensa: 45,
    dano: 10,
    habilidades: ['escudo-ancestral', 'hacerse-fuerte'],
    descripcion: 'Fusionado con la piedra de un castillo en ruinas, cada golpe que recibe lo vuelve un poco más difícil de quebrar.'
  },
  {
    id: 'titan-tumba-eterna',
    nombre: 'Titán de la Tumba Eterna',
    emoji: '⚱️',
    tipo: 'tanque',
    rareza: 'epica',
    vidaMaxima: 190,
    defensa: 52,
    dano: 12,
    habilidades: ['escudo-ancestral', 'hacerse-fuerte'],
    descripcion: 'El guardián de la tumba de un rey olvidado; se dice que ha repelido ejércitos enteros él solo.'
  },
  // ===== GUERREROS =====
{
    id: 'espada-errante',
    nombre: 'Espada Errante',
    emoji: '⚔️',
    tipo: 'guerrero',
    rareza: 'comun',
    vidaMaxima: 95,
    defensa: 16,
    dano: 19,
    habilidades: ['ataque-basico'],
    descripcion: 'Un mercenario sin bandera que vende su acero al mejor postor; confiable en cualquier campo de batalla.'
  },
  {
    id: 'mercenario-niebla',
    nombre: 'Mercenario de la Niebla',
    emoji: '🩸',
    tipo: 'guerrero',
    rareza: 'comun',
    vidaMaxima: 100,
    defensa: 18,
    dano: 20,
    habilidades: ['ataque-basico'],
    descripcion: 'Aparece entre la bruma antes de que su enemigo pueda reaccionar, y desaparece de la misma forma.'
  },
  {
    id: 'verdugo-rey-caido',
    nombre: 'Verdugo del Rey Caído',
    emoji: '🪓',
    tipo: 'guerrero',
    rareza: 'comun',
    vidaMaxima: 105,
    defensa: 20,
    dano: 21,
    habilidades: ['golpe-real'],
    descripcion: 'Sirvió a una corona que ya no existe; ahora su hacha solo responde a la promesa de una nueva batalla.'
  },
  {
    id: 'caballero-sangre-negra',
    nombre: 'Caballero de la Sangre Negra',
    emoji: '🖤',
    tipo: 'guerrero',
    rareza: 'rara',
    vidaMaxima: 115,
    defensa: 22,
    dano: 24,
    habilidades: ['golpe-real', 'hacerse-fuerte'],
    descripcion: 'Traicionó su juramento por un poder oscuro; cada victoria alimenta la corrupción que corre por sus venas.'
  },
  {
    id: 'campeon-osario',
    nombre: 'Campeón del Osario',
    emoji: '💀',
    tipo: 'guerrero',
    rareza: 'epica',
    vidaMaxima: 130,
    defensa: 26,
    dano: 27,
    habilidades: ['golpe-real', 'hacerse-fuerte'],
    descripcion: 'Invicto en cien duelos hasta el día de su muerte; su leyenda lo trajo de vuelta para pelear cien más.'
  }
];