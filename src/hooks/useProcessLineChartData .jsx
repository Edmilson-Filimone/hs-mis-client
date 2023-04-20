import { DataFrame } from 'danfojs/dist/danfojs-base'
import { toJSONBrowser } from 'danfojs/dist/danfojs-base/io/browser'

function useProcessLineChartData(data, navigate) {
    try {
        const df = new DataFrame(data)
        //1. Grouping Data 
        const groupByDate = df.groupby(['month','year']).agg({value:'sum'})
        groupByDate.rename({'value_sum':'value'}, {inplace:true})
        const totalDate = toJSONBrowser(groupByDate)

        const groupResultByDate = df.groupby(['month','year', 'result']).agg({value:'sum'})
        groupResultByDate.rename({'value_sum':'value'}, {inplace:true}) 
        const resultByDate = toJSONBrowser(groupResultByDate)
        
        //2. Formatting data to tabular  
        totalDate.forEach((alfa)=>{
        alfa.positive = 0
        alfa.negative = 0

        resultByDate.forEach((beta)=>{
            if(alfa.month == beta.month && alfa.year == beta.year){
            switch (beta.result) {
                case 'Positive':
                alfa.positive = beta.value
                break;
            
                case 'Negative':
                alfa.negative = beta.value
                break;
            }
            }
        })
        })

        //3. Destructuring data function
        const reformatDataStructureLine = (data)=>{
        let total = []
        let positive = []
        let negative = []
        let prevalence = []

        data.forEach((item)=>{
            total.push({month:item.month, year:item.year, value:item.value})
            positive.push({month:item.month, year:item.year, value:item.positive})
            negative.push({month:item.month, year:item.year, value:item.negative})
            prevalence.push({month:item.month, year:item.year, value:item.prevalence})
        })
        return {total, positive, negative, prevalence}
        }

        //4. Function to calculate and add prevalence to the array data
        const addPrevalence = (data) => {
            data.forEach((it)=> {it.prevalence = it.positive/it.value * 100})
            return data
      }

        return reformatDataStructureLine(addPrevalence(totalDate))
    } 
    catch (error) {
        console.warn(error)
        navigate('/error')
    }
}

export default useProcessLineChartData