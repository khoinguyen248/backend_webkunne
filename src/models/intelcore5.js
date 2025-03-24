import mongoose, {Schema} from "mongoose";



const intelcore5Schema = new mongoose.Schema({
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

const intercore5Model = mongoose.model("intelcore5", intelcore5Schema)
export default intercore5Model