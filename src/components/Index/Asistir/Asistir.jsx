import React from 'react'
import { DropDown } from "../../DropDown/DropDown";
import { Link } from "react-router-dom";
import './asistir.css'
export const Asistir = () => {
        let user = localStorage.getItem("user");
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
    <div className="header-SobreNosotros">
     <nav className="nav-index">
          <img
            src="https://res.cloudinary.com/dlfn93ikw/image/upload/v1685016494/YourEvent/log_blanco_mezgdr.png"
            id="img-logo"
            alt=""
          />

          <div className="content-nav">
            <Link to="/">Inicio </Link>
            <Link to="/SobreNosotros  ">Sobre Nosotros </Link>
            
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
            ):null}

        

            </div>
            
            </nav>  
            </div>
            <section className="content-asist">
                <div className="title-asist">
                    <h1>EVENTOS A LOS QUE ASISTIRÁS </h1>
                </div>
            </section>
   
    </div>
    
  )
}
