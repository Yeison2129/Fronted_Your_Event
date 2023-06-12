import React, { useState } from "react";
import "./dashc.css";
import { Link } from "react-router-dom";
import { DeleteEventsCompany, deleteCompany, deleteUser } from "../../../api/App";
import Swal from "sweetalert2";

export const Dashc = () => {
  const [asideVisible, setAsideVisible] = useState(true);
  const toggleAside = () => {
    setAsideVisible(!asideVisible);
  };

  let company = localStorage.getItem("company")
  let user = localStorage.getItem("user")

  const deleteUser = async () => {
    Swal.fire({
      title: "¿Deseas eliminar tu cuenta de Your Event?",
      text: "Dale OK para confirmar",
      icon: "question",
      showCancelButton: true,
      botonAcept: "Sí",
      botonCancel: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        EliminarUsuario(); // Llama a la función handleYes() cuando se presiona el botón "Sí"
      }
    });
  };

  const EliminarUsuario = async () => {
    deleteUser();
    Swal.fire({
      title: "Cuenta eliminada exitosamente",
      text: "",
      icon: "success",
      botonAcept: "Ok",
    })
    localStorage.clear();
    setTimeout(() => {
      window.location.href = "/";
      // window.location.href = "/password"
    }, 2000);
  };



  const DeleteCompany = async()=>{
    Swal.fire({
      title: "¿Deseas eliminar tu cuenta de Your Event?",
      text: "Dale OK para confirmar",
      icon: "question",
      showCancelButton: true,
      botonAcept: "Sí",
      botonCancel: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        EliminarCompany(); // Llama a la función handleYes() cuando se presiona el botón "Sí"
      }
    });
  };
  

  const EliminarCompany = async () => {
    deleteCompany();
    DeleteEventsCompany();
    localStorage.clear();
    setTimeout(() => {
      window.location.href = "/";
    }, 0.5);
  };

  return (
    <>
      {user ? (
          <div className="dash-config">
            <button className="toggle-button" onClick={toggleAside}>
              <i className="fa fa-regular fa-sliders" />
            </button>
            <div className={`aside-config ${asideVisible ? "" : "hidden"}`}>
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
                <button onClick={deleteUser}>
                  <li className="li-style-dash">
                    <i className="fa fa-solid fa-trash" />
                    Eliminar cuenta
                  </li>
                </button>
                <Link to="/Ayuda">
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
      ) : company ? (
           <div className="dash-config">
            <button className="toggle-button" onClick={toggleAside}>
              <i className="fa fa-regular fa-sliders" />
            </button>
            <div className={`aside-config ${asideVisible ? "" : "hidden"}`}>
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
                <button onClick={DeleteCompany}>
                  <li className="li-style-dash">
                    <i className="fa fa-solid fa-trash" />
                    Eliminar cuenta
                  </li>
                </button>
                <Link to="/Ayuda">
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
      ):null}
    </>
  );
};