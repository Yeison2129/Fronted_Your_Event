import React from "react";
import "./dashc.css";
import { Link } from "react-router-dom";


export const Dashc = () => {
  return (
      
    <div className="dash-config">
      <div className="aside-config">
        <div className="ti-dashconfig">
          <i className="fa fa-solid fa-gear fa-spin fa-2xl" />
          <h3>CONFIGURACIONES</h3>
        </div>
        <ul>
          {" "}
          <Link to="/editap">
            <li className="li-style-dash">
              <i className="fa fa-solid fa-user" />
              Mi perfil
            </li>
          </Link>
          <Link to="/password">
            <li className="li-style-dash">
              <i className="fa  fa-solid fa-lock" />
              Cambiar Contraseña
            </li>
          </Link>
          <Link to="/DeleteAccount">
            <li className="li-style-dash">
              <i className="fa fa-solid fa-trash" />
              Eliminar cuenta
            </li>
          </Link>
          <Link to="">
            <li className="li-style-dash">
              <i className=" fa fa-solid fa-info" />
              Ayuda
            </li>
          </Link>
          <Link to="/">
            <li className="li-style-dash">
              <i className="fa fa-solid fa-arrow-left" />
              Volver al inicio
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};
