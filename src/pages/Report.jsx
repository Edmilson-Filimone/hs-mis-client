import { ChartBarIcon, UserMinusIcon, UserPlusIcon } from '@heroicons/react/24/solid'
import {useEffect, useState} from 'react'
import { useNavigate} from 'react-router-dom'
import Card from '../components/Card'
import {FaBiohazard} from 'react-icons/fa'
import useProcessData from '../hooks/useProcessData'
import ChartContainer from '../components/ChartContainer'
import { polarOps, lineOps } from '/public/Js/chartOptions'
import Loading from '../components/Loading'
import axios from 'axios'
import useProcessChartData from '../hooks/useProcessChartData'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { DataFrame } from 'danfojs/dist/danfojs-base'
import { toJSONBrowser } from 'danfojs/dist/danfojs-base/io/browser'

function Report() {
  //OTHERS HOOKS
  const navigate = useNavigate()
  //STATES FOR CARDS
  const [isBusy, setIsBusy] = useState(true)
  const[newData, setNewData] = useState({total:0, positive:0, resistant:0})
  const [oldData, setOldData] = useState({total:0, positive:0, resistant:0})
  //STATES FOR CHARTS & TABLE
  const [rawLineData, setRawLineData] = useState([])
  const [lineData, setLineData] = useState([])
  const [selectFacility, setSelectFacility] = useState([])

  //OTHER & STATES febuary is wrong intensionally but you must fix
  const listOfMonths = ["January", "Febuary", "March", "April", "May","June", "July", "August", "September", "October", "November", "December"]
  const index = (param) => Math.abs(listOfMonths.indexOf(param))
  const date = new Date()
  const[MonthYear, setMonthYear] = useState({month:date.toLocaleString('en', {month:'long'}), year:date.getYear() + 1900})
  const[prevMonth, setPrevMonth] = useState(MonthYear.month == "January" ? "December" : listOfMonths[index(MonthYear.month)-1])
  const[prevYear, setPrevYear] = useState(MonthYear.month == "January" ? MonthYear.year-1 : MonthYear.year)
  const[facilityName, setFacilityName] = useState('Hospital Central de Maputo')
  //FUNCTION TO FETCH DATA
  const workTask = ()=>{
    //const baseUrl = 'http://tb-api.ap-south-1.elasticbeanstalk.com'
    const baseUrl = 'http://localhost:8080/'
    const data_a = axios.get(`${baseUrl}/query/total?year=${MonthYear.year}&month=${MonthYear.month}&agg=b`)
    const data_b = axios.get(`${baseUrl}/query/total?year=${prevYear}&month=${prevMonth}&agg=b`)
    const data_d = axios.get(`${baseUrl}/query?facility=${facilityName}`)
    const data_e = axios.get(`${baseUrl}/facility?max=500`)
    axios.all([data_a, data_b ,data_d, data_e]).then(
      axios.spread((...allData) => {
        const dataA = allData[0].data
        const dataB = allData[1].data
        const dataD = allData[2].data
        const dataE = allData[3].data
        const dataAFiltered = dataA.data.filter((it)=> it.facility == facilityName)
        const dataBFiltered = dataB.data.filter((it)=> it.facility == facilityName)

        //processing card data and returning summary
        setNewData(useProcessData(dataAFiltered))
        setOldData(useProcessData(dataBFiltered))
        
        setSelectFacility(dataE) //for the form select input facility
        //SE der bag apaga aqui - Precisa filtrar o ano - add comentary to this section for further understand
        let dataList = []
        dataD.forEach((it)=>{dataList.push({facility:it.facility.name, facilityAcronym: it.facility.acronym, result:it.result,  resistanceStatus: it.resistanceStatus ,resistance:it.resistance ,month:it.month, year:it.year})})
        const dataFrameD = new DataFrame(dataList.filter((it)=> it.year == MonthYear.year)) //filtrando o ano
        if(dataFrameD.size == 0){
          toast.error('Your search was not found')
          navigate('/error')
        }
        const dataDG = dataFrameD.groupby(['facility', 'result', 'resistanceStatus', 'month', 'year']).agg({resistance:'count'})
        dataDG.rename({'resistance_count':'value'}, {inplace:true})

        //charts configurations and data
        const line = useProcessChartData(toJSONBrowser(dataDG), 'line', navigate) //line
        setRawLineData(line)
        setLineData({data:line.totalPositive, label:'Positive'})    
        setIsBusy(false)       
      })
  )
}

  //USE EFFECT
  useEffect(()=>{
    workTask()
  },[MonthYear])

    //CONDITIONAL RENDERING
    if(isBusy){
      return <Loading/>
    }
  
  //CHART
  //Chart change Data function
const changeData = (category, type) => {
  //for line chart
  if(type == 'line'){
    switch (category) {
      case "Total":
        setLineData({data: rawLineData.totalPerMonth, label: 'Total'})
        break;
      case "Positive":
        setLineData({data: rawLineData.totalPositive, label: 'Positive'})
      break;
      case "Resistant":
        setLineData({data: rawLineData.totalResistant, label: 'Resistant'})
      break;
    }
  }

}


const finalPolarData = {
                labels: ['Total', 'Positive', 'Resistant', 'Negative'],
                datasets:[
                  {
                    label:`Metric`,
                    data: [newData.total, newData.positive, newData.resistant, newData.negative],
                    backgroundColor: [
                      '#3188ec67','#5fb56369', '#dd25685e','rgba(255, 159, 64, 0.5)'
                  ],
                  borderWidth: 1,
                  
                  }
                        ]
              }

const finalLineData = {
                  labels: lineData?.data?.map((it)=> it.month.substring(0,3)),
                  datasets:[
                    {
                      label:`${lineData?.label} samples per month`,
                      data: lineData?.data?.map((it)=> it.value_sum) ,
                      backgroundColor: 'white',
                      borderColor:'white',
                      borderRadius: Number.MAX_VALUE,
                    }
                  ]
                }
                
//ON SUBMIT
const onSubmit = (e)=>{
  e.preventDefault()
  const month = document.getElementById('month').value
  const year = document.getElementById('year').value
  const facility = document.getElementById('facility').value
  setMonthYear({month, year})
  setPrevMonth(month == "January" ? "December" : listOfMonths[index(month)-1])
  setPrevYear(month == "January" ? year-1 : year)
  setFacilityName(facility)
  setIsBusy(true)
  toast.info(`Presenting results for ${month} of ${year}`)
}

  return (
    <section>
      <span className='bg-white py-1 px-2 rounded-md shadow-md text-xs text-text-color cursor-context-menu' title='Date and Facility'>{`${MonthYear.month} • ${MonthYear.year} - ${facilityName}`}</span>
      <section className="grid gap-5 md:w-fit xl:w-full md:grid-cols-2 xl:flex xl:justify-between xl:mx-auto max-w-[2400px]">
        <Card label={'Number of Samples'} value={newData.total} balance={newData.total-oldData.total} icon={<ChartBarIcon width={"25px"}/>} iconBg={'bg-blue'}/>
        <Card label={'Positive Samples'} value={newData.positive} balance={newData.positive-oldData.positive} icon={<UserPlusIcon width={"25px"}/>} iconBg={'bg-green'}/>
        <Card label={'Negative Samples'} value={newData.negative} balance={newData.negative-oldData.negative} icon={<UserMinusIcon width={"25px"}/>} iconBg={'bg-dark'}/>
        <Card label={'Resistant Samples'} value={newData.resistant} balance={newData.resistant-oldData.resistant} icon={<FaBiohazard className='text-2xl'/>} iconBg={'bg-pink'}/>
      </section>
      {!isBusy && <section className= 'my-6 flex flex-wrap space-y-10 xl:space-y-0 gap-5 xl:flex-nowrap xl:mx-auto max-w-[2400px]'>
        <ChartContainer type='polarArea' data={finalPolarData} options={polarOps} background='bg-slate-50' changeData={changeData}/>
        <ChartContainer type='line' data={finalLineData} options={lineOps} background='bg-dark' changeData={changeData}/>
      </section>}
      {!isBusy && <section className='flex flex-wrap space-y-10 md:space-y-0 gap-5 xl:flex-nowrap xl:mx-auto max-w-[2400px]'>
        <div className='min-h-[430px] h-full w-full xl:w-[300px] p-8 shadow-xl rounded-lg bg-white'>
          <h4 className='font-bold text-title-color text-center mb-10 border-b pb-6'>Change Period</h4>
          <form className='flex flex-col gap-4' onSubmit={onSubmit}>
            <label className="font-semibold text-title-color"  htmlFor="month">Month</label>
            <select className='text-text-color bg-white p-1.5 border mb-4' name="month" id="month">
              {listOfMonths.map((it) => (<option key={it} value={it}>{it}</option>))}
            </select>
            <label  className="font-semibold text-title-color" htmlFor="year">Year</label>
            <input type='number' min='2023' placeholder='2023' className='text-text-color bg-white p-1.5 border mb-3' name="year" id="year" required />
            <label  className="font-semibold text-title-color" htmlFor="facility">Facility</label>
            <select className='text-text-color bg-white p-1.5 border mb-3' name="facility" id="facility">
              {selectFacility?.map((it) => (<option key={it.id} value={it.name}>{it.name}</option>))}
            </select>
            <input className='block bg-light border p-2 w-full' id='submit' type="submit" value="Select" />
          </form>
        </div>
      </section>}
    </section>
  )
}


export default Report