import express from 'express';

import {addUser,getAllUsers,getSingleUser,editUser,deleteUser} from "../controllers/user.controller.js";
const router=express.Router()

router.post('/',addUser)
router.get('/',getAllUsers)
router.get('/:userId',getSingleUser)
router.patch('/:userId',editUser)
router.delete('/:userId',deleteUser)


export default router;