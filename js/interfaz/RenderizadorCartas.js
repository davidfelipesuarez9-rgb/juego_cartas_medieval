const ETIQUETAS_RAREZA = {
  comun: 'Común',
  rara: 'Rara',
  epica: 'Épica',
  legendaria: 'Legendaria'
};

const ETIQUETAS_TIPO = {
  tanque: 'Tanque',
  guerrero: 'Guerrero',
  arquero: 'Arquero',
  mago: 'Mago',
  asesino: 'Asesino',
  sanador: 'Sanador'
};

export function crearElementoCarta(carta) {
  const boton = document.createElement('button');
  boton.type = 'button';
  boton.className = `carta carta--${carta.rareza}`;
  boton.dataset.id = carta.id;
  boton.dataset.tipo = carta.tipo;
  boton.setAttribute('aria-pressed', 'false');
  boton.setAttribute(
    'aria-label',
    `${carta.nombre}, ${ETIQUETAS_TIPO[carta.tipo]}, rareza ${ETIQUETAS_RAREZA[carta.rareza]}`
  );

  boton.innerHTML = `
    <span class="carta-rareza">${ETIQUETAS_RAREZA[carta.rareza]}</span>
    <span class="carta-emoji" aria-hidden="true">${carta.emoji}</span>
    <h3 class="carta-nombre">${carta.nombre}</h3>
    <span class="carta-tipo">${ETIQUETAS_TIPO[carta.tipo]}</span>
    <div class="carta-stats">
      <span class="carta-stat" title="Vida">❤️ ${carta.vidaMaxima}</span>
      <span class="carta-stat" title="Defensa">🛡️ ${carta.defensa}</span>
      <span class="carta-stat" title="Daño">⚔️ ${carta.dano}</span>
    </div>
  `;

  return boton;
}