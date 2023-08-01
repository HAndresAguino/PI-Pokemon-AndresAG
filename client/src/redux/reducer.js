
import { GET_ALL_POKEMONS, GET_POKEMON_DETAIL, GET_POKEMON_FOR_NAME, ALPHABET_FILTER, CREATE_FILTER, ATTACK_ORDER, GET_TYPES, POST_POKEMON, FILTER_TYPES, LOADING } from "./actions"

const initialState = {
  allPokemons: [],
  copyAllPokemons: [],
  allTypes: [],
  detailPokemon: null,
  loading: true


}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {

    case GET_ALL_POKEMONS:
      return { ...state, allPokemons: action.payload, copyAllPokemons: action.payload, loading: false}


    case GET_TYPES:
      return { ...state, allTypes: action.payload }


    case GET_POKEMON_DETAIL:
      return { ...state, detailPokemon: action.payload }


    case GET_POKEMON_FOR_NAME:
        return { ...state, allPokemons: [action.payload] }




    case ALPHABET_FILTER:
      return {
        ...state,
        allPokemons:
          action.payload === "asc" ?
            [...state.allPokemons].sort((a, b) => a.name.localeCompare(b.name))
            : action.payload === "des"
              ? [...state.allPokemons].sort((a, b) => b.name.localeCompare(a.name))
              : state.allPokemons
      };

    case ATTACK_ORDER:
      if (action.payload === "lowest") {
        return {
          ...state,
          allPokemons: [...state.allPokemons].sort((a, b) => a.attack - b.attack)
        };
      } else if (action.payload === "highest") {
        return {
          ...state,
          allPokemons: [...state.allPokemons].sort((a, b) => b.attack - a.attack)
        };
      } else {
        return state;
      }

    case CREATE_FILTER:
      console.log(action.payload)

      const createdFilter = action.payload === 'created' ? state.copyAllPokemons.filter((cb) => typeof cb.id !== "number") : state.copyAllPokemons.filter((cb) => typeof cb.id === "number")    //Va a tener la data que quiero filtrar 
      return {
        ...state,
        allPokemons: action.payload === "all" ? state.copyAllPokemons : createdFilter // si es all no se aplicará ningún filtro y se devuelve todos los pokemones
      }


    case FILTER_TYPES:
    const typesfiltrados = Array.isArray(action.payload)
    ? action.payload
    : [action.payload]; //Me aseguro que types filtrados siempre sea un arreglo


    const filterType = state.copyAllPokemons.filter((allPokemons) => {
      const pokemonTypes = allPokemons.types || []; // Asegurarse de que pokemonTypes sea una matriz o una matriz vacía si es undefined
      return pokemonTypes.some((allTypes) =>
        typesfiltrados.includes(typeof allTypes === 'string' ? allTypes : allTypes.name)
      );
    });
    
  return {
    ...state,
    allPokemons: filterType,
  };


    case POST_POKEMON:
      return {
        ...state,
      }

      case LOADING:
        return{
          ...state,
          loading: action.payload
        }

    default:
      return state
  }
}


export default rootReducer