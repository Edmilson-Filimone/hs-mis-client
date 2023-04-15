import axios from "axios"
import { useState, useEffect } from "react"
import Loading from "../components/Loading"
import { useNavigate, useSearchParams } from "react-router-dom"
import {AiOutlineRight, AiOutlineLeft} from "react-icons/ai"
import { toast } from "react-toastify"

function FacilityList() {
    const baseUrl = 'http://localhost:8080'
    const navigate = useNavigate()
    const [queryParams] = useSearchParams()
    const convertedOffset = Number.parseInt(queryParams.get('offset'))
    const [offset, setOffset] = useState( isNaN(convertedOffset) ? 0 : convertedOffset )
    const [isBusy, setIsBusy] = useState(true)
    const [dataList, setDataList] = useState([])
    const [dataSize, setDataSize] = useState(0)

    //Function to delete the entires from database
    const onDelete = async (id)=>{
      if(confirm('Are you are sure?')){
        try {
          await axios.delete(`${baseUrl}/facility/${id}`)
        } catch (error) {
          toast.error('Unable to delete')
        }
        console.log(`Delete id ${id}`)
        setDataList(dataList.filter((item)=>(item.id !== id)))
      }
    }

    //function for previous and next buttons navigation on table
    const navigateTable = (value)=>{
      if(value == 'back' && offset >= 5){
        setOffset(offset-5)
        setIsBusy(true)
        navigate(`/list-facility?offset=${offset}&max=${5}`)
        return
        }
      if(value=='next' && offset <= dataList.length){
        setOffset(offset+5)
        setIsBusy(true)
        navigate(`/list-facility?offset=${offset}&max=${5}`)
        return
      } 
      toast.info('No more records')
      
    }

    //Get data and update component states for table
    useEffect(() => {
      const getData = async ()=>{
        try {
            const data_size = await axios.get(`${baseUrl}/facility?max=1000000000`)
            const data = await axios.get(`${baseUrl}/facility?max=${5}&offset=${offset}&sort=id&order=desc`)
            setDataSize(data_size.data.length)
            setDataList(data.data)
            console.log(offset, dataSize)
            setIsBusy(false) 
        } catch (error) {
            console.log(error)
        }
      }
      getData()
      console.log(dataList)
    }, [offset])

    if(isBusy){return <Loading/>}
  
    return (
    <>
      <section className="overflow-auto">
        <table className="w-full table-auto border-collapse my-10 text-sm">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Acronym</th>
              <th>Province</th>
              <th>District</th>
              <th>Longitude</th>
              <th>Latitude</th>
            </tr>
          </thead>
          <tbody>
            {dataList.map((item)=>
            (<tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.acronym}</td>
              <td>{item.province}</td>
              <td>{item.district}</td>
              <td>{item.longitude}</td>
              <td>{item.latitude}</td>
              <td>
                <button className="p-1 mx-2 rounded-md w-[60px] bg-green text-white hover:brightness-90" onClick={()=> navigate(`/edit-facility/${item.id}`)}>Edit</button>
              </td>
              <td>
                <button className="p-1 mx-2 rounded-md w-[60px] bg-slate-500 text-white hover:brightness-90" onClick={()=> onDelete(item.id)}>Delete</button>
              </td>
            </tr>))}
          </tbody>
        </table>
        <section className="flex w-full justify-center items-center mt-8 gap-8">
          <button className="block text-2xl p-2.5 bg-gray-400 shadow-lg hover:bg-gray-600" title="Previous" onClick={()=> navigateTable('back')}><AiOutlineLeft/></button>
          <button className="block text-2xl p-2.5 bg-gray-400 shadow-lg hover:bg-gray-600" title="Next" onClick={()=> navigateTable('next')}><AiOutlineRight/> </button>
          <span className="text-xs">{`Displaying ${dataList.length} of ${dataSize} records`}</span>
        </section>
      </section>
    </>
  )
}

export default FacilityList