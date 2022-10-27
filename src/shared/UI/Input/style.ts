import { rem } from "src/helpers/functions";
import styled, { css } from "styled-components";

interface PropTypes {
	variant?: "text" | "number" | "email" | "password";
	visible?: boolean;
}

const errorStyles = css`
	border: 1px solid red;
	box-shadow: 0px 0px 5px red;
`;

const focusStyles = css`
	+ .line {
		width: 100%;
	}
`;

const basicStyled = css`
	padding: 10px 15px;
	background-color: ${(props) => props.theme.colors.bgThird};
	transition: all 0.3s ease 0s;
	display: inline-block;
	width: 100%;
	min-width: 220px;
	color: ${(props) => props.theme.colors.textSecondary};
	border-radius: ${({ theme }) => theme.borderRad};
	font-size: ${rem(18)};
	&[data-error="error"] {
		${errorStyles}
	}
	&:focus {
		${focusStyles}
	}
`;

export const Field = styled.input<PropTypes>`
	${basicStyled}
`;

export const TextAreaField = styled.textarea`
	min-height: 230px;
	${basicStyled}
`;

export const Wrapper = styled.div`
	position: relative;
	display: inline-block;
	position: relative;
	width: 100%;
	.line {
		display: inline-block;
		position: absolute;
		bottom: 0;
		left: 0;
		transition: all 0.3s ease 0s;
		width: 0;
		height: 2px;
		background-color: ${(props) => props.theme.colors.primary};
	}
`;

export const PasswordVisibilityToggler = styled.button`
	background-color: transparent;
	width: 20px;
	position: absolute;
	height: 100%;
	right: 5px;
`;

export const ErrorText = styled.p`
	position: absolute;
	bottom: 0;
	left: 0;
	color: red;
	transform: translate(0, 120%);
	font-weight: 300;
	font-size: ${rem(12)};
`;
