import Link from "../Link";
import React, { memo } from "react";
import { Fade } from "react-awesome-reveal";
import { Button } from "src/shared/UI";
import Article from "../Article";
import Section from "../Section";
import { Row, Works, Wrapper } from "./style";
import { works } from "src/helpers/utils/works";
import Work from "../Work";

interface PropTypes {}

const MyPortfolio: React.FC<PropTypes> = (props) => {
	return (
		<Wrapper>
			<Section bg="Work" position={["right", "top"]}>
				<Article title="My Portfolio">
					The small gallery of my projects. But now there are a few project, <br /> because I have just
					started making projects. In the future, this gallery will be a larger than it is now.
					<br />
					<br />
					Interested to see some more? Visit my <Link href="/works">work</Link> page.
				</Article>
				<Fade direction="left" duration={700}>
					<Button className="see-more">See more</Button>
				</Fade>
				<Works>
					<Row>
						{works.map((work) => {
							return (
								<Fade key={work.id}>
									<Work link={work.link} preview={work.preview} />
								</Fade>
							);
						})}
					</Row>
				</Works>
			</Section>
		</Wrapper>
	);
};

export default memo(MyPortfolio);
