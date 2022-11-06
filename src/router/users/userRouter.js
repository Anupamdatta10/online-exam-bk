const express = require('express');
const router = express.Router();
const userController=require('../../controller/users/userController');

router.get('/', userController.userList);
//router.post('/', userController.createUser);
module.exports = router;