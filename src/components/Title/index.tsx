import React, { memo } from "react";
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

	return (
		<Wrapper>
			<Tag name={"h" + props.h}>
				{titleArray.map((letter, index) => {
					if (letter === "%") return <br key={index} />;

					if (letter === "*") {
						return (
							<Rotate triggerOnce childClassName="letter" delay={90 * index} key={index}>
								<Logo className="j" />
							</Rotate>
						);
					}

					if (letter === " ") return " ";

					return (
						<Bounce triggerOnce childClassName="letter" key={index} delay={90 * index}>
							<span>{letter}</span>
						</Bounce>
					);
				})}
			</Tag>
		</Wrapper>
	);
};

export default memo(Title);
