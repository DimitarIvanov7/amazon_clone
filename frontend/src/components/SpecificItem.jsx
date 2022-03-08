
import styled from 'styled-components'


const Container = styled.div`
    background-color: white;
    width: 25%;
    /* min-width:10rem; */
    aspect-ratio: 1 / 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Headline = styled.h2`
    width: fit-content;
    text-align: left;
    font-size: 20px;
`

const Image = styled.img`
    max-width: 80%;
    max-height: 70%;
    cursor: pointer;
`

const Link = styled.a`
    text-decoration: none;
    color: #007185;
    padding: .5rem;
    align-self: flex-start;


    &:hover {
        text-decoration: underline;
        color: #ee9e0a;
    }

`



function SpecificItem({ item, message="More items to consider" }) {


  return (
      <Container>
          <Headline>{message}</Headline>
          <Image src={item.images[1].link} alt="" />
          <Link href="#">See more</Link>
    </Container>
  )
}

export default SpecificItem