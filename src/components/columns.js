import ColumnFilter from './ColumnFilter'
export const COLUMNS=[
    {
        Header:"Id",
        Footer:"Id",
        accessor:"id",
        // Filter:ColumnFilter,
        disableFilters:true // <- not filter
    },
    {
        Header:"First Name",
        Footer:"First Name",
        accessor:"first_name",
        // Filter:ColumnFilter
    },
    {
        Header:"Last Name",
        Footer:"Last Name",
        accessor:"last_name",
        // Filter:ColumnFilter
    },   
    {
        Header:"Date of birth",
        Footer:"Date of birth",
        accessor:"date_of_birth",
        // Filter:ColumnFilter
    },
    {
        Header:"City",
        Footer:"City",
        accessor:"city",
        // Filter:ColumnFilter
    },
    {
        Header:"Phone",
        Footer:"Phone",
        accessor:"phone",
        // Filter:ColumnFilter
    }
]