import { rem } from "src/helpers/functions";
import styled from "styled-components";

export const Wrapper = styled.button`
	padding: 10px 40px;
	font-size: ${rem(14)};
	letter-spacing: 0.2em;
	border-radius: ${({ theme }) => theme.borderRad};
	transition: all 0.6s ease 0s;
	background-color: transparent;
	border: 1px solid ${({ theme }) => theme.colors.primary};
	color: ${({ theme }) => theme.colors.primary};
	transform-origin: bottom left;
	overflow: hidden;
	position: relative;
	&::before {
		content: "";
		display: inline-block;
		position: absolute;
		top: 0;
		z-index: -1;
		left: 0;
		background-color: ${(props) => props.theme.colors.primary};
		width: 140%;
		height: 100%;
		transition: all 1s ease 0s;
		transform: translate(-120%, 0) skew(-20deg);
	}
	&:active {
		transform: scale(0.95);
	}
	&:focus {
		outline: 1px solid ${({ theme }) => theme.colors.primary};
	}
	&:hover {
		color: ${(props) => props.theme.colors.tag};
		font-weight: 700;
		&::before {
			transform: translate(-10%, 0) skew(-20deg);
		}
	}
`;
