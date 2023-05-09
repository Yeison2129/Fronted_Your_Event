import React from 'react'
import '../CardPassword/cardPassword.css'
import './cardCode.css'

export const CardCode = () => {
  return (
    <div className="contentCardPassword">
    <div className="cardPassword">
        <h2 id='title-recover'>Código de verificación.</h2>
        <p id='recover-text'>Te enviamos un correo con el código de verificación, ingresa aquí el código que te enviamos a nombredeejemplo@gmail.com </p>
        
        <div className="boxes">
        <input type="text" className='box' />
        <input type="text" className='box'/>
        <input type="text"className='box' />
        <input type="text" className='box'/>
        <input type="text"className='box' />
        <input type="text" className='box'/>
    </div>
        <div className="btn-recover">
            <a href="/CardPassword" id='hv'> Atrás</a>
            <button className='btn-next'><a href="/CardNew">Siguiente</a> </button>
        </div>
    </div>
    </div>
  )
}
