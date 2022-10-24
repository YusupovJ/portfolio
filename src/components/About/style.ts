import { em } from "src/helpers/functions";
import styled from "styled-components";

export const Wrapper = styled.div`
	display: flex;
	gap: 5%;
	align-items: center;
	section {
		padding: 100px 0px;
	}
	> * {
		flex: 1 1 45%;
	}
	#myCanvas {
		max-width: 1000px;
		width: 100%;
		position: relative;
		transform: translate(-25px, 0);
	}

	@media only screen and (max-width: ${em(991.98)}) {
		flex-direction: column;
		> * {
			flex: 1 1 auto;
		}
	}
`;
