/**
 * A function to add data to geoJSON map object
        - data - is the data
        - layer - is the layer
 **/

function useJoinLayerAndData(data, layer, filter) {
    //For district layer
    if(filter == 'province'){
       data.forEach((featureA)=>{
        layer.features.forEach((featureB) =>{
            if(featureA.ADM1_PCODE == featureB.properties.ADM1_PCODE){
                featureB.properties.Metric = featureA.Metric
                featureB.properties.Value = featureA.Value
            }
        })
    })
        return
   } 
    //For district layer - default option
    data.forEach((featureA)=>{
    layer.features.forEach((featureB) =>{
        if(featureA.ADM2_PCODE == featureB.properties.ADM2_PCODE){
            featureB.properties.Metric = featureA.Metric
            featureB.properties.Value = featureA.Value
            }
        })
    })
    console.log(filter,' - ' ,layer)
}

export default useJoinLayerAndData