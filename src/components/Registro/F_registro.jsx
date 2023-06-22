import { registerUser } from "../../api/App";
import { Formik, Form, Field } from "formik";
import "./F_registro.css";
import swal from "sweetalert2";
<<<<<<< HEAD
=======
import imgRegistro from "../../assets/registro-1.svg";
import { Link } from "react-router-dom";
>>>>>>> Developer

export const F_registro = () => {
  return (
    <>
      <Formik
        initialValues={{
          document_user: "",
          nom_user: "",
          mail_user: "",
          password_user: "",
          phone_user: "",
        }}
        onSubmit={async (values) => {
          console.log("values-->", values);

          try {
            const users = await registerUser(values);
            console.log(users);

            if (users.data.data == "INSERT_OK") {
              swal.fire({
                title: "Registro exitoso",
                text: "Gracias por registrarte con nosotros",
                icon: "success",
                boton: "Ok",
<<<<<<< HEAD
                time: 1500,
=======
                time: 1500
>>>>>>> Developer
              });
              //sirve para definir una funcion de tiempo
              const timeout = () => {
                setTimeout(function () {
                  window.location.href = "/login";
                }, 2000);
              };
              timeout();
            }
<<<<<<< HEAD
            if (users.data.data == "user exist") {
=======
            if (users.data.data == "USER EXISTS") {
>>>>>>> Developer
              swal.fire({
                title: " El Usuario ya existe",
                text: "Inicia sesion",
                icon: "warning",
                boton: "Ok",
<<<<<<< HEAD
                time: 1500,
=======
                time: 1500
>>>>>>> Developer
              });
            }
            if (users.data.data == "INSERT_ERROR") {
              swal.fire("error desconocido");
            }
          } catch (error) {
            swal.fire({
              title: "Error interno en el servidor",
              text: "Intenta de nuevo más tarde",
              icon: "error",
              boton: "Ok",
<<<<<<< HEAD
              time: 1500,
=======
              time: 1500
>>>>>>> Developer
            });
          }
        }}

        // handleReset = () => {}
      >
        {({ handleChange, handleSubmit }) => (
          <div className="container">
            <div className="forms-container">
              <div className="signin-signup">
                <Form onSubmit={handleSubmit} className="sign-in-form">
<<<<<<< HEAD
                  <h2 className="title">Registrate</h2>
                  <div className="input-field">
                    <i className="fas fa-user"></i>
                    <Field
=======
                  <h2 className="title-r">Registrate</h2>
                  <div className="input-field">
                  <i className="fa fa-solid fa-id-card" />
                
                    <Field
                      autocomplete="off"
>>>>>>> Developer
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
<<<<<<< HEAD
=======
                      autocomplete="off"
>>>>>>> Developer
                      type="text"
                      id="nom_user"
                      name="nom_user"
                      required
                      placeholder="Nombre de usuario"
                      onChange={handleChange}
                    />
<<<<<<< HEAD
=======
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
>>>>>>> Developer
                  </div>
                  <div className="input-field">
                    <i className="fas fa-envelope"></i>
                    <Field
<<<<<<< HEAD
=======
                      autocomplete="off"
>>>>>>> Developer
                      type="email"
                      id="mail_user"
                      name="mail_user"
                      required
                      placeholder="Correo"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="input-field">
                    <i className="fas fa-lock"></i>
                    <Field
<<<<<<< HEAD
=======
                      autocomplete="off"
>>>>>>> Developer
                      type="password"
                      id="password_user"
                      name="password_user"
                      required
                      placeholder="Contraseña"
                      onChange={handleChange}
                    />
                  </div>
                  {/* <div className="input-field">
                    <i className="fas fa-lock"></i>
                    <Field
<<<<<<< HEAD
                      type="phone"
                      name="phone_user"
                      required
                      placeholder="Telefono"
                      onChange={handleChange}
                    />
                  </div>
                  <button type="submit" className="btn solid">
                    Registrarse
                  </button>
                  <a href="/">Volver al inicio</a>
=======
                      autocomplete="off"
                      type="password"
                      id="password_user"
                      name="password_user"
                      required
                      placeholder="Confirmar contraseña"
                      onChange={handleChange}
                    />
                  </div> */}
                 
                  <button type="submit" className="btn solid">
                    Registrarse
                  </button>
                  <Link id="a-black" to="/">
                    Volver al inicio
                  </Link>
>>>>>>> Developer
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
<<<<<<< HEAD
                    <a href="/login">Ya tengo una cuenta</a>
                  </u>
                </div>

                <img src={img} className="image" alt="" />
=======
                    <Link id="a-white" to="/login">
                      Ya tengo una cuenta
                    </Link>
                  </u> <br /> <br /> <br />
                  <h4 >¿Tienes una empresa?</h4>
                  <p>Resgistrate  <Link id="a-white" to="/RegistroEmpresa"> AQUÍ</Link>  para subir eventos</p>

                </div>

                <img src={imgRegistro} className="image" alt="" />
>>>>>>> Developer
              </div>
            </div>
          </div>
        )}
      </Formik>
    </>
  );
};
