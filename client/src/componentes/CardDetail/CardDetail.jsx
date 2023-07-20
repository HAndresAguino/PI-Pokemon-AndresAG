import React from "react"

import style from './CardDetail.module.css'

const CardDetail = ({name,id,attack,defense,img,height,weight,speed,hp, types}) => {
    return (
        
<div className={style.container}>
    <img src={img} alt={name} />
   <div className={style.containerLetra}>
    <h3> {name}</h3>
    <h4> Ataque: {attack}</h4>
    <h4> Defensa:{defense}</h4>
    <h4> Altura: {height}</h4>
    <h4> Peso: {weight}</h4>
    <h4> Velocidad: {speed}</h4>
    <h4> Hp: {hp}</h4>
    <h4>
        {types?.map((cbtype, index)=> (
        
            <p key={index}> {cbtype}</p>
        
    ))}
    </h4>

   </div>

</div>
    )
}

export default CardDetail