import React, { useEffect } from 'react'
import { useNavigate} from 'react-router-dom'
import Loading from '../components/Loading'
//An "adjustment" for map page only - because map does not re-render when filter is changed, 
//So we make a redirection to "Redirect component" that will redirect again to map page
function Redirect() {
    const navigate = useNavigate()
    useEffect(()=>{
        if(true)(
            navigate(`/map`)
        )
    },[])
  return (
    <div><Loading/></div>
  )
}

export default Redirect