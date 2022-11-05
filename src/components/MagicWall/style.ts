import { em } from "src/helpers/functions";
import styled, { keyframes } from "styled-components";

const colMovingX = keyframes`
	from {
		transform: translate(0, 0);
	}

	to {
		transform: translate(calc(-100%), 0);
	}
`;

const colMovingY = keyframes`
	from {
		transform: translate(0, 0);
	}

	to {
		transform: translate(0, calc(-100% + 100vh));
	}
`;

export const Wrapper = styled.div`
	display: flex;
	width: 100%;
	perspective: 600px;
	height: fit-content;
	.work-section {
		align-self: center;
		flex: 1 1 45%;
	}
	@media only screen and (max-width: ${em(767.98)}) {
		flex-direction: column;
	}
`;

export const Column = styled.div`
	flex: 1 1 30%;
	display: flex;
	flex-direction: column;
	gap: 40px 20px;
	flex: 1 1 auto;
	.work-item {
		flex: 0 0 17vw;
		box-shadow: 10px 10px 10px ${(props) => props.theme.colors.bgSecondary};
	}

	&.col-1 {
		animation: ${colMovingY} 5s linear 0s infinite alternate;
		.work-item {
			transform: scale(0.6);
		}
	}
	&.col-2 {
		animation: ${colMovingY} 4s linear 0s infinite alternate-reverse;
		.work-item {
			transform: scale(0.8);
		}
	}
	&.col-3 {
		animation: ${colMovingY} 3s linear 0s infinite alternate;
		.work-item {
			transform: scale(0.9);
		}
	}

	@media only screen and (max-width: ${em(767.98)}) {
		flex-direction: row;
		.work-item {
			min-height: 250px;
		}
		&.col-1 {
			animation: ${colMovingX} 5s linear 0s infinite alternate;
		}
		&.col-2 {
			animation: ${colMovingX} 4s linear 0s infinite alternate-reverse;
		}
		&.col-3 {
			animation: ${colMovingX} 3s linear 0s infinite alternate;
		}
		.work-item {
			flex: 0 0 250px;
		}
	}

	&.hover {
		animation-play-state: paused;
	}
`;

export const Container = styled.div`
	height: fit-content;
	display: flex;
	@media only screen and (max-width: ${em(767.98)}) {
		flex-direction: column;
	}
`;

export const Works = styled.div`
	transform: rotateY(-30deg) translate(-70px, 30px);
	height: 80vh;
	flex: 1 1 55%;
	@media only screen and (min-width: ${em(1440)}) {
		transform: rotateY(-30deg) translate(-10vw, 30px);
	}
	@media only screen and (max-width: ${em(991.98)}) {
		transform: rotateY(-30deg) translate(-50px, 30px);
	}
`;
