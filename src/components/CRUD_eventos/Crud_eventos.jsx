import React, { useState, useEffect } from "react";
import axios from "axios";
import { Formik, Form, Field } from "formik";
import swal from 'sweetalert2';
import './crud_eventos.css'
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
             
    <div className="page-crud">
    <div className='body-crud'>
      <h1 id="hr-crud">Crea tu evento  <hr /></h1> 
    
      <div className="components-crud">
        <div className="img-crud  ">
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet" />
            <label for="file-upload" className="custom-file-upload">
              <i className="fa fa-cloud-upload"></i> Sube aquí una imagen para visualizar tu evento
            </label>  
        </div>
        <Form action="" className="form-crud">
          <Field id="placeholder" type="text" name='nombre_evento' placeholder="Nombre"/>
          <Field id="placeholder" type="date" name='hora_evento'  />
          <Field id="placeholder" type="time" name='fecha_evento' />
          <Field id="placeholder" type="text" name='lugar_evento' placeholder="Lugar"/>
          <Field id="placeholder" type="double" name='precio_evento' placeholder="Precio"/>
          <Field id="placeholder" className="select-crud" name="" as="select">
            <option value="categoria">categoria...</option>
            <option value="admin">admin</option>
            <option value="user">user</option>
            <option value="empresa">empresa</option>
          </Field>

        </Form>
      </div>
      <div className="end">
        {/* <div className="content-end"> */}
        <Form action="" className="form-crud">
          <Field id="placeholder" type="text" placeholder="Descripcion" className="description" />
        </Form>
        <div className="botones-crud">
          <button className='btn-crud' id='btn-cancel'>Limpiar</button>
          <button className='btn-crud' id='btn-accept'>Aceptar</button>
        {/* </div> */}
        </div>
      </div>
    </div>
    </div>
       






























              {/* <div className="page-content">
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
        </div> */}
      </div>
        )}

      </Formik>
    </>
  )
}
