import React, { useEffect, useState } from 'react'
import '../Card_evento/card_evento.css'
import { deleteAdminAsist, getEvents } from '../../api/App'

export const Card_evento_admin = () => {

  const [events, setEvents] = useState([])

  const getAllEvents = async () => {
    let response = await getEvents()
    setEvents(response.data.data)
  }

  const deleteAsist = async (id) => {
    let response = await deleteAdminAsist(id)
    if (response.data.data === "Delete ok") {
      events.filter((element) => element.id_event !== id)
    }
  }

  useEffect(() => {
    getAllEvents()
    deleteAsist()
  }, [])

  return (
    <div>
      <div className="eventos">
        <div className="headerEventos">
          <div className="idEventoAdmin">#</div>
          <div className="nomEvento"><b>Nombre del evento</b></div>
          <div className="nomEmpresa"><b>Nombre de la empresa que creó el evento</b></div>
          <div className="fechaEvento"><b>Fecha de creacion del evento</b></div>
          <div className="btnsAdmin"><b>Función</b></div>
        </div>
        {
          events.map((evento) => (
            <div className="tarjetaEventos" key={evento.id_event}>
              <div className="idEventoAdmin"><p id='eventoContador'>{evento.id_event}</p></div>
              <div className="nomEvento"><p id='N-evento'></p>{evento.nom_event}</div>
              <div className="nomEmpresa"><p id='N-empresa'> {evento.nom_empresa} </p></div>
              <div className="fechaEvento"><p id='F-evento'>{evento.fecha}</p></div>
              <div className="btnsAdmin">
                <button className="verEvento">Ver</button>
                <button className="EliminarEvento" onClick={() => deleteAsist(evento.id_event) }>Eliminar</button>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}
