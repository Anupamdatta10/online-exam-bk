const express = require('express');
const router = express.Router();
const Controller=require('../../controller/subject/questionController');

router.get('/',Controller.subjectListController)
router.post('/',Controller.subjectCreateController)
router.patch('/:id',Controller.subjectUpdateController)
router.delete('/deletesub/:id',Controller.subjectDeleteController)


module.exports = router;
