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
					Since beginning my journey as a freelance developer nearly 10 years ago, I have done remote work for
					agencies, consulted for startups, and collaborated with talented people to create web products for
					both business and consumer use.
					<br />
					<br />
					I create successful responsive websites that are fast, easy to use, and built with best practices.
					The main area of my expertise is front-end development, HTML, CSS, JS, building small and medium web
					apps, custom plugins, features, animations, and coding interactive layouts.
					<br />
					<br />I also have full-stack developer experience with popular open-source CMS like (WordPress,
					Drupal, Magento, Keystone.js and others). <br />
					<br /> Visit my <a href="#">LinkedIn</a> profile for more details or just{" "}
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
