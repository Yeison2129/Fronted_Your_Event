import React, { useState } from 'react';
import { useTable } from 'react-table';
import './drop.css';
import { AsistEventCompany } from '../../../api/App';

export const Drop2 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser]= useState([])
  

  return (
    <div className="dropdown">
      <i id="img-card-pointer" className="fa fa-solid fa-users "  onClick={() => setIsOpen(!isOpen)} />

      {isOpen && (
        <div className="dropdown-content">
         

<h1>Persona que asistiran a tu evento</h1>
<table class="rwd-table">
  <tr>
    <th>Nombre</th>
    <th>No. Documento</th>
    <th>Teléfono</th>
    <th >Correo</th>
  </tr>
  <tr >
    <td data-th="Nombre">Mariana Valencia Henao</td>
    <td data-th="No. Documento">1095178011</td>
    <td data-th="Telefono">3232930273</td>
    <td id='correo-style' data-th="Correo">marianavalenciahenao0@gmail.com</td>
  </tr>
</table>

        </div>
      )}
    </div>
  );
}