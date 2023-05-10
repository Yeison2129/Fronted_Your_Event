import React from 'react'
import './cardPassword.css'

export const CardPassword = () => {
  return (
    <div className="contentCardPassword">
      <div className="cardPassword">
          <h2 id='title-recover'>Recupera tu contraseña!</h2>
          <p id='recover-text'>Ingresa tu correo electrónico y te enviaremos un correo con instrucciones para el cambio de contraseña </p>
          <input id='input-recover' type="text" placeholder='Ingresa tu correo electrónico'/>
      
          <div className="btn-recover">
              <a href="/" id='hv'>Inicio</a>
              <button  className='btn-next'><a href="/CardCode">Siguiente</a> </button>
          </div>
      </div>
    </div>
  )
}
