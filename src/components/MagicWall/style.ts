import styled, { keyframes } from "styled-components";

const rowMoving = keyframes`
	from {
		transform: translate(0, 0);
	}

	to {
		transform: translate(0, calc(-100% + 100vh));
	}
`;

export const Wrapper = styled.main`
	display: flex;
	width: 100%;
	gap: 20px;
	perspective: 500px;
	.work-article {
		align-self: center;
		flex: 1 1 40%;
	}
`;

export const Row = styled.div`
	flex: 1 1 30%;
	display: flex;
	flex-direction: column;
	gap: 40px 20px;
	flex: 1 1 auto;
	.work-item {
		flex: 0 0 250px;
	}

	&.row-1 {
		animation: ${rowMoving} 8s linear 0s infinite alternate;
		.work-item {
			transform: scale(0.6);
		}
	}
	&.row-2 {
		animation: ${rowMoving} 6s linear 0s infinite alternate-reverse;
		.work-item {
			transform: scale(0.8);
		}
	}
	&.row-3 {
		animation: ${rowMoving} 5s linear 0s infinite alternate;
		.work-item {
			transform: scale(0.9);
		}
	}
`;

export const Container = styled.div`
	height: fit-content;
	display: flex;
	gap: 20px;
`;

export const Works = styled.div`
	transform: rotateY(-20deg) translate(-90px);
	height: 100vh;
	flex: 1 1 60%;
`;
