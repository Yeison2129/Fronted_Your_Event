import React, { useEffect, useRef } from 'react'
import './cardview.css'
import { useState } from 'react'
import { getEvents } from '../../api/App'

export const CardView = () => {

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

  const [allEvents, setAllEvents] = useState([])

  const handleClick = (event) => {
    event.previewActive = !event.previewActive;
    setAllEvents([...allEvents]);
  }

  const closePreview = (event) => {
    event.previewActive = false;
    setAllEvents([...allEvents]);
  }

  const events = async () => {
    const response = await getEvents()
    setAllEvents(response.data.data.map(event => ({ ...event, previewActive: false })))
  }

  useEffect(() => {
    console.log(allEvents);
    events()
  }, [])

  return (
    <>
    <div className="all-cards-events">

      {allEvents.map((event) => (
        <div className="cardsEventos" key={event.id_event}>
          <div
                className="cards-wrap"
                onMouseMove={handleMouseMove}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                ref={cardRef}
                onClick={() =>handleClick(event)}
            >
            <div className="cards-index" style={{'transform': `rotateY(${rX}deg) rotateX(${rY}deg)`, backgroundImage: `url(${event.img_event})`}} >
                <div className="cards-bg-index" style={{'transform': `translateX(${tX}px) translateY(${tY}px)`}} ></div>
                <div className="cards-info">
                    <h1 slot="header"> {event.nom_event} </h1>
                    <p slot="content"> {event.description_event} </p>
                </div>
                </div>
            </div>
          {event.previewActive && (
            <div className={`products-preview active`} key={`preview-${event.id_event}`}>
              <div className="preview" data-target="p-1">
                <i className="fas fa-times" onClick={() => closePreview(event)} id="cierre-ventana"></i>
                <img id='img-cardview' className='cardBig' src={event.img_event} alt="" />
                <h2>{event.nom_event}</h2>
                <div className="info">
                  <p>{event.description_event}</p>
                  <div className="date"><i className='bx bx-calendar'></i><b>Fecha:</b> {event.fecha}</div>
                  <div className="time"><i className='bx bx-time'></i><b>Hora:</b> {event.hora} </div>
                  <div className="time"><i className='bx bx-time'></i><b>Tipo:</b> {event.tipo_event} </div>
                  <div className="price"><i className='bx bx-purchase-tag-alt' ></i> <b>Precio:</b>{event.precio_entrada}</div>
                </div>
                <div className="buttons">
                  <button className='reserv'>¡Reserva ya!</button>
                  <button className='buy'>¡Compra ahora!</button>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
    </>
  )
}
