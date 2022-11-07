import styled, { keyframes } from "styled-components";

const spin = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

export const Wrapper = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	background-color: rgba(0, 0, 0, 0.6);
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const Spinner = styled.div`
	width: 80px;
	height: 80px !important;
	&::after {
		content: " ";
		display: block;
		width: 64px;
		height: 64px;
		margin: 8px;
		border-radius: 50%;
		border: 6px solid #fff;
		border-color: #fff transparent #fff transparent;
		animation: ${spin} 1.2s linear infinite;
	}
`;
