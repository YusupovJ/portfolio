import { rem } from "src/helpers/functions";
import styled from "styled-components";

export const Wrapper = styled.header`
	background-color: ${(props) => props.theme.colors.bgSecondary};
	min-height: 100vh;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	width: ${rem(130)};
	position: fixed;
	top: 0;
	left: 0;
	z-index: 1000;
`;

export const Title = styled.div`
	text-align: center;
	width: 100%;
	padding: 20px 0px;
	background-color: #000000;
	div {
		cursor: pointer;
	}

	svg {
		width: 60px;
		height: 60px;
	}

	h3 {
		font-size: ${rem(20)};
		font-family: ${(props) => props.theme.secondaryFont};
		margin: 5px 20px;
	}

	span {
		display: inline-block;
		font-size: ${rem(12)};
	}
`;
