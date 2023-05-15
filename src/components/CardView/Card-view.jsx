import React, { useState, useEffect } from 'react';
import './cardview.css';
import imgcard from '../../assets/imgcard.png';
import { events } from '../../api/App';

export const CardView = () => {
    const [evento, setEvents] = useState([]);

    let xd = async () => {
        let response = await events()
        setEvents(response.data.data)
    }

    useEffect(() => {
        xd()
    }, []);

    const [previewActive, setPreviewActive] = useState(false);

    const handleClick = () => {
        setPreviewActive(!previewActive);
        console.log(previewActive);
    };

    const closePreview = () => {
        setPreviewActive(false);
        console.log(previewActive);
    };

    return (
        <>
            {
                evento.map((events) => (
                    <div key={events.id_event}>
                        <div className="all">
                            <div className="product" data-name="p-1" onClick={handleClick} style={{ backgroundImage: `url(${imgcard})` }}>
                                <h1> {events.nom_event} </h1>
                            </div>
                        </div>

                        <div className={`products-preview ${previewActive ? 'active' : ''}`}>
                            <div className="preview" data-target="p-1">
                                <i className="fas fa-times" onClick={closePreview} id="cierre-ventana"></i>
                                <img id="img-cardview" className="cardBig" src={imgcard} alt="" />

                                <h2> {events.nom_event} </h2>
                                <div className="info">

                                    <div className="date">
                                        <i className="bx bx-calendar"></i>
                                        <b>Fecha:</b> 02/08/24
                                    </div>
                                    <div className="place">
                                        <i className="bx bx-map"></i>
                                        <b>Lugar:</b> venecia
                                    </div>
                                    <div className="time">
                                        <i className="bx bx-time"></i>
                                        <b>Hora:</b> 2:40
                                    </div>
                                    <div className="price">
                                        <i className="bx bx-purchase-tag-alt"></i>
                                        <b>Precio:</b> $2.00
                                    </div>
                                </div>
                                <div className="buttons">
                                    <button className="reserv">¡Reserva ya!</button>
                                    <button className="buy">¡Compra ahora!</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
    );
};
