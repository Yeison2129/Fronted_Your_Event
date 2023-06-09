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
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium sequi obcaecati repudiandae? Ut exercitationem odit, natus ad explicabo ex quis rerum expedita qui praesentium et repellat, beatae suscipit fugiat quaerat?</p>
                    </li>
                    <li>
                        <h2>¿Cómo puedo crear eventos?</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint debitis quidem aperiam quod nam libero deserunt illo error veritatis suscipit voluptatum repellendus reprehenderit sed officia, omnis dolores aspernatur fugiat eaque!</p>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis sapiente similique doloremque molestias fugiat enim, reprehenderit saepe vitae assumenda molestiae ipsum eius tempore aut, obcaecati veritatis distinctio placeat asperiores beatae?</p>
                    </li>
                    <li>
                        <h2>¿Cómo puedo comunicarme con YourEvent Team?</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt voluptates, earum sint expedita esse explicabo ducimus ut ea ullam ratione velit modi laborum quam? At necessitatibus totam possimus consequuntur dolorem.</p>
                    </li>
                    <li>
                        <h2>Other</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto sunt corrupti libero pariatur nihil rerum placeat voluptatem modi, qui quam id dolor eaque numquam dolorem laboriosam quas, voluptate explicabo magni.</p>
                    </li>
                  </div>
                    
                  <div className="aside-help">
                    <h2>Te Aseguramos</h2>
                    <ul>
                        <li><i className="fa fa-solid fa-key" /> Privacidad</li>
                        <li><i className="fa fa-solid fa-id-card" />Licencia</li>
                    </ul>
                </div>  

                </div>

               
            </div>
            <Footdash/> 
        </>

    )
}
