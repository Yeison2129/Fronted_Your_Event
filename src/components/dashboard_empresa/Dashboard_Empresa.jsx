import React, { useCallback, useState } from 'react';
import './dashboard.css';
import { Homedash } from '../Home/HomeDash';
import { Link } from 'react-router-dom'
import userIcon from "../../assets/userIcon.svg";
import { CardEvento } from '../Card_evento/Card_evento';
import { Crud_eventos } from '../CRUD_eventos/Crud_eventos';
import { Footdash } from './Footdash';

export const  Dashboard = () => {
    let company = window.localStorage.getItem("company");
    console.log(company);
    const [isContainerActive, setIsContainerActive] = useState(false)
    const [ImagenPopup, setImagenPopup] = useState("")
    const [TextPopup, setTextPopup] = useState("")

     const closedToken = () => {
        if (company) {
        localStorage.removeItem("company")
        localStorage.removeItem("auth")
        setTimeout(() => {
            window.location.href = "/"
        }, 0.500);
        }
    }

    const tarjetaAbrir = (imagen, commit) => {
        console.log("Entra a la funcion!", imagen);
        setIsContainerActive(true);
        setImagenPopup(imagen);
        setTextPopup(commit);
        console.log(isContainerActive);
        console.log(commit);
        // overlay.classList.add('active');
        // popup.classList.add('active');
};

const cerrarPopup = useCallback((valor) => {
    setIsContainerActive(valor);
}, []);

    return (
        <>
            {company ? (
                <>
                <div className="page-header">
                <div className="user-icon">
                <img id='user-icon' src={userIcon} alt="icon" />
                <p id='nom-user'> {company.charAt(0).toUpperCase() + company.slice(1)} </p>
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
                        <span className='span-dash'>Inicio</span>
                    
                        </Link>     
                    </li>
                    <li>
                   
                    <Link to="/cardCrud">

                        <svg className="svg-dash">
                            <use href="#pages"></use>
                        </svg>
                        <span className='span-dash' >Mis Eventos</span>
                        </Link>
                    </li>
             
                
                    <li>
                        <Link to="/crud_eventos">
                        
                        <svg  className="svg-dash">
                            <use href="#users"></use>
                        </svg>
                        <span className='span-dash' >Crear evento</span>
                    
                        </Link>     
                    </li>
                    <li>
                        <a href="#0">
                        <svg  className="svg-dash">
                            <use href="#trends"></use>
                        </svg>
                        <span className='span-dash' >Estadísticas</span>
                        </a>
                    </li>
                
                    <li>
                        <a href="#0">
                        <svg className="svg-dash" >
                            <use href="#comments"></use>
                        </svg>
                        <span className='span-dash' >Asistencia</span>
                        </a>
                    </li>
                    <li>
                        <a href="#0">
                        <svg className="svg-dash" >
                            <use href="#appearance"></use>
                        </svg>
                        <span className='span-dash' >Papelera  </span>
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
                        <span className='span-dash'>Opciones</span>
                        </a>
                    </li>
                    <li>
                        <a href="#0">
                        <svg className="svg-dash">
                            <use href="#options"></use>
                        </svg>
                        <span className='span-dash' >Ayuda </span>
                        </a>
                    </li>
                    <li>
                        <a href="/">
                        <svg className="svg-dash">
                            <use href="#charts"></use>
                        </svg>
                        <span className='span-dash' >Atras</span>
                        </a>
                    </li>
                   
                    </ul>
                </nav> 
               
            </div>
            <Footdash/>
           
                </>

            ):null}
            
        </>
    )

}