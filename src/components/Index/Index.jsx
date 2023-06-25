import React, { useState, useCallback, useEffect } from "react";
import { ContactUs } from "../ContactUs/ContactUs";
import { Popup } from "../Popup";
import Stats from "../Estadisticas/stats";
import MapView from "../Mapa/MapView";
import "../Index/style-index.css";
import { DropDown } from "../DropDown/DropDown";
import { CardView } from "../CardView/Card-view";
import logoUno from "../../assets/slide-1.jpg";
import logoDos from "../../assets/slide-2.jpg";
import logoTres from "../../assets/slide-3.jpg";
import logoCuatro from "../../assets/slide-4.jpg";
import logoCinco from "../../assets/slide-5.jpg";
import logoSeis from "../../assets/slide-6.jpg";
import face from "../../assets/SocialMedia/face-w.svg";
import insta from "../../assets/SocialMedia/insta-w.svg";
import twit from "../../assets/SocialMedia/twitter-w.svg";
import { Link } from "react-router-dom";
import LogoUno from "../../assets/armenia.jpg";
import LogoDos from "../../assets/pijao.jpg";
import LogoTres from "../../assets/quimbaya.jpg";
import LogoCuatro from "../../assets/calarca.png";
import LogoCinco from "../../assets/genova.jpg";
import LogoSeis from "../../assets/montenegro.jpg";
import LogoSiete from "../../assets/buenavista.jpg";
import LogoOcho from "../../assets/circasia.jpg";
import LogoNueve from "../../assets/cordoba.jpg";
import LogoDiez from "../../assets/filandia.jpg";
import LogoOnce from "../../assets/latebaida.jpg";
import LogoDoce from "../../assets/salento.jpg";
import { CardEventDest } from "../Card_CardEventsDest/Card-EventDest";
// import Swiper core and required modules
import { A11y, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { EventsRandom, getCompany, getUser } from "../../api/App";

export const Index = () => {
  const [traerUser, setTraerUser] = useState([]);
  const [traerCompany, setTraerCompany] = useState([]);
  const [traerEvento, setTraerEvento] = useState([]);

  let user = localStorage.getItem("user");
  let company = localStorage.getItem("company");

  const users = async () => {
    const response = await getUser();
    const userData = response.data.data.map((user) => ({
      ...user,
    }));
    setTraerUser(userData);
  };

  const eventsRandom = async()=>{
    const response = await EventsRandom();
    console.log(response);
    const DataEvent = response.data.data.map((event)=>({
      ...event,
    }))
    setTraerEvento(DataEvent);
  }

  const companys = async () => {
    const response = await getCompany();
    const companyData = response.data.data.map((company) => ({
      ...company,
    }));
    setTraerCompany(companyData);
  };
  useEffect(() => {
    users();
    companys();
    eventsRandom()
    
  }, []);

  return (
    <div>
      <header className="header-index">
        <nav className="nav-index">
          <img
            src="https://res.cloudinary.com/dlfn93ikw/image/upload/v1685016494/YourEvent/log_blanco_mezgdr.png"
            id="img-logo"
            alt=""
          />

          <div class="content-nav">
            <Link to="#">Inicio </Link>
            <Link to="/SobreNosotros  ">Sobre Nosotros </Link>
            <Link to="/Help  ">Ayuda</Link>

            {user ? (
              <>
                <div className="dropDown">
                  <p to="" id="enter1">
                    {traerUser.map((user) => `${user.nom_user}`)}
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
                        {traerCompany.map(
                          (company) => `${company.nom_empresa}`
                        )}
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
        <section className="textos-header">
          <h1>YourEvent</h1>
          <h2>
            Donde la magia de los eventos <br></br>cobra vida cobra vida en el
            Quindio
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
        <section className="categorias" id="categorias">
          <div className="titulo_bar">
            <h2 className="h2-title">
              {" "}
              Eventos <hr />
            </h2>
          </div>{" "}
          <div className="buscadorEventos ">
            <CardView />
          </div>
        </section>
        <section className="statas">
          <div className="titulo_bar">
            <h2 className="h2-title">
              {" "}
              Estadisticas
              <hr />
            </h2>
          </div>
          <div className=" estadist">
            <div className="grafico">
              <Stats />
            </div>
            <div className="map">
              <MapView />
            </div>
          </div>
        </section>
      </main>
      <div className="slider">
        <div className="titulo_bar">
          <h2 className="h2-title">
            {" "}
            Establecimientos que encontraras en el Quindio
            <hr />
          </h2>
        </div>
        <div className="slider-track">
          <div className="slide">
            <img src={LogoUno} alt="" />
          </div>
          <div className="slide">
            <img src={LogoDos} alt="" />
          </div>
          <div className="slide">
            <img src={LogoTres} alt="" />
          </div>
          <div className="slide">
            <img src={LogoCuatro} alt="" />
          </div>
          <div className="slide">
            <img src={LogoCinco} alt="" />
          </div>
          <div className="slide">
            <img src={LogoSeis} alt="" />
          </div>
          <div className="slide">
            <img src={LogoSiete} alt="" />
          </div>
          <div className="slide">
            <img src={LogoOcho} alt="" />
          </div>
          <div className="slide">
            <img src={LogoNueve} alt="" />
          </div>
          <div className="slide">
            <img src={LogoDiez} alt="" />
          </div>
          <div className="slide">
            <img src={LogoOnce} alt="" />
          </div>
          <div className="slide">
            <img src={LogoDoce} alt="" />
          </div>

          <div className="slide">
            <img src={LogoUno} alt="" />
          </div>
          <div className="slide">
            <img src={LogoDos} alt="" />
          </div>
          <div className="slide">
            <img src={LogoTres} alt="" />
          </div>
          <div className="slide">
            <img src={LogoCuatro} alt="" />
          </div>
          <div className="slide">
            <img src={LogoCinco} alt="" />
          </div>
          <div className="slide">
            <img src={LogoSeis} alt="" />
          </div>
          <div className="slide">
            <img src={LogoSiete} alt="" />
          </div>
          <div className="slide">
            <img src={LogoOcho} alt="" />
          </div>
          <div className="slide">
            <img src={LogoNueve} alt="" />
          </div>
          <div className="slide">
            <img src={LogoDiez} alt="" />
          </div>
          <div className="slide">
            <img src={LogoOnce} alt="" />
          </div>
          <div className="slide">
            <img src={LogoDoce} alt="" />
          </div>
        </div>
      </div>

      {user || company ? (
        <>
          <section className="slider" id="slider">
            <div className="titulo_bar">
              <h2 className="h2-title">
                {" "}
                Eventos destacados
                <hr />
              </h2>
            </div>

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
        </>
      ) : (
        <>
          <section>
            <div className="content-link-register">
              <Link to="/RegistroEmpresa" id="log">
                SI TIENES UN EMPRENDIMIENTO, INGRESA AQUÍ! <hr></hr>
              </Link>
            </div>
          </section>
          <section className="slider" id="slider">
            <div className="titulo_bar">
              <h2 className="h2-title">
                {" "}
                Eventos destacados
                <hr />
              </h2>
            </div>

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
                >{traerEvento.map((eventsRandom) => (
                  <SwiperSlide className="swiper-slide">
                    <div>
                    <CardEventDest/>
                    </div>
                  </SwiperSlide>
                ))}
                </Swiper>
              </div>
            </div>
          </section>

          <br />
          <section className="contenedor sobre-nosotros">
            <div className="titulo_bar">
              <h2 className="h2-title">
                {" "}
                Nuestros productos
                <hr />
              </h2>
            </div>
            <div className="contenedor-sobre-nosotros">
              <img
                src="https://res.cloudinary.com/dlfn93ikw/image/upload/v1685017660/YourEvent/homePage_pwgqcc.png"
                alt=""
                className="imagen-about-us"
              />
              <div className="contenido-textos">
                <h3>
                  <span>1</span>Vive una nueva experiencia!
                </h3>
                <p>
                  YourEvent es una innovadora aplicación web diseñada para
                  simplificar la creación y búsqueda de eventos en la hermosa
                  región del Quindío. esta plataforma ofrece a los usuarios una
                  forma conveniente de descubrir y participar en diversos
                  eventos que tienen lugar en la zona.
                </p>

                <h3>
                  <span>2</span>Conoce mejor
                </h3>
                <p>
                  Al utilizar YourEvent, los organizadores de eventos también se
                  benefician de una herramienta poderosa para promover sus
                  actividades. Con solo unos pocos clics, pueden crear y
                  personalizar anuncios detallados de sus eventos, que se
                  mostrarán en la aplicación para que los usuarios interesados
                  puedan encontrarlos fácilmente.
                </p>

                <h3>
                  <span>3</span>Explora y dejate llevar
                </h3>
                <p>
                  Ya sea que seas un amante de la cultura, un ávido asistente a
                  conciertos o simplemente busques actividades emocionantes en
                  el Quindío.
                </p>

                <h3>
                  <span>4</span>Recuerda siempre estaremos contigo
                </h3>
                <p>
                  YourEvent es tu compañero ideal. Descubre la diversidad de
                  eventos disponibles, organiza tus propias actividades y forma
                  parte de una comunidad en crecimiento que celebra y disfruta
                  de todo lo que esta hermosa región tiene para ofrecer.
                </p>
              </div>
            </div>
          </section>
        </>
      )}
      <footer className="foo-index">
        <ContactUs />
      </footer>
    </div>
  );
};
