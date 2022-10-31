exports.validDataList = async (req) => {

    let validData = {}
    validData.success = true
    validData.message = "success"
    validData.data=req
    return validData;
}

exports.formatUserList = async (req) => {
    return []
}