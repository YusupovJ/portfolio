import styled from "styled-components";

interface PropTypes {
	index: number;
}

export const Detail = styled.div`
	p {
		font-size: 18px;
		font-family: ${(props) => props.theme.secondaryFont};
		margin-bottom: 7px;
		display: block;
	}
`;

export const Bar = styled.div<PropTypes>`
	width: 100%;
	height: 3px;
	background-color: ${(props) => props.theme.colors.bgThird};
	border-radius: ${(props) => props.theme.borderRad};
	margin: 0px 0px 20px 0px;
	div {
		width: 0;
		height: 100%;
		background-color: ${(props) => {
			if (props.index === 0 || props.index === 3) {
				return props.theme.colors.primary;
			} else if (props.index === 1) {
				return props.theme.colors.secondary;
			}

			return "rgb(210, 108, 213)";
		}};
		transition: all 0.3s ease 0s;
	}
`;
