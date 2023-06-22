import React, { useState, useEffect } from "react";
import axios from "axios";
import { Formik, Form, Field } from "formik";
import swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import { create_event, loginCompany } from "../../api/App";

export const Session_company = () => {
  const navigate = useNavigate()
  return (
    <>
      <Formik
        initialValues={{
          mail_empresa: "",
          password_empresa: "",
        }}
        onSubmit={async (value, e) => {
          const respons = await loginCompany(value);
          try {
            if (respons.data.data == "logueado") {
              swal.fire({
                title: "Bienvenido",
                text: "Gracias por iniciar con nosotros",
                icon: "success",
                boton: "Ok",
                time: 1500,
              });
              const timeout = () => {
                setTimeout(function () {
                  navigate("/dashboard");
                  localStorage.setItem("token_company", respons.data.token_company);
                  localStorage.setItem("id_empresa", respons.data.rows[0].id_empresa);
                }, 2000);
              };
              timeout();
            }if (respons.data.data == "usuario No existe") {
              swal.fire({
                title:"Usuario No existe",
                text:"por favor Registrate",
                icon:"warning",
                boton:"Ok",
                time:1500
              })
            }if(respons.data.data == "ERROR 404"){
              swal.fire({
                title:"Error interno en el servidor",
                text:"Intentalo de nuevo mas tarde",
                icon:"warning",
                boton:"Ok",
                time:1500
              })
            }
          } catch (error) {
            console.log(error);
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
        {({ handleChange, handleSubmit }) => (
          <div className="forms">
            <div className="crear-evento">
              <Form onSubmit={handleSubmit} className="nuevo-evento">
                <h2 className="title">Inicia sesión con tu empresa</h2>
                <div className="input-field">
                  <i className="fas fa-user"></i>
                  <Field
                    type="mail"
                    id="mail_empresa"
                    name="mail_empresa"
                    required
                    placeholder="Cuenta de la empresa"
                    onChange={handleChange}
                  />
                </div>
                <div className="input-field">
                  <i className="fas fa-user"></i>
                  <Field
                    type="password"
                    id="password_empresa"
                    name="password_empresa"
                    required
                    placeholder="Inserte la contraseña"
                    onChange={handleChange}
                  />
                </div>

                <button type="submit" className="btn solid">
                  Iniciar Sesion
                </button>
                <Link to="/dashboard">Volver al inicio</Link>
              </Form>
            </div>
          </div>
        )}
      </Formik>
    </>
  );
};
