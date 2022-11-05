import styled from "styled-components";
import { em } from "src/helpers/functions";

interface ErrorPropTypes {
	maxWidth?: number | string;
	maxHeight?: number | string;
}

export const Error = styled.div<ErrorPropTypes>`
	max-width: ${(props) => props.maxWidth + "px"};
	height: ${(props) => props.maxHeight + "px"};
	position: relative;
	background-color: #f5f5f5;
	svg {
		fill: #8c8c8c;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		position: absolute;
	}
	@media only screen and (max-width: ${(props) => em(Number(props.maxWidth))}) {
		height: 50vw;
	}
`;
