import React, { useState } from 'react'
import BuildChart from './BuildChart'

function ChartContainer({type, data, options, labels, background, changeData}) {
    const [navigationBar, setNavigationBar] = useState({display:'hidden', height:'520px'})
    const [category, setCategory] = useState('Positive')
    
    const chartTitle = ()=>{
      switch (category) {
       case 'Total':
         return `Total number of tested people ${type == 'line' ? 'per month':''}`
       case 'Positive':
         return `Number of new cases ${type == 'line' ? 'per month':''}`
       case 'Prevalence':
           return `Prevalence ${type == 'line' ? 'per month':''}`
      }
     }

  return (
    <div className={`px-5 w-full bg-white border shadow-lg rounded-xl h-[${navigationBar.height}] 2xl:h-[500px]`}
    onMouseEnter={() => {setNavigationBar({display:'block', height:'600px'})}}>
        <div className={`relative -top-6 shadow-xl ${type == 'polarArea'? 'border-2 h-[380px]':''} h-[300px] 2xl:h-[400px] w-full rounded-xl overflow-hidden`}>
            <BuildChart type={type} data={data} options={options} background={background}/>
        </div>
        {type !== 'polarArea' &&
         <div>
          <h4 className='font-semibold text-title-color'>{chartTitle()}</h4>
            <p className='mb-4 text-text-color font-thin'>Lorem ipsum dolor sit amet consectetur adipisicing elit.vel! Nem</p>
          <div className={`${navigationBar.display} w-full`}>
              <ul className='flex mx-auto gap-2 md:gap-6 w-fit font-thin text-text-color'>
                  <li className={`${category == 'Total' ? 'font-bold':''} px-3 md:px-5 cursor-pointer nav-chart`} onClick={()=> {changeData('Total', type); setCategory('Total')}}>Tested</li>
                  <li className={`${category == 'Positive' ? 'font-bold':''} border-x-2 px-3 md:px-5 cursor-pointer nav-chart`} onClick={()=> {changeData('Positive', type); setCategory('Positive')}}>Incidence</li>
                  <li className={`${category == 'Prevalence' ? 'font-bold':''} px-3 md:px-5 cursor-pointer nav-chart`} onClick={()=>{changeData('Prevalence', type); setCategory('Prevalence')}}>Prevalence</li>
              </ul>
          </div>
        </div>}
    </div>
  )
}

export default ChartContainer