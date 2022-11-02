import styled, { keyframes } from "styled-components";
import logo from "src/assets/svg/Logo.svg";

const showing = keyframes`
	from {
		transform: translate(-100%, 0);
	} to {
		transform: translate(0, 0);
	}
`;

const closing = keyframes`
	from {
		transform: translate(0, 0);
	} to {
		transform: translate(-100%, 0);
	}
`;

interface PropTypes {
	active: boolean;
}

export const Wrapper = styled.div<PropTypes>`
	position: fixed;
	top: 0;
	left: 0;
	transform: translate(-100%, 0);
	z-index: 999;
	width: 100%;
	height: 100%;
	background-color: ${(props) => props.theme.colors.bg};
	filter: brightness(115%);
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0px 20px;
	flex-direction: column;
	animation: ${(props) => (props.active ? showing : closing)} 1s ease 0s 1 normal forwards;

	p {
		color: #8d8d8d;
		margin-top: 9px;
		font-size: 9px;
		letter-spacing: 3px;
		margin-bottom: 30px;
	}
`;

export const Logo = styled(logo)`
	width: 30px;
	height: 50px;
`;

export const ProgressBar = styled.div<PropTypes>`
	max-width: 400px;
	width: 100%;
	height: 2px;
	border-radius: ${(props) => props.theme.borderRad};
	overflow: hidden;
	background-color: ${(props) => props.theme.colors.bgSecondary};
	div {
		/* +props.active - либо 0, либо 1 */
		width: ${(props) => +props.active * 100 + "%"};
		transition: width 1s ease 0.5s;
		height: 100%;
		background: rgb(8, 253, 216);
		background: linear-gradient(
			90deg,
			${(props) => props.theme.colors.primary} 0%,
			${(props) => props.theme.colors.secondary} 100%
		);
	}
`;
