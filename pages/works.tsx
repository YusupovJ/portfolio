import Head from "next/head";
import { NextPage } from "next";
import MagicWall from "src/components/MagicWall";

const HomePage: NextPage = () => {
	return (
		<>
			<Head>
				<title>JY | Frontend Developer</title>
			</Head>
			<MagicWall />
		</>
	);
};

export default HomePage;
