import { Formik, Form, Field } from "formik";
import React from "react";
import "./loginEmpresa.css";
import { loginCompany } from "../../api/App";
import swal from "sweetalert2";
import loginEmpresa3 from "../../assets/loginEmpresa-3.png"
import empresa from "../../assets/loginEmpresa-2.svg"
import male from "../../assets/loginEmpresa-1.svg"
import {Link} from 'react-router-dom'


export const LoginEmpresa = () => {
  return (
    <>
      <Formik
        initialValues={{
          mail_empresa: "",
          password_empresa: "",
        }}
        onSubmit={async (value, e) => {
          const respons = await loginCompany(value);
          console.log(respons);

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
                  window.location.href = "/";
                  localStorage.setItem("id_empresa", respons.data.rows[0].id_empresa);
                  localStorage.setItem("company", respons.data.rows[0].nom_empresa);
                  localStorage.setItem("token_company", respons.data.token_company);
                  localStorage.setItem("mail_empresa", respons.data.rows[0].mail_empresa)
                }, 2000);
              };
              timeout();
            }
            if (respons.data.data == "usuario No existe") {
              swal.fire({
                title: "Usuario No existe",
                text: "por favor Registrate",
                icon: "warning",
                boton: "Ok",
                time: 1500,
              });
            }
            if (respons.data.data == "PASSWORD_ERROR") {
              swal.fire({
                title: "Contraseña Incorrecta",
                text: "Verifica tu contraseña",
                icon: "warning",
                boton: "Ok",
                time: 1500,
              });
            }
            if (respons.data.data == "ERROR 404") {
              swal.fire({
                title: "Error interno en el servidor",
                text: "Intentalo de nuevo mas tarde",
                icon: "warning",
                boton: "Ok",
                time: 1500,
              });
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
          <>
            <img
              src={loginEmpresa3}
              className="loginEmpresa-wave"
              alt="img"
              title="loginEmpresa3.png"
            />
            <div className="loginEmpresa-container">
              <div className="loginEmpresa-img">
                <img src={empresa} alt="img" title="empresa" />
              </div>
              <div className="loginEmpresa-login-content">
                <Form action="#" onSubmit={handleSubmit} className="login-form-E">
                  <img src={male} alt="img" title="male" />
                  <h2 className="loginEmpresa-title">Bienvenido</h2>

                  <div className="input-field-LE">
                    <i className="fas fa-user"></i>
                    <Field
                      autocomplete="off"
                      type="text"
                      id="mail_empresa"
                      name="mail_empresa"
                      placeholder="Correo"
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="input-field-LE">
                    <i className="fas fa-lock"></i>
                    <Field
                      autocomplete="off"
                      type="password"
                      id="password_empresa"
                      name="password_empresa"
                      placeholder="Contraseña"
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <Field
                    autocomplete="off"
                    type="submit"
                    className="boton-morado btn solid"
                    value="Iniciar Sesión"
                  />
                  <Link id="a-black" to="/">Volver al inicio</Link>
                </Form>
              </div>
            </div>
          </>
        )}
      </Formik>
    </>
  );
};
