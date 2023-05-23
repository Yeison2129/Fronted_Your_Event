import React, { useState } from 'react'
import userIcon from '../../../src/assets/userIcon.svg'
import './dropDown.css'

export const DropDown = () => {
    let user = localStorage.getItem("user");
    let company = localStorage.getItem("company")
    const closedToken = () => {
        if (user) {
        localStorage.removeItem("user")
        localStorage.removeItem("auth")
        setTimeout(() => {
            window.location.href = "/"
        }, 0.500);
        }if(company){
            localStorage.removeItem("company")
            localStorage.removeItmen("auth")
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
                            <a className='a-style-dropp' href=""> Inicio </a>
                        </li>
                        <hr color='#eee'/>
                        <li className='li-style-drop'>
                            <a className='a-style-dropp' href="/dashboard" > Zona Trabajo </a>
                        </li>

                        <hr color='#eee'/>
                        <li className='li-style-drop'>
                            <a className='a-style-dropp' href="password" > Configuracion </a>
                        </li>
                            
                        <hr color='#eee'/>
                        <button id='btn-logout' className='li-style-drop' onClick={closedToken}>
                            <a  className='a-style-dropp'  href="" >Cerrar Sesion</a> 
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
                            <a className='a-style-dropp' href=""> Inicio </a>
                        </li>
                        <hr color='#eee'/>
                        <li className='li-style-drop'>
                            <a className='a-style-dropp' href="" > Contactos </a>
                        </li>

                        <hr color='#eee'/>
                        <li className='li-style-drop'>
                            <a className='a-style-dropp' href="password" > Configuracion </a>
                        </li>
                            
                        <hr color='#eee'/>
                        <button id='btn-logout' className='li-style-drop' onClick={closedToken}>
                            <a  className='a-style-dropp'  href="" >Cerrar Sesion</a> 
                        </button>

                    </ul>
                </div>
                        </>):null}
                        </>)}

            </div>

        </div>
    )
}
