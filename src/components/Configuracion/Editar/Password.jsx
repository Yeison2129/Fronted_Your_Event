import { Formik, Form, Field } from "formik";
import React from "react";
import swal from "sweetalert2";
import { update } from "../../../api/App";
import "./Password.css";
import {Link} from 'react-router-dom'
export const Password = () => {
  let token = localStorage.getItem("token");
  return (
    <>
      {token ? (
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
            <section className="contain">
              <div className="contain-form">
                <h2>Hola</h2>
                <p>Cambia tu contraseña ahora!</p>

                <Form
                  action="#"
                  onSubmit={handleSubmit}
                  className="contain-form-f"
                >
                  <input
                    onChange={handleChange}
                    type="password"
                    placeholder="Ingrese su nueva contrasena"
                    name="password_user"
                    id="password_user"
                  />
                  <button type="su" className="btn-login">
                    Enviar
                  </button>
                  <Link to="/">volver</Link>
                </Form>
              </div>
            </section>
          )}
        </Formik>
      ) : null}
    </>
  );
};