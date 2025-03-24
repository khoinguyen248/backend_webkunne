import mongoose, {Schema} from "mongoose";



const intelcore4Schema = new mongoose.Schema({
    name: {
        type: String,

    },
    cores: {
        type: Number
    },
    threads:{
        type:Number
    },
    boost_clock:{
        type:Number
    },
    brand:{
        type: String
    },
    type:{
        type: String
    },
    price:{
        type:String
    }
},
{
    timestamps: true,

}
)

const intercore4Model = mongoose.model("intelcore4", intelcore4Schema)
export default intercore4Model