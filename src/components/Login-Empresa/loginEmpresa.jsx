import { Formik, Form, Field } from "formik";
import wave1 from '../../assets/wave1.png';
import empresa from "../../assets/empresa.svg";
import male from "../../assets/male.svg";
import React from 'react'
import "./loginEmpresa.css"

export const LoginEmpresa = () => {

    const inputs = document.querySelectorAll(".input");
    function addcl(){
        let parent = this.parentNode.parentNode;
        parent.classList.add("focus");
    }

    function remcl(){
        let parent = this.parentNode.parentNode;
        if(this.value == ""){
            parent.classList.remove("focus");
        }
    }


    inputs.forEach(input => {
        input.addEventListener("focus", addcl);
        input.addEventListener("blur", remcl);
    });


    return (
        <>

        <Formik
            initialValues={{
                username: "",
                password_user: "",
            }}
            onSubmit = { async (values) => {
                try {
                    console.log(values);
                } catch (error) {
                    console.log(error);
                }
            }}
        >
            {({ handleChange, handleSubmit }) => (
            <>
                <img src={wave1} className="loginEmpresa-wave" alt="img" title="wave1.png" />
                <div className="loginEmpresa-container">
                    <div className="loginEmpresa-img">
                        <img src={empresa} alt="img" title="empresa" />
                    </div>
                    <div className="loginEmpresa-login-content">
                        <Form action="#" onSubmit={handleSubmit} className="login-form" >
                            <img src={male} alt="img" title="male" />
                            <h2 className="loginEmpresa-title">Bienvenido</h2>
                            

                            <div className="input-field">
                                <i className="fas fa-user"></i>
                                <Field
                                    type="text"
                                    id="username"
                                    name="username"
                                    placeholder="Usuario"
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="input-field">
                                <i className="fas fa-lock"></i>
                                <Field
                                    type="password"
                                    id="password_user"
                                    name="password_user"
                                    placeholder="Contraseña"
                                    onChange={handleChange}
                                />
                            </div>
                            <button type="submit" className="boton-morado btn solid" >Iniciar Sesión</button>
                        </Form>
                    </div>
                </div>     
            </>
            )}
        </Formik>
        </>

    )
}


