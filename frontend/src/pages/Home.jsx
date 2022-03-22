import React from "react";
import HeroSlider from "../components/HeroSlider";
import Categories from "../components/CategoriesHomepage";
import styled from "styled-components";
import { useState, useEffect, useRef } from "react";

const HeroContainer = styled.div`
	width: 100%;
	margin: 0 auto;
	margin-bottom: 5rem;
	display: grid;
	grid-template-rows: repeat(25, 1fr);
	justify-items: center;
`;

function Home({ products }) {
	return (
		<HeroContainer id="hero">
			<HeroSlider />
			<Categories products={products}></Categories>
		</HeroContainer>
	);
}

export default Home;
