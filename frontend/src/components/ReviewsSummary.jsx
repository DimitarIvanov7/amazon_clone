import styled from "styled-components";
import StarRating from "./StarRating";

import { bigScreens, phone, desktop } from "../responsive";
// import { v4 as uuidv4 } from "uuid";

const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	/* flex: 1 0 30%; */
	margin-left: 0.5rem;
	align-self: flex-start;
	${desktop({
		margin: "0 auto",
	})};
	${bigScreens({
		position: (props) => !props.inSearch && "sticky",
		top: (props) => !props.inSearch && "0",
		marginRight: (props) => !props.inSearch && "auto",
	})};

	${phone({
		margin: "0 .5rem",
	})};
`;

const Wrapper = styled.div`
	display: flex;
	gap: 1rem;

	&:hover {
		cursor: pointer;

		p {
			text-decoration: underline;
			color: #ee9e0a;
		}
	}
`;

const EmptyContainer = styled.div`
	width: ${(props) => (props.search ? "10rem" : "15rem")};
	height: ${(props) => (props.search ? ".9rem" : "1.4")};
	background-color: #f0f2f2;
	border-radius: 5px;
	border: 2px solid #e7e7e7;

	${phone({
		width: "12rem",
		height: "1.4rem",
	})};
`;

const FullContainer = styled.div`
	background-color: #ffa41c;
	height: 100%;
	width: ${(props) => props.width + `%`};
	box-shadow: inset -2px 0 0 -1px #f5961d, inset 0 0 0 1px #de7921;
	border-top-left-radius: 5px;
	border-bottom-left-radius: 5px;
`;

const PercentageInfo = styled.p`
	margin: 0;
	font-size: ${(props) => (props.search ? "12px" : "18px")};
`;

const ReviewsSummary = ({ rating, total, totalNum, inSearch }) => {
	const getRatings = () => {
		const data = [];
		if (rating) {
			for (const [key, value] of Object.entries(rating)) {
				data.push(
					<Wrapper>
						<p style={{ margin: "0", width: "5rem" }}>
							{key.charAt(0).toUpperCase() + key.substring(1).replace("_", " ")}
						</p>
						<EmptyContainer search={inSearch}>
							<FullContainer width={value.percentage} search={inSearch} />
						</EmptyContainer>
						<PercentageInfo search={inSearch}>
							{value.percentage}%
						</PercentageInfo>
					</Wrapper>
				);
			}
		}

		return data;
	};

	return (
		<Container>
			{!inSearch && (
				<h3 style={{ fontSize: "25px", margin: "5px 0" }}>Customer reviews</h3>
			)}
			<div style={{ display: "flex", gap: "1rem" }}>
				<StarRating rating={total} size={31} />
				<p style={{ margin: "0", fontSize: "23px" }}>{totalNum}</p>
			</div>

			{getRatings()}
		</Container>
	);
};

export default ReviewsSummary;
