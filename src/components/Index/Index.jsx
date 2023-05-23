import React, { useState, useCallback } from "react";
import { ContactUs } from "../ContactUs/ContactUs";
import { Cards } from "../Card_Categorias/Cards";
import { Popup } from "../Popup";
import Stats from "../Estadisticas/stats";
import MapView from "../Mapa/MapView";
import "../Index/style-index.css";
import { DropDown } from "../DropDown/DropDown";
import logoUno from "../../assets/slide-1.jpg";
import logoDos from "../../assets/slide-2.jpg";
import logoTres from "../../assets/slide-3.jpg";
import logoCuatro from "../../assets/slide-4.jpg";
import logoCinco from "../../assets/slide-5.jpg";
import logoSeis from "../../assets/slide-6.jpg";
import bell from "../../assets/logos/bell.png";
import face from "../../assets/SocialMedia/face-w.svg";
import insta from "../../assets/SocialMedia/insta-w.svg";
import twit from "../../assets/SocialMedia/twitter-w.svg";

// import Swiper core and required modules
import { A11y, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export const Index = () => {
  let user = localStorage.getItem("user");
  let company = window.localStorage.getItem("company");
  let [isContainerActive, setIsContainerActive] = useState(false);
  let [imagenPopup, setImagenPopup] = useState("");
  let [textPopup, setTextPopup] = useState("");

  const closedToken = () => {
    if (user) {
      localStorage.removeItem("user");
      localStorage.removeItem("auth");
      setTimeout(() => {
        window.location.href = "/";
      }, 0.5);
    }
  };

  const tarjetaAbrir = (imagen, commit) => {
    console.log("Entra a la funcion!", imagen);
    setIsContainerActive(true);
    setImagenPopup(imagen);
    setTextPopup(commit);
    console.log(isContainerActive);
    console.log(commit);
    // overlay.classList.add('active');
    // popup.classList.add('active');
  };

  const cerrarPopup = useCallback((valor) => {
    setIsContainerActive(valor);
  }, []);

  return (
    <div>
      <header className="header-index">
        <nav className="nav-index">
          <img
            src="../../../src/assets/logos/log-blanco.svg"
            id="img-logo"
            alt=""
          />

          <div class="content-nav">
            <a href="#">Inicio </a>
            <a href="#">Acerca de </a>
            <a href="#categorias">Categorias </a>
            {user ? (
              <>
                <img src={bell} alt="" />
                <div className="dropDown">
                  <p href="" id="enter1">
                  {user.charAt(0).toUpperCase() + user.slice(1)}
                </p>
                  <DropDown />
                </div>
              </>
            ) : (
              <>
                {company ? (
                  <>
                   <a href="" id="enter1">
                  {company.charAt(0).toUpperCase() + company.slice(1)}
                </a>
                <div className="dropDown">
                  <DropDown />
                </div>
                  </>
                ) : (
                  <>
                    <a href="/login" id="log">
                      Ingresa Aquí <hr></hr>
                    </a>
                    <a href="/registro" id="register">
                      Registrate{" "}
                    </a>
                  </>
                )}
              </>
            )}
          </div>
        </nav>
        <section className="textos-header">
          <h1>YourEvent</h1>
          <h2>
            Eventos en el Quindío <br></br> A solo un click
          </h2>
        </section>
        <div className="wave" style={{ height: "150px", overflow: "hidden" }}>
          <svg
            viewBox="0 0 500 150"
            preserveAspectRatio="none"
            style={{
              height: "100%",
              width: "100%",
            }}
          >
            <path
              d="M0.00,49.98 C150.00,150.00 349.20,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
              style={{ stroke: "none", fill: "#fff" }}
            ></path>
          </svg>
        </div>
      </header>
      <main>
        <section className="statas">
          <h2 className="h2-title"> Estadisticas</h2>
          <div className=" estadist">
            <div className="grafico">
              <Stats />
            </div>
            <div className="map">
              <MapView />
            </div>
          </div>
        </section>

        <section className="categorias" id="categorias">
          <div className="titulo_bar">
            <h2 className="h2-title">
              {" "}
              Categorías <hr />
            </h2>
            <div class="bar-nav">
              <input
                type="text"
                className="input-nav"
                placeholder="Buscar..."
              />
              <img id="search-icon" src="../../../src/assets/search.svg" />
            </div>
          </div>{" "}
          <Cards />
        </section>
      </main>
      <section>
        <div className="content-link-register">
          <a href="/RegistroEmpresa" id="log">
            SI TIENES UN EMPRENDIMIENTO, INGRESA AQUÍ! <hr></hr>
          </a>
        </div>
      </section>
      <section className="slider" id="slider">
        <h2 className="h2-title">
          Eventos Destacados <hr></hr>
        </h2>

        <div className="swiper-container home-slider">
          <div className="swiper-wrapper">
            <Swiper
              modules={[A11y, Autoplay]}
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={1}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2,
                slideShadows: true,
              }}
              spaceBetween={0}
              loop={true}
              breakpoints={{
                100: {
                  slidesPerView: 1,
                },
                700: {
                  slidesPerView: 2,
                },
                1050: {
                  slidesPerView: 3,
                },
              }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
            >
              <SwiperSlide className="swiper-slide">
                <img src={logoUno} alt="" width="400px" />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <img src={logoDos} alt="" width="400px" />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <img src={logoTres} alt="" width="400px" />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <img src={logoCuatro} alt="" width="400px" />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <img src={logoCinco} alt="" width="400px" />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <img src={logoSeis} alt="" width="400px" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>

      <br />
      <section className="contenedor sobre-nosotros">
        <h2 className="titulo">
          Nuestro Producto <hr />
        </h2>
        <div className="contenedor-sobre-nosotros">
          <img
            src="../../../src/assets/homePage.svg"
            alt=""
            className="imagen-about-us"
          />
          <div className="contenido-textos">
            <h3>
              <span>1</span>Vive una nueva experiencia!
            </h3>
            <p>
              YourEvent es una innovadora aplicación web diseñada para
              simplificar la creación y búsqueda de eventos en la hermosa región
              del Quindío. esta plataforma ofrece a los usuarios una forma
              conveniente de descubrir y participar en diversos eventos que
              tienen lugar en la zona.
            </p>

            <h3>
              <span>2</span>Conoce mejor
            </h3>
            <p>
              Al utilizar YourEvent, los organizadores de eventos también se
              benefician de una herramienta poderosa para promover sus
              actividades. Con solo unos pocos clics, pueden crear y
              personalizar anuncios detallados de sus eventos, que se mostrarán
              en la aplicación para que los usuarios interesados puedan
              encontrarlos fácilmente.
            </p>

            <h3>
              <span>3</span>Explora y dejate llevar
            </h3>
            <p>
              Ya sea que seas un amante de la cultura, un ávido asistente a
              conciertos o simplemente busques actividades emocionantes en el
              Quindío.
            </p>

            <h3>
              <span>4</span>Recuerda siempre estaremos contigo
            </h3>
            <p>
              YourEvent es tu compañero ideal. Descubre la diversidad de eventos
              disponibles, organiza tus propias actividades y forma parte de una
              comunidad en crecimiento que celebra y disfruta de todo lo que
              esta hermosa región tiene para ofrecer.
            </p>
          </div>
        </div>
      </section>

      <footer className="foo-index">
        <ContactUs />
      </footer>
    </div>
  );
};
