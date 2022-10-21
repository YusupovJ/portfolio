import Link from "next/link";
import React, { Dispatch, memo, SetStateAction } from "react";
import { navbar } from "src/helpers/utils/navbar";
import { Wrapper } from "./style";

interface Props {
	closeMenuOnRedirect: Dispatch<SetStateAction<boolean>>;
}

const Navbar: React.FC<Props> = ({ closeMenuOnRedirect }) => {
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
