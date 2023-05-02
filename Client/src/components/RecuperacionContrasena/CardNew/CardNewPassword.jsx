import React from 'react'
import '../CardPassword/cardPassword.css'
export const CardNewPassword = () => {
  return (
    <div className="contentCardPassword">
    <div className="cardPassword">
        <h2 id='title-recover'>Nueva contraseña!</h2>
       
        <p  className="text">
            Ingresa la nueva contraseña que deseas tener. <br /><br />
            Debe tener al menos 6 dígitos.<br />
            Debe tener mínimo una mayúscula.<br />
            Debe contener números. </p>
        
        <input id='input-recover' type="text" placeholder='Ingresa la nueva contraseña'/>
    
        <div className="btn-recover">
            <a href="/CardCode" id='hv'>Atrás</a>
            <button className='btn-next'>enviar</button>
        </div>
    </div>
    </div>
  )
}
