import { useParams } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import GetSingleProductsData from "../hooks-functions/GetSingleProductData";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";
import HomepageSlickSlider from "../components/HomepageSlickSlider";
import GetAllProductsData from "../hooks-functions/GetAllProductsData";
import AdditionalProductInfo from "../components/AdditionalProductInfo";
import ProductSpecs from "../components/ProductSpecs";
import ReviewsSummary from "../components/ReviewsSummary";
import StarRating from "../components/StarRating";
import { bigTablet, phone, desktop } from "../responsive";
import { v4 as uuidv4 } from "uuid";
// import { TransfromWrapper, TansfromComponent } from "react-zoom-pan-pinch";
import ReactImageMagnify from "react-image-magnify";

const Container = styled.div`
	width: 100%;
	min-height: 100vh;
	display: grid;
	grid-template-columns: 1fr 1.5fr;
	padding: 3rem 0 5rem 0;
	background-color: white;
	position: relative;
`;

const ImagesContainer = styled.div`
	grid-column: 1/1;
	display: flex;
	justify-content: center;
	align-items: flex-start;
	justify-content: flex-start;
	top: 0;

	${desktop({
		gridColumn: "1/3",
	})}
`;

const MainImg = styled.img`
	max-width: 75%;
	aspect-ratio: 1;
	border: 1px solid black;
	cursor: pointer;
	/* margin-right: 0.5rem; */
	display: none;

	${desktop({
		display: "block",
	})}
`;

const ZoomImg = styled(ReactImageMagnify)`
	max-width: 75%;
	aspect-ratio: 1;
	border: "1px solid black";

	${desktop({
		display: "none",
	})}
`;

const SmallImgContainer = styled.div`
	width: 20%;
	aspect-ratio: 2/9;
	display: flex;
	align-items: center;
	flex-direction: column;
	gap: 1rem;
	flex-wrap: wrap;
	column-gap: 0;
`;
const SmallImg = styled.img`
	max-width: 2rem;
	aspect-ratio: 1/1;
	border: 1px solid black;
	cursor: pointer;

	box-shadow: ${(props) => props.selected && "0 0 2px 2px #ee9e0a"};
`;

const InfoContainer = styled.div`
	grid-column: 2/-1;

	${desktop({
		gridColumn: "1/3",
		width: "95%",
		margin: "2rem auto",
	})}
`;

const Title = styled.h2`
	margin: 0;
	width: 80%;

	${phone({
		width: "100%",
	})};
`;

const DescriptionContainer = styled.div`
	display: flex;
	${phone({
		flexDirection: "column",
	})};
`;

const RatingContainer = styled.div`
	display: flex;
	margin: 0.5rem 0;
	gap: 0.5rem;
`;

const Description = styled.div`
	width: 70%;
	display: flex;
	flex-direction: column;

	${phone({
		width: "100%",
	})};
`;

const FeatureBulletContainer = styled.ul`
	margin: 0;
	padding-left: 25px;
`;

const FeatureBullet = styled.li`
	margin: 0;
`;

const BookDescription = styled.div`
	padding-right: 3rem;
	padding-left: 0;
	margin: 0;
`;

const PriceContainer = styled.div`
	display: flex;
	flex-direction: column;
	border: 1px solid #00000030;
	border-radius: 12px;
	padding: 0.5rem;
	align-self: flex-start;
	margin-left: 1rem;
	margin-right: 1rem;

	${phone({
		width: "90%",
		margin: "2rem auto",
	})};
`;

const Price = styled.p`
	color: #b12704;
	font-size: 22px;
	margin: 1rem 0.5rem;
	margin-top: 0.5rem;
`;

const InStock = styled.p`
	color: ${(props) => (props.stockData ? "green" : "red")};
	margin: 0 0 0.6rem 0.5rem;
`;

const Quantity = styled.select`
	width: 35%;
	margin: 0.5rem;
	border-radius: 12px;
	background-color: #f0f2f2;
	cursor: pointer;

	&:hover {
		box-shadow: 0px 0px 10px 1px #336ae276;
	}
`;

const AddToCart = styled.button`
	background-color: #ffd814;
	border: none;
	border-radius: 15px;
	padding: 0.5rem 3.3rem;
	margin: 0.3rem 0 1rem 0;
	cursor: pointer;
	transition: all 0.1s;
	white-space: nowrap;
	&:hover {
		background-color: #e0bf18;
	}
`;

const SpecContainer = styled.div`
	grid-column: 1/3;
	display: flex;
	margin: 4rem 0;

	${bigTablet({
		flexDirection: "column",
	})};

	${phone({
		width: "90%",
		margin: "2rem 0",
	})};
`;

const ReviewsContainer = styled.div`
	grid-column: 1/-1;
	margin: 3rem auto;
	display: flex;
	flex-wrap: wrap;
	gap: 2rem;
`;

const ReviewWrapper = styled.div`
	flex: 1 0 60%;
	margin-right: 5rem;

	${desktop({
		marginRight: "0",
	})};
`;

const SingleReview = styled.div`
	margin: 2rem 1rem;
`;

const ReviewAccount = styled.p`
	width: fit-content;
	margin: 0 1rem;
	text-align: center;
	display: inline-block;
`;

const ReviewTitle = styled.h3`
	font-size: 15px;
`;

const ReviewBody = styled.p`
	max-width: 50rem;

	${desktop({
		maxWidth: "100%",
	})};
`;
const ReviewButton = styled.button`
	background-color: white;
	border: 1px solid #74747436;
	border-radius: 12px;
	font-size: 16px;
	cursor: pointer;
	padding: 0.3rem 0.9rem;
	box-shadow: 0px 0px 10px 1px #00000028;
	transition: 0.2s;

	&:hover {
		background-color: #f1f1f1;
	}
`;

const ReviewReport = styled.p`
	cursor: pointer;
	font-size: 15px;
	color: #504f4f;
`;

function Product() {
	const { id } = useParams();

	const [product, setProduct] = useState(null);

	const [mainImg, setMainImg] = useState();

	const [similarProducts, setSimilarProducts] = useState();

	useEffect(() => {
		getProductData();
		scrollTop();
	}, [id]);

	const scrollTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	const getProductData = async () => {
		const product = await GetSingleProductsData(id);
		setProduct(product);

		//img
		setMainImg(product.Data.main_image.link);

		const productCat = product.Data.categories[1]
			? product.Data.categories[1].name
			: product.Data.categories[0].name;

		const allData = await GetAllProductsData("get-products");

		setSimilarProducts(
			allData.products
				.map((product) => product)
				.flat()
				.filter((item) => filterCategories(item.Data.categories, productCat))
		);
	};

	const filterCategories = (arr, category) => {
		return arr.find(function(ele) {
			return ele.name.toLowerCase().includes(category.toLowerCase());
		});
	};

	const uniqueImages = (images) => {
		let result = [];

		if (!images) return;

		for (let item of images) {
			if (result.indexOf(item.link) === -1) {
				result.push(item.link);
			}
		}

		return result.map((element) => (
			<SmallImg
				key={uuidv4()}
				onMouseEnter={(e) => handleImgChange(e)}
				src={element}
				selected={element === mainImg}
			/>
		));
	};

	const inStock = product && product.Quantity ? true : false;

	//addto Cart
	const quant = useRef();
	const dispatch = useDispatch();
	const { addItem } = bindActionCreators(actionCreators, dispatch);

	const handleAdding = () => {
		return addItem({
			quantity: parseInt(quant.current.value, 10),
			spec: product,
		});
	};

	// change main img
	const handleImgChange = (img) => {
		setMainImg(img.target.src);
	};

	return (
		<Container>
			{product && (
				<>
					<ImagesContainer>
						<SmallImgContainer id="small-img-container">
							{product && uniqueImages(product.Data.images)}
						</SmallImgContainer>
						<MainImg src={mainImg} />
						<ZoomImg
							{...{
								smallImage: {
									alt: "big product image",
									isFluidWidth: true,
									src: mainImg,
								},
								largeImage: {
									src: mainImg,
									width: 1200,
									height: 1800,
								},
								enlargedImageContainerDimensions: {
									width: "187%",
									height: "115%",
								},
							}}
						/>
					</ImagesContainer>

					<InfoContainer>
						<Title>{product.Data.title}</Title>
						<DescriptionContainer>
							<Description>
								<RatingContainer>
									<StarRating rating={product.Data.rating} />
									<p style={{ margin: "0" }}>{product.Data.ratings_total}</p>
								</RatingContainer>

								<Price>
									<span style={{ color: "black", fontSize: "18px" }}>
										Price:
									</span>{" "}
									${product.Price}
								</Price>
								{product.Data.feature_bullets ? (
									<FeatureBulletContainer>
										{product.Data.feature_bullets.map((bullet) => (
											<FeatureBullet key={uuidv4()}>{bullet}</FeatureBullet>
										))}
									</FeatureBulletContainer>
								) : product.Data.specifications ? (
									<FeatureBulletContainer>
										{product.Data.specifications.map((spec) => (
											<FeatureBullet key={uuidv4()}>
												{spec.name} - {spec.value}
											</FeatureBullet>
										))}{" "}
									</FeatureBulletContainer>
								) : (
									<BookDescription>
										{product.Data.book_description}
									</BookDescription>
								)}
							</Description>
							<PriceContainer>
								<Price>${product.Price}</Price>
								<InStock stockData={inStock}>In Stock</InStock>
								<Quantity ref={quant}>
									<option value="1">Qty: 1</option>
									<option value="2">2</option>
									<option value="3">3</option>
								</Quantity>
								<AddToCart
									id="add-to-cart"
									onClick={() => handleAdding()}
									disabled={!inStock}
								>
									Add to Cart
								</AddToCart>
							</PriceContainer>
						</DescriptionContainer>
					</InfoContainer>

					<SpecContainer>
						<ProductSpecs spec={product.Data.specifications} />
						<AdditionalProductInfo
							asin={product.Data.asin}
							customersReviews={<StarRating rating={product.Data.rating} />}
							bestSellRank={product.Data.bestsellers_rank_flat}
							spec={product.Data.specifications}
						></AdditionalProductInfo>
					</SpecContainer>

					<HomepageSlickSlider
						style={{ gridColumn: "1/2" }}
						title={"Additional products to explore"}
						itemsShow={8}
						products={similarProducts && similarProducts}
						type={true}
						similar={true}
					/>

					<ReviewsContainer>
						<ReviewsSummary
							rating={product.Data.rating_breakdown}
							total={product.Data.rating}
							totalNum={product.Data.ratings_total}
						/>
						<ReviewWrapper>
							{product.Data.top_reviews &&
								product.Data.top_reviews.map((review) => (
									<SingleReview key={uuidv4()}>
										<div style={{ display: "flex", alignItems: "center" }}>
											<img src="/images/default-profile.jpg" alt="" />
											<ReviewAccount>{review.profile.name}</ReviewAccount>
										</div>
										<ReviewTitle>{review.title}</ReviewTitle>
										<StarRating rating={review.rating} />
										<ReviewBody>{review.body}</ReviewBody>
										<div style={{ display: "flex", alignItems: "center" }}>
											<ReviewButton>Helpful</ReviewButton>
											<ReviewReport>&nbsp; | &nbsp; Report Abuse</ReviewReport>
										</div>
									</SingleReview>
								))}
						</ReviewWrapper>
					</ReviewsContainer>
				</>
			)}
		</Container>
	);
}

export default Product;
