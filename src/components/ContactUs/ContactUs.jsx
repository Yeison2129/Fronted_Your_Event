import React, { useRef } from 'react'
import './contactus.css'
import emailjs from '@emailjs/browser';
import face from '../../assets/SocialMedia/face.svg'
import insta from '../../assets/SocialMedia/insta.svg'
import twit from '../../assets/SocialMedia/twitter.svg'
import logoY from '../../assets/logos/logo-your-event.svg'
<<<<<<< HEAD

=======
import {Link} from 'react-router-dom'
>>>>>>> Developer

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
    <div className='big-content'>
      <div className="contus1">
        <div className="contenedor-contus1">
          <h1>
            Contactanos Aquí
          </h1>
          <div className="Socialmedia">
            <p>Nuestras Redes Sociales</p>
            <div className="redes">
            <Link to="https://www.facebook.com/profile.php?id=100093102635509"> <img src={face} /></Link> 
            <Link to="https://instagram.com/youreventvykmb?igshid=MmJiY2I4NDBkZg=="><img src={insta}  /></Link>  
            <Link to="https://twitter.com/YourEvent152151"><img src={twit}  /></Link>
              </div>
          </div>
          <p>Gmail <br /> YourEvent@gmail.com</p>
          <p>Teléfono <br /> 3127849302</p>
          <img  src={logoY} alt="" id='img-message' />
        </div>
      </div>
      <div className='contus2'>
        <h1>Déjanos tu opinión...</h1>
        <form ref={refForm} action="" onSubmit={handleSubmit} className="form-contactus">

          <div className='input-contactus'>
            <input className='input-contus2' name='username' type="text" placeholder='ㅤ' required />
            <label htmlFor="" className='label'>Nombre</label>
          </div>
          <div className="input-contactus">
            <input className='input-contus2' type="text" placeholder='ㅤ' required />
            <label htmlFor="" className='label'>Apellido</label>
          </div>

          <div className="input-contactus">
            <input className='input-contus2' id='width' type="email" name='email' placeholder='ㅤ' required />
            <label htmlFor="" className='label'>email</label>
          </div>
          <div className="input-contactus" id='message'>
            <input className='input-contus2' name='message' type="text" placeholder='ㅤ' required />
            <label htmlFor="" className='label'>Mensaje</label>
          </div>
          <button className='btn-Send'>Enviar</button>
        </form>
      </div>
    </div>
  )
}
