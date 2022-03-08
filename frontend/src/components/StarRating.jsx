import styled from 'styled-components'

import { AiOutlineStar } from 'react-icons/ai';

import { AiFillStar } from 'react-icons/ai';

import { BsStarHalf } from 'react-icons/bs';




const Container = styled.div`

    flex-direction: row !important;

    svg {
        color: #ffbb00;
    }
`

function StarRating({ rating }) {
    
    const rounded = Math.floor(rating);

    const starsLeft = 5-rating;

    const starArr = () => {
        let arr = []
        for (let i = 0; i < rounded; i++) {
            arr.push(<AiFillStar size={21}/>)
        }

        if(rating - rounded > .3) {
            arr.push(<BsStarHalf size={21}/>)
        }

        if (starsLeft > 1) {
            for (let i = 0; i < Math.floor(starsLeft); i++) {
                arr.push(<AiOutlineStar size={21}/>)
            }
        }

        return arr
    }

  return (
      <Container id='star-container'>
          {starArr()}
      </Container>
  )
}

export default StarRating