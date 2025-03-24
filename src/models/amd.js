import mongoose, {Schema} from "mongoose";



const amdSchema = new mongoose.Schema({
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

const amdModel = mongoose.model("amd", amdSchema)
export default amdModel
