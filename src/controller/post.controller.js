import postModel from "../models/post.js";
import userModel from "../models/user.js";

const postController = {
   CreatePost: async (req, res) =>{
    const {api} = req.query
      const {userId, content} = req.body

      if(!api){
        res.status(401).send("Unauthorized Command")

      }
      else{
        const CheckUser = await userModel.findOne({apiKey: api})
        if (!CheckUser) {
            res.status(404).send("Wrong Api, please try again")
        } else {
            const newPost = {
                userId,
                content
            }

            newPost.userId = CheckUser._id

            const donhang = new postModel(newPost)
            await donhang.save()

            res.status(201).send({
                message: "Post created !",
                data: donhang
            })
        }
      }



   },
   GetPost: async(req, res) =>{
    const {api} = req.query
    const {id} = req.params
    const{content} = req.body

    if(!api){
        res.status(401).send("Unauthorized Command")

      }
      else{
        const CheckUser = await userModel.findOne({
            apiKey: api,

        })

        if(!CheckUser){
            res.status(404).send("Wrong Api")

        }

        const CheckPost = await postModel.findOne({
            userId: CheckUser.id,
            _id: id
        })
        if (!CheckPost) {
            res.status(404).send("Can't find your post")
        } else {
           
            CheckPost.content = content

            await CheckPost.save()

            res.status(201).send({
                message: "Post updated !",
                data: CheckPost
            })
        }
      }

   }
}

export default postController