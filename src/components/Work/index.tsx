import { StaticImageData } from "next/image";
import React, { memo } from "react";
import Img from "src/shared/Img";
import { Wrapper } from "./style";

/* Компонент ссылки на проект */

interface PropTypes extends React.ComponentPropsWithoutRef<"div"> {
	link: string;
	preview: StaticImageData;
}

const Work: React.FC<PropTypes> = (props) => {
	return (
		<Wrapper {...props} className={props.className}>
			<a href={props.link} target="_blank" rel="noreferrer">
				<Img src={props.preview} />
			</a>
		</Wrapper>
	);
};

export default memo(Work);
