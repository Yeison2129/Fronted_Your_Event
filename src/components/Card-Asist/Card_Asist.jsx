import React, { useEffect, useRef } from "react";
import "./cardasist.css";
import { useState } from "react";
import swal from "sweetalert2";
import {asistEvents,consultAsist,getEvents,getEventsCompany,AsistEventCompany,} from "../../api/App";
import { Formik, Field } from "formik";
import { Dashboard } from "../dashboard_empresa/Dashboard_Empresa";

export const CardAsist = () => {
  let company = localStorage.getItem("company")
  let user = localStorage.getItem("user")
  const [allEvents, setAllEvents] = useState([]);
  const [allEventsCompany, setAllEventsCompany] = useState([]);

  const handleClick = (event) => {
    event.previewActive = !event.previewActive;
    setAllEvents([...allEvents]);
  };

  const closePreview = (event) => {
    event.previewActive = false;
    setAllEvents([...allEvents]);
  };

  const eventEmpresa = async () => {
    const response = await getEventsCompany();
    setAllEventsCompany(response.data.data);
  };

  const asistEventsCompany = async (id) => {
    const response = await AsistEventCompany(id);
  };

  useEffect(() => {
    eventEmpresa();
  }, []);
  return (
    <>
      {user ? (
        <>
          <>
            <Dashboard />
            <div className="events-card-all-page">
              <h1 id="h1-cardEvent">
                ASISTENCIAS
                <hr />{" "}
              </h1>
              <section className="events-card-all">
                {allEventsCompany.map((eventEmpresa) => (
                  <div className="component-card">
                    <div
                      className="fondo"
                      style={{
                        backgroundImage: `url(${eventEmpresa.img_event})`,
                      }}
                    ></div>
                    <div className="imagen-card">
                      <img
                        src={eventEmpresa.img_event}
                        alt=""
                        onClick={() =>
                          asistEventsCompany(eventEmpresa.id_event)
                        }
                      />
                    </div>
                    <div className="shadow">
                      <p>{eventEmpresa.nom_event}</p>
                    </div>
                  </div>
                ))}
              </section>
            </div>
          </>
        </>
      ) : company ? (
        <>
          <Dashboard />
          <div className="events-card-all-page">
            <h1 id="h1-cardEvent">
              ASISTENCIAS
              <hr />{" "}
            </h1>
            <section className="events-card-all">
              {allEventsCompany.map((eventEmpresa) => (
                <div className="component-card">
                  <div
                    className="fondo"
                    style={{
                      backgroundImage: `url(${eventEmpresa.img_event})`,
                    }}
                  ></div>
                      <div className="head-card">
              <div className="icon-card">
                <div className="button-delete">
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAPNJREFUWEftmOERwiAMRl9HcQIdxREcQSdQN3AUN3GFuomH195xlJIE2rvqhZ9tCF9fAiTt2NjoNqaHnxd0BK7AQUm2By7AU2lvIhREvLSOE7sdEMSJwxKy20BHdJoxCJQemom1gu5AEFga8Qdo7L++XJAUthyhllyR1kvfT0LpghJEKkLxnKqdkomb2o+0y9SOljoC/kbQHDnr8wnYWkLWhdWhd0FA8V5zQk4oKuLiXPFdNlaP1vPJD0aJ3GKErJXh6kntgkYCaxT8xaZRusta2ue5sBbbaklQcHoCzsDemjiJ/XvwU/zxoBHUqMM23QVJvD4tFJglZPGVZgAAAABJRU5ErkJggg==" onClick={() => {
                    pregunta(eventEmpresa.id_event);
                  }}key={eventEmpresa.img_event}/>
                </div>
              </div>
              <div className="icon-card">
                <img
                  id="img-card-pointer"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAaFJREFUWEftl4FNxDAMRf9NABvACLABTAAbABvAJLABYgJgAtgARoANuA3QlxzkC07ye01OlaBSpUp14xf7J/ldYWHXamE8+LNA+wAurBsPAL5KndlFhY4APAI4NAjCnAJ4j6BGAxHmBQAr5K8i1EigHGZtRHu1So0CimBODOQVQIL6AHDsNTUCqASTNMP3HuoGwF3qZ2+gSDO5XvKYYUAlAXPyCYrPXuSfAPjdzzbQq0JRm66tFV7EBEorjiKnrjaWfw+gmmZyvSSphDB8OReoJWDmuARw7zahIsxcIAVGidnYMbetkJJIifl1emwDpCRSYsLzdSqQkkiJKdqwKUBKIiWm6glVICWREtM0qAqQkkiJacIoy15JpMRIMC0gJZESI8O0gOhVDmy0aHftDlMDYrK3XcPUgHhS3xrQM4BzV/chlWkZtCcAZxbkDdRQmFqFaJiSj7myZ3oX3lU/M0nBQXC0D3n9lMavWog5UBGQ10809jCYUstyIALwLyHd4R/nnKr4b0tHB10etUKIoQD5RJSzrNfkpXH+gVplWlyFvgFdfY8lhhs2YQAAAABJRU5ErkJggg=="
                  onClick={() => openForm(eventEmpresa.id_event)}
                />
              </div>
            </div>
                  <div className="imagen-card">
                    <img
                      src={eventEmpresa.img_event}
                      alt=""
                      onClick={() => AsistUserss(eventEmpresa.id_event)}
                    />
                  </div>
                  <div className="shadow">
                    <p>{eventEmpresa.nom_event}</p>
                  </div>
                </div>
              ))}
            </section>
          </div>
        </>
      ) : null}
    </>
  );
};
