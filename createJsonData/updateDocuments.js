import { ProductData } from "../models/productModel.js";
import mongoose from 'mongoose';
import dotenv from "dotenv"
dotenv.config()


mongoose.connect(process.env.MONGODB_URI,  {useNewUrlParser: true, useUnifiedTopology: true})
    .then((result)=> {upDataAll()})
    .catch((err)=> console.log(err))

const upDataAll = async () => {

    return

    // const getCategoryProducts = await ProductData.deleteMany({
    //     'Price': { $exists: false }
    // })
    
    // console.log(getCategoryProducts);
    

    // const findProducts = await ProductData.find()
    // // const data = JSON.stringify(findProducts)

    // console.log(typeof findProducts);

    // const prices = findProducts.map(product => {
    //     if (product.Data.buybox_winner.new_offers_from) return product.Data.buybox_winner.new_offers_from.value
    //     else if (product.Data.buybox_winner.mixed_offers_from) return product.Data.buybox_winner.mixed_offers_from.value
    //     else if (product.Data.buybox_winner.price) return product.Data.buybox_winner.price.value
    //     return 24.99
    // })

    // findProducts.forEach((product, index) => newProduct(product, index, prices))

}


// const newProduct = async (product, index, prices) => {
//     const newOne = await new ProductData({
//         Id: index,
//         Data: product.Data,
//         Price: prices[index],
//         Quantity: 30
//     })

//     await newOne.save()
// }


