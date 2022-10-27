import React, { memo } from "react";
import { Fade } from "react-awesome-reveal";
import Tag from "../Tag";
import Title from "../Title";
import { Wrapper } from "./style";

interface Props {
	title: string;
	children: React.ReactNode;
	className?: string;
}

const Article: React.FC<Props> = (props) => {
	return (
		<Wrapper>
			<Title h={2}>{props.title}</Title>
			<Fade direction="left" duration={700}>
				<Tag className={props.className} tagName="p">
					{props.children}
				</Tag>
			</Fade>
		</Wrapper>
	);
};

export default memo(Article);
