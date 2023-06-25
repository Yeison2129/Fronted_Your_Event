import React, { useState,useEffect } from 'react';
import { useTable } from 'react-table';
import './drop.css';
import { AsistEventsCompany } from '../../../api/App';

export const Drop2 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const data = React.useMemo(
    
        { col1: {}, col2: 'Row 1, Col 2', col3: 'Row 1, Col 3', col4: 'Row 1, Col 4' }
    ,
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
                  <tr>
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
        </div>
      )}
    </div>
  );
}
  

  
  