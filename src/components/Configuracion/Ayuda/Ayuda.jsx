import React from 'react'
import { Dashc } from "../Dashconfig/Dashc";
import { Footdash } from "../../dashboard_empresa/Footdash";
import './Ayuda.css';

export const Ayuda = () => {
    return (
        <>
            <Dashc />
            <div className='contenido-help'>
                         <h1 id='h1-cardEvent'>
                        <i className="fa fa-regular fa-info" />
                        Ayuda <hr />
                    </h1> 
                <div className="info-help">
                    
                  <div className="help">
                  <li>
                        <h2>
                            ¿Cómo utilizar el aplicativo web?
                        </h2>
                        <p>Utilizar el aplicativo web de YourEvent es sencillo y accesible para todos. Primero, debes acceder al sitio web y crear una cuenta, proporcionando la información requerida. Una vez registrado, podrás explorar la variedad de eventos disponibles en el Quindío, utilizando filtros y categorías para encontrar los que más te interesen.</p>
                    </li>
                    <li>
                        <h2>¿Cómo puedo crear eventos?</h2>
                        <p>Si deseas crear tu propio evento, solo debes seleccionar la opción correspondiente y completar los detalles requeridos, como fecha, ubicación, descripción y precios. Además, puedes gestionar tus eventos existentes, editar la información Con YourEvent, descubrir y crear eventos en el Quindío nunca ha sido tan fácil.</p>
                        <p>Debes de ser consiente que deberás tener primero una cuenta como empresa y acceder a la zona de trabajo, oprimiendo en la parte superior derecha. </p>
                    </li>
                    <li>
                        <h2>¿Cómo puedo comunicarme con YourEvent Team?</h2>
                        <p>En la parte final de la página principal del aplicativo web encontrarás un campo donde puedes dejarnos un comentario que pronto te contestarán,además de eso nuestras redes sociales y email.</p>
                    </li>
                   
                  </div>
                    
                  <div className="aside-help">
                    <h2>Te Aseguramos</h2>
                    <ul>
                        <li><i className="fa fa-solid fa-key" /> Privacidad</li>
                        <li><i className="fa fa-solid fa-id-card" />Autenticación</li>
                    </ul>
                </div>  

                </div>

               
            </div>
            <Footdash/> 
        </>

    )
}
