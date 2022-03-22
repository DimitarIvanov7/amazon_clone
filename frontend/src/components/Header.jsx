import React from "react";
import styled from "styled-components";
import { GrLocation } from "react-icons/gr";
import { BsSearch } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";

const Container = styled.div`
	width: 100%;
	background-color: black;
	display: grid;
	/* grid-template-columns: auto minmax(0, 1fr); */
	padding: 0.4rem 0 0 0;
	gap: 2rem;
	align-items: center;
`;

const Top = styled.div`
	display: flex;
	width: 100vw;
	background-color: black;
	padding: 0.4rem 0;
	gap: 2rem;
`;
const Logo = styled.img`
	width: 8rem;
`;

const LocationContainer = styled.div`
	color: white;
	font-size: 12px;
	margin: auto 0;
`;

const Location = styled.p`
	display: flex;
	color: white;
	margin: 0;
	font-size: 15px;
	gap: 2px;

	svg > path {
		stroke: white;
		size: x-large;
	}
`;

const SeachContainer = styled.div`
	display: flex;
	width: 100%;
	position: relative;
	align-items: center;
`;

const SearchBar = styled.input`
	display: flex;
	width: 100%;
	min-width: 10rem;
	height: 65%;
	border-radius: 10px;
	border: 0;
	padding-left: 3.4rem;
`;

const Categories = styled.select`
	position: absolute;
	left: 0;
	height: 68%;
	width: 3rem;
	border-top-left-radius: 10px;
	border-bottom-left-radius: 10px;
	background-color: #e9e3e3;
	display: flex;
	cursor: pointer;
`;

const SearchIconContainer = styled.div`
	position: absolute;
	right: 0;
	height: 68%;
	width: 3rem;
	border-top-right-radius: 10px;
	border-bottom-right-radius: 10px;
	background-color: #febd69;
	display: flex;
	cursor: pointer;

	&:hover {
		background-color: #fcad47;
	}

	svg {
		margin: auto;
	}
`;

const LanguagesCountainer = styled.div`
	width: 1.8rem;
	margin: auto 0;
	display: flex;
	gap: 5px;
`;
const CountryFlags = styled.img``;

const ShoppingCartContainer = styled.div`
	margin: auto 7rem;
	cursor: pointer;

	svg {
		color: white;
	}
`;

const ItemNumber = styled.p`
	color: #fcad47;
	font-size: 15px;
	font-weight: bold;
	margin: 0;
	text-align: center;
`;

const CategorySlide = styled.div`
	display: flex;
	/* flex-wrap: wrap; */
	background-color: #232f3e;
	gap: 2rem;
	padding: 0 1rem;
`;

const CategoryName = styled.p`
	color: white;
	cursor: pointer;
	border: 1px solid transparent;
	padding: 0.5rem 0.3rem;
	margin: 0.3rem 0;

	&:hover {
		border: 1px solid white;
	}
`;

function Header({ categories }) {
	const searchInputRef = useRef();
	const catInputRef = useRef();

	let navigate = useNavigate();
	const handleSearch = () => {
		const path = `/search?cat=${catInputRef.current.value}&q=${searchInputRef.current.value}`;
		navigate(path);
	};

	const getLink = (category) => {
		return `/category/${category}`;
	};

	const cart = useSelector((state) => state.cart);

	const initialQuant = 0;
	const totalQuant = cart.reduce(
		(previousValue, currentValue) => previousValue + currentValue.quantity,
		initialQuant
	);

	return (
		<Container data-testid="header-1">
			<Top>
				<Link to="/">
					<Logo src="/images/Amazon-Logo1.png" />
				</Link>
				<LocationContainer>
					&nbsp; &nbsp; &nbsp; Deliver to{" "}
					<Location>
						<GrLocation size={20} className="icon-location" />
						Bulgaria
					</Location>
				</LocationContainer>
				<SeachContainer>
					<SearchBar ref={searchInputRef} />
					<Categories ref={catInputRef}>
						{categories.map((categorie) => {
							if (categorie === "All Departments") {
								return (
									<option value={categorie} selected>
										All
									</option>
								);
							}
							return <option value={categorie}>{categorie}</option>;
						})}
					</Categories>
					<SearchIconContainer onClick={() => handleSearch()}>
						<BsSearch />
					</SearchIconContainer>
				</SeachContainer>
				<LanguagesCountainer>
					<CountryFlags src="http://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg" />
					<p style={{ color: "white", cursor: "pointer", fontSize: "10px" }}>
						▼
					</p>
				</LanguagesCountainer>
				<Link to="/cart">
					<ShoppingCartContainer>
						<ItemNumber data-testid="cart-quant">{totalQuant}</ItemNumber>
						<FiShoppingCart size={30} />
					</ShoppingCartContainer>
				</Link>
			</Top>
			<CategorySlide>
				{categories.map((category) => (
					<Link to={getLink(category)}>
						<CategoryName>{category}</CategoryName>
					</Link>
				))}
			</CategorySlide>
		</Container>
	);
}

export default Header;
