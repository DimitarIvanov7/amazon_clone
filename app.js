/* eslint-disable no-undef */
import express from "express";
import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import { ProductData } from "./models/productModel.js";
import cors from "cors";
import morgan from "morgan";

const app = express();
const port = process.env.PORT;

app.use(express.json());

app.use(morgan("dev"));

app.use(
	cors({
		origin: "http://localhost:3000",
	})
);

mongoose
	.connect(process.env.MONGODB_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		app.listen(port);
	})
	.catch((err) => console.log(err));

app.get("/get-products", async (req, res) => {
	const awaitProductsData = await getProductsData();
	res.send(awaitProductsData);
});

app.get("/product/:id", async (req, res) => {
	const productId = req.params.id;

	const getProduct = await ProductData.findOne({
		"Data.asin": productId,
	});

	console.log(getProduct.Data.categories[0].name);

	if (getProduct !== null) {
		res.send(getProduct);
	} else {
		res.send(false);
	}
});

app.get("/category/:name", async (req, res) => {
	const categoryName = req.params.name;

	const fortmatCat = formatCategory(categoryName);

	if (fortmatCat === "All Departments") {
		const allData = await getProductsData();
		res.send(allData);
		return;
	}

	const getCategoryProducts = await ProductData.find({
		"Data.categories": { $elemMatch: { name: fortmatCat } },
	});

	if (getCategoryProducts !== null) {
		res.send(getCategoryProducts);
	} else {
		res.send(false);
	}
});

// app.get("/search", async (req, res) => {
// 	const query = req.query.title;
// 	console.log(query);

// 	const searchProducts = await ProductData.find({
// 		"Data.title": new RegExp(query, "i"),
// 	});

// 	console.log(searchProducts);

// 	if (searchProducts.length !== 0) {
// 		res.send(searchProducts);
// 	} else {
// 		res.send(false);
// 	}
// });

const getProductsData = async () => {
	const findProducts = await ProductData.find();
	return JSON.stringify(findProducts);
};

//format category
const formatCategory = (categoryName) => {
	if (categoryName.includes("%20")) categoryName.replace("%20", " ");
	let formatted = categoryName.split(" ");

	for (let i = 0; i < formatted.length; i++) {
		formatted[i] = formatted[i][0].toUpperCase() + formatted[i].substr(1);
	}

	return formatted.join(" ");
};
