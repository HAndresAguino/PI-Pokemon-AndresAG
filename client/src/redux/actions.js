import axios from "axios"

export const GET_ALL_POKEMONS = "GET_ALL_POKEMONS";
export const GET_POKEMON_DETAIL = "GET_POKEMON_DETAIL";
export const GET_POKEMON_FOR_NAME = "GET_POKEMON_FOR_NAME";
export const ALPHABET_FILTER = "ALPHABET_FILTER";
export const CREATE_FILTER = "CREATE_FILTER";
export const ATTACK_ORDER = "ATTACK_ORDER";
export const GET_TYPES = "GET_TYPES";
export const POST_POKEMON = "POST_POKEMON"
export const FILTER_TYPES = "FILTER_TYPES"
export const LOADING = "LOADING"
//____________________________________________________________________

// export const getAllpokemons = (name) => {
//     return async function (dispatch) {
//         try {
//             let json;
//             if (name){
//                 json = await axios.get(`http://localhost:3001/pokemons?name=${name}`)

//             } else {

//                 json = await axios.get('http://localhost:3001/pokemons');
//             }
//             return dispatch({ type: GET_ALL_POKEMONS, payload: json.data })

//         } catch (error) {
//             console.log(error);
//         }
//     }
// }


export const getAllpokemons = () => {
    return async function (dispatch) {
        try {
            dispatch(loader(true)) //Despacha el loader para animar al cargar los pokemons
            let json = await axios.get('http://localhost:3001/pokemons');
            return dispatch({ type: GET_ALL_POKEMONS, payload: json.data })
        } catch (error) {
            console.log(error.message);
        }
    }
}

export const getTypes = () => {
    return async function (dispatch) {
        try {
            let json = await axios.get(`http://localhost:3001/types`)
            return dispatch({ type: GET_TYPES, payload: json.data })
        } catch (error) {

        }
    }
}

export const postPokemon = (payload) => {
    return async function (dispatch) {
        try {
            let json = await axios.post('http://localhost:3001/pokemons', payload);
            return dispatch({ type: POST_POKEMON, payload: json.data });
        } catch (error) {
            console.log("Error con posPokemon", error);
        }
    }
}



export const getPokemonDetail = (id) => {
    return async function (dispatch) {
        let response = await axios.get(`http://localhost:3001/pokemons/${id}`)
        return dispatch({ type: GET_POKEMON_DETAIL, payload: response.data })
    }
}

export const getAllpokemonsName = (name) => {
    return async function (dispatch) {
        try {
            let json = await axios.get(`http://localhost:3001/pokemons?name=${name}`)
            return dispatch({
                type: GET_POKEMON_FOR_NAME, payload: json.data
            })

        } catch (error) {
            console.log(error);
        }
    }

}

export const alphabeticalOrder = (order) => { //El order va a ser la opción que yo elija 
    return (
        {
            type: ALPHABET_FILTER,
            payload: order
        }
    )
}

export const attackOrder = (order) => {
    return (
        {
            type: ATTACK_ORDER,
            payload: order
        }
    )
}

export const filterCreated = (order) => { 
    return (
        {
            type: CREATE_FILTER,
            payload: order
        }
    )
}


export const filterTypes = (payload) => {
    return (
        {
            type: FILTER_TYPES,
            payload
        }
    )

}

export const loader = (isLoading) => {
    return (
        {
            type: LOADING,
            payload: isLoading
        }
    )
}
