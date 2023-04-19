import { ChartBarIcon, HomeModernIcon, UserPlusIcon } from '@heroicons/react/24/solid'
import React, { useEffect, useState } from 'react'
import { useNavigate} from 'react-router-dom'
import Card from '../components/Card'
import {FaBiohazard} from 'react-icons/fa'
import useProcessData from '../hooks/useProcessData'
import ChartContainer from '../components/ChartContainer'
import { barOps, lineOps } from '/public/Js/chartOptions'
import GenericTable from '../components/GenericTable'
import Loading from '../components/Loading'
import axios from 'axios'
import useProcessChartData from '../hooks/useProcessChartData'
import { tableColumns } from '../../public/Js/tableColumns'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


function Home() {
  //OTHERS HOOKS
  const navigate = useNavigate()
 
  //STATES FOR CARDS
  const [isBusy, setIsBusy] = useState(false) //desactivar mais tarde 
  const [nFacility, setNFacility] = useState(0)
  const [nFacility_b, setNFacility_b] = useState(0)
  const[newData, setNewData] = useState({total:0, positive:0, prevalence:0})
  const [oldData, setOldData] = useState({total:0, positive:0, resistant:0})
 
  //STATES FOR CHARTS & TABLE
  const [rawBarData, setRawBarData] = useState([])
  const [rawLineData, setRawLineData] = useState([])
  const [barData, setBarData] = useState([])
  const [lineData, setLineData] = useState([])
  const [tableData, setTableData] = useState([])
 
  //OTHER & STATES
  const listOfMonths = ["January", "February", "March", "April", "May","June", "July", "August", "September", "October", "November", "December"]
  const index = (param) => Math.abs(listOfMonths.indexOf(param))
  const date = new Date()
  const[MonthYear, setMonthYear] = useState({month:date.toLocaleString('en', {month:'long'}), year:date.getYear() + 1900})
  const[prevMonth, setPrevMonth] = useState(MonthYear.month == "January" ? "December" : listOfMonths[index(MonthYear.month)-1])
  const[prevYear, setPrevYear] = useState(MonthYear.month == "January" ? MonthYear.year-1 : MonthYear.year)

  //FUNCTION TO FETCH DATA
  const workTask = ()=>{
    //const baseUrl = 'http://tb-api.ap-south-1.elasticbeanstalk.com'
    const baseUrl = 'http://localhost:8080/'
    const facility_a = axios.get(`${baseUrl}/query?year=${MonthYear.year}&month=${MonthYear.month}`)
    const facility_b = axios.get(`${baseUrl}/query?year=${prevYear}&month=${prevMonth}`)
    const cardData_a = axios.get(`${baseUrl}/query/total?year=${MonthYear.year}&month=${MonthYear.month}&agg=a`)
    const cardData_b = axios.get(`${baseUrl}/query/total?year=${prevYear}&month=${prevMonth}&agg=a`)
    const data_a = axios.get(`${baseUrl}/query/total?year=${MonthYear.year}&month=${MonthYear.month}&agg=b`)
    const data_b = axios.get(`${baseUrl}/query/total?agg=c`)

    axios.all([facility_a, facility_b, cardData_a, cardData_b, data_a, data_b]).then(
      axios.spread((...allData) => {
        const facilityA = allData[0].data
        const facilityB = allData[1].data
        const cardDataA = allData[2].data
        const cardDataB = allData[3].data
        const dataA = allData[4].data
        const dataB = allData[5].data
        setIsBusy(false)

        //processing card data and returning summary
        const setOfFacilityA = new Set()
        const setOfFacilityB = new Set()
        facilityA.forEach((item)=>setOfFacilityA.add(item.facility.id))
        facilityB.forEach((item)=>setOfFacilityB.add(item.facility.id))
        
        setNewData(useProcessData(cardDataA.data))
        setOldData(useProcessData(cardDataB.data))
        setNFacility(setOfFacilityA.size)
        setNFacility_b(setOfFacilityB.size)
        
        //charts configurations and data
        const bar = useProcessChartData(dataA.data, 'bar', navigate) //Bar
        const line = useProcessChartData(dataB.data, 'line', navigate) //line
        //como filtrar os dados por admin level???
        setRawBarData(bar.province)
        setRawLineData(line)
        setBarData({data:bar['district'].positive, label:'Positive'}) //initial value
        setLineData({data:line.totalPositive, label:'Positive'})
        setTableData(bar['districtTable'])
              
      })
  )
//TESTES
setNewData({"total": 8,"positive": 5,"negative": 3, "prevalence": 62.5})
setOldData({"total": 8,"positive": 5,"negative": 3, "prevalence": 62.5})

const bar = { "province": { "total": [ { "name": "Gaza", "value": 4 }, { "name": "Maputo", "value": 4 } ], "positive": [ { "name": "Gaza", "value": 3 }, { "name": "Maputo", "value": 2 } ], "negative": [ { "name": "Gaza", "value": 1 }, { "name": "Maputo", "value": 2 } ], "prevalence": [ { "name": "Gaza", "value": 75 }, { "name": "Maputo", "value": 50 } ] }, "district": { "total": [ { "name": "Massingire", "value": 2 }, { "name": "Massia", "value": 2 }, { "name": "Manhica", "value": 1 }, { "name": "Marracuene", "value": 3 } ], "positive": [ { "name": "Massingire", "value": 2 }, { "name": "Massia", "value": 1 }, { "name": "Manhica", "value": 0 }, { "name": "Marracuene", "value": 2 } ], "negative": [ { "name": "Massingire", "value": 0 }, { "name": "Massia", "value": 1 }, { "name": "Manhica", "value": 1 }, { "name": "Marracuene", "value": 1 } ], "prevalence": [ { "name": "Massingire", "value": 100 }, { "name": "Massia", "value": 50 }, { "name": "Manhica", "value": 0 }, { "name": "Marracuene", "value": 66.66666666666666 } ] }, "facility": { "total": [ { "name": "Hospital A", "value": 2 }, { "name": "Hospital B", "value": 2 }, { "name": "Hospital C", "value": 1 }, { "name": "Hospital D", "value": 3 } ], "positive": [ { "name": "Hospital A", "value": 2 }, { "name": "Hospital B", "value": 1 }, { "name": "Hospital C", "value": 0 }, { "name": "Hospital D", "value": 2 } ], "negative": [ { "name": "Hospital A", "value": 0 }, { "name": "Hospital B", "value": 1 }, { "name": "Hospital C", "value": 1 }, { "name": "Hospital D", "value": 1 } ], "prevalence": [ { "name": "Hospital A", "value": 100 }, { "name": "Hospital B", "value": 50 }, { "name": "Hospital C", "value": 0 }, { "name": "Hospital D", "value": 66.66666666666666 } ] }, "provinceTable": [ { "name": "Gaza", "value": 4, "positive": 3, "negative": 1, "prevalence": 75 }, { "name": "Maputo", "value": 4, "positive": 2, "negative": 2, "prevalence": 50 } ], "districtTable": [ { "name": "Massingire", "value": 2, "positive": 2, "negative": 0, "prevalence": 100 }, { "name": "Massia", "value": 2, "positive": 1, "negative": 1, "prevalence": 50 }, { "name": "Manhica", "value": 1, "positive": 0, "negative": 1, "prevalence": 0 }, { "name": "Marracuene", "value": 3, "positive": 2, "negative": 1, "prevalence": 66.66666666666666 } ], "facilityTable": [ { "name": "Hospital A", "value": 2, "positive": 2, "negative": 0, "prevalence": 100 }, { "name": "Hospital B", "value": 2, "positive": 1, "negative": 1, "prevalence": 50 }, { "name": "Hospital C", "value": 1, "positive": 0, "negative": 1, "prevalence": 0 }, { "name": "Hospital D", "value": 3, "positive": 2, "negative": 1, "prevalence": 66.66666666666666 } ] }

setBarData(bar['district'].positive)
setTableData(bar['districtTable'])

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
  //for bar chart
  if(type == 'bar'){
    switch (category) {
      case "Total":
        setBarData({data: rawBarData.total, label: 'Total'})
        break;
      case "Positive":
        setBarData({data: rawBarData.positive, label: 'Positive'})
      break;
      case "Prevalence":
        setBarData({data: rawBarData.resistant, label: 'Prevalence'})
      break;
    }
  }
  //for line chart
  if(type == 'line'){
    switch (category) {
      case "Total":
        setLineData({data: rawLineData.totalPerMonth, label: 'Total'})
        break;
      case "Positive":
        setLineData({data: rawLineData.totalPositive, label: 'Positive'})
      break;
      case "Prevalence":
        setLineData({data: rawLineData.totalResistant, label: 'Prevalence'})
      break;
    }
  }

}

/*const rename = (nam) => { 
  const list = nam.split(' ')
  return list.map((it) => it[0]).join('').replace('d','')
}*/


const finalBarData = {
                labels: barData?.map((it)=> it.name),
                datasets:[
                  {
                    label:`${barData?.label} samples`,
                    data: barData?.map((it)=> it.value) ,
                    backgroundColor: 'white',
                    borderColor:'white',
                    borderRadius: Number.MAX_VALUE,
                    barThickness:10,
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
                      barThickness:10,
                    }
                  ]
                }
                
//ON SUBMIT
const onSubmit = (e)=>{
  e.preventDefault()
  const month = document.getElementById('month').value
  const year = document.getElementById('year').value
  setMonthYear({month, year})
  setPrevMonth(month == "January" ? "December" : listOfMonths[index(month)-1])
  setPrevYear(month == "January" ? year-1 : year)
  console.log('Submit-Date ' ,'Date: ' , MonthYear, 'Previous Month: ', prevMonth, 'Previous Year: ', prevYear)
  setIsBusy(true)
  toast.info(`Presenting results for ${month} of ${year}`)
}

  return (
    <section>
      <span className='bg-white py-1 px-2 rounded-md shadow-md md:float-right text-sm text-text-color cursor-context-menu' title='Date'>{`${MonthYear.month} - ${MonthYear.year}`}</span>
      <section className="grid gap-5 md:w-fit xl:w-full md:grid-cols-2 xl:flex xl:justify-between xl:mx-auto max-w-[2400px]">
        <Card label={'Prevalence (%)'} value={newData.prevalence} balance={newData.prevalence - oldData.prevalence} icon={<HomeModernIcon width={"25px"}/>} iconBg={'bg-dark'}/>
        <Card label={'Incidence'} value={newData.positive} balance={newData.positive-oldData.positive} icon={<ChartBarIcon width={"25px"}/>} iconBg={'bg-blue'}/>
        <Card label={'Mother to Child cases'} value={5} balance={3} icon={<UserPlusIcon width={"25px"}/>} iconBg={'bg-green'}/>
        <Card label={'People in TARV'} value={32} balance={22} icon={<FaBiohazard className='text-2xl'/>} iconBg={'bg-pink'}/>
      </section>
      {!isBusy && <section className= 'my-6 flex flex-wrap space-y-10 xl:space-y-0 gap-5 xl:flex-nowrap xl:mx-auto max-w-[2400px]'>
        <ChartContainer type='bar' data={finalBarData} options={barOps} background='bg-blue' changeData={changeData}/>
        <ChartContainer type='line' data={finalLineData} options={lineOps} background='bg-dark' changeData={changeData}/>
      </section>}
      {!isBusy && <section className='flex flex-wrap space-y-10 md:space-y-0 gap-5 xl:flex-nowrap xl:mx-auto max-w-[2400px]'>
        <GenericTable columns={tableColumns} data={tableData}/>
        <div className='min-h-[430px] h-full w-full xl:w-[300px] p-8 shadow-xl rounded-lg bg-white'>
          <h4 className='font-bold text-title-color text-center mb-10 border-b pb-6'>Change Period</h4>
          <form className='flex flex-col gap-4' onSubmit={onSubmit}>
            <label className="font-semibold text-title-color"  htmlFor="month">Month</label>
            <select className='text-text-color bg-white p-1.5 border mb-4' name="month" id="month">
              {listOfMonths.map((it) => (<option key={it} value={it}>{it}</option>))}
            </select>
            <label  className="font-semibold text-title-color" htmlFor="year">Year</label>
            <input type='number' min='2023' placeholder='2023' className='text-text-color bg-white p-1.5 border mb-3' name="year" id="year" required />
            <input className='block bg-light border p-2 w-full' id='submit' type="submit" value="Select" />
          </form>
        </div>
      </section>}
    </section>
  )
}

export default Home