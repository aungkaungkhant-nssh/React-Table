import React, { useState } from 'react'
import { useAsyncDebounce } from 'react-table'

function ColumnFilter({column}) {
    const {filterValue,setFilter}=column
    const [value,setValue]=useState(filterValue)
    const onChange=useAsyncDebounce(value =>{
        setFilter(value || undefined)
    },1000)
    return (
        <span>
            Search : {' '}
            <input type="text" value={value|| ''} onChange={(e)=>{
                setValue(e.target.value)
                onChange(e.target.value)
            }}/>
        </span>
    )
}

export default ColumnFilter
