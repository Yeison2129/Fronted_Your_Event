import React, { useEffect, useState } from "react";
// import "./set.css";
import { Formik, Form, Field } from "formik";
import { getEventsCompany, insertImg,SelectImg } from "../../../api/App";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export const Images = ({ closeModal,x }) => {
  console.log(x);
  const [allEventsCompany, setAllEventsCompany] = useState([]);
  const [allImg,setAllImg]= useState([])
 


  const eventEmpresa = async () => {
    const response = await getEventsCompany();
    setAllEventsCompany(response.data.data);
  };

  const EventImgs = async(x)=>{
    const response= await SelectImg(x);
    console.log(response);
    setAllImg(response.data.data)
  }
  useEffect(() => {
    eventEmpresa();
    EventImgs(x);
  }, []);

  const navigate = useNavigate();
  return (
    <>
      {closeModal.evento.map((eventEmpresa) => (
        
        <Formik
          initialValues={{
            img:"",
          }}
          
          onSubmit={async (values) => {
            try {
              const img = await insertImg(values, eventEmpresa.id_event);
              if (img.data == "Exito") {
                Swal.fire({
                  title: "Imagen Subida",
                  text: "",
                  icon: "success",
                  boton: "Ok",
                  time: 1500,
                });
                const timeout = () => {
                  setTimeout(function () {
                    navigate("/cardCrud");
                    window.location.reload();
                  }, 2000);
                };
                timeout();
              }
              if (img.data == "ERROR 404") {
                Swal.fire({
                  title: "Error interno del servidor",
                  icon: "warning",
                  boton: "ok",
                  time: 1500,
                });
              }
            } catch (error) {}
          }}
        >
          
          {({ handleChange, setFieldValue, handleSubmit, isSubmitting }) => (
            
            <div className="page-images">
              
              <div className="body-images">
                <h1 id="hr-crud">
                  Agrega imagenes <hr />
                </h1>

                <div className="components-images">
                  
                  <div className="comp-">
                    <Form
                      className="form-set"
                      action=""
                      onSubmit={handleSubmit}
                    >
                      <div className="other-class">
                      <div className="img-set">
                        <label className="selec-cert" htmlFor="">
                          <input
                            type="file"
                            id="image"
                            name="img"
                            onChange={(event) => {
                              const file = event.currentTarget.files[0];
                              setFieldValue("img", file);
                            }}
                          />
                        </label>
                      </div>
                      </div>
                    x
                    </Form>
                  </div>
                  <div className="end-set">
                    <Form
                      className="form-set"
                      action=""
                      onSubmit={handleSubmit}
                    >
                      <div className="botones-set">
                        <Field
                          id="btn-cancel"
                          type="submit"
                          value="Cancelar"
                          className="btn-delete"
                          onClick={() => closeModal.setOpen2(false)}
                        />
                        <button
                          id="btn-accept"
                          className="btn-accept"
                          type="submit"
                        >
                          {" "}
                          {isSubmitting ? "Subiendo...." : "Subir"}
                        </button>
                        {/* </div> */}
                       
                      </div>
                    </Form>
                  </div>
                  {allImg.map((EventImgs) => (
                          <div>
                            <img src={EventImgs.img}  />
                          </div>

                        ))}
                </div>
              </div>
            </div>
          )}
        </Formik>
      ))}
    </>
  );
};
