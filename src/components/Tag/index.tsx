import React, { memo } from "react";
import { em, rem } from "src/helpers/functions";
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
		user-select: none;
	}
	& > *:not(code) {
		padding: 0px 0px 0px ${(props) => props.gap + "px"};
	}

	@media only screen and (max-width: ${em(767.98)}) {
		& > *:not(code) {
			padding: 0px 0px 0px 5px;
		}
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
