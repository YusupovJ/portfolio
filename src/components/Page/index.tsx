import React, { memo } from "react";
import { em } from "src/helpers/functions";
import styled from "styled-components";
import Tag from "../Tag";

interface Props {
	children: React.ReactNode;
}

const Main = styled.main`
	padding: 20px 0px 20px 30px;
	@media only screen and (max-width: ${em(991.98)}) {
		padding: 20px 0px 20px 15px;
	}
`;

const Page: React.FC<Props> = (props) => {
	return (
		<Main>
			<Tag name="html" noWriteTag>
				<Tag name="body" gap={0} noWriteTag>
					{props.children}
				</Tag>
			</Tag>
		</Main>
	);
};

export default memo(Page);
