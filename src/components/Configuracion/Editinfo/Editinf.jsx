import React, { useEffect, useState } from 'react'
import { Formik, Form, Field } from "formik";
import "./editinfo.css";
import { Dashc } from "../Dashconfig/Dashc";
import { Footdash } from "../../dashboard_empresa/Footdash";
import userIcon from "../../../assets/userIcon.svg";
import Swal from "sweetalert2";
import { getCompany, updateCompany, updateUser } from "../../../api/App";
import { getUser } from '../../../api/App'

export const Editinfo = () => {

  let user = localStorage.getItem("user");
  let company = localStorage.getItem("company");

  const [allUser, setAllUser] = useState([])
  const [allCompany,setAllCompany]=useState([])

  const user1 = async () => {
    const response = await getUser()
    setAllUser(response.data.rows)
  }

  const company1 = async ()=>{
    const response = await getCompany()
    setAllCompany(response.data.rows)
  }

  useEffect(() => {
    user1()
  }, [])

  useEffect(()=>{
    company1()
  })




  return (
    <>
      { user ? (
        <>
          {allUser.map((user1) => (
            <Formik
              initialValues={{
                document_user: `${user1.document_user}`,
                nom_user: `${user1.nom_user}`,
                mail_user: `${user1.mail_user}`,
                password_user: `${user1.password_user}`,
                phone_user: `${user1.phone_user}`,
                img_perfil:`${user1.img_perfil}`
              }}
              onSubmit={async (values) => {
                try {
                  const users = await updateUser(values)

              if(users.data == "Cambio_Exitoso"){
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
              if(users.data == "Error_al_actualizar"){
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
          {({ handleChange,setFieldValue ,handleSubmit }) => (
            <div className="edit-info-all">
              <Dashc />
              <div className="edit-info">
                <div className="content-editi">
                  <Form className="info-dash" action="" onSubmit={handleSubmit}>
                    <div className="imgUpdate">
                      <label className="selec-cert" htmlFor="">
                     
                      <div className="img-crud">
                      <label className="selec-cert" htmlFor="">
                        <input
                          type="file"
                          id="image"
                          name="img_perfil"
                          onChange={(event) => {
                            const file = event.currentTarget.files[0];
                            setFieldValue("img_perfil", file);
                          }}
                          style={{display:'none'}}
                        />
                      </label>
                    </div>
                        
                        <img src={user1.img_perfil}  onClick={()=>{
                          document.getElementById('image').click()
                        }} ></img>
                      </label>
                    </div>
                    <label className="label-info">
                      <Field
                        id="nom_user"
                        name="nom_user"
                        type="text"
                        className="styles-dashi"
                        placeholder={
                          "Nombre"
                        }
                        required
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
                        placeholder={"Documento"
                        }
                        required
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
                        placeholder={"Telefono"
                        }
                        required
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
                        placeholder={"Correo"}
                        required
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
      ))}
        </>
      ) : company ? (
        <>
        {allCompany.map((company1) => (
          <Formik
            initialValues={{
              nom_empresa: `${company1.nom_empresa}`,
              mail_empresa: `${company1.mail_empresa}`,
              telefono_empresa: `${company1.telefono_empresa}`,
              img_empresa:`${company1.img_empresa}`,
              password_empresa:`${company1.password_empresa}`,
              img_certificado:`${company1.img_certificado}`
            }}
            onSubmit={async (values) => {
              try {
                const company2 = await updateCompany(values)

            if(company2.data == "Cambio_Exitoso"){
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
            if(company2.data == "Error_al_actualizar"){
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
        {({ handleChange,setFieldValue ,handleSubmit }) => (
          <div className="edit-info-all">
            <Dashc />
            <div className="edit-info">
              <div className="content-editi">
                <Form className="info-dash" action="" onSubmit={handleSubmit}>
                  <div className="imgUpdate">
                    <label className="selec-cert" htmlFor="">
                   
                    <div className="img-crud  ">
                      <label className="selec-cert" htmlFor="">
                        <input
                          type="file"
                          id="image"
                          name="img_empresa"
                          onChange={(event) => {
                            const file = event.currentTarget.files[0];
                            setFieldValue("img_empresa", file);
                          }}
                          style={{display:'none'}}
                        />
                      </label>
                    </div>
                      <img src={company1.img_empresa} alt=""onClick={()=>{
                          document.getElementById('image').click()
                        }} ></img>
                    </label>
                  </div>
                  <label className="label-info">
                    <Field
                      id="nom_empresa"
                      name="nom_empresa"
                      type="text"
                      className="styles-dashi"
                      placeholder={
                        "Nombre"
                      }
                      required
                      onChange={handleChange}
                    />
                    <div id="icon-pencil">
                      <i class="fa fa-solid fa-pen"></i>
                    </div>
                  </label>
                  <label className="label-info">
                    <Field
                      id="mail_empresa"
                      name="mail_empresa"
                      type="text"
                      className="styles-dashi"
                      placeholder={
                        "Correo"
                      }
                      required
                      onChange={handleChange}
                    />
                    <div id="icon-pencil">
                      <i class="fa fa-solid fa-pen"></i>
                    </div>
                  </label>
                  <label className="label-info">
                    <Field
                      id="telefono_empresa"
                      name="telefono_empresa"
                      type="text"
                      className="styles-dashi"
                      placeholder={
                        "Telefono"
                      }
                      required
                      onChange={handleChange}
                    />
                    <div id="icon-pencil">
                      <i class="fa fa-solid fa-pen"></i>
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
    ))}
      </>):null}
    </>
  );
};
