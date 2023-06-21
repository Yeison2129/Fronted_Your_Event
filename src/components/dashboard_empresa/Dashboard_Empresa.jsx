import React, { useCallback, useState, useEffect } from 'react';
import './dashboard.css';
import { Homedash } from '../Home/HomeDash';
import { Link } from 'react-router-dom'
import userIcon from "../../assets/userIcon.svg";
import { CardEvento } from '../Card_evento/Card_evento';
import { getCompany } from "../../api/App";
import { Footdash } from './Footdash';
import { AiFillHome } from "react-icons/ai";

export const Dashboard = () => {
    let company = window.localStorage.getItem("company");
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
                    <div className="page-header">
                        <div className="user-icon">

                            {traerCompany.map((company,i) => (
                                <img className='icon2' id='user-icon' src={company.img_empresa || userIcon} alt="icon" key={`${i}Empresa`} />
                            ))}
                        </div>
                        <p id='nom-user'> {company.charAt(0).toUpperCase() + company.slice(1)} </p>

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
                                        <div className="icon-dash">
                                        <i className="fa fa-solid fa-house-user" />
                                        </div>
                                        <span className='span-dash'>Inicio</span>

                                    </Link>
                                </li>
                                <li>

                                    <Link to="/cardCrud">
                              
                                        <div className="icon-dash">
                                        <i className="fa fa-solid fa-folder-plus" />
                                        </div>
                                        <span className='span-dash' >Mis Eventos</span>
                                    </Link>
                                </li>


                                <li>
                                    <Link to="/crud_eventos">

                                        <div className="icon-dash">
                                        <i className="fa fa-solid fa-plus" />

                                        </div>
                                        <span className='span-dash' >Crear evento</span>

                                    </Link>
                                </li>
                                {/* <li>
                                    <a href="#0">
                                        <svg className="svg-dash">
                                            <use href="#trends"></use>
                                        </svg>
                                        <span className='span-dash' >Estadísticas</span>
                                    </a>
                                </li> */}

                                <li>
                                    <Link to="/asistenciasCompany">
                                        <div className="icon-dash" >
                                        <i className="fa fa-solid fa-check" />     
                                        </div>
                                        <span className='span-dash' >Asistencia</span>
                                    </Link>
                                </li>
                                {/*  */}
                                <li className="menu-heading">
                                    <h3>OPCIONES</h3>
                                </li>
                                {/* <li>
                                    <a href="#0">
                                        <svg className="svg-dash" >
                                            <use href="#settings"></use>
                                        </svg>
                                        <span className='span-dash'>Opciones</span>
                                    </a>
                                </li> */}

                                <li>
                                    <a href="/">
                                        <div className="icon-dash">
                                        <i className="fa fa-solid fa-arrow-left" /> 
                                        </div>
                                        <span className='span-dash' >Atras</span>
                                    </a>
                                </li>

                            </ul>
                        </nav>

                    </div>
                    <Footdash />

                </>

            ) : null}

        </>
    )

}