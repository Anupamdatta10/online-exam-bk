
const { getUserList } = require('../../models/users/userModels');
const { validDataList,formatUserList } = require('../../helper/users/userHelper');

exports.userList = async (req, res, next) => {
    try {
        let validData = await validDataList(req)
        if (validData.success) {
            let data = await getUserList(validData);
            let result= await formatUserList(data)
            res.send({ "message": "hello world", "data": result })
        } else {
            res.status(400).json({ message: validData.message, success: false });
        }
    } catch (err) {
        res.status(500).json({ message: "internal server error", success: false });
    }

}