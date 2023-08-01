
import React, { useEffect, useState } from "react"

import { NavLink, useHistory } from "react-router-dom/cjs/react-router-dom.min"

import { useDispatch, useSelector } from "react-redux"

import { getTypes, postPokemon } from "../../redux/actions"

import style from './PokemonCreated.module.css'


// import validacion from "./Validation"


const PokemonCreated = () => {

    //1 ______________
    const dispatch = useDispatch()
    const history = useHistory()
    const types = useSelector((state) => state.allTypes)


    //2__________________
    const [pokemondata, setPokemonData] = useState({
        name: '',
        hp: "",
        attack: "",
        defense: "",
        speed: "",
        height: "",
        weight: "",
        types: [],
        img: '',
    });


    //4

    // const [errors, setErrors] = useState({
    //     name: "",
    //     hp: "",
    //     attack: "",
    //     defense: "",
    //     speed: "",
    //     height: "",
    //     weight: "",
    //     img: "",
    //     types: [],
    // })

    const [selectedType, setSelectedType] = useState([]);
    // const [h5type, setH5Type] = useState([]); //Acá guardaremos y mostraremos los types seleccionados en el h5

    // 3 
    useEffect(() => {
        dispatch(getTypes())
    }, [dispatch])



    const handleChange = (event) => {
        const { name, value } = event.target;

        // Validate attack value: greater than or equal to 0, and less than or equal to 200
        if (name === 'attack' && (value < 0 || value > 200)) {
            alert('El valor de ataque debe estar entre 0 y 200');
            return;
        }
        if (name === 'hp' && (value < 0 || value > 200)) {
            alert('El valor de hp debe estar entre 0 y 200');
            return;
        }

        if (name === 'defense' && (value < 0 || value > 200)) {
            alert('El valor de defensa debe estar entre 0 y 200');
            return;
        }

        if (name === 'speed' && (value < 0 || value > 200)) {
            alert('El valor de velocidad debe estar entre 0 y 200');
            return;
        }

        if (name === 'height' && (value < 0 || value > 200)) {
            alert('El valor de Altura debe estar entre 0 y 200');
            return;
        }


        if (name === 'weight' && (value < 0 || value > 200)) {
            alert('El valor de Peso debe estar entre 0 y 200');
            return;
        }

        if (name ===  'name'  && (value.length >  20)){
            alert ('El nombre debe de tener menos de 20 caracteres')
        }

        setPokemonData({
            ...pokemondata,
            [name]: value
        });
    };


    //5
    function handleSelect(event) {

        const typeSelect = event.target.value;

        if (!pokemondata.types.includes(typeSelect)) {

            setPokemonData({
                ...pokemondata,
                types: [...pokemondata.types, typeSelect]
            })

           
        }
    }


    function handleSubmit(event) {
        event.preventDefault();

        dispatch(postPokemon(pokemondata));

        if (
            !pokemondata.name ||
            !pokemondata.hp ||
            !pokemondata.attack ||
            !pokemondata.defense ||
            !pokemondata.speed ||
            !pokemondata.height ||
            !pokemondata.weight
        ) {
            alert("Faltan datos por rellenar");
        } else {
            setPokemonData({
                name: "",
                hp: "",
                attack: "",
                defense: "",
                speed: "",
                height: "",
                weight: "",
                types: [],
                img: "",
            });
            alert("Pokemon Creado correctamente")
            history.push("/home")
        }
    }

    function handleDelete(el){
        setPokemonData({
            ...pokemondata,
            types: pokemondata.types.filter(typ => typ !== el)
        })
    }



      

    return (
        
        <div>
            <h1 style={{ color: "yellow" }}>
                Crea tu propio pokemon
            </h1>

            <NavLink to='/home'>
                <button className={style.button}> Volver </button>
            </NavLink>

            <br />

            <form className={style["pokemon-form"]} onSubmit={(event) => handleSubmit(event)}>
                <div>
                    <label htmlFor="name"> Nombre: </label>
                    <input
                        type="text"
                        placeholder="¿Como se llamará tu pokemon?"
                        value={pokemondata.name}
                        name="name"
                        onChange={(event) => handleChange(event)} />
                </div>
                <div>
                    <label htmlFor="hp"> HP: </label>
                    <input type="number" placeholder="Indica puntos de hp" value={pokemondata.hp} name="hp" onChange={(event) => handleChange(event)} />
                </div>
                <div>
                    <label htmlFor="attack"> Ataque: </label>
                    <input type="number" placeholder="Indica puntos de ataque" value={pokemondata.attack} name="attack" onChange={(event) => handleChange(event)} />
                    {/* {errors.attack && <p>{errors.attack}</p>} */}

                </div>

                <div>
                    <label htmlFor="defense"> Defensa: </label>
                    <input type="number" placeholder="Indica puntos de Defensa" value={pokemondata.defense} name="defense" onChange={(event) => handleChange(event)} />

                </div>

                <div>
                    <label htmlFor="speed"> Velocidad: </label>
                    <input type="number" placeholder="Indica la velocidad" value={pokemondata.speed} name="speed" onChange={(event) => handleChange(event)} />

                </div>

                <div>

                    <label htmlFor="height"> Altura: </label>
                    <input type="number" placeholder="Indica la altura " name="height" value={pokemondata.height} onChange={(event) => handleChange(event)} />

                </div>

                <div>
                    <label htmlFor="weight"> Peso: </label>
                    <input type="number" placeholder="Indica el peso" value={pokemondata.weight} name="weight" onChange={(event) => handleChange(event)} />

                </div>

                <label htmlFor="img"> Imagen Pokemon: </label>
                <input type="text" placeholder="Ingresa una foto" value={pokemondata.img} name="img" onChange={(event) => handleChange(event)} />
                <div>
                </div>


                <label> Selecciona el tipo de pokemon: </label>
                <select onChange={(event) => handleSelect(event)}>
                    {
                        types.map((type) => (
                            <option
                                value={type.name}
                                key={type.id}
                                disabled={pokemondata.types && pokemondata.types.includes(type.name)}
                            >
                                {type.name}
                            </option>
                        ))
                    }
                </select>
              <br />
                 <text>

                    Tipos seleccionados:{" "}
                 
                    {
                    pokemondata.types.map((el, index) => (
                        <div>
                            <span key={index}>{el}</span>
                            <span onClick={()=> handleDelete(el)}> X </span>
                        </div>
                    ))
                    }
                </text> 
                <br />
                <button type="submit"> Crear personaje </button>
            </form>
        </div>
    )
}


export default PokemonCreated