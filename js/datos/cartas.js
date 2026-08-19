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
  },
    // ===== ARQUEROS =====
  {
    id: 'cazador-sombras',
    nombre: 'Cazador de las Sombras',
    emoji: '🏹',
    tipo: 'arquero',
    rareza: 'comun',
    vidaMaxima: 78,
    defensa: 9,
    dano: 23,
    habilidades: ['flecha-certera'],
    descripcion: 'No falla dos veces; su primer error suele ser también el último de su presa.'
  },
  {
    id: 'ojo-cuervo',
    nombre: 'Ojo de Cuervo',
    emoji: '🐦\u200d⬛',
    tipo: 'arquero',
    rareza: 'comun',
    vidaMaxima: 82,
    defensa: 10,
    dano: 24,
    habilidades: ['flecha-certera'],
    descripcion: 'Ve en la oscuridad tan bien como en pleno día; ninguna carta oculta escapa a su mirada.'
  },
  {
    id: 'rastreador-lunar',
    nombre: 'Rastreador Lunar',
    emoji: '🌙',
    tipo: 'arquero',
    rareza: 'rara',
    vidaMaxima: 88,
    defensa: 12,
    dano: 27,
    habilidades: ['flecha-certera', 'lluvia-de-flechas'],
    descripcion: 'Solo caza bajo la luna llena, cuando su puntería se vuelve casi sobrenatural.'
  },
  {
    id: 'flecha-ocaso',
    nombre: 'Flecha del Ocaso',
    emoji: '🍂',
    tipo: 'arquero',
    rareza: 'rara',
    vidaMaxima: 90,
    defensa: 13,
    dano: 28,
    habilidades: ['flecha-certera', 'lluvia-de-flechas'],
    descripcion: 'Cada disparo suyo lleva el peso de un reino caído al anochecer.'
  },
  {
    id: 'arquera-noche-eterna',
    nombre: 'Arquera de la Noche Eterna',
    emoji: '⭐',
    tipo: 'arquero',
    rareza: 'epica',
    vidaMaxima: 98,
    defensa: 15,
    dano: 32,
    habilidades: ['flecha-certera', 'lluvia-de-flechas'],
    descripcion: 'Ha cazado bajo un cielo sin sol durante tanto tiempo que ya no recuerda el calor del día.'
  },
    // ===== MAGOS =====
  {
    id: 'aprendiz-nigromancia',
    nombre: 'Aprendiz de Nigromancia',
    emoji: '📖',
    tipo: 'mago',
    rareza: 'comun',
    vidaMaxima: 62,
    defensa: 5,
    dano: 26,
    habilidades: ['bola-de-fuego'],
    descripcion: 'Apenas domina los primeros hechizos, pero ya disfruta demasiado de su poder destructivo.'
  },
  {
    id: 'brujo-cenizas',
    nombre: 'Brujo de Cenizas',
    emoji: '🔥',
    tipo: 'mago',
    rareza: 'comun',
    vidaMaxima: 66,
    defensa: 6,
    dano: 28,
    habilidades: ['bola-de-fuego'],
    descripcion: 'Vive entre las ruinas que él mismo ha creado; el fuego lo obedece como a un viejo amigo.'
  },
  {
    id: 'invocador-sombras',
    nombre: 'Invocador de Sombras',
    emoji: '👁️',
    tipo: 'mago',
    rareza: 'rara',
    vidaMaxima: 70,
    defensa: 7,
    dano: 31,
    habilidades: ['bola-de-fuego', 'debilitar'],
    descripcion: 'Susurra pactos con entidades que nadie más puede ver, y ellas responden a su llamado.'
  },
  {
    id: 'hechicera-pantano-negro',
    nombre: 'Hechicera del Pantano Negro',
    emoji: '🐍',
    tipo: 'mago',
    rareza: 'rara',
    vidaMaxima: 72,
    defensa: 8,
    dano: 33,
    habilidades: ['drenar-vida', 'debilitar'],
    descripcion: 'Cada hechizo que lanza le roba la fuerza a su enemigo para dársela a ella misma.'
  },
  {
    id: 'archimago-voz-muerta',
    nombre: 'Archimago de la Voz Muerta',
    emoji: '💜',
    tipo: 'mago',
    rareza: 'epica',
    vidaMaxima: 80,
    defensa: 10,
    dano: 37,
    habilidades: ['bola-de-fuego', 'drenar-vida'],
    descripcion: 'Habla en un idioma que murió hace mil años, y aun así el fuego que invoca sigue entendiendo cada palabra.'
  }
];