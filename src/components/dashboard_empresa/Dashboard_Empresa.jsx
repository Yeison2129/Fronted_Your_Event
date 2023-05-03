import React from 'react';
import './dashboard.css';
import { Link } from 'react-router-dom'


import camaleon from "../../assets/logo-your-event.svg";
import { CardEvento } from '../Card_evento/Card_evento';
import { Crud_eventos } from '../CRUD_eventos/Crud_eventos';

export const Dashboard = () => {

 
    return (
        <>

            {/* HEADER */}
            <header className="page-header">
                <img src={camaleon} alt="camaleon" />
                <nav>
                    <button className="toggle-mob-menu" aria-expanded="false" aria-label="open menu">
                        <svg width="20" height="20" aria-hidden="true"><use href="#down"></use></svg>
                    </button>
                    <ul className="admin-menu">
                    <li className="menu-heading">
                        <h3>Empresa</h3>
                        </li>
                    <li>
                    <Link to="/cardCrud">

                        <svg>
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
                        </Link>
                    </li> */}
                    <li>
                        <Link to="/crud_eventos">
                        
                        <svg>
                            <use href="#users"></use>
                        </svg>
                        <span>Crear evento</span>
                       
                        </Link>     
                    </li>
                    <li>
                        <a href="#0">
                        <svg>
                            <use href="#trends"></use>
                        </svg>
                        <span>Estadísticas</span>
                        </a>
                    </li>
                   
                    <li>
                        <a href="#0">
                        <svg>
                            <use href="#comments"></use>
                        </svg>
                        <span>Asistencia</span>
                        </a>
                    </li>
                    <li>
                        <a href="#0">
                        <svg>
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
                        <svg>
                            <use href="#settings"></use>
                        </svg>
                        <span>Opciones</span>
                        </a>
                    </li>
                    <li>
                        <a href="#0">
                        <svg>
                            <use href="#options"></use>
                        </svg>
                        <span>Ayuda </span>
                        </a>
                    </li>
                    <li>
                        <a href="#0">
                        <svg>
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
            </header>
            {/* HEADER */}
                    
            <section className="page-content">
                    <div className='content-link'>

                    </div>
                {/* <section className="search-and-user">
                    <form>
                        
                    </form>
                    <div className="admin-profile">
                        <span className="greeting">Nombre user</span>
                        <div className="notifications">
                            <span className="badge">1</span>
                            <svg><use href="#users"></use></svg>
                        </div>
                    </div>
                </section>

                    <section className='content-link'>
                    </section>

                <footer className="page-footer">
                    <span>YourEvent </span>
                    {/* </a> 
                </footer> */}

            </section>

        </>
    )

}