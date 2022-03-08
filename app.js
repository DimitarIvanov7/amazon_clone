import express from 'express';
import dotenv from "dotenv"
dotenv.config()
import mongoose from 'mongoose';
import { ProductData } from './models/productModel.js'
import cors from 'cors'
import bodyParser from 'body-parser'
import morgan from 'morgan'


async function getProductsData() {
    const findProducts = await ProductData.find()
    return JSON.stringify(findProducts)
}

const app = express();
const port = process.env.PORT

app.use(bodyParser.json());

app.use(morgan('dev'));


app.use(cors({
    origin: 'http://localhost:3000'
}));

mongoose.connect(process.env.MONGODB_URI,  {useNewUrlParser: true, useUnifiedTopology: true})
    .then((result)=> {app.listen(port)})
    .catch((err)=> console.log(err))



app.get('/get-products', async (req, res) => {
    const awaitProductsData = await getProductsData() 

    res.send(awaitProductsData)
})

