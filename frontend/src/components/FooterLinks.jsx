import styled from "styled-components";
import { bigTablet } from "../responsive";
import { v4 as uuidv4 } from "uuid";

const Container = styled.ul`
	padding: ${(props) => (props.type ? "1rem" : "0")};
	${bigTablet({
		minWidth: "17rem",
		margin: "0 auto",
	})}
`;

const Link = styled.li`
	font-weight: ${(props) => (props.head ? "bold" : "normal")};
	list-style-type: none;
	padding-top: 8px;
	color: #d6d3d3;
	cursor: pointer;

	&:hover {
		text-decoration: underline;
	}
`;

function FooterLinks({ links, type }) {
	return (
		<Container type={type} id="footer-link-container">
			{links.map((link, index) => {
				return (
					<Link key={uuidv4()} head={index === 0 && true}>
						{link}
					</Link>
				);
			})}
		</Container>
	);
}

export default FooterLinks;
