import React from "react"
import { Link } from "react-router-dom/cjs/react-router-dom.min"


import style from './Card.module.css'

const Card = ({name,types, img, id}) => {

    return (
<div className={style.container}>
   
    <Link to = {`/detail/${id}`}>
    <h1> {name}</h1>
    </Link>
    <h5>
        {types?.map((cbtype, index)=> (
        
            <h3 key={index}> {cbtype}</h3>
        
    ))}
    </h5>
    <img src={img} alt={name} />
    
</div>
    )
}  
 
export default Card 