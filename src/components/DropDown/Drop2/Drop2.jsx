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
      { Header: 'Column 1', accessor: 'col1' },
      { Header: 'Column 2', accessor: 'col2' },
      { Header: 'Column 3', accessor: 'col3' },
      { Header: 'Column 4', accessor: 'col4' },
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
      <i id="img-card-pointer" className="fa fa-solid fa-users dropdown-button"  onClick={() => setIsOpen(!isOpen)} />

    
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
        </div>
      )}
    </div>
  );
}
  

  
  