import React, { useEffect } from 'react'
import { Formik, Form, Field } from "formik";
import "./editinfo.css";
import { Dashc } from "../Dashconfig/Dashc";
import { Footdash } from "../../dashboard_empresa/Footdash";
import userIcon from "../../../assets/userIcon.svg";
import Swal from "sweetalert2";
import { updateUser } from "../../../api/App";
import { getUser } from '../../api/App'

export const Editinfo = () => {

  const [allUser, setAllUser] = useState([])


  const user = async () => {
    const response = await getUser()
    setAllUser(response.data.data.map(user => ({ ...user })))
  }

  useEffect(() => {
    console.log(allUser);
    user()
  }, [])

  return (
    <>
      {user ? (
        <>
        <Formik 
          initialValues={{
            document_user:"",
            nom_user:"",
            mail_user:"",
            password_user:"",
            phone_user:""
          }}
          onSubmit={async(values)=>{
            try {
              const users = await updateUser(values)

              if(users.data.data == "Cambio_Exitoso"){
                Swal.fire({
                  title:"Actualizacion exitoso",
                  text:"",
                  icon:"success",
                  boton:"Ok",
                  time:1500
                });
                const timeout = () =>{
                  setTimeout(function(){
                    window.location.href="/editap"
                  },2000)
                }
                timeout()
              }
              if(users.data.data == "Error_al_actualizar"){
                Swal.fire({
                  title:"Error al actualizar",
                  text:"intenta de nuevo mas tarde",
                  icon:"warning",
                  boton:"Ok",
                  time:1500
                });
              }
            } catch (error) {
              console.log(error);
              Swal.fire({
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
            <div className="">
              <Dashc />
              <div className="edit-info">
                <div className="content-editi">
                  <Form className="info-dash" action="" onSubmit={handleSubmit}>
                    <div className="imgUpdate">
                      <label className="selec-cert" htmlFor="">
                        <img src={userIcon} alt="" />
                      </label>
                    </div>
                    <label className="label-info">
                      <Field
                        id="nom_user"
                        name="nom_user"
                        type="text"
                        className="styles-dashi"
                        placeholder={
                          user.charAt(0).toUpperCase() + user.slice(1)
                        }
                        onChange={handleChange}
                      />
                      <div id="icon-pencil">
                        <i class="fa fa-solid fa-pen"></i>
                      </div>
                    </label>
                    <label className="label-info">
                      <Field
                        id="document_user"
                        name="document_user"
                        type="text"
                        className="styles-dashi"
                        placeholder={
                          documento.charAt(0).toUpperCase() + documento.slice(1)
                        }
                        onChange={handleChange}
                      />
                      <div id="icon-pencil">
                        <i class="fa fa-solid fa-pen"></i>
                      </div>
                    </label>
                    <label className="label-info">
                      <Field
                        id="phone_user"
                        name="phone_user"
                        type="text"
                        className="styles-dashi"
                        placeholder={
                          telefono.charAt(0).toUpperCase() + telefono.slice(1)
                        }
                        onChange={handleChange}
                      />
                      <div id="icon-pencil">
                        <i class="fa fa-solid fa-pen"></i>
                      </div>
                    </label>
                    <label className="label-info">
                      <Field
                        id="mail_user"
                        name="mail_user"
                        type="text"
                        className="styles-dashi"
                        placeholder={email.slice()}
                        onChange={handleChange}
                      />
                      <div id="icon-pencil">
                        <i class="fa fa-solid fa-envelope"></i>
                      </div>
                    </label>
                    <button type="submit" className="btn-updatei">
                      Actualizar
                    </button>
                  </Form>
                </div>
              </div>
              <Footdash />
            </div>
            
          )}
          
          </Formik>
        </>
      ) : null}
    </>
  );
};
