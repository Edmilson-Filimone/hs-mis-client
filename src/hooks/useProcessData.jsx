function useProcessData(dataList) {
  try{
    const sumAll = (dataList) =>  {
      if(dataList.length <= 0){ return 0 }
      return dataList.map((item) => item.value).reduce((acc, item) => acc + item)
    }
    const total = sumAll(dataList)
    const positive = sumAll(dataList.filter((item) => item.result == 'Positive'))
    const resistant = sumAll(dataList.filter((item)=> item.resistanceStatus == "Yes" ))
    const processed = {total, positive, resistant, negative:(total-positive)}
    return processed}
  catch(error){
    console.warn(error)
    return {total:0, positive:0, resistant:0, negative:0}
  }
}

export default useProcessData;
