import React, { useEffect, useRef } from "react";
import "./cardEventDest.css";
import { useState } from "react";
import swal from "sweetalert2";
import { EventsRandom, asistEvents, getEvents } from "../../api/App";
import { Formik, Field } from "formik";
import { Carrusel } from "../Carrusel/Carrusel";

export const CardEventDest = () => {
  let user = localStorage.getItem("user");
  let company = localStorage.getItem("company");

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

  const [allEvents, setAllEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);

  const events = async () => {
    const response = await EventsRandom();
    const eventsData = response.data.data.map((event) => ({
      ...event,
      previewActive: false,
    }));
    setAllEvents(eventsData);
    setFilteredEvents(eventsData);
  };
  const handleClick = (event) => {
    event.previewActive = !event.previewActive;
    setAllEvents([...allEvents]);
  };

  const closePreview = (event) => {
    event.previewActive = false;
    setAllEvents([...allEvents]);
  };

  const createAsistUser = async (id_event1) => {
    const response = await asistEvents(id_event1);
    if (response.data.data == "AsistenciaCreada") {
      swal.fire({
        title: "Asistencia Exitosa",
        text: "Ya puedes asistir a este evento",
        icon: "success",
        boton: "Ok",
        time: 1500,
      });
    }
    if (response.data.data == "AsitenciaExist") {
      swal.fire({
        title: "Ya tienes una asistencia en este evento",
        text: "",
        icon: "warning",
        boton: "Ok",
        time: 1500,
      });
    }
  };

  useEffect(() => {
    events();
  }, []);

  const iniciaSesion = () => {
    swal.fire({
      title: "Inicia Sesion o Registrate",
      text: "",
      icon: "warning",
      boton: "Ok",
      time: 1500,
    });
  };

  return (
    <>
      {user ? (
        <>
        <div className="all-cards-events">
            {filteredEvents.map((event) => (
              <div className="cardsEventos" key={event.id_event}>
                <div
                  className="cards-wrap"
                  onMouseMove={handleMouseMove}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  ref={cardRef}
                  onClick={() => handleClick(event)}
                >
                  <div
                    className="cards-index"
                    style={{
                      transform: `rotateY(${rX}deg) rotateX(${rY}deg)`,
                      backgroundImage: `url(${event.img_event})`,
                    }}
                  >
                    <div
                      className="cards-bg-index"
                      style={{
                        transform: `translateX(${tX}px) translateY(${tY}px)`,
                      }}
                    ></div>
                    <div className="cards-info">
                      <h1 slot="header"> {event.nom_event} </h1>
                      <p slot="content"> {event.description_event} </p>
                    </div>
                  </div>
                </div>
                
                      <div className="info">
                        <div className="title-infcard">
                          <h2>{event.nom_event}</h2>
                          <p id="p-info">
                            {" "}
                            <i className="fa fa-light fa-map-pin" />
                            {event.direccion} ,{event.municipio} Quindío.
                          </p>
                          <p id="p-info">
                            {" "}
                            <i className="fa fa-solid fa-address-book" />
                            {event.phone_event} 
                          </p>
                          <p id="p-info">
                            <i className="fa fa-solid fa-calendar" />
                            {event.fecha} -{" "}
                            <i className="fa fa-solid fa-clock" />
                            {event.hora}{" "}
                          </p>
                          <p id="p-info">
                            <i className="fa fa-solid fa-dollar-sign" />
                            {event.precio_entrada}  -  {""}
                            <i className="fa fa-solid fa-warehouse"/>
                            Un máximo de {event.aforo}  {""} personas.
                          </p>
                        </div>
                        <div className="dates">
                          <i className="bx bx-time"></i>
                          <p>
                            Categoria: <br />
                          </p>{" "}
                          {event.tipo_event}{" "}
                        </div>

                        <div className="" id="descripcion-cardview">
                          <i className="bx bx-purchase-tag-alt"></i>{" "}
                          <p>Descripcion:</p>
                          {event.description_event}
                        </div>
                      </div>
                      <div className="buttons">
                        <button
                          className="reserv"
                          onClick={() => iniciaSesion()}
                        >
                          Reserva
                        </button>
                      </div>
                    </div>
                
              
              
            ))}
          </div>
        </>
      ) : company ? (
        <>
        <div className="all-cards-events">
            {filteredEvents.map((event) => (
              <div className="cardsEventos" key={event.id_event}>
                <div
                  className="cards-wrap"
                  onMouseMove={handleMouseMove}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  ref={cardRef}
                  onClick={() => handleClick(event)}
                >
                  <div
                    className="cards-index"
                    style={{
                      transform: `rotateY(${rX}deg) rotateX(${rY}deg)`,
                      backgroundImage: `url(${event.img_event})`,
                    }}
                  >
                    <div
                      className="cards-bg-index"
                      style={{
                        transform: `translateX(${tX}px) translateY(${tY}px)`,
                      }}
                    ></div>
                    <div className="cards-info">
                      <h1 slot="header"> {event.nom_event} </h1>
                      <p slot="content"> {event.description_event} </p>
                    </div>
                  </div>
                </div>
                
                      <div className="info">
                        <div className="title-infcard">
                          <h2>{event.nom_event}</h2>
                          <p id="p-info">
                            {" "}
                            <i className="fa fa-light fa-map-pin" />
                            {event.direccion} ,{event.municipio} Quindío.
                          </p>
                          <p id="p-info">
                            {" "}
                            <i className="fa fa-solid fa-address-book" />
                            {event.phone_event} 
                          </p>
                          <p id="p-info">
                            <i className="fa fa-solid fa-calendar" />
                            {event.fecha} -{" "}
                            <i className="fa fa-solid fa-clock" />
                            {event.hora}{" "}
                          </p>
                          <p id="p-info">
                            <i className="fa fa-solid fa-dollar-sign" />
                            {event.precio_entrada}  -  {""}
                            <i className="fa fa-solid fa-warehouse"/>
                            Un máximo de {event.aforo}  {""} personas.
                          </p>
                        </div>
                        <div className="dates">
                          <i className="bx bx-time"></i>
                          <p>
                            Categoria: <br />
                          </p>{" "}
                          {event.tipo_event}{" "}
                        </div>

                        <div className="" id="descripcion-cardview">
                          <i className="bx bx-purchase-tag-alt"></i>{" "}
                          <p>Descripcion:</p>
                          {event.description_event}
                        </div>
                      </div>
                      <div className="buttons">
                        <button
                          className="reserv"
                          onClick={() => iniciaSesion()}
                        >
                          Reserva
                        </button>
                      </div>
                    </div>
                
              
              
            ))}
          </div>
        </>
      ) : (
        <>
          <div className="all-cards-events">
            {filteredEvents.map((event) => (
              <div className="cardsEventos" key={event.id_event}>
                <div
                  className="cards-wrap"
                  onMouseMove={handleMouseMove}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  ref={cardRef}
                  onClick={() => handleClick(event)}
                >
                  <div
                    className="cards-index"
                    style={{
                      transform: `rotateY(${rX}deg) rotateX(${rY}deg)`,
                      backgroundImage: `url(${event.img_event})`,
                    }}
                  >
                    <div
                      className="cards-bg-index"
                      style={{
                        transform: `translateX(${tX}px) translateY(${tY}px)`,
                      }}
                    ></div>
                    <div className="cards-info">
                      <h1 slot="header"> {event.nom_event} </h1>
                      <p slot="content"> {event.description_event} </p>
                    </div>
                  </div>
                </div>
                
                      <div className="info">
                        <div className="title-infcard">
                          <h2>{event.nom_event}</h2>
                          <p id="p-info">
                            {" "}
                            <i className="fa fa-light fa-map-pin" />
                            {event.direccion} ,{event.municipio} Quindío.
                          </p>
                          <p id="p-info">
                            {" "}
                            <i className="fa fa-solid fa-address-book" />
                            {event.phone_event} 
                          </p>
                          <p id="p-info">
                            <i className="fa fa-solid fa-calendar" />
                            {event.fecha} -{" "}
                            <i className="fa fa-solid fa-clock" />
                            {event.hora}{" "}
                          </p>
                          <p id="p-info">
                            <i className="fa fa-solid fa-dollar-sign" />
                            {event.precio_entrada}  -  {""}
                            <i className="fa fa-solid fa-warehouse"/>
                            Un máximo de {event.aforo}  {""} personas.
                          </p>
                        </div>
                        <div className="dates">
                          <i className="bx bx-time"></i>
                          <p>
                            Categoria: <br />
                          </p>{" "}
                          {event.tipo_event}{" "}
                        </div>

                        <div className="" id="descripcion-cardview">
                          <i className="bx bx-purchase-tag-alt"></i>{" "}
                          <p>Descripcion:</p>
                          {event.description_event}
                        </div>
                      </div>
                      <div className="buttons">
                        <button
                          className="reserv"
                          onClick={() => iniciaSesion()}
                        >
                          Reserva
                        </button>
                      </div>
                    </div>
                
              
              
            ))}
          </div>
        </>
      )}
    </>
  );
};
