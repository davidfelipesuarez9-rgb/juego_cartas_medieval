// validarNombreJugador: revisa el nombre ingresado.
// Devuelve null si es válido, o un mensaje de error en español si no lo es.
export function validarNombreJugador(nombre) {
  const nombreLimpio = nombre.trim();

  if (nombreLimpio.length === 0) {
    return 'Escribe un nombre para tu guerrero.';
  }

  if (nombreLimpio.length < 3) {
    return 'El nombre debe tener al menos 3 caracteres.';
  }

  if (nombreLimpio.length > 20) {
    return 'El nombre no puede tener mas de 20 caracteres.';
  }

  const patronValido = /^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ ]+$/;
  if (!patronValido.test(nombreLimpio)) {
    return 'El nombre solo puede tener letras, numeros y espacios.';
  }

  return null;
}