import express from "express";
import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import { ProductData } from "./models/productModel.js";
import cors from "cors";
import morgan from "morgan";
import Stripe from "stripe";

import path from "path";

const __dirname = path.resolve();

const stripe = new Stripe(process.env.STRIPE_KEY);

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

app.use(morgan("dev"));

app.use(
	cors({
		origin: "http://localhost:3000",
	})
);

//heroku
app.use(express.static(path.join(__dirname, "frontend", "build")));

mongoose
	.connect(process.env.MONGODB_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		app.listen(port);
	})
	.catch((err) => console.log(err));

const getProductsData = async () => {
	const findProducts = await ProductData.find();
	return JSON.stringify(findProducts);
};

const updateQuantity = async (indetifier, data, qunt) => {
	const findProduct = await ProductData.findOne({
		[indetifier]: data,
	});

	const currentQuant = findProduct.Quantity - qunt;

	const getProduct = await ProductData.findOneAndUpdate(
		{
			[indetifier]: data,
		},
		{
			Quantity: currentQuant,
		}
	);
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

app.get("/api/get-products", async (req, res) => {
	const awaitProductsData = await getProductsData();
	res.send(awaitProductsData);
});

app.get("/api/product/:id", async (req, res) => {
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

app.get("/api/category/:name", async (req, res) => {
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

app.post("/api/payment", (req, res) => {
	stripe.charges.create(
		{
			source: req.body.tokenId,
			amount: req.body.amount,
			currency: "usd",
		},
		(stripeErr, stripeRes) => {
			if (stripeErr) {
				console.log(stripeErr);
				res.status(500).json(stripeErr);
			} else {
				res.json(stripeRes);
			}
		}
	);

	const cart = req.body.cart;

	cart.forEach(async (product) => {
		await updateQuantity("Data.asin", product.asin, product.quantity);
	});
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "frontend", "build", "index.html"));
});
