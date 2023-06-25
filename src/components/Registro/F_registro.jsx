import { registerUser } from "../../api/App";
import { Formik, Form, Field } from "formik";
import "./F_registro.css";
import swal from "sweetalert2";
import { useState } from "react";
import imgRegistro from "../../assets/registro-1.svg";
import { Link, useNavigate } from "react-router-dom";

export const F_registro = () => {
  const [showPwd, setShowPwd] = useState(false)
  const [showPwd1, setShowPwd1] = useState(false)
  const navigate= useNavigate()
  


  return (
    <>
      <Formik
        initialValues={{
          document_user: "",
          nom_user: "",
          mail_user: "",
          password_user: "",
          password_user1:"",
          phone_user: "",
        }}
        onSubmit={async (values) => {
          try {
            const users = await registerUser(values);
            if (users.data.data == "INSERT_OK") {
              swal.fire({
                title: "Registro exitoso",
                text: "Gracias por registrarte con nosotros",
                icon: "success",
                boton: "Ok",
                time: 1500
              });
              const timeout = () => {
                setTimeout(function () {
                navigate("/login");
                }, 2000);
              };
              timeout();
            }
            if (users.data.data == "USER EXISTS") {
              swal.fire({
                title: " El Usuario ya existe",
                text: "Inicia sesion",
                icon: "warning",
                boton: "Ok",
                time: 1500
              });
            }
            if (users.data.data == "INSERT_ERROR") {
              swal.fire("error desconocido");
            }
            if (users.data.data == "PasswordNotCoincide") {
              swal.fire({
                title: "Las Contraseñas No coinciden",
                text: "Verifica Tu contraseña",
                icon: "warning",
                boton: "Ok",
                time: 1500
              });
            }
          } catch (error) {
            swal.fire({
              title: "Error interno en el servidor",
              text: "Intenta de nuevo más tarde",
              icon: "error",
              boton: "Ok",
              time: 1500
            });
          }
        }}
      >
        {({ handleChange, handleSubmit }) => (
          <div className="container">
            <div className="forms-container">
              <div className="signin-signup">
                <Form onSubmit={handleSubmit} className="sign-in-form">
                  <h2 className="title-r">Registrate</h2>
                  <div className="input-field">
                  <i className="fa fa-solid fa-id-card" />
                
                    <Field
                      autocomplete="off"
                      type="text"
                      id="document_user"
                      name="document_user"
                      required
                      placeholder="Numero de documento"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="input-field">
                    <i className="fas fa-user"></i>
                    <Field
                      autocomplete="off"
                      type="text"
                      id="nom_user"
                      name="nom_user"
                      required
                      placeholder="Nombre de usuario"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="input-field">
                  <i className="fa fa-solid fa-phone "  />

                    <Field
                      autocomplete="off"
                      type="phone"
                      name="phone_user"
                      required
                      placeholder="Telefono"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="input-field">
                    <i className="fas fa-envelope"></i>
                    <Field
                      autocomplete="off"
                      type="email"
                      id="mail_user"
                      name="mail_user"
                      required
                      placeholder="Correo"
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div className="input-field1">
                    <i className="fas fa-lock"></i>
                    <Field
                      autocomplete="off"
                      type={showPwd ? "text" : "password"}
                      id="password_user"
                      name="password_user"
                      required
                      placeholder="Contraseña"
                      onChange={handleChange}
                  
                  />
                  <div className="ojito" onClick={() => setShowPwd(!showPwd)}>
            {showPwd ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height={"1.5rem"}>
              <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
              <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clipRule="evenodd" />
            </svg> : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height={"1.5rem"}>
              <path d="M3.53 2.47a.75.75 0 00-1.06 1.06l18 18a.75.75 0 101.06-1.06l-18-18zM22.676 12.553a11.249 11.249 0 01-2.631 4.31l-3.099-3.099a5.25 5.25 0 00-6.71-6.71L7.759 4.577a11.217 11.217 0 014.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113z" />
              <path d="M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0115.75 12zM12.53 15.713l-4.243-4.244a3.75 3.75 0 004.243 4.243z" />
              <path d="M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 00-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 016.75 12z" />
            </svg>}
          </div>
                  </div>
                  <div className="input-field1">
                    <i className="fas fa-lock"></i>
                    
                    <Field
                      autocomplete="off"
                      type={showPwd1 ? "text" : "password"}
                      id="password_user1"
                      name="password_user1"
                      required
                      placeholder="Confirmar contraseña"
                      onChange={handleChange}
                      
                    />
                    <div className="ojito" onClick={() => setShowPwd1(!showPwd1)}>
            {showPwd1 ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height={"1.5rem"}>
              <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
              <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clipRule="evenodd" />
            </svg> : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height={"1.5rem"}>
              <path d="M3.53 2.47a.75.75 0 00-1.06 1.06l18 18a.75.75 0 101.06-1.06l-18-18zM22.676 12.553a11.249 11.249 0 01-2.631 4.31l-3.099-3.099a5.25 5.25 0 00-6.71-6.71L7.759 4.577a11.217 11.217 0 014.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113z" />
              <path d="M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0115.75 12zM12.53 15.713l-4.243-4.244a3.75 3.75 0 004.243 4.243z" />
              <path d="M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 00-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 016.75 12z" />
            </svg>}
          </div>
                  </div>
                
                  <button type="submit" className="btn solid">
                    Registrarse
                  </button>
                  <Link id="a-black" to="/">
                    Volver al inicio
                  </Link>
                </Form>
              </div>
            </div>

            <div className="panels-container">
              <div className="panel left-panel">
                <div className="content">
                  <h3>¿Eres nuevo Aquí ?</h3>
                  <p>
                    Únete a nuestra familia y no te pierdas de los eventos del
                    momento.
                  </p>

                  <u>
                    {" "}
                    <Link id="a-white" to="/login">
                      Ya tengo una cuenta
                    </Link>
                  </u> <br /> <br /> <br />
                  <h4 >¿Tienes una empresa?</h4>
                  <p>Resgistrate  <Link id="a-white" to="/RegistroEmpresa"> AQUÍ</Link>  para subir eventos</p>

                </div>

                <img src={imgRegistro} className="image" alt="" />
              </div>
            </div>
          </div>
        )}
      </Formik>
    </>
  );
};
