import React, { useState, useEffect } from 'react'
import './card.css'
import { Set } from "../create_event/Set"
import { Dashboard } from '../../dashboard_empresa/Dashboard_Empresa'
import { Footdash } from '../../dashboard_empresa/Footdash'
import { getEventsCompany,getEventsIdEvent } from '../../../api/App'
// import image from '../../../assets/descarga.jpg'
export const Card_crud = () => {
  // const [active,setActive]=useState(false);
  const [open, setOpen] = useState(false);
  const [id, setId] = useState("");
  const [allEventsCompany, setAllEventsCompany] = useState([])
  const [event, setEvent] = useState([])

  const eventEmpresa = async () => {
    const response = await getEventsCompany()
    setAllEventsCompany(response.data.rows)
  }

  const openForm = async (id) =>{
    if (open) {
      setOpen(false)
    }else{
      setOpen(true)
    }
    const response = await getEventsIdEvent({id_event:id}) 
    localStorage.setItem("id_event",response.data.rows[0].id_event);
    setEvent(response.data.rows)
  }

  useEffect(() => {
    eventEmpresa()
  }, [])

  return (
    <>
      <Dashboard />

      <h1 id='h1-cardEvent'>Tus eventos<hr /> </h1>
      <section className="events-card-all">
          {allEventsCompany.map((eventEmpresa) => (



              <div className='component-card'>

                <div className="fondo" style={{backgroundImage: `url(${eventEmpresa.img_event})`}}></div>
                <div className="head-card">
                  <div className="icon-card">
                    <button >
                      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAPNJREFUWEftmOERwiAMRl9HcQIdxREcQSdQN3AUN3GFuomH195xlJIE2rvqhZ9tCF9fAiTt2NjoNqaHnxd0BK7AQUm2By7AU2lvIhREvLSOE7sdEMSJwxKy20BHdJoxCJQemom1gu5AEFga8Qdo7L++XJAUthyhllyR1kvfT0LpghJEKkLxnKqdkomb2o+0y9SOljoC/kbQHDnr8wnYWkLWhdWhd0FA8V5zQk4oKuLiXPFdNlaP1vPJD0aJ3GKErJXh6kntgkYCaxT8xaZRusta2ue5sBbbaklQcHoCzsDemjiJ/XvwU/zxoBHUqMM23QVJvD4tFJglZPGVZgAAAABJRU5ErkJggg==" />
                    </button>
                  </div>
                  <div className="icon-card">
                    <img id='img-card-pointer'
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAaFJREFUWEftl4FNxDAMRf9NABvACLABTAAbABvAJLABYgJgAtgARoANuA3QlxzkC07ye01OlaBSpUp14xf7J/ldYWHXamE8+LNA+wAurBsPAL5KndlFhY4APAI4NAjCnAJ4j6BGAxHmBQAr5K8i1EigHGZtRHu1So0CimBODOQVQIL6AHDsNTUCqASTNMP3HuoGwF3qZ2+gSDO5XvKYYUAlAXPyCYrPXuSfAPjdzzbQq0JRm66tFV7EBEorjiKnrjaWfw+gmmZyvSSphDB8OReoJWDmuARw7zahIsxcIAVGidnYMbetkJJIifl1emwDpCRSYsLzdSqQkkiJKdqwKUBKIiWm6glVICWREtM0qAqQkkiJacIoy15JpMRIMC0gJZESI8O0gOhVDmy0aHftDlMDYrK3XcPUgHhS3xrQM4BzV/chlWkZtCcAZxbkDdRQmFqFaJiSj7myZ3oX3lU/M0nBQXC0D3n9lMavWog5UBGQ10809jCYUstyIALwLyHd4R/nnKr4b0tHB10etUKIoQD5RJSzrNfkpXH+gVplWlyFvgFdfY8lhhs2YQAAAABJRU5ErkJggg=="
                      onClick={() => openForm(eventEmpresa.id_event)}
                    />



                  </div>
                </div>
                <div className="imagen-card">
                  <img src={eventEmpresa.img_event} alt="" />
                </div>
                <div className="shadow">
                  <p>{eventEmpresa.nom_event}</p>
                </div>

              {open && <Set closeModal={{setOpen,evento:event}} />}
              </div>

              ))}
              </section>
        </>
  );
};