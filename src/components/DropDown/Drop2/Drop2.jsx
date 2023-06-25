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

      {/* <button className="dropdown-button" onClick={() => setIsOpen(!isOpen)}>
        Open Dropdown
      </button> */}
      {isOpen && (
        <div className="dropdown-content">
          <table {...getTableProps()} className="table">
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                  ))}
                </tr> 
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {rows.map((row) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map((cell) => {
                      return (
                        <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>

{/* 

<h1>RWD List to Table</h1>
<table class="rwd-table">
  <tr>
    <th>Movie Title</th>
    <th>Genre</th>
    <th>Year</th>
    <th>Gross</th>
  </tr>
  <tr>
    <td data-th="Movie Title">Star Wars</td>
    <td data-th="Genre">Adventure, Sci-fi</td>
    <td data-th="Year">1977</td>
    <td data-th="Gross">$460,935,665</td>
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

<p>&larr; Drag window (in editor or full page view) to see the effect. &rarr;</p> */}
        </div>
      )}
    </div>
  );
}
  

  
  