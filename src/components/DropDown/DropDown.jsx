import React, { useState, useEffect } from "react";
import userIcon from "../../../src/assets/userIcon.svg";
import "./dropDown.css";
import { Link } from "react-router-dom";
import { getCompany, getUser } from "../../api/App";

export const DropDown = () => {
<<<<<<< HEAD
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
=======
  let user = localStorage.getItem("user");
  let company = localStorage.getItem("company");

  const [traerUser, setTraerUser] = useState([]);
  const [traerCompany, setTraerCompany] = useState([]);

  const users = async () => {
    const response = await getUser();
    const userData = response.data.data.map((user) => ({
      ...user,
    }));
    setTraerUser(userData);
  };

  const companys = async () => {
    const response = await getCompany();
    const companyData = response.data.data.map((company) => ({
      ...company,
    }));
    setTraerCompany(companyData);
  };

  useEffect(() => {
    users();
    companys();
  }, []);

  const closedToken = () => {
    if (user) {
      localStorage.clear();
      setTimeout(() => {
        window.location.href = "/";
        // window.location.href = "/password"
      }, 0.5);
    }
    if (company) {
      localStorage.clear();
      setTimeout(() => {
        window.location.href = "/";
      }, 0.5);
    }
  };
  const [active, setActive] = useState(false);
  return (
    <div>
      <div className="container-drop">
        {company ? (
          <>
            {traerCompany.map((user) => (
              <img
                src={user.img_empresa || userIcon}
                alt=""
                id="img-container-drop"
                key={user.id_user}
                onClick={() => setActive(!active)}
              />
            ))}
            <div className={active ? "active" : "inactive"}>
              <ul className="ul-drop">
                <li className="li-style-drop">
                  <Link className="a-style-dropp" to="/">
                    {" "}
                    Inicio{" "}
                  </Link>
                </li>
                <hr color="#eee" />
                <li className="li-style-drop">
                  <Link className="a-style-dropp" to="/home">
                    {" "}
                    Zona Trabajo{" "}
                  </Link>
                </li>

                <hr color="#eee" />
                <li className="li-style-drop">
                  <Link className="a-style-dropp" to="/editap">
                    {" "}
                    Configuracion{" "}
                  </Link>
                </li>
>>>>>>> Developer

                <hr color="#eee" />
                <button
                  id="btn-logout"
                  className="li-style-drop"
                  onClick={closedToken}
                >
                  <Link className="a-style-dropp" to="">
                    Cerrar Sesion
                  </Link>
                </button>
              </ul>
            </div>
          </>
        ) : (
          <>
            {user ? (
              <>
                {traerUser.map((user) => (
                  <img
                    src={user.img_perfil || userIcon}
                    alt=""
                    id="img-container-drop"
                    key={user.id_user}
                    onClick={() => setActive(!active)}
                  />
                ))}
                <div className={active ? "active" : "inactive"}>
                  <ul className="ul-drop">
                    <li className="li-style-drop">
                      <Link className="a-style-dropp" to="/">
                        {" "}
                        Inicio{" "}
                      </Link>
                    </li>
                    <hr color="#eee" />
                    <li className="li-style-drop">
                      <Link className="a-style-dropp" to="/asistir">
                        {" "}
                        Mis reservas{" "}
                      </Link>
                    </li>

                    <hr color="#eee" />
                    <li className="li-style-drop">
                      <Link className="a-style-dropp" to="/editap">
                        {" "}
                        Configuracion{" "}
                      </Link>
                    </li>

                    <hr color="#eee" />
                    <li
                      id="btn-logout"
                      className="li-style-drop"
                      onClick={closedToken}
                    >
                      <Link to="" className="a-style-dropp">
                        Cerrar Sesion
                      </Link>
                    </li>
                  </ul>
                </div>
              </>
            ) : null}
          </>
        )}
      </div>
    </div>
  );
};
