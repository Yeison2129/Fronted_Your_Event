import React, { useContext, useEffect, useState } from "react";
import "./set.css";
import { Card_crud } from "../card_evento_empresa/Card";
import { Formik, Form, Field } from "formik";
import { Modal } from "bootstrap";
import { getEventsCompany } from "../../../api/App";

export const Set = ({ closeModal }) => {
  const [allEventsCompany, setAllEventsCompany] = useState([]);

  const eventEmpresa = async () => {
    const response = await getEventsCompany();
    console.log(response.data.rows);
    setAllEventsCompany(response.data.rows);
  };

  useEffect(() => {
    eventEmpresa();
  }, []);
  return (
    <>
      {allEventsCompany.map((eventEmpresa) => (
        <Formik
          initialValues={{
            nom_event: `${eventEmpresa.nom_event}`,
            image: `${eventEmpresa.img_event}`,
            tipo_event: `${eventEmpresa.tipo_event}`,
            description_event: `${eventEmpresa.description_event}`,
            fecha: `${eventEmpresa.fecha}`,
            hora: `${eventEmpresa.hora}`,
            municipio: `${eventEmpresa.municipio}`,
            direccion: `${eventEmpresa.direccion}`,
            precio_entrada: `${eventEmpresa.precio_entrada}`,
          }}
          onSubmit={async (values) => {
            try {
              const eventsU = await UpdateEvent(values);
              if (eventsU.data == "INSERT_OK") {
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
              if (eventsU.data == "INSERT_ERROR") {
                Swal.fire({
                  title: "Error al crear el evento",
                  text: "Intenta mas tarde",
                  icon: "warning",
                  boton: "Ok",
                  time: 1500,
                });
              }
              if (eventsU.data == "ERROR_404") {
                Swal.fire({
                  title: "Error interno del servidor",
                  icon: "warning",
                  boton: "ok",
                  time: 1500,
                });
              }
            } catch (error) {}
          }}
        >
          {({ handleChange, setFieldValue, handleSubmit }) => (
            <div className="page-set">
              <div className="body-set">
                <h1 id="hr-crud">
                  Edita tu evento <hr />
                </h1>

                <div className="components-set">
                  <Form onSubmit={handleSubmit} className="form-set">
                    <div
                      className="img-set"
                      style={{
                        backgroundImage: `${eventEmpresa.img_event}`,
                      }}
                      onClick={() => {
                        document.getElementById("image").click();
                      }}
                    >
                      <label className="selec-cert" htmlFor="">
                        <input
                          type="file"
                          id="image"
                          name="img_event"
                          onChange={(event) => {
                            const file = event.currentTarget.files[0];
                            setFieldValue("img_event", file);
                          }}
                          style={{ display: "none" }}
                        />
                      </label>
                    </div>
                    <Field
                      id="nom_event"
                      type="text"
                      name="nom_evento"
                      placeholder="Nombre Evento"
                      required
                      value={eventEmpresa.nom_event}
                      onChange={handleChange}
                    />
                    <Field 
                    id="fecha" 
                    type="date" 
                    name="fecha" 
                    value={eventEmpresa.fecha}
                    required />
                    <Field
                      id="hora"
                      type="time"
                    value={eventEmpresa.hora}
                    name="hora"
                      required
                      onChange={handleChange}
                    />
                    <Field
                      id="precio_entrada"
                      type="double"
                      name="precio_entrada"
                      placeholder="precio"
                      required
                      onChange={handleChange}
                    />  
                    <Field
                      id="tipo_event"
                      className="select-set"
                      type="text"
                      name="tipo_event"
                      as="select"
                      required
                      onChange={handleChange}
                    >
                      <option value="">Selecciona tu categoría</option>
                      <option value="Seminarios">Seminarios</option>
                      <option value="Talleres">Talleres</option>
                      <option value="Convenciones">Convenciones</option>
                      <option value="Exposiciones">Exposiciones</option>
                      <option value="Ferias comerciales">
                        Ferias comerciales
                      </option>
                      <option value="Eventos deportivos">Deportivos</option>
                      <option value="Conciertos">Conciertos</option>
                      <option value="Festivales">Festivales</option>
                      <option value="Caridad">Caridad </option>
                      <option value="Moda">Moda</option>
                      <option value="Culturales">Culturales</option>
                      <option value="Gastronómicos">Gastronómicos</option>
                      <option value="Tecnológicos">Tecnológicos</option>
                      <option value="Arte">Arte</option>
                    </Field>
                    <Field
                      id="description_event"
                      type="text"
                      name="description_event "
                      placeholder="Descripcion"
                      required
                      className="description-event"
                      onChange={handleChange}
                    />
                    <Field
                      id="municipio"
                      className="select-set"
                      name="municipio"
                      as="select"
                      required
                      onChange={handleChange}
                    >
                      <option value="">Selecciona tu Municipio</option>
                      <option value="Filandia">Filandia</option>
                      <option value="Salento">Salento</option>
                      <option value="Circasia">Circasia</option>
                      <option value="Quimbaya">Quimbaya</option>
                      <option value="Montenegro">Montenegro</option>
                      <option value="Armenia">Armenia</option>
                      <option value="Calarcá">Calarcá</option>
                      <option value="Tebaida">Tebaida</option>
                      <option value="Cordoba">Cordoba</option>
                      <option value="Buenavista">Buenavista</option>
                      <option value="Pijao">Pijao</option>
                      <option value="Genova">Genova</option>
                    </Field>
                    <Field
                      id="direccion"
                      name="direccion"
                      placeholder="Direccion"
                      required
                      onChange={handleChange}
                    />
                    <div className="end-set">
                      {/* <div className="content-end"> */}

                      <div className="botones-set">
                        <Field
                          id="btn-cancel"
                          type="submit"
                          value="Cancelar"
                          className="btn-set"
                          onClick={() => closeModal(false)}
                        />
                        <Field
                          className="btn-set"
                          id="btn-accept"
                          type="submit"
                          value="Aceptar"
                        />
                        {/* </div> */}
                      </div>
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          )}
        </Formik>
      ))}
    </>
  );
};
