import { DataFrame } from 'danfojs/dist/danfojs-base'
import { toJSONBrowser } from 'danfojs/dist/danfojs-base/io/browser'

function useProcessChartData(data, type, navigate) {
    try {
        const df = new DataFrame(data)

        //Bar Chart Data
        if(type == 'bar'){
        const groupbyFacility = df.groupby(["facility", "facilityAcronym"]).agg({value:"sum"})
        const groupbyResult = df.groupby(["facility", "facilityAcronym", "result"]).agg({value:"sum"})
        const groupbyResistant = df.groupby(["facility", "facilityAcronym" ,"resistanceStatus"]).agg({value:"sum"})
        
        //ARRAYS READY TO BE PLOTTED  BAR-CHART
        const total_ = toJSONBrowser(groupbyFacility)
        const positive_ = toJSONBrowser(groupbyResult).filter((it)=> it.result == "Positive")
        const negative_ = toJSONBrowser(groupbyResult).filter((it)=> it.result == "Negative")
        const resistant_ = toJSONBrowser(groupbyResistant).filter((it)=> it.resistanceStatus == "Yes") 
    
        return {total_, positive_, negative_, resistant_}
        }

        //Line Chart Data
        const groupbyMonthYear = df.groupby(['year', 'month']).agg({value:'sum'})
        const groupbyResult = df.groupby(['year', 'month', 'result']).agg({value:'sum'})
        const groupbyResistant = df.groupby(['year', 'month', 'resistanceStatus']).agg({value:'sum'})

        //Totals per month
        const totalPerMonth = toJSONBrowser(groupbyMonthYear)
        const totalPositive = toJSONBrowser(groupbyResult).filter((it)=> it.result == 'Positive')
        const totalResistant = toJSONBrowser(groupbyResistant).filter((it)=> it.resistanceStatus == "Yes")

        return {totalPerMonth, totalPositive, totalResistant}        
    } 
    catch (error) {
        console.warn(error)
        navigate('/error')
    }
}

export default useProcessChartData