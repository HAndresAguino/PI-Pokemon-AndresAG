//Este componente despacha una acción. Por lo tanto

//Me tengo que traer a dispatch para que despache la accion 

//A useEffect para que controle los ciclos de vida

//Para traer información del estado global useSelector

//Se necesita despachar la acción cuando el componente se monte


import { useDispatch } from "react-redux"  //useSelector se usa en componentes smart 
import { useEffect } from "react"


//Accion a despachar
import { getAllpokemons } from "../../redux/actions"
import Card from "../Card/Card"


import style from '../Cards/Cards.module.css'








const Cards = ({personajesActuales}) => {

    const dispatch = useDispatch()
    // const allPokemons = useSelector((state) => state.allPokemons)
  

    useEffect(() => {
        dispatch(getAllpokemons()) //Tiene que ser la accion ejecutada porque si no no retorna el objeto
    }, [dispatch]) //Array de dependencias es el segundo parametro



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