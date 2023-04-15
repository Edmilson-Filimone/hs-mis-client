import React, { useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import Loading from '../components/Loading'

function Redirect() {
    const[searchParams, setSearchParams] = useSearchParams()
    const monthParam = searchParams.get('month')
    const yearParam = searchParams.get('year')
    const navigate = useNavigate()
    useEffect(()=>{
        if(searchParams)(
            navigate(`/?year=${yearParam}&month=${monthParam}`)
        )
    },[])
  return (
    <div><Loading/></div>
  )
}

export default Redirect