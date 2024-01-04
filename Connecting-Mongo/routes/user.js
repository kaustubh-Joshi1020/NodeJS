 const express = require('express');
const {HandleAllUsers,HandleGetUserByID,HandleUpdateUserByID,HandleDeleteUserByID,HandleCreateUser} = require('../controllers/user')
const router = express.Router();


router.route('/',HandleAllUsers).post(HandleCreateUser)

router.route('/:id')
.get(HandleGetUserByID) 
.patch(HandleUpdateUserByID)
.delete(HandleDeleteUserByID)

// router.post('/',HandleCreateUser) 

 module.exports = {
    router,
 }