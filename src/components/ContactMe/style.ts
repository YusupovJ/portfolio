import { em } from "src/helpers/functions";
import styled from "styled-components";

export const Wrapper = styled.div`
	display: flex;
	gap: 40px;
	justify-content: space-between;
	> div {
		max-width: 50%;
	}
	@media only screen and (max-width: ${em(1023.98)}) {
		flex-direction: column;
		> div {
			max-width: 100%;
		}
	}
`;
