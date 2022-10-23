import React, { memo } from "react";
import { Wrapper } from "./style";

interface Props {
	children: React.ReactNode;
}

const Section: React.FC<Props> = (props) => {
	return <Wrapper tagName="section">{props.children}</Wrapper>;
};

export default memo(Section);
