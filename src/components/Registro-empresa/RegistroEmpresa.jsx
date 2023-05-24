import React, { useState } from "react";
import "../Registro-empresa/registroEmpresa.css"
import registroEmpresa1 from "../../assets/registroEmpresa-1.svg"
import { Formik, Form, Field } from "formik";
import { registerCompany } from "../../api/App";
import {Link} from 'react-router-dom'




export const RegistroEmpresa = () => {
  return (
    <>
      <div className="container-register-RegistroEmpresa">
        <div className="panels-container-RegistroEmpresa">
          <div className="panel left-panel-RegistroEmpresa">
            <div className="content-RegistroEmpresa">
              <h3>¿Tienes un emprendimiento?</h3>
              <p>
                Únete a nuestra familia para subir tus eventos y no te pierdas
                de los servicios que brindamos.
              </p>
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
          password_empresa: "",
          image:null,
        }}
        onSubmit={async (values) => {

          try {
            const users = await registerCompany(values);
            console.log(users.data);

            if (users.data == "INSERT_OK") {
              swal.fire({
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
              
            if (users.data == "company exist") {
              swal.fire({
                title: "La compañia ya existe",
                text: "Inicia sesion",
                icon: "warning",
                boton: "Ok",
                time: 1500,
              });
            }
            if (users.data == "INSERT_ERROR") {
              swal.fire("error desconocido");
              
            }
          } catch (error) {
            swal.fire({
              title: "Error interno en el servidor",
              text: "Intenta de nuevo más tarde",
              icon: "error",
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
              <i> </i>
              <Field
                type="text"
                id="nom_empresa"
                name="nom_empresa"
                placeholder="Nombre de la empresa"
                required
                onChange={handleChange}
              />
            </div>
            <div className="input-field-RegistroEmpresa">
              <i> </i>
              <Field
                type="number"
                id="telefono_empresa"
                name="telefono_empresa"
                placeholder="Telefono"
                onChange={handleChange}
              />
            </div>
            <div className="input-field-RegistroEmpresa">
              <i> </i>
              <Field
                type="email"
                id="mail_empresa"
                name="mail_empresa"
                placeholder="Correo"
                required
                onChange={handleChange}
              />
            </div>
            <div className="input-field-RegistroEmpresa">
              <i> </i>
              <Field
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
                  const file = event.target.files[0];
                  setFieldValue("img_certificado", file);
                }}
              />
              </label>
            </div>

            <button type="submit" className="btn solid">
              Registrate
            </button>
            <Link to="/">Volver al inicio</Link>
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
