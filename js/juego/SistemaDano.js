const K_MITIGACION = 50;

export function calcularDano(atacante, defensor) {
  const mitigacion = defensor.defensa / (defensor.defensa + K_MITIGACION);
  const danoFinal = atacante.dano * (1 - mitigacion);
  return Math.round(danoFinal);
}