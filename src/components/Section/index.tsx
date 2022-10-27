import React, { memo } from "react";
import Tag from "../Tag";
import { Wrapper } from "./style";

interface Props {
	children: React.ReactNode;
	bg: string;
	position: ["left" | "right", "top" | "bottom"];
	className?: string;
}

const Section: React.FC<Props> = (props) => {
	return (
		<Wrapper position={props.position}>
			<Tag className={props.className} tagName="section">
				{props.children}
				<span className="bg">{props.bg}</span>
			</Tag>
		</Wrapper>
	);
};

export default memo(Section);
