import React, { useMemo } from 'react'
import {COLUMNS} from './columns'
import UserData from './UserData.json'
import {usePagination, useTable} from 'react-table'
function PaginationTable() {
    const columns=useMemo(()=>COLUMNS,[]);
    const data=useMemo(()=>UserData,[])
    const tableInstance=useTable({columns,data},usePagination)
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        state:{pageIndex,pageSize},
        pageOptions,
        previousPage,
        gotoPage,
        pageCount,
        setPageSize,
        canPreviousPage,
        canNextPage,
        nextPage,
        prepareRow,
        }=tableInstance;
    
    return (
       <>
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
                    page.map(row=>{
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
             <div>
                 <span>Page <strong>{pageIndex+1}</strong> of <strong>{pageOptions.length}</strong></span>
                
                <span>
                    | Go To Page {' '}
                    <input
                        type="number"
                        defaultValue={pageIndex + 1 || 1}
                        onChange={e => {
                            const page = e.target.value ? Number(e.target.value) - 1 : 0
                            gotoPage(page)
                        }}
                    />

                </span>
                <span>
                <select
         value={pageSize}
         onChange={e => {
           setPageSize(Number(e.target.value))
         }}
       >
         {[10,25,50].map(pageSize => (
            <option key={pageSize} value={pageSize}>
                Show {pageSize}
            </option>
         ))}
       </select>
                </span>
                 <button onClick={()=>gotoPage(0)} disabled={!canPreviousPage}>{"<<"}</button>

                 <button onClick={()=>previousPage()} disabled={!canPreviousPage}>Prev page</button>

                 <button onClick={()=>nextPage()} disabled={!canNextPage}>Next page</button>


                <button onClick={()=>gotoPage(pageIndex+1)} disabled={!canNextPage}>{">>"}</button>
             </div>
             
       </>
    )
}

export default PaginationTable

