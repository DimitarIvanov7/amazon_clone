import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import GetCategoryData from "../hooks-functions/GetCategoryData";
import SpecificItem from "../components/SpecificItem";
import StarRating from "../components/StarRating";
import { useLocation } from "react-router-dom";
import GetAllProductsData from "../hooks-functions/GetAllProductsData";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";
import { phone } from "../responsive";
import { IoIosArrowDropupCircle } from "react-icons/io";
import { v4 as uuidv4 } from "uuid";

const Container = styled.div`
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	padding-bottom: 5rem;
	width: 100%;
	background-color: white;
	grid-gap: 0.5rem;

	${phone({
		display: "block",
	})}
`;

const ResultsContainer = styled.div`
	grid-column: 2/-1;

	h2 {
		${phone({
			textAlign: "center",
		})}
	}
`;

const ProductsContainer = styled.div`
	display: flex;
	width: 95%;
	flex-wrap: wrap;
	gap: 0.5rem;

	${phone({
		margin: "0 auto",
	})};
`;

const FiltersContainer = styled.div`
	margin-top: 3.5rem;
	grid-column: 1/1;
	display: flex;
	padding-left: 2rem;
	align-items: flex-start;
	flex-direction: column;
	min-width: 12rem;
	background-color: white;
	z-index: 99;

	//make it sticky
	align-self: start;
	position: sticky;
	top: 0;

	${phone({
		padding: "0",
	})}

	.close-filters {
		cursor: pointer;
		margin: 0.5rem 1rem 0 auto;
		display: none;
		${phone({
			display: "block",
		})}
	}

	div,
	svg {
		transition: all 1s ease;
	}

	div {
		${phone({
			height: (props) => !props.open && "0",
			overflowX: (props) => !props.open && "hidden",
			margin: (props) => !props.open && "0",
		})}
	}

	svg {
		${phone({
			transform: (props) => !props.open && " rotate(180deg)",
		})}
	}

	/* ${(props) => {
		if (!props.open)
			return `
	div {
		height: 0;
		overflow-x: hidden;
		margin: 0;
		
	}

	svg {
		transform: rotate(180deg)
	}
	`;
	}} */
`;

const ReviewsFilter = styled.div`
	margin-top: 0.5rem;
	${phone({
		margin: "1.5rem auto",
	})}
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

	${phone({
		margin: "1rem auto",
	})}
`;
const PriceRangeContainer = styled.div`
	p {
		${phone({
			textAlign: "center",
		})}
	}
`;
const PriceRange = styled.p`
	cursor: pointer;

	&:hover {
		text-decoration: underline;
		color: #ee9e0a;
	}

	${phone({
		textAlign: "center",
	})}
`;

const MinMaxContainer = styled.form`
	display: flex;
	max-width: 100%;
	gap: 0.5rem;

	${phone({
		justifyContent: "center",
	})}
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
	//determine if it's category page or search page
	const { name } = useParams();

	const { search } = useLocation();

	const query = new URLSearchParams(search);
	const q = query.get("q");
	const cat = query.get("cat");

	const [category, setCategory] = useState(null);
	useEffect(() => {
		getData();
	}, [name, q, cat]);

	//redux tests
	const dispatch = useDispatch();
	const { initialState } = bindActionCreators(actionCreators, dispatch);
	const getData = async () => {
		const categoryData = name
			? await GetCategoryData(name)
			: await GetAllProductsData("get-products");

		const filteredData = !name ? await formatSortSearch(categoryData) : null;

		initialState({
			state: filteredData ? filteredData : categoryData,
		});
	};

	const searchState = useSelector((state) => state.search);

	useEffect(() => {
		setCategory(searchState.length > 0 && searchState);
	}, [searchState]);

	const formatSortSearch = async (data) => {
		const awaitData = await data;
		return awaitData.products
			.map((product) => product)
			.flat()
			.filter((item) => {
				if (cat === "All Departments")
					return item.Data.title.toLowerCase().includes(q.toLowerCase());
				return (
					filterCategories(item.Data.categories) &&
					item.Data.title.toLowerCase().includes(q.toLowerCase())
				);
			});
	};

	// price ranges
	//minMax input
	const minInput = useRef(null);
	const maxInput = useRef(null);

	const filterData = (value, min, max) => {
		return min <= value.Price && value.Price <= max;
	};

	const filterCategories = (arr) => {
		return arr.find(function(ele) {
			return ele.name.toLowerCase().includes(cat.toLowerCase());
		});
	};

	const HandleInputRange = async (e) => {
		e.preventDefault();

		setCategory(
			searchState.filter((cat) =>
				filterData(cat, minInput.current.value, maxInput.current.value)
			)
		);
	};

	const filterFixedRange = async (range) => {
		const setData = (filtered) => {
			setCategory(filtered);
		};

		if (range.length === 1) {
			if (range[0] === 25) {
				setData(searchState.filter((cat) => filterData(cat, 0, range[0])));
				return;
			}

			const filtered = searchState.filter((cat) =>
				filterData(cat, range[0], 999999)
			);
			setCategory(filtered);
			return;
		}

		const filtered = searchState.filter((cat) =>
			filterData(cat, range[0], range[1])
		);
		setCategory(filtered);
	};

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

	//starfilter
	const filterReview = async (rating) => {
		const filtered = searchState.filter((cat) => cat.Data.rating >= rating);
		setCategory(filtered);
	};

	const StarFilter = () => {
		let arr = [];
		for (let i = 4; i > 0; i--) {
			arr.push(
				<SmallReviewContainer style={{ display: "flex" }}>
					<StarRating rating={i} />{" "}
					<p
						onClick={() => {
							filterReview(i);
							handleCloseFilters();
						}}
						id={i}
					>
						{" "}
						and Up
					</p>
				</SmallReviewContainer>
			);
		}
		return arr;
	};

	const [isFilterOpen, setIsFilterOpen] = useState(false);

	const handleCloseFilters = () => {
		setIsFilterOpen(!isFilterOpen);
	};

	const [isReviewOpen, setIsReviewOpen] = useState();

	return (
		<Container>
			<FiltersContainer open={isFilterOpen}>
				<IoIosArrowDropupCircle
					onClick={handleCloseFilters}
					size={40}
					className="close-filters"
				/>
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
								key={uuidv4()}
								className="filter-fixed-range"
								onClick={() => {
									filterFixedRange(range);
									handleCloseFilters();
								}}
							>
								{getPriceRange(range)}
							</div>
						))}
					</PriceRangeContainer>
					<MinMaxContainer
						onSubmit={(e) => {
							HandleInputRange(e);
							handleCloseFilters();
						}}
					>
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
				<ProductsContainer id="products-container">
					{category &&
						category.map((product) => (
							<SpecificItem
								key={product._id}
								item={product}
								type={"search"}
								keyRev={product._id}
								isOpen={isReviewOpen}
								setIsReviewOpen={setIsReviewOpen}
							/>
						))}
				</ProductsContainer>
			</ResultsContainer>
		</Container>
	);
}

export default Category;
