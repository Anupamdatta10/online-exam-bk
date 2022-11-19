const { connection } = require('../../../database/connection');

exports.getSubjectList= async (params) => {
    try {
        return new Promise((resolve,reject)=>{

            connection.query('select * from subject',(err,result,fields)=>{
                console.log("->>>",err)
                if(err){
                    throw err;
                }else{
                    console.log("----------------------")
                    resolve({"success":true,"data":result}) 
                }
            })

        })
       

        
    } catch (err) {
        return {success:false,message:err}
    }
}

exports.CreateSubject=(params)=>{
    return new Promise((resolve,reject)=>{
        connection.query('insert into subject set ?',params,(err,result,fields)=>{
            console.log("->>>",err)
            if(err){
                throw err;
            }else{
                resolve({"success":true,"data":result}) 
            }
        })
    })
}
exports.updateSubjectList=(params)=>{
    return new Promise((resolve,reject)=>{
        console.log("in model")
        params = params.data
        let body=params.body;
        let id=params.params.id;
        console.log(params)
        connection.query('update subject set name=? where id=?',[body.name,id],(err,result,fields)=>{
            console.log("->>>",err)
            if(err){
                throw err;
            }else{
                console.log("success")
                resolve({"success":true,"data":result}) 
            }
        })
    })
}
