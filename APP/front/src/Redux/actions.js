
export const AGREGAR_FAV = 'AGREGAR_FAV'
export const ELIMINAR_FAV = 'ELIMINAR_FAV'
export const FILTER = "FILTER"
export const ORDER = "ORDER"
export const ALL_FAVS= "ALL_FAVS"


export function agregarFav(fav) {
    // return {
    //   type: AGREGAR_FAV,
    //   payload: fav,
    // }

    return async function (dispatch) {
      try {
        const data =  await fetch("http://localhost:3001/fav", {
          method: "POST",
          body: JSON.stringify(fav),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        })

          .then((response) => response.json())

        if (data) dispatch({type: AGREGAR_FAV, payload:data});

      } catch (error) {
        console.log({message: error});
      }
    };
  }
export function  eliminarFav(id) {
    // return {
    //   type: ELIMINAR_FAV,
    //   payload: id,
return async function (dispatch) {
  try {
    const data = await fetch(`http://localhost:3001/fav/${id}`, {
      method: "DELETE",
    })

      .then((response) => response.json())

      if (data.success) dispatch({type: ELIMINAR_FAV, payload: id })
  } catch (error) {
    console.log(error);
  }
};
}

export function getfavorites(){
return async function (dispatch){
  try {
    const data = await fetch("hhttp://localhost:3001/fav/").then(
      response => response.json())
      if (data) dispatch(({type: ALL_FAVS , payload: data }))
  } catch (error) {
    console.log(error);
  }
}
}


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
