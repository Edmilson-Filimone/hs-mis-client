import { useMemo } from "react";


export const tableColumns =  [
    {
      accessorKey:"name",
      header:"Name",
      size:180,
      minSize:260
    },
    {
      accessorKey:'value',
      header:'Total',
      size:30,
      minSize:30
      
    },
    {
      accessorKey:'positive',
      header:'Positive',
      size:30,
      minSize:30
      
    },
    {
      accessorKey:'negative',
      header:'Negative',
      size:30,
      minSize:20
      
    },
    {
      accessorKey:'prevalence',
      header:'Prevalence',
      size:30,
      minSize:30
    }
  
  
  ]