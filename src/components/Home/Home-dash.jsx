import React from 'react'
import { Dashboard } from '../dashboard_empresa/Dashboard_Empresa'
import './home-dash.css'
export const Homedash = () => {
  return (
    <>
      <Dashboard />
      <div className="home-dash">
        <section className="content-home1">
          <h1 id='h1-cardEvent'>PARA TI <hr /> </h1>
          <div className='content-dash'>
            <div className="box1-home">
              <p>
                BIENVENIDO DE NUEVO NAME
              </p> <br />
              <p >
              Empieza a crear eventos desde ya
               con YourEvent Aquí
              </p>
            </div>
            <div className="box2-home">
              <p>
                TIENE 20 EVENTOS CREADOS EN ESTE MOMENTO
              </p>
            </div>

          </div>
        </section>
        <section className='content-home2'>
          <div className="lateral">
            


          </div>
        </section>
      </div>
    </>
  )
}
