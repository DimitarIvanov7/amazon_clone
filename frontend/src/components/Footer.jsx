import styled from 'styled-components'

import FooterLinks from './FooterLinks'


const Container = styled.div`
    margin-top: 7rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Top = styled.div`
    padding: 3rem 0;
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: #232F3E;

    .wrapper-footer-top {
        display: flex;
        justify-content: center;
        width: 80%;
        gap: 3rem;
    }
    
`

const Bottom = styled.div`
    padding: 3rem 0;
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: #0F1111;
    .wrapper-footer-bot {
        display: flex;
        justify-content: center;
        width: 80%;
    }
    
`

function Footer() {

    const links = [
        [
            "Get to Know Us",
            "Careers",
            "Blog",
            "About Amazon",
            "Investor Relations",
            "Amazon Devices",
            "Amazon Science"
        ],
        
        [
            "Make Money with Us",
            "Sell products on Amazon",
            "Sell on Amazon Business",
            "Sell apps on Amazon",
            "Become an Affiliate",
            "Advertise Your Products",
            "Self-Publish with Us",
            "Host an Amazon Hub",
            "›See More Make Money with Us",
        ],

        [
            "Amazon Payment Products",
            "Amazon Business Card",
            "Shop with Points",
            "Reload Your Balance",
            "Amazon Currency Converter",
        ],

        [
            "Let Us Help You",
            "Amazon and COVID-19",
            "Your Account",
            "Your Orders",
            "Shipping Rates & Policies",
            "Returns & Replacements",
            "Manage Your Content and Devices",
            "Amazon Assistant",
            "Help",
        ]
    ]

    const linksBottom = [
        [
            "Amazon Music",
            "Stream millions of songs",
        ],

        [
            "Amazon Advertising",
            "Find, attract, and engage customers",
        ],

        [
            "Amazon Drive",
            "Cloud storage from Amazon",
        ],

        [
            "6:00 PM",
            "Score deals on fashion brands",
        ],

        [
            "AbeBooks",
            "Books, art & collectibles",
        ],

        [
            "ACX",
            "Audiobook Publishing Made Easy",
        ],

        [
            "Alexa",
            "Actionable Analytics for the Web",
        ]


    ]

  return (
      <Container id="footer">
          <Top>
              <div className="wrapper-footer-top">
                {links.map(link => <FooterLinks links={link}></FooterLinks>)}
              </div>
            
          </Top>
          <Bottom>
              <div className="wrapper-footer-bot">
                {linksBottom.map(link => <FooterLinks links={link}></FooterLinks>)}
              </div>
          </Bottom>
          
          
    </Container>
  )
}

export default Footer