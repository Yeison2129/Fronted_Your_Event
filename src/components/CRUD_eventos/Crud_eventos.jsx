import React, { useState, useEffect } from "react";
import axios from "axios";
import { Formik, Form, Field } from "formik";
import swal from "sweetalert2";
import "./crud_eventos.css";
import { Link } from "react-router-dom";
import { create_event } from "../../api/App";
import { Dashboard } from "../dashboard_empresa/Dashboard_Empresa";
import MapCrud from "../Mapa/MapaCrud/MapCrud";

export const Crud_eventos = (props) => {
  const setLatitud = (event) => {
    props.setLatitud(event.target.value);
  };
  const setLongitud = (event)=>{
    props.setLongitud(event.target.value);
  }
  return (
    <>
      <Formik
        initialValues={{
          nom_event: "",
          image: null,
          tipo_event: "",
          description_event: "",
          fecha: "",
          hora: "",
          lugar_latitud: setLatitud(),
          lugar_longitud: setLongitud(),
          precio_entrada: "",
        }}
        onSubmit={async (value, e) => {
          const respons = await create_event(value);
          console.log(respons);

          try {
            if (respons.data.data == "INSERT_OK") {
              swal.fire({
                title: "Evento Creado Exitosamente",
                text: "",
                icon: "success",
                boton: "Ok",
                time: 1500,
              });
              const timeout = () => {
                setTimeout(function () {
                  window.location.href = "/cardCrud";
                }, 2000);
              };
              timeout();
            }
            if (users.data.data == "INSERT_ERROR") {
              swal.fire({
                title: " Error Al crear al evento",
                text: "",
                icon: "warning",
                boton: "Ok",
                time: 1500,
              });
            }
            if (users.data.data == "ERROR 404") {
              swal.fire("Error desconocido");
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
        {({ handleChange, setFieldValue, handleSubmit }) => (
          <div className="">
            <Dashboard />

            <div className="page-crud">
              <div className="body-crud">
                <h1 id="hr-crud">
                  Crea tu evento <hr />
                </h1>

                <div className="components-crud">
                  <Form onSubmit={handleSubmit} className="form-crud">
                    <div className="img-crud  ">
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

                    <Field
                      id="nom_event"
                      type="text"
                      name="nom_event"
                      placeholder="Nombre de tu evento"
                      required
                      onChange={handleChange}
                    />
                    <Field 
                    id="fecha" 
                    type="date" 
                    name="fecha"
                    required
                    onChange={handleChange}
                    />
                    
                    <Field 
                    id="hora" 
                    type="time" 
                    name="hora"
                    required
                    onChange={handleChange} />
                    <Field
                      id="precio_entrada"
                      type="double"
                      name="precio_entrada"
                      placeholder="Precio"
                    />
                    <Field
                      id="tipo_event"
                      className="select-crud"
                      name="tipo_event"
                      as="select"
                      required
                      onChange={handleChange}
                    >
                      <option value="categoria">categoria...</option>
                      <option value="admin">admin</option>
                      <option value="user">user</option>
                      <option value="empresa">empresa</option>
                    </Field>
                    <Field
                      id="description_event"
                      type="text"
                      placeholder="Descripcion"
                      className="description-event"
                      required
                      OnChange={handleChange}
                    />
                  </Form>
                </div>
                <div className="mapCrud">
                  <h2>Ingresa el lugar</h2>
                  <MapCrud />
                </div>
                <div className="end">
                  {/* <div className="content-end"> */}
                  <div className="botones-crud">
                    <button className="btn-crud" id="btn-cancel">
                      Limpiar
                    </button>
                    <button className="btn-crud" id="btn-accept">
                      Aceptar
                    </button>
                    {/* </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </Formik>
    </>
  );
};
