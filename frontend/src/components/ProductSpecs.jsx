import styled from "styled-components";

import { bigTablet, phone } from "../responsive";
import { v4 as uuidv4 } from "uuid";

const Container = styled.div`
	width: 40%;
	margin-left: 2rem;
	h3 {
		border-bottom: 2px solid #e7e7e7;
		width: 100%;
	}

	${bigTablet({
		width: "98%",
	})}

	${phone({
		margin: "0 auto",
	})};
`;

const Table = styled.table`
	border-collapse: collapse;

	th,
	td {
		color: #565959;
		text-align: left;
		padding: 10px 20px;
		border: 1px solid #e7e7e7;
	}

	th {
		background-color: #f3f3f3;
	}
`;

const ProductSpecs = ({ spec }) => {
	return (
		<Container>
			<h3>Technical Information</h3>
			<Table>
				{spec.map((element) => (
					<tr key={uuidv4()}>
						<th>{element.name}</th>
						<td>{element.value}</td>
					</tr>
				))}
			</Table>
		</Container>
	);
};

export default ProductSpecs;
