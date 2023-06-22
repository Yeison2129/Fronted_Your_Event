import React, { useEffect, useState } from "react";
import "./Carrusel.css"
import imgC1   from "../../assets/color1.jpg";
import imgC2 from "../../assets/color2.jpg";
import imgC3 from "../../assets/color3.jpg";
import imgC4 from "../../assets/color4.jpg";
import imgc5 from "../../assets/color5.jpg";
import search from "../../assets/arrow.svg";
import img123 from "../../assets/arrowI.svg"



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

export const Carrusel = () => {
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

      <section className="slider-Carrusel">
        <div className="Carrusel__container container-Carrusel">
          <img src= {search} className="slider__arrow-SobreNosotros" id="before" onClick={()=> handlePrevious()} />

          <section className="slider__body slider__body--show-SobreNosotros" data-id="1">
          
            <div className="slider__picture-SobreNosotros">
              <img src={imgC1} alt="Brallan" className="slider__img-SobreNosotros" />
            </div>
          </section>

          <section className="slider__body" data-id="2">
          
            <div className="slider__picture-SobreNosotros">
              <img src={imgC2} alt="Brallan" className="slider__img-SobreNosotros" />
            </div>
          </section>

          <section className="slider__body" data-id="3">
          
            <div className="slider__picture-SobreNosotros">
              <img src={imgC3} alt="Brallan" className="slider__img-SobreNosotros" />
            </div>
          </section>
          
          <section className="slider__body" data-id="4">
          
            <div className="slider__picture-SobreNosotros">
              <img src={imgC4} alt="Brallan" className="slider__img-SobreNosotros" />
            </div>
          </section>
          
          <section className="slider__body" data-id="5">
            <div className="slider__picture-SobreNosotros">
              <img src={imgc5} alt="Brallan" className="slider__img-SobreNosotros" />
            </div>
          </section>


          <img src={img123} className="slider__arrow-SobreNosotros" onClick={ ()=> handleNext() } id="next" />
        </div>
      </section>

    </>
  );
};
