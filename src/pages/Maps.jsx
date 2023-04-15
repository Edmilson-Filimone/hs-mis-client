import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { MapContainer, TileLayer,  Marker, Popup, Tooltip } from 'react-leaflet'
import Loading from "../components/Loading"

function Maps() {
  
  //states and routes
  const navigate = useNavigate()
  const [data, setData] = useState([])
  const [isBusy, setIsBusy] = useState(true)
  const baseUrl = `http://localhost:8080/facility?max=100`

  //Function to getData
  const getData = async ()=> {
    try {
      const rawData = await axios.get(baseUrl)
      if(rawData.status == 200){
        setData(rawData.data)
        setIsBusy(false)
    }
    } catch (error) {
      console.error(error)
      navigate('/error')
    }
  }

  //useEffect hook
  useEffect(()=>{
    getData()
  },[])

  if(isBusy){
    return <Loading/>
  }

  return (
  <>
    <section>
      <div className="text-2xl text-center font-semibold"></div>
      <div className="sticky top-24 w-full h-[450px] lg:h-[660px] overflow-hidden rounded-lg shadow-lg border">
        <MapContainer center={[-26.140, 32.615]} zoom={9} scrollWheelZoom={false} style={{ height: "100%", width: "100%" }}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {
            data.map((item)=>(
              <Marker key={item.id} position={[item.latitude, item.longitude]}>
                  <Popup>
                    {`ID: ${item.id} - ${item.name}`}
                  </Popup>
                  <Tooltip>
                    {item.name}
                  </Tooltip>
              </Marker>
            ))
          }
        </MapContainer>
      </div>
    </section>

  </>)
}

export default Maps