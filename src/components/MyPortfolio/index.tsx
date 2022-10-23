import Link from "next/link";
import React, { memo } from "react";
import { Fade } from "react-awesome-reveal";
import { Button } from "src/shared/UI";
import Article from "../Article";
import Section from "../Section";
import { Wrapper } from "./style";

interface Props {}

const MyPortfolio: React.FC<Props> = (props) => {
	return (
		<Wrapper>
			<Section>
				<Article title="My Portfolio">
					A small gallery of recent projects chosen by me. I've done them all together with amazing people
					from companies <br /> around the globe. It's only a drop in the ocean compared to the entire list.
					<br />
					Interested to see some more? Visit <Link href="/works">my work</Link> page.
				</Article>
				<Fade direction="left" duration={700}>
					<Button className="see-more">See more</Button>
				</Fade>
			</Section>
		</Wrapper>
	);
};

export default memo(MyPortfolio);
