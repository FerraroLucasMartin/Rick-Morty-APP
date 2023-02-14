export const AGREGAR_FAV = 'AGREGAR_FAV'
export const ELIMINAR_FAV = 'ELIMINAR_FAV'

export function agregarFav(fav) {
    return {
      type: AGREGAR_FAV,
      payload: fav,
    }
};

export function  eliminarFav(id) {
    return {
      type: ELIMINAR_FAV,
      payload: id,
    }
};

