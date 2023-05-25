import React, { useEffect } from 'react'
import './cardview.css'
import imgcard from '../../assets/imgcard.png'
import { useState } from 'react'
import { getEvents } from '../../api/App'
import MapEvento from '../Mapa/MapaEvento/MapEvento'

export const CardView = () => {
  const [allEvents, setAllEvents] = useState([])

  const handleClick = (event) => {
    event.previewActive = !event.previewActive;
    setAllEvents([...allEvents]);
  }

  const closePreview = (event) => {
    event.previewActive = false;
    setAllEvents([...allEvents]);
  }

  const events = async () => {
    const response = await getEvents()
    setAllEvents(response.data.data.map(event => ({ ...event, previewActive: false })))
    console.log(response);
  }

  useEffect(() => {
    console.log(allEvents);
    events()
  }, [])

  return (
    <>
      {allEvents.map((event) => (
        <div className="all" key={event.id_event}>
          <div
            className="product"
            data-name="p-1"
            onClick={() => handleClick(event)}
            style={{ backgroundImage: `url(${imgcard})` }}
          >
            <h1>{event.nom_event}</h1>
          </div>
          {event.previewActive && (
            <div className={`products-preview active`} key={`preview-${event.id_event}`}>
              <div className="preview" data-target="p-1">
                <i className="fas fa-times" onClick={() => closePreview(event)} id="cierre-ventana"></i>
                <img id='img-cardview' className='cardBig' src={imgcard} alt="" />
                <h2>{event.nom_event}</h2>
                <div className="info">
                  <p>{event.description_event}</p>
                  <div className="date"><i className='bx bx-calendar'></i><b>Fecha:</b> {event.fecha}</div>
                  <div className="time"><i className='bx bx-time'></i><b>Hora:</b> {event.hora} </div>
                  <div className="time"><i className='bx bx-time'></i><b>Tipo:</b> {event.tipo_event} </div>
                  <div className="price"><i className='bx bx-purchase-tag-alt' ></i> <b>Precio:</b>{event.precio_entrada}</div>
                  <div className="place"><i className='bx bx-map' ></i><b>Lugar:</b><MapEvento /></div>
                </div>
                <div className="buttons">
                  <button className='reserv'>¡Reserva ya!</button>
                  <button className='buy'>¡Compra ahora!</button>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </>
  )
}
