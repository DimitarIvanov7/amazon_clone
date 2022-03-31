import styled from "styled-components";

import FooterLinks from "./FooterLinks";
import { phone, bigTablet } from "../responsive";

const Container = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Top = styled.div`
	padding: 3rem 0;
	width: 100%;
	display: flex;
	justify-content: center;
	background-color: #232f3e;

	.wrapper-footer-top {
		display: flex;
		justify-content: center;
		width: 80%;
		gap: 3rem;

		${bigTablet({
			flexWrap: "wrap",
			justifyContent: "space-between",
		})}
	}
`;

const Bottom = styled.div`
	padding: 3rem 0;
	width: 100%;
	display: flex;
	justify-content: center;
	background-color: #0f1111;
	.wrapper-footer-bot {
		display: flex;
		justify-content: center;
		width: 80%;

		${bigTablet({
			flexWrap: "wrap",
			justifyContent: "space-between",
		})}
	}
`;

function Footer() {
	const links = [
		[
			"Get to Know Us",
			"Careers",
			"Blog",
			"About Amazon",
			"Investor Relations",
			"Amazon Devices",
			"Amazon Science",
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
		],
	];

	const linksBottom = [
		["Amazon Music", "Stream millions of songs"],

		["Amazon Advertising", "Find, attract, and engage customers"],

		["Amazon Drive", "Cloud storage from Amazon"],

		["6:00 PM", "Score deals on fashion brands"],

		["AbeBooks", "Books, art & collectibles"],

		["ACX", "Audiobook Publishing Made Easy"],

		["Alexa", "Actionable Analytics for the Web"],
	];

	return (
		<Container id="footer" data-testid="footer-1">
			<Top>
				<div className="wrapper-footer-top">
					{links.map((link, index) => (
						<FooterLinks key={index} links={link}></FooterLinks>
					))}
				</div>
			</Top>
			<Bottom>
				<div className="wrapper-footer-bot">
					{linksBottom.map((link, index) => (
						<FooterLinks key={index} links={link} type={"bottom"}></FooterLinks>
					))}
				</div>
			</Bottom>
		</Container>
	);
}

export default Footer;
