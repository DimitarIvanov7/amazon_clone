/* eslint-disable no-useless-escape */
/* eslint-disable no-undef */
describe("add products to the cart", () => {
	it("user can add products", () => {
		cy.visit("http://localhost:3000/");
		//specify category

		cy.get(".sc-kLwhqv").select("Electronics");

		// search for product
		cy.findByTestId("header-1").within(() => {
			cy.findByRole("textbox").type("radar");
			// cy.findByRole("svg");
		});

		cy.get(
			"#main-container > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div"
		).click();
		// filter items
		cy.findByText(/\$200 and above/i).click();
		// click on product

		cy.findByRole("heading", {
			name: /uniden r7 extreme long range laser\/radar detector, built\-in gps w\/ real\-time alerts, dual\-antennas front & rear w\/directional arrows, voice alerts, red light camera and speed camera alerts single/i,
		}).click();
		// add to cart

		cy.findByRole("button", { name: /add to cart/i }).click();
		// visit cart

		cy.get(
			"#main-container > div:nth-child(1) > div:nth-child(1) > a:nth-child(5) > div > svg"
		).click();

		//add more items
		for (let n = 0; n < 5; n++) {
			cy.findByRole("button", { name: /\+/i }).click();
		}

		// click procceed

		cy.findByRole("button", { name: /proceed checkout/i }).click();
	});
});
