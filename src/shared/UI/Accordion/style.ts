import { rem } from "src/helpers/functions";
import styled from "styled-components";

interface PropTypes {
	active: boolean;
}

export const Wrapper = styled.button`
	background: transparent;
	border: 1px solid ${(props) => props.theme.colors.primary};
	border-radius: ${(props) => props.theme.borderRad};
	box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
	cursor: pointer;
	padding: 5px 10px;
	margin: 0px 0px 10px 0px;
`;

export const Row = styled.div<PropTypes>`
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: relative;
	min-height: 30px;
	&::before {
		content: "";
		position: absolute;
		transition: all 0.3s ease 0s;
		bottom: -5px;
		left: 0;
		width: ${(props) => (props.active ? "100%" : "0%")};
		background-color: ${(props) => props.theme.colors.primary};
		height: 1px;
	}
`;

export const Title = styled.h4`
	text-align: left;
	font-weight: 700;
	font-size: ${rem(20)};
	width: 100%;
`;

export const Content = styled.div<PropTypes>`
	max-height: 0;
	overflow: hidden;
	transition: all 0.3s ease;
	text-align: left;
	margin: ${(props) => (props.active ? "10px" : "0px")} 0px 0px;
`;

export const Icon = styled.span<PropTypes>`
	font-size: ${rem(30)};
	position: absolute;
	right: 0;
	transition: all 0.3s ease 0s;
	transform: rotate(${(props) => (props.active ? "45" : "0")}deg);
`;
