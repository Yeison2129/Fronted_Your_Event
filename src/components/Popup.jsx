// import PropTypes from 'prop-types'
import React from 'react'

// import { connect } from 'react-redux'

export const Popup = ({ imagen, estadoModal, commit }) => {
  return (
   
    <>
      <div className="overlay" >
        <div className="popup" id="popup">
            <div className="img-tarjeta">
                    <div className="caja-overlay" id="box-overlay"> 
                        <img style={{width: "600px", height: "500px"}} src={imagen} alt=""/> 
                        <div className="text-tarjeta" style={{height:"100px", width:"100%", display:"flex", justifyContent:"center", alignItems:"center", margin:"5px"}}> <p style={{fontSize:"20px"}}>{commit}</p> </div>
                        <div className="btn-tarjeta">
                        <button style={{width: "150px", height: "40px", background: "#AECEFF",border: "#dce6f6", cursor: "pointer", transition: ".3s ease all", margin: "5px", borderRadius:"30px"}} onClick={ () => estadoModal(false) } >VER MAS</button>
                        <button style={{width: "150px", height: "40px", background: "rgb(219, 67, 67)",border: "#dce6f6", cursor: "pointer", transition: ".3s ease all", margin: "5px", borderRadius:"30px"}} onClick={ () => estadoModal(false) } >CERRAR</button>
                        </div>
                    </div>
            </div>
        </div>
        </div>
    </>
  )
}

// Popup.propTypes = {
//   second: PropTypes.third
// }