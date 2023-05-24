import React from "react";
import { Formik, Form, Field } from "formik";
import { registerCompany } from "../../api/App";
import swal from "sweetalert2";
import {Link} from 'react-router-dom'


export const RegistroEmpresaFormulario = () => {
  return (
    <>
      <Formik
        initialValues={{
          nom_empresa: "",
          mail_empresa: "",
          telefono_empresa: "",
          password_empresa: "",
          image: null,
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
          <Form onSubmit={handleSubmit} className="sign-in-form">
            <h2 className="title">Registra tu empresa</h2>
            <div className="input-field">
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
            <div className="input-field">
              <i> </i>
              <Field
                type="number"
                id="telefono_empresa"
                name="telefono_empresa"
                placeholder="Telefono"
                onChange={handleChange}
              />
            </div>
            <div className="input-field">
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
            <div className="input-field">
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
            <div className="input-field">
              <i> </i>
              <input
                type="file"
                id="image"
                name="img_certificado"
                onChange={(event) => {
                  const file = event.target.files[0];
                  setFieldValue("img_certificado", file);
                }}
              />
            </div>

            <button type="submit" className="btn solid">
              Registrate
            </button>
            <Link to="/">Volver al inicio</Link>
          </Form>
        )}
      </Formik>
    </>
  );
};
