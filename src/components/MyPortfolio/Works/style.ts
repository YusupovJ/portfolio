import { em } from "src/helpers/functions";
import styled from "styled-components";

interface PropTypes {
	scrollWidth: number;
}

export const Wrapper = styled.div`
	width: 100%;
	margin: 15px 0px;
	transform: translate(-35px, 0);

	@media only screen and (max-width: ${em(424.98)}) {
		transform: translate(-11px, 0);
	}
`;

export const Row = styled.ul<PropTypes>`
	width: calc(100vw - 130px - ${(props) => props.scrollWidth}px);
	height: 100%;
	top: 0;
	display: flex;
	flex-wrap: wrap;
	@media only screen and (max-width: ${em(991.98)}) {
		width: calc(100vw - ${(props) => props.scrollWidth}px);
	}
`;

export const Work = styled.li<PropTypes>`
	min-height: 300px;
	flex: 1 1 250px;
	transition: all 0.5s ease 0s;
	position: relative;
	overflow: hidden;
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
		transition: all 0.5s ease 0s;
	}
	img {
		transition: all 0.5s ease 0s;
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

	span {
		position: static !important;
	}
	@media only screen and (min-width: ${em(1439.98)}) {
		flex: 1 1 20vw;
	}
`;
