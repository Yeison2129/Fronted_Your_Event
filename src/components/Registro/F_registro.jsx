import { registerUser } from "../../api/App";
import { Formik, Form, Field } from "formik";
import img from "../../assets/img.svg";
import "./F_registro.css";
import swal from "sweetalert2";

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
                time: 1500,
              });
              //sirve para definir una funcion de tiempo
              const timeout = () => {
                setTimeout(function () {
                  window.location.href = "/login";
                }, 2000);
              };
              timeout();
            }
            if (users.data.data == "user exist") {
              swal.fire({
                title: " El Usuario ya existe",
                text: "Inicia sesion",
                icon: "warning",
                boton: "Ok",
                time: 1500,
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
              time: 1500,
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
                  <h2 className="title">Registrate</h2>
                  <div className="input-field">
                    <i className="fas fa-user"></i>
                    <Field
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
                      type="text"
                      id="nom_user"
                      name="nom_user"
                      required
                      placeholder="Nombre de usuario"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="input-field">
                    <i className="fas fa-envelope"></i>
                    <Field
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
                      type="password"
                      id="password_user"
                      name="password_user"
                      required
                      placeholder="Contraseña"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="input-field">
                    <i className="fas fa-lock"></i>
                    <Field
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
                    <a href="/login">Ya tengo una cuenta</a>
                  </u>
                </div>

                <img src={img} className="image" alt="" />
              </div>
            </div>
          </div>
        )}
      </Formik>
    </>
  );
};
