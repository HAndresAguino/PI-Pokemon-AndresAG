
import { useParams } from "react-router-dom"


import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import CardDetail from "../CardDetail/CardDetail"

import { getPokemonDetail } from "../../redux/actions"

import { NavLink } from "react-router-dom/cjs/react-router-dom.min"

import style from '../CardsDetail/Detail.module.css'


import Loader from "../Loader/Loader"

const Detail = () => {

  const loading = useSelector(state=> state.load)

  const { id } = useParams()
  const dispatch = useDispatch()
  const detailPokemon = useSelector((state) => state.detailPokemon)

  useEffect(() => {
    dispatch(getPokemonDetail(id))
  }, [id, dispatch])

  return (
    <div className={style.character}>
      {loading && <Loader/>}
      <h5 style={{ color: "white" }}>Acá van los detalles del pokemon: {id}  </h5>
      <NavLink to="/home">
                <button className={style.button}> Volver </button>
            </NavLink>

      {
        detailPokemon && (
          <CardDetail
            img={detailPokemon.img}
            name={detailPokemon.name}
            id={detailPokemon.id}
            hp={detailPokemon.hp}
            attack={detailPokemon.attack}
            defense={detailPokemon.defense}
            speed={detailPokemon.speed}
            height={detailPokemon.height}
            weight={detailPokemon.weight}
          />

        )
      }


    </div>
  )
}

export default Detail