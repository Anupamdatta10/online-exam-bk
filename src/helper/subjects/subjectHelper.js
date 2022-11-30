exports.validDataSubjectList = async (req) => {

    let validData = {}
    
    validData.success = true
    validData.message = "success"
    validData.data=req
    return validData;
}

exports.formatsubjectList = async (req) => {
    return {success:true,data:req}
}


exports.validCreateData=async (req)=>{
    return new Promise((resolve,reject)=>{
        let data=req.body
        let result={}
        if(data.hasOwnProperty("name")&&data.name==""){
            result.success=false
            result.message="name is missing"
        }else if(data.hasOwnProperty("description")&&data.description==""){
            result.success=false
            result.message="description  is missing"
        }
        else{
            result.success=true
            result.message=""
            result.data=data
        }
        resolve(result)
    })
   
}

exports.formatsubjectCreate=(params)=>{
    return {success:true,data:params}
}

exports.validDataSubjectUpdate=async (req)=>{
    
    return new Promise((resolve,reject)=>{
        let data=req.body
        console.log("----",data)
        let result={}
        if(Object.keys(data).length<=0){
            result.success=false
            result.message="body is missing"
        }
        else{
            result.success=true
            result.message=""
            result.data=req
            console.log("----",req)
        }
        console.log("----",result)
        resolve(result)
    })
   
}


exports.formatsubjectUpdate=(params)=>{
    return {success:true,data:params}
}

exports.validDataSubjectDelete=async (req)=>{
    
    let validData = {}
    
    validData.success = true
    validData.message = "success"
    validData.data=req
    return validData;
   
}


exports.formatsubjectDelete=(params)=>{
    return {success:true,data:params}
}

