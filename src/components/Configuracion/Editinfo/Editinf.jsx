import { Formik, Form, Field } from "formik";
import './editinfo.css'
import {Dashc} from '../Dashconfig/Dashc'
import { Footdash } from '../../dashboard_empresa/Footdash'
import userIcon from '../../../assets/userIcon.svg'
export const Editinfo = () => {
  return (
    <div className="">
      <Dashc/>
      <div className="edit-info">
      <div className="content-editi">
        <Formik>
          <Form className="info-dash" action="">
            <div className="imgUpdate">
              <img src={userIcon} alt="" />
            </div>
            <label className="label-info" >
            <Field type="text" className="styles-dashi" placeholder="Nombre" /> 
            <i class="fa fa-solid fa-pen"></i>            
            </label>
            <label className="label-info" >
            <Field type="text" className="styles-dashi" placeholder="Documento" /> 
              </label>
              <label className="label-info" >
              <Field type="text" className="styles-dashi" placeholder="Telefono " /> 

                </label>
                <label className="label-info">
                <Field type="text" className="styles-dashi" placeholder="correo" /> 

                </label>
                <button className="btn-updatei">
                  Actualizar
                </button>

          </Form>
        </Formik>
      </div>
      </div>
     
      <Footdash/>
    </div>
  )
}
