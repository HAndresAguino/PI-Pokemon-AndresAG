


import { useDispatch } from "react-redux"  //useSelector se usa en componentes smart 
import { useEffect } from "react"


//Accion a despachar
import { getAllpokemons } from "../../redux/actions"
import Card from "../Card/Card"


import style from '../Cards/Cards.module.css'
import Loader from "../Loader/Loader"

import { useSelector } from "react-redux"


const Cards = ({personajesActuales}) => {

const loading = useSelector(state=> state.loading)

    const dispatch = useDispatch()
    // const allPokemons = useSelector((state) => state.allPokemons)
  

    useEffect(() => {
        dispatch(getAllpokemons()) //Tiene que ser la accion ejecutada porque si no no retorna el objeto
    }, [dispatch]) //Array de dependencias es el segundo parametro



    {loading && <Loader/>}
    return (
        <div className={style.character}>
            {
                personajesActuales?.map(({ name, types, img, id }) => {
                    
                    return (
                        <Card
                        key={id}
                            id={id}
                            name={name}
                            types={types}
                            img={img}
                        />
                    )
                })
            }  
        </div> 
    )
}

export default Cards