import React, { memo, useEffect, useState } from "react";
import { Wrapper } from "./style";

/* Компонент для оборачивания элементов в тег */

interface PropTypes {
	tagName: string;
	children: React.ReactNode;
	gap?: number; // - отступ внутри тега
	noWriteTag?: boolean; // - если true, то тег не записываеться в дом дерево
	className?: string;
}

const Tag: React.FC<PropTypes> = (props) => {
	// не советую убирать этот state, иначе приложение крашиться
	const [loaded, setLoaded] = useState<boolean>(false);

	useEffect(() => {
		setLoaded(true);
	}, []);

	return (
		<Wrapper gap={props.gap} tagName={props.tagName}>
			{loaded &&
				React.createElement(
					props.noWriteTag ? "div" : props.tagName,
					{ className: props.className },
					props.children
				)}
		</Wrapper>
	);
};

export default memo(Tag);
