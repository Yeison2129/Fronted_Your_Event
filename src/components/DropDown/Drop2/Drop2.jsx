import React, { useState } from 'react';
import { useTable } from 'react-table';
import './drop.css';

export const Drop2 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const data = React.useMemo(
    () => [
      { col1: 'Row 1, Col 1', col2: 'Row 1, Col 2', col3: 'Row 1, Col 3', col4: 'Row 1, Col 4' },
      { col1: 'Row 2, Col 1', col2: 'Row 2, Col 2', col3: 'Row 2, Col 3', col4: 'Row 2, Col 4' },
      { col1: 'Row 3, Col 1', col2: 'Row 3, Col 2', col3: 'Row 3, Col 3', col4: 'Row 3, Col 4' },
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      { Header: 'Nombre', accessor: 'col1' },
      { Header: 'No Documento', accessor: 'col2' },
      { Header: 'Teléfono', accessor: 'col3' },
      { Header: 'Correo', accessor: 'col4' },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data });

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
  
  <tr>
    <td data-th="Movie Title">Howard The Duck</td>
    <td data-th="Genre">"Comedy"</td>
    <td data-th="Year">1986</td>
    <td data-th="Gross">$16,295,774</td>
  </tr>
  
  <tr>
    <td data-th="Movie Title">American Graffiti</td>
    <td data-th="Genre">Comedy, Drama</td>
    <td data-th="Year">1973</td>
    <td data-th="Gross">$115,000,000</td>
  </tr>
</table>

        </div>
      )}
    </div>
  );
}
  

  
  