/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Footer from "../Footer";

test("should render Footer component", () => {
	render(<Footer />);
	const FooterElement = screen.getByTestId("footer-1");
	expect(FooterElement).toBeInTheDocument();
});
