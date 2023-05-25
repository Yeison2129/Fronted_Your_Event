import React, { useEffect } from "react";
import { Formik, Form, Field } from "formik";
import "../SobreNosotros/SobreNosotros.css";
import swal from "sweetalert2";
import imgRegistro from "../../assets/registro-1.svg";
import { Link } from "react-router-dom";
import imgBrallan from "../../assets/Brallan.jpg";
import search from "../../assets/arrow.svg";
export const SobreNosotros = () => {

  return (
    <>
      <header className="header" id="inicio">
        <img src="" alt="Logo" />

        <nav>
          <div className="contenedor head"></div>
        </nav>
      </header>

      <section id="centro">
        <div className="centro-box">
          <div className="centro"></div>
        </div>
      </section>

      <section className="slider">
        <div className="slider__container container">
          <img src= {search} className="slider__arrow" id="before" />

          <section className="slider__body slider__body--show" data-id="1">
            <div className="slider__texts">
              <h2 className="subtitulo">hola mi nombre es Brallan Gonzalez</h2>
              <p className="slider__reviw">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Delectus reiciendis qui odio animi sequi veniam repudiandae
                corrupti asperiores, accusantium modi excepturi voluptas totam
                labore! Maiores ducimus dolorem delectus iure impedit!
              </p>
            </div>
            <figure className="slider__picture">
              <img src={imgBrallan} alt="Brallan" className="slider__img" />
            </figure>
          </section>

          {/* Resto del contenido del slider... */}

          <img src="assets/arrowI.svg" className="slider__arrow" id="next" />
        </div>
      </section>

      <footer id="contacto">
        <div className="contenedor footer-content">
          <div className="contact-us">
            <h2 className="brand">YourEvent</h2>
            <p>Donde la magia de los eventos cobra vida en el Quindío.</p>
          </div>
          <div className="social-media">
            <a href="./" className="social-media-icon">
              <i className="bx bxl-twitter"></i>
            </a>

            <a href="./" className="social-media-icon">
              <i className="bx bxl-facebook"></i>
            </a>

            <a href="./" className="social-media-icon">
              <i className="bx bxl-instagram"></i>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};
