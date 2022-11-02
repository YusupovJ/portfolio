import React, { Dispatch, memo, SetStateAction } from "react";
import Link from "src/components/Link";
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
					<Link key={link.id} href={link.href} className="link" onClick={closeMenuOnRedirect}>
						{link.title}
					</Link>
				);
			})}
		</Wrapper>
	);
};

export default memo(Navbar);
