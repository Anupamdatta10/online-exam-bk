const { connection } = require('../../../database/connection');

exports.getUserList = async (params) => {
    try {
        return {success:true,data:[]}
    } catch (err) {
        return {success:false,message:err}
    }

    //res.send({"message":"hello world"})
}