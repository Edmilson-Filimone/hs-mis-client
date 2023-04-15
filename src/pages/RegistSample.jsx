import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { readExcelBrowser, toJSONBrowser } from 'danfojs/dist/danfojs-base/io/browser'
import Loading from '../components/Loading'

function RegistSample() {
  const navigate = useNavigate()
  //Form States
  const [isBusy, setIsBusy] = useState(true)
  const [selectFacility, setSelectFacility] = useState([])
  const [fileData, setFileData] = useState({})
  const [formData, setFormData] = useState({name:'', sampleType:'', result:'Negative', resistance:'No', resistanceStatus:'No', facility:'', date:'', month:'January', year:2023})
  const {name, sampleType, result, resistance, resistanceStatus, facility, date, month, year} = formData
  const [disableUploadButton, setDisableUploadButton] =useState(true)
  const listOfMonths = ["January", "February", "March", "April", "May","June", "July", "August", "September", "October", "November", "December"] ///select input
  //Onchange
  const onchange = (e)=>{
    if(e.target.files){
      console.log(e.target.files[0])
      setFileData(e.target.files[0])
      setDisableUploadButton(false)
      toast.success(`${e.target.files[0].name} is ready to upload`)
      return
    }

    setFormData((prevStat)=>({...prevStat, [e.target.id]:e.target.value}))
  }
  //Onsubmit
  const onsubmit = (e)=>{
    e.preventDefault()
    //post
    formData.facility = Number.parseInt(facility)
    formData.year = Number.parseInt(year)
    formData.date = new Date().toISOString()
    formData.resistence = 'RIF' //TEMPORARY QUANDO REFACTORAR API MODIFICAR ESTA SECCAO E AJSUTAR O FILTO DE USEPROSSDATA 
    console.log(formData)
    postData(formData).then((value)=>{
      //after post
      if(value)
        {toast.success(`${name} was saved successfully`)
        navigate(`/list-sample`)}
    })
  }

//Axios HTTP POST function
const postData = async (data)=>{
  try {
    console.log(data)
    await axios.post('http://localhost:8080/sample',data)
    return true
  } catch (error) {
    console.log(error)
    console.log('Something went wrong')
    navigate('/error')
  }
}

  //Upload Spreadsheet
  const uploadSpreadSheet = async (e)=>{
    e.preventDefault()
    try {
      const fileDataFrame = await readExcelBrowser(fileData)
      const fileObject = toJSONBrowser(fileDataFrame)
      console.log(fileObject)
      fileObject.forEach((item)=> {
        item.facility = Number.parseInt(item.facility)
        item.year = Number.parseInt(item.year)
        item.date = new Date(Date.UTC(0, 0, item.date - 1)) //converting excel UTC date to JS Date
        postData(item)
      })
      toast.success('Uploaded successfully')
      navigate('/list-sample')
    } catch (error) {
      console.log(error)
      navigate('/error')
      toast.error('Failed to upload data, please review you data and try again')
    }
  }
//FETCH DATA TO SUPPLY FACILITY INPUT
useEffect(()=>{
  async function getData(){
    const data = await  axios.get(`http://localhost:8080/facility`)
    if(data.status == 200){
      setSelectFacility(data.data)
      setIsBusy(false)
    }
  }
  getData()
},[])

if(isBusy){ return <Loading/> }

  return (
    <>
      <div className="w-full mt-10 py-8 px-4">
        <h3 className="text-center mx-auto text-2xl text-title-color font-semibold">Add new Sample</h3>
        <form className="flex flex-col space-y-5 items-center max-w-[700px] w-full mx-auto py-5 text-text-color" onSubmit={onsubmit}>
          <div className='input-container'>
            <label htmlFor="name" id='name'>Sample Name</label>
            <input className="input-style" type="text" id='name' name='name' value={name} onChange={onchange} required/>
          </div>
          <div className='input-container'>
            <label htmlFor="sampleType" id='sampleType'>Type of Sample</label>
            <input className="input-style" type="text" name='sampleType' id='sampleType' value={sampleType} onChange={onchange} required/>
          </div>
          <div className='input-container'>
            <label htmlFor="result" id='result'>Result</label>
            <select className="input-style"  name='result' id='result' value={result} onChange={onchange}>
                <option key='0' value='Negative'>Negative</option>
                <option key='1' value='Positive'>Positive</option>
              </select>
          </div>
          <h4 className='text-title-color font-semibold'>Drug Resistance</h4>
          <div className='w-full flex gap-5'>
            <div className='input-container'>
              <label htmlFor="resistanceStatus" id='resistanceStatus'>Resistance Status</label>
              <select className="input-style"  name='resistanceStatus' id='resistanceStatus' value={resistanceStatus} onChange={onchange}>
                <option key='0' value='No'>No</option>
                <option key='1' value='Yes'>Yes</option>
              </select>
            </div>
            <div className='input-container'>
              <label htmlFor="resistance" id='resistance'>Type of Resistance</label>
              <select className="input-style"  name='resistance' id='resistance' value={resistance} onChange={onchange}>
                <option key='0' value='No'>No</option>
                <option key='1' value='Mono-resistance'>Mono-resistance</option>
                <option key='3' value='Poly-resistance'>Poly-resistance</option>
                <option key='4' value='Multidrug resistance (MDR)'>Multidrug resistance (MDR)</option>
                <option key='5' value='Extensive drug resistance (XDR)'>Extensive drug resistance (XDR)</option>
                <option key='6' value='Rifampicin resistance (RR)'>Rifampicin resistance (RR)</option>
              </select>
            </div>
          </div>
          <div className='input-container'>
              <label htmlFor="facility" id='facility'>Facility</label>
              <select className="input-style"  name='facility' id='facility' value={facility} onChange={onchange}>
                <option key={1} value={null}>--Select Health Facility--</option>
                {selectFacility.map((item)=>(<option key={item.id} value={item.id}>{item.name}</option>))}
              </select>
          </div>
          <div className='input-container'>
              <label htmlFor="date" id='date'>Date</label>
              <input className="input-style" type='date' name='date' id='date' value={date} onChange={onchange} required/>
          </div>
          <div className='input-container'>
              <label htmlFor="month" id='month'>Month</label>
              <select className="input-style"  name='month' id='month' value={month} onChange={onchange}>
                {listOfMonths.map((month) => (<option key={month} value={month}>{month}</option>))}
              </select>
          </div>
          <div className='input-container'>
              <label htmlFor="year" id='year'>Year</label>
              <input className="input-style" type="number" name='year' id='year' min="2023" value={year} onChange={onchange} required/>
          </div>
          <input className="w-full sidebar-item-last" type="submit" value='Add Sample'/>
        </form>
        <span className='text-center block'>OR</span>
        <div className='w-full flex gap-5 max-w-[700px] my-4 mx-auto'>
          <form className='w-full flex-col space-y-5 justify-center items-center' onSubmit={uploadSpreadSheet}>
            <h3 className='text-title-color font-semibold text-center'>Upload a spreadsheet</h3>
            <div className="flex items-center justify-center w-full">
                <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg aria-hidden="true" className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Excel Files: XLS, XLSX or CSV</p>
                    </div>
                    <input id="dropzone-file" type="file" className="hidden" onChange={onchange}/>
                </label>
            </div> 
            <button className='w-full h-12 button bg-green' disabled={disableUploadButton} >Upload Spreadsheet</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default RegistSample