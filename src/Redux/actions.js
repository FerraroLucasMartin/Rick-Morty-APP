import { getSelectionRange } from "@testing-library/user-event/dist/utils"

export const AGREGAR_FAV = 'AGREGAR_FAV'
export const ELIMINAR_FAV = 'ELIMINAR_FAV'
export const FILTER = "FILTER"
export const ORDER = "ORDER"

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

export function filterCards(genero) {
  return {
    type: FILTER,
    payload: genero,
  }
};

export function orderCards(id) {
  return {
    type: ORDER,
    payload: id,
  }
};
