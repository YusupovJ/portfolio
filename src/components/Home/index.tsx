import { useRouter } from "next/router";
import React, { memo } from "react";
import { Fade } from "react-awesome-reveal";
import { Button } from "src/shared/UI";
import Tag from "../Tag";
import Title from "../Title";
import { Wrapper } from "./style";

interface Props {}

const Home: React.FC<Props> = (props) => {
	const router = useRouter();

	return (
		<Wrapper>
			<Title h={1}>Hi,%I'm *amshid%web developer</Title>
			<Fade className="text" direction="up" delay={500}>
				<Tag tagName="p">Front End Developer / ReactTS Expert</Tag>
			</Fade>
			<Fade className="button" direction="up" delay={1200}>
				<Button onClick={() => router.push("/contact")}>Contact me</Button>
			</Fade>
		</Wrapper>
	);
};

export default memo(Home);
