import React, { useEffect } from "react";
import { Formik, Form, Field } from "formik";
import "./SobreNosotros.css"
import { DropDown } from "../DropDown/DropDown";

import swal from "sweetalert2";
import imgRegistro from "../../assets/registro-1.svg";
import { Link } from "react-router-dom";
import imgBrallan from "../../assets/Brallan.jpg";
import search from "../../assets/arrow.svg";
import img123 from "../../assets/arrowI.svg"
import Cards from "../Card_Categorias/Cards";


export const SobreNosotros = () => {
  let user = localStorage.getItem("user");
  let company = window.localStorage.getItem("company");

  const closedToken = () => {
    if (user) {
      localStorage.removeItem("user");
      localStorage.removeItem("auth");
      setTimeout(() => {
        window.location.href = "/";
      }, 0.5);
    }
  };
  // Aui va la logica de javascript

  return (
    <>
      <header className="header-SobreNosotros" id="inicio">
        <nav>
          <nav className="nav-index">
          <img
            src="https://res.cloudinary.com/dlfn93ikw/image/upload/v1685016494/YourEvent/log_blanco_mezgdr.png"
            id="img-logo"
            alt=""
          />

          <div class="content-nav">
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
            ) : (
              <>
                {company ? (
                  <>
                <Link to=""><i className="fa fa-solid fa-bell" /></Link>
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
        </nav>
      </header>

      <section id="centro-CONT">
      
    
     
        <div className="centro-box-SobreNosotros">
        <h1 id="centro-h1">Sobre Nosotros</h1>
        <p>
        En YourEvent nos apasiona conectar a las personas con experiencias
        inolvidables. Sabemos que la plubicacion creacion  y participación 
        en eventos puede ser un desafío, pero estamos aquí para hacerlo 
        más fácil, emocionante y personalizado para ti.
            </p>
        
        </div>

        <div className="section-derecha">
          <img className="img-SobreNosotros" src="https://res.cloudinary.com/dlfn93ikw/image/upload/v1685051115/YourEvent/IMG-20230523-WA0017_vjny3k.jpg" alt="" />
        </div>
      </section>


      <section id="centro">
      <h1 id="centro-h1">Conoce los valores y objetivos que nos mueven para construir una mejor comunidad </h1>
        
        <div className="centro-box-SobreNosotros">
        
        <Cards/>
        </div>
      </section>
    

      <section className="slider-SobreNosotros">
        <div className="slider__container container-SobreNosotros">
          <img src= {search} className="slider__arrow-SobreNosotros" id="before" />

          <section className="slider__body slider__body--show-SobreNosotros" data-id="1">
            <div className="slider__texts-SobreNosotros">
              <h2 className="subtitulo-SobreNosotros">hola mi nombre es Brallan Gonzalez</h2>
              <p className="slider__reviw-SobreNosotros">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Delectus reiciendis qui odio animi sequi veniam repudiandae
                corrupti asperiores, accusantium modi excepturi voluptas totam
                labore! Maiores ducimus dolorem delectus iure impedit!
              </p>
            </div>
            <div className="slider__picture-SobreNosotros">
              <img src={imgBrallan} alt="Brallan" className="slider__img-SobreNosotros" />
            </div>
          </section>

         

          <img src={img123} className="slider__arrow-SobreNosotros" id="next" />
        </div>
      </section>

      <footer className="footer-SobreNosotros" id="contacto">
        <div className="contenedor footer-content-SobreNosotros">
          <div className="contact-us-SobreNosotros">
            <h2 className="brand">YourEvent</h2>
            <p>Donde la magia de los eventos cobra vida en el Quindío.</p>
          </div>
          <div className="social-media-SobreNosotros">
            <a href="./" className="social-media-icon-SobreNosotros">
              <i className="fa fa-brands fa-facebook"></i>
            </a>

            <a href="./" className="social-media-icon-SobreNosotros">
              <i className="fa fa-brands fa-twitter"></i> 
            </a>

            <a href="./" className="social-media-icon-SobreNosotros">
              <i className="fa fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};
