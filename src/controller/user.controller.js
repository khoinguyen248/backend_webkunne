import userModel from "../models/user.js";
import bcrypt from 'bcrypt'
import generatedS from "../utils/common.js";



const UserController = {
    PostUsers: async (req, res) => {
        try {
            const {userName, email, password} = req.body
            const salt = bcrypt.genSaltSync(10)
            const hash = bcrypt.hashSync(password, salt)

            const newUser = {
                userName,
                salt,
                email,
                hash
            }

            const update = new userModel(newUser)
            await update.save()

            res.status(201).send("User created !!")
        } catch (error) {
            
        }
    },
    LoginUsers: async (req, res) => {
        const {email, password} = req.body

        const UserCheck = await userModel.findOne({
            email: email
        })

        console.log(UserCheck)

        const Checking = bcrypt.compareSync(password, UserCheck.hash)
        if(Checking){
            const key = `mern-$${UserCheck._id}$-$${UserCheck.email}$-$${generatedS(8)}$`
            console.log(key)

            UserCheck.apiKey = key
            await UserCheck.save()

            return res.status(201).send({message: "Welcome",
                data: UserCheck
            })
        }else{
           return res.status(401).send("Please enter again")
        }
    }
}

export default UserController