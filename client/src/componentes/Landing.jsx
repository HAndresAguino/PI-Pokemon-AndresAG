import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getTypes } from '../redux/actions';
import style from '../componentes/Landing.module.css';
import video from '../Video/videoLanding.mp4';

const Landing = () => {
  const dispatch = useDispatch();

  const handleButtonIngresar = () => {
    dispatch(getTypes());
  };

  return (
    <div className={style.landingpage}>
      <video className={style.videobackground} autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </video>
      <h4 className={style['landing-title']}>PI POKEMON HELMAN AGUIÑO</h4>
      <div className={style['button-container']}>
        <NavLink to="/home">
          <button
            className={`${style.button2} ${style.center}`} // Combina las clases para los estilos del botón
            onClick={handleButtonIngresar}
          >
            Ingresar
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Landing;
