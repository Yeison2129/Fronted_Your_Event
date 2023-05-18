import React, { useState } from 'react'
import './registroEmpresa.css'
import {BiUser} from "react-icons/bi" 
import {BiLockAlt} from "react-icons/bi"
import {BiEnvelope} from "react-icons/bi"
import {AiOutlinePushpin} from "react-icons/ai"
import  registroEmpresa  from "../../assets/registroEmpresa-1.svg"
export const RegistroEmpresa = () => {

  return (
    
    <div className="container-register">
      <div className="forms-container">
        <div className="signin-signup">
          <form action="#" className="sign-in-form">
            <h2 className="title">Registra tu empresa</h2>
            <div className="input-field">
            <i> <BiUser/></i>
              <input type="text" placeholder="Nombre de la empresa" required/>
            </div>
            <div className="input-field">
            <i> <AiOutlinePushpin/></i>
              <input type="text" placeholder="Enfoque" />
            </div>
            <div className="input-field">
            <i> <BiEnvelope/></i>
              <input type="email" placeholder="Correo" required/>
            </div>
            <div className="input-field">
              <i> <BiLockAlt/></i>
              <input type="password" placeholder="Contraseña" required/>
            </div>

            <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet" />
            <label for="file-upload" className="custom-file-upload">
              <i className="fa fa-cloud-upload"></i> Sube aquí el certificado de tu empresa
            </label>
            <p className="info-about-certificate">Debes subir aquí el certificado expedido por la cámara de comercio para confirma la existencia de tu empresa</p>
            <input id="file-upload" type="file" />
              <label for="" className="box-conditionals">
                {/* <input type="checkbox" >  */}
                Acepta términos y condiciones.
                <a href="" style={{fontSize:"13px"}}> Ver términos y condiciones.</a>
              </label>


              <input type="submit" value="Enviar" className="btn solid" />
                <a href="/">Volver al inicio</a>
              </form>

            </div>
        </div>

        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
              <h3>¿Tienes un emprendimiento?</h3>
              <p>
                Únete a nuestra familia para subir tus eventos y no te pierdas de los servicios que brindamos.
              </p>
            </div>
            <img src={registroEmpresa} className="image" alt="" /> 

          </div>  
        </div>
      </div>
      
      
      )
}
