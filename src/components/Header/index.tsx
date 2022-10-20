import React, { memo } from "react";
import { Title, Wrapper } from "./style";
import Logo from "src/assets/svg/Logo.svg";
import Navbar from "./Navbar";
import Links from "./Links";
import { useRouter } from "next/router";

interface Props {}

const Header: React.FC<Props> = (props) => {
	const router = useRouter();

	return (
		<Wrapper>
			<Title>
				<div onClick={() => router.push("/")}>
					<Logo></Logo>
					<h3>Jamshid</h3>
				</div>
				<span>Web Developer</span>
			</Title>
			<Navbar />
			<Links />
		</Wrapper>
	);
};

export default memo(Header);
