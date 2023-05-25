import React, { useEffect } from "react";
import { Formik, Form, Field } from "formik";
import "./SobreNosotros.css";
import swal from "sweetalert2";
import imgRegistro from "../../assets/registro-1.svg";
import { Link } from "react-router-dom";
import imgBrallan from "../../assets/Brallan.jpg";
import search from "../../assets/arrow.svg";
import img123 from "../../assets/arrowI.svg"
export const SobreNosotros = () => {

  return (
    <>
      <header className="header-SobreNosotros" id="inicio">
        <img src="https://res.cloudinary.com/dlfn93ikw/image/upload/v1685016494/YourEvent/log_blanco_mezgdr.png" alt="Logo" />

        <nav>
          <div className="contenedor head-SobreNosotros"></div>
        </nav>
      </header>

      <section id="centro">
        <div className="centro-box-SobreNosotros">
          <div className="centro-SobreNosotros"></div>
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
