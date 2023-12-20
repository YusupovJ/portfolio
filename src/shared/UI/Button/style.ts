import { rem } from "src/helpers/functions";
import styled, { DefaultTheme, ThemeProps } from "styled-components";

interface PropTypes {
	status?: "" | "loading" | "error" | "success";
}

const getColor = ({ theme, status }: ThemeProps<DefaultTheme> & PropTypes) => {
	switch (status) {
		case "success":
			return theme.colors.success;
		case "error":
			return theme.colors.error;
		default:
			return theme.colors.primary;
	}
};

export const Wrapper = styled.button<PropTypes>`
	padding: 10px 40px;
	font-size: ${rem(14)};
	letter-spacing: 0.2em;
	border-radius: ${({ theme }) => theme.borderRad};
	transition: all 0.6s ease 0s;
	background-color: transparent;
	border: 1px solid ${getColor};
	color: ${getColor};
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
		background-color: ${getColor};
		width: 140%;
		height: 100%;
		transition: all 1s ease 0s;
		transform: translate(-120%, 0) skew(-20deg);
	}
	&:active {
		transform: scale(0.95);
	}
	&:focus {
		outline: 1px solid ${getColor};
	}
	&:hover {
		color: ${(props) => props.theme.colors.tag};
		font-weight: 700;
		&::before {
			transform: translate(-10%, 0) skew(-20deg);
		}
	}

	.button-loader {
		position: absolute;
		top: 50%;
		right: 10px;
		transform: translate(0, -50%);
	}
`;
