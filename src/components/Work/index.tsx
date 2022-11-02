import { StaticImageData } from "next/image";
import React, { memo } from "react";
import { Fade } from "react-awesome-reveal";
import Img from "src/shared/Img";
import { Wrapper } from "./style";

interface Props {
	link: string;
	preview: StaticImageData;
}

const Work: React.FC<Props> = (props) => {
	return (
		<Wrapper>
			<Fade>
				<a href={props.link} target="_blank" rel="noreferrer">
					<Img src={props.preview} />
				</a>
			</Fade>
		</Wrapper>
	);
};

export default memo(Work);
