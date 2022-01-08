import React, { useMemo } from 'react'
import {COLUMNS} from './columns'
import UserData from './UserData.json'
import {useTable} from 'react-table'
function BasicTable() {
    const columns=useMemo(()=>COLUMNS,[]);
    const data=useMemo(()=>UserData,[])
    const tableInstance=useTable({columns,data})
    const {getTableProps,getTableBodyProps,headerGroups,rows,prepareRow,footerGroups}=tableInstance;
    
    return (
        <table {...getTableProps()}>
            <thead>
                {
                    headerGroups.map((headerGroup)=>(
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column)=>(
                                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
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
            <tfoot>
            {
                    footerGroups.map((footerGroup)=>(
                        <tr {...footerGroup.getFooterGroupProps()}>
                            {footerGroup.headers.map((column)=>(
                                <th {...column.getFooterProps()}>{column.render('Header')}</th>
                            ))}
                        </tr>
                    ))
                }
            </tfoot>
        </table>
    )
}

export default BasicTable
