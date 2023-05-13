import React from 'react'
import '../CardCompra/cardview.css'
import imgcard from '../../assets/imgcard.png'
import { useState } from 'react'
export const CardView = () => {
   

        const [previewActive, setPreviewActive] = useState(false);
      
        const handleClick = () => {
          setPreviewActive(!previewActive);
          console.log(previewActive);
        }

        const closePreview = () => {
            setPreviewActive(false);
            console.log(previewActive);
          };
          


    return (
        <>
            <div className="all">

                <div className="containerc">
                    <div className="products-container">
                        <div className="product" data-name="p-1" onClick={handleClick}>
                                <div className='image'>
                            <img src={imgcard} alt="" /></div>
                            <h1>evento</h1>
                        </div>
                    </div>
                </div>

            

        </div >
            <div className={`products-preview ${previewActive ? 'active' : ''}`}>

                <div className="preview" data-target="p-1">
                <i className="fas fa-times" onClick={closePreview} id="cierre-ventana"></i>
                    <img className='cardBig' src={imgcard} alt="" />
                   
                    <h2>Evento</h2>
                    <div className="info">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab minus quae animi consequuntur eaque sed quisquam libero, doloremque numquam? Mollitia, obcaecati in hic vero molestiae nihil praesentium laborum autem inventore.</p>
                    
                        <div className="date"><i className='bx bx-calendar'></i><b>Fecha:</b> 02/08/24</div>
                        <div className="place"><i className='bx bx-map' ></i><b>Lugar:</b> venecia</div>
                        <div className="time"><i className='bx bx-time'></i><b>Hora:</b> 2:40</div>
                        <div className="price"><i className='bx bx-purchase-tag-alt' ></i> <b>Precio:</b> $2.00</div>
                    </div>
                    <div className="buttons">
                        <button className='reserv'>!Reserva ya!</button>
                        <button className='buy'>!Compra ahora!</button>
                    </div>
                </div>
            </div>
        </>
     )
}
