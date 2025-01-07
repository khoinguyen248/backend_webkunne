import mongoose, {Schema} from "mongoose";



const postSchema = new mongoose.Schema({
    userId: {
        type: String,

    },
    content: {
        type: String
    }
},
{
    timestamps: true,

}
)

const postModel = mongoose.model("posts", postSchema)
export default postModel