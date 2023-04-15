import { useMemo } from "react";


export const tableColumns =  [
    {
      accessorKey:"facility",
      header:"Facility",
      size:180,
      minSize:260
    },
    {
      accessorKey:'value_sum',
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
      accessorKey:'resistance',
      header:'Resistance',
      size:30,
      minSize:20
      
    },
    {
      accessorKey:'negative',
      header:'Negative',
      size:30,
      minSize:30
    }
  
  
  ]