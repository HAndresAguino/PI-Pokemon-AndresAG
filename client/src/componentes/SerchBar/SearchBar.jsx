import { useState } from "react";
import { useDispatch } from "react-redux";
import { getAllpokemonsName } from "../../redux/actions";
import React from "react";
import style from './Searchbar.module.css';

const SearchBar = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      dispatch(getAllpokemonsName(name));
      setName('');
    }
  };

  // Guardo en mi estado local lo que se escribe en el input
  function handleName(event) {
    setName(event.target.value);
  }

  // Ahora la función del botón
//   function handleClickSearchButton(event) {
//     console.log("Submit clicked");
//     dispatch(getAllpokemonsName(name));
//   }

  return (
    <div className={style.box}>
      <input
      
        className={style.input}
        type="text"
        placeholder="Buscar pokemon..."
        value={name}
        onChange={(event) => handleName(event)}
        onKeyDown = {handleKeyPress}
      />
      {/* <button
        type="submit"
        className={style.ytb}
        onClick={(event) => handleClickSearchButton(event)}
      >
        Buscar
      </button> */}
    </div>
  );
};

export default SearchBar;


