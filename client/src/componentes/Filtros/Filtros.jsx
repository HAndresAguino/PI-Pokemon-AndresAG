import React, { useEffect } from "react"

import { filterCreated, alphabeticalOrder, attackOrder, getTypes, filterTypes} from '../../redux/actions'
import { useDispatch, useSelector} from "react-redux"

import style from '../Filtros/Filtros.module.css'

const Filtros = () => {

    const types =  useSelector((state)=> state.allTypes)
    const dispatch = useDispatch()

    useEffect (()=>{
        dispatch(getTypes())
    },[dispatch])

    function HandlerfilterCreated(event) {
        event.preventDefault()
        dispatch(filterCreated(event.target.value));
       
    }


    function handlerFilterAlphabet(event) {
        event.preventDefault()
        dispatch(alphabeticalOrder(event.target.value))
       
    }

    function handleFilterAttack(event){
        event.preventDefault()
        dispatch(attackOrder(event.target.value))
        
    }

    function handleSelect(event) {
        
        event.preventDefault()
        dispatch(filterTypes(event.target.value));
      }
      

    return (
        <div className={style.container}>
            <div>
                <select onChange={event => handlerFilterAlphabet(event)}>
                    <option value="OrdenBy">Orden Alfabetico</option>
                    <option value="asc"> [A-Z] </option>
                    <option value="des"> [Z-A] </option>
                </select>
            </div>

            <div>
                <select onChange={event => HandlerfilterCreated(event)}>
                    
                    <option value="all"> Todos </option>
                    <option value="api"> Existentes </option>
                    <option value="created"> Creados </option>
                </select>
            </div>
            <div>
                
                <select onChange={event => handleFilterAttack(event)}>
                    <option value="all">Orden By Ataque</option>
                    <option value="lowest">Menor Ataque</option>
                    <option value="highest">Mayor Ataque</option>
                </select>
            </div>

            <div>
                <select onChange={event => handleSelect(event)}>
                {
                        types.map((type) => (
                            <option
                                value={type.name}
                                key={type.id}
                                
                            >
                                {type.name}
                            </option>
                        ))
                    }
                </select>
            </div>
        </div>
    )
}
export default Filtros