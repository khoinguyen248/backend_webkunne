import bcrypt from 'bcrypt'
import generatedS from "../utils/common.js";
import intercore3Model from '../models/intelcore3.js';



const intelcore3Controller = {
    PostProduct: async (req, res) => {
       const {name, cores, threads, boost_clock, brand, type, price} = req.body
       const newProduct = new intercore3Model({
        name: name, cores: cores, threads: threads, boost_clock: boost_clock, brand: brand, type: type, price: price
       })

       await newProduct.save()

       res.status(201).send({
        data: newProduct
       })
           
    },
   
}

export default intelcore3Controller