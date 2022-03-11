import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import GetCategoryData from "../hooks-functions/GetCategoryData";
import SpecificItem from "../components/SpecificItem";
import StarRating from "../components/StarRating";

const Container = styled.div`
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	padding-bottom: 5rem;
	width: 100%;
	background-color: white;
`;

const ResultsContainer = styled.div`
	grid-column: 2/-1;
`;

const ProductsContainer = styled.div`
	display: flex;
	width: 100%;
	flex-wrap: wrap;
	gap: 0.5rem;
	margin-right: 2rem;
`;

const FiltersContainer = styled.div`
	grid-column: 1/1;
	display: flex;
	padding-left: 2rem;
	align-items: flex-start;
	flex-direction: column;
`;

const ReviewsFilter = styled.div`
	margin-top: 5rem;
`;

const SmallReviewContainer = styled.div`
	display: flex;

	p {
		margin: 0 0 0 5px;
		cursor: pointer;

		&:hover {
			text-decoration: underline;
			color: #ee9e0a;
		}
	}
`;

const PriceFilter = styled.div`
	margin-top: 1rem;
`;
const PriceRangeContainer = styled.div``;
const PriceRange = styled.p`
	cursor: pointer;

	&:hover {
		text-decoration: underline;
		color: #ee9e0a;
	}
`;

const MinMaxContainer = styled.form`
	display: flex;
	max-width: 100%;
	gap: 0.5rem;
`;

const MinMaxInput = styled.input`
	width: 31%;
	height: 1.5rem;
`;

const PriceSearchButton = styled.button`
	cursor: pointer;
	border: 1px solid #c7c7c7;
	background-color: white;
	border-radius: 7px;
	box-shadow: 0 2px 5px #8888885a;

	&:hover {
		background-color: #bebbbb5a;
	}
`;

function Category() {
	const { name } = useParams();

	const [category, setCategory] = useState(null);

	useEffect(() => {
		getData();
	}, [name]);

	const getData = async () => {
		const categoryData = await GetCategoryData(name);

		console.log(categoryData);
		setCategory(categoryData);
	};

	//starfilter

	const filterReview = async (rating) => {
		const categoryData = await GetCategoryData(name);
		const filtered = categoryData.filter((cat) => cat.Data.rating >= rating);
		setCategory(filtered);
	};

	const StarFilter = () => {
		let arr = [];
		for (let i = 4; i > 0; i--) {
			arr.push(
				<SmallReviewContainer style={{ display: "flex" }}>
					<StarRating rating={i} />{" "}
					<p onClick={() => filterReview(i)} id={i}>
						{" "}
						and Up
					</p>
				</SmallReviewContainer>
			);
		}
		return arr;
	};

	//const price ranges
	const priceRanges = [[25], [25, 50], [50, 100], [100, 200], [200]];

	const getPriceRange = (priceRange) => {
		const data = () => {
			if (priceRange.length === 1) {
				return priceRange[0] === 25 ? (
					<PriceRange>Under ${priceRange[0]}</PriceRange>
				) : (
					<PriceRange>${priceRange[0]} and Above</PriceRange>
				);
			}
			return (
				<>
					<PriceRange>
						${priceRange[0]} to ${priceRange[1]}
					</PriceRange>
				</>
			);
		};

		return data();
	};

	//minMax input
	const minInput = useRef(null);
	const maxInput = useRef(null);

	const filterData = (value, min, max) => {
		return min <= value.Price && value.Price <= max;
	};

	const HandleInputRange = async (e) => {
		e.preventDefault();

		const categoryData = await GetCategoryData(name);

		const filtered = categoryData.filter((cat) =>
			filterData(cat, minInput.current.value, maxInput.current.value)
		);

		setCategory(filtered);
	};

	const filterFixedRange = async (range) => {
		const categoryData = await GetCategoryData(name);

		const setData = (filtered) => {
			setCategory(filtered);
		};

		if (range.length === 1) {
			if (range[0] === 25) {
				setData(categoryData.filter((cat) => filterData(cat, 0, range[0])));
				return;
			}

			const filtered = categoryData.filter((cat) =>
				filterData(cat, range[0], 999999)
			);
			setCategory(filtered);
			return;
		}

		const filtered = categoryData.filter((cat) =>
			filterData(cat, range[0], range[1])
		);
		setCategory(filtered);
	};

	return (
		<Container>
			<FiltersContainer>
				<ReviewsFilter>
					<p style={{ margin: "0 0 1rem 0", fontWeight: "bold" }}>
						Avg. Customer Review
					</p>
					{StarFilter()}
				</ReviewsFilter>
				<PriceFilter>
					<PriceRangeContainer>
						<p style={{ fontWeight: "bold" }}>Price</p>
						{priceRanges.map((range) => (
							<div
								className="filter-fixed-range"
								onClick={() => filterFixedRange(range)}
							>
								{getPriceRange(range)}
							</div>
						))}
					</PriceRangeContainer>
					<MinMaxContainer onSubmit={(e) => HandleInputRange(e)}>
						<MinMaxInput
							ref={minInput}
							id="min-price"
							placeholder="$ Min"
							required
						/>
						<MinMaxInput
							ref={maxInput}
							id="min-price"
							placeholder="$ Max"
							required
						/>
						<PriceSearchButton type="submit">Go</PriceSearchButton>
					</MinMaxContainer>
				</PriceFilter>
			</FiltersContainer>
			<ResultsContainer>
				<h2>Results</h2>
				<ProductsContainer>
					{category &&
						category.map((product) => (
							<SpecificItem item={product} type={"search"} />
						))}
				</ProductsContainer>
			</ResultsContainer>
		</Container>
	);
}

export default Category;
