import React from 'react'
import { DropDown } from "../../DropDown/DropDown";
import { Link } from "react-router-dom";
import './asistir.css'
import { CardViewA } from './Card-viewA/Card-viewA';
export const Asistir = () => {
  let user = localStorage.getItem("user");
  let company = window.localStorage.getItem("company");
  // const sliders =[...document.querySelectorAll('.slider__body')];

  const closedToken = () => {
    if (user) {
      localStorage.removeItem("user");
      localStorage.removeItem("auth");
      setTimeout(() => {
        window.location.href = "/";
      }, 0.5);
    }
  };
  return (
    <div className="component-asist">
    <header className="header-SobreNosotros">
     <nav className="nav-index">
          <img
            src="https://res.cloudinary.com/dlfn93ikw/image/upload/v1685016494/YourEvent/log_blanco_mezgdr.png"
            id="img-logo"
            alt=""
          />

          <div className="content-nav">
            <Link to="/">Inicio </Link>
            <Link to="/SobreNosotros  ">Sobre Nosotros </Link>
          <Link to="/Help  ">Ayuda</Link>
 
            
          {user ? (
            <>
            <Link to=""><i className="fa fa-solid fa-bell" /></Link>
            <div className="dropDown"> 
            <p to="" id="enter1">
                {user.charAt(0).toUpperCase() + user.slice(1)}
              </p>
              <DropDown />
            </div>
            
            
            </>
          ) : (
            <>
              {company ? (
                <>
                <Link to="/asistir">Mis reservas</Link>

              {/* <Link to=""><i className="fa fa-solid fa-bell" /></Link> */}
              <div className="dropDown">
              <p to="" id="enter1">
                {company.charAt(0).toUpperCase() + company.slice(1)}
              </p>
                <DropDown />
              </div>
                </>
              ) : (
                <>
                  <Link to="/login" id="log">
                    Ingresa Aquí <hr></hr>
                  </Link>
                  <Link to="/registro" id="register">
                    Registrate{" "}
                  </Link>
                </>
              )}
            </>
          )}
            </div>
            
            </nav>  
            </header>
            <section className="content-asist">
                <div className="title-asist">
                    <h1>EVENTOS A LOS QUE ASISTIRÁS </h1>
                </div>
            <CardViewA/>
            </section>
   
    </div>
    
  )
}
