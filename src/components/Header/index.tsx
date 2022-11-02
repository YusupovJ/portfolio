import React, { memo, useCallback, useEffect, useState } from "react";
import { Title, Toggler, Wrapper } from "./style";
import Logo from "src/assets/svg/Logo.svg";
import Navbar from "./Navbar";
import Links from "./Links";
import { useRouter } from "next/router";
import { bodyGapToggle } from "src/helpers/functions";
import Link from "../Link";

interface Props {}

const Header: React.FC<Props> = (props) => {
	const router = useRouter();
	const [menuVisible, setMenuVisible] = useState<boolean>(false);

	useEffect(() => {
		bodyGapToggle(menuVisible);
	}, [menuVisible]);

	const toggleMenuVisible = () => {
		setMenuVisible(!menuVisible);
	};

	const closeMenuOnRedirect = () => {
		setMenuVisible(false);
	};

	return (
		<>
			<Toggler onClick={toggleMenuVisible} className={menuVisible ? "open" : ""}>
				<span></span>
				<span></span>
				<span></span>
			</Toggler>
			<Wrapper className={menuVisible ? "open" : ""}>
				<Title>
					<Link href="/" onClick={closeMenuOnRedirect}>
						<Logo></Logo>
						<h3>Jamshid</h3>
						<span>Web Developer</span>
					</Link>
				</Title>
				<Navbar closeMenuOnRedirect={closeMenuOnRedirect} />
				<Links />
			</Wrapper>
		</>
	);
};

export default memo(Header);
