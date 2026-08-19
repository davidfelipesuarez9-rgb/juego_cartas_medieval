export function decidirAccion(cartaIA) {
  if (cartaIA.porcentajeVida < 30 && cartaIA.habilidades?.includes('luz-sagrada')) {
    return { tipo: 'habilidad', idHabilidad: 'luz-sagrada' };
  }
  if (cartaIA.habilidades?.length && Math.random() < 0.5) {
    const idHabilidad = cartaIA.habilidades[Math.floor(Math.random() * cartaIA.habilidades.length)];
    return { tipo: 'habilidad', idHabilidad };
  }
  return { tipo: 'atacar' };
}