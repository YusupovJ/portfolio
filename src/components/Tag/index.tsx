import React, { memo, useEffect, useState } from "react";
import { em, rem } from "src/helpers/functions";
import styled from "styled-components";

interface PropTypes {
	tagName: string;
	children: React.ReactNode;
	gap?: number;
	noWriteTag?: boolean;
	dblGap?: boolean;
}

interface IStyleProps {
	gap?: number;
	tagName?: string;
	dblGap?: boolean;
}

const Wrapper = styled.div<IStyleProps>`
	position: relative;
	margin: 10px 0px;
	&::before,
	&::after {
		font-family: LaBelleAurore;
		color: ${(props) => props.theme.colors.tag};
		font-size: ${rem(16)};
		font-style: italic;
		user-select: none;
	}

	&::before {
		content: "<${(props) => props.tagName}>";
	}
	&::after {
		content: "</${(props) => props.tagName}>";
	}

	& > * {
		padding: 0px 0px 0px ${(props) => (props.gap ?? 15) + "px"};
	}

	@media only screen and (max-width: ${em(424.98)}) {
		& > * {
			padding: 0px 0px 0px 2px;
		}
	}
`;

const Tag: React.FC<PropTypes> = (props) => {
	const [loaded, setLoaded] = useState<boolean>(false);

	useEffect(() => {
		setLoaded(true);
	}, []);

	return (
		<Wrapper gap={props.gap} tagName={props.tagName} dblGap={props.dblGap}>
			{loaded && React.createElement(props.noWriteTag ? "div" : props.tagName, {}, props.children)}
		</Wrapper>
	);
};

export default memo(Tag);
