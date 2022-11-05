import React, { memo } from "react";
import { Fade } from "react-awesome-reveal";
import { Date, Text, Title, Wrapper } from "./style";

const Rank: React.FC = () => {
	return (
		<Fade direction="up">
			<Wrapper>
				<Title>Frontend Developer</Title>
				<Date>2021-2022</Date>
				<Text>
					Award-winning Content Marketing Agency specialises in creating and sharing engaging content.
				</Text>
			</Wrapper>
		</Fade>
	);
};

export default memo(Rank);
