import React, { memo } from "react";
import Article from "../Article";
import Link from "../Link";
import Section from "../Section";
import TagCanvas from "../TagCanvas";
import { Wrapper } from "./style";

const About: React.FC = () => {
	return (
		<Wrapper>
			<Section bg="About" position={["right", "bottom"]}>
				<Article title="About Me">
					I started my journey as a Frontend developer when I saw a video about programming on YouTube. And
					then I was carried into this interesting and unexplored world. <br />
					<br /> I first started learning Python because everyone recommended it, but after a while I got
					interested in <Link href="/skills">website development</Link>
				</Article>
			</Section>
			<TagCanvas />
		</Wrapper>
	);
};

export default memo(About);
