import { Formik, Form, Field } from "formik";
import "./F_Inicio_Sesion.css";
import img_login from "../../assets/login-1.svg";
import loginperson from "../../assets/login-2.svg";

import { loginUser } from "../../api/App";
import swal from "sweetalert2";
import { Link } from "react-router-dom";

export const Inicio_Sesion = () => {
  return (
    <>
      <Formik
        initialValues={{
          mail_user: "",
          password_user: "",
        }}
        onSubmit={async (values) => {
          try {
            const response = await loginUser(values);

            if (response.data.data == "logueado") {
              swal.fire({
                title: "Logueado",
                text: "Bienvenido",
                icon: "success",
                boton: "Ok",
                time: 1500,
              });
              localStorage.setItem("id_user",response.data.rows[0].id_user)
              localStorage.setItem("documento", response.data.rows[0].document_user);
              localStorage.setItem("user", response.data.rows[0].nom_user);
              localStorage.setItem("telefono", response.data.rows[0].phone_user);
              localStorage.setItem("email", response.data.rows[0].mail_user)
              localStorage.setItem("token", response.data.token);
              setTimeout(() => {
                window.location.href = "/"
              }, 1500);
            }
            if (response.data.data == "PASSWORD_ERROR") {
              swal.fire({
                title: "Contraseña incorrecta",
                text: "",
                icon: "warning",
                boton: "Ok",
                time: 1500,
              });
            }
            if (response.data.data == "Usuario no existe") {
              swal.fire({
                title: "El usuario no existe",
                text: "Registrate",
                icon: "warning",
                boton: "Ok",
                time: 1500,
              });
            }
          } catch (error) {
            console.log(error);
          }
        }}
      >
        {({ handleChange, handleSubmit }) => (
          <>
            <div className="login-design">
              <div className="waves">
                <img src={loginperson} id="loginpersonImg" alt="" />
              </div>
              <div className="login">
                <div className="login-data">
                  <img src={img_login} alt="img" title="img-login" id="img-login" />
                  <h2 className="titleLogin">Inicio de Sesión</h2>
                  <Form
                    action="#"
                    onSubmit={handleSubmit}
                    className="login-form"
                  >
                    <div className="input-field-log">
                      <i className="fas fa-envelope"></i>
                      <Field
                        autocomplete="off"
                        type="email"
                        id="mail_user_log"
                        name="mail_user"
                        placeholder="Correo"
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="input-field-log">
                      <i className="fas fa-lock"></i>
                      <Field
                        autocomplete="off"
                        type="password"
                        id="password_user_log"
                        name="password_user"
                        placeholder="Contraseña"
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <Link className="lll" to="/registro">
                      ¿Necesitas una Cuenta?
                    </Link>
                    <Field
                      autocomplete="off"
                      type="submit"
                      value="Iniciar Sesión"
                      className="btn-login"
                    />
                    <Link id="a-black" to="/">Volver al inicio</Link>
                  </Form>
                  <div className="recuperation">
                    <Link to="/CardPassword">Olvidaste tu contraseña?</Link>
                  </div>
                  <p>

                  </p>
                </div>
              </div>
            </div>
          </>
        )}
      </Formik>
    </>
  );
};
