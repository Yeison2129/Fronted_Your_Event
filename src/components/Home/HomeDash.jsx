import React, { useState, useEffect } from 'react';
import { Dashboard } from '../dashboard_empresa/Dashboard_Empresa'
import './homeDash.css'
import { Link } from 'react-router-dom'
import { CountEventsCompany, getCompany } from "../../api/App";
import userIcon from "../../assets/userIcon.svg";
import  imgHome  from '../../assets/homeI/img-home.png'


const EventsCompany = await CountEventsCompany();
export const Homedash = () => {
  let company = window.localStorage.getItem("company");
  let eventos = EventsCompany.data.data[0].eventos;
  console.log(eventos);
  const [traerCompany, setTraerCompany] = useState([]);

  const companys = async () => {
    const response = await getCompany();
    const companyData = response.data.data.map((company) => ({
      ...company,
    }));
    setTraerCompany(companyData);
  };

  useEffect(() => {
    companys();
  }, []);

  return (
    <>
      {company ? (
        <>
          <Dashboard />
          <div className="home-dash">
            <section className="content-home1">
              <h1 id='h1-cardEvent'>INICIO <hr /> </h1>
              <div className='content-dash'>
                <div className="box1-home">
                  <div className="datosUser">

                    {/* <div className="miFoto">
                      {traerCompany.map((company) => (
                        <img id='user-icon' src={company.img_empresa || userIcon} alt="icon" />
                      ))}
                    </div> */}
                    <Link>
                      <p id='p-home'>BIENVENIDO DE NUEVO </p>
                      <p id='p-home'>{company.charAt(0).toUpperCase() + company.slice(1)}</p>
                      <p  id='other-text'>Descubre con nosotros la magia de crear eventos</p>

                    </Link>
                    <button className='button-crear'>
                      <Link to="/crud_eventos">
                      Crea un evento

                      </Link>
                    </button>
                  </div>

                  <div className="contadores">
                    <div className="estado">
                      <p>Tienes</p>
                    <p>{eventos}</p>
                    <p>Eventos creados</p>
                    </div> <div class="emoji">😊</div>
                    
                  </div>
        

                </div>
              

              </div>
            </section>

          </div>

        </>) : null}
    </>
  )
}
