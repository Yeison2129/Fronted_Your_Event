import React, { useContext, useEffect } from "react";
import { Formik, Form, Field } from "formik";
import Swal from "sweetalert2";
import "./crud_eventos.css";
import { Link, useNavigate } from "react-router-dom";
import { createEvent } from "../../api/App";
import { Dashboard } from "../dashboard_empresa/Dashboard_Empresa";

const Crud_eventos = () => {
  const navigate = useNavigate();
  return (
    <>
      <Formik
        initialValues={{
          nom_event: "",
          phone_user: "",
          image: "",
          tipo_event: "",
          description_event: "",
          fecha: "",
          hora: "",
          municipio: "",
          direccion: "",
          precio_entrada: "",
          aforo: "",
        }}
        onSubmit={async (values) => {
          try {
            const events = await createEvent(values);
            if (events.data == "INSERT_OK") {
              Swal.fire({
                title: "Evento Creado Exitosamente",
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
            if (events.data == "INSERT_ERROR") {
              Swal.fire({
                title: "Error al crear el evento",
                text: "Intenta mas tarde",
                icon: "warning",
                boton: "Ok",
                time: 1500,
              });
            }
            if (events.data == "La fecha no puede ser pasada") {
              Swal.fire({
                title: "Ingrese una fecha valida",
                text: "Intentalo Nuevamente",
                icon: "warning",
                boton: "Ok",
                time: 1500,
              });
            }
            if (events.data == "La hora no puede ser pasada") {
              Swal.fire({
                title: "Ingrese una hora valida",
                text: "Intentalo Nuevamente",
                icon: "warning",
                boton: "Ok",
                time: 1500,
              });
            }
            if (events.data == "La hora no puede ser pasada") {
              Swal.fire({
                title: "Ingrese una hora valida",
                text: "Intentalo Nuevamente",
                icon: "warning",
                boton: "Ok",
                time: 1500,
              });
            }
            if (events.data == "horaExacta") {
              Swal.fire({
                title: "Ingrese una hora valida",
                text: "Intentalo Nuevamente",
                icon: "warning",
                boton: "Ok",
                time: 1500,
              });
            }
            if (events.data == "ERROR_404") {
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
          <div className="">
            <Dashboard />

            <div className="page-crud">
              <div className="body-crud">
                <h1 id="hr-crud">
                  Crea tu evento <hr />
                </h1>

                <div className="components-crud">
                  <div className="part2">
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
                        onChange={handleChange}
                      />
                      <Field
                        id="precio_entrada"
                        type="double"
                        name="precio_entrada"
                        placeholder="Precio de entrada"
                        required
                        onChange={handleChange}
                      />
                      <Field
                        id="tipo_event"
                        className="select-crud"
                        type="text"
                        name="tipo_event"
                        as="select"
                        required
                        onChange={handleChange}
                      >
                        <option value="">Selecciona la categoría</option>
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
                        className="select-crud"
                        type="text"
                        name="municipio"
                        as="select"
                        required
                        onChange={handleChange}
                      >
                        <option value="">Selecciona el Municipio</option>
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
                    </Form>
                  </div>
                  <div className="">
                    <Form onSubmit={handleSubmit} className="form-crud">

                      <Field
                        id="direccion"
                        type="text"
                        name="direccion"
                        placeholder="Dirección"
                        required
                        onChange={handleChange}
                      />
                              <Field
                        id="phone_event"
                        type="number"
                        placeholder="Numero de contacto"
                        name="phone_event"
                        required
                        onChange={handleChange}
                      />
                      <Field
                        id="description_event"
                        type="text"
                        name="description_event"
                        placeholder="Descripción"
                        className="description-event"
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

                      <div className="img-crud  ">
                        <label className="selec-img" htmlFor="">
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
                      <div className="end"></div>
                    </Form>{" "}
                    {/* <div className="content-end"> */}
                  </div>
                </div>
                <div className="botonesss">
                  <Form
                    onSubmit={handleSubmit}
                    className="form-crud botones-crud"
                  >
                    <Field
                      className="btn-crud"
                      type="submit"
                      value="Limpiar"
                      id="btn-cancel"
                    />

                    <button id="btn-accept" className="btn-crud" type="submit">
                      {" "}
                      {isSubmitting ? "Creando...." : "Crear"}
                    </button>
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

export default Crud_eventos;
