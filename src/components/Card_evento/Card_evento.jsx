import React, { useState, useEffect } from "react";
import '../Card_evento/card_evento.css'
import { Dashboard } from "../dashboard_empresa/Dashboard_Empresa";
import { events } from "../../api/App";

export const CardEvento = () => {

  const [eventos, setEventos] = useState([])

  const getEvents = async () => {
    const response = await events()
    setEventos(response.data.rows)
  }

  useEffect(() => {
    getEvents()
  }, [])

  return (
    <>
      {/* <div > */}
      <Dashboard />

      <div className="page-content">
        <div className="toda-la-card">
          {
            eventos.map((event) => (
              eventos.length > 0 ? <div className="tarjeta">
                <div className="titulo-evento" key={event.id_event}>
                  <h3 id="titulo-evento-txt"> {event.nom_event} </h3>
                </div>
                <div className="imagen-evento">
                  <img src="" alt="" className="imagen-evento" />
                </div>
                <div className="tipo-evento">
                  <p id="tipo-e"> </p>
                </div> {event.tipo_event}
                <div className="descipcion-evento">
                  <p id="descri-e"> {event.description_event} </p>
                </div>
                <div className="info-lugar-fecha">
                  <div className="fecha-evento">
                    <p id="fecha-e"> {event.fecha} </p>
                  </div>
                  <div className="hora-evento">
                    <p id="hora-e"> {event.hora} </p>
                  </div>
                </div>
                <div className="precio-evento">
                  <p id="precio-e"> {event.precio_entrada} </p>
                </div>
                <div className="btns-evento">
                  <button className="comprar-entrada">Comprar</button>
                  <button className="eliminar-evento">Eliminar</button>
                </div>
              </div> : <h1> No hay eventos </h1>
            ))
          }
        </div>
      </div>
      {/* </div> */}
    </>

  );
};
