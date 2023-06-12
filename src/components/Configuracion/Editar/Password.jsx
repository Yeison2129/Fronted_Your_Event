import { Formik, Form, Field } from "formik";
import React from "react";
import swal from "sweetalert2";
import { update } from "../../../api/App";
import "./Password.css";
import {Link} from 'react-router-dom'
import { Footdash } from "../../dashboard_empresa/Footdash";

import { Dashc } from "../Dashconfig/Dashc";

export const Password = () => {
  let user = localStorage.getItem("user");
  let company = localStorage.getItem("company") ;
  
  return (
    <>
      {user ? (
        <Formik
          initialValues={{
            password_user: "",
          }}
          onSubmit={async (values) => {
            let response = await update(values);
            if (response.data.data == "Cambio exitoso") {
                swal.fire({
                  title: "Cambio exitoso",
                  text: "inicie su sesion de nuevo",
                  icon: "success",
                  boton: "Ok",
                  time: 1500,
                })
                localStorage.clear()
                setTimeout(() => {
                  window.location.href = "/"
                }, 1500);
            } 
          }}
        >
          {({ handleChange, handleSubmit }) => (
            <div className="">
              <Dashc/>
            <section className="contain">
              <div className="contain-form">
                <h2>HOLA!</h2>
                <p>Cambia tu contraseña ahora!</p>

                <Form
                  action="#"
                  onSubmit={handleSubmit}
                  className="contain-form-f"
                >
                  <input
                    onChange={handleChange}
                    type="password"
                    placeholder="Ingrese su nueva contraseña"
                    name="password_user"
                    id="password_user"
                  />
                  <button type="submit" id="btn-updatep" >
                    Enviar
                  </button>
                </Form>
              </div>
            </section>
            <Footdash/> 
            </div>
            
          )}
        </Formik>
      ) : company ? (<Formik
        initialValues={{
          password_empresa: "",
        }}
        onSubmit={async (values) => {
          let response = await update(values);
          if (response.data.data == "Cambio exitoso") {
              swal.fire({
                title: "Cambio exitoso",
                text: "inicie su sesion de nuevo",
                icon: "success",
                boton: "Ok",
                time: 1500,
              })
              localStorage.clear()
              setTimeout(() => {
                window.location.href = "/"
              }, 1500);
          } 
        }}
      >
        {({ handleChange, handleSubmit }) => (
          <div className="">
            <Dashc/>
          <section className="contain">
            <div className="contain-form">
              <h2>HOLA!</h2>
              <p>Cambia tu contraseña ahora!</p>

              <Form
                action="#"
                onSubmit={handleSubmit}
                className="contain-form-f"
              >
                <input
                  onChange={handleChange}
                  type="password"
                  placeholder="Ingrese su nueva contraseña"
                  name="password_user"
                  id="password_user"
                />
                <button type="submit" id="btn-updatep" >
                  Enviar
                </button>
              </Form>
            </div>
          </section>
          <Footdash/> 
          </div>
          
        )}
      </Formik>):null}
    </>
  );
};
