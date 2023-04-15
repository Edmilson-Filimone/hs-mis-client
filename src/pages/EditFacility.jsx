import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { readExcelBrowser, toJSONBrowser } from 'danfojs/dist/danfojs-base/io/browser'
import Loading from '../components/Loading'

function EditFacility() {
  const navigate = useNavigate()
  const params = useParams()
  //Form States
  const [isBusy, setIsBusy] = useState(true)
  const [fileData, setFileData] = useState({})
  const [disableUploadButton, setDisableUploadButton] =useState(true)
  const [formData, setFormData] = useState({name:'', acronym:'', province:'', district:'', longitude:'', latitude:''})
  const {name, acronym, province, district, longitude, latitude} = formData
  //Onchange
  const onchange = (e)=>{
    if(e.target.files){
      setFileData(e.target.files[0])
      toast.success(`${e.target.files[0].name} is ready to upload`)
      setDisableUploadButton(false)
      return
    }
    setFormData((prevStat)=>({...prevStat, [e.target.id]:e.target.value}))
  }
  //Onsubmit
  const onsubmit = (e)=>{
    e.preventDefault()
    //converting long and lat to number datatype, because formData values are all strings
    formData.longitude = Number.parseFloat(longitude)
    formData.latitude = Number.parseFloat(latitude)
    //put
    putData(formData).then((value)=>{
      //after post
      if(value)
        {toast.success(`${name} was updated successfully`)
        navigate(`/report?facility=${name}`)}
      //we need a page to display facility list
    })
  }

//Axios HTTP PUT function
const putData = async (data)=>{
  try {
    await axios.put(`http://localhost:8080/facility/${params.id}`, data)
    return true
  } catch (error) {
    console.log(error)
    console.log('Something went wrong')
    navigate('/error')
  }
}

  //Upload Spreadsheet to update
  const uploadSpreadSheet = async (e)=>{
    e.preventDefault()
    try {
      const fileDataFrame = await readExcelBrowser(fileData)
      const fileObject = toJSONBrowser(fileDataFrame)
      console.log(fileObject)
      fileObject.forEach(item => {
        item.longitude = Number.parseFloat(item.longitude)
        item.latitude = Number.parseFloat(item.latitude)
        console.log(item)
        axios.put(`http://localhost:8080/facility/${item.id}`, item)
      });
      toast.success('Uploaded successfully')
      navigate('/list-facility?max=5')
    } catch (error) {
      console.log(error)
      navigate('/error')
      toast.error('Failed to upload data, please review you data and try again')
    }
  }

//FETCH DATA AND FILL THE FORM
useEffect(()=>{
  async function getData(){
    const data = await  axios.get(`http://localhost:8080/facility/${params.id}`)
    console.log(params.id)
    if(data.status == 200){
      setFormData(data.data)
      setIsBusy(false)
    }
  }
  getData()
},[params.id])

  if(isBusy){ return <Loading/>}

  return (
    <>
      <div className="w-full mt-10 py-8 px-4">
        <h3 className="text-center mx-auto text-2xl text-title-color font-semibold">Edit Health Facility</h3>
        <form className="flex flex-col space-y-5 items-center max-w-[700px] w-full mx-auto py-5 text-text-color" onSubmit={onsubmit}>
          <div className='input-container'>
            <label htmlFor="name" id='name'>Name of Health Facility</label>
            <input className="input-style" type="text" id='name' name='name' value={name} onChange={onchange} required/>
          </div>
          <div className='input-container'>
            <label htmlFor="acronym" id='acronym'>Acronym</label>
            <input className="input-style" type="text" name='acronym' id='acronym' value={acronym} onChange={onchange} required/>
          </div>
          <div className='input-container'>
            <label htmlFor="province" id='province'>Province</label>
            <input className="input-style" type="text" name='province' id='province' value={province} onChange={onchange} required/>
          </div>
          <div className='input-container'>
            <label htmlFor="district" id='district'>District</label>
            <input className="input-style" type="text" name='district' id='district' value={district} onChange={onchange} required/>
          </div>
          <h4 className='text-title-color font-semibold'>Geographical Location</h4>
          <div className='w-full flex gap-5'>
            <div className='input-container'>
              <label htmlFor="longitude" id='longitude'>Longitude</label>
              <input className="input-style" type="number" name='longitude' id='longitude' value={longitude} onChange={onchange} required/>
            </div>
            <div className='input-container'>
              <label htmlFor="latitude" id='latitude'>Latitude</label>
              <input className="input-style" type="number" name='latitude' id='latitude' value={latitude} onChange={onchange} required/>
            </div>
          </div>
          <input className="w-full sidebar-item-last" type="submit" value='Update Facility'/>
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
            <button className='w-full h-12 button bg-green' disabled={disableUploadButton}>Upload Spreadsheet</button>
          </form>
        </div>
      </div>
    </>)
}

export default EditFacility