import React, { memo, useState } from "react";
import { works } from "src/helpers/utils/works";
import Article from "../Article";
import Link from "../Link";
import Section from "../Section";
import Work from "../Work";
import { Container, Column, Works, Wrapper } from "./style";

const MagicWall: React.FC = () => {
	// В state-е храниться значение колонны на которую мы навели, а точнее на внутренние элементы
	const [mouseEnter, setMouseEnter] = useState<{ col: number }>({ col: -1 });

	// Делим все проекты на три части, потом отображаем в верстке
	const worksOneThird = works.filter((_, index) => index < works.length / 3);
	const worksTwoThird = works.filter(
		(_, index) => index >= works.length / 3 && index < (works.length * 2) / 3
	);
	const worksThreeThird = works.filter((_, index) => index >= (works.length * 2) / 3);

	// Аргумент col мы передаем каждой колоне отдельно
	const mouseEnterHandler = (col: number) => {
		setMouseEnter({ col });
	};

	const mouseOutHandler = () => {
		setMouseEnter({ col: -1 });
	};

	return (
		<Wrapper>
			<Section className="work-section" bg="Works" position={["left", "top"]}>
				<Article title="My Portfolio">
					A small gallery of quite interesting projects created by me. You can see that
					they are all unique and I used lots of different technologies to create them. If
					you need something like these, you can <Link href="/contact">contact </Link>
					with me.
				</Article>
			</Section>
			<Works>
				<Container>
					<Column className={`col-1${mouseEnter.col === 1 ? " hover" : ""}`}>
						{worksOneThird.map((work) => {
							return (
								<Work
									onMouseEnter={mouseEnterHandler.bind(null, 1)}
									onMouseLeave={mouseOutHandler}
									key={work.id}
									link={work.link}
									preview={work.preview}
									className="work-item"
								/>
							);
						})}
					</Column>
					<Column className={`col-2${mouseEnter.col === 2 ? " hover" : ""}`}>
						{worksTwoThird.map((work) => {
							return (
								<Work
									onMouseEnter={mouseEnterHandler.bind(null, 2)}
									onMouseLeave={mouseOutHandler}
									key={work.id}
									link={work.link}
									preview={work.preview}
									className="work-item"
								/>
							);
						})}
					</Column>
					<Column className={`col-3${mouseEnter.col === 3 ? " hover" : ""}`}>
						{worksThreeThird.map((work) => {
							return (
								<Work
									onMouseEnter={mouseEnterHandler.bind(null, 3)}
									onMouseLeave={mouseOutHandler}
									key={work.id}
									link={work.link}
									preview={work.preview}
									className="work-item"
								/>
							);
						})}
					</Column>
				</Container>
			</Works>
		</Wrapper>
	);
};

export default memo(MagicWall);
