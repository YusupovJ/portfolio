import { rem } from "src/helpers/functions";
import styled from "styled-components";

interface PropTypes {
	gap: number;
}

export const Wrapper = styled.div<PropTypes>`
	& > code {
		font-family: LaBelleAurore;
		color: ${(props) => props.theme.colors.tag};
		font-size: ${rem(16)};
		font-style: italic;
	}
	& > *:not(code) {
		padding: 0px 0px 0px ${(props) => props.gap + "px"};
	}
`;
