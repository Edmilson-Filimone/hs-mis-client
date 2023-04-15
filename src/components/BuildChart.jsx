import React from 'react'
import { Chart } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    LineElement,
    PointElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    RadialLinearScale
  } from 'chart.js';
  
  ChartJS.register(
    RadialLinearScale,
    ArcElement,
    CategoryScale,
    LinearScale,
    BarElement,
    LineElement,
    PointElement,
    Title,
    Tooltip,
    Legend
  );
  

function BuildChart({type, data, options, background}) {


  return(<Chart type={type} data={data} options={options} className={`${background} w-full h-[300px] 2xl:h-[350px]`}/>)
}

export default BuildChart