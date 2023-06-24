import React, { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import "./SobreNosotros.css"
import { DropDown } from "../DropDown/DropDown";

import swal from "sweetalert2";
import imgRegistro from "../../assets/registro-1.svg";
import { Link, useNavigate } from "react-router-dom";
import imgBrallan from "../../assets/Brallan.jpg";
import imgKevin from "../../assets/Kevin.jpg";
import imgMariana from "../../assets/Mariana.jpg";
import imgValentina from "../../assets/Valentina.jpg";
import imgYeison from "../../assets/Yeison.jpg";
import search from "../../assets/arrow.svg";
import img123 from "../../assets/arrowI.svg"
import Cards from "../Card_Categorias/Cards";


function changePosition(sliders, currentElement, change) {
  console.log(sliders)
  if (currentElement) {
    console.log(currentElement)
    const currentElementId = Number(currentElement.dataset.id);
    let newValue = currentElementId + change;

    if (newValue === 0 || newValue > sliders.length) {
      newValue = newValue === 0 ? sliders.length : 1;
    }

    sliders[currentElementId - 1].classList.toggle('slider__body--show-SobreNosotros');
    sliders[newValue - 1].classList.toggle('slider__body--show-SobreNosotros');
    
  }
};

export const SobreNosotros = () => {
  const navigate= useNavigate()
  let user = localStorage.getItem("user");
  let company = window.localStorage.getItem("company");
  // const sliders =[...document.querySelectorAll('.slider__body')];

  const closedToken = () => {
    if (user) {
      localStorage.removeItem("user");
      localStorage.removeItem("auth");
      setTimeout(() => {
        navigate("/");
      }, 0.5);
    }
  };
  // Aui va la logica de javascript
  const handleNext = () => {
  const sliders = [...document.querySelectorAll('.slider__body')];
  const currentElement = document.querySelector('.slider__body--show-SobreNosotros');
  changePosition(sliders, currentElement,1);
};

const handlePrevious = () => {
    const sliders = [...document.querySelectorAll('.slider__body')];
    const currentElement = document.querySelector('.slider__body--show-SobreNosotros');
    changePosition(sliders, currentElement, -1);
  };


  return (
    <>
      <header className="header-SobreNosotros" id="inicio">
        
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

      <section id="centro-CONT">
      
    
    
        <div className="centro-box-SobreNosotros">
        <div className="section-izq">
        <h1 id="centro-h1">Sobre Nosotros</h1>

          <p>
        En YourEvent nos apasiona conectar a las personas con experiencias
        inolvidables. Sabemos que la plubicacion creacion  y participación 
        en eventos puede ser un desafío, pero estamos aquí para hacerlo 
        más fácil, emocionante y personalizado para ti.
            </p>
        
        </div>
        
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
          <img src= {search} className="slider__arrow-SobreNosotros" id="before" onClick={()=> handlePrevious()} />

          <section className="slider__body slider__body--show-SobreNosotros" data-id="1">
            <div className="slider__texts-SobreNosotros">
              <h2 className="subtitulo-SobreNosotros">Hola mi nombre es Brallan Gonzalez</h2>
              <p className="slider__reviw-SobreNosotros">
              Tengo 20 años y actualmente vivo en Calará. Soy desarrollador backend y QA en el 
              equipo de YourEvent, 
              donde me encargo de asegurar la calidad y funcionalidad de nuestros aplicativo.
              </p>
            </div>
            <div className="slider__picture-SobreNosotros">
              <img src={imgBrallan} alt="Brallan" className="slider__img-SobreNosotros" />
            </div>
          </section>

          <section className="slider__body" data-id="2">
            <div className="slider__texts-SobreNosotros">
              <h2 className="subtitulo-SobreNosotros">Hola mi nombre es Kevin Herrera</h2>
              <p className="slider__reviw-SobreNosotros">
                Tengo 19 años y vivo en Montenegro. Me apasiona el desarrollo frontend y me encargo de adecuar la pagina a diferentes dispositivos. Además de mi experiencia en desarrollo, también me especializo en la documentación del proyecto, lo cual me permite comunicar eficientemente los detalles técnicos y las funcionalidades del software que desarrollamos.
              </p>
            </div>
            <div className="slider__picture-SobreNosotros">
              <img src={imgKevin} alt="Brallan" className="slider__img-SobreNosotros" />
            </div>
          </section>

          <section className="slider__body" data-id="3">
            <div className="slider__texts-SobreNosotros">
              <h2 className="subtitulo-SobreNosotros">Hola mi nombre es Mariana Valencia</h2>
              <p className="slider__reviw-SobreNosotros">
                Tengo 18 años y resido en Calarcá. Me apasiona el diseño y desarrollo de interfaces gráficas en el ámbito del frontend. Como jefa en frontend, me dedico a liderar y coordinar equipos de trabajo para crear experiencias visuales atractivas y funcionales. Además, tengo habilidades sólidas en el diseño de interfaces intuitivas y amigables.
              </p>
            </div>
            <div className="slider__picture-SobreNosotros">
              <img src={imgMariana} alt="Brallan" className="slider__img-SobreNosotros" />
            </div>
          </section>
          
          <section className="slider__body" data-id="4">
            <div className="slider__texts-SobreNosotros">
              <h2 className="subtitulo-SobreNosotros">Hola mi nombre es Valentina andrade</h2>
              <p className="slider__reviw-SobreNosotros">
                Tengo 18 años y vivo en Calarcá. Me desempeño como Scrum Master y también tengo experiencia en el desarrollo frontend. Como Scrum Master, mi rol principal es asegurar que los equipos de desarrollo sigan las prácticas ágiles de Scrum y alcancen sus objetivos de manera eficiente.
              </p>
            </div>
            <div className="slider__picture-SobreNosotros">
              <img src={imgValentina} alt="Brallan" className="slider__img-SobreNosotros" />
            </div>
          </section>
          
          <section className="slider__body" data-id="5">
            <div className="slider__texts-SobreNosotros">
              <h2 className="subtitulo-SobreNosotros">Hola mi nombre es Yeison david Castiblanco</h2>
              <p className="slider__reviw-SobreNosotros">
                Tengo 18 años y resido en Calarcá. Me especializo como Jefe en el área de Backend y Bases de Datos. Mi rol principal es liderar y supervisar el desarrollo en la creación de la lógica y funcionalidad detrás del aplicativo. Tengo amplios conocimientos en el desarrollo de servidores, APIs y en el manejo de bases de datos, asegurando un almacenamiento y gestión eficiente de la información.
              </p>
            </div>
            <div className="slider__picture-SobreNosotros">
              <img src={imgYeison} alt="Brallan" className="slider__img-SobreNosotros" />
            </div>
          </section>


          <img src={img123} className="slider__arrow-SobreNosotros" onClick={ ()=> handleNext() } id="next" />
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
