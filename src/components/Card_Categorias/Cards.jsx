// sfc -> Snippet for arrow function
import React, { useRef, useState } from 'react';
import "../Card_Categorias/cards_categorias.css";

export const Cards = ({dataImage}) => {

    const cardRef = useRef(null);
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const [mouseX, setMouseX] = useState(0);
    const [mouseY, setMouseY] = useState(0);
    const [mouseLeaveDelay, setMouseLeaveDelay] = useState(null);

    const handleMouseMove = (e) => {
        const { offsetLeft, offsetTop } = cardRef.current;
        const cardWidth = cardRef.current.offsetWidth;
        const cardHeight = cardRef.current.offsetHeight;
        setMouseX(e.pageX - offsetLeft - cardWidth / 2);
        setMouseY(e.pageY - offsetTop - cardHeight / 2);
    };

    const handleMouseEnter = () => {
        clearTimeout(mouseLeaveDelay);
    };

    const handleMouseLeave = () => {
        const delay = setTimeout(() => {
        setMouseX(0);
        setMouseY(0);
        }, 1000);
        setMouseLeaveDelay(delay);
    };

    const mousePX = mouseX / width;
    const mousePY = mouseY / height;
    const rX = mousePX * 30;
    const rY = mousePY * -30;
    const tX = mousePX * -40;
    const tY = mousePY * -40;

    return (
        <div className="container-category" >
            <div
                className="cards-wrap"
                onMouseMove={handleMouseMove}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                ref={cardRef}
            >
            <div className="cards" style={{'transform': `rotateY(${rX}deg) rotateX(${rY}deg)`}} >
                <div className="cards-bg" style={{'transform': `translateX(${tX}px) translateY(${tY}px)`}} ></div>
                <div className="cards-info">
                    <h1 slot="header">Musica </h1>
                    <p slot="content">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
                </div>
            </div>
            
            <div
                className="cards-wrap"
                onMouseMove={handleMouseMove}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                ref={cardRef}
            >
                <div className="cards" style={{'transform': `rotateY(${rX}deg) rotateX(${rY}deg)`}} >
                <div className="cards-bg-one" style={{'transform': `translateX(${tX}px) translateY(${tY}px)`}} ></div>
                <div className="cards-info">
                    <h1 slot="header">Catering</h1>
                    <p slot="content">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
                </div>
            </div>

            <div
                className="cards-wrap"
                onMouseMove={handleMouseMove}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                ref={cardRef}
            >
                <div className="cards" style={{'transform': `rotateY(${rX}deg) rotateX(${rY}deg)`}} >
                <div className="cards-bg-two" style={{'transform': `translateX(${tX}px) translateY(${tY}px)`}} ></div>
                <div className="cards-info">
                    <h1 slot="header">Concursos</h1>
                    <p slot="content">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
                </div>
            </div>

            <div
                className="cards-wrap"
                onMouseMove={handleMouseMove}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                ref={cardRef}
            >
                <div className="cards" style={{'transform': `rotateY(${rX}deg) rotateX(${rY}deg)`}} >
                <div className="cards-bg-tree" style={{'transform': `translateX(${tX}px) translateY(${tY}px)`}} ></div>
                <div className="cards-info">
                    <h1 slot="header">Presentaciones</h1>
                    <p slot="content">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
                </div>
            </div>

            <div
                className="cards-wrap"
                onMouseMove={handleMouseMove}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                ref={cardRef}
            >
                <div className="cards" style={{'transform': `rotateY(${rX}deg) rotateX(${rY}deg)`}} >
                <div className="cards-bg-for" style={{'transform': `translateX(${tX}px) translateY(${tY}px)`}} ></div>
                <div className="cards-info">
                    <h1 slot="header">Lugares</h1>
                    <p slot="content">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
                </div>
            </div>



        </div>
        
    );
}

export default Cards;