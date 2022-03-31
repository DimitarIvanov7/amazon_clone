import React from "react";
import styled from "styled-components";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { useState, useEffect, useRef } from "react";

const SliderContainer = styled.div`
	display: flex;
	position: relative;
	overflow-x: hidden;
	width: 95vw;
	grid-row: 1/6;
	grid-column: 1/2;
	aspect-ratio: 16/9;
`;

const SliderWrapper = styled.div`
	height: 100%;
	display: flex;
	transition: all 1.5s ease;
	transform: translateX(${(props) => props.slideIndex * -95}vw);
`;

const Slide = styled.img`
	max-width: 100%;
`;

const ButtonSliderLeft = styled.button`
	position: absolute;
	left: 0;
	margin: auto 0;
	font-size: 40px;
	margin: 8rem 1rem;
	background: none;
	border: none;
	cursor: pointer;
	z-index: 5;
`;

const ButtonSliderRight = styled.button`
	position: absolute;
	right: 0;
	margin: 8rem 1rem;
	font-size: 40px;
	background: none;
	border: none;
	cursor: pointer;
	z-index: 5;
`;

function HeroSlider() {
	const [slideIndex, setSlideIndex] = useState(0);

	//hendle hero slider
	const handleSlider = (direction) => {
		if (direction === "prev") {
			setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
		} else {
			setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
		}

		console.log(slideIndex);
	};

	return (
		<SliderContainer id="hero-slider">
			<ButtonSliderLeft onClick={() => handleSlider("prev")}>
				<IoIosArrowBack />
			</ButtonSliderLeft>
			<ButtonSliderRight onClick={() => handleSlider("next")}>
				<IoIosArrowForward />
			</ButtonSliderRight>
			<SliderWrapper slideIndex={slideIndex}>
				<Slide id="slide" src="images/slider_1.jpg" />
				<Slide id="slide" src="images/slider_2.jpg" />
				<Slide id="slide" src="images/slider_3.jpg" />
			</SliderWrapper>
		</SliderContainer>
	);
}

export default HeroSlider;
