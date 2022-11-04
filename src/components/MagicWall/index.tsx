import React, { memo } from "react";
import { works } from "src/helpers/utils/works";
import Article from "../Article";
import Link from "../Link";
import Work from "../Work";
import { Container, Row, Works, Wrapper } from "./style";

interface Props {}

const MagicWall: React.FC<Props> = (props) => {
	const worksOneThird = works.filter((work, index) => index < works.length / 3);
	const worksTwoThird = works.filter((work, index) => index >= works.length / 3 && index < (works.length * 2) / 3);
	const worksThreeThird = works.filter((work, index) => index >= (works.length * 2) / 3);

	console.log(works);

	return (
		<Wrapper>
			<Article title="My Portfolio" className="work-article">
				A small gallery of recent projects chosen by me. I have done them all together with amazing people from
				companies <br /> around the globe. It is only a drop in the ocean compared to the entire list.
			</Article>
			<Works>
				<Container>
					<Row className="row-1">
						{worksOneThird.map((work) => {
							return <Work key={work.id} link={work.link} preview={work.preview} className="work-item" />;
						})}
					</Row>
					<Row className="row-2">
						{worksTwoThird.map((work) => {
							return <Work key={work.id} link={work.link} preview={work.preview} className="work-item" />;
						})}
					</Row>
					<Row className="row-3">
						{worksThreeThird.map((work) => {
							return <Work key={work.id} link={work.link} preview={work.preview} className="work-item" />;
						})}
					</Row>
				</Container>
			</Works>
		</Wrapper>
	);
};

export default memo(MagicWall);
