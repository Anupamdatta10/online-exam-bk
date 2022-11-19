const express = require('express');
const router = express.Router();
const Controller=require('../../controller/subject/subjectController');

router.get('/',Controller.subjectListController)
router.post('/',Controller.subjectCreateController)
router.patch('/:id',Controller.subjectUpdateController)



module.exports = router;