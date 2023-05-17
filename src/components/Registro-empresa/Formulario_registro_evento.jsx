import React, { useRef } from 'react';
import { Formik, Form, Field } from 'formik';
import { registerCompany } from '../../api/App';
import swal from 'sweetalert2';

export const RegistroEmpresaFormulario = () => {
  const fileInputRef = useRef(null);

  const handleSubmit = async (values) => {
    try {
      const empresas = await registerCompany(values);
      if (empresas.data.data === 'INSERT_OK') {
        swal.fire({
          title: 'Registro Exitoso',
          text: 'Gracias por registrarte con nosotros',
          icon: 'success',
          boton: 'ok',
          time: 1500,
        });
        const timeout = () => {
          setTimeout(function () {
            window.location.href = '/loginEmpresa';
          }, 2000);
        };
        timeout();
      }
      if (empresas.data.data === 'INSERT_ERROR') {
        swal.fire({
          title: 'Error Al registrarte',
          text: 'Error',
          icon: 'warning',
          boton: 'Ok',
          time: 1500,
        });
      }
      if (empresas.data.data === 'company_exist') {
        swal.fire({
          title: 'Tu usuario ya esta registrado',
          text: 'Error',
          icon: 'Warning',
          boton: 'Ok',
          time: 1500,
        });
      }
    } catch (error) {
      swal.fire({
        title: 'Error interno en el servidor',
        text: 'Intenta de nuevo mas tarde',
        icon: 'error',
        boton: 'Ok',
        time: 1500,
      });
    }
  };

  return (
    <>
      <Formik
        initialValues={{
          nom_empresa: '',
          mail_empresa: '',
          telefono_empresa: '',
          password_empresa: '',
          image: '',
        }}
        onSubmit={handleSubmit}
      >
        {({ handleChange, handleSubmit, setFieldValue }) => (
          <Form onSubmit={handleSubmit} className="sign-in-form">
            <h2 className="title">Registra tu empresa</h2>
            <div className="input-field">
              <i> </i>
              <Field
                type="text"
                id="nom_empresa"
                name="nom_empresa"
                placeholder="Nombre de la empresa"
                required
              />
            </div>
            <div className="input-field">
              <i> </i>
              <Field
                type="number"
                id="telefono_empresa"
                name="telefono_empresa"
                placeholder="Telefono"
              />
            </div>
            <div className="input-field">
              <i> </i>
              <Field
                type="email"
                id="mail_empresa"
                name="mail_empresa"
                placeholder="Correo"
                required
              />
            </div>
            <div className="input-field">
              <i> </i>
              <Field
                type="password"
                id="password_empresa"
                name="password_empresa"
                placeholder="Contraseña"
                required
              />
            </div>
            <div className="input-field">
            <i> </i>
              <Field
                type="file"
                id="image"
                name="image"
                innerRef={fileInputRef.current}
              />
            </div>

            <button
              type="submit"
              value="Enviar"
              className="btn solid"
              onClick={() => {
                const file = fileInputRef.current.files[0];
                if (file) {
                  setFieldValue("image", file);
                }
              }}
            >
              Registrate
            </button>
            <a href="/">Volver al inicio</a>
          </Form>
        )}
      </Formik>
    </>
  );
};
