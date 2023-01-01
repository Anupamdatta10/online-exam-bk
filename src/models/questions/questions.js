const { connection } = require('../../../database/connection');

exports.getQustionList = async (params) => {
    try {
        return new Promise((resolve, reject) => {

            connection.query('Select * from questions', (err, result, fields) => {
                console.log("-->>", err)
                if (err) {
                    throw err;
                } else {
                    console.log("-------------")
                    resolve({ "success": true, "data": result })
                }
            })
        })
    } catch (err) {
        return { success: failed, message: err }
    }

}