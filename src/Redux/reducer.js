

const initialState= {
    myFavorites:[],
}

export default function RootReducer (state=initialState, action){
switch (action.type) {
    case 'AGREGAR_FAV':
        return {
            ...state,
            myFavorites: [...state.myFavorites,action.payload],
        };

    case 'ELIMINAR_FAV':
        return {
            ...state,
            myFavorites: state.myFavorites.filter( character => character.id !== action.payload.id)
        }

    default: 
            return {...state}
}
}