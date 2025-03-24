import { Router } from "express";
import PostRouter from "./post.js";
import intelcore3Router from "./intelcore3.js";


const Root = Router()
Root.use('/users', intelcore3Router)
Root.use('/post',PostRouter)


export default Root