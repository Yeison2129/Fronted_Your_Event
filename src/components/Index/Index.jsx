import React, { useState, useCallback } from "react";
import { ContactUs } from "../ContactUs/ContactUs";
import { Cards } from "../Card_Categorias/Cards";
import { Popup } from "../Popup";
import Stats from "../Estadisticas/stats"
import logo from "../../assets/logo-your-event.svg";
import "../Index/style-index.css";
import { DropDown } from "../DropDown/DropDown";
import { AiFillFileZip } from "react-icons/ai";
import logoUno from '../../assets/slide-1.jpg'
import logoDos from '../../assets/slide-2.jpg'
import logoTres from '../../assets/slide-3.jpg'
import logoCuatro from '../../assets/slide-4.jpg'                      
import logoCinco from '../../assets/slide-5.jpg'
import logoSeis from '../../assets/slide-6.jpg'

// import Swiper core and required modules
import { A11y, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


export const Index = () => {
    let user = localStorage.getItem("user");
    let [isContainerActive, setIsContainerActive] = useState(false);
    let [imagenPopup, setImagenPopup] = useState("");
    let [textPopup, setTextPopup] = useState("");

    const closedToken = () => {
        if (user) {
        localStorage.removeItem("user")
        localStorage.removeItem("auth")
        setTimeout(() => {
            window.location.href = "/"
        }, 0.500);
        }
    }

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
    <header>
        <nav className="nav-index">
            <img src="../../../src/assets/log-blanco.svg" id="img-logo" alt="" />
            <div class="bar-nav">
                <input type="text" className="input-nav" placeholder="Buscar..." />
                <img id='search-icon' src='../../../src/assets/search.svg' />
            </div>
            <div class="content-nav">
              <a href="#">Inicio </a>
              <a href="#">Acerca de </a>
              <a href="#categorias">Categorias </a>
              {user ? (
                <>  
                    <a href="" id="enter1">Usuario: {user.charAt(0).toUpperCase() + user.slice(1)}</a>
                    <div className="dropDown">
                      <DropDown/>
                    </div>
                    
                </>
              ) : (
              <>
                  <a href="/login" id="log">Ingresa Aquí <hr></hr></a>
                  <a href="/registro" id="register">Registrate </a>
              </>
              )}
            </div>

        </nav>
        <section className="textos-header">
            <h1>YourEvent</h1>
            <h2>Eventos en el Quindío <br></br> A solo un click</h2>
        </section>
        <div className="wave" style={{height: "150px", overflow: "hidden"}}>
        <svg viewBox="0 0 500 150" preserveAspectRatio="none"
                style={{
                height: "100%",
                width: "100%"
                }}>
                <path d="M0.00,49.98 C150.00,150.00 349.20,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
                    style={{stroke: "none", fill: "#fff"}}></path>
            </svg></div>
    </header>
    <main>
        <section className="contenedor sobre-nosotros">
            <h2 className="titulo">Nuestro Producto</h2>
            <div className="contenedor-sobre-nosotros">
                <img src="../../../src/assets/ilustracion4.svg" alt="" className="imagen-about-us"/>
                <div className="contenido-textos">
                    <h3><span>1</span>Los mejores productos</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt veniam eius aspernatur ad
                        consequuntur aperiam minima sed dicta odit numquam sapiente quam eum, architecto animi pariatur,
                        velit doloribus laboriosam ut.</p>
                        <h3><span>2</span>Los mejores productos</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt veniam eius aspernatur ad
                            consequuntur aperiam minima sed dicta odit numquam sapiente quam eum, architecto animi pariatur,
                            velit doloribus laboriosam ut.</p>
                            <h3><span>3</span>Los mejores productos</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt veniam eius aspernatur ad
                                consequuntur aperiam minima sed dicta odit numquam sapiente quam eum, architecto animi pariatur,
                                velit doloribus laboriosam ut.</p>
                    <h3><span>4</span>Los mejores productos</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt veniam eius aspernatur ad
                        consequuntur aperiam minima sed dicta odit numquam sapiente quam eum, architecto animi pariatur,
                        velit doloribus laboriosam ut.</p>
                </div>
            </div>
        </section>
        /<section>
        <h2 className="titulo">Eventos Destacados</h2>
</section> 
    <section className="home" id="home" style={{
      padding : "0 0 0 50px",
    }}>
          <div className="swiper-container home-slider">
            <div className="swiper-wrapper">
              <Swiper
                modules={[A11y, Autoplay]}
                effect={'coverflow'}
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
                spaceBetween={10}
                loop={true}
                breakpoints={{
                  0: {
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
                  disableOnInteraction:false,
                }}
              >
                <SwiperSlide className="swiper-slide" ><img src={logoUno} alt="" width="400px"/></SwiperSlide>
                <SwiperSlide className="swiper-slide" ><img src={logoDos} alt=""  width="400px"/></SwiperSlide>
                <SwiperSlide className="swiper-slide" ><img src={logoTres} alt=""  width="400px"/></SwiperSlide>
                <SwiperSlide className="swiper-slide" ><img src={logoCuatro} alt=""  width="400px"/></SwiperSlide>
                <SwiperSlide className="swiper-slide" ><img src={logoCinco} alt=""  width="400px"/></SwiperSlide>
                <SwiperSlide className="swiper-slide" ><img src={logoSeis} alt=""  width="400px"/></SwiperSlide>
              </Swiper>
            </div>
          </div>
        </section>
    </main>
  /<section>
    
        <div className="content-link-register">

        <a href="/RegistroEmpresa" id="log">SI TIENES UN EMPRENDIMIENTO, INGRESA AQUÍ!  <hr></hr></a> 

        </div>

    </section>

    <div className="grafico">
          <Stats/>
    </div>

    <section className="categorias" id="categorias">
    <Cards/>
    </section>

    <hr />
    <br />
    <section className='contact-us'>
            <ContactUs/>
    </section>
    <div style={{ height: "150px", overflow: "hidden" }}>
        <svg
          viewBox="0 0 1440 190"
          preserveAspectRatio="none"
          style={{ height: "100%", width: "100%" }}
        >
          <path
            d="M0,0L60,28.5C120,57,240,114,360,133C480,152,600,133,720,114C840,95,960,76,1080,82.3C1200,89,1320,120,1440,110.8C1560,101,1680,51,1800,50.7C1920,51,2040,101,2160,120.3C2280,139,2400,127,2520,126.7C2640,127,2760,139,2880,126.7C3000,114,3120,76,3240,72.8C3360,70,3480,101,3600,123.5C3720,146,3840,158,3960,139.3C4080,120,4200,70,4320,41.2C4440,13,4560,6,4680,3.2C4800,0,4920,0,5040,6.3C5160,13,5280,25,5400,47.5C5520,70,5640,101,5760,95C5880,89,6000,44,6120,50.7C6240,57,6360,114,6480,142.5C6600,171,6720,171,6840,145.7C6960,120,7080,70,7200,69.7C7320,70,7440,120,7560,139.3C7680,158,7800,146,7920,133C8040,120,8160,108,8280,85.5C8400,63,8520,32,8580,15.8L8640,0L8640,190L8580,190C8520,190,8400,190,8280,190C8160,190,8040,190,7920,190C7800,190,7680,190,7560,190C7440,190,7320,190,7200,190C7080,190,6960,190,6840,190C6720,190,6600,190,6480,190C6360,190,6240,190,6120,190C6000,190,5880,190,5760,190C5640,190,5520,190,5400,190C5280,190,5160,190,5040,190C4920,190,4800,190,4680,190C4560,190,4440,190,4320,190C4200,190,4080,190,3960,190C3840,190,3720,190,3600,190C3480,190,3360,190,3240,190C3120,190,3000,190,2880,190C2760,190,2640,190,2520,190C2400,190,2280,190,2160,190C2040,190,1920,190,1800,190C1680,190,1560,190,1440,190C1320,190,1200,190,1080,190C960,190,840,190,720,190C600,190,480,190,360,190C240,190,120,190,60,190L0,190Z"
            style={{ stroke: "none", fill: "#5e0c61" }}
          ></path>
        </svg>
      </div>
        <footer className="foo-index">
        <div className="cont">
          <div className="icon">
            <p>YOUREVENT</p>
            <img src={logo} alt="img" title="logo" />
          </div>
          <div className="li">
            <li  id="li-li">
              <a href="">Terminos y condiciones</a>
            </li>
            <li id="li-li">
              <a href="">¿Ayuda?</a>
            </li>
            <li id="li-li">
              <a href="">Sobre nosotros</a>
            </li>
            <li id="li-li">
              <a href="">features</a>
            </li>
          </div>
          <div className="li-contacto">
            <li id="li-li">
              <p>Contactanos</p>
            </li>
            <li id="li-li">
              <p>324 3174109</p>
            </li>
            <li id="li-li">
              <p>321 8818728</p>
            </li>
            <li id="li-li">
              <p>323 2930273</p>
            </li>
            <li id="li-li">
              <p>301 4015599</p>
            </li>
          </div>
        </div>
        <div className="cont">
          <img src="" alt="" />
        </div>
        <div className="foo">
          <div>
            <p>Copyright &copy 2022</p>{" "}
          </div>
        </div>
      </footer>
    </div>
)
}



