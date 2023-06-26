import React, { useEffect, useRef } from "react";
import "./cardview.css";
import { useState } from "react";
import swal from "sweetalert2";
import { asistEvents, getEvents } from "../../api/App";
import { Formik, Field } from "formik";
import { Carrusel } from "../Carrusel/Carrusel";

export const CardView = () => {
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
    const response = await getEvents();
    const eventsData = response.data.data.map((event) => ({
      ...event,
      previewActive: false,
    }));
    setAllEvents(eventsData);
    setFilteredEvents(eventsData);
  };

  const filterEventsType = (searchText) => {
    const filtered = allEvents.filter((event) => {
      return event.tipo_event.toLowerCase().includes(searchText.toLowerCase());
    });
    setFilteredEvents(filtered);
  };

  const filterEventsNom = (searchText) => {
    const filtered = allEvents.filter((event) => {
      return event.nom_event.toLowerCase().includes(searchText.toLowerCase());
    });
    setFilteredEvents(filtered);
  };

  const filterEventsMuni = (searchText) => {
    const filtered = allEvents.filter((event) => {
      return event.municipio.toLowerCase().includes(searchText.toLowerCase());
    });
    setFilteredEvents(filtered);
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
    console.log(response);
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
      <div className="content-filter">
        <Formik>
          <Field
            id="tipo_event "
            className="select-crud "
            type="text"
            name="tipo_event"
            as="select"
            required
            onChange={(e) => filterEventsType(e.target.value)}
          >
            <option value="">Todas las categorias</option>
            <option value="Seminarios">Seminarios</option>
            <option value="Talleres">Talleres</option>
            <option value="Convenciones">Convenciones</option>
            <option value="Exposiciones">Exposiciones</option>
            <option value="Ferias comerciales">Ferias comerciales</option>
            <option value="Eventos deportivos">Deportivos</option>
            <option value="Conciertos">Conciertos</option>
            <option value="Festivales">Festivales</option>
            <option value="Caridad">Caridad </option>
            <option value="Moda">Moda</option>
            <option value="Culturales">Culturales</option>
            <option value="Gastronómicos">Gastronómicos</option>
            <option value="Tecnológicos">Tecnológicos</option>
            <option value="Arte">Arte</option>
          </Field>
        </Formik>
        <Formik>
          <Field
            id="municipio"
            className="select-crud"
            name="municipio"
            as="select"
            required
            onChange={(e) => filterEventsMuni(e.target.value)}
          >
            <option value="">Selecciona tu Municipio</option>
            <option value="Filandia">Filandia</option>
            <option value="Salento">Salento</option>
            <option value="Circasia">Circasia</option>
            <option value="Quimbaya">Quimbaya</option>
            <option value="Montenegro">Montenegro</option>
            <option value="Armenia">Armenia</option>
            <option value="Calarcá">Calarcá</option>
            <option value="Tebaida">Tebaida</option>
            <option value="Cordoba">Cordoba</option>
            <option value="Buenavista">Buenavista</option>
            <option value="Pijao">Pijao</option>
            <option value="Genova">Genova</option>
          </Field>
        </Formik>
        <input
          id="content-filter"
          type="text"
          placeholder="Buscar eventos..."
          onChange={(e) => filterEventsNom(e.target.value)}
        />
      </div>

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
                            {event.precio_entrada} - {""}
                            <i className="fa fa-solid fa-warehouse" />
                            Un máximo de {event.aforo} {""} personas.
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
                          onClick={() => {
                            createAsistUser(event.id_event);
                          }}
                        >
                          Reserva
                        </button>
                      </div>
                    </div>
                  </div>
                )}
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
                            {event.precio_entrada} - {""}
                            <i className="fa fa-solid fa-warehouse" />
                            Un máximo de {event.aforo} {""} personas.
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
                          onClick={() => {
                            createAsistUser(event.id_event);
                          }}
                        >
                          Reserva
                        </button>
                      </div>
                    </div>
                  </div>
                )}
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
                            {event.precio_entrada} - {""}
                            <i className="fa fa-solid fa-warehouse" />
                            Un máximo de {event.aforo} {""} personas.
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
                  </div>
                )}
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
};
