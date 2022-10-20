import React, { memo } from "react";
import { links } from "src/helpers/utils/links";
import { Link, Wrapper } from "./style";

interface Props {}

const Links: React.FC<Props> = (props) => {
	return (
		<Wrapper>
			{links.map((link) => {
				return (
					<Link href={link.href} key={link.id} target="_blank">
						{link.icon}
					</Link>
				);
			})}
		</Wrapper>
	);
};

export default memo(Links);
