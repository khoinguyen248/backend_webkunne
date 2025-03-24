import { Router } from "express";
import intelcore3Controller from "../controller/user.controller.js";


const intelcore3Router = Router()

intelcore3Router.post('/intel3', intelcore3Controller.PostProduct)

export default  intelcore3Router