/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { MemoryRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../state/store";

import Header from "../Header";

const categories = ["Music", "Art", "movies"];

beforeEach(() => {
	render(
		<Provider store={store}>
			<Router>
				<Header categories={categories} />
			</Router>
		</Provider>
	);
});

test("should render header", () => {
	const headerElement = screen.getByTestId("header-1");
	expect(headerElement).toBeInTheDocument();
});

test("cart value should be 0", () => {
	const cartQuant = screen.getByTestId("cart-quant");
	expect(cartQuant).toHaveTextContent(0);
});

test("cart value should be 0", () => {
	const cartQuant = screen.getByTestId("cart-quant");
	expect(cartQuant).toHaveTextContent(0);
});
