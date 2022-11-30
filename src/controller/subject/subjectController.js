const { getSubjectList ,CreateSubject,updateSubjectList,deleteSubjectList} = require('../../models/subjects/subject');
const { validDataSubjectList, formatsubjectList, validCreateData,formatsubjectCreate ,validDataSubjectUpdate,formatsubjectUpdate,validDataSubjectDelete,formatsubjectDelete} = require('../../helper/subjects/subjectHelper');

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

exports.subjectUpdateController = async(req,res,next) =>{
    try {
        
        let validData = await validDataSubjectUpdate(req)
        if (validData.success) {
            let data = await updateSubjectList(validData);
            console.log("in controller")
            let result = await formatsubjectUpdate(data.data)
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

exports.subjectDeleteController = async(req,res,next) =>{
    try {
        
        let validData = await validDataSubjectDelete(req)
        if (validData.success) {
            let data = await deleteSubjectList(validData);
            console.log("in controller")
            let result = await formatsubjectDelete(data.data)
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