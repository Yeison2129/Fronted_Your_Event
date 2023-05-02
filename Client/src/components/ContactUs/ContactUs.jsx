import React, { useRef } from 'react'
import './contactus.css'
import emailjs from '@emailjs/browser';


export const ContactUs = () => {
  const refForm = useRef();
  const handleSubmit = (event) => {
    event.preventDefault();
    const serviceId = "service_q6e69qt";
    const templateId = "template_jjfdicf";
    const apikey = "R4uhACJhgF17s_2H7"

    emailjs.sendForm(serviceId, templateId, refForm.current, apikey)
      .then(result => console.log(result.text))
      .catch(error => console.error(error))
  }
  return (
    <div className='card'>
      <h1>Contact Us</h1>
      <form ref={refForm} action="" onSubmit={handleSubmit} className="form-contactus">

              <div className='input-contactus'>
                <input className='input' name='username' type="text" placeholder='Nombre' required />
                <label htmlFor="" className='label'>Nombre</label>
              </div>
            <div className="input-contactus">   
            <input className='input' type="text" placeholder='Apellido' required />
              <label htmlFor="" className='label'>Apellido</label>
              </div>
     
        <div className="input-contactus">
          <input className='input' id='width' type="email" name='email' placeholder='Correo Electronico' required />
          <label htmlFor="" className='label'>email</label>
          </div>
          <div className="input-contactus"id='message'>
            <input className='input' name='message'  type="text" placeholder='Mensaje' required />
            <label htmlFor="" className='label'>Mensaje</label>
            </div>
        <button className='btn-Send'>Enviar</button>
      </form>
    </div>
  )
}
