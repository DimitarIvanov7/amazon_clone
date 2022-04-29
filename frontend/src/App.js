import styled from "styled-components";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Product from "./pages/Product";
import GetAllProducstData from "./hooks-functions/GetAllProductsData";
import Category from "./pages/Category";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";

const MainContainer = styled.div`
	width: 100%;
`;

function App() {
	const [categories, setCategories] = useState([]);

	const [products, setProducts] = useState([]);

	useEffect(() => {
		getProductData();
	}, []);

	const getProductData = async () => {
		const Data = await GetAllProducstData("get-products");

		setCategories(Data.categories);

		setProducts(Data.products);
	};

	return (
		<>
			<MainContainer id="main-container">
				{categories.length !== 0 && <Header categories={categories} />}
				{products.length > 0 && (
					<>
						<Routes>
							<Route path="/" element={<Home products={products} />} />
							<Route path="/product/:id" element={<Product />} />
							<Route path="/category/:name" element={<Category />} />
							<Route path="/search" element={<Category />} />
							<Route path="/cart" element={<Cart />} />
							<Route path="/checkout" element={<Checkout />} />
							<Route path="*" element={<Home products={products} />} />
						</Routes>
						<Footer />
					</>
				)}
			</MainContainer>
		</>
	);
}

export default App;
