import { Router } from "express";
import userRouter from "./user.js";
import PostRouter from "./post.js";


const Root = Router()
Root.use('/users', userRouter)
Root.use('/post',PostRouter)


export default Root