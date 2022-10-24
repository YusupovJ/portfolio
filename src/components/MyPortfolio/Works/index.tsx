import React, { memo } from "react";
import { Fade } from "react-awesome-reveal";
import { works } from "src/helpers/utils/works";
import Img from "src/shared/Img";
import { Row, Work, Wrapper } from "./style";

interface Props {}

const Works: React.FC<Props> = () => {
	return (
		<Wrapper>
			<Row scrollWidth={window.innerWidth - document.documentElement.clientWidth}>
				{works.slice(0, 8).map((work) => {
					return (
						<Work key={work.id} scrollWidth={window.innerWidth - document.documentElement.clientWidth}>
							<Fade>
								<a href={work.link} target="_blank">
									<Img src={work.preview} />
								</a>
							</Fade>
						</Work>
					);
				})}
			</Row>
		</Wrapper>
	);
};

export default memo(Works);
