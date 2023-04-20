function useProcessData(dataList) { 
  try{
    const sumAll = (dataList) =>  {
      if(dataList.length <= 0){ return {total:0, prevalence:0, positive:0, negative:0} }
      return dataList.map((item) => item.value).reduce((acc, item) => acc + item)
    }
    const total = sumAll(dataList)
    const positive = sumAll(dataList.filter((item) => item.result == 'Positive'))
    const prevalence = (positive/total) * 100
    const processed = {total, positive, negative:(total-positive), prevalence}
    return processed}
  catch(error){
    console.warn(error)
    return {total:0, prevalence:0, positive:0, negative:0}
  }
}

export default useProcessData;
