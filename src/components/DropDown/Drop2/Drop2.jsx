import React, { useEffect, useState } from 'react';
import { useTable } from 'react-table';
import './drop.css';
import { AsistEventCompany } from '../../../api/App';

export const Drop2 = ({ id }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState([])

  const x = async (id_) => {
    let respoe = await AsistEventCompany(id_)
    setUser(respoe.data.data)
  };

  useEffect(() => {
    x(id)
  }, [])





  return (
    <div className="dropdown">
      <i id="img-card-pointer" className="fa fa-solid fa-users " onClick={() => setIsOpen(!isOpen)} />

      {isOpen && (
        <div className="dropdown-content">


          <h1>Persona que asistiran a tu evento</h1>
          {
            user.map((x) => (
              <table class="rwd-table">
            <tr>
              <th>Nombre</th>
              <th>No. Documento</th>
              <th>Teléfono</th>
              <th >Correo</th>
            </tr>
            <tr >
              <td data-th="Nombre"> {x.nom_user} </td>
              <td data-th="No. Documento"> {x.document_user} </td>
              <td data-th="Telefono"> {x.phone_user} </td>
              <td id='correo-style' data-th="Correo"> {x.mail_user} </td>
            </tr>
          </table>
            ))
          }

        </div>
      )}
    </div>
  );
}