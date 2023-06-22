import React, { useState } from "react";
import "./cardPassword.css";
import { Formik, Field } from "formik";
import swal from "sweetalert2";
import { CompareCodeUser, CompareEmailUser, RecuperationPasswordUser } from "../../../api/App";
import {Link, useNavigate} from 'react-router-dom'


export const CardPassword = () => {
  const [inputEmail, setInputEmail] = useState("x");
  const [times, setTime] = useState(false)
  const [times2, settimes2] = useState(false)
  const navigate= useNavigate()
  
  return (
    <>
      {inputEmail == "x" ? (
        <Formik
          initialValues={{
            mail_user: "",
          }}
          onSubmit={async (values) => {
            try {
              setInputEmail(values.mail_user);
              let response = await CompareEmailUser(values);
              console.log(response);
              if (response.data.data == "CODE_ADD") {
                swal.fire({
                  title: "Correo Enviado",
                  text: "Revisa tu correo",
                  icon: "success",
                  boton: "Ok",
                  time: 1500,
                });
                setTimeout(() => {
                  setTime(true)
                }, 2000);
                
              }
              if (response.data.data == "ERROR") {
                swal.fire({
                  title: "Error",
                  text: "",
                  icon: "warning",
                  boton: "Ok",
                  time: 1500,
                });
              }
              if (response.data.data == "DON'T_USER_EXIST") {
                swal.fire({
                  title: "Usuario No existe",
                  text: "Por favor registrate",
                  icon: "warning",
                  boton: "Ok",
                  time: 1500,
                });
              }
            } catch (error) {
              if (error) {
                swal.fire({
                  title: "ERROR 404",
                  text: "Error interno Del servidor",
                  icon: "warning",
                  time: 1500,
                });
              }
            }
          }}
        >
          {({ handleChange, handleSubmit }) => (
            <div className="contentCardPassword">
              <div className="cardPassword">
                <h2 id="title-recover">Recupera tu contraseña!</h2>
                <p id="recover-text">Ingresa tu correo Electronico</p>
                <form onSubmit={handleSubmit}>
                  <div id="input-recover">
                    <input
                      type="email"
                      id="mail_user1"
                      name="mail_user"
                      placeholder="correo"
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <Field type="submit" value="Siguiente" className="btn-next" />
                </form>

                <div className="btn-recover">
                  <Link to="/" id="hv">
                    Inicio
                  </Link>
                </div>
              </div>
            </div>
          )}
        </Formik>
      ) : times ? <Formik
      initialValues={{
        code: "",
      }}
      onSubmit={async (values) => {
        try {
          let response = await CompareCodeUser(values, inputEmail);
          if (response.data.data == "CODE_CORRECT") {
            swal.fire({
              title: "Codigo Correcto",
              text: "",
              icon: "success",
              boton: "Ok",
              time: 1500,
            });
            setTimeout(() => {
              setTime(false);
              settimes2(true)
            }, 1500);
          }
          if (response.data.data == "CODE_INCORRECT") {
            swal.fire({
              title: "Codigo incorrecto",
              text: "Verifica que ese si sea el codigo correcto",
              icon: "warning",
              boton: "Ok",
              time: 1500,
            });
          }
        } catch (error) {
          console.log(error);
          if (error) {
            swal.fire({
              title: "ERROR 404",
              text: "Error interno Del servidor",
              icon: "warning",
              boton: "Ok",
              time: 1500,
            });
          }
        }
      }}
    >
      {({ handleChange, handleSubmit }) => (
        <div className="contentCardPassword">
          <div className="cardPassword">
            <h2 id="title-recover">Código de verificación.</h2>
            {inputEmail ? (<p id="recover-text">
              Te enviamos un correo con el código de verificación, ingresa
              aquí el código que te enviamos a {inputEmail}{" "}
            </p>): 
              <p id="recover-text">
              Te enviamos un correo con el código de verificación, ingresa
              aquí el código que te enviamos a nombredeejemplo@gmail.com{" "}
            </p>
            }
            
            <form onSubmit={handleSubmit}>
            <div className="boxes">
              <input 
              type="text" 
              id="code"
              name="code"
              placeholder="codigo"
              onChange={handleChange}
              required
              />
            </div>
            <Field type="submit" value="Siguiente" className="btn-next"/>
            </form>
            <div className="btn-recover">
                  <Link to="/" id="hv">
                    Inicio
                  </Link>
                </div>
          </div>
          
        </div>
      )}
    </Formik> : times2 ? (
      <Formik
      initialValues={{
        password_user: "",
      }}
      onSubmit={async (values) => {
        try {
          let response = await RecuperationPasswordUser(values,inputEmail);
          if (response.data.data == "ok_update") {
            swal.fire({
              title: "Cambio de contraseña",
              text: "cambio existoso",
              icon: "success",
              boton: "Ok",
              time: 1500,
            });
            setTimeout(() => {
              navigate("/");
            }, 2000);
            
          }
          if (response.data.data == "update_error") {
            swal.fire({
              title: "Error",
              text: "Error al actualizar",
              icon: "warning",
              boton: "Ok",
              time: 1500,
            });
          }
        } catch (error) {
          console.log(error);
          if (error) {
            swal.fire({
              title: "ERROR 404",
              text: "Error interno Del servidor",
              icon: "warning",
              time: 1500,
            });
          }
        }
      }}
      >
        {({ handleChange, handleSubmit }) => (
      <div className="contentCardPassword">
      <div className="cardPassword">
          <h2 id='title-recover'>Nueva contraseña!</h2>
        
          <p  className="text">
              Ingresa la nueva contraseña que deseas tener.
          </p>

          <form id="form-new" onSubmit={handleSubmit}>
              <input
                        type="password"
                        id="password_user"
                        name="password_user"
                        placeholder="Contraseña"
                        onChange={handleChange}
                        required
                      />
          <div className="btn-recover">
            <Field type="submit" value="Siguiente" className="btn-next"/>
          </div>
          </form>
          <div className="btn-recover">
                  <Link to="/" id="hv">
                    Inicio
                  </Link>
                </div>
      </div>
      
      </div>
        )}
      </Formik>
    ) : null
      }
    </>
  );
};
