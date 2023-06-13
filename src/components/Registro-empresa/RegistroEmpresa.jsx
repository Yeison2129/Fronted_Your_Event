import React, { useState } from "react";
import "../Registro-empresa/registroEmpresa.css"
import registroEmpresa1 from "../../assets/registroEmpresa-1.svg"
import { Formik, Form, Field } from "formik";
import { registerCompany } from "../../api/App";
import {Link} from 'react-router-dom'
import Swal from "sweetalert2"




export const RegistroEmpresa = () => {
  return (
    <>
      <div className="container-register-RegistroEmpresa">
        <div className="panels-container-RegistroEmpresa">
          <div className=" left-panel-RegistroEmpresa">
            <div className="content-RegistroEmpresa">
              <h3>¿Tienes un emprendimiento?</h3>
              <p>
                
                Únete a nuestra familia para subir tus eventos y no te pierdas
                de los servicios que brindamos.
              </p>
              <Link  id="a-white" to="/loginEmpresa">Ya tengo una cuenta</Link>

            </div>
            <img src={registroEmpresa1} className="image-RegistroEmpresa" alt="" />
          </div>
        <div className="formulario_empresa-RegistroEmpresa">
        <>
      <Formik
        initialValues={{
          nom_empresa: "",
          mail_empresa: "",
          telefono_empresa: "",
          password_empresa: ""
        }}
        onSubmit={async (values) => {

          try {
            console.log("hola",values);
            const users = await registerCompany(values);

            if (users.data === "INSERT_OK") {
              Swal.fire({
                title: "Registro exitoso",
                text: "Gracias por registrarte con nosotros",
                icon: "success",
                boton: "Ok",
                time: 1500,
              });
              //sirve para definir una funcion de tiempo
              const timeout =()=>{
                setTimeout(function () {
                  window.location.href = "/loginEmpresa";
                }, 2000);
              } 
              timeout()
              }
              
            if (users.data == "company_exist") {
              Swal.fire({
                title: "La compañia ya existe",
                text: "Inicia sesion",
                icon: "warning",
                boton: "Ok",
                time: 1500,
              });
            }
            if (users.data == "INSERT_ERROR") {
              Swal.fire("error desconocido");
              
            }
          } catch (error) {
            Swal.fire({
              title: "Error interno en el servidor",
              text: "Intenta de nuevo más tarde",
              icon: "warning",
              boton: "Ok",
              time: 1500,
            });
          }
        }}
      >
        {({ handleChange, setFieldValue,handleSubmit }) => (
          <Form onSubmit={handleSubmit} className="sign-in-form-RegistroEmpresa">
            <h2 className="title">Registra tu empresa</h2>
            <div className="input-field-RegistroEmpresa">
            <i className="fa fa-solid fa-building" />
              <Field
                autocomplete="off"
                type="text"
                id="nom_empresa"
                name="nom_empresa"
                placeholder="Nombre de la empresa"
                required
                onChange={handleChange}
              />
            </div>
            <div className="input-field-RegistroEmpresa">
            <i className="fa fa-solid fa-phone "  />
              <Field
                autocomplete="off"
                type="number"
                id="telefono_empresa"
                name="telefono_empresa"
                placeholder="Telefono"
                onChange={handleChange}
              />
            </div>
            <div className="input-field-RegistroEmpresa">
            <i className="fa fa-solid fa-envelope" />
                <Field
                autocomplete="off"
                type="email"
                id="mail_empresa"
                name="mail_empresa"
                placeholder="Correo"
                required
                onChange={handleChange}
              />
            </div>
            <div className="input-field-RegistroEmpresa">
            <i className="fa fa-solid fa-lock" />
              <Field
                autocomplete="off"
                type="password"
                id="password_empresa"
                name="password_empresa"
                placeholder="Contraseña"
                required
                onChange={handleChange}
              />
            </div>
            <div className="input-field-RegistroEmpresa">
              <i> </i>
              <label className="selec-cert" htmlFor="">
              <input
                type="file"
                id="image"
                name="img_certificado"
                onChange={(event) => {
                  const file = event.currentTarget.files[0];
                  setFieldValue("img_certificado", file);
                }}
              />
              </label>
            </div>

            <button type="submit" className="btn solid">
              Registrate
            </button>
            <Link id="a-black" to="/">Volver al inicio</Link>
          </Form>
        )}
      </Formik> 
    </>
        </div>
        </div>
      </div>
    </>
  );
};
