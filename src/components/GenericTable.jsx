import MaterialReactTable from "material-react-table"
import { useEffect } from "react"

function GenericTable({columns, data}) {
  useEffect(()=>{}, [data, columns])
  return (
    <div className="w-full h-fit rounded-xl overflow-hidden shadow-xl">
      <MaterialReactTable
          columns={columns}
          data={data}
          enableFilters
          enableFullScreenToggle
          enableColumnOrdering
          enableHiding
          enablePagination
      />
    </div>
  )
}

export default GenericTable