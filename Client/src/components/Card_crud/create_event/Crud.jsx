import React from 'react'
import './crud.css'
import { Dashboard } from '../../dashboard_empresa/Dashboard_Empresa'
import { Formik,Form,Field } from 'formik'
export const Crud = () => {
   
  return (
    <>
    <Dashboard/>
    <Formik>
    <div className="page-content">
    <div className='body-crud'>
      <h1>Edita tu evento<hr /></h1> 
      <div className="components-crud">
        <div className="img-crud  ">
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet" />
            <label for="file-upload" className="custom-file-upload">
              <i className="fa fa-cloud-upload"></i> Sube aquí el certificado de tu empresa
            </label>  
        </div>
        <Form action="" className="form-crud">
          <Field id="placeholder" type="text" name='nombre_evento' placeholder="Nombre"/>
          <Field id="placeholder" type="date" name='hora_evento'  />
          <Field id="placeholder" type="time" name='fecha_evento' />
          <Field id="placeholder" type="text" name='lugar_evento' placeholder="Lugar"/>
          <Field id="placeholder" type="double" name='precio_evento' placeholder="Precio"/>
          <Field id="placeholder" className="select-crud" name="" as="select">
            <option value="categoria">categoria...</option>
            <option value="admin">admin</option>
            <option value="user">user</option>
            <option value="empresa">empresa</option>
          </Field>

        </Form>
      </div>
      <div className="end">
        {/* <div className="content-end"> */}
        <Form action="" className="form-crud">
          <Field id="placeholder" type="text" placeholder="Descripcion" className="description" />
        </Form>
        <div className="botones-crud">
          <button className='btn-crud' id='btn-cancel'>Cancelar</button>
          <button className='btn-crud' id='btn-accept'>Aceptar</button>
        {/* </div> */}
        </div>
      </div>
    </div>
    </div>
        </Formik>
    </>
   
  )
}
