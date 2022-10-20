import styled, { keyframes } from "styled-components";

const bounce = keyframes`
	0% {
		transform: scale3d(1, 1, 1);
	}
	30% {
		transform: scale3d(1.25, 0.75, 1);
	}
	40% {
		transform: scale3d(0.75, 1.25, 1);
	}
	50% {
		transform: scale3d(1.15, 0.85, 1);
	}
	65% {
		transform: scale3d(0.95, 1.05, 1);
	}
	75% {
		transform: scale3d(1.05, 0.95, 1);
	}
	100% {
		transform: scale3d(1, 1, 1);
	}
`;

export const Wrapper = styled.div`
	font-family: ${(props) => props.theme.secondaryFont};
	line-height: 0.9;
	.letter {
		transition: all 0.3s ease-out 0s;
		display: inline-block;
	}
	.letter:hover {
		animation: ${bounce} 1s ease-out 0s 1 normal both;
		color: ${(props) => props.theme.colors.primary};
	}
`;
