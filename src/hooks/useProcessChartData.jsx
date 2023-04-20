import { DataFrame } from 'danfojs/dist/danfojs-base'
import { toJSONBrowser } from 'danfojs/dist/danfojs-base/io/browser'

function useProcessChartData(data, type, navigate) {
    const df = new DataFrame(data)
    //Utils functions for grouping data
    const groupByAdminLevel = (adminLevel)=>{
        console.log(`Grouping by ${adminLevel}`)
        const group = df.groupby([adminLevel]).agg({value:"sum"})
        switch (adminLevel) {
          case 'province':
            group.rename({'value_sum':'value', 'province':'name'}, {inplace:true})   
            break;
          case 'district':
            group.rename({'value_sum':'value', 'district':'name'}, {inplace:true})   
            break;
          case 'facility':
            group.rename({'value_sum':'value', 'facility':'name'}, {inplace:true})   
            break;
        }
        return toJSONBrowser(group)
      }
    
      const groupByAdminLevelAndResult = (adminLevel)=>{
        console.log(`Grouping by ${adminLevel}`)
        const group = df.groupby([adminLevel, 'result']).agg({value:"sum"})
        switch (adminLevel) {
          case 'province':
            group.rename({'value_sum':'value', 'province':'name'}, {inplace:true})   
            break;
          case 'district':
            group.rename({'value_sum':'value', 'district':'name'}, {inplace:true})   
            break;
          case 'facility':
            group.rename({'value_sum':'value', 'facility':'name'}, {inplace:true})   
            break;
        }
        return toJSONBrowser(group)
      }

      //Function to create tabular data in order to calculate prevalence
      const tableData = (level, dataSet) => {

        //Agg by province, district and facility
        const province = groupByAdminLevel('province') 
        const district = groupByAdminLevel('district')
        const facility = groupByAdminLevel('facility')

        let quimera = []
      
        switch (level) {
          case 'facility':
            quimera = [...facility]
            break;
          case 'district':
            quimera = [...district]
            break;
          case 'province':
            quimera = [...province]
            break;  
          default:
            break;
        }
        
        quimera.forEach(it => {
          it.positive = 0
          it.negative = 0
        })
        
        quimera.forEach(q => {
            q.positive = 0
            q.negative = 0
        
            dataSet.positive.forEach(p => {
                if(q.name === p.name){
                    q.positive = p.value
                }
            })
        
            dataSet.negative.forEach(n => {
                if(q.name === n.name){
                    q.negative = n.value
                }
            })
        });
      
        return quimera
      }

      //Function to calculate and add prevalence to the array data
      const addPrevalence = (data) => {
        data.forEach((it)=> {
          it.prevalence = it.positive/it.value * 100
        })
        return data
      }
      // Refactoring function to spread the data in tabular format to grouped by result
      const reformatDataStructure = (data)=>{
        let total = []
        let positive = []
        let negative = []
        let prevalence = []
      
        data.forEach((item)=>{
          total.push({name:item.name, value:item.value})
          positive.push({name:item.name, value:item.positive})
          negative.push({name:item.name, value:item.negative})
          prevalence.push({name:item.name, value:item.prevalence})
        })
        
        const finalData = {total, positive, negative, prevalence}
        return finalData
      }
    try {

        //Agg by province and result, district and result, facility and result
        const province = groupByAdminLevelAndResult('province')
        const district = groupByAdminLevelAndResult('district')
        const facility = groupByAdminLevelAndResult('facility')

        //Destructuring by Filtering 
        const provincePositive = province.filter((item)=> item.result == 'Positive')
        const provinceNegative = province.filter((item)=> item.result == 'Negative')

        const districtPositive = district.filter((item)=> item.result == 'Positive')
        const districtNegative = district.filter((item)=> item.result == 'Negative')

        const facilityPositive = facility.filter((item)=> item.result == 'Positive')
        const facilityNegative = facility.filter((item)=> item.result == 'Negative')


        const final = {facility: {positive:facilityPositive, negative:facilityNegative}, district:{positive:districtPositive, negative: districtNegative}, province:{positive: provincePositive, negative: provinceNegative}} 
    
        //Add Prevalence
        const provinceData = addPrevalence(tableData('province', final.province))
        const districtData= addPrevalence(tableData('district', final.district))
        const facilityData= addPrevalence(tableData('facility', final.facility))

        //Return for table
        if(type=='table'){
            return {  
                province:provinceData,
                district:districtData,
                facility:facilityData
            }
        }

        //Return for bar
        return {  
                    province:reformatDataStructure(provinceData),
                    district:reformatDataStructure(districtData),
                    facility:reformatDataStructure(facilityData)
                }
    
    } 
    catch (error) {
        console.warn(error)
        navigate('/error')
    }
}

export default useProcessChartData