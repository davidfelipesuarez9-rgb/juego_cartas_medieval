import { Jugador } from '../modelos/Jugador.js';

const CLAVE_PERFILES = 'reinos-en-batalla:perfiles';

function leerPerfilesGuardados() {
  try {
    const datosGuardados = localStorage.getItem(CLAVE_PERFILES);
    if (!datosGuardados) return [];
    const listaDeDatos = JSON.parse(datosGuardados);
    return listaDeDatos.map((datos) => Jugador.desdeDatos(datos));
  } catch (error) {
    console.warn('ServicioAlmacenamiento: no se pudieron leer los perfiles guardados.', error);
    return [];
  }
}

function escribirPerfiles(perfiles) {
  try {
    localStorage.setItem(CLAVE_PERFILES, JSON.stringify(perfiles));
    return true;
  } catch (error) {
    console.warn('ServicioAlmacenamiento: no se pudo guardar el perfil.', error);
    return false;
  }
}

export const servicioAlmacenamiento = {
  obtenerPerfiles() {
    return leerPerfilesGuardados();
  },

  buscarPerfilPorNombre(nombreUsuario) {
    const nombreNormalizado = nombreUsuario.trim().toLowerCase();
    return leerPerfilesGuardados().find(
      (perfil) => perfil.nombreUsuario.trim().toLowerCase() === nombreNormalizado
    );
  },

  guardarPerfil(perfil) {
    const perfiles = leerPerfilesGuardados();
    const indiceExistente = perfiles.findIndex(
      (p) => p.nombreUsuario.trim().toLowerCase() === perfil.nombreUsuario.trim().toLowerCase()
    );

    if (indiceExistente === -1) {
      perfiles.push(perfil);
    } else {
      perfiles[indiceExistente] = perfil;
    }

    return escribirPerfiles(perfiles);
  },
};