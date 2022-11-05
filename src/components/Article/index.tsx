import React, { memo } from "react";
import { Fade } from "react-awesome-reveal";
import Tag from "../Tag";
import Title from "../Title";
import { Wrapper } from "./style";

/* Компонент для вывода h2 и p */

interface PropTypes {
	title: string;
	children: React.ReactNode;
	className?: string;
}

const Article: React.FC<PropTypes> = (props) => {
	return (
		<Wrapper className={props.className}>
			<Title h={2}>{props.title}</Title>
			<Fade direction="left" duration={700}>
				<Tag tagName="p">{props.children}</Tag>
			</Fade>
		</Wrapper>
	);
};

export default memo(Article);
