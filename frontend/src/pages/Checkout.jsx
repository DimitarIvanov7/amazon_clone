import styled from "styled-components";
import { bigTablet, phone } from "../responsive";
import { v4 as uuidv4 } from "uuid";

const Container = styled.div`
	padding-bottom: 4rem;
	background-color: white;
`;

const ImgContainer = styled.div`
	margin-top: 3rem;
`;

const PositionImg = styled.img`
	${bigTablet({
		width: "30rem",
	})};

	${phone({
		width: "20rem",
	})}
`;

const AddressContainer = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 33%;
	margin: 5rem auto;
	margin-top: 0;
	gap: 1rem;

	${bigTablet({
		width: "50%",
	})}

	${phone({
		width: "80%",
	})}

	input {
		width: 100%;
		height: 1.8rem;
		border: 1px solid black;
		border-radius: 5px;
		font-size: 25px;
	}

	label {
		text-align: left;
		width: 100%;
		font-weight: bold;
		font-size: 17px;
		margin-top: 1rem;
	}

	select {
		height: 2rem;
		width: 100%;
		font-size: large;
		cursor: pointer;
		border-radius: 5px;
		background-color: #f0f2f2;
		transition: 0.3s ease;

		&:hover {
			background-color: #bdbdbd;
		}
	}
`;

const Country = styled.select``;

const Name = styled.input``;

const Address = styled.input``;

const City = styled.input``;

const Region = styled.input``;

const ZipCode = styled.input``;

const Phone = styled.input``;

const Submit = styled.button`
	font-size: 19px;
	background-color: #ffd814;
	border: none;
	border-radius: 15px;
	padding: 0.5rem 3.3rem;
	margin: 1rem 0 1rem 0;
	cursor: pointer;
	transition: all 0.1s;
	&:hover {
		background-color: #e0bf18;
	}
`;

const countries = ["Bulgaria", "USA", "Germany", "UK"];

function Checkout() {
	return (
		<Container>
			<AddressContainer>
				<ImgContainer>
					<PositionImg src="images/checkout.gif" />
				</ImgContainer>
				<h2>Select address</h2>
				<Country>
					{countries.map((country) => (
						<option key={uuidv4()}>{country}</option>
					))}
				</Country>
				<label htmlFor="name">Name: </label>
				<Name id="name" />
				<label htmlFor="address">Address: </label>
				<Address id="address" />
				<label htmlFor="city">City: </label>
				<City id="city" />
				<label htmlFor="region">Region: </label>
				<Region id="region" />
				<label htmlFor="zipcode">Zipcode: </label>
				<ZipCode id="zipcode" />
				<label htmlFor="phone">Phone: </label>
				<Phone id="phone" />
				<Submit>Select address</Submit>
			</AddressContainer>
		</Container>
	);
}

export default Checkout;
