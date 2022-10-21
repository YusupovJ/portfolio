import { em, rem } from "src/helpers/functions";
import styled from "styled-components";

export const Wrapper = styled.header`
	background-color: ${(props) => props.theme.colors.bgSecondary};
	min-height: 100vh;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	width: ${rem(130)};
	position: fixed;
	top: 0;
	left: 0;
	z-index: 1000;
	overflow-y: auto;
	transition: all 0.3s ease 0s;
	@media only screen and (max-width: ${em(991.98)}) {
		width: 100%;
		transform: translate(0, -100%);
		&.open {
			transform: translate(0, 0);
		}
	}
`;

export const Title = styled.div`
	text-align: center;
	width: 100%;
	padding: 20px 0px;
	background-color: #000000;
	div {
		cursor: pointer;
	}

	svg {
		width: 60px;
		height: 60px;
	}

	h3 {
		font-size: ${rem(20)};
		font-family: ${(props) => props.theme.secondaryFont};
		margin: 5px 20px;
	}

	span {
		display: inline-block;
		font-size: ${rem(12)};
	}
`;

export const Toggler = styled.button`
	position: fixed;
	top: 15px;
	right: 15px;
	width: 50px;
	z-index: 9999;
	height: 50px;
	background-color: rgba(0, 0, 0, 0.4);
	border-radius: ${(props) => props.theme.borderRad};
	display: flex;
	flex-direction: column;
	gap: 3px;
	justify-content: space-between;
	padding: 12.5px 7px;
	transition: all 0.3s ease 0s;
	span {
		display: inline-block;
		background-color: #fff;
		width: 100%;
		transition: all 0.3s ease 0s;
		height: 3px;
		transform-origin: left bottom;
	}
	&.open {
		span:first-child {
			transform: rotate(45deg) translate(2px, -5px);
		}
		span:nth-child(2) {
			transform: scale(0);
		}
		span:last-child {
			transform: rotate(-45deg) translate(4px, 5px);
		}
	}

	@media only screen and (min-width: ${em(991.98)}) {
		display: none;
	}
`;
