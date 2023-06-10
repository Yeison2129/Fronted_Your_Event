import React, { useState } from 'react'
import userIcon from '../../../src/assets/userIcon.svg'
import './dropDown.css'
import { Link } from 'react-router-dom';

export const DropDown = () => {
    let user = localStorage.getItem("user");
    let company = localStorage.getItem("company")
    const closedToken = () => {
        if (user) {
        localStorage.clear()
        setTimeout(() => {
            window.location.href = "/"
            // window.location.href = "/password"
            
        }, 0.500);
        }if(company){
          localStorage.clear()
            setTimeout(()=>{
                window.location.href ="/"
            },0.500);
        }
    }
    const [active, setActive] = useState(false);
    return (
        <div>
            <div className="container-drop" >
                <img src={userIcon} alt="" id='img-container-drop'
                    onClick={() => setActive(!active)}
                />
                 {company ? (
                        <>
                        <div className={active ? "active" : "inactive"}>
                    
                    <ul className='ul-drop' >
                        <li className='li-style-drop'>
                            <Link className='a-style-dropp' to="/"> Inicio </Link>
                        </li>
                        <hr color='#eee'/>
                        <li className='li-style-drop'>
                            <Link className='a-style-dropp' to="/home" > Zona Trabajo </Link>
                        </li>

                        <hr color='#eee'/>
                        <li className='li-style-drop'>
                            <Link className='a-style-dropp' to="/editap" > Configuracion </Link>
                        </li>
                            
                        <hr color='#eee'/>
                        <button id='btn-logout' className='li-style-drop' onClick={closedToken}>
                            < Link className='a-style-dropp'  to="" >Cerrar Sesion</Link> 
                        </button>

                    </ul>
                </div>
                        </>):(
                        <>
                        {user ?(
                        <>
                        <div className={active ? "active" : "inactive"}>
                    
                    <ul className='ul-drop' >
                        <li className='li-style-drop'>
                            <Link className='a-style-dropp' to="/"> Inicio </Link>
                        </li>
                        <hr color='#eee'/>
                        <li className='li-style-drop'>
                            <Link className='a-style-dropp' to="/asistir" > Mis reservas </Link>
                        </li>

                        <hr color='#eee'/>
                        <li className='li-style-drop'>
                            <Link className='a-style-dropp' to="/editap" > Configuracion </Link>
                        </li>
                            
                        <hr color='#eee'/>
                        <li id='btn-logout' className='li-style-drop' onClick={closedToken}>
                            <Link   to="" className='a-style-dropp'>Cerrar Sesion</Link> 
                        </li>

                    </ul>
                </div>
                        </>):null}
                        </>)}

            </div>

        </div>
    )
}
