import { em, rem } from "src/helpers/functions";
import styled from "styled-components";

export const Wrapper = styled.article`
	h2 {
		font-size: ${rem(60)};
		color: ${(props) => props.theme.colors.primary};
		div {
			display: inline-block;
		}
	}

	p {
		font-size: ${rem(14)};
	}
	a {
		color: ${(props) => props.theme.colors.primary};
		transition: all 0.3s ease 0s;
		&:hover {
			filter: brightness(60%);
		}
	}

	@media only screen and (max-width: ${em(767.98)}) {
		h2 {
			font-size: ${rem(50)};
		}
	}

	@media only screen and (max-width: ${em(424.98)}) {
		h2 {
			font-size: ${rem(40)};
		}
	}
`;
