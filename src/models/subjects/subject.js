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