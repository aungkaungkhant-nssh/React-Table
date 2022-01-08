import React, { useMemo } from 'react'
import { useSortBy, useTable } from 'react-table';
import {COLUMNS} from './columns'
import userData from './UserData.json'
function SortTable() {
    const columns=useMemo(()=>COLUMNS,[]);
    const data=useMemo(()=>userData,[]);
    const tableInstance=useTable({columns,data},useSortBy)
    const {getTableProps,getTableBodyProps,headerGroups,rows,prepareRow,footerGroups}=tableInstance;
    return (
       <table>
           <thead>
               {
                   headerGroups.map((headerGroup)=>(
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column)=>(
                                <th {...column.getHeaderProps(column.getSortByToggleProps())}>{column.render('Header')}
                                    <span>
                                    {column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}
                                    </span>
                                </th>
                            ))}
                        </tr>
                   ))
               }
           </thead>
           <tbody {...getTableBodyProps()}>
                {
                    rows.map(row=>{
                        prepareRow(row)
                        return(
                            <tr {...row.getRowProps()}>
                                {
                                    row.cells.map(cell => {
                        
                                    return (
                                    <td {...cell.getCellProps()}>
                                        {   
                                        cell.render('Cell')}
                                    </td>
                                    )
                                })}
                            </tr>
                        )
                    })
                }
            </tbody>
       </table>
    )
}

export default SortTable
