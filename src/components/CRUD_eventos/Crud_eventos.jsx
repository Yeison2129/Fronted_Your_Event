import React from "react";
import { Formik, Form, Field } from "formik";
import Swal from "sweetalert2";
import "./crud_eventos.css";
import { Link } from "react-router-dom";
import { createEvent} from "../../api/App";
import { Dashboard } from "../dashboard_empresa/Dashboard_Empresa";
import MapCrud from "../Mapa/MapaCrud/MapCrud";

export const Crud_eventos = () => {
  return (
    <>
      <Formik
        initialValues={{
          nom_event: "",
          tipo_event: "",
          description_event: "",
          fecha: "",
          hora: "",
          precio_entrada: "",
        }}
        onSubmit={async (values) => { 
          const users = await createEvent(values);
          console.log("------------\n");
          console.log(users);
          

          try {
            if (users.data == "INSERT_OK") {
              Swal.fire({
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
            if (users.data == "INSERT_ERROR") {
              Swal.fire({
                title: " Error Al crear al evento",
                text: "",
                icon: "warning",
                boton: "Ok",
                time: 1500,
              });
            }
            if (users.data == "ERROR_404") {
              Swal.fire("Error desconocido");
            }
          } catch (error) {
            console.log(error);
            Swal.fire({
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
                      name="description_event"
                      placeholder="Descripcion"
                      className="description-event"
                      required
                      onChange={handleChange}
                    />

                    <div className="img-crud  ">
                      <label className="selec-cert" htmlFor="">
                        <input
                          type="file"
                          id="image"
                          name="img_event"
                          onChange={(event) => {
                            const file = event.target.files[0];
                            setFieldValue("img_event", file);
                          }}
                        />
                      </label>
                    </div>
                    
                    <div className="mapCrud">
                  <h2>Ingresa el lugar</h2>
                  <MapCrud />
                </div>
                <div className="end">
                  {/* <div className="content-end"> */}
                  <div className="botones-crud">
                    <Field 
                    className="btn-crud" 
                    type="submit" 
                    value="Limpiar" 
                    id="btn-cancel"/>
                    
                    <Field 
                    className="btn-crud"
                    type="submit" 
                    id="btn-accept"
                    value="Crear"/>
                    <button type="submit">Crear</button>
    
                    {/* </div> */}
                  </div>
                </div>
                  </Form>
                </div>
                
              </div>
            </div>
          </div>
        )}
      </Formik>
    </>
  );
};
