import { em } from "src/helpers/functions";
import styled from "styled-components";

export const Wrapper = styled.div`
	position: absolute;
	left: 15px;
	top: 15px;
	max-width: 300px;
	width: fit-content;
	height: fit-content !important;
	z-index: 2;
	span {
		color: ${(props) => props.theme.colors.primary};
	}
	@media only screen and (max-width: ${em(767.98)}) {
		display: none;
	}
`;

export const Content = styled.div`
	background-color: rgba(0, 0, 0, 0.8);
	padding: 15px;
	width: 100%;
	height: 100%;
`;
