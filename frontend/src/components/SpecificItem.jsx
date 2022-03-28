import styled from "styled-components";
import { Link } from "react-router-dom";
import StarRating from "./StarRating";

import { IoIosArrowDown } from "react-icons/io";
import { phone, bigTablet, desktop } from "../responsive";

const Container = styled.div`
	background-color: white;
	height: fit-content;
	flex: ${(props) => props.type && ".1 0 21%"} ;
	width: ${(props) => !props.type && "calc(25% - 11px)"};
	aspect-ratio: ${(props) => !props.type && "1 / 1"};
	display: flex;
	flex-direction: column;
	justify-content: ${(props) => (props.type ? "space-between" : "flex-start")};
	align-items: center;
	border: ${(props) => props.type && "1px solid #e2e0e0"};
	padding: ${(props) => props.type && "1rem"};
	${desktop({
		flex: (props) => props.type && ".5 0 33%",
	})}
	${bigTablet({
		width: (props) => !props.type && "calc(50% - 11px)",
		flex: (props) => props.type && "1 0 50%",
	})}
	${phone({
		width: (props) => !props.type && "calc(100% - 11px)",
	})}
`;

const Headline = styled.h2`
	width: fit-content;
	text-align: center;
	font-size: 20px;
`;

const Image = styled.img`
	max-width: 100%;
	max-height: 100%;
	cursor: pointer;
`;

const NormalLink = styled.a`
	text-decoration: none;
	color: #007185;
	align-self: flex-start;

	&:hover {
		text-decoration: underline;
		color: #ee9e0a;
	}
`;

const InfoContainer = styled.div`
	margin-bottom: auto;
`;

const Title = styled.h4`
	font-weight: 100;
	cursor: pointer;
	overflow: hidden;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;

	&:hover {
		text-decoration: underline;
		color: #ee9e0a;
	}
`;

const Price = styled.p`
	cursor: pointer;
	font-size: 20px;
`;

const ReviewContainer = styled.div`
	display: flex;

	p,
	svg.arrow-down {
		margin: 0;
		color: #007185;
		cursor: pointer;
	}

	svg.arrow-down {
		margin: 0 3px 0 10px;

		&:hover {
			text-decoration: underline;
			color: #ee9e0a;
		}
	}
`;

const RerviewInfoContainer = styled.div``;

const Location = styled.p`
	font-weight: 100;
	font-size: 12px;
`;

function SpecificItem({ item, message = "More items to consider", type }) {
	const route = `/product/${item.Data.asin}`;

	return (
		<Container type={type}>
			{!type && <Headline>{message}</Headline>}
			<Link
				style={{ maxWidth: "80%", maxHeight: "70%" }}
				className="link"
				to={route}
			>
				<Image src={item.Data.main_image.link} alt="" />
			</Link>
			{!type && (
				<Link style={{ margin: "auto 0 .5rem 0" }} className="link" to={route}>
					<NormalLink href="#">See more</NormalLink>
				</Link>
			)}
			{type && (
				<InfoContainer>
					<Link style={{ textDecoration: "none", color: "black" }} to={route}>
						<Title> {item.Data.title}</Title>
					</Link>
					<ReviewContainer>
						<StarRating rating={item.Data.rating} />
						{item.Data.rating && <IoIosArrowDown className="arrow-down" />}
						<p>{item.Data.ratings_total}</p>
					</ReviewContainer>
					<Price>${item.Price}</Price>
					<Location>Ships to Bulgaria</Location>
				</InfoContainer>
			)}
		</Container>
	);
}

export default SpecificItem;
