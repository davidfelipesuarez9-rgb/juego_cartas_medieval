export function elegirAleatorios(lista, cantidad) {
  const copia = [...lista];
  const resultado = [];
  for (let i = 0; i < cantidad && copia.length > 0; i++) {
    const indice = Math.floor(Math.random() * copia.length);
    resultado.push(copia.splice(indice, 1)[0]);
  }
  return resultado;
}