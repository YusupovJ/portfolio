import { rem } from "src/helpers/functions";
import styled from "styled-components";

export const Wrapper = styled.section`
	display: flex;
	padding: 100px 0px;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	h1 {
		font-size: ${rem(103)};
		div {
			display: inline-block;
		}
	}
	.text {
		color: ${(props) => props.theme.colors.textSecondary};
	}

	.button {
		margin: 20px 0px 0px 0px;
	}
`;
