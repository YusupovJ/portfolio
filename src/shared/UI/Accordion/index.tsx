import React, { useEffect, useRef, useState } from "react";
import { Content, Icon, Row, Title, Wrapper } from "./style";

interface PropTypes {
	children: React.ReactNode;
	title: string;
}

const Accordion: React.FC<PropTypes> = (props) => {
	const [active, setActive] = useState(false);
	const contentRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (contentRef.current) {
			contentRef.current.style.maxHeight = active ? `${contentRef.current.scrollHeight}px` : "0px";
		}
	}, [contentRef, active]);

	const toggleAccordion = () => {
		setActive(!active);
	};

	return (
		<Wrapper onClick={toggleAccordion}>
			<Row active={active}>
				<Title>{props.title}</Title>
				<Icon active={active}>+</Icon>
			</Row>
			<Content ref={contentRef} active={active}>
				<p>{props.children}</p>
			</Content>
		</Wrapper>
	);
};

export default Accordion;
