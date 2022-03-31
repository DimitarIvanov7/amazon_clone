import React from "react";
import HeroSlider from "../components/HeroSlider";
import Categories from "../components/CategoriesHomepage";
import styled from "styled-components";

import { phone, bigTablet } from "../responsive";

const HeroContainer = styled.div`
	width: 100%;
	margin: 0 auto;
	margin-bottom: 5rem;
	display: grid;
	grid-template-rows: repeat(25, 1fr);
	justify-items: center;

	${bigTablet({
		gridTemplateRows: "repeat(28, 1fr)",
	})}

	${phone({
		gridTemplateRows: "repeat(50, 1fr)",
	})}
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
