import { keyframes } from "@emotion/react";
import React, { memo } from "react";
import Reveal from "react-awesome-reveal";
import { skillsDetail } from "src/helpers/utils/skillsDetails";
import { Bar, Detail } from "./style";

const Details: React.FC = () => {
	return (
		<>
			{skillsDetail.map((detail, index) => {
				return (
					<Detail key={detail.id}>
						<p>{detail.title}</p>
						<Bar index={index}>
							<Reveal
								keyframes={keyframes`
									from {
										width: 0;
									} 

									to {
										width: ${detail.percent}%;
									}
								`}
								delay={index * 200}
							>
								<div></div>
							</Reveal>
						</Bar>
					</Detail>
				);
			})}
		</>
	);
};

export default memo(Details);
