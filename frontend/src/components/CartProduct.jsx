import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect, useRef } from "react";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";

const Container = styled.div`
	display: flex;
	width: 96%;
	aspect-ratio: 16/3;
	background-color: white;
	margin: 0.5rem auto;
	border: 1px #f5eeee;
	border-style: solid none none none;
`;

const SelectItem = styled.input`
	/* color: #007185; */
	cursor: pointer;
	margin-right: 1rem;
`;

const ImageContainer = styled.div`
	width: 20%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: 1rem;
`;

const ImageMain = styled.img`
	max-width: 100%;
	max-height: 100%;
	cursor: pointer;
`;

const InfoContainer = styled.div`
	margin-left: 2rem;
	width: 70%;
`;

const Title = styled.h3`
	display: inline-block;
	max-width: 80%;
	margin: 0;
	margin-top: 0.5rem;
	/* overflow: hidden;
    word-wrap: break-word;
	text-overflow: ellipsis; */
	/* max-height: 1.6em; (Number of lines you want visible) * (line-height) */

	/* .ellipsis::after {
		content: "...";
		position: absolute;
		right: -12px;
		bottom: 4px;
	} */
`;

const InStock = styled.p`
	color: ${(props) => (props.stockData ? "green" : "red")};
`;

const ChangesContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
`;

const QuantChange = styled.p``;

const ChangeQuantBtn = styled.button`
	cursor: pointer;
	border-radius: 7px;
	border: none;
	text-align: center;
	vertical-align: middle;
	padding: 1px 5px;
	background-color: #f0f2f2;
`;

const DeleteItem = styled.p`
	cursor: pointer;
	color: #007185;

	&:hover {
		text-decoration: underline;
		color: #ee9e0a;
	}
`;

const PriceContainer = styled.div`
	width: 10%;
	display: flex;
	/* margin-right: 2rem; */
`;

const Price = styled.p`
	font-size: 20px;
	font-weight: bold;
`;

function CartProduct({ product, SelectRef, setSelect }) {
	const imgSrc = product.spec.Data.images
		? product.spec.Data.images[0].link
		: product.spec.Data.main_image.link;

	const Stock = product.spec.Quantity ? true : false;

	const dispatch = useDispatch();
	const { addQuantity, removeQuantity, removeItem } = bindActionCreators(
		actionCreators,
		dispatch
	);

	const handleDelete = (id) => {
		removeItem({
			id: id,
		});
	};

	const handleQuantChange = (action) => {
		if (action === "+")
			return addQuantity({
				id: product.spec._id,
			});
		if (product.quantity === 0) return;
		else
			return removeQuantity({
				id: product.spec._id,
			});
	};

	return (
		<Container ref={SelectRef} id={product.spec._id}>
			<ImageContainer>
				<SelectItem onClick={() => setSelect()} type="checkbox"></SelectItem>
				<ImageMain src={imgSrc} />
			</ImageContainer>

			<InfoContainer>
				<Title>{product.spec.Data.title}</Title>
				<InStock stockData={Stock}>In Stock</InStock>
				<ChangesContainer>
					<ChangeQuantBtn onClick={() => handleQuantChange("-")}>
						-
					</ChangeQuantBtn>
					<QuantChange>{product.quantity}</QuantChange>
					<ChangeQuantBtn onClick={() => handleQuantChange("+")}>
						+
					</ChangeQuantBtn>
					<DeleteItem onClick={() => handleDelete(product.spec._id)}>
						Delete Item
					</DeleteItem>
				</ChangesContainer>
			</InfoContainer>
			<PriceContainer>
				<Price>$ {(product.spec.Price * product.quantity).toFixed(2)}</Price>
			</PriceContainer>
		</Container>
	);
}

export default CartProduct;
