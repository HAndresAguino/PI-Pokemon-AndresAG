import React from "react";
import styles from "./Paginado.module.css";

function Paginado({ personajesPorPg, allPokemons, paginado, paginaActual }) {
  const paginaNumbers = [];

  for (let i = 1; i <= Math.ceil(allPokemons / personajesPorPg); i++) {
    paginaNumbers.push(i);
  }

  return (
    <nav className={styles.nav}>
      <ul>
        {paginaNumbers?.map((numeroDePagina) => (
          <li key={numeroDePagina} style = {{color: "white"}}>
            <button onClick={() => paginado(numeroDePagina)}>{numeroDePagina}</button>
          </li>
        ))}
      </ul>
    </nav>
  );
}


//Este componente renderiza los números de la pagina
export default Paginado