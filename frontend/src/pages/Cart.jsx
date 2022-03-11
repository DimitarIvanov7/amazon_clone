import styled from "styled-components";

const Container = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: repeat(10 1fr);
`;

const ProductsContainer = styled.div`
	width: 100%;
	grid-column: 1/9;
`;

const TotalInfoContainer = styled.div`
	grid-column: 9/10;
`;

const TotalQuan = styled.p``;

const TotalPrice = styled.p``;

const CheckoutButton = styled.button`
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

const SpecificProductContainer = styled.div``;

function Cart() {
	return (
		<Container>
			<ProductsContainer></ProductsContainer>
			<TotalInfoContainer>
				<div>
					<TotalQuan></TotalQuan>
					<TotalPrice></TotalPrice>
					<CheckoutButton>Proceed Checkout</CheckoutButton>
				</div>
			</TotalInfoContainer>
		</Container>
	);
}

export default Cart;
