import React, { useState, useEffect } from "react";
import '../Card_evento/card_evento.css'
import { Dashboard } from "../dashboard_empresa/Dashboard_Empresa";

export const CardEvento = () => {
  return (
    <>
    {/* <div > */}
      <Dashboard /> 

      <div className="page-content">
        <div className="toda-la-card">
          <div className="tarjeta">
            <div className="titulo-evento">
              <h3 id="titulo-evento-txt">Aqui va el nombre del evento</h3>
            </div>
            <div className="imagen-evento">
              <img src="" alt="" className="imagen-evento" />
            </div>
            <div className="tipo-evento">
              <p id="tipo-e">Aqui va el tipo del evento</p>
            </div>
            <div className="descipcion-evento">
              <p id="descri-e">Aqui va la descripcion del evento</p>
            </div>
            <div className="info-lugar-fecha">
              <div className="fecha-evento">
                <p id="fecha-e">Aqui va la fecha del evento</p>
              </div>
              <div className="hora-evento">
                <p id="hora-e">Aqui va la hora del evento</p>
              </div>
            </div>
            <div className="precio-evento">
              <p id="precio-e">Aqui va el precio del evento</p>
            </div>
            <div className="btns-evento">
              <button className="comprar-entrada">Comprar</button>
              <button className="eliminar-evento">Eliminar</button>
            </div>
            </div>
          </div>
        </div>
      {/* </div> */}
    </>

  );
};
