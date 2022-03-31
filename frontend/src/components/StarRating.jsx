import styled from "styled-components";

import { AiOutlineStar } from "react-icons/ai";

import { AiFillStar } from "react-icons/ai";

import { BsStarHalf } from "react-icons/bs";

import { v4 as uuidv4 } from "uuid";

const Container = styled.div`
	cursor: pointer;

	flex-direction: row !important;

	svg {
		color: #ffbb00;
	}
`;

function StarRating({ rating, size }) {
	const rounded = Math.floor(rating);

	const starsLeft = 5 - rating;

	const starArr = () => {
		if (!rating) return;

		let arr = [];
		for (let i = 0; i < rounded; i++) {
			arr.push(<AiFillStar key={uuidv4()} size={size || 21} />);
		}

		if (rating - rounded > 0.3) {
			arr.push(
				<BsStarHalf
					key={uuidv4()}
					size={size - 3 || 18}
					style={{ paddingBottom: "2px" }}
				/>
			);
		}

		if (starsLeft > 1) {
			for (let i = 0; i < Math.floor(starsLeft); i++) {
				arr.push(<AiOutlineStar key={uuidv4()} size={size || 21} />);
			}
		}

		if (arr.length < 5) {
			arr.push(<AiOutlineStar key={uuidv4()} size={size || 21} />);
		}

		return arr;
	};

	return <Container id="star-container">{starArr()}</Container>;
}

export default StarRating;
