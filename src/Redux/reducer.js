import { AGREGAR_FAV, ELIMINAR_FAV, FILTER, ORDER } from "./actions";

const initialState= {
    myFavorites:[],
    allCharacters: [],
}

export default function RootReducer (state=initialState, action){
switch (action.type) {
    case AGREGAR_FAV:
        return {
            ...state,
            allCharacters: [...state.allCharacters,action.payload],
            myFavorites: [...state.myFavorites,action.payload],
        };

    case ELIMINAR_FAV:
        return {
            ...state,
            myFavorites: state.myFavorites.filter( character => character.id !== action.payload)
        }

        case FILTER:
        return {
            ...state,
            myFavorites: state.allCharacters.filter(char => char.gender === action.payload)
        }

        case ORDER:
        return {
            ...state,
            myFavorites: state.allCharacters.sort((charA, charB)=>{          
                if(charA.id > charB.id){
                    return action.payload === "Ascendente" ? 1 : -1
                }
 
                if(charA.id < charB.id){
                    return action.payload === "Descendente" ? -1 : 1
                }
                else return 0
            })
        };    

    default: 
            return {...state}
}
}