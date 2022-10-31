const express = require('express');
const router = express.Router();
const userController=require('../../controller/users/userController');

router.get('/', userController.userList);

module.exports = router;