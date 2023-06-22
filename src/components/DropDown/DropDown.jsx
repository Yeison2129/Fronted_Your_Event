import React, { useState, useEffect } from "react";
import userIcon from "../../../src/assets/userIcon.svg";
import "./dropDown.css";
import { Link, useNavigate } from "react-router-dom";
import { getCompany, getUser } from "../../api/App";

export const DropDown = () => {
  const navigate = useNavigate()
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
        navigate("/")
        // window.location.href = "/password"
      }, 0.5);
    }
    if (company) {
      localStorage.clear();
      setTimeout(() => {
        navigate("/")
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
