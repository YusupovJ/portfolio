import { em } from "src/helpers/functions";
import styled from "styled-components";

export const Wrapper = styled.div`
	.see-more {
		margin: 20px 0px 0px 0px;
	}
`;

export const Works = styled.div`
	width: 100%;
	margin: 15px 0px;
	transform: translate(-35px, 0);
	@media only screen and (max-width: ${em(424.98)}) {
		transform: translate(-11px, 0);
	}
`;

export const Row = styled.ul`
	width: calc(100vw - 130px);
	height: 100%;
	top: 0;
	display: grid;
	grid-template: 15vw 15vw / repeat(5, 1fr);
	@media only screen and (max-width: ${em(991.98)}) {
		width: calc(100vw);
		grid-template: 200px 200px / repeat(4, 1fr);
		grid-auto-rows: 0px;
	}
	@media only screen and (max-width: ${em(767.98)}) {
		grid-template: repeat(3, 200px) / repeat(auto-fit, minmax(180px, 1fr));
	}
	@media only screen and (max-width: ${em(374.98)}) {
		grid-template: repeat(5, 250px) / minmax(200px, 1fr);
	}
`;
