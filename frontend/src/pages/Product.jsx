import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import HomepageSlickSlider from '../components/HomepageSlickSlider'

import StarRating from '../components/StarRating'


const Container = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    padding: 3rem 0 5rem 0;
    background-color: white;
`

const ImagesContainer = styled.div`
    /* width: 40%; */
    grid-column: 1/1;
    display: flex;
    justify-content: center;
`

const MainImg = styled.img`
  max-width: 70%;
  aspect-ratio: 1;
  border: 1px solid black;
  cursor: pointer;
  /* object-fit: cover; */
  /* object-fit: contain; */

  
`

const SmallImgContainer = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`
const SmallImg = styled.img`
  width: 60%;
  height: auto;
  border: 1px solid black;
  cursor: pointer;
`

const InfoContainer = styled.div`
    grid-column: 2/-1;
`

const Title = styled.h2`
    margin: 0;
    width: 80%;
`

const DescriptionContainer = styled.div`
    display: flex;
`

const RatingContainer = styled.div`
  display: flex;
  margin: .5rem 0;
  gap:.5rem;

`

const Description = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
`

const FeatureBulletContainer = styled.ul`
  margin: 0;
  padding-left: 25px;
`

const FeatureBullet = styled.li`
  margin: 0;
  
`

const BookDescription = styled.div`
  padding-right: 3rem;
  padding-left: 0;
  margin: 0;
`

const PriceContainer = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid #00000030;
    border-radius: 12px;
    padding: .5rem;
`

const Price = styled.p`
  color: #B12704;
  font-size: 22px;
  margin: 1rem .5rem;
  margin-top: .5rem;

`

const Quantity = styled.select`
  width: 35%;
  margin: .5rem;
  border-radius: 12px;
  background-color: #F0F2F2;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 0px 10px 1px #336ae276;
  }
`

const AddToCart = styled.button`
  background-color: #FFD814;
  border: none;
  border-radius: 15px;
  padding: .5rem 3.3rem;
  margin: .3rem 0 1rem 0 ;
  cursor: pointer;
  transition: all 0.1s;
  &:hover {
    background-color: #e0bf18;
  }
`

const ReviewsContainer = styled.div`
  grid-column: 1/-1;
  width: 50%;
  margin: 3rem auto;
  
`

const SingleReview = styled.div`
  margin: 2rem 0;
  
`

const ReviewAccount = styled.p`
  width: fit-content;
  margin: 0 1rem;
  text-align: center;
  display: inline-block;
  
`

const ReviewTitle = styled.h3`
  font-size: 15px;
`

const ReviewBody = styled.p`
  
`
const ReviewButton = styled.button`
  background-color: white;
  border: 1px solid #74747436;
  border-radius: 12px;
  font-size: 16px;
  cursor: pointer;
  padding: .3rem .9rem;
  box-shadow: 0px 0px 10px 1px #00000028;
  transition: .2s;

  &:hover {
    background-color: #f1f1f1;
  }
`

const ReviewReport = styled.p`
  cursor: pointer;
  font-size: 15px;
  color: #504f4f;
`





function Product() {
  const { id } = useParams();

  const [product, setProduct] = useState(null)

  useEffect(() => {
      getProductData()
      
  }, [])

  const getProductData = async () => {
      const req = await fetch(`http://localhost:5000/product/${id}`);
      const res = await req.json();

    console.log(res);
    console.log(res.Data);
    setProduct(res.Data)
    // console.log(product);

  
  }


  return (
    <>
        {product &&  
        <Container>
          
          <ImagesContainer>
              <SmallImgContainer id="small-img-container">
                {product.images && product.images.map(img =>
                  <SmallImg src={img.link }/>
                )}
              </SmallImgContainer>
              <MainImg src={product.main_image.link} />
          </ImagesContainer>
          
          <InfoContainer>
            <Title>{product.title}</Title>
              <DescriptionContainer>
                <Description>
                  <RatingContainer>
                    <StarRating rating={product.rating} />
                    <p style={{margin:"0"}}>{product.ratings_total}</p>
                </RatingContainer>
                
  
                <Price><span style={{color:"black", fontSize:"18px"}}>Price:</span> {product.buybox_winner.price ? product.buybox_winner.price.raw : "$25"}</Price>
                {product.feature_bullets ?
                  <FeatureBulletContainer>
                    {product.feature_bullets.map(bullet =>
                      <FeatureBullet>{bullet}</FeatureBullet>
                    )}
                  </FeatureBulletContainer> : product.specifications ? <FeatureBulletContainer>
                    {product.specifications.map(spec =>
                      <FeatureBullet>{spec.name} - {spec.value}</FeatureBullet>
                    )} </FeatureBulletContainer> : <BookDescription>{product.book_description}</BookDescription>
                  }
                </Description>
                <PriceContainer>
                  <Price>{product.buybox_winner.price ? product.buybox_winner.price.raw : "$25"}</Price>
                  <Quantity> 
                    <option value="1">Qty: 1</option>
                    <option value="1">2</option>
                    <option value="2">3</option>
                  </Quantity>
                  <AddToCart>Add to Cart</AddToCart>
              </PriceContainer>
              
            </DescriptionContainer>               
            </InfoContainer>
          {/* <HomepageSlickSlider title={"Additional products to explore"} itemsShow={8} products={products[0]} /> */}
            <ReviewsContainer>
              {product.top_reviews && product.top_reviews.map(review =>
                <SingleReview>
                  <div style={{ display:"flex", alignItems:"center"}}>
                    <img src="/images/default-profile.jpg" alt="" />
                    <ReviewAccount>{review.profile.name}</ReviewAccount>
                  </div>
                  <ReviewTitle>{review.title}</ReviewTitle>
                  <StarRating rating={review.rating} />
                  <ReviewBody>{review.body}</ReviewBody>
                  <div style={{ display:"flex", alignItems:"center"}}>
                    <ReviewButton>Helpful</ReviewButton>
                    <ReviewReport>&nbsp; | &nbsp; Report Abuse</ReviewReport>
                  </div>
                  
                </SingleReview>
              )}
          </ReviewsContainer>
            
        
        </Container>
        
        }
    </>
  )
}

export default Product