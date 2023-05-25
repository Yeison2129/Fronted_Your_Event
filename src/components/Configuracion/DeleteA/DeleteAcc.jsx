import { Formik, Form, Field } from "formik";
import React from "react";
import swal from "sweetalert2";
import { update } from "../../../api/App";
import "../Editar/Password.css";
import "./deletea.css";
import {Link} from 'react-router-dom'
import { Footdash } from "../../dashboard_empresa/Footdash";

import { Dashc } from "../Dashconfig/Dashc";

export const DeleteAcc = () => {
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
            <div className="">
              <Dashc/>
            <section className="contain">
              <div id="form-deleteA" >
                <h2>¿Quieres eliminar tu cuenta?</h2>
                <p>Ingresa tu contraseña para eliminar tu cuenta en YourEvent.</p>

                <Form
                  action="#"
                  onSubmit={handleSubmit}
                  className="contain-form-f"
                >
                  <input
                    onChange={handleChange}
                    type="password"
                    placeholder="Ingrese contraseña"
                    name="password_user"
                    id="password_user"
                  />
                  <button type="su" id="btn-updatep" >
                    Eliminar
                  </button>
                </Form>
              </div>
            </section>
            <Footdash/> 
            </div>
            
          )}
        </Formik>
      ) : null}
    </>
  );
};
