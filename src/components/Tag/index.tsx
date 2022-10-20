import React, { memo } from "react";
import { Wrapper } from "./style";

interface Props {
	name: string;
	children: React.ReactNode;
	gap?: number;
	noWriteTag?: boolean;
}

const Tag: React.FC<Props> = (props) => {
	const openTag = `<${props.name}>`;
	const closeTag = `</${props.name}>`;

	return (
		<Wrapper gap={props.gap ?? 15}>
			<code>{openTag}</code>
			{props.noWriteTag ? <div>{props.children}</div> : React.createElement(props.name, {}, props.children)}
			<code>{closeTag}</code>
		</Wrapper>
	);
};

export default memo(Tag);
