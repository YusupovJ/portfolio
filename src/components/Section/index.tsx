import React, { memo } from "react";
import Tag from "../Tag";
import { Wrapper } from "./style";

interface PropTypes {
	children: React.ReactNode;
	bg: string; // - текст на фоне
	position: ["left" | "right", "top" | "bottom"]; // - позиция текста на фоне
	className?: string;
}

const Section: React.FC<PropTypes> = (props) => {
	return (
		<Wrapper position={props.position} className={props.className}>
			<Tag tagName="section" className={props.className}>
				{props.children}
				<span className="bg">{props.bg}</span>
			</Tag>
		</Wrapper>
	);
};

export default memo(Section);
