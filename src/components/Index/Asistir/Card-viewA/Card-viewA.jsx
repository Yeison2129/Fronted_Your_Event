import React, { useEffect, useRef } from "react";
import "../../../../components/CardView/cardview.css";
import { useState } from "react";
import swal from "sweetalert2";
import { DeleteAsist, consultAsist } from "../../../../api/App";
import {useNavigate} from "react-router-dom"

export const CardViewA = () => {

  const navigate = useNavigate()


  let user = localStorage.getItem("user");
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

  const handleClick = (event) => {
    event.previewActive = !event.previewActive;
    setAllEvents([...allEvents]);
  };

  const closePreview = (event) => {
    event.previewActive = false;
    setAllEvents([...allEvents]);
  };

  const events = async () => {
    const response = await consultAsist();
    setAllEvents(
      response.data.data.map((event) => ({ ...event, previewActive: false }))
    );
  };

  const ButtonEliminar = async(id)=>{

    swal.fire({
      title: '¿Seguro que deseas eliminar tu reserva',
      text: 'Dale OK para confirmar',
      icon: 'question',
      showCancelButton: true,
      botonAcept: 'Sí',
      botonCancel: 'No',
      }).then((result) => {
        if (result.isConfirmed) {
          deleteAsist(id); // Llama a la función handleYes() cuando se presiona el botón "Sí"
        } 
      }); 
  }

  const deleteAsist = async(id) =>{
    const response= await DeleteAsist(id)

    if (response.data.data == "DeleteAsistOk") {
      swal.fire({
        title: "reserva Eliminada",
        text: "",
        icon: "success",
        boton: "Ok",
        time: 1500,
      });
      setTimeout(() => {
          navigate("/asistir")
          window.location.reload()      
        }, 1000);
      
    }

    if (response.data.data == "DeleteError") {
      swal.fire({
        title: "Error al eliminar asistencia",
        text: "Intenta de nuevo mas tarde",
        icon: "warning",
        boton: "Ok",
        time: 1500,
      });
    }
    
  }



  useEffect(() => {
    events();
  }, []);
  return (
    <>
      {user ? (
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
                {event.previewActive && (
                  <div
                    className={`products-preview active`}
                    key={`preview-${event.id_event}`}
                  >
                    <div className="preview" data-target="p-1">
                      <i
                        className="fas fa-times"
                        onClick={() => closePreview(event)}
                        id="cierre-ventana"
                      ></i>
                      <div className="bigImg">
                        <img
                          id="img-cardview"
                          className="cardBig"
                          src={event.img_event}
                          alt=""
                        />
                      </div>
                      <div className="info"> 
                        <div className="title-infcard">
                          <h2>{event.nom_event}</h2>
                          <p>
                            {" "}
                            <i className="fa fa-light fa-map-pin" />
                            {event.municipio}
                          </p>
                        </div>

                        <div className="dates">
                          <i className="bx bx-calendar" />
                          <p>Fecha:</p> {event.fecha}
                        </div>
                        <div className="dates">
                          <i className="bx bx-time" />
                          <p>Hora:</p> {event.hora}{" "}
                        </div>
                        <div className="dates">
                          <i className="bx bx-time"></i>
                          <p>Categoria:</p> {event.tipo_event}{" "}
                        </div>
                        <div className="dates">
                          <i className="bx bx-time"></i>
                          <p>Lugar:</p> {event.direccion}{" "}
                        </div>
                        <div className="dates">
                          <i className="bx bx-purchase-tag-alt"></i>{" "}
                          <p>Precio:</p>
                          {event.precio_entrada}
                        </div>

                        <div className="dates" id="descripcion-cardview">
                          <i className="bx bx-purchase-tag-alt"></i>{" "}
                          <p>Descripcion:</p>
                          {event.description_event}
                        </div>
                      </div>
                      <div className="buttons">
                        <button className="reserv" onClick={()=>{ButtonEliminar(event.id_event)}}>Eliminar Reserva</button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </>
      ) : null}
    </>
  )};
