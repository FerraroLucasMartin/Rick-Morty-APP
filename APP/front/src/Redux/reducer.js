import { AGREGAR_FAV, ELIMINAR_FAV, FILTER, ORDER, ALL_FAVS } from "./actions";

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

export default function RootReducer(state = initialState, action) {
  switch (action.type) {
    case ALL_FAVS:
      return {
        ...state,
        myFavorites: [...action.payload],
        allCharacters: [...action.payload],
      };
    case AGREGAR_FAV:
      return {
        ...state,
        allCharacters: [...state.allCharacters, action.payload],
        myFavorites: [...state.allCharacters, action.payload],
      };

    case ELIMINAR_FAV:
      return {
        ...state,
        myFavorites: state.allCharacters.filter(
          (character) => character.id !== action.payload
        ),
        allCharacters: state.allCharacters.filter(
            (character) => character.id !== action.payload
          ),
      };

    case FILTER:
      return {
        ...state,
        myFavorites: state.allCharacters.filter(
          (char) => char.gender === action.payload
        ),
      };

    case ORDER:
      let orderFunction =
        action.payload === "Ascendente"
          ? (a, b) => {
              return a.id > b.id ? 1 : -1;
            }
          : (a, b) => {
              return a.id < b.id ? 1 : -1;
            };
      let orderFavorites = state.myFavorites.sort(orderFunction);
      return {
        ...state,
        myFavorites: [...orderFavorites],
      };
    case "RESET":
      return {
        ...state,
        myFavorites: state.allCharacters,
      };

    default:
      return { ...state };
  }
}
