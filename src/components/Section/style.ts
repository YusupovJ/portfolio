import styled from "styled-components";

interface PropTypes {
	position: ["left" | "right", "top" | "bottom"];
}

export const Wrapper = styled.div<PropTypes>`
	section {
		position: relative;
	}
	.bg {
		position: absolute;
		display: inline-block;
		font-family: ${(props) => props.theme.secondaryFont};
		font-size: 400px;
		letter-spacing: 20px;
		${(props) => props.position[0]}: 0;
		${(props) => props.position[1]}: 0;
		color: #fff;
		z-index: -1;
		opacity: 0.1;
	}
`;
