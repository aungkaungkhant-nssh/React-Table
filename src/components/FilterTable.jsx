
import React, { useMemo } from 'react'
import {COLUMNS} from './columns'
import UserData from './UserData.json'
import {useFilters, useGlobalFilter, useTable} from 'react-table'
import GlobalFilter from './GlobalFilter';
import ColumnFilter from './ColumnFilter';
function FilterTable() {
    const columns=useMemo(()=>COLUMNS,[]);
    const data=useMemo(()=>UserData,[])

    //default column
    const defaultColumn=useMemo(()=>{
        return {
            Filter:ColumnFilter
        }
    },[])

    const tableInstance=useTable({columns,data,defaultColumn},useGlobalFilter,useFilters)
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        footerGroups,
        state,
        setGlobalFilter
        }=tableInstance;
      const {globalFilter}=state;
        
      
    return (
        <>
            <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter}/>
            <table {...getTableProps()}>
                <thead>
                    {
                        headerGroups.map((headerGroup)=>(
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map((column)=>(
                                    <th {...column.getHeaderProps()}>{column.render('Header')}
                                     {/* Render the columns filter UI */}
                                     <div>{column.canFilter ? column.render('Filter') : null}</div>
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
        </>
    )
}

export default FilterTable
