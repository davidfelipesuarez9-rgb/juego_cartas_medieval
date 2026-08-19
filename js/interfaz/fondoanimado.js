export const fondoAnimado = {
  inicializar() {
    const contenedor = document.createElement('div');
    contenedor.id = 'fondo-animado';
    document.body.prepend(contenedor);

    for (let i = 0; i < 25; i++) {
      const ascua = document.createElement('span');
      ascua.className = 'ascua';
      ascua.style.left = `${Math.random() * 100}%`;
      ascua.style.animationDuration = `${6 + Math.random() * 8}s`;
      ascua.style.animationDelay = `${Math.random() * 8}s`;
      contenedor.appendChild(ascua);
    }
  }
};