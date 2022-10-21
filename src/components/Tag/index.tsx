import React, { memo } from "react";
import { rem } from "src/helpers/functions";
import styled from "styled-components";

interface PropTypes {
	name: string;
	children: React.ReactNode;
	gap?: number;
	noWriteTag?: boolean;
}

const Wrapper = styled.div<{ gap: number }>`
	& > code {
		font-family: LaBelleAurore;
		color: ${(props) => props.theme.colors.tag};
		font-size: ${rem(16)};
		font-style: italic;
	}
	& > *:not(code) {
		padding: 0px 0px 0px ${(props) => props.gap + "px"};
	}
`;

const Tag: React.FC<PropTypes> = (props) => {
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
