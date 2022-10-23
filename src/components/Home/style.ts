import { em, rem } from "src/helpers/functions";
import styled from "styled-components";

export const Wrapper = styled.section`
	display: flex;
	padding: 100px 0px;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	h1 {
		font-size: ${rem(95)};
		div {
			display: inline-block;
		}
	}
	.text {
		color: ${(props) => props.theme.colors.textSecondary};
	}

	.j {
		width: 60px;
		height: 72px;
	}

	.button {
		margin: 20px 0px 0px 0px;
	}

	@media only screen and (max-width: ${em(991.98)}) {
		h1 {
			font-size: ${rem(80)};
		}

		.j {
			width: 50px;
			height: 72px;
		}
	}

	@media only screen and (max-width: ${em(767.98)}) {
		h1 {
			font-size: ${rem(60)};
		}

		.j {
			width: 45px;
			height: 60px;
		}
		.text {
			font-size: ${rem(14)};
		}
	}

	@media only screen and (max-width: ${em(474.98)}) {
		h1 {
			font-size: ${rem(45)};
		}

		.j {
			width: 30px;
			height: 40px;
		}
	}
`;
