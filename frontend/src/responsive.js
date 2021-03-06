import { css } from "styled-components";

export const bigScreens = (props) => {
	return css`
		@media only screen and (min-width: 1308px) {
			${props}
		}
	`;
};

export const desktop = (props) => {
	return css`
		@media only screen and (max-width: 1090px) {
			${props}
		}
	`;
};

export const bigTablet = (props) => {
	return css`
		@media only screen and (max-width: 775px) {
			${props}
		}
	`;
};

export const phone = (props) => {
	return css`
		@media only screen and (max-width: 555px) {
			${props}
		}
	`;
};
