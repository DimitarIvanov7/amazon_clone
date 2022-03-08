import styled from 'styled-components'

const Container = styled.ul`
    
`

const Link = styled.li`
  font-weight: ${props => props.head ? "bold" : "normal"};
  list-style-type: none;
  padding-top: 8px;
  color: #d6d3d3;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`


function FooterLinks({ links }) {
    

  return (
      <Container>
          {links.map((link, index) => {
              return <Link head={index===0 && true}>{link}</Link>
                } 
            )}
    </Container>
  )
}

export default FooterLinks