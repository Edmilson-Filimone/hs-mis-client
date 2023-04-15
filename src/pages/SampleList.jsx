import axios from "axios"
import { useState, useEffect } from "react"
import Loading from "../components/Loading"
import { useNavigate} from "react-router-dom"
import {AiOutlineRight, AiOutlineLeft} from "react-icons/ai"
import { toast } from "react-toastify"

function SampleList() {
    //States, routers and variables
    const baseUrl = 'http://localhost:8080'
    const navigate = useNavigate()
    const [isBusy, setIsBusy] = useState(true)
    const [dataList, setDataList] = useState([])
    const [dataSize, setDataSize] = useState(0)
    const [startIndex, setStartIndex] = useState(0)
    const [endIndex, setEndIndex] = useState(5)

    const listOfMonths = ["January", "February", "March", "April", "May","June", "July", "August", "September", "October", "November", "December"]
    const date = new Date()
    const[MonthYear, setMonthYear] = useState({month:date.toLocaleString('en', {month:'long'}), year:date.getYear() + 1900})

    //Function to delete the entires from database
    const onDelete = async (id)=>{
      if(confirm('Are you are sure?')){
        try {
          await axios.delete(`${baseUrl}/sample/${id}`)
        } catch (error) {
          toast.error('Unable to delete')
        }
        console.log(`Delete id ${id}`)
        setDataList(dataList.filter((item)=>(item.id !== id)))
      }
    }

    //function for previous and next buttons navigation on table
    const navigateTable = (value)=>{
      if(value == 'back' && startIndex >= 5){
        setStartIndex(startIndex-5)
        setEndIndex(endIndex-5)
        console.log(startIndex, '-', endIndex, '-', dataSize)
      }
      if(value=='next' && endIndex < dataSize){
        setStartIndex(startIndex+5)
        setEndIndex(endIndex+5)
        console.log(startIndex, '-', endIndex, '-', dataSize)
      }
      else toast.info('No more records')
    }

  //ON SUBMIT
  const onSubmit = (e)=>{
    e.preventDefault()
    const month = document.getElementById('month').value
    const year = document.getElementById('year').value
    setMonthYear({month, year})
    setIsBusy(true)
    toast.info(`Presenting records for ${month} of ${year}`)
}
    //Get data and update component states for table - we use reverse() to sort the result  in a desc order because this query do not sort results
    useEffect(() => {
      const getData = async ()=>{
        try {
            const data = await axios.get(`${baseUrl}/query?month=${MonthYear.month}&year=${MonthYear.year}`)
            setDataSize(data.data.length)
            setDataList(data.data.reverse())
            setIsBusy(false) 
        } catch (error) {
            console.log(error)
        }
      }
      getData()
      console.log(dataList)
    }, [MonthYear])

    if(isBusy){return <Loading/>}
  
    return (
    <>
      <span className='bg-white py-1 px-2 rounded-md shadow-md md:float-right text-sm text-text-color cursor-context-menu' title='Date'>{`${MonthYear.month} - ${MonthYear.year}`}</span>
      <section className="overflow-auto">
        <table className="w-full table-auto border-collapse my-10 text-sm">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Type</th>
              <th>Result</th>
              <th>Facility</th>
              <th>Date</th>
              <th>Month</th>
              <th>Year</th>
            </tr>
          </thead>
          <tbody>
            {dataList.slice(startIndex,endIndex).map((item)=>
            (<tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.type}</td>
              <td>{item.result}</td>
              <td>{item.facility.name}</td>
              <td>{item.date}</td>
              <td>{item.month}</td>
              <td>{item.year}</td>
              <td>
                <button className="p-1 mx-2 rounded-md w-[60px] bg-green text-white hover:brightness-90" onClick={()=> navigate(`/edit-sample/${item.id}`)}>Edit</button>
              </td>
              <td>
                <button className="p-1 mx-2 rounded-md w-[60px] bg-slate-500 text-white hover:brightness-90" onClick={()=> onDelete(item.id)}>Delete</button>
              </td>
            </tr>))}
          </tbody>
        </table>
        <section className="flex w-full justify-between items-center my-8 gap-8">
        <div className='w-full p-4 shadow-xl rounded-lg text-sm min-w-[600px]'>
            <form className='flex items-center gap-4' onSubmit={onSubmit}>
              <label className="font-semibold text-title-color"  htmlFor="month">Month</label>
              <select className='text-text-color bg-white p-1.5 border' name="month" id="month">
                {listOfMonths.map((it) => (<option key={it} value={it}>{it}</option>))}
              </select>
              <label  className="font-semibold text-title-color" htmlFor="year">Year</label>
              <input type='number' min='2023' placeholder='2023' className='text-text-color bg-white p-1.5 border' name="year" id="year" required />
              <input className='block bg-gray-400 p-1 border w-full' id='submit' type="submit" value="Select" />
            </form>
        </div>
          <button className="block text-2xl p-2.5 bg-gray-400 shadow-lg hover:bg-gray-600" title="Previous" onClick={()=> navigateTable('back')}><AiOutlineLeft/></button>
          <button className="block text-2xl p-2.5 bg-gray-400 shadow-lg hover:bg-gray-600" title="Next" onClick={()=> navigateTable('next')}><AiOutlineRight/> </button>
          <span className="text-xs">{`Displaying ${0} of ${dataSize} records`}</span>
        </section>
      </section>
    </>
  )
}

export default SampleList