import Link from "next/link";
import React, { memo } from "react";
import { navbar } from "src/helpers/utils/navbar";
import { Wrapper } from "./style";

interface Props {}

const Navbar: React.FC<Props> = (props) => {
	return (
		<Wrapper>
			{navbar.map((link) => {
				return (
					<Link key={link.id} href={link.href}>
						{link.title}
					</Link>
				);
			})}
		</Wrapper>
	);
};

export default memo(Navbar);
