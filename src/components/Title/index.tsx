import React, { memo, useState } from "react";
import { Wrapper } from "./style";
import Logo from "src/assets/svg/Logo.svg";
import Tag from "../Tag";
import { Bounce, Rotate } from "react-awesome-reveal";

interface Props {
	children: string;
	h: 1 | 2 | 3 | 4 | 5 | 6;
}

const Title: React.FC<Props> = (props) => {
	const titleArray = props.children.split("");

	const hoverHandler = (e: any) => {
		e.target.closest("span, svg").classList.add("hover");

		setTimeout(() => {
			e.target.closest("span, svg").classList.remove("hover");
		}, 1000);
	};

	return (
		<Wrapper>
			<Tag tagName={"h" + props.h}>
				{titleArray.map((letter, index) => {
					if (letter === "%") return <br key={index} />;

					if (letter === "*") {
						return (
							<Rotate childClassName="letter" delay={90 * index} key={index}>
								<Logo onMouseOver={hoverHandler} className="j" />
							</Rotate>
						);
					}

					if (letter === " ") return " ";

					return (
						<Bounce childClassName="letter" key={index} delay={90 * index}>
							<span onMouseOver={hoverHandler}>{letter}</span>
						</Bounce>
					);
				})}
			</Tag>
		</Wrapper>
	);
};

export default memo(Title);
