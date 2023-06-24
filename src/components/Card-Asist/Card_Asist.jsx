import React, { useEffect, useRef } from "react";
import "./cardasist.css";
import { useState } from "react";
import swal from "sweetalert2";
import { asistEvents, consultAsist, getEvents, getEventsCompany, AsistEventCompany, } from "../../api/App";
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

                    </div>
                    <div className="icon-card">


                      <i id="img-card-pointer" className="fa fa-solid fa-users" onClick={() => openForm(eventEmpresa.id_event)} />

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
