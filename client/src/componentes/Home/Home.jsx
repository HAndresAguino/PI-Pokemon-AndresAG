import Cards from "../Cards/Cards"
import SearchBar from "../SerchBar/SearchBar"

import React, { useState } from "react"
import { NavLink } from "react-router-dom/cjs/react-router-dom.min"

import { useSelector } from "react-redux"

import Paginado from "../Paginado/Paginado"
import Filtros from "../Filtros/Filtros"

import { useDispatch } from "react-redux"


import { getAllpokemons, loader } from "../../redux/actions"

import Loader from "../Loader/Loader"

import style from '../Home/Home.module.css'



const Home = () => {

    
    const dispatch = useDispatch()
    const loading =  useSelector(state=> state.loading)


    //Paginado______________________________________________________________________________________________________________________________________________________________________________________________________

    const [paginaActual, setPaginaActual] = useState(1)
    const [personajesPorPg, setPersonajesPorPg] = useState(12)

    const indiceUltimoPersonaje = paginaActual * personajesPorPg //12
    const indicePrimerPersonaje = indiceUltimoPersonaje - personajesPorPg

    const allPokemons = useSelector((state) => state.allPokemons)

    const personajesActuales = allPokemons.slice(indicePrimerPersonaje, indiceUltimoPersonaje) //El slice corta y divide un arreglo y toma una porción dependiendo lo que se pase por parametro

    function paginado(numeroDePagina) {
        setPaginaActual(numeroDePagina)
    }
    //________________________________________________________________________________________________________________________________________________________________________________________________________________

        function handleclick(event) {
            event.preventDefault();
            dispatch(getAllpokemons())
        }

   
    return (
        <div>
            {loading && <Loader/>}
            <SearchBar/>
            <NavLink to="/createpokemon">
                <button className={style.button}> Crear un Pokemon </button>
            </NavLink>
            <Filtros paginaActual={paginaActual} />
            <button onClick={event => { handleclick(event) }} className = {style.button}>Cargar pokemons por defecto </button>
            <Cards personajesActuales={personajesActuales} />
            <Paginado personajesPorPg={personajesPorPg} allPokemons={allPokemons.length} paginado={paginado} />

        </div>
    )
}

export default Home