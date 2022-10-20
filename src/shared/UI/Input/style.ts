import { rem } from "src/helpers/functions";
import styled, { css } from "styled-components";

interface PropTypes {
	variant: "text" | "number" | "email" | "password";
	visible?: boolean;
}

const errorStyles = css`
	border: 1px solid ${({ theme }) => theme.colors.error};
	box-shadow: 0px 0px 5px ${({ theme }) => theme.colors.error};
`;

const focusStyles = css`
	box-shadow: 0px 0px 5px ${({ theme }) => theme.colors.primary};
`;

export const Field = styled.input<PropTypes>`
	border: 1px solid ${({ theme }) => theme.colors.primary};
	padding: 5px 10px;
	transition: all 0.3s ease 0s;
	display: inline-block;
	width: 100%;
	min-width: 220px;
	background-color: transparent;
	color: ${(props) => props.theme.colors.text};
	border-radius: ${({ theme }) => theme.borderRad};
	&[data-error="error"] {
		${errorStyles}
	}
	&[type="number"] {
		padding: 5px 25px 5px 10px;
	}
	&::placeholder {
		font-family: monospace;
	}
	&:focus {
		${focusStyles}
	}
`;

export const Wrapper = styled.div`
	position: relative;
	display: inline-block;
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
	color: ${({ theme }) => theme.colors.error};
	transform: translate(0, 120%);
	font-weight: 300;
	font-size: ${rem(12)};
`;
