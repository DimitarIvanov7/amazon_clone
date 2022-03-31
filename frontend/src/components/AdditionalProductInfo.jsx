import styled from "styled-components";

import { bigTablet, phone, desktop } from "../responsive";

const Container = styled.div`
	width: 50%;
	margin-left: auto;
	margin-right: 2rem;

	h3 {
		border-bottom: 2px solid #e7e7e7;
		width: 100%;
	}

	${bigTablet({
		width: "90%",
	})}

	${phone({
		width: "90%",
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
		white-space: nowrap;
	}
`;

const Support = styled.p``;

function AdditionalProductInfo({ asin, customersReviews, bestSellRank, spec }) {
	const dataAvailiable = () => {
		const date = [];
		spec.filter((item) => {
			if (item.name === "Date First Available") return date.push(item.value);
		});
		return date.length !== 0 ? date : "August 26, 2019";
	};

	return (
		<Container>
			<h3>Additional Information</h3>
			<Table>
				<tr>
					<th>ASIN</th>
					<td>{asin}</td>
				</tr>
				<tr>
					<th>Customer Reviews </th>
					<td>{customersReviews}</td>
				</tr>
				<tr>
					<th>Best Sellers Rank </th>
					<td>{bestSellRank}</td>
				</tr>
				<tr>
					<th>Date First Available</th>
					<td>{dataAvailiable()}</td>
				</tr>
			</Table>
			<h3>Warranty & Support</h3>
			<Support>
				Amazon.com Return Policy:You may return any new computer purchased from
				Amazon.com that is &apos;dead on arrival,&apos; arrives in damaged
				condition, or is still in unopened boxes, for a full refund within 30
				days of purchase. Amazon.com reserves the right to test &apos;dead on
				arrival&apos; returns and impose a customer fee equal to 15 percent of
				the product sales price if the customer misrepresents the condition of
				the product. Any returned computer that is damaged through customer
				misuse, is missing parts, or is in unsellable condition due to customer
				tampering will result in the customer being charged a higher restocking
				fee based on the condition of the product. Amazon.com will not accept
				returns of any desktop or notebook computer more than 30 days after you
				receive the shipment. New, used, and refurbished products purchased from
				Marketplace vendors are subject to the returns policy of the individual
				vendor.
			</Support>
		</Container>
	);
}

export default AdditionalProductInfo;
