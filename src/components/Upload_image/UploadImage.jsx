import React from "react";
import { Formik,Form } from "formik"

export const ImageUploadForm = () => {
  return (
    <Formik
      initialValues={{
        image: ``,
      }}
      onSubmit={async (values) => {
        try {
          

          if (users.data == "Cambio_Exitoso") {
            Swal.fire({
              title: "Actualizacion exitoso",
              text: "",
              icon: "success",
              boton: "Ok",
              time: 1500,
            });
            const timeout = () => {
              setTimeout(function () {
                navigate("/editap");
              }, 2000);
            };
            timeout();
          }
        } catch (error) {
          console.log(error);
          Swal.fire({
            title: "Error interno en el servidor",
            text: "Intenta de nuevo más tarde",
            icon: "error",
            boton: "Ok",
            time: 1500,
          });
        }
      }}
    >
      {({ handleChange, setFieldValue, handleSubmit, isSubmitting }) => (
        <div className="edit-info-all">
          <div className="edit-info">
            <div className="content-editi">
              <Form className="info-dash" action="" onSubmit={handleSubmit}>
                  <label className="selec-cert" htmlFor="">
                    <div className="img-crud">
                      <label className="selec-cert" htmlFor="">
                        <input
                          type="file"
                          id="image"
                          name="img"
                          onChange={(event) => {
                            const file = event.currentTarget.files[0];
                            setFieldValue("img_perfil", file);
                          }}
                          style={{ display: "none" }}
                        />
                      </label>
                    </div>
                    <img
                      src={`http://res.cloudinary.com/dlfn93ikw/image/upload/v1685630982/images/bw1zz9znp08gojc6ddy6.jpg`}
                      onClick={() => {
                        document.getElementById("image").click();
                      }}
                    ></img>
                  </label>
                <button id="btn-accept" className="btn-updatei" type="submit">
                  {" "}
                  {isSubmitting ? "Subiendo...." : "Subir"}
                </button>
              </Form>
            </div>
          </div>
        </div>
      )}
    </Formik>
  );
};
