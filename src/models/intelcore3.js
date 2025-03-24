import mongoose, {Schema} from "mongoose";



const intelcore3Schema = new mongoose.Schema({
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

const intercore3Model = mongoose.model("intelcore3", intelcore3Schema)
export default intercore3Model