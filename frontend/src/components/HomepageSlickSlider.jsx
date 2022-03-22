import Slider from 'react-slick'
import styled from 'styled-components'

import { IoIosArrowBack } from 'react-icons/io';

import { IoIosArrowForward } from 'react-icons/io';

import StarRating from './StarRating';
import { Routes, Link, Route } from "react-router-dom"


const ArrowBtn = styled.div`


`

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 2,
  // autoplaySpeed: 1500,
  // autoplay:true,
  arrows: true,
  prevArrow: <ArrowBtn><IoIosArrowBack size={35}/></ArrowBtn>,
  nextArrow: <ArrowBtn><IoIosArrowForward size={35}/></ArrowBtn>,
};

const SliderContainer = styled.div`
    width: 95%;
    overflow-x: hidden;
    margin: 0 auto;
    background-color: white;
    position: relative;
    

`

const StyledSlider = styled(Slider)`

  .slick-next, .slick-prev {
    background-color: white;
    width:3rem;
    height: 5rem;
    position: absolute;
    cursor: pointer;
    z-index: 6;
    box-shadow: 1px 5px 18px #888888;
    display: flex !important;
    justify-content: center;
    align-items: center;
  }

  .slick-next {
    right: 0;
    top: 10rem;
    margin-right: 1rem
  }

  .slick-prev {
    left: 0;
    top: 10rem;
    margin-left: 1rem
  }

  .slick-list {
    padding: 0 !important;
    width: 100% !important;
    height: 100% !important;
    
    /* &:hover + .slick-next {
      opacity: 1;
    } */
  };

  .slick-track {
  display: flex;
  
  };

  .slick-track .slick-slide {
  display: flex;
  flex-direction: column;
  height: auto;
  align-items: center;
  justify-content: center;
  cursor: pointer;

    div {
      display: flex;
      flex-direction: column;
      align-items: center;

      p {
        display: flex;
        gap: 10px;
        font-size: small;
        color: #007185;
      }
    }
  }
`;

const SlideContainer = styled.div`
    display: flex !important;
    justify-content: center !important;
    align-content: center !important;
    width: 100% !important;
    height: 100% !important;
    
`

const Image = styled.img`
  width: ${props => props.type ? "auto" : "15rem"};
  height: ${props => props.type ? "8rem" : "auto"};;
`

const Headline = styled.h3`
  color: #007185;
  margin: 0 10px;

  &:hover {
    text-decoration: underline;
    color: #ee9e0a;

  }
`

const Price = styled.p`
  color: black !important;
  font-size: 20px !important;
  margin-top: 10px !important;
`

function HomepageSlickSlider({ title, products, itemsShow, type, itemTitle }) {

  const route = (asin) => {
    return `/product/${asin}`
  }
  return (
    <SliderContainer id='slider'>
      <h2 style={{ margin: ".5rem" }}>{title}</h2>
      <StyledSlider {...settings} type={type}>
        {products && products.slice(0, itemsShow).map(product =>
          <SlideContainer>
            <Link to={route(product.Data.asin)}><Image src={product.Data.main_image.link} type={type} /></Link>
            {type &&
              <>
              <p><StarRating rating={product.Data.rating} /> {product.Data.reviews_total}</p>
              <Link to={route(product.Data.asin)}><Headline style={{ display: "block" }}>{product.Data.title}</Headline></Link>
              <Price>${product.Price}</Price>
            </>}
            
            
          </SlideContainer>
        )}
      </StyledSlider>
    </SliderContainer>
  )
}

export default HomepageSlickSlider