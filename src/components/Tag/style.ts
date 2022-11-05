import { em, rem } from "src/helpers/functions";
import styled from "styled-components";

interface PropTypes {
	gap?: number;
	tagName?: string;
}

export const Wrapper = styled.div<PropTypes>`
	position: relative;
	margin: 10px 0px;
	&::before,
	&::after {
		font-family: LaBelleAurore;
		color: ${(props) => props.theme.colors.tag};
		font-size: ${rem(16)};
		font-style: italic;
		user-select: none;
	}

	&::before {
		content: "<${(props) => props.tagName}>";
	}
	&::after {
		content: "</${(props) => props.tagName}>";
	}

	& > * {
		padding: 0px 0px 0px ${(props) => (props.gap ?? 15) + "px"};
	}

	@media only screen and (max-width: ${em(424.98)}) {
		& > * {
			padding: 0px 0px 0px 2px;
		}
	}
`;
