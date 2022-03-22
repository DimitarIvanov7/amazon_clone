import { useParams } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
// import HomepageSlickSlider from "../components/HomepageSlickSlider";
import GetSingleProductsData from "../hooks-functions/GetSingleProductData";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";

import StarRating from "../components/StarRating";

const Container = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: 1fr 1.5fr;
	padding: 3rem 0 5rem 0;
	background-color: white;
`;

const ImagesContainer = styled.div`
	/* width: 40%; */
	grid-column: 1/1;
	display: flex;
	justify-content: center;
`;

const MainImg = styled.img`
	max-width: 70%;
	aspect-ratio: 1;
	border: 1px solid black;
	cursor: pointer;
	/* object-fit: cover; */
	/* object-fit: contain; */
`;

const SmallImgContainer = styled.div`
	width: 20%;
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;
const SmallImg = styled.img`
	width: 60%;
	height: auto;
	border: 1px solid black;
	cursor: pointer;
`;

const InfoContainer = styled.div`
	grid-column: 2/-1;
`;

const Title = styled.h2`
	margin: 0;
	width: 80%;
`;

const DescriptionContainer = styled.div`
	display: flex;
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
`;

const Price = styled.p`
	color: #b12704;
	font-size: 22px;
	margin: 1rem 0.5rem;
	margin-top: 0.5rem;
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
	&:hover {
		background-color: #e0bf18;
	}
`;

const ReviewsContainer = styled.div`
	grid-column: 1/-1;
	width: 50%;
	margin: 3rem auto;
`;

const SingleReview = styled.div`
	margin: 2rem 0;
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

const ReviewBody = styled.p``;
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

	useEffect(() => {
		getProductData();
	}, [id]);

	const getProductData = async () => {
		const product = await GetSingleProductsData(id);

		setProduct(product);
		console.log(product);
	};

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

	return (
		<>
			{product && (
				<Container>
					<ImagesContainer>
						<SmallImgContainer id="small-img-container">
							{product.Data.images &&
								product.Data.images.map((img) => <SmallImg src={img.link} />)}
						</SmallImgContainer>
						<MainImg src={product.Data.main_image.link} />
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
											<FeatureBullet>{bullet}</FeatureBullet>
										))}
									</FeatureBulletContainer>
								) : product.Data.specifications ? (
									<FeatureBulletContainer>
										{product.Data.specifications.map((spec) => (
											<FeatureBullet>
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
								<Quantity ref={quant}>
									<option value="1">Qty: 1</option>
									<option value="2">2</option>
									<option value="3">3</option>
								</Quantity>
								<AddToCart id="add-to-cart" onClick={() => handleAdding()}>
									Add to Cart
								</AddToCart>
							</PriceContainer>
						</DescriptionContainer>
					</InfoContainer>
					{/* <HomepageSlickSlider title={"Additional products to explore"} itemsShow={8} products={products[0]} /> */}
					<ReviewsContainer>
						{product.Data.top_reviews &&
							product.Data.top_reviews.map((review) => (
								<SingleReview>
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
					</ReviewsContainer>
				</Container>
			)}
		</>
	);
}

export default Product;
