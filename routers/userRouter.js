const express = require('express');
const {createUser, getData, addUser, updateUser, deleteUser} = require('../handlers/user')

const userRouter = express.Router();


userRouter.post('/newUser', createUser);
userRouter.get('/getUsers',getData);
userRouter.post('/usersAdd',addUser);
userRouter.post('/userupdate',updateUser);
userRouter.post('/userdelete',deleteUser);



module.exports = userRouter


