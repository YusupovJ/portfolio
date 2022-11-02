import { em } from "src/helpers/functions";
import styled from "styled-components";

export const Wrapper = styled.div`
	flex: 1 1 auto;
	position: relative;
	div {
		width: 100%;
		height: 100%;
	}

	@media only screen and (max-width: ${em(1023.98)}) {
		height: 65vw;
		padding: 0px 15px 0px 0px;
	}
`;
