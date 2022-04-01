import styled from "styled-components";
import { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";
import CartProduct from "../components/CartProduct";
import { desktop } from "../responsive";
import StripeCheckout from "react-stripe-checkout";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const KEY =
	"pk_test_51KixVXFtQjl0rfayijumWsRnazZ5WsQ1MBWVzacGlZ8I2TdmNTN0Ynp6Ll9EFBGY43lfkMxm56sO51YkLmXahc3u00kOCW3MeH";

const Container = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: repeat(10 1fr);
	grid-gap: 0.5rem;
	margin: 2rem 0 5rem 0;

	${desktop({
		gridTemplateColumns: "1fr",
	})}
`;

const ProductsContainer = styled.div`
	width: 95%;
	grid-column: 1/9;
	margin-left: 2rem;
	display: flex;
	flex-direction: column;
	background-color: white;
	min-height: 20rem;
	${desktop({
		gridColumn: " 1/2",
		width: "95%",
		margin: "0 auto",
	})}

	h2 {
		width: fit-content;
		margin-left: 3rem;
	}
`;

const DeleteSelected = styled.p`
	margin: 0;
	font-size: 17px;
	margin-left: 3rem;
	width: fit-content;

	cursor: pointer;
	color: #007185;

	&:hover {
		text-decoration: underline;
		color: #ee9e0a;
	}
`;

const TotalInfoContainer = styled.div`
	grid-column: 9/10;
	margin-right: 2rem;
	background-color: white;
	height: fit-content;
	padding: 1rem 2rem;

	${desktop({
		gridColumn: " 1/1",
		width: "calc(95% - 1.7rem)",
		margin: "0 auto",
		padding: "1rem",
	})}
`;

const TotalQuan = styled.p`
	margin: 0 0 1rem 0;
	font-size: 20px;
`;

const CheckoutButton = styled.button`
	background-color: #ffd814;
	font-size: large;
	border: none;
	border-radius: 15px;
	padding: 0.5rem 3.3rem;
	margin: 0.3rem 0 1rem 0;
	cursor: pointer;
	transition: all 0.1s;
	white-space: nowrap;
	&:hover {
		background-color: #e0bf18;
	}
`;

function Cart() {
	//addto Cart
	const cart = useSelector((state) => state.cart);
	const dispatch = useDispatch();
	const { removeMultiple, removeAll } = bindActionCreators(
		actionCreators,
		dispatch
	);

	const [selectedItems, setSelectedItems] = useState([]);

	const selectedRefs = useRef([]);
	selectedRefs.current = [];

	const addToRefs = (el) => {
		if (el && !selectedRefs.current.includes(el)) selectedRefs.current.push(el);
	};

	const handleChecks = () => {
		const filtered = selectedRefs.current
			.filter((element) => element.childNodes[0].childNodes[0].checked === true)
			.map((item) => item.id);

		setSelectedItems(filtered);
	};

	const deleteMultiple = () => {
		removeMultiple({ ids: selectedItems });
	};

	const initialQuant = 0;
	const totalQuant = cart.reduce(
		(previousValue, currentValue) => previousValue + currentValue.quantity,
		initialQuant
	);

	const initialPrice = 0;
	const totalPrice = cart
		.reduce(
			(previousValue, currentValue) =>
				previousValue + currentValue.spec.Price * currentValue.quantity,
			initialPrice
		)
		.toFixed(2);

	//handle payment
	let navigate = useNavigate();

	const [stripeToken, setStripeToken] = useState(null);

	useEffect(() => {
		const makeRequest = async () => {
			const quantAsin = cart.map((item) => {
				return { quantity: item.quantity, asin: item.spec.Data.asin };
			});

			try {
				const res = await fetch(`http://localhost:5000/payment`, {
					headers: {
						"Content-Type": "application/json",
					},
					method: "POST",
					body: JSON.stringify({
						tokenId: stripeToken.id,
						amount: totalPrice * 100,
						cart: quantAsin,
					}),
				});
				alert("Successfully purchased!");
				removeAll();
				navigate("/");
				window.scrollTo({ top: 0, behavior: "smooth" });
			} catch (err) {
				console.log(err);
				alert("Failed to purchase");
				// removeAll();
				// navigate("/");
			}
		};
		stripeToken && makeRequest();
	}, [stripeToken]);
	const onToken = (token) => {
		setStripeToken(token);
	};

	return (
		<Container>
			<ProductsContainer id="products-container">
				<h2>Shopping Cart</h2>
				<DeleteSelected
					onClick={() => {
						deleteMultiple();
					}}
				>
					Delete Selected
				</DeleteSelected>
				{cart.length > 0 ? (
					cart.map((item) => (
						<CartProduct
							key={uuidv4()}
							product={item}
							SelectRef={addToRefs}
							setSelect={handleChecks}
						/>
					))
				) : (
					<h3 style={{ textAlign: "center", marginTop: "5rem" }}>
						Your Cart is empty
					</h3>
				)}
			</ProductsContainer>
			<TotalInfoContainer>
				<div style={{ display: "flex" }}>
					<TotalQuan>
						Subtotal ({totalQuant} items):{" "}
						<span style={{ fontWeight: "bold" }}>${totalPrice}</span>
					</TotalQuan>
				</div>
				<StripeCheckout
					name="Test Amazon Shop"
					billingAddress
					shippingAddress
					description={`Your total is ${totalPrice}`}
					amount={totalPrice * 100}
					token={onToken}
					stripeKey={KEY}
				>
					<CheckoutButton>Proceed Checkout</CheckoutButton>
				</StripeCheckout>
			</TotalInfoContainer>
		</Container>
	);
}

export default Cart;
