import Link from "next/link";
import React, { memo } from "react";
import Article from "../Article";
import Section from "../Section";
import TagCanvas from "../TagCanvas";
import { Wrapper } from "./style";

interface Props {}

const About: React.FC<Props> = (props) => {
	return (
		<Wrapper>
			<Section bg="About" position={["right", "bottom"]}>
				<Article title="About Me">
					Since Adobe Flash was a complete innovation, alongside with CSS 1.0 and HTML 4.01 as standards of
					the current web I have been passionate about web. <br /> <br /> For over a decade I had many
					opportunities to work in a vast spectrum of <Link href="/skills">web technologies</Link> what let me
					gather a significant amount of various experience. Working for companies and individuals around the
					globe I met and learnt from amazing and ambitious people. <br /> <br /> I currently work remotely
					with a selected freelance client base being open for new opportunities.
				</Article>
			</Section>
			<TagCanvas />
		</Wrapper>
	);
};

export default memo(About);
