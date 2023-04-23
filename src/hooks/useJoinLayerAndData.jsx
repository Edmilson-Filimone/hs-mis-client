/**
 * A function to add data to geoJSON map object
 * **/

function useJoinLayerAndData(dataA, dataB) {
    dataA.forEach((featureA)=>{
        dataB.features.forEach((featureB) =>{
            if(featureA.ADM2_PCODE == featureB.properties.ADM2_PCODE){
                featureB.properties.Metric = featureA.Metric
                featureB.properties.Value = featureA.Value
            }
        })
    })
    console.log(dataB)
    return
}

export default useJoinLayerAndData