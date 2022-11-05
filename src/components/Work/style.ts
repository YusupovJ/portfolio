import styled from "styled-components";

export const Wrapper = styled.div`
	transition: all 0.5s ease 0s;
	position: relative;
	overflow: hidden;
	height: 100%;
	div {
		height: 100%;
	}
	a::before {
		content: "View Project";
		background-color: ${(props) => props.theme.colors.primary};
		border-radius: 50%;
		width: 100px;
		height: 100px;
		padding: 10px;
		position: absolute;
		left: 50%;
		top: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
		color: ${(props) => props.theme.colors.tag};
		z-index: 2;
		transform: translate(-50%, -50%) scale(0);
		transition: all 0.3s ease 0s;
	}
	img {
		transition: all 0.3s ease 0s;
		filter: brightness(65%);
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		object-fit: cover;
		user-select: none;
	}
	&:hover {
		a::before {
			transform: translate(-50%, -50%) scale(1);
		}
		img {
			filter: brightness(100%);
			transform: scale(1.2);
		}
	}

	a:focus {
		&::before {
			transform: translate(-50%, -50%) scale(1);
		}
		img {
			filter: brightness(100%);
			transform: scale(1.2);
		}
	}

	span {
		position: static !important;
	}
`;
