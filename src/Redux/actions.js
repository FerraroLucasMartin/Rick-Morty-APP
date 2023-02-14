export const AGREGAR_FAV = 'AGREGAR_FAV'
export const ELIMINAR_FAV = 'ELIMINAR_FAV'

export function  agregarFav(character) {
    return {
      type: 'AGREGAR_FAV',
      payload: character,
    }
};

export function  eliminarFav(characterId) {
    return {
      type: 'ELIMINAR_FAV',
      payload: characterId,
    }
};

