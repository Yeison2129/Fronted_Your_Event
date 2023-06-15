  import React, { useEffect, useRef } from "react";
import "./cardasist.css";
import { useState } from "react";
import swal from "sweetalert2";
import { asistEvents, consultAsist, getEvents, getEventsCompany,AsistEventCompany} from "../../api/App";
import { Formik, Field } from "formik";
import { Dashboard } from "../dashboard_empresa/Dashboard_Empresa";

export const CardAsist = () => {
  const cardRef = useRef(null);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [mouseLeaveDelay, setMouseLeaveDelay] = useState(null);

  const handleMouseMove = (e) => {
    const { offsetLeft, offsetTop } = cardRef.current;
    const cardWidth = cardRef.current.offsetWidth;
    const cardHeight = cardRef.current.offsetHeight;
    setMouseX(e.pageX - offsetLeft - cardWidth / 2);
    setMouseY(e.pageY - offsetTop - cardHeight / 2);
  };

  const handleMouseEnter = () => {
    clearTimeout(mouseLeaveDelay);
  };

  const handleMouseLeave = () => {
    const delay = setTimeout(() => {
      setMouseX(0);
      setMouseY(0);
    }, 1000);
    setMouseLeaveDelay(delay);
  };

  const mousePX = mouseX / width;
  const mousePY = mouseY / height;
  const rX = mousePX * 30;
  const rY = mousePY * -30;
  const tX = mousePX * -40;
  const tY = mousePY * -40;

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

  const AsistEventsCompany = async(id)=>{
    const response =await AsistEventCompany(id)
    console.log(response.data.data);
  }


  useEffect(() => {
    eventEmpresa();
  }, []);
  return (
    <>
    <Dashboard/>
    <section className="events-card-all">
    <h1 id="h1-cardEvent">
      TUS ASISTENCIAS
      <hr />{" "}
    </h1>
      {allEventsCompany.map((eventEmpresa) => (
        <div className="component-card">
          <div
            className="fondo"
            style={{ backgroundImage: `url(${eventEmpresa.img_event})` }}
          ></div>
          <div className="imagen-card">
            <img src={eventEmpresa.img_event} alt="" 
             onClick={() => AsistEventsCompany(eventEmpresa.id_event)}/>
          </div>
          <div className="shadow">
            <p>{eventEmpresa.nom_event}</p>
          </div>

        </div>
      ))}
    </section>
  </>
);
};
