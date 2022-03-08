import fs from 'fs'
import mongoose from 'mongoose';
import { ProductData } from '../models/productModel.js'

import dotenv from "dotenv"
dotenv.config()

// const directoryPath = 'jsonData'

// fs.readdir(directoryPath, function (err, files) {
//     //handling error
//     if (err) {
//         return console.log('Unable to scan directory: ' + err);
//     } 
//     objectData(files)

// });


// const readData = async (file) => {
//     let rawdata = fs.readFileSync(`jsonData/${file}`);
//     let products = JSON.parse(rawdata);
//     return products
// }

// const objectData = async (files) => {
//     let PromiseData = await Promise.all(
//         files.map(async file => {
//             const waiting = await readData(file)
//             return waiting
//         })
//     )

//     const bigObj = PromiseData.flat(1)
//     saveFile(bigObj)

// }


// function saveFile(data) {
//     // stringify to save jsonfile
//     const objectsStr = JSON.stringify(data);

//     // save json
//     fs.writeFile(`products.json`, objectsStr, function(err, result) {
//         if(err) console.log('error', err);
//     })
// }


const readData = async () => {
    let rawdata = fs.readFileSync('./jsonData/products.json');
    let products = JSON.parse(rawdata);


    products.forEach((element, index) => {
        const productsNew = new ProductData({
            Id: index,
            Data: element.product
        })

        productsNew.save().then((result)=>{
            console.log(result);
        })
    });
}



mongoose.connect(process.env.MONGODB_URI,  {useNewUrlParser: true, useUnifiedTopology: true})
    .then((result)=> readData())
    .catch((err)=> console.log(err))


