import React from 'react'
import { Dashboard } from '../dashboard_empresa/Dashboard_Empresa'
import './homeDash.css'
import {Link} from 'react-router-dom'
import userIcon from "../../assets/userIcon.svg";

export const Homedash = () => {
  let company = window.localStorage.getItem("company");
  return (
     <>
      {company ?(
      <>
      <Dashboard />
      <div className="home-dash">
        <section className="content-home1">
          <h1 id='h1-cardEvent'> MI PERFIL <hr /> </h1>
          <div className='content-dash'>
            <div className="box1-home">
              <div className="miFoto">
              <img src={userIcon} alt="" />
              </div>
              <div className="datosUser">
              <Link>
                <p>BIENVENIDO DE NUEVO </p> 
                <p>{company.charAt(0).toUpperCase() + company.slice(1)}</p>  
              </Link>  
              </div>
             
             <div className="estado">
              <p>Activo</p>
             </div>
            </div>
            <div className="box2-home">
             
            </div>

          </div>
        </section>
       
      </div>

      </>):null}
    </>
  )
}
