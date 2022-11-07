import React, { memo } from "react";
import { em } from "src/helpers/functions";
import styled from "styled-components";
import Article from "../Article";
import Link from "../Link";
import Section from "../Section";
import Details from "./Details";
import Rank from "./Rank";

const Wrapper = styled.div`
	padding: 100px 20px 100px 0px;
	.skills-section {
		display: flex;
		gap: 20px;
	}
	.column {
		flex: 1 0 50%;
	}

	@media only screen and (max-width: ${em(991.98)}) {
		padding: 20px 20px 20px 0px;
		.skills-section {
			flex-direction: column;
		}
	}
`;

const Skills: React.FC = () => {
	return (
		<Wrapper>
			<Section bg="Skills" position={["left", "top"]} className="skills-section">
				<Article title="Skills & %Experience" className="column">
					When I started my journey into the Frontend world, I started to learn technologies like HTML, CSS
					and JS.
					<br />
					<br />
					Later, I created simple, responsive websites. But then I still did not understand many things,
					because I studied alone and no one helped me.
					<br />
					<br />
					Because of this, I was sent to programming courses, where I learned a lot of different technologies.
					And my list of projects grew.
					<br />
					<br />
					And now I am a good Frontend specialist
					<br />
					<br />
					Visit my <a href="#">LinkedIn</a> profile for more details or just{" "}
					<Link href="/contact">contact me</Link>.
				</Article>
				<div className="column">
					<Details />
					<Rank />
				</div>
			</Section>
		</Wrapper>
	);
};

export default memo(Skills);
