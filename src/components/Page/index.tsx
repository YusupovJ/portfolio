import React, {memo} from "react";
import styled from "styled-components";
import Tag from "../Tag";

/* Компонент для удобного создания страницы */

interface PropTypes {
	children: React.ReactNode;
}

const Main = styled.main`
	padding: 20px 0px 20px 5px;
	width: 100%;
	min-height: 100vh;
`;

const Page: React.FC<PropTypes> = (props) => {
	return (
		<Main>
			<Tag tagName="html" noWriteTag>
				<Tag tagName="body" gap={0} noWriteTag>
					{props.children}
				</Tag>
			</Tag>
		</Main>
	);
};

export default memo(Page);
