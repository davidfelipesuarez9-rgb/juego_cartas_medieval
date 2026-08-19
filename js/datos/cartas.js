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
  }

];