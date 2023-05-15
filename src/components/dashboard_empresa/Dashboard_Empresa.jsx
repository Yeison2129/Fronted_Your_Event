import React from 'react';
import './dashboard.css';
import { Link } from 'react-router-dom'


import userIcon from "../../assets/userIcon.svg";

import { CardEvento } from '../Card_evento/Card_evento';
import { Crud_eventos } from '../CRUD_eventos/Crud_eventos';
import { Footdash } from './Footdash';

export const  Dashboard = () => {


    return (
        <>

            <div className="page-header">
                <div className="user-icon">
                <img id='user-icon' src={userIcon} alt="icon" />
                <p id='nom-user'>Name </p>
                </div>
                
                <nav>
                    <button className="toggle-mob-menu" aria-expanded="false" aria-label="open menu">
                        <svg width="20" height="20" aria-hidden="true"><use href="#down"></use></svg>
                    </button>
                    <ul className="admin-menu">
                    <li className="menu-heading">
                        <h3>Empresa</h3>
                        </li> 
                        <li>
                        <Link to="/home">
                        
                        <svg  className="svg-dash">
                            <use href="#users"></use>
                        </svg>
                        <span>Inicio</span>
                    
                        </Link>     
                    </li>
                    <li>
                   
                    <Link to="/cardCrud">

                        <svg className="svg-dash">
                            <use href="#pages"></use>
                        </svg>
                        <span>Mis Eventos</span>
                        </Link>
                    </li>
                    {/* <li>
                        <Link to="/cardEvento">
                        <svg>
                            <use href="#collection"></use>
                        </svg>
                        <span>Colecciones</span>
                        </Link> className="svg-dash"
                    </li> */}
                    <li>
                        <Link to="/crud_eventos">
                        
                        <svg  className="svg-dash">
                            <use href="#users"></use>
                        </svg>
                        <span>Crear evento</span>
                    
                        </Link>     
                    </li>
                    <li>
                        <a href="#0">
                        <svg  className="svg-dash">
                            <use href="#trends"></use>
                        </svg>
                        <span>Estadísticas</span>
                        </a>
                    </li>
                
                    <li>
                        <a href="#0">
                        <svg className="svg-dash" >
                            <use href="#comments"></use>
                        </svg>
                        <span>Asistencia</span>
                        </a>
                    </li>
                    <li>
                        <a href="#0">
                        <svg className="svg-dash" >
                            <use href="#appearance"></use>
                        </svg>
                        <span>Papelera  </span>
                        </a>
                    </li>
                    <li className="menu-heading">
                        <h3>OPCIONES</h3>
                    </li>
                    <li>
                        <a href="#0">
                        <svg className="svg-dash" >
                            <use href="#settings"></use>
                        </svg>
                        <span>Opciones</span>
                        </a>
                    </li>
                    <li>
                        <a href="#0">
                        <svg className="svg-dash">
                            <use href="#options"></use>
                        </svg>
                        <span>Ayuda </span>
                        </a>
                    </li>
                    <li>
                        <a href="#0">
                        <svg className="svg-dash">
                            <use href="#charts"></use>
                        </svg>
                        <span>Atrás </span>
                        </a>
                    </li>
                    {/* <li>
                        <div className="switch">
                        <input type="checkbox" id="mode" checked />
                        <label htmlFor="mode">
                            <span></span>
                            <span>Dark</span>
                        </label>
                        </div>
                        <button className="collapse-btn" onClick={ collapsed } aria-expanded="true" aria-label="collapse menu">
                            <svg aria-hidden="true">
                                <use href="#collapse"></use>
                            </svg>
                            <span>Contraer</span>
                        </button>
                    </li> */}
                    </ul>
                </nav> 
               
            </div>
            <Footdash/>
            {/* <div className="">
                <Homedash/>
    </div> */}
        </>
    )

}