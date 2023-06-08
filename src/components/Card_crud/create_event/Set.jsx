import React,{useState} from 'react'
import './set.css'
import { Card_crud } from '../card_evento_empresa/Card'
import { Formik,Form,Field } from 'formik'
import { Modal } from 'bootstrap'
export const Set = ({closeModal}) => {
  return (  
    <>
    <Formik>
<div className="page-set">
    <div className='body-set'>  
      <h1 id="hr-crud">Edita tu evento  <hr /></h1> 
    
      <div className="components-set">
        <div className="img-set  ">
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet" />
            <label for="file-upload" className="custom-file-upload">
              <i className="fa fa-cloud-upload"></i> Sube aquí una imagen
            </label>  
        </div>
        <Form action="" className="form-set">
          <Field id="placeholder" type="text" name='nombre_evento' placeholder="Nombre"/>
          <Field id="placeholder" type="date" name='hora_evento'  />
          <Field id="placeholder" type="time" name='fecha_evento' />
          <Field id="placeholder" type="text" name='lugar_evento' placeholder="Lugar"/>
          <Field id="placeholder" type="double" name='precio_evento' placeholder="Precio"/>
          <Field id="placeholder" className="select-crud" name="" as="select">
            <option value="categoria">categoria...</option>
          </Field>

        </Form>
      </div>
      <div className="end-set">
        {/* <div className="content-end"> */}
        <Form action="" className="form-set">
          <Field id="placeholder" type="text" placeholder="Descripción" className="description" />
        </Form>
        <div className="botones-set">
          <button className='btn-set' id='btn-cancel'
          onClick={() => closeModal(false)} >Cancelar</button>
          <button className='btn-set' id='btn-accept'
          onClick={() => closeModal(false)} >Aceptar</button>
        {/* </div> */}
        </div>
      </div>
    </div>
    </div>
        </Formik>
        
    </>
    
  )
}
