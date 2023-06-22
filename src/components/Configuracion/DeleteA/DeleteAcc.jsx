import { Formik, Form, Field } from "formik";
import React from "react";
import swal from "sweetalert2";
import "../Editar/Password.css";
import "./deletea.css";
import {Link, useNavigate} from 'react-router-dom'
import { Footdash } from "../../dashboard_empresa/Footdash";
// import { deleteUser } from "../../../api/App";

import { Dashc } from "../Dashconfig/Dashc";

export const DeleteAcc = () => {
  const navigate = useNavigate()
  let company = localStorage.getItem("company");
  let user = localStorage.getItem("user");
  return (
    <>
    {user ? (
        <Formik
          initialValues={{
            password_user:""
          }}
          onSubmit={async (values) => {
            let response = await deleteUser(values);
            if (response.data.data == "Cuenta_Eliminada") {
                swal.fire({
                  title: "Cuenta eliminada",
                  text: "tu cuenta a sido eliminada exitosamente",
                  icon: "success",
                  boton: "Ok",
                  time: 1500,
                })
                localStorage.clear()
                setTimeout(() => {
                 navigate("/")
                }, 1500);
            } 
          }}
        >
          {({ handleChange, handleSubmit }) => (
            <div className="containDelete">
              <Dashc/>
            <section className="">
             
            </section>
            <Footdash/> 
            </div>
          )}
        </Formik>
      ) : company ? (<></>):null}
    </>
  );
};
