import React, { memo } from "react";
import Link from "src/components/Link";
import { navbar } from "src/helpers/utils/navbar";
import { Wrapper } from "./style";

interface PropTypes {
	closeMenuOnRedirect: () => void;
}

const Navbar: React.FC<PropTypes> = ({ closeMenuOnRedirect }) => {
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
