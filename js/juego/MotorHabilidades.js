import { calcularDano } from './SistemaDano.js';

const manejadoresPorCategoria = {
  ataque(habilidad, usuario, objetivo) {
    const dano = calcularDano({ dano: habilidad.valor }, objetivo);
    objetivo.recibirDano(dano);
  },
  buff(habilidad, usuario) {
    usuario.dano += habilidad.valor;
  },
  curacion(habilidad, usuario) {
    usuario.recibirCuracion(habilidad.valor);
  },
  debuff(habilidad, usuario, objetivo) {
    objetivo.defensa = Math.max(0, objetivo.defensa - habilidad.valor);
  },
  danoContinuo(habilidad, usuario, objetivo) {
    objetivo.veneno = { valor: habilidad.valor, turnos: habilidad.duracion || 3 };
  },
  proteccion(habilidad, usuario) {
    usuario.escudo = (usuario.escudo || 0) + habilidad.valor;
  },
  probabilidad(habilidad, usuario, objetivo) {
    if (Math.random() < (habilidad.probabilidad ?? 0.5)) {
      const dano = calcularDano({ dano: habilidad.valor }, objetivo);
      objetivo.recibirDano(dano);
    }
  }
};

export function usarHabilidad(habilidad, usuario, objetivo) {
  const manejador = manejadoresPorCategoria[habilidad.categoria];
  if (!manejador) return console.warn('Categoria desconocida:', habilidad.categoria);
  manejador(habilidad, usuario, objetivo);
}