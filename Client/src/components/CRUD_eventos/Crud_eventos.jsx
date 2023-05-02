import React, { useState, useEffect } from "react";
import axios from "axios";
import { Formik, Form, Field } from "formik";
import swal from 'sweetalert2';
import { Link } from "react-router-dom"
import { create_event } from "../../api/App";
import { Dashboard } from "../dashboard_empresa/Dashboard_Empresa";

export const Crud_eventos = () => {

  return (

    <>

    <Formik initialValues={{
        nom_event: "",
        img_event: "",
        tipo_event: "",
        description_event: "",
        fecha: "",
        hora: "",
        precio_entrada: ""
      }}

      onSubmit={async (value, e) =>{
        const respons = await create_event(value)
        console.log(respons);

        try{
          if (users.data.data == "EVENTO CREADO"){
            swal.fire({
              title: "evento creado exitoso",
              text: "Gracias por registrarte con nosotros",
              icon: "success",
              boton: "Ok",
              time :1500
            });
            const timeout =()=>{
              setTimeout(function () {
                window.location.href="/login"
              }, 2000)
             }
             timeout()

          }if (users.data.data == "envent exist") {
            swal.fire({
              title: " El Usuario ya existe",
              text: "Inicia sesion",
              icon: "warning",
              boton: "Ok",
              time: 1500,

            });
        }
        if (users.data.data == "INSERT_ERROR") {
          swal.fire("error desconocido")
        }

      } catch (error) {
        console.log(error);
        swal.fire({
          title: "Error interno en el servidor",
          text: "Intenta de nuevo más tarde",
          icon: "error",
          boton: "Ok",
          time: 1500
    

        });
      }
    }}

      >

        {({ handleChange, handleSubmit }) => (
          
            <div className="">
              <Dashboard/>    
              <div className="page-content">
            <div className="forms-container">
              <div className="crear-evento">
                <Form onSubmit={handleSubmit} className="nuevo-evento">
                  <h2 className="title">Crea tu evento</h2>
                  <div className="input-field">
                    <i className="fas fa-user"></i>
                    <Field type="text" id="nom_event" name="nom_event" required placeholder="Nombre del evento" onChange={handleChange} />
                  </div>
                  <div className="input-field">
                    <i className="fas fa-user"></i>
                    <Field type="text" id="img_event" name="img_event" required placeholder="Inserte la imagen" onChange={handleChange} />
                  </div>
                  <div className="input-field">
                    <i className="fas fa-envelope"></i>
                    <Field type="text" id="tipo_event" name="tipo_event" required placeholder="Tipo del evento" onChange={handleChange} />
                  </div>
                  <div className="input-field">
                    <i className="fas fa-lock"></i>
                    <Field type="text" id="description_event" name="description_event" required placeholder="Descripción del evento" onChange={handleChange} />
                  </div>
                  <div className="input-field">
                    <i className="fas fa-lock"></i>
                    <Field type="date" id="fecha" name="fecha" required placeholder="Fecha del evento" onChange={handleChange} />
                  </div>
                  <div className="input-field">
                    <i className="fas fa-lock"></i>
                    <Field type="time" id="hora" name="hora" required placeholder="Hora del evento" onChange={handleChange} />
                  </div>
                  <div className="input-field">
                    <i className="fas fa-lock"></i>
                    <Field type="number" id="precio_entrada" name="precio_entrada" required placeholder="Precio del evento" onChange={handleChange} />
                  </div>
                  <button type="submit" className="btn solid">Crear Evento</button>
                  <Link to="/dashboard">Volver al inicio</Link>
                </Form>
              </div>
            </div>
        </div>
      </div>
        )}

      </Formik>
    </>
  )
}
