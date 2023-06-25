import React, { useEffect, useState } from "react";
import "./set.css";
import { Formik, Form, Field } from "formik";
import { getEventsCompany, updateEvent } from "../../../api/App";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export const Set = ({ closeModal }) => {
  const [allEventsCompany, setAllEventsCompany] = useState([]);
  const eventEmpresa = async () => {
    const response = await getEventsCompany();
    setAllEventsCompany(response.data.data);
  };

  useEffect(() => {
    eventEmpresa();
  }, []);

  const navigate = useNavigate();
  return (
    <>
      {closeModal.evento.map((eventEmpresa) => (
        <Formik
          initialValues={{
            nom_event: eventEmpresa.nom_event,
            phone_event: eventEmpresa.phone_event,
            img_event: eventEmpresa.img_event,
            tipo_event: eventEmpresa.tipo_event,
            description_event: eventEmpresa.description_event,
            fecha: eventEmpresa.fecha,
            hora: eventEmpresa.hora,
            municipio: eventEmpresa.municipio,
            direccion: eventEmpresa.direccion,
            precio_entrada: eventEmpresa.precio_entrada,
            aforo: eventEmpresa.aforo,
          }}
          onSubmit={async (values) => {
            try {
              const eventsU = await updateEvent(values, eventEmpresa.id_event);

              if (eventsU.data == "Update_OK") {
                Swal.fire({
                  title: "Evento Actualizado",
                  text: "",
                  icon: "success",
                  boton: "Ok",
                  time: 1500,
                });
                const timeout = () => {
                  setTimeout(function () {
                    navigate("/cardCrud");
                    window.location.reload();
                  }, 2000);
                };
                timeout();
              }
              if (eventsU.data == "Update_Error") {
                Swal.fire({
                  title: "Error al actualizar el evento",
                  text: "Intenta mas tarde",
                  icon: "warning",
                  boton: "Ok",
                  time: 1500,
                });
              }
              if (eventsU.data == "Error 404") {
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
          {({ handleChange, setFieldValue, handleSubmit, isSubmitting }) => (
            <div className="page-set">
              <div className="body-set">
                <h1 id="hr-crud">
                  Edita tu evento <hr />
                </h1>

                <div className="components-set">
                  <div className="comp-set">
                    <Form
                      className="form-set"
                      action=""
                      onSubmit={handleSubmit}
                    >
                      <div className="other-class">
                      <div className="img-set  ">
                         <div className="imgUpdate">
                          <label className="selec-cert" htmlFor="">
                            <img
                              src={eventEmpresa.img_event}
                              onClick={() => {
                                document.getElementById("image").click();
                                key = `${i}`;
                              }}
                            ></img>
                          </label>
                        </div>
                        <label className="selec-cert" htmlFor="">
                          <input
                            type="file"
                            id="image"
                            name="img_event"
                            onChange={(event) => {
                              const file = event.currentTarget.files[0];
                              setFieldValue("img_event", file);
                            }}
                          />
                        </label>
                       
                      </div>
                      <Field
                          id="nom_event"
                          type="text"
                          name="nom_event"
                          placeholder="Nombre del evento"
                          required
                          onChange={handleChange}
                        />
                      <Field
                          id="description_event"
                          type="text"
                          name="description_event"
                          placeholder="Descripcion"
                          required
                          className="description-event"
                          onChange={handleChange}
                        />
                           <Field
                          id="direccion"
                          name="direccion"
                          placeholder="Direccion"
                          required
                          onChange={handleChange}
                        />
                        <Field
                          id="aforo"
                          type="number"
                          name="aforo"
                          placeholder="aforo"
                          required
                          onChange={handleChange}
                        />
                      </div>
                    
                      <div className="formtwo">
                       
                        <Field
                          id="phone_event"
                          type="number"
                          name="phone_event"
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
                     
                      </div>
                    </Form>
                  </div>
                  <div className="end-set">
                    <Form
                      className="form-set"
                      action=""
                      onSubmit={handleSubmit}
                    >
                      <div className="botones-set">
                        <Field
                          id="btn-cancel"
                          type="submit"
                          value="Cancelar"
                          className="btn-delete"
                          onClick={() => closeModal.setOpen(false)}
                        />
                        <button
                          id="btn-accept"
                          className="btn-accept"
                          type="submit"
                        >
                          {" "}
                          {isSubmitting ? "Actualizando...." : "Actualizar"}
                        </button>
                        {/* </div> */}
                      </div>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
          )}
        </Formik>
      ))}
    </>
  );
};
