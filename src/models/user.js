import mongoose, {Schema} from "mongoose";
import { type } from "os";

const userSchema = new mongoose.Schema({
    userName: {
        type: String
    },
    email:{
        type: String,
        unique: true
    },
    password: {
        type: String,
    },
    hash: {
      type: String
    },
    salt: {
      type: String
    },
    apiKey: {
        type: String
    }
} 
)

const userModel = mongoose.model("users", userSchema)
export default userModel