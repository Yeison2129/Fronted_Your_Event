import React, { useState } from "react";
import "./registroEmpresa.css";
import undraw from "../../assets/undraw.svg";
import { RegistroEmpresaFormulario } from "./Formulario_registro_evento";

export const RegistroEmpresa = () => {
  return (
    <>
      <div className="container-register">
        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
              <h3>¿Tienes un emprendimiento?</h3>
              <p>
                Únete a nuestra familia para subir tus eventos y no te pierdas
                de los servicios que brindamos.
              </p>
            </div>
            <img src={undraw} className="image" alt="" />
          </div>
        <div className="formulario_empresa">
          <RegistroEmpresaFormulario />
        </div>
        </div>
      </div>
    </>
  );
};
