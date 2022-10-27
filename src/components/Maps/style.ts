import { em } from "src/helpers/functions";
import styled from "styled-components";

export const Wrapper = styled.div`
	flex: 1 1 auto;
	[class*="ground-pane"] {
		filter: grayscale(1) brightness(35%);
	}
	[class*="copyrights-pane"] {
		display: none;
	}
	@media only screen and (max-width: ${em(1023.98)}) {
		height: 65vw;
		padding: 0px 15px 0px 0px;
	}
`;
