import { Router } from "express";
import postController from "../controller/post.controller.js";

const PostRouter = Router()

PostRouter.post('/', postController.CreatePost)
PostRouter.post('/:id', postController.GetPost)

export default PostRouter