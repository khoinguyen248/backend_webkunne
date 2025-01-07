import { Router } from "express";
import UserController from "../controller/user.controller.js";
import checkUser from "../middleware/user.js";


const userRouter = Router()
userRouter.post('/register', checkUser,  UserController.PostUsers)
userRouter.post('/login',   UserController.LoginUsers)

export default userRouter