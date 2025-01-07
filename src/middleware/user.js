import userModel from "../models/user.js";

const checkUser = async (req, res, next) => {
    const {email, password, userName} = req.body

    if(!email || !password){
        res.status(401).send("Missing information")

    }
    else{
        next()
    }

}

export default checkUser