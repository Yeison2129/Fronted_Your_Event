import React, { useState } from "react";
import "./registroEmpresa.css";
import { BiUser } from "react-icons/bi";
import { BiLockAlt } from "react-icons/bi";
import { BiEnvelope } from "react-icons/bi";
import { AiOutlinePushpin } from "react-icons/ai";
import undraw from "../../assets/undraw.svg";
import { Formik, Form, Field } from "formik";
import { registerCompany } from "../../api/App";
import swal from "sweetalert2";
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
