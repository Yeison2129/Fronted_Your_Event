import React from "react";
import "./dashc.css";
import { Link } from "react-router-dom";
 
export const Dashc = () => {
  return (
    <div className="dash-config">
       
      <div className="aside-config"> 
      <div className="ti-dashconfig">
      <i className="fa fa-solid fa-gear fa-spin" />

            <h3>CONFIGURACIONES</h3>     

        </div>
        <ul>
          <li className="li-style-dash">
            <i className="fa fa-solid fa-user" />
            <Link to="/editap">Mi perfil</Link>
          </li>

          <li className="li-style-dash">
            <i className="fa  fa-solid fa-lock" />
            <Link to="/password">Cambiar Contraseña</Link>
          </li>

          <li className="li-style-dash">
          <i className="fa fa-solid fa-trash" />        
          <Link to="">Eliminar cuenta</Link>
          </li>

          <li className="li-style-dash">
          <i className=" fa fa-solid fa-info" />   
          <Link to="">Ayuda</Link>
          </li>

          <li className="li-style-dash">
            <i className="fa fa-solid fa-arrow-left" />
            <Link to="/">Volver al inicio</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
