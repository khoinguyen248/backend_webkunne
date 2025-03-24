import mongoose, {Schema} from "mongoose";



const intelcore9Schema = new mongoose.Schema({
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

const intercore9Model = mongoose.model("intelcore9", intelcore9Schema)
export default intercore9Model