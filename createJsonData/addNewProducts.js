/* eslint-disable no-nonoctal-decimal-escape */
/* eslint-disable no-loss-of-precision */
import fetch from "node-fetch";
import { ProductData } from "../models/productModel.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const addNewProcuts = async (asins) => {
	const fetchData = async (asin) => {
		const req = await fetch(
			`https://api.rainforestapi.com/request?api_key=CEC92ED8BDF642018BC24E67E14E9D7F&type=product&amazon_domain=amazon.com&asin=${asin}&output=json`
		);
		const jsonData = await req.json();
		return jsonData.request_info.success === true
			? jsonData
			: jsonData.request_info.message;
	};

	let PromiseData = await Promise.all(
		asins.map(async (book) => {
			const data = await fetchData(book);
			return data;
		})
	);

	const pureProduct = PromiseData.map((product) =>
		typeof product === "string" ? product : product.product
	);

	const prices = pureProduct.map((product) => {
		if (typeof product === "string") return product;
		else if (product.buybox_winner.new_offers_from) {
			return product.buybox_winner.new_offers_from.value;
		} else if (product.buybox_winner.mixed_offers_from)
			return product.buybox_winner.mixed_offers_from.value;
		else if (product.buybox_winner.price)
			return product.buybox_winner.price.value;
		return 24.99;
	});

	pureProduct.forEach((product, index) =>
		typeof product === "string"
			? console.log(product)
			: newProduct(product, index, prices)
	);
};

const newProduct = async (product, index, prices) => {
	const newOne = await new ProductData({
		Id: index,
		Data: product,
		Price: prices[index],
		Quantity: 30,
	});

	await newOne.save();
};

const booksData = [
	"B087LQ9B4D",
	"B08SQCY91J",
	"B09H3791ZY",
	"B09CPTL1HL",
	"B07BDL71RX",
];

mongoose
	.connect(process.env.MONGODB_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then((result) => {
		addNewProcuts(booksData);
	})
	.catch((err) => console.log(err));
