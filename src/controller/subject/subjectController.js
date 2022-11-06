const { getSubjectList ,CreateSubject} = require('../../models/subjects/subject');
const { validDataSubjectList, formatsubjectList, validCreateData,formatsubjectCreate } = require('../../helper/subjects/subjectHelper');

exports.subjectListController = async (req, res, next) => {
    try {
        let validData = await validDataSubjectList(req)
        if (validData.success) {
            let data = await getSubjectList(validData);
            let result = await formatsubjectList(data.data)
            if (result.success) {
                res.send({ "message": "subject list", "data": result.data })
            }

        } else {
            res.status(400).json({ message: validData.message, success: false });
        }
    } catch (err) {
        res.status(500).json({ message: "internal server error", success: false });
    }

}

exports.subjectCreateController = async (req, res, next) => {
    try {
        let validData = await validCreateData(req)
        if (validData.success) {
            let data = CreateSubject(validData.data)
            let result = await formatsubjectCreate(data)
            if (result.success) {
                res.send({ "message": "subject created successfully", "data": result.data })
            } else {
                res.status(400).json({ message: validData.message, success: false });
            }
        }
        else{
            res.status(400).json({ message: validData.message, success: false });
        }
    } catch (err) {
        res.status(500).json({ message: "internal server error", success: false });
    }

}