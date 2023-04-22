import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { MapContainer, TileLayer, GeoJSON , Marker, Popup, Tooltip } from 'react-leaflet'
import Loading from "../components/Loading"
import {geoData} from '../../public/Js/geoData'
import {testData} from '../../public/Js/mockMapData'
import { DataFrame } from 'danfojs/dist/danfojs-base'
import { toJSONBrowser } from 'danfojs/dist/danfojs-base/io/browser'

function Maps() {
  /*Solution from : https://fmuchembi.medium.com/let-us-build-a-choropleth-map-using-react-leaflet-together-3245d30ac900*/
  //states and routes
  const navigate = useNavigate()
  const [data, setData] = useState([])
  const [isBusy, setIsBusy] = useState(true)
  const [onSelectFeature, setOnSelectFeature] = useState({})
  //const [onSelectFeature, setOnSelectFeature] = useState({})
// const baseUrl = `http://localhost:8080/facility?max=100`

//Dataframe - calculating max value to use as reference to create values intervals for color ramp classification
const df = new DataFrame(testData.features.map((data)=>data.properties))
const maxValue = df['Value'].max()

//Getting each feature --- not using now
const feature = geoData.features.map((feature)=>{
  return feature
})

const featureTest = testData.features.map((feature)=>{
  return feature
})


//Color Ramp - classification by color
const mapPolygonColorClassification=(value => {
  let color = '#fee5d9';
  switch (true) {
    case (value >= 0.9 * maxValue):
      color = '#a50f15'
      break;
    case (value > 0.8 * maxValue):
      color = '#de2d26'
      break
    case (value > 0.6 * maxValue):
      color = '#fb6a4a'
      break
    case (value > 0.4 * maxValue):
      color = '#fc9272'
      break
    case (value > 0.2 * maxValue):
      color = '#fcbba1'
      break
    default:
      color:'#fee5d9';
      break;
  }
  return color
})

//Function to apply fill color classification on the geoJson layer
const styleColor = (feature) => {
  return ({
    fillColor: mapPolygonColorClassification(feature.properties.Value),
    weight: 1,
    opacity: 1,
    color: 'white',
    dashArray: '1',
    fillOpacity: 0.6
});
}
 

//On Mouse Hover Feature
  const onMouseIn = (e) => {
    var layer = e.target
    //const {name, metric, value} = layer.feature.properties
    //setOnSelectFeature({name, metric, value})
    const value = layer.feature.properties.Value
    setOnSelectFeature(value)

    //On hover  selected area  style
    e.target.setStyle({
        fillColor:'black',
        weight:1,
        color: "black",
        fillOpacity: 0.5,
        opacity:1,

  });
  console.log(layer.feature.properties)
  console.log(value)
  }

  const onMouseOut = (e) => {
    //e.target.setStyle(style(e.target.feature))
    e.target.setStyle(styleColor(e.target.feature))
    setOnSelectFeature({})

  }

  //On EachFeature function
  const onEachFeature = (feature, layer) =>{
    layer.on({
      mouseover:onMouseIn,
      mouseout:onMouseOut
    })
  }
  //Function to getData
  /*const getData = async ()=> {
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
  }*/

  return (
  <>
    <section>
      <div className="text-2xl text-center font-semibold"></div>
      <div className="sticky top-24 w-full h-[450px] lg:h-[660px] overflow-hidden rounded-lg shadow-lg border">
        <MapContainer center={[-19, 35]} zoom={5} scrollWheelZoom={true} style={{ height: "100%", width: "100%" }}>
          <TileLayer
             attribution="Map tiles by Carto, under CC BY 3.0. Data by OpenStreetMap, under ODbL."
             url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png"
          />
          <GeoJSON data={featureTest} onEachFeature={onEachFeature} style={styleColor}/>
        </MapContainer>
      </div>
    </section>

  </>)
}

export default Maps